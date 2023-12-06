import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2023 - </span>
                    <span className={styles.category}>Culture</span>
                </div>
                <Link href={"/"}>
                    <h1>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Iste, fuga
                    </h1>
                </Link>
                <p className={styles.desc}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo, iste. Non dolor numquam natus itaque quia modi, minima
                    odit perferendis enim vitae illum placeat eveniet accusamus
                    eum illo. Sapiente, id.
                </p>
                <Link href={"/"} className={styles.link}>
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default Card;
