"use client";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { Button } from "@rubin-epo/epo-react-lib";

export default function Submit({
  children,
  className,
  ...restProps
}: Omit<React.ComponentPropsWithoutRef<typeof Button>, "children"> & {
  children: (pending: boolean) => React.ReactNode;
  className: string;
}) {
  const { pending } = useFormStatus();

  return (
    <Button
      className={className}
      type="submit"
      disabled={pending}
      {...restProps}
    >
      {children(pending)}
    </Button>
  );
}
