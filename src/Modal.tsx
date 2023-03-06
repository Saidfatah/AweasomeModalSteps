import React, { useState } from "react";
import { Modal, Row, Col } from "antd";
import Card from "./Card";
import View from "./View";
import ModalHeader from "./ModalHeader";
import { ModalWithStepsProps, NavigationDirections } from "./types";
import ModalFooter from "./ModalFooter";
import { AnimatePresence, motion } from "framer-motion";
const ModalWithSteps = ({ visible, onCancel, views }: ModalWithStepsProps) => {
  const [currentViewIndex, setCurrentViewIndex] = useState(0);

  const handleNext = () => {
    setCurrentViewIndex(currentViewIndex + 1);
  };

  const handlePrev = () => {
    setCurrentViewIndex(currentViewIndex - 1);
  };

  const currentView = views[currentViewIndex];
  const currentViewHeaderActions = currentView.headerActions;
  const currentViewFooterActions = currentView.footerActions;
  const headerTitle = currentView.title;

  const onActionClick = (navigationDirection: NavigationDirections) => {
    if (navigationDirection === NavigationDirections.Next) handleNext();
    if (navigationDirection === NavigationDirections.Previous) handlePrev();
  };

  return (
    <Modal
      open={visible}
      onCancel={onCancel}
      footer={
        <ModalFooter
          onActionClick={onActionClick}
          actions={currentViewFooterActions}
        />
      }
    >
      <ModalHeader
        onActionClick={onActionClick}
        title={headerTitle}
        actions={currentViewHeaderActions}
      />

      <Card>
        <Row gutter={[16, 16]}>
          <Col span={16}>
            <AnimatePresence
              onExitComplete={() => console.log("exit")}
              initial={false}
              mode="wait"
            >
              <View
                onNext={
                  currentViewIndex < views.length - 1 ? handleNext : undefined
                }
                onPrev={currentViewIndex > 0 ? handlePrev : undefined}
              >
                {currentView.content}
              </View>
            </AnimatePresence>
          </Col>
        </Row>
      </Card>
    </Modal>
  );
};

export default ModalWithSteps;
