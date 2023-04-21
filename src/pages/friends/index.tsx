import FilterComponent from '@/components/friends/filterButton/FilterComponent';
import FilterToggle from '@/components/friends/filterButton/FilterToggle';
import FriendScroll from '@/components/friends/scroll/FriendScroll';
import React, { useState } from 'react';
import styles from '@/styles/Friends.module.css';

export default function Friends() {
    const [isFilterCloseFriends, setFilterCloseFriends] = useState(false);
    const [isFilterSuperCloseFriends, setFilterSuperCloseFriends] = useState(false);

    console.log(isFilterCloseFriends, isFilterSuperCloseFriends);

    return (
        <div className={styles.list}>
            <FilterComponent
                isFilterCloseFriends={isFilterCloseFriends}
                isFilterSuperCloseFriends={isFilterSuperCloseFriends}
                onPressCloseFriends={(state: boolean) => setFilterCloseFriends(state)}
                onPressSuperCloseFriends={(state: boolean) => setFilterSuperCloseFriends(state)}
            />
            <FriendScroll
                filterCloseFriends={isFilterCloseFriends}
                filterSuperCloseFriends={isFilterSuperCloseFriends}
            />
        </div>
    );
}