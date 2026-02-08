import { Box, Group, Input, InputElement, type InputProps } from "@chakra-ui/react";
import { type ReactElement, type ReactNode } from "react";

interface CustomInputProps extends Omit<InputProps, "size"> {
    icon?: ReactElement;
    children?: ReactNode;
}

export const CustomInput = ({ icon, children, ...inputProps }: CustomInputProps) => {
    const hasChildren = Boolean(children);
    const paddingLeft = icon ? "48px" : "16px";

    const defaultStyles: InputProps = {
        bg: "transparent",
        border: "none",
        outline: "none",
        w: "100%",
        pl: paddingLeft,
        textStyle: "caption",
        _placeholder: { color: "text.subtitle" },
        _focus: { outline: "none", boxShadow: "none" },
        _focusVisible: { outline: "none", boxShadow: "none" },
        ...inputProps,
    };

    return (
        <Box
            flex={1}
            bg="lightGray"
            borderRadius="100px"
            overflow="hidden"
            css={hasChildren ? {
                "&:focus-within": { borderRadius: "16px" },
                "&:focus-within .children-wrapper": { display: "block" },
            } : undefined}
        >
            {icon ? (
                <Group w="100%" py="8px">
                    <InputElement pointerEvents="none" color="text.primary">
                        {icon}
                    </InputElement>
                    <Input {...defaultStyles} />
                </Group>
            ) : (
                <Input {...defaultStyles} />
            )}
            {hasChildren && (
                <Box className="children-wrapper" display="none" pl={paddingLeft} pr="16px" pb="16px">
                    {children}
                </Box>
            )}
        </Box>
    );
};
