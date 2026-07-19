import Card from "../Card";
import Skeleton from "../Skeleton";

export default function PromptCardSkeleton() {
  return (
    <Card className="overflow-hidden p-0">

      <Skeleton className="h-56 w-full rounded-none" />

      <div className="space-y-4 p-6">

        <Skeleton className="h-6 w-24" />

        <Skeleton className="h-8 w-3/4" />

        <Skeleton className="h-4 w-full" />

        <Skeleton className="h-4 w-5/6" />

        <div className="flex justify-between pt-4">

          <Skeleton className="h-5 w-16" />

          <Skeleton className="h-5 w-16" />

        </div>

        <Skeleton className="h-11 w-full" />

      </div>

    </Card>
  );
}