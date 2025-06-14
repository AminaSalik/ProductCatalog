import React, { useState } from 'react';
import '../styles/ProductList.css';
import SearchBar from '../components/SearchBar';
import useProducts from '../hooks/UseProductData ';

function ProductList() {
  const {
    filteredProducts,
    sortOrder,
    setSortOrder,
    favorites,
    toggleFavorite,
    searchTerm,
    setSearchTerm,
    searchCategory,
    setSearchCategory,
    categories,
  } = useProducts();

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const goToPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="navbar custom-navbar shadow-sm sticky-top bg-white py-2">
        <div className="container-fluid px-3">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center w-100 gap-2">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="d-flex flex-column flex-md-row align-items-center gap-2 justify-content-end">
              <select
                className="form-select form-select-sm sort-dropdown"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="none">Sort by Price</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>
              <select
                className="form-select form-select-sm category-dropdown"
                value={searchCategory}
                onChange={(e) => setSearchCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </nav>

      <div className="container py-4 d-flex justify-content-center">
        <div className="w-100 product-list-container">
          <div className="row">
            {currentProducts.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className={`card h-100 product-card shadow-sm hover-zoom ${product.category === "women's clothing" ? 'bg-women' : ''}`}>
                  <img
                    src={product.image}
                    className="card-img-top p-3 product-image"
                    alt={product.title}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h6 className="card-title fw-bold">{product.title}</h6>
                      <p className="product-price">${product.price.toFixed(2)}</p>
                      <span className="badge text-dark">{product.category}</span>
                    </div>
                    <button
                      className={`btn mt-3 ${favorites.includes(product.id)
                        ? 'btn-danger'
                        : 'btn-outline-danger'
                        }`}
                      onClick={() => toggleFavorite(product.id)}
                    >
                      {favorites.includes(product.id)
                        ? '❤️ Favorited'
                        : '🤍 Add to Favorites'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-between align-items-center my-4">
            <button
              className="btn btn-outline btn-line"
              onClick={goToPrevious}
              disabled={currentPage === 1}
            >
              <i className="bi bi-arrow-left"></i>
            </button>

            <span className="text-muted small">
              Page {currentPage} of {totalPages}
            </span>

            <button
              className="btn btn-outline btn-line"
              onClick={goToNext}
              disabled={currentPage === totalPages}
            >
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
