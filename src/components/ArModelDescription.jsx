import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { Typography, Button, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n'; // Import i18n instance
import { useSpeechSynthesis } from 'react-speech-kit'; // Import from react-speech-kit
import { PlayCircleOutlined, PauseCircleOutlined, GlobalOutlined } from '@ant-design/icons'; // Import icons
import './Styles/ArModelDescription.css';

const { Option } = Select;

const ArModelDescription = () => {
  const { t } = useTranslation();
  const { Text } = Typography;

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false); // State to track playback

  const { speak, cancel } = useSpeechSynthesis(); // Initialize speech synthesis

  useEffect(() => {
    const textContainer = document.querySelector('.text-container');

    const handleScroll = () => {
      const scrollPercentage = textContainer.scrollTop / (textContainer.scrollHeight - textContainer.clientHeight);
      setScrollProgress(scrollPercentage);
    };

    textContainer.addEventListener('scroll', handleScroll);

    // Initial animation
    gsap.fromTo(
      textContainer,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
    );

    return () => {
      textContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handlePlay = () => {
    const text = t('arModelDescription');
    if (!isPlaying) {
      speak({ text });
    } else {
      cancel(); // Stop speech if already playing
    }
    setIsPlaying(!isPlaying); // Toggle playback state
  };

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="ar-model-description">
      <Button onClick={handlePlay} style={{ marginRight: '20px', fontFamily: '"Poppins", san-serif' }}>
        {isPlaying ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
        {isPlaying ? 'Pause Audio' : 'Play Audio'}
      </Button>
      <Select defaultValue="en" style={{ width: 120, fontFamily: '"Poppins", san-serif' }} onChange={handleLanguageChange}>
        <Option value="en"><GlobalOutlined /> English</Option>
        <Option value="am"><GlobalOutlined /> Amharic</Option>
        <Option value="om"><GlobalOutlined /> Oromo</Option>
        <Option value="ti"><GlobalOutlined /> Tigregna</Option>
        <Option value="so"><GlobalOutlined /> Somali</Option>
      </Select>
      <div className="text-container">
        <Text
          style={{
            fontSize: '40px',
            color: 'grey',
            opacity: scrollProgress < 0.5 ? 1 - scrollProgress * 2 : (scrollProgress - 0.5) * 2,
          }}
        >
          {t('arModelDescription')}
        </Text>
      </div>
    </div>
  );
};

export default ArModelDescription;
