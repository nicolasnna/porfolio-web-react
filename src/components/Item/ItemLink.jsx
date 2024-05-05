import PropTypes from 'prop-types'
import './ItemLink.css'

export default function ItemLink({ icon, text, url }) {
  return (
    <div className='itemLink'>
      <a href={url}>
        {icon}
        <p>{text}</p>
      </a>
    </div>
  )
}

ItemLink.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
  url: PropTypes.string
}