
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import SinglePage from "./Components/SinglePage";
import ArticleList from "./Components/ArticleList";
import SingleReview from "./Components/SingleReview";
import SingleReviewComments from "./Components/SingleReviewComments";
import ReviewsByCategories from './Components/ReviewsByCategories';


import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

// searchParams={searchParams} setReviews={setReviews} setSearchParams={setSearchParams}

function App() {
  const [isLoading, setIsLoading] = useState(true);
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
