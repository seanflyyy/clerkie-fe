import React, { useEffect, useRef, useState } from 'react';
import { Friend } from '@/common/types';
import styles from '@/styles/Friends.module.css';
import { fetchFriends } from '@/pages/api/friends';
import FriendRow from './FriendRow';
import { FriendState } from '@/common/types';

export default function FriendScroll({ filterCloseFriends, filterSuperCloseFriends }: {
    filterCloseFriends: boolean;
    filterSuperCloseFriends: boolean;
}) {
    const [friends, setFriends] = useState<Friend[]>([]);
    const [isFetching, setIsFetching] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const getFriends = async () => {
            const fetchedFriends: Friend[] = await fetchFriends();
            setFriends(fetchedFriends);
        };
        getFriends();
    }, []);


    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsFetching(true);
            }
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        }
    }, [ref]);

    useEffect(() => {
        if (!isFetching) return;

        setIsFetching(false);
    }, [isFetching])

    return (
        <div className={styles.list}>
            {friends.filter((friend: Friend) => {
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
    );
}