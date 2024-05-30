import { Navigate } from '@remix-run/react';

export default function Index() {
  return <Navigate to="/dashboard/home" replace />;
}
