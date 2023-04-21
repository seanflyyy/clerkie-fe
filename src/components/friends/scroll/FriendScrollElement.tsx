import styles from '@/styles/Friends.module.css';
import { Friend, FriendState } from '@/common/types';
import Image from 'next/image';


export default function FriendScrollElement(friend: Friend) {
    const convertStateToString = (state: FriendState) => {
        switch (state) {
            case FriendState.CLOSE_FRIENDS:
                return 'Close Friends';
            case FriendState.SUPER_CLOSE_FRIENDS:
                return 'Super Close Friends';
            case FriendState.NONE:
                return '';
        }
    }

    const renderFriendStateStyle = () => {
        switch (friend.state) {
            case FriendState.CLOSE_FRIENDS:
                return `${styles.closeFriends} ${styles.friendState}`;
            case FriendState.SUPER_CLOSE_FRIENDS:
                return `${styles.superCloseFriends} ${styles.friendState}`;
            case FriendState.NONE:
                return ``;
        }

    }

    return (
        <div className={styles.card}>
            <div>
                <span className={styles.friendName}>
                    {friend.name}
                </span>
                <span className={renderFriendStateStyle()}>
                    {convertStateToString(friend.state)}
                </span>
            </div>
            <div className={styles.bottomSection}>
                <span className={styles.contactDetails}>
                    {friend.email}
                </span>
                <Image
                    src={"/friends/Ellipse.svg"}
                    alt={`Ellipse`}
                    width={5}
                    height={5}
                />
                <span className={styles.contactDetails}>
                    {friend.phone}
                </span>
            </div>
        </div>
    )
}