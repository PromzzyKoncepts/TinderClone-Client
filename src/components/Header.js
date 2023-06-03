import React from 'react'
import '../Stylesheets/Header.css';
import logo from '../Assets/Images/Logo.png';
// import promise from '../Assets/Images/promise.jpeg';

const Header = () => {
  return (
    <div>
      <div className='header'>
        <img src={logo} alt='tinder logo' className='logo' />
        <p>tinder</p>
      </div>
      {/* <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/399px-Elon_Musk_Royal_Society.jpg?20220526165343' alt='tinder logo' className='slide-pic' />
      </div> */}
    </div>
  )
}

export default Header