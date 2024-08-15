import React, { useState, useEffect } from 'react'
import "./Featured.css"
const Featured = () => {
  const key = '1490928f';
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchFeaturedImages = async () => {
      try {
        // Fetch data from the API
        const response = await fetch(`http://www.omdbapi.com/?s=avengers&apikey=${key}`);
        const data = await response.json();

        // Update the state with the fetched data
        setImages(data.Search);
      } catch (error) {
        console.error('Error fetching featured images:', error);
      }
    };

    fetchFeaturedImages();
  }, []);
  return (
    <div className="featured-content">

      <div>
        <h2>Featured Movies</h2>
        <div className="featured-images">
          {images.map((image, index) => (
            <img key={index} src={image.Poster} alt='' className='movie-img' />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Featured
