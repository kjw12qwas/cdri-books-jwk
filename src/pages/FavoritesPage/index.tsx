import { useState } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { BookList } from "../../components/BookList";
import { Pagination } from "../../components/Pagination";
import { useFavoritesStore } from "../../stores/favorites";

const PAGE_SIZE = 10;

export default function FavoritesPage() {
    const favorites = useFavoritesStore((state) => state.favorites);
    const [currentPage, setCurrentPage] = useState(1);

    const totalCount = favorites.length;
    const totalPages = Math.ceil(totalCount / PAGE_SIZE);
    const isLastPage = currentPage >= totalPages;

    const paginatedBooks = favorites.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
    );

    return (
        <Flex w="100%" flex={1} alignItems="center" justifyContent="center">
            <Flex flexDir="column" w="960px" maxW="960px" mt="80px" gap="32px">
                <Flex flexDir="column" gap="24px">
                    <Heading textStyle="title2">내가 찜한 책</Heading>
                    <Flex gap="16px">
                        <Text textStyle="caption" color="text.primary">
                            찜한 책
                        </Text>
                        <Text textStyle="caption" color="text.primary">
                            총 <Box as="span" color="primary" fontWeight="bold">{totalCount}</Box>건
                        </Text>
                    </Flex>
                </Flex>

                <BookList
                    books={paginatedBooks}
                    emptyMessage="찜한 책이 없습니다."
                />

                {favorites.length > 0 && (
                    <Flex flexDir="column" align="center" gap="8px">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            isLastPage={isLastPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </Flex>
                )}
            </Flex>
        </Flex>
    );
}
