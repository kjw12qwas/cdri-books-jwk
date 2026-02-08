import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Book } from "../types/book";

interface FavoritesStore {
    favorites: Book[];
    isFavorite: (isbn: string) => boolean;
    toggleFavorite: (book: Book) => void;
}

export const useFavoritesStore = create<FavoritesStore>()(
    persist(
        (set, get) => ({
            favorites: [],
            isFavorite: (isbn) => get().favorites.some((b) => b.isbn === isbn),
            toggleFavorite: (book) =>
                set((state) => {
                    const exists = state.favorites.some((b) => b.isbn === book.isbn);
                    return {
                        favorites: exists
                            ? state.favorites.filter((b) => b.isbn !== book.isbn)
                            : [...state.favorites, book],
                    };
                }),
        }),
        { name: "favoriteBooks" }
    )
);
