import styles from "@/styles/Friends.module.css";

export default function ClearAllButton({
    isActive,
    onPress
}: {
    isActive: boolean;
    onPress: () => void;
}) {
    const renderClearAllStyle = () => {
        if (isActive) {
            return `${styles.clearAllActive} ${styles.button}`
        }
        return `${styles.clearAll} ${styles.button}`
    }

    return (
        <button className={renderClearAllStyle()} onClick={onPress}>
            Clear all
        </button>
    )


}