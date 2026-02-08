import { memo } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
import { type Book } from "../../types/book";
import { BookThumbnail } from "./BookThumbnail";
import { Button } from "../Button";
import { PriceDisplay } from "./PriceDisplay";

interface BookItemProps {
    book: Book;
    isExpanded: boolean;
    onToggleExpand: (isbn: string) => void;
}

export const BookItem = memo(({ book, isExpanded, onToggleExpand }: BookItemProps) => {
    const authorsText = book.authors.join(", ");
    const handleToggle = () => onToggleExpand(book.isbn);

    return (
        <Flex
            w="100%"
            borderBottom="1px solid"
            borderColor="gray"
            borderRadius="8px"
            px="48px"
            py="16px"
            flexDir="column"
        >
            <Flex w="100%" gap="48px" align={isExpanded ? "flex-start" : "center"}>
                <BookThumbnail book={book} isExpanded={isExpanded} />

                <Flex flexDir="column" flex={1} gap="8px">
                    <Flex gap="16px">
                        <Text textStyle="title3" color="text.primary">
                            {book.title}
                        </Text>
                        <Text textStyle="body2" color="text.secondary">
                            {authorsText}
                        </Text>
                    </Flex>

                    {isExpanded && book.contents && (
                        <Box mt="16px">
                            <Text textStyle="body2" fontWeight="bold" color="text.primary" mb="8px">
                                책 소개
                            </Text>
                            <Text textStyle="body2" color="text.secondary" lineHeight="1.6">
                                {book.contents}
                            </Text>
                        </Box>
                    )}
                </Flex>

                {/* Price and Buttons */}
                {isExpanded ? (
                    <Flex flex={1} flexDir="column" align="flex-end" justifyContent="space-between" alignSelf="stretch" minW="240px" maxW="240px" >
                        <Button
                            variant="secondary"
                            textStyle="caption"
                            onClick={handleToggle}
                        >
                            상세보기 <IoChevronUp />
                        </Button>

                        <Flex w='100%' flexDir="column" gap="28px">
                            <Flex flexDir="column" align="flex-end" gap="8px">
                                <PriceDisplay price={book.price} salePrice={book.sale_price} isExpanded />
                            </Flex>

                            <Button
                                w="100%"
                                variant="primary"
                                textStyle="caption"
                                onClick={() => window.open(book.url, "_blank")}
                            >
                                구매하기
                            </Button>
                        </Flex>
                    </Flex>
                ) : (
                    <Flex flexDir="row" align="center" gap="12px">
                        <Box marginEnd="56px">
                            <PriceDisplay price={book.price} salePrice={book.sale_price} />
                        </Box>
                        <Flex gap="8px">
                            <Button
                                variant="primary"
                                textStyle="caption"
                                onClick={() => window.open(book.url, "_blank")}
                            >
                                구매하기
                            </Button>
                            <Button
                                variant="secondary"
                                textStyle="caption"
                                onClick={handleToggle}
                            >
                                상세보기 <IoChevronDown />
                            </Button>
                        </Flex>
                    </Flex>
                )}
            </Flex>
        </Flex>
    );
});
