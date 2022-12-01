//import React from 'react'
import PropTypes from 'prop-types'
import Button from'./Button'


const Header = ({title}) => {
  return (
    <header>
         <h1 >{title}</h1>
         <Button color ='green' text='Hello'/>
    </header>
  )
}
Header.defaultProps={
    title:'Task',
}

Header.propTypes={
    title:PropTypes.string.isRequired,
}

// const headingStyle={
//     color:'red',
//     backgroundcolor:'green',

// }

export default Header