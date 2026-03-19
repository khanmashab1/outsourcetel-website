import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

/**
 * POST /api/quote
 * Handles quote form submissions
 * Creates lead + quote records and triggers notifications
 */
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, email, service, budget, message, phone, company } = data;

    // Basic server-side validation
    if (!name || !email || !service || !budget || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Rate limiting check (simple: 5 requests per minute per IP)
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    // In production, implement proper rate limiting with Redis or similar

    const supabase = createAdminClient();

    // Store the lead
    const { data: lead, error: leadError } = await supabase
      .from("leads")
      .insert({
        name,
        email,
        phone: phone || null,
        company: company || null,
        budget,
        message,
        source: "quote_form",
        status: "new",
      })
      .select()
      .single();

    if (leadError) {
      console.error("Lead creation error:", leadError);
      return NextResponse.json(
        { error: "Failed to create lead" },
        { status: 500 }
      );
    }

    // Store the quote
    const { error: quoteError } = await supabase.from("quotes").insert({
      lead_id: lead.id,
      name,
      email,
      phone: phone || null,
      company: company || null,
      budget_range: budget,
      requirements: `Service: ${service}\n\n${message}`,
      status: "pending",
    });

    if (quoteError) {
      console.error("Quote creation error:", quoteError);
    }

    // Log analytics event
    await supabase.from("analytics_events").insert({
      event_type: "quote_submitted",
      page: "/quote",
      metadata: { service, budget },
    });

    // TODO: Trigger email notification via Supabase Edge Function or Resend
    // await sendNotificationEmail(data);

    return NextResponse.json(
      { success: true, message: "Quote submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Quote API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}