"use client";

import { FunctionComponent, PropsWithChildren, useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

const StyledComponentsRegistry: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();

    console.log({ styles });

    return <>{styles}</>;
  });

  if (typeof window !== "undefined") return <>{children}</>;

  console.log(styledComponentsStyleSheet.instance);

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
};

export default StyledComponentsRegistry;
