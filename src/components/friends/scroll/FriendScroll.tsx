import React, { useEffect, useRef, useState } from 'react';
import { Friend } from '@/common/types';
import styles from '@/styles/Friends.module.css';
import { fetchFriends } from '@/pages/api/friends';
import FriendRow from './FriendRow';
import { FriendState } from '@/common/types';
import useAsync from '@/hooks/useAsync';
import FriendRowSkeleton from './FriendRowSkeleton';

export default function FriendScroll({ filterCloseFriends, filterSuperCloseFriends }: {
    filterCloseFriends: boolean;
    filterSuperCloseFriends: boolean;
}) {
    // const [friends, setFriends] = useState<Friend[]>([]);
    const ref = useRef(null);
    const { execute, status, value: friends, error } = useAsync<Friend[]>(fetchFriends, true);

    return (
        status === 'pending'
            ?
            <div className='animatePulse'>
                <FriendRowSkeleton />
                <FriendRowSkeleton />
                <FriendRowSkeleton />
                <FriendRowSkeleton />
                <FriendRowSkeleton />
                <FriendRowSkeleton />
                <FriendRowSkeleton />

            </div>
            : <div className={`${styles.list}`}>
                {friends?.filter((friend: Friend) => {
                    if (filterCloseFriends && filterSuperCloseFriends) {
                        return friend.state == FriendState.CLOSE_FRIENDS
                            || friend.state == FriendState.SUPER_CLOSE_FRIENDS;
                    } else if (filterCloseFriends) {
                        return friend.state == FriendState.CLOSE_FRIENDS;
                    } else if (filterSuperCloseFriends) {
                        return friend.state == FriendState.SUPER_CLOSE_FRIENDS;
                    } else {
                        return true;
                    }
                })
                    .map((friend: Friend, index: number) => (
                        <FriendRow {...friend} key={index} />
                    ))}
                <div ref={ref}></div>
            </div >
    )
}