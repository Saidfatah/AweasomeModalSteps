import { ReactNode } from "react";

export type Action = {
  title: string;
  action: () => void;
  navigationDirection?: NavigationDirections;
};
export type View = {
  id: string;
  title: string;
  content: JSX.Element;
  headerActions: Action[];
  footerActions?: Action[];
};

export type ModalWithStepsProps = {
  visible: boolean;
  onCancel: () => void;
  views: View[];
};
export type ModalFooterProps = {
  actions: Action[];
  onActionClick: (direction: NavigationDirections) => void;
};
export type ModalHeaderProps = {
  actions: Action[];
  onActionClick: (direction: NavigationDirections) => void;
  title: string;
};
export type ViewProps = {
  onNext: () => void;
  onPrev: () => void;
  children: ReactNode;
};
export enum NavigationDirections {
  Next,
  Previous
}
