import React, { InputHTMLAttributes, ReactNode } from "react";
import { IconType } from "react-icons";
import * as Styles from "./style";

type InputIconProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode;
};

function InputIcon({ icon, ...rest }: InputIconProps) {
  return (
    <div className="input-icon-container">
      <Styles.Input {...rest} />
      {icon && <Styles.Icon className="icon">{icon}</Styles.Icon>}
    </div>
  );
}

export default InputIcon;
