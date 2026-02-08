import { Box, Flex, Text } from "@chakra-ui/react";
import { type ReactNode } from "react";

interface EmptyStateProps {
    illustration?: ReactNode;
    description?: string;
}

export const EmptyState = ({
    illustration = "데이터 없음",
    description
}: EmptyStateProps) => {

    return (
        <Flex
            w="100%"
            direction="column"
            align="center"
            justify="center"
            py="80px"
            gap="16px"
        >
            {typeof illustration === "string" ? <Box>{illustration}</Box> : illustration}
            <Text textStyle="caption" color="text.secondary">
                {description}
            </Text>
        </Flex>
    );
};
