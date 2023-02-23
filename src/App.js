import React from "react";
import "./App.scss";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import PageNotFound from "./components/pageNotFound/PageNotFound.jsx";
import YourList from "./pages/yourList/YourList.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import TrendingAnime from "./pages/trendingAnime/TrendingAnime.jsx";
import SearchResults from "./pages/searchResults/SearchResults.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/" element={<SearchResults />} />
          <Route path="/trending" element={<TrendingAnime />} />
          <Route path="/yourlist" element={<YourList />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
