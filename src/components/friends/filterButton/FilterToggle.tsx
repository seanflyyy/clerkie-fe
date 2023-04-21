import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/Friends.module.css";
import ClearAllButton from "./ClearAllButton";

interface Props {
    isFilterCloseFriends: boolean;
    isFilterSuperCloseFriends: boolean;
    onPressClearAll: () => void;
    toggleState: boolean;
    onPress: () => void;
}

export default function FilterToggle(props: Props) {

    const renderFilterToggle = () => {
        if (props.toggleState) {
            return `${styles.toggleActive} ${styles.filterToggle}`;
        } else {
            return styles.filterToggle;
        }
    }

    return (
        <div className={styles.filterToggleContainer}>
            <div className={renderFilterToggle()} onClick={() => {
                props.onPress();
            }}>
                <Image
                    src={props.toggleState ? "/friends/FilterActive.svg" : "/friends/Filter.svg"}
                    alt="Filter"
                    width={19}
                    height={20}
                />
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