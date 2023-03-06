import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { ViewProps } from "./types";

const View = ({ onNext, onPrev, children }: ViewProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.5 }}
    transition={{ duration: 0.5 }}
    style={{ position: "relative" }}
  >
    {children}
    <div>
      {onPrev && <Button onClick={onPrev}>Prev</Button>}
      {onNext && <Button onClick={onNext}>Next</Button>}
    </div>
  </motion.div>
);

export default View;
