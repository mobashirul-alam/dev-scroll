// configuration
import Image from "next/image";

// css file
import styles from "./featured.module.css";

export const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, Dev scroll is here!</b> Discover infinite stories and
                creative ideas.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image
                        src={"/p1.jpeg"}
                        alt=""
                        width={688}
                        height={500}
                        style={{ borderRadius: "10px" }}
                    />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.
                    </h1>
                    <p className={styles.postDesc}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Recusandae quis repellendus suscipit illo saepe
                        nemo delectus, id totam omnis, fugit beatae, ipsa
                        impedit? Soluta maiores esse modi similique ut quaerat!
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    );
};
