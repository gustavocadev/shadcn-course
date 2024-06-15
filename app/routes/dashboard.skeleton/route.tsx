import { Button } from '~/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Await, defer, useLoaderData } from '@remix-run/react';
import { Suspense } from 'react';
import { CardSkeleton } from './loading';

export async function loader() {
  const getData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return Array.from({ length: 9 });
  };

  return defer({ data: getData() });
}

export default function SkeletonPage() {
  const { data } = useLoaderData<typeof loader>();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      <Suspense fallback={<CardSkeleton />}>
        <Await resolve={data}>
          {(data) => (
            <>
              {data.map((_, idx) => (
                <Card key={idx}>
                  <CardHeader className="flex-row">
                    <img
                      src="https://github.com/shadcn.png"
                      alt="skeleton"
                      width={40}
                      height={40}
                      className="rounded-full mr-2 w-10 h-10"
                    />
                    <div>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </div>
                  </CardHeader>
                  <CardFooter className="flex justify-end">
                    <Button>Mas</Button>
                  </CardFooter>
                </Card>
              ))}
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
}
