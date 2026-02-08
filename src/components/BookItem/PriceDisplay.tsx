import { Box, Text } from "@chakra-ui/react";

interface PriceDisplayProps {
    price: number;
    salePrice?: number;
    isExpanded?: boolean;
}

export const PriceDisplay = ({ price, salePrice, isExpanded = false }: PriceDisplayProps) => {
    const displayPrice = (salePrice && salePrice > 0) ? salePrice : price;
    const hasDiscount = salePrice && salePrice > 0 && salePrice < price;

    if (hasDiscount && isExpanded) {
        return (
            <Box
                display="grid"
                gridTemplateColumns="auto 1fr"
                gap="8px"
                alignItems="baseline"
                justifyItems="end"
            >
                <Text textStyle="small" color="text.subtitle">
                    정가
                </Text>
                <Text textStyle="title3" color="text.primary" fontWeight="normal" textDecoration="line-through">
                    {price.toLocaleString()}원
                </Text>
                <Text textStyle="small" color="text.subtitle">
                    할인가
                </Text>
                <Text textStyle="title3" color="text.primary">
                    {displayPrice.toLocaleString()}원
                </Text>
            </Box>
        );
    }

    return (
        <Text textStyle="title3" color="text.primary" fontWeight="bold">
            {displayPrice.toLocaleString()}원
        </Text>
    );
};
