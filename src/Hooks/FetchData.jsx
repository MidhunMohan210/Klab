import { useState, useEffect } from "react";

const FetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message);
        }
        setData(result.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchData();

  }, []);
  return {
    data,
    loading,
    error,
  };
};

export default FetchData;
