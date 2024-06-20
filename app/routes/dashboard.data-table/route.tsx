import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { payments } from "~/data/payments.data";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export async function loader({ request }: LoaderFunctionArgs) {
  return payments;
}

export default function DataTablePage() {
  const data = useLoaderData<typeof loader>();
  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  );
}
