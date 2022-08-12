import IconMoodUnknown from '@/assets/svg/icon_mood_unknown.svg';
import IconMoodBad from '@/assets/svg/icon_mood_bad.svg';
import IconMoodGood from '@/assets/svg/icon_mood_good.svg';
import IconMoodExcellent from '@/assets/svg/icon_mood_excellent.svg';
import userAvatar from '@/assets/img/avatar_li_qiang.png';
import Colors from '@/App.scss';

//
export type MoodType = {
  id: number;
  timestamp: number;
  score: number;
};

//
export type MoodStatusType = {
  scoreRange: number[];
  icon: string;
  colors: string[];
}

//
export const WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六'];

//
export const USER_TEMPLATE = {
  uid: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
  name: '李强',
  avatar: userAvatar,
}

//
export const MOOD_STATUS : {[key: string]: MoodStatusType}= {
  MOOD_UNKNOWN: {
    scoreRange: [0, 0],
    icon: IconMoodUnknown,
    colors: [Colors.ColorGray1]
  },
  MOOD_BAD: {
    scoreRange: [1, 79],
    icon: IconMoodBad,
    colors: [Colors.ColorBlue1, Colors.ColorBlue2, Colors.ColorBlue3]
  },
  MOOD_GOOD: {
    scoreRange: [80, 89],
    icon: IconMoodGood,
    colors: [Colors.ColorGreen1, Colors.ColorGreen2, Colors.ColorGreen3]
  },
  MOOD_EXCELLENT: {
    scoreRange: [90, 100],
    icon: IconMoodExcellent,
    colors: [Colors.ColorOrange1, Colors.ColorOrange2, Colors.ColorOrange3]
  },
}