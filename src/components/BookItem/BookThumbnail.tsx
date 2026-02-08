import { Box, Center, Image, Text } from "@chakra-ui/react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useFavoritesStore } from "../../stores/favorites";
import type { Book } from "../../types/book";

interface BookThumbnailProps {
    book: Book;
    isExpanded?: boolean;
}

export const BookThumbnail = ({ book, isExpanded }: BookThumbnailProps) => {
    const isFavorite = useFavoritesStore((state) => state.isFavorite(book.isbn));
    const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

    const width = isExpanded ? "210px" : "48px";
    const height = isExpanded ? "280px" : "68px";

    return (
        <Box position="relative" flexShrink={0}>
            {book.thumbnail ? (
                <Image
                    src={book.thumbnail}
                    alt={book.title}
                    w={width}
                    h={height}
                    objectFit="cover"
                    borderRadius="4px"
                />
            ) : (
                <Center w={width} h={height} bg="lightGray" borderRadius="4px">
                    <Text textStyle="caption" color="text.subtitle" textAlign="center">
                        이미지 없음
                    </Text>
                </Center>
            )}
            <Box
                position="absolute"
                top="4px"
                right="4px"
                onClick={() => toggleFavorite(book)}
                cursor="pointer"
                color={isFavorite ? "red" : "white"}
                fontSize={isExpanded ? "24px" : "16px"}
                filter="drop-shadow(0 1px 2px rgba(0,0,0,0.4))"
            >
                {isFavorite ? <IoHeart /> : <IoHeartOutline />}
            </Box>
        </Box>
    );
};
