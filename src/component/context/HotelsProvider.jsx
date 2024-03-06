import { useContext, useState } from "react";
import { Children, createContext } from "react";
import axios, { formToJSON } from "axios";
import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import toast from "react-hot-toast";

const HotelContext = createContext();
const BASE_URL = "http://localhost:5000/hotels";
function HotelsProvider({ children }) {
  const [currentHotel, setCurrentHotel] = useState(null);
  const [isLoadingCurrHotel, setIsLoadingCurrHOtel] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const destination = searchParams.get("destination");
  const room = JSON.parse(searchParams.get("options"))?.room;
  const { isLoading, data: hotels } = useFetch(
    BASE_URL,
    `q=${destination || ""}&accommodates_gte=${room || 1}`
  );

  async function getHotel(id) {
    setIsLoadingCurrHOtel(true);
    try {
      const { data } = await axios.get(`${BASE_URL}/${id}`);
      setCurrentHotel(data);
      setIsLoadingCurrHOtel(false);
    } catch (error) {
      toast.error(error.message);
      setIsLoadingCurrHOtel(false);
    }
  }
  return (
    <HotelContext.Provider
      value={{ isLoading, hotels, getHotel, isLoadingCurrHotel, currentHotel }}
    >
      {children}
    </HotelContext.Provider>
  );
}

export default HotelsProvider;

export function useHotels() {
  return useContext(HotelContext);
}
