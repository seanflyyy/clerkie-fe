import { useState } from "react";
import FilterDropdown from "./FilterDropdown";
import FilterToggle from "./FilterToggle";
import styles from "@/styles/Friends.module.css";

export default function FilterComponent({
    isFilterCloseFriends,
    isFilterSuperCloseFriends,
    onPressCloseFriends,
    onPressSuperCloseFriends
}: {
    isFilterCloseFriends: boolean;
    isFilterSuperCloseFriends: boolean;
    onPressCloseFriends: (state: boolean) => void;
    onPressSuperCloseFriends: (state: boolean) => void;
}) {
    const [isToggle, setIsToggle] = useState(false);
    const [toggleState, setToggleState] = useState(false);

    const onPressToggle = () => {
        setIsToggle(!isToggle);
        setToggleState(!toggleState);
    }

    return (
        <div className={styles.filterComponentContainer}>
            <FilterToggle
                isFilterCloseFriends={isFilterCloseFriends}
                isFilterSuperCloseFriends={isFilterSuperCloseFriends}
                onPressClearAll={() => {
                    onPressCloseFriends(false);
                    onPressSuperCloseFriends(false);
                }}
                toggleState={toggleState}
                onPress={onPressToggle}
            />
            {isToggle && <FilterDropdown
                isFilterCloseFriends={isFilterCloseFriends}
                isFilterSuperCloseFriends={isFilterSuperCloseFriends}
                onPressCloseButton={onPressToggle}
                onPressCloseFriends={onPressCloseFriends}
                onPressSuperCloseFriends={onPressSuperCloseFriends}
            />}
        </div>
    )
}