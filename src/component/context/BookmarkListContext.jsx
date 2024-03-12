import { useContext, useState } from "react";
import { Children, createContext } from "react";
import axios, { formToJSON } from "axios";
import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import toast from "react-hot-toast";

const BookmarkContext = createContext();
const BASE_URL = "http://localhost:5000";
function BookmarkListProvider({ children }) {
  const [currentBookmark, setCurrentBookmark] = useState(null);
  const [isLoadingCurrBookmark, setIsLoadingCurrBookmark] = useState(false);
  const { isLoading, data: bookmarks } = useFetch(`${BASE_URL}/bookmarks`);

  async function getBookmarks(id) {
    setIsLoadingCurrBookmark(true);
    try {
      const { data } = await axios.get(`${BASE_URL}/bookmarks/${id}`);
      setCurrentBookmark(data);
      setIsLoadingCurrBookmark(false);
    } catch (error) {
      toast.error(error.message);
      setIsLoadingCurrBookmark(false);
    }
  }
  return (
    <BookmarkContext.Provider
      value={{
        isLoading,
        bookmarks,
        getBookmarks,
        isLoadingCurrBookmark,
        currentBookmark,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export default BookmarkListProvider;

export function useBookmark() {
  return useContext(BookmarkContext);
}
