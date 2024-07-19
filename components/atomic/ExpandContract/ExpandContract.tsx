import { IconComposer } from "@rubin-epo/epo-react-lib";
import * as Styled from "./styles";
import { forwardRef, MouseEventHandler } from "react";

interface ExpandContractProps {
  isOpen?: boolean;
  onToggle?: MouseEventHandler<HTMLButtonElement>;
  controlsId?: string;
  className?: string;
}

const ExpandContract = forwardRef<HTMLButtonElement, ExpandContractProps>(
  ({ isOpen, onToggle, controlsId, className }, ref) => {
    return (
      <Styled.Button
        ref={ref}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={controlsId}
        className={className}
      >
        <IconComposer size={16} icon={isOpen ? "close" : "expand"} />
      </Styled.Button>
    );
  }
);

ExpandContract.displayName = "Atomic.ExpandContract";

export default ExpandContract;
