import { Flex, Text } from "@chakra-ui/react";
import { Button } from "../Button";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    isLastPage: boolean;
    setCurrentPage: (page: number) => void;
}

export const Pagination = ({
    currentPage,
    totalPages,
    isLastPage,
    setCurrentPage,
}: PaginationProps) => {
    const handlePreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    return (
        <Flex justify="center" align="center" gap="16px" py={4}>
            <Button
                variant="outline"
                textStyle="body2"
                px="20px"
                py="10px"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
            >
                이전
            </Button>

            <Text textStyle="body2" color="text.primary">
                {currentPage} / {totalPages} 페이지
            </Text>

            <Button
                variant="outline"
                textStyle="body2"
                px="20px"
                py="10px"
                onClick={handleNextPage}
                disabled={isLastPage}
            >
                다음
            </Button>
        </Flex>
    );
};
