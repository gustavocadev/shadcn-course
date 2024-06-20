import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { payments } from "~/data/payments.data";

export async function loader({ request }: LoaderFunctionArgs) {
  return payments;
}

export default function DataTable() {
  const data = useLoaderData<typeof loader>();
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
