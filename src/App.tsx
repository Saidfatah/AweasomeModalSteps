import React, { useState } from "react";
import ModalWithSteps from "./Modal";
import { Button, Card } from "antd";
import { NavigationDirections, View } from "./types";

const views: View[] = [
  {
    id: "ID_1",
    title: "Step 1",
    content: <p>This is step 1</p>,
    headerActions: [
      {
        title: "step1 action",
        action: () => {
          console.log("action");
        }
      }
    ],
    footerActions: [
      {
        title: "Previous",
        action: () => {
          console.log("footer action 1");
        },
        navigationDirection: NavigationDirections.Next
      }
    ]
  },
  {
    id: "ID_2",
    title: "Step 2",
    content: <p>This is step 2</p>,
    headerActions: [
      {
        title: "back to step1",
        action: () => {
          console.log("back to step 1");
        },
        navigationDirection: NavigationDirections.Previous
      },
      {
        title: "step2 action",
        action: () => {
          console.log("step 2 action");
        }
      }
    ],
    footerActions: [
      {
        title: "Previous 1",
        action: () => {
          console.log("footer action 1");
        },
        navigationDirection: NavigationDirections.Next
      }
    ]
  },
  {
    id: "ID_3",
    title: "Step 3",
    content: <p>This is step 3</p>,
    headerActions: [
      {
        title: "Previous 2",
        action: () => {
          console.log("footer action 1");
        },
        navigationDirection: NavigationDirections.Next
      },
      {
        title: "Submit",
        action: () => {
          console.log("redirect somewhere");
        }
      }
    ]
  }
];

const App = () => {
  const [visible, setVisible] = useState(false);

  const handleOpenModal = () => {
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button onClick={handleOpenModal}>Open Modal</Button>
      <ModalWithSteps
        visible={visible}
        onCancel={handleCloseModal}
        views={views}
      />
    </div>
  );
};

export default App;
