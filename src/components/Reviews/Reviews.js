import {
  ListReviewsAuthorH4,
  ListReviewsDescriptionP,
  NotFoundReviewsH2,
} from './Reviews.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from '../../api/fetchApi';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchMoviesReviews(movieId).then(({ results }) => {
      const reviewsArr = [];

      results.map(({ id, author, content }) => {
        const review = {
          id,
          author,
          text: content,
        };

        return reviewsArr.push(review);
      });

      setReviews(reviewsArr);
    });
  }, [movieId]);

  return reviews && reviews.length > 0 ? (
    <div>
      <ul>
        {reviews.map(({ id, author, text }) => {
          return (
            <li key={id}>
              <ListReviewsAuthorH4>{author}</ListReviewsAuthorH4>
              <ListReviewsDescriptionP>{text}</ListReviewsDescriptionP>
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <div>
      <NotFoundReviewsH2>
        We don't have any reviews for this movie.
      </NotFoundReviewsH2>
    </div>
  );
}
