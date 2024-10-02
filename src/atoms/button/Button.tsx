import { classNames } from "../../utils/classNames";
import styles from "./button.module.scss";
import { Icon, Icons } from "../icon/Icon";

type Props = {
  mode?: "primary" | "secondary" | "tertiary" | "inverted" | "danger" | "success";
  size?: "large" | "default" | "small" | "mini";
  type?: "button" | "submit" | "reset";
  children: any;
  disabled?: boolean;
  icon?: Icons;
  isLoading?: boolean;
  className?: string;
}

export const Button = ({
  mode = "primary",
  size = "default",
  children,
  icon,
  isLoading,
  className,
  disabled,
  type = "button",
  ...props
}: Props) => {
  const componentProps = {
    className: classNames(
      styles["btn"],
      styles[`btn--${mode}`],
      styles[`btn--${size}`],
      "mz-btn",
      className
    ),
    ...props,
  };

  const IconBtn = icon ? <Icon size="small" icon={icon} /> : null;

  // if (hasHref(componentProps)) {
  //   return (
  //     <a {...componentProps} href={componentProps.href}>
  //       {IconBtn}
  //       {isLoading ? "Loading ..." : children}
  //     </a>
  //   );
  // }

  return (
    <button
      {...(componentProps as Props)}
      disabled={isLoading || disabled}
      type={type}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
        {IconBtn}
        {isLoading ? "Loading ..." : children}
      </div>
    </button>
  );
}
