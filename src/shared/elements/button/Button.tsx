import classnames from "classnames";
import React from "react";
import { IColorTheme } from "shared/interfaces/theme/theme";
import { styled } from "shared/theme";

type Props = {
  children: any;
  className?: string;
  color?: keyof IColorTheme;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({
  children,
  className = "",
  color = "default",
  ...restProps
}) => {
  const buttonClass = classnames("__button", className);

  return (
    <ButtonWrapper {...restProps} color={color} className={buttonClass}>
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<{ color: keyof IColorTheme }>`
  display: inline;

  background: ${(props) => props.theme.colors[props.color]};
  border-color: ${(props) => props.theme.colors[props.color]};
  color: #fff;

  &:hover,
  &:focus {
    color: #fff;
    background: ${(props) => props.theme.colors[props.color]};
    border-color: ${(props) => props.theme.colors[props.color]};
    filter: brightness(0.95);
  }
`;
