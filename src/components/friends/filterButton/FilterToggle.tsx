import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/Friends.module.css";

export default function FilterToggle() {
    const [isToggle, setIsToggle] = useState(false);

    const renderFilterToggle = () => {
        if (!isToggle) {
            return `${styles.toggleActive} ${styles.filterToggle}`;
        } else {
            return styles.filterToggle;
        }
    }

    return (
        <div className={styles.filterContainer}>
            <div className={renderFilterToggle()} onClick={() => setIsToggle(!isToggle)}>
                <Image
                    src={isToggle ? "/friends/Filter.svg" : "/friends/FilterActive.svg"}
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