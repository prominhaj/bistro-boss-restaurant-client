import { useEffect, useState } from "react";

const useMenu = (category, limit) => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `http://localhost:5000/menu?${category && `category=${category}`}&&${
        limit && `limit=${limit}`
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  }, []);
  return [menu, loading];
};

export default useMenu;
