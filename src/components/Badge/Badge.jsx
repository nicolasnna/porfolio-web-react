import './Badge.css'
import PropTypes from 'prop-types'

export default function Badge({ text, url }) {
  return (
    <div className='Badge' target='_blank'>
      <a href={url}>
        {text}  
      </a>
    </div>
  )
}

Badge.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
}