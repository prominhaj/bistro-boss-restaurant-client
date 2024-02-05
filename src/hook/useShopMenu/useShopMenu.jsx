import React, { useEffect, useState } from "react";

const useShopMenu = (page, category, limit) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `http://localhost:5000/shopMenu?page=${page}&&category=${category}&&limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [page, category, limit]);
  return [products, loading];
};

export default useShopMenu;
