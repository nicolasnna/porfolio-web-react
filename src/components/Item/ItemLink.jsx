import PropTypes from 'prop-types'
import './ItemLink.css'

export default function ItemLink({ icon, text, url }) {
  return (
    <div className='itemLink'>
      <a href={url}>
        {icon}
        <h4>{text}</h4>
      </a>
    </div>
  )
}

ItemLink.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
  url: PropTypes.string
}