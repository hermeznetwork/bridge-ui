import { FC } from "react";

import { AsyncTask, Token } from "src/domain";
import { Button } from "src/views/shared/button/button.view";
import { useEnvContext } from "../../../../contexts/env.context";

interface BridgeButtonProps {
  approvalTask: AsyncTask<null, string>;
  isDisabled?: boolean;
  isTxApprovalRequired: boolean;
  onApprove: () => void;
  onBridge: () => void;
  token: Token;
}

export const BridgeButton: FC<BridgeButtonProps> = ({
  approvalTask,
  isDisabled = false,
  isTxApprovalRequired,
  onApprove,
  onBridge,
  token,
}) => {
  const bridgeButton = (
    <Button disabled={isDisabled} onClick={onBridge}>
      Bridge
    </Button>
  );

  const env = useEnvContext();


  if (isTxApprovalRequired) {
    switch (approvalTask.status) {
      case "pending": {
        return (
          <Button onClick={onApprove}>
            {`Allow ${env?.networkName} Bridge to spend my ${token.symbol}`}
          </Button>
        );
      }
      case "loading":
      case "reloading": {
        return <Button isLoading>Waiting for approval</Button>;
      }
      case "failed": {
        return <Button disabled={true}>Bridge</Button>;
      }
      case "successful": {
        return bridgeButton;
      }
    }
  } else {
    return bridgeButton;
  }
};
