import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

/**
 * POST /api/contact
 * Handles contact form submissions
 */
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const supabase = createAdminClient();

    // Create a lead from the contact
    const { error } = await supabase.from("leads").insert({
      name,
      email,
      message: `Subject: ${subject}\n\n${message}`,
      source: "contact_form",
      status: "new",
    });

    if (error) {
      console.error("Contact form error:", error);
      return NextResponse.json(
        { error: "Failed to submit" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}