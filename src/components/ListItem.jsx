import PropTypes from 'prop-types'
//import { ReactPropTypes } from 'react';

function ListItem({brand, year}){

  return(
    <>
        <li>{brand} - {year}</li>
    </>
  )
}

ListItem.propTypes = {
  brand: PropTypes.string,
  year: PropTypes.number
}

ListItem.defaultProps = {
  brand: "Não definido",
  year: 1999

}


export default ListItem;