import { Button as ChakraButton, type ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends Omit<ChakraButtonProps, "variant"> {
    variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, ChakraButtonProps> = {
    primary: {
        bg: "primary",
        color: "white",
        borderRadius: "8px",
        _hover: { opacity: 0.9 },
    },
    secondary: {
        bg: "lightGray",
        color: "text.secondary",
        borderRadius: "8px",
    },
    outline: {
        bg: "transparent",
        border: "1px solid",
        borderColor: "gray",
        color: "text.primary",
        borderRadius: "8px",
        _disabled: { opacity: 0.5, cursor: "not-allowed" },
    },
};

export const Button = ({ variant = "primary", ...props }: ButtonProps) => {
    return <ChakraButton {...variantStyles[variant]} {...props} />;
};
