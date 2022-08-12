import IconMoodUnknown from '@/assets/svg/icon_mood_unknown.svg';
import IconMoodBad from '@/assets/svg/icon_mood_bad.svg';
import IconMoodGood from '@/assets/svg/icon_mood_good.svg';
import IconMoodExcellent from '@/assets/svg/icon_mood_excellent.svg';
import userAvatar from '@/assets/img/avatar_li_qiang.png';

//
export const WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六'];

//
export type MoodType = {
  id: number;
  timestamp: number;
  score: number;
};

//
export const USER_TEMPLATE = {
  uid: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
  name: '李强',
  avatar: userAvatar,
}

//
export const MOOD_STATUS = {
  MOOD_UNKNOWN: {
    scoreRange: [0, 0],
    icon: IconMoodUnknown,
    color: '#CFCFCF'
  },
  MOOD_BAD: {
    scoreRange: [1, 79],
    icon: IconMoodBad,
    color: '#299BE1'
  },
  MOOD_GOOD: {
    scoreRange: [80, 89],
    icon: IconMoodGood,
    color: '#52C873'
  },
  MOOD_EXCELLENT: {
    scoreRange: [90, 100],
    icon: IconMoodExcellent,
    color: '#FF823C'
  },
}