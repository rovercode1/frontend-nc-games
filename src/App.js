import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import SinglePage from "./Components/SinglePage";
import ArticleList from "./Components/ArticleList";
import ReviewsByCategories from './Components/ReviewsByCategories';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route
          path="/"
          element={
            <ArticleList
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              reviews={reviews}
              setReviews={setReviews}
            />
          }
        />
        <Route
          path="/reviews/:review_id"
          element={
            <SinglePage
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              setReviews={setReviews}
            />
          }
        />
        <Route
          path="/reviews"
          element={<ReviewsByCategories isLoading={isLoading} setIsLoading={setIsLoading}/>}
        />
      </Routes>
    </div>
  );
}
export default App;
