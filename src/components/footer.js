import React from 'react'
import { Link } from 'gatsby'

const Footer = ({ author, profile }) => (
    <footer>
        Made with <i className="em em-heart" style={{width: '15px', height: '15px'}}></i> by
        <Link to={profile}>{' '+author}</Link>
    </footer>
)

export default Footer
