import { BaseButton } from "./BaseButton";

interface ButtonProps {
  onClick?: () => void;
  children?: any;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return <BaseButton {...props}>{props.children}</BaseButton>;
};
