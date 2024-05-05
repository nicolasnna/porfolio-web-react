import './ItemCard.css'
import PropTypes from 'prop-types'


export default function ItemCard({ listContent }) {
  return (
    <div className='itemCard'>
      <b style={{color: "#00FFFF" }}>{listContent.title}</b>
      <h3>{listContent.location}</h3>
      <b style={{color: "#00FFFF" }}>{listContent.date}</b>
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
