// components
import { Pagination } from "@/components/pagination/Pagination";
import Card from "../card/Card";

// css file
import styles from "./cardList.module.css";

export const CardList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Posts</h1>
            <div className={styles.posts}>
                <Card />
                <Card />
                <Card />
            </div>
            <Pagination />
        </div>
    );
};
