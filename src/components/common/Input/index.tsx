import type { InputHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import theme from "../../../styles/theme";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    leftIcon?: ReactNode
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 100px;
    padding: 10px;
    background-color: ${theme.colors.lightGray};
`;

const IconWrapper = styled.span`
    display: flex;
    align-items: center;
    color: ${theme.colors.text.primary};
`;

const StyledInput = styled.input`
    flex: 1;
    border: none;
    outline: none;
    font-family: 'Noto Sans KR', sans-serif;
    color: ${theme.colors.text.primary};
    background-color: transparent;

    &::placeholder {
        color: ${theme.colors.text.subtitle};
    }
`;

const Input = ({ leftIcon, ...props }: InputProps) => {
    return (
        <Wrapper>
            {leftIcon && <IconWrapper>{leftIcon}</IconWrapper>}
            <StyledInput {...props} />
        </Wrapper>
    )
}

export default Input;