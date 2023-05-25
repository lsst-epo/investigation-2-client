"use client";

import Link from "next/link";
import { Container } from "@rubin-epo/epo-react-lib";

const InvestigationNotFound = () => {
  return (
    <Container>
      <h1>Investigation not found</h1>
      <Link href="/">Return home</Link>
    </Container>
  );
};

export default InvestigationNotFound;
