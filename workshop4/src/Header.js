import React from 'react';

const Header = (props) => {
  return (
    <div style={{ background : 'blue'}}>
        <h1>Header = {props.caption}</h1>
    </div>
  )
}


export default Header;
