import React from "react";
import Button from "./Button";
import { Action, ModalFooterProps } from "./types";
import { Row } from "antd";

const ModalFooter = ({ actions, onActionClick }: ModalFooterProps) => {
  if (!actions || !actions.length) return null;

  return (
    <Row gutter={[16, 16]}>
      {actions.map((action: Action) => (
        <Button
          key={action.title}
          onClick={() => {
            if (action.action) action.action();
            if (action.navigationDirection)
              onActionClick(action.navigationDirection);
          }}
        >
          {action.title}
        </Button>
      ))}
    </Row>
  );
};
export default ModalFooter;
