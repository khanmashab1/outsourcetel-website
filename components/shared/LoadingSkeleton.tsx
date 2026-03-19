import { Skeleton } from "@/components/ui/skeleton";

/**
 * Various loading skeleton components
 * Displayed while data is being fetched
 */
export function CardSkeleton() {
  return (
    <div className="rounded-2xl border p-6 space-y-4">
      <Skeleton className="h-12 w-12 rounded-xl" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  );
}

export function ServicePageSkeleton() {
  return (
    <div className="container mx-auto px-4 py-20 space-y-8">
      <Skeleton className="h-10 w-1/3 mx-auto" />
      <Skeleton className="h-6 w-2/3 mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {Array.from({ length: 6 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-2xl border p-6 space-y-3">
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-8 w-1/3" />
          </div>
        ))}
      </div>
      <div className="rounded-2xl border p-6 space-y-4">
        <Skeleton className="h-6 w-1/4" />
        <Skeleton className="h-[300px] w-full" />
      </div>
    </div>
  );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="rounded-2xl border p-6 space-y-4">
      <div className="flex gap-4 pb-4 border-b">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/4" />
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex gap-4 py-3">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
        </div>
      ))}
    </div>
  );
}