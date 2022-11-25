// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    eachAction => eachAction.categoryId === 'ACTION',
  )

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
        <MoviesSlider itemsList={actionMoviesList} />
        <h1 className="movies-head">Comedy Movies</h1>
        <MoviesSlider itemsList={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
