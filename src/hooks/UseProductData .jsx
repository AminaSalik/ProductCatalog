import { useEffect, useState } from 'react';

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('none');
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCategory] = useState('All');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const categories = ['All', ...new Set(products.map((p) => p.category))];

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const filteredProducts = products
    .filter((p) =>
      searchCategory === 'All' || p.category === searchCategory
        ? p.title.toLowerCase().includes(searchTerm.toLowerCase())
        : false
    )
    .sort((a, b) => {
      if (sortOrder === 'asc') return a.price - b.price;
      if (sortOrder === 'desc') return b.price - a.price;
      return 0;
    });

  return {
    filteredProducts,
    sortOrder,
    setSortOrder,
    favorites,
    toggleFavorite,
    searchTerm,
    setSearchTerm,
    searchCategory,
    setSearchCategory,
    categories
  };
}
