import { useState } from "react";

const MAX_HISTORY = 8;
const STORAGE_KEY = "searchHistory";

export const useSearchHistory = () => {
    const [history, setHistory] = useState<string[]>(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    });

    const addHistory = (query: string) => {
        if (!query.trim()) return;

        setHistory((prev) => {
            const filtered = prev.filter((item) => item !== query);
            const newHistory = [query, ...filtered].slice(0, MAX_HISTORY);

            localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
            return newHistory;
        });
    };

    const removeHistory = (query: string) => {
        setHistory((prev) => {
            const newHistory = prev.filter((item) => item !== query);

            localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
            return newHistory;
        });
    };

    return { history, addHistory, removeHistory };
};