// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  // here we filtering the movies based on the category
  
  
  const actionMoviesList = moviesList.filter(
    eachAction => eachAction.categoryId === 'ACTION',
  )

  // here also filterig the movies
  
  const comedyMoviesList = moviesList.filter(
    eachComedy => eachComedy.categoryId === 'COMEDY',
  )
  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-img"
      />
      <div className="movies-list-container">
        <h1 className="movies-head">Action Movies</h1>
        <MoviesSlider itemsList={actionMoviesList} /> // display the action movies corousals here 
        <h1 className="movies-head">Comedy Movies</h1> 
        <MoviesSlider itemsList={comedyMoviesList} /> // display the comedy movies corousals here
      </div>
    </div>
  )
}

export default PrimeVideo
