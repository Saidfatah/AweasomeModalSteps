import React from "react";
import { Button as AntdButton } from "antd";

const Button = ({ children, onClick }) => {
  return (
    <AntdButton type="primary" onClick={onClick} disabled={false}>
      {children}
    </AntdButton>
  );
};

export default Button;
