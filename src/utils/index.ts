import { MOOD_STATUS } from './constants';

//
export const getMoodStatus = (score: number) : string => {
  for (const key in MOOD_STATUS) {
    let mood = MOOD_STATUS[key];
    let [min, max] = mood.scoreRange;
    if (score >= min && score <= max) return key;
  }
  return Object.keys(MOOD_STATUS)[0];
}