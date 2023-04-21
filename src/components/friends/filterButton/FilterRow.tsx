import Image from "next/image";
import styles from "@/styles/Friends.module.css";
import { useState } from "react";

export default function FilterRow({ text, onPress, state }: {
    text: string;
    onPress: () => void;
    state: boolean;
}) {
    return (
        <div className={styles.filterRow}>
            <div>
                {text}
            </div>
            <Image
                src={state ? "/friends/CheckBoxChecked.svg" : "/friends/CheckBoxEmpty.svg"}
                alt="CheckBox"
                height={19}
                width={19}
                onClick={onPress}
            />
        </div>

    )
}

