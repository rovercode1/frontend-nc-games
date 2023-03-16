import { useEffect } from "react"
import { Link } from "react-router-dom"
import { fetchAllReviews } from "../api"
import FilterBar from "./FilterBar";
import { useSearchParams } from "react-router-dom";
export default function ArticleList ({isLoading, setIsLoading, reviews, setReviews}){
  let [searchParams, setSearchParams] = useSearchParams();
  useEffect(()=>{
    setIsLoading(true)
    fetchAllReviews().then((reviews)=>{
      setReviews(reviews)
      setIsLoading(false)
    })
  },[setIsLoading, setReviews])

  const displayReviews = (review)=>{
    return (
      <article className="review-card" key={review.review_id}>
        <div className="review-header">
          <p> Posted by <span>{review.owner}</span></p>
          <p>{review.created_at}</p>
        </div>
        <div className="review-body">
          <h3>{review.title}</h3>
          <Link to={`/reviews/${review.review_id}`}>
          <img src={review.review_img_url} alt={review.title} ></img>
          </Link>
        </div>
        <div className="review-footer">
          <p>{review.votes} Votes</p>
          <p>Comments</p>
        </div>
      </article>
    )
  }

  return isLoading?<h1>Loading...</h1>:(
    <>
    <section id='reviews-container'>
    <FilterBar searchParams={searchParams} setReviews={setReviews} setSearchParams={setSearchParams}/>
      {reviews.map((review)=>{
        return displayReviews(review)
      })}
    </section>
    
    </>
  )
}