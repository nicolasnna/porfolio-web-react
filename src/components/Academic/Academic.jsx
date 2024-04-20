import { Grid, Stack } from '@mui/material'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ItemCard from '../ItemCard/ItemCard'
import PropTypes from 'prop-types'
import * as constants from '../../utils/constants'

export default function Academic({ academicList }) {
  return (
    <section className="sectionAcademic">
      <Stack direction={'row'} spacing={2} display={'flex'} alignItems={'center'} justifyItems={'center'}>
        <SchoolOutlinedIcon sx={{fontSize: constants.fontIconMain }}/>
        <h1>
          Formación académica
        </h1>
      </Stack>
      <Grid gap={2} px={3} my={4}>
        {academicList.map((academic) => (
          <ItemCard key={academic.id} listContent={academic} />
        ))}
      </Grid>
    </section>
  )
}

Academic.defaultProps = {
  academicList: []
}

Academic.propTypes = {
  academicList: PropTypes.array,
}

