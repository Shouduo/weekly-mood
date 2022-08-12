import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import './index.scss';
// import { MOOD_STATUS } from '@/utils/constants';
// import IconMoodBad from '../../assets/svg/icon_mood_bad.svg';
// import MoodChart from '../MoodChart';
// import IconArrowLeft from '../../assets/svg/icon_arrow_left.svg';
import { MoodType } from '@/utils/constants';

interface Props {
  userName: string;
  userAvatar: string;
  moodList: MoodType[];
}

const MoodOverview = ({userName, userAvatar, moodList} : Props) => {
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

// MoodOverview.defaultProps = {
//   userName: USER_TEMPLATE.name,
//   userAvatar: USER_TEMPLATE.avatar,
//   moodList: []
// }
export default MoodOverview;