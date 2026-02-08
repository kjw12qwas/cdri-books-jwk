import { useState } from "react";
import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { IoClose, IoChevronDown, IoChevronUp } from "react-icons/io5";
import { Button } from "./Button";
import type { SearchTarget } from "../types/book";

const SEARCH_TARGETS: { value: SearchTarget; label: string }[] = [
    { value: "title", label: "제목" },
    { value: "person", label: "저자명" },
    { value: "publisher", label: "출판사" },
];

interface DetailSearchPopoverProps {
    isOpen: boolean;
    onClose: () => void;
    onSearch: (target: SearchTarget, query: string) => void;
}

export const DetailSearchPopover = ({ isOpen, onClose, onSearch }: DetailSearchPopoverProps) => {
    const [target, setTarget] = useState<SearchTarget>("title");
    const [query, setQuery] = useState("");
    const [isSelectOpen, setIsSelectOpen] = useState(false);

    if (!isOpen) return null;

    const handleSearch = () => {
        if (!query.trim()) return;
        onSearch(target, query);
        setQuery("");
        onClose();
    };

    const selectedLabel = SEARCH_TARGETS.find((t) => t.value === target)?.label;

    return (
        <Box
            position="absolute"
            top="100%"
            right={0}
            mt="8px"
            bg="white"
            borderRadius="16px"
            boxShadow="0 4px 20px rgba(0, 0, 0, 0.15)"
            p="24px"
            minW="360px"
            zIndex={10}
        >
            <Box
                position="absolute"
                top="12px"
                right="12px"
                p="4px"
                cursor="pointer"
                color="text.subtitle"
                onClick={onClose}
                _hover={{ color: "text.primary" }}
            >
                <IoClose size={24} />
            </Box>

            <Flex gap="16px" align="flex-end">
                <Box position="relative" minW="100px">
                    <Box
                        pb="8px"
                        borderBottom="1px solid"
                        borderColor="gray"
                        cursor="pointer"
                        onClick={() => setIsSelectOpen(!isSelectOpen)}
                    >
                        <Flex align="center" justify="space-between" gap="8px">
                            <Text textStyle="body2">{selectedLabel}</Text>
                            <Box color="text.subtitle">
                                {isSelectOpen ? <IoChevronUp size={16} /> : <IoChevronDown size={16} />}
                            </Box>
                        </Flex>
                    </Box>

                    {isSelectOpen && (
                        <Box
                            position="absolute"
                            top="100%"
                            left={0}
                            mt="4px"
                            bg="white"
                            border="1px solid"
                            borderColor="gray"
                            borderRadius="8px"
                            overflow="hidden"
                            zIndex={11}
                            minW="100px"
                        >
                            {SEARCH_TARGETS.map((item) => (
                                <Box
                                    key={item.value}
                                    px="12px"
                                    py="8px"
                                    cursor="pointer"
                                    bg={target === item.value ? "lightGray" : "white"}
                                    _hover={{ bg: "lightGray" }}
                                    onClick={() => {
                                        setTarget(item.value);
                                        setIsSelectOpen(false);
                                    }}
                                >
                                    <Text textStyle="body2">{item.label}</Text>
                                </Box>
                            ))}
                        </Box>
                    )}
                </Box>

                <Box flex={1}>
                    <Input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="검색어 입력"
                        variant="flushed"
                        borderColor="primary"
                        textStyle="body2"
                        _placeholder={{ color: "text.subtitle" }}
                        _focus={{ borderColor: "primary", boxShadow: "none" }}
                    />
                </Box>
            </Flex>

            <Button
                variant="primary"
                w="100%"
                mt="24px"
                onClick={handleSearch}
            >
                검색하기
            </Button>
        </Box>
    );
};
