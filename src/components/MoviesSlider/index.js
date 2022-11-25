// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {itemsList} = props
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {itemsList.map(eachitem => (
          <MovieItem key={eachitem.id} movieDetails={eachitem} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
