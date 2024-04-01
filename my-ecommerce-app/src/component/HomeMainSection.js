import React, { useState, useEffect } from 'react';
import reviews from '../data/reviews';

const HomeMainSection = () => {
  const [randomReviews, setRandomReviews] = useState([]);

  useEffect(() => {
    
    const getRandomReviews = () => {
      const shuffledReviews = reviews.sort(() => 0.5 - Math.random());
      const selectedReviews = shuffledReviews.slice(0, 2);
      setRandomReviews(selectedReviews);
    };

    getRandomReviews();
  }, []);

  return (
    <main>
      <section className="about-us">
        <h2>About Us</h2>
        {<p>Our vision is to provide customers with the best experience possible!</p>}
        <button onClick={() => console.log('Navigate to Product Page')}>Shop Now</button>
      </section>
      <section className="customer-reviews">
        <h2>Customer Reviews</h2>
        <div className="reviews-container">
          {randomReviews.map((review, index) => (
            <div key={index} className="review">
              <p>{review.customerName}</p>
              <p>{review.reviewContent}</p>
              <div>
                {'★'.repeat(review.stars)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomeMainSection;
