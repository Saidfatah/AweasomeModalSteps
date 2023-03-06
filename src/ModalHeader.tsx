import React from "react";
import Button from "./Button";
import { Row, Col } from "antd";
import { Action, ModalHeaderProps } from "./types";

const ModalHeader = ({ actions, title, onActionClick }: ModalHeaderProps) => (
  <Row gutter={[16, 16]}>
    <Col span={16}>
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
    </Col>
    <Col span={8}>
      <div style={{ marginBottom: 16 }}>
        <h3>{title}</h3>
      </div>
    </Col>
  </Row>
);

export default ModalHeader;
