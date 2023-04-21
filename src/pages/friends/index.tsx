import FilterComponent from '@/components/friends/filterButton/FilterComponent';
import FilterToggle from '@/components/friends/filterButton/FilterToggle';
import FriendScroll from '@/components/friends/scroll/FriendScroll';
import React from 'react';
import styles from '@/styles/Friends.module.css';

export default function Friends() {
    return (
        <div className={styles.list}>
            <FilterComponent />
            <FriendScroll />
        </div>
    );
}