import './ItemCard.css'
import PropTypes from 'prop-types'


export default function ItemCard({ listContent }) {
  return (
    <div className='itemCard'>
      <h4>{listContent.title}</h4>
      <h3>{listContent.location}</h3>
      <h4>{listContent.date}</h4>
      {listContent.description.map((description, key) => (
        <p key={key}>{description}</p>
        ))}
    </div>
  )
}

ItemCard.defaultProps = {
  listContent: {
    title: '',
    location: '',
    date: '',
    description: [''],
  }
}

ItemCard.propTypes = {
  listContent: PropTypes.shape({
    title: PropTypes.string,
    location: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.array,
  })
}
