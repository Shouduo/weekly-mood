import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import './index.scss';
import { WEEKDAYS, MOOD_STATUS, MoodType } from '@/utils/constants';
import { getMoodStatus } from '@/utils/index';
// import IconMoodBad from '../../assets/svg/icon_mood_bad.svg';

interface MoodBarProps {
  index: number;
  timestamp: number;
  score: number;
  isSelected: boolean;
  onSelect: () => void;
}

const MoodBar = ({index, timestamp, score, isSelected, onSelect} : MoodBarProps) => {
  const [mood, setMood] = useState(Object.keys(MOOD_STATUS)[0]);
  const [isToday, setIsToday] = useState(false);

  useEffect(() => {
    setMood(getMoodStatus(score));
    setIsToday(new Date().setHours(0,0,0,0) === new Date(timestamp).setHours(0,0,0,0));
  }, [timestamp, score]);
  
  return (
    <div 
      className={
        `moodbar 
        ${isSelected ? 'selected': ''} 
        ${isToday ? 'today': ''}`
      }
      style={{
        animationDelay: `${index * 0.05}s`
      }}
      onClick={mood !== Object.keys(MOOD_STATUS)[0] ? onSelect : () => {}}
    >
      <div className='moodbar-bar'>
        <div 
          className='moodbar-bar-progress'
          style={{
            background: isSelected 
              ? `linear-gradient(180deg, ${MOOD_STATUS[mood].colors[1]} 45%, ${MOOD_STATUS[mood].colors[0]} 100%)`
              : `linear-gradient(180deg, ${MOOD_STATUS[mood].colors[2]} 45%, ${MOOD_STATUS[mood].colors[2]} 100%)`,
            // background: MOOD_STATUS[mood].color,
            outlineColor: `${MOOD_STATUS[mood].colors[2]}33`,
            height: `calc(${score/100} * (100% - 8.7rem) + 8.7rem)`
          }}
        >
          <p className='moodbar-bar-score'>{score || ''}</p>
        </div>
        <img className='moodbar-bar-icon' src={MOOD_STATUS[mood].icon} alt=''/>
      </div>
      <div className='moodbar-day'>
        <p
          className='moodbar-day-text'
          style={(isSelected && !isToday) ? {color: MOOD_STATUS[mood].colors[2]} : {}}
        >
          {WEEKDAYS[new Date(timestamp).getDay()]}
        </p>
      </div>
    </div>
  )
}

interface MoodChartType {
  moodList: MoodType[];
}

const MoodChart = ({moodList} : MoodChartType) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  
  return (
    <div className='moodchart'>
      <div className='moodchart-background'/>
      <div className='moodchart-bars'>
        {moodList
          .sort((a, b) => a.timestamp - b.timestamp)
          .map(({timestamp, score}, index) => {
            return (
              <MoodBar
                key={index}
                index={index}
                timestamp={timestamp}
                score={score}
                isSelected={selectedIndex === index}
                onSelect={() => setSelectedIndex(index)}
              />
            )
          })}
      </div>
    </div>
  );
}

export default MoodChart;