import styled, { css } from "styled-components";
import theme from "../../../styles/theme";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = 'primary' | 'outline'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    rightIcon?: ReactNode;
}

const variantStyles = {
    primary: css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: none;

    &:hover { 
        opacity: 0.9; 
    }
    `,
    outline: css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.text.secondary};
    border: 1px solid ${theme.colors.gray};

    &:hover { 
        background-color: ${theme.colors.lightGray};
    }
    `
}

// rightIcon은 children 옆에서 별도 렌더링하므로 제외
const StyledButton = styled.button<Omit<ButtonProps, 'rightIcon'>>`
    display: flex;
    align-items: center;
    gap: 4px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    white-space: nowrap;

    ${({ variant = 'primary' }: ButtonProps) => variantStyles[variant]}

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const Button = ({ children, rightIcon, ...props }: ButtonProps) => {
    return <StyledButton {...props}>
        {children}
        {rightIcon && rightIcon}
    </StyledButton>;
};

export default Button;