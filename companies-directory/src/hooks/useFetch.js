import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   useEffect(() => {
    setLoading(true);
    axios.get(url)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url, ...deps]); // FIXED: spread deps and include url

  return { data, loading, error };
}
