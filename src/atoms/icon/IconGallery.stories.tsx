import { Meta, StoryObj } from "@storybook/react";
import * as icons from "../../icons/icons";
import { Icon, Icons } from "./Icon";
import styles from "./inconGallery.module.scss";

const meta: Meta<typeof Icon> = {
  title: "Atoms/IconGallery",
  component: Icon,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className={styles.gallery}>
      {Object.keys(icons).map((iconName) => {
        const { icon, ...restArgs } = args;

        return (
          <div key={iconName} className={styles.iconCard}>
            <Icon icon={iconName as Icons} size="medium" {...restArgs} />
            <span className={styles.iconName}>{iconName}</span>
          </div>
        );
      })}
    </div>
  ),
};
