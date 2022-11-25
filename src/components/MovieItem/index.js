// Write your code here
import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  // when we click on the video popup is displayed
  return (
    <div className="movie-item-container">
      <Popup
        modal
        trigger={<img src={thumbnailUrl} alt="thumbnail" />}
        className="thumbnail"
      >
        {close => (
          <div className="popup-container">
            <button type="button" onClick={() => close()} testid="closeButton">
              <IoMdClose size="30" />
            </button>
            <div className="video-container">
              <ReactPlayer url={videoUrl} />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
