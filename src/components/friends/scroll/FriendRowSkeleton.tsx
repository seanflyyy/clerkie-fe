import styles from '@/styles/Friends.module.css';

export default function FriendRowSkeleton() {
    return (
        <div className={styles.card}>
            <div style={{ justifyContent: 'space-between', flexDirection: 'row', display: 'flex' }}>
                <div className='linearGradientRight' style={{ width: 295, height: 18, borderRadius: 27 }}>
                </div>
                <div className='linearGradientLeft' style={{ width: 118, height: 18, borderRadius: 27 }}>
                </div>
            </div>
            <div style={{ justifyContent: 'space-between', flexDirection: 'row', display: 'flex' }}>
                <div className='linearGradientRight' style={{ width: 340, height: 14, borderRadius: 27, marginTop: 10 }}>
                </div>
                <div className='linearGradientLeft' style={{ width: 84, height: 14, borderRadius: 27, marginTop: 10 }}>
                </div>
            </div>
        </div>
    )
}