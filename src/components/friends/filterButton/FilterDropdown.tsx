import styles from '@/styles/Friends.module.css';
import Image from 'next/image';
import FilterRow from './FilterRow';
import { useState } from 'react';
import ClearAllButton from './ClearAllButton';

interface Props {
    isFilterCloseFriends: boolean;
    isFilterSuperCloseFriends: boolean;
    onClearAll: () => void;
    onPressCloseButton: () => void
    onPressCloseFriends: (state: boolean) => void
    onPressSuperCloseFriends: (state: boolean) => void
}

export default function FilterDropdown(props: Props) {
    const [isCloseFriends, setCloseFriends] = useState(props.isFilterCloseFriends);
    const [isSuperCloseFriends, setSuperCloseFriends] = useState(props.isFilterSuperCloseFriends);

    const onApply = () => {
        props.onPressCloseFriends(isCloseFriends);
        props.onPressSuperCloseFriends(isSuperCloseFriends);
        props.onPressCloseButton();
    }

    return (
        <div className={styles.filterDropDownContainer}>
            <div className={styles.topBar}>
                <div className={styles.clearAllPosition}>
                    <ClearAllButton
                        isActive={isCloseFriends || isSuperCloseFriends}
                        onPress={props.onClearAll}
                    />
                </div>
                <div className={styles.filterText}>
                    Filter
                </div>
                <button className={`${styles.button} ${styles.closeButton}`}>
                    <Image
                        src={"/friends/CloseButton.svg"}
                        alt="CloseButton"
                        height={17}
                        width={17}
                        onClick={props.onPressCloseButton}
                    />
                </button>
            </div>
            <div className={styles.filterDropDownBottom}>
                <div className={styles.friendStatus}>
                    Friend Status
                </div>
                <FilterRow text={"Close Friends"} state={isCloseFriends} onPress={() => setCloseFriends(!isCloseFriends)} />
                <FilterRow text={"Super Close Friends"} state={isSuperCloseFriends} onPress={() => { setSuperCloseFriends(!isSuperCloseFriends) }} />
            </div>
            <div className={styles.buttonPosition}>
                <button className={styles.applyButton} onClick={onApply}>
                    Apply
                </button>
            </div>
        </div>
    )
}