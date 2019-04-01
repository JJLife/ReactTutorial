import React from 'react'

const Sidebar = (props) => {
    return (
        <div>
            <h1> SideBar </h1>
            {props.children}
            <h1> End of SideBar</h1>
        </div>
    )
}

export default Sidebar


