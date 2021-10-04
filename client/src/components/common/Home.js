import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Link } from 'react-router-dom'
import Stars from '../Stars'


const Home = () => {

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/recipes')
      setRecipes(data)
    }
    getData()
  }, [])

  if (!recipes.length) {
    return <p>Loading</p>
  }
  return (
    <>
      <div className="container">
        <div className="homePage">
          <Carousel showIndicators={false} showStatus={false} autoPlay infiniteLoop>
            {recipes.slice(0, 3).map(recipe => {
              return (
                <>
                  <div className='carouselItem'>
                    <div className="carouselImage">
                      <img src={recipe.image} alt={recipe.name} />
                    </div>
                    <div className="carouselInfo">
                      <h2 key={recipe._id}>{recipe.name}</h2>
                      <h3 >Average Rating:</h3>
                      <Stars rating={recipe.averageRating} />

                      <Link className="viewRecipe" to={`SearchRecipe/${recipe._id}`}>See full recipe</Link>
                    </div>

                  </div>
                </>
              )
            })
            }
          </Carousel>
        </div>
      </div>
    </>


  )

}

export default Home