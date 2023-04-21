import FilterToggle from '@/components/friends/filterButton/FilterToggle';
import FriendScroll from '@/components/friends/scroll/FriendScroll';
import React from 'react';

export default function Friends() {
    return (
        <div>
            <FilterToggle />
            <FriendScroll />
        </div>
    );
}