import React from "react";

import { classNames } from "../../utils/classNames";

import * as icons from "../../icons/icons";

import styles from "./Icon.module.scss";

export type Icons = keyof typeof icons;

type Props = {
  icon: Icons;
  size?: "small" | "medium" | "large" | "xl";
  onClick?: () => void;
  className?: string;
}

export const Icon = ({
  size = "medium",
  className = "",
  icon = "arrowDown",
  ...props
}: Props) => {
  return (
    <span
      className={classNames(styles["icon"], styles[`icon--${size}`], className)}
      {...props}
    >
      {React.createElement(icons[icon])}
    </span>
  );
};
