import { useEffect, useState } from "react";

const useData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, [url]);
  return { data, loading };
};

export default useData;
