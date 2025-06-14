# MyShop  - React Product Catalog

A stylish, responsive product catalog built with **React.js** and **Bootstrap**, powered by the [FakeStore API](https://fakestoreapi.com). This app offers product search, sorting, category filtering, favorites, and a clean, responsive layout.

---

## 🚀 Features

- 🔎 Filter products by category
- 📊 Sort by price (low-to-high, high-to-low)
- 💖 Favorite 
- 🎀 Highlighted card style 
- 🔍 Styled and animated search bar
- 📱 Fully responsive with Bootstrap
- 🌈 Modern navbar with center-aligned controls
- 🗂️ Pagination (6 items per page, arrow controls)

---

## 🧰 Tech Stack

- **React.js** (with Hooks)
- **Bootstrap 5**
- **Custom CSS**
- **FakeStore API** (RESTful data)

---

## 📁 Project Structure

```
src/
├── assets/              # (Optional) Images, icons, logos
├── components/
│   └── SearchBar.js     # Search input component
├── hooks/
│   └── useProducts.js   # Custom hook for API fetch, filter, sort
├── pages/
│   └── ProductList.js   # Main product listing with search/sort/favorites
├── styles/
│   └── ProductList.css  # All custom styles
├── App.jsx              # Main App layout
├── main.jsx             # React app entry point
└── index.css            # Global styles (optional)
```

---

## 🛠️ Getting Started

### ✅ Clone the Repo

```bash
git clone https://github.com/your-username/ProductCatalog.git
cd ProductCatalog
```

### ✅ Install Dependencies

```bash
npm install
```

### ✅ Run the App (Vite)

```bash
npm run dev
```

---

## 🌐 API Source

Products are fetched from: [https://fakestoreapi.com/products](https://fakestoreapi.com/products)

---


## 📜 License

[MIT](LICENSE)

---

## 💡 Tip

Use the arrow icons (←, →) below the products to scroll through multiple pages (6 items per page). The layout is fully mobile-friendly.

---
