import styles from '@/styles/Friends.module.css';
import Image from 'next/image';
import FilterRow from './FilterRow';

export default function FilterDropdown({ onPress }: { onPress: () => void }) {
    return (
        <div className={styles.filterDropDownContainer}>
            <div className={styles.topBar}>
                <button className={` ${styles.clearAll} ${styles.clearAllPosition} ${styles.button}`}>
                    Clear all
                </button>
                <div className={styles.filterText}>
                    Filter
                </div>
                <button className={`${styles.button} ${styles.closeButton}`}>
                    <Image
                        src={"/friends/CloseButton.svg"}
                        alt="CloseButton"
                        height={17}
                        width={17}
                        onClick={onPress}
                    />
                </button>
            </div>
            <div className={styles.filterDropDownBottom}>
                <div className={styles.friendStatus}>
                    Friend Status
                </div>
                <FilterRow text={"Close Friends"} onPress={() => { }} />
                <FilterRow text={"Super Close Friends"} onPress={() => { }} />
            </div>
            <div className={styles.buttonPosition}>
                <button className={styles.applyButton}>
                    Apply
                </button>
            </div>
        </div>
    )
}