import { useNavigate, useLocation } from "react-router-dom";
import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface HeaderProps {
    left?: ReactNode;
    center?: ReactNode;
    right?: ReactNode;
}

export const Header = ({ left, center, right }: HeaderProps) => {
    return (
        <Box w="100%" py="24px" px="160px">
            <Grid gridTemplateColumns="1fr auto 1fr" alignItems="center">
                <Box>{left}</Box>
                <Box>{center}</Box>
                <Box display="flex" justifyContent="flex-end">{right}</Box>
            </Grid>
        </Box>
    );
};

export default function AppHeader() {
    const navigate = useNavigate();
    const location = useLocation();

    const isSearchPage = location.pathname === "/search";
    const isFavoritesPage = location.pathname === "/favorites";

    return (
        <Header
            left={
                <Heading textStyle="title1" color="black">
                    CERTICOS BOOKS
                </Heading>
            }
            center={
                <Flex gap={8}>
                    <Box
                        textStyle="body1"
                        color={isSearchPage ? "text.primary" : "text.secondary"}
                        borderBottom={isSearchPage ? "2px solid" : "none"}
                        borderColor="primary"
                        pb={1}
                        cursor="pointer"
                        onClick={() => navigate("/search")}
                    >
                        도서 검색
                    </Box>
                    <Box
                        textStyle="body1"
                        color={isFavoritesPage ? "text.primary" : "text.secondary"}
                        borderBottom={isFavoritesPage ? "2px solid" : "none"}
                        borderColor="primary"
                        pb={1}
                        cursor="pointer"
                        onClick={() => navigate("/favorites")}
                    >
                        내가 찜한 책
                    </Box>
                </Flex>
            }
        />
    );
}
