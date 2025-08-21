
import React, { useRef, useState, useEffect } from 'react';
import reviews from '../../assets/reviews.js';
import './testimonials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function Testimonials() {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const reviewsHolderRef = useRef(null);
    const intervalRef = useRef(null);
    const testimonialsRef = useRef(null);

    useEffect(() => {
        if (reviewsHolderRef.current) {
            reviewsHolderRef.current.scrollTo({
                left: currentReviewIndex * reviewsHolderRef.current.clientWidth,
                behavior: 'smooth',
            });
        }
    }, [currentReviewIndex]);

    useEffect(() => {
        function startInterval() {
            intervalRef.current = setInterval(() => {
                setCurrentReviewIndex(prev => (prev + 1) % reviews.length);
            }, 2500);
        }
        startInterval();
        const testimonialsEl = testimonialsRef.current;
        if (testimonialsEl) {
            testimonialsEl.addEventListener('mouseover', () => clearInterval(intervalRef.current));
            testimonialsEl.addEventListener('mouseleave', startInterval);
        }
        return () => {
            clearInterval(intervalRef.current);
            if (testimonialsEl) {
                testimonialsEl.removeEventListener('mouseover', () => clearInterval(intervalRef.current));
                testimonialsEl.removeEventListener('mouseleave', startInterval);
            }
        };
    }, []);

    const goToNext = () => {
        setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    };
    const goToPrev = () => {
        setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <div className="testimonials" id="testimonials" ref={testimonialsRef}>
            <button id="prev-review" onClick={goToPrev}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button id="next-review" onClick={goToNext}>
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
            <div className="reviews-holder" ref={reviewsHolderRef} style={{display: 'flex', width: '100%', height: '100%'}}>
                {reviews.map((review, index) => (
                    <div className="review" id={index} key={index} style={{minWidth: '100%', boxSizing: 'border-box'}}>
                        <div className="review-text"><p>{review.text}</p></div>
                        <div className="review-person"><p>{review.person}</p><p>{review.position}</p></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
