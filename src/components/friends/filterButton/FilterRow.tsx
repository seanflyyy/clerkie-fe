import Image from "next/image";
import styles from "@/styles/Friends.module.css";
import { useState } from "react";

export default function FilterRow({ text, onPress }: {
    text: string;
    onPress: () => void;

}) {
    const [toggleStatus, setToggleStatus] = useState(false);

    const onPressCheckbox = () => {
        setToggleStatus(!toggleStatus);
        onPress();
    }

    return (
        <div className={styles.filterRow}>
            <div>
                {text}
            </div>
            <Image
                src={toggleStatus ? "/friends/CheckBoxChecked.svg" : "/friends/CheckBoxEmpty.svg"}
                alt="CheckBox"
                height={19}
                width={19}
                onClick={onPressCheckbox}
            />
        </div>

    )
}

