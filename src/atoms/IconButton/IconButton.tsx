import React from "react";

import { classNames } from "../../utils/classNames";

import { Icon, Icons } from "../Icon/Icon";

import styles from "./IconButton.module.scss";

type HtmlButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> & {
  href?: undefined;
};

type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "children"
> & {
  href: string;
};

export interface IconButtonProps {
  mode?: "light" | "dark" | "success";
  size?: "large" | "medium" | "small";
  href?: string;
  label: string;
  icon: Icons;
}

interface Overload {
  (props: HtmlButtonProps & IconButtonProps): JSX.Element;
  (props: AnchorProps & IconButtonProps): JSX.Element;
}

const hasHref = (props: HtmlButtonProps | AnchorProps): props is AnchorProps =>
  "href" in props;

export const IconButton: Overload = ({
  mode = "light",
  size = "medium",
  label,
  icon,
  ...props
}) => {
  const iconSize = size === "large" ? "large" : "medium";

  const componentProps = {
    className: classNames(
      styles["icon-btn"],
      styles[`icon-btn--${mode}`],
      styles[`icon-btn--${size}`]
    ),
    "aria-label": label,
    ...props,
  };

  if (hasHref(componentProps)) {
    return (
      <a {...componentProps} href={componentProps.href}>
        <Icon icon={icon} size={iconSize} />
      </a>
    );
  }

  return (
    <button {...componentProps} onClick={componentProps.onClick}>
      <Icon icon={icon} size={iconSize}/>
    </button>
  );
};
