/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface BaseButtonProps {
  onClick?: () => void;
  children?: any;
}

export const BaseButton: React.FC<BaseButtonProps> = (props) => {
  return (
    <button
      css={css`
        margin: 0;
        padding: 0;
        outline: none;
        border-radius: 0;
        background-color: transparent;
        line-height: inherit;
        width: max-content;
        border: none;
        color: #efefef;
      `}
      {...props}
    >
      {props.children}
    </button>
  );
};
