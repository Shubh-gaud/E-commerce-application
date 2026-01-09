import React, { useEffect, useState } from "react";
import Home from "./Home"
import axios from "axios";
// import { json } from "react-router-dom";
// import { BiSunFill, BiMoon } from "react-icons/bi";

const Navbar = ({ onSelectCategory, onSearch }) => {
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "light-theme";
  };
  const [selectedCategory, setSelectedCategory] = useState("");
  const [theme, setTheme] = useState(getInitialTheme());
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [showSearchResults,setShowSearchResults] = useState(false)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (value) => {
    try {
      const response = await axios.get("http://localhost:8080/api/products");
      setSearchResults(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = async (value) => {
    setInput(value);
    if (value.length >= 1) {
      setShowSearchResults(true)
    try {
      const response = await axios.get(
        `http://localhost:8080/api/products/search?keyword=${value}`
      );
      setSearchResults(response.data);
      setNoResults(response.data.length === 0);
      console.log(response.data);
    } catch (error) {
      console.error("Error searching:", error);
    }
    } else {
      setShowSearchResults(false);
      setSearchResults([]);
      setNoResults(false);
    }
  };

  
  // const handleChange = async (value) => {
  //   setInput(value);
  //   if (value.length >= 1) {
  //     setShowSearchResults(true);
  //     try {
  //       let response;
  //       if (!isNaN(value)) {
  //         // Input is a number, search by ID
  //         response = await axios.get(`http://localhost:8080/api/products/search?id=${value}`);
  //       } else {
  //         // Input is not a number, search by keyword
  //         response = await axios.get(`http://localhost:8080/api/products/search?keyword=${value}`);
  //       }

  //       const results = response.data;
  //       setSearchResults(results);
  //       setNoResults(results.length === 0);
  //       console.log(results);
  //     } catch (error) {
  //       console.error("Error searching:", error.response ? error.response.data : error.message);
  //     }
  //   } else {
  //     setShowSearchResults(false);
  //     setSearchResults([]);
  //     setNoResults(false);
  //   }
  // };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };
  const toggleTheme = () => {
    const newTheme = theme === "dark-theme" ? "light-theme" : "dark-theme";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const categories = [
    "Laptop",
    "Headphone",
    "Mobile",
    "Electronics",
    "Toys",
    "Fashion",
  ];
  return (
    <>
      <header>
  <nav className="navbar navbar-expand-lg fixed-top bg-white shadow-sm">
    <div className="container-fluid">

      {/* LOGO */}
      <a className="navbar-brand fw-bold fs-3" href="/">
        Buy<span style={{ color: "#2874f0" }}>Nest</span>
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        {/* CENTER NAV */}
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">
          <li className="nav-item">
            <a className="nav-link fw-semibold" href="/">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link fw-semibold" href="/add_product">
              Add Product
            </a>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle fw-semibold"
              href="/"
              role="button"
              data-bs-toggle="dropdown"
            >
              Categories
            </a>
            <ul className="dropdown-menu">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    className="dropdown-item"
                    onClick={() => handleCategorySelect(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        {/* RIGHT SECTION */}
        <div className="d-flex align-items-center gap-3 position-relative">

          {/* Search */}
          <input
            className="form-control"
            style={{ width: "220px", borderRadius: "20px" }}
            type="search"
            placeholder="Search products"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />

          {/* Search Results */}
          {showSearchResults && (
            <ul
              className="list-group position-absolute"
              style={{
                top: "45px",
                right: "0",
                width: "220px",
                zIndex: 1000,
              }}
            >
              {searchResults.length > 0 ? (
                searchResults.map((result) => (
                  <li key={result.id} className="list-group-item">
                    <a
                      href={`/product/${result.id}`}
                      className="text-decoration-none text-dark"
                    >
                      {result.name}
                    </a>
                  </li>
                ))
              ) : (
                noResults && (
                  <li className="list-group-item text-muted">
                    No product found
                  </li>
                )
              )}
            </ul>
          )}

          {/* Theme Toggle */}
          <button className="btn btn-outline-secondary" onClick={toggleTheme}>
            {theme === "dark-theme" ? (
              <i className="bi bi-moon-fill"></i>
            ) : (
              <i className="bi bi-sun-fill"></i>
            )}
          </button>

          {/* Cart */}
          <a href="/cart" className="btn btn-outline-primary">
            <i className="bi bi-cart"></i>
          </a>

        </div>
      </div>
    </div>
  </nav>
</header>

    </>
  );
};

export default Navbar;
