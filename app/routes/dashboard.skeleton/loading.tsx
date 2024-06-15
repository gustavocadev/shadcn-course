import { Card, CardFooter, CardHeader } from '~/components/ui/card';
import { Skeleton } from '~/components/ui/skeleton';

export const CardSkeleton = () => {
  return (
    <>
      {Array.from({ length: 9 }).map((_, idx) => (
        <Card key={idx}>
          <CardHeader className="flex-row">
            <Skeleton className="rounded-full mr-2 w-10 h-10" />
            <div className="flex-1">
              <Skeleton className="w-1/2 h-4 mb-2" />
              <Skeleton className="w-full h-3 mb-2" />
            </div>
          </CardHeader>
          <CardFooter className="flex justify-end">
            <Skeleton className="h-8 w-20" />
          </CardFooter>
        </Card>
      ))}
    </>
  );
};
