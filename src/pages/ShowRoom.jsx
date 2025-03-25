import React, { useState } from 'react';
import ArModel from '../components/ArModel';
import ArModelDescription from '../components/ArModelDescription';
import ThemeToggle from '../context/ThemeToggle';
import './Styles/ShowRoom.css'; // Import CSS file for styling

const ShowRoom = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className={`show-room ${theme}`}>
     <div style={{display:'flex', justifyContent:'space-between', padding:'20px', paddingBottom:'0px'}}>
        <h1 style={{fontFamily:'"Poppins", san-serif', marginLeft:'140px'}} >Lucy: The Dawn of Humanity</h1>
        <ThemeToggle onToggle={toggleTheme} backgroundColor={theme === 'light' ? '#ffffff' : '#1f1f1f'} color={theme === 'light' ? '#000000' : '#ffffff'} theme={theme} themeName={theme === 'light' ? 'Dark' : 'Light'} />
     </div>
      <div className="show-room-container">
        <ArModel />
        <ArModelDescription />
      </div>
    </div>
  );
};

export default ShowRoom;
