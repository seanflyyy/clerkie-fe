import { useState } from "react";
import FilterDropdown from "./FilterDropdown";
import FilterToggle from "./FilterToggle";
import styles from "@/styles/Friends.module.css";

export default function FilterComponent() {
    const [isToggle, setIsToggle] = useState(false);
    const [toggleState, setToggleState] = useState(false);

    const onPressToggle = () => {
        setIsToggle(!isToggle);
        setToggleState(!toggleState);
    }

    return (
        <div className={styles.filterComponentContainer}>
            <FilterToggle toggleState={toggleState} onPress={onPressToggle} />
            {isToggle && <FilterDropdown onPress={onPressToggle} />}
        </div>
    )
}