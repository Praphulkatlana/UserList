import React  from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div class="ui tabular menu">
            <Link to="/" className="item "></Link>
            Users
            <Link to="/about" className="item "></Link>
            About Us

        </div>
    )
}
