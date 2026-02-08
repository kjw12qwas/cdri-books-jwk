import { useState, useCallback } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { BookItem } from "../BookItem";
import { EmptyState } from "../EmptyState";
import type { Book } from "../../types/book";

interface BookListProps {
    books: Book[];
    isLoading?: boolean;
    emptyMessage?: string;
}

export const BookList = ({ books, isLoading = false, emptyMessage = "검색된 결과가 없습니다." }: BookListProps) => {
    const [expandedIsbn, setExpandedIsbn] = useState<string | null>(null);

    const handleToggleExpand = useCallback((isbn: string) => {
        setExpandedIsbn((prev) => prev === isbn ? null : isbn);
    }, []);

    if (isLoading) {
        return (
            <Flex w="100%" justify="center" py="80px">
                <Text textStyle="caption" color="text.secondary">
                    검색 중...
                </Text>
            </Flex>
        );
    }

    if (books.length > 0) {
        return (
            <Flex flexDir="column">
                {books.map((book) => (
                    <BookItem
                        key={book.isbn}
                        book={book}
                        isExpanded={expandedIsbn === book.isbn}
                        onToggleExpand={handleToggleExpand}
                    />
                ))}
            </Flex>
        );
    }

    return (
        <EmptyState
            illustration={
                <Box w="80px" h="80px">
                    <img src="/assets/icons/icon_book.svg" alt="empty icon" />
                </Box>
            }
            description={emptyMessage}
        />
    );
};
