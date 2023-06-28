"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { Button } from "@rubin-epo/epo-react-lib";

export default function Submit({
  children,
}: {
  children: (pending: boolean) => React.ReactNode;
}) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {children(pending)}
    </Button>
  );
}
