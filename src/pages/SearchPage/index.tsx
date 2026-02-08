import { useState } from "react";
import { useQueryState, parseAsInteger, parseAsStringLiteral } from "nuqs";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Button } from "../../components/Button";
import { IoSearch, IoClose } from "react-icons/io5";
import { CustomInput } from "../../components/CustomInput";
import { BookList } from "../../components/BookList";
import { Pagination } from "../../components/Pagination";
import { DetailSearchPopover } from "../../components/DetailSearchPopover";
import { useBookSearch } from "../../hooks/useBookSearch";
import { useSearchHistory } from "../../hooks/useSearchHistory";
import type { SearchTarget } from "../../types/book";

const DEFAULT_PAGE_SIZE = 10
const DEFAULT_PAGE_START = 1
const SEARCH_TARGETS = ["title", "person", "publisher"] as const;

export default function SearchPage() {
    const [urlQuery, setUrlQuery] = useQueryState("q", { defaultValue: "" });
    const [urlTarget, setUrlTarget] = useQueryState("target", parseAsStringLiteral(SEARCH_TARGETS));
    const [urlPage, setUrlPage] = useQueryState("page", parseAsInteger.withDefault(DEFAULT_PAGE_START));

    const [searchQuery, setSearchQuery] = useState(urlQuery);
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    const { data, isLoading } = useBookSearch({
        query: urlQuery,
        page: urlPage,
        size: DEFAULT_PAGE_SIZE,
        target: urlTarget ?? undefined,
    });

    const { history, addHistory, removeHistory } = useSearchHistory();

    const books = data?.documents || [];
    const totalCount = data?.meta.total_count || 0;
    const isLastPage = data?.meta.is_end || false;
    const totalPages = Math.ceil(totalCount / DEFAULT_PAGE_SIZE);

    const handleSearch = (query?: string) => {
        const q = query ?? searchQuery;
        if (!q.trim()) return;
        addHistory(q);
        setSearchQuery(q);
        setUrlQuery(q);
        setUrlTarget(null);
        setUrlPage(DEFAULT_PAGE_START);
    }

    const handleDetailSearch = (target: SearchTarget, query: string) => {
        setSearchQuery("");
        setUrlQuery(query);
        setUrlTarget(target);
        setUrlPage(DEFAULT_PAGE_START);
    }

    return (
        <Flex w="100%" flex={1} alignItems="center" justifyContent="center">
            <Flex flexDir="column" w="960px" maxW="960px" mt="80px" gap="32px">
                <Flex flexDir="column" gap="16px">
                    <Heading textStyle="title2">
                        도서 검색
                    </Heading>

                    <Flex gap="16px" maxW="680px" align="center">
                        <CustomInput
                            icon={<IoSearch size='20px' />}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="검색어를 입력하세요"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSearch()
                                }
                            }}
                        >
                            {history.length > 0 && (
                                <Flex flexDir="column" gap="12px">
                                    {history.map((item) => (
                                        <Flex key={item} align="center" justify="space-between">
                                            <Text
                                                textStyle="body2"
                                                color="subtitle"
                                                cursor="pointer"
                                                onMouseDown={(e) => {
                                                    e.preventDefault();
                                                    handleSearch(item);
                                                }}
                                            >
                                                {item}
                                            </Text>
                                            <Box
                                                cursor="pointer"
                                                color="text.secondary"
                                                onMouseDown={(e) => {
                                                    e.preventDefault();
                                                    removeHistory(item);
                                                }}
                                            >
                                                <IoClose size={20} />
                                            </Box>
                                        </Flex>
                                    ))}
                                </Flex>
                            )}
                        </CustomInput>
                        <Box position="relative" alignItems="center">
                            <Button
                                variant="outline"
                                textStyle="body2"
                                p="10px"
                                borderColor="text.subtitle"
                                color="text.subtitle"
                                onClick={() => setIsDetailOpen(!isDetailOpen)}
                            >
                                상세검색
                            </Button>
                            <DetailSearchPopover
                                isOpen={isDetailOpen}
                                onClose={() => setIsDetailOpen(false)}
                                onSearch={handleDetailSearch}
                            />
                        </Box>
                    </Flex>
                </Flex>

                <Flex align="center" gap="16px">
                    <Text textStyle="caption" color="text.primary">
                        도서 검색 결과
                    </Text>
                    <Text textStyle="caption" color="text.primary">
                        총 <Box as="span" color="primary" fontWeight="bold">{totalCount.toLocaleString()}</Box>건
                    </Text>
                </Flex>

                <BookList books={books} isLoading={isLoading} emptyMessage="검색된 결과가 없습니다." />

                {books.length > 0 && (
                    <Pagination
                        currentPage={urlPage}
                        totalPages={totalPages}
                        isLastPage={isLastPage}
                        setCurrentPage={setUrlPage}
                    />
                )}
            </Flex>
        </Flex>
    );
}
