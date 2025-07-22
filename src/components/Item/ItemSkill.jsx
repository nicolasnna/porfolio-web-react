import Tooltip from '../Tooltip/Tooltip'
import './ItemSkill.css'
import PropTypes from 'prop-types'



export default function ItemSkill({ icon, text }) {
  return (
    <Tooltip text={text}>
      <div className='itemSkill'>
        {icon}
      </div>
    </Tooltip>
  )
}

ItemSkill.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string
}