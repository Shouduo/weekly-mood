import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.scss';
import IconArrowLeft from '../../assets/svg/icon_arrow_left.svg';

const MoodView = () => {
  const [moodList, setMoodList] = useState([]);
  
  useEffect(() => {
    axios('/mood').then(({status, data}) => {
      if (status === 200 && data.code === 0) {
        setMoodList(data.payload.list);
        console.log(data.payload.list);
      }
    }).catch((err) => {
      console.log(err);
    });
  }, []);
  
  return (
    <div className='moodview'>
      <div className='moodview-header'>
        <img className='moodview-header-back' src={IconArrowLeft} alt=''/>
        <p className='moodview-header-title'>历史心情指数</p>
      </div>
      <div className='moodview-content'>
        {Array(20).fill(0).map(() => <div>hahahah</div>)}
      </div>
    </div>
  );
}

export default MoodView;