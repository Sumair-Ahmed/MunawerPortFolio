import React from 'react'
import { Link } from 'react-router-dom'
function SideBarLinks(props) {
    const { list, location } = props;
    return (
        list.map((item) => (
            <li key={item.location}>
                <Link to={item.location} className={(location.pathname === item.location) ? "active" : ""}><i className={item.Icon}></i>{item.name}</Link>
            </li>
        ))
    )
}

export default SideBarLinks