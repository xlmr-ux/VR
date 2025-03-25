import React from 'react';
import { Input } from 'antd';


import HeroImage from '../../assets/Images/HeroImage.png';
import HeroImage3 from '../../assets/Images/HeroImage3.jpg';
import HeroImage2 from '../../assets/Images/HeroImage2.jpg';
import HeroImage1 from '../../assets/Images/HeroImage1.jpg';
import VrGoggles from '../../assets/Images/vrgoggles.webp';


import './HeroSection.css';

const HeroSectionRightSide = () => {
 return (
    <div>
        <div className='hero-images'>
            <div className='top-frame'>
                <div className="curved-image-container1">
                    <img src={HeroImage} alt='ethiopian history' />
                </div>
                <div className="curved-image-container2">
                    <img src={HeroImage3} alt='interior' />
                </div>
            </div>
            <div className='bottom-frame'>
                <div className="curved-image-container3">
                    <img src={HeroImage2} alt='houseTop' />
                </div>
                <div className="curved-image-container4">
                    <img src={HeroImage1} alt='villa' />
                </div>
            </div>
        
        <div className='search-bar-container'>
       
        {/* <div className="decorative-search-bar">
           <img src={VrGoggles} alt='vr goggles' />
        </div> */}
      </div>
      </div>
    </div>
 );
};

export default HeroSectionRightSide;
