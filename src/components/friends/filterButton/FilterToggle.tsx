import Image from "next/image";
import styles from "@/styles/Friends.module.css";
import ClearAllButton from "./ClearAllButton";

interface Props {
    numFilters: number;
    isFilterCloseFriends: boolean;
    isFilterSuperCloseFriends: boolean;
    onPressClearAll: () => void;
    toggleState: boolean;
    onPress: () => void;
}

export default function FilterToggle(props: Props) {
    const renderFilterToggleStyle = () => {
        if (props.toggleState || props.numFilters > 0) {
            return `${styles.toggleActive} ${styles.filterToggle}`;
        } else {
            return styles.filterToggle;
        }
    }

    return (
        <div className={styles.filterToggleContainer}>
            <div className={renderFilterToggleStyle()} onClick={() => {
                props.onPress();
            }}>
                <Image
                    src={props.toggleState || props.numFilters > 0
                        ? "/friends/FilterActive.svg" : "/friends/Filter.svg"}
                    alt="Filter"
                    width={19}
                    height={20}
                />
                {
                    props.numFilters > 0 && (<span>
                        {props.numFilters}
                    </span>)
                }
            </div>
            <span>
                <Image
                    src={"/friends/VerticalBar.svg"}
                    alt="VerticalBar"
                    width={2}
                    height={28}
                />
            </span>
            <ClearAllButton
                isActive={props.isFilterCloseFriends || props.isFilterSuperCloseFriends}
                onPress={props.onPressClearAll}
            />
        </div>
    )
}