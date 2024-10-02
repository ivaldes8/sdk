import { ReactNode } from "react";
import { classNames } from "../../utils/classNames";

import styles from "./Alert.module.scss";

type Props = {
  type?: "primary" | "secondary" | "warning" | "danger" | "success" | "info";
  children?: ReactNode;
  className?: string;
};

export const Alert = ({
  children,
  className,
  type = "primary",
  ...props
}: Props) => {
  if (!children) {
    return null;
  }

  const componentProps = {
    className: classNames(
      styles["alert"],
      styles[`alert--${type}`],
      "mz-btn",
      className
    ),
    ...props,
  };

  return (
    <div {...(componentProps as Props)}>
      {children}
    </div>
  );
};
