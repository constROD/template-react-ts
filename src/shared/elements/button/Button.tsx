import classnames from "classnames";
import React from "react";
import { styled } from "shared/theme";

type Props = {
  children: any;
  className?: string;
  variant?: string;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({
  children,
  className = "",
  ...restProps
}) => {
  const buttonClass = classnames("__button", className);

  return (
    <ButtonWrapper className={buttonClass} {...restProps}>
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button``;
