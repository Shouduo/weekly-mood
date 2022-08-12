import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.scss';
import IconArrowLeft from '../../assets/svg/icon_arrow_left.svg';
import { USER_TEMPLATE } from '@/utils/constants';
import MoodOverview from '@/components/MoodOverview';
import MoodChart from '@/components/MoodChart';

const MoodView = () => {
  const [moodList, setMoodList] = useState([]);
  
  useEffect(() => {
    axios('/mood').then(({status, data}) => {
      if (status === 200 && data.code === 0) {
        setMoodList(data.payload.list);
        // console.log(data.payload.list);
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
        {/* {Array(20).fill(0).map(() => <div>hahahah</div>)} */}
        <MoodOverview userName={USER_TEMPLATE.name} userAvatar={USER_TEMPLATE.avatar} moodList={moodList}/>
        <MoodChart moodList={moodList}/>
      </div>
    </div>
  );
}

export default MoodView;