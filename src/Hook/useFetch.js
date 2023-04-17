import axios from "axios";
import { useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const { data: categoriData } = await axios.get(url);
      setData(categoriData);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  return {
    fetchData,
    error,
    loading,
    data,
  };
};

export default useFetch;
