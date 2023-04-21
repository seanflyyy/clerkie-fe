import { Friend } from '@/common/types';
import friendsData from '../../data/friends.json';

const fetchFriends = (): any => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(friendsData.friends);
    }, 1000);
  });
};

export { fetchFriends };