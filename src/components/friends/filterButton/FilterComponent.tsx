import { useState } from "react";
import FilterDropdown from "./FilterDropdown";
import FilterToggle from "./FilterToggle";
import styles from "@/styles/Friends.module.css";

interface Props {
  numFilters: number;
  isFilterCloseFriends: boolean;
  isFilterSuperCloseFriends: boolean;
  onPressCloseFriends: (state: boolean) => void;
  onPressSuperCloseFriends: (state: boolean) => void;
}

export default function FilterComponent(props: Props) {
  const [isToggle, setIsToggle] = useState(false);
  const [toggleState, setToggleState] = useState(false);

  const onPressToggle = () => {
    setIsToggle(!isToggle);
    setToggleState(!toggleState);
  }

  const onClearAll = () => {
    props.onPressCloseFriends(false);
    props.onPressSuperCloseFriends(false);
  }

  return (
    <div className={styles.filterComponentContainer}>
      <FilterToggle
        numFilters={props.numFilters}
        isFilterCloseFriends={props.isFilterCloseFriends}
        isFilterSuperCloseFriends={props.isFilterSuperCloseFriends}
        onPressClearAll={onClearAll}
        toggleState={toggleState}
        onPress={onPressToggle}
      />
      {isToggle && <FilterDropdown
        onClearAll={onClearAll}
        isFilterCloseFriends={props.isFilterCloseFriends}
        isFilterSuperCloseFriends={props.isFilterSuperCloseFriends}
        onPressCloseButton={onPressToggle}
        onPressCloseFriends={props.onPressCloseFriends}
        onPressSuperCloseFriends={props.onPressSuperCloseFriends}
      />}
    </div>
  )
}