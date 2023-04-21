import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/Friends.module.css";

export default function FilterToggle({ toggleState, onPress }
    : {
        toggleState: boolean;
        onPress: () => void
    }) {

    const renderFilterToggle = () => {
        if (toggleState) {
            return `${styles.toggleActive} ${styles.filterToggle}`;
        } else {
            return styles.filterToggle;
        }
    }

    return (
        <div className={styles.filterToggleContainer}>
            <div className={renderFilterToggle()} onClick={() => {
                onPress();
            }}>
                <Image
                    src={toggleState ? "/friends/FilterActive.svg" : "/friends/Filter.svg"}
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
            <span className={styles.clearAll}>
                Clear all
            </span>
        </div>
    )
}