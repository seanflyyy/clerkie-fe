import React, { useEffect, useRef, useState } from 'react';
import FriendScrollElement from './FriendScrollElement';
import { Friend } from '@/common/types';
import styles from '@/styles/Friends.module.css';
import { fetchFriends } from '@/pages/api/friends';

export default function FriendScroll() {
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
            {friends.map((friend: Friend, index: number) => (
                <FriendScrollElement {...friend} key={index} />
            ))}
            <div ref={ref}></div>
        </div >
    );
}