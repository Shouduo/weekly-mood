import React, { useState, useEffect } from 'react';
import './index.scss';
import { MoodType } from '@/utils/constants';

interface MoodOverviewProps {
  userName: string;
  userAvatar: string;
  moodList: MoodType[];
}

const MoodOverview = ({userName, userAvatar, moodList} : MoodOverviewProps) => {
  const [averageScore, setAverateScore] = useState(0);
  
  useEffect(() => {
    let len = moodList.length;
    let sum = moodList.reduce((pre, cur) => {
      if (cur.score === 0) len--;
      return pre += cur.score;
    }, 0);
    if (len === 0) setAverateScore(0);
    else setAverateScore(~~(sum / len));
  }, [moodList]);
  
  return (
    <div className='moodoverview'>
      <div className='moodoverview-user'>
        <img className='moodoverview-user-avatar' src={userAvatar} alt=''/>
        <p className='moodoverview-user-name'>{userName}</p>
      </div>
      <div className='moodoverview-info'>
        <p className='moodoverview-info-score'>{averageScore}</p>
        <p className='moodoverview-info-caption'>周平均心情指数</p>
      </div>
    </div>
  );
}

export default MoodOverview;