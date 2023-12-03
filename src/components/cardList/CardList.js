// components
import { Pagination } from "@/components/pagination/Pagination";

// css file
import styles from "./cardList.module.css";

export const CardList = () => {
    return (
        <div className={styles.container}>
            <Pagination />
        </div>
    );
};
