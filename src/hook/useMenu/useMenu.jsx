import { useEffect, useState } from "react";

const useMenu = (category, limit) => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://bistro-boss-server-five-black.vercel.app/menuCategory?${category && `category=${category}`}&&${
        limit && `limit=${limit}`
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  }, [category, limit]);
  return [menu, loading];
};

export default useMenu;
