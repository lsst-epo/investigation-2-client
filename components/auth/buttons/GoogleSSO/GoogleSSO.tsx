"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";
import Button from "./Button";

const GOOGLE_APP_ID = process.env.NEXT_PUBLIC_GOOGLE_APP_ID;

export default function GoogleSSO({ onError }: { onError: () => void }) {
  if (!GOOGLE_APP_ID) return null;

  return (
    <GoogleOAuthProvider clientId={GOOGLE_APP_ID}>
      <Button onError={onError} />
    </GoogleOAuthProvider>
  );
}
