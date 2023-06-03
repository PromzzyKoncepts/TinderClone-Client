import React from 'react'
import { Link } from 'react-router-dom';
import '../Stylesheets/Footer.css';
import logo from '../Assets/Images/Logo.png';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import GradeIcon from '@mui/icons-material/Grade';
import ForumIcon from '@mui/icons-material/Forum';
import PersonPinIcon from '@mui/icons-material/PersonPin';

const Footer = () => {
  return (
    <div>
      <div className='footer-icons'>
        <Link to="/" className="icon" aria-label="Explore">
          <img src={logo} alt='tinder logo' className='footer-logo' />
        </Link>
        <Link to="/explore" className="icon" aria-label="Explore">
          <ManageSearchIcon />
        </Link>
        <Link to="/likes" className="icon" aria-label="Likes">
          <GradeIcon />
        </Link>
        <Link to="/matches" className="icon" aria-label="Matches">
          <ForumIcon />
        </Link>
        <Link to="/profile" className="icon" aria-label="Matches">
        <PersonPinIcon />
        </Link>
      </div>
    </div>
  )
}

export default Footer