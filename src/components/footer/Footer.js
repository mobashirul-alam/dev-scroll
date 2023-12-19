// css file
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

export const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image
                        src={"/logo.png"}
                        alt="Dev Scroll"
                        width={50}
                        height={50}
                    />
                    <h1 className={styles.logoText}>Dev Scroll</h1>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa, tenetur sequi? Provident perferendis expedita commodi
                    quam nisi exercitationem tempora ad illo repudiandae cum
                    mollitia, suscipit dolorem. Excepturi repellendus tempore
                    officia
                </p>
                <div className={styles.icons}>
                    <Image
                        src={"/facebook.png"}
                        alt=""
                        width={18}
                        height={18}
                    />
                    <Image
                        src={"/instagram.png"}
                        alt=""
                        width={18}
                        height={18}
                    />
                    <Image src={"/youtube.png"} alt="" width={18} height={18} />
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href={"/"}>Homepage</Link>
                    <Link href={"/"}>Blog</Link>
                    <Link href={"/"}>About</Link>
                    <Link href={"/"}>Contact</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href={"/"}>Style</Link>
                    <Link href={"/"}>Fashion</Link>
                    <Link href={"/"}>Coding</Link>
                    <Link href={"/"}>Travel</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href={"/"}>Facebook</Link>
                    <Link href={"/"}>Instagram</Link>
                    <Link href={"/"}>Youtube</Link>
                </div>
            </div>
        </div>
    );
};
