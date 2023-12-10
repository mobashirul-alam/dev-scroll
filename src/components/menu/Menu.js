// css file
import MenuCategories from "../menuCategories/MenuCategories";
import MenuPosts from "../menuPosts/MenuPosts";
import styles from "./menu.module.css";

export const Menu = () => {
    return (
        <div className={styles.container}>
            <MenuPosts withImage={false} />

            {/* Middle section */}
            <section>
                <h2 className={styles.subTitle}>Discover by topic</h2>
                <h1 className={styles.title}>Categories</h1>
                <MenuCategories />
            </section>

            {/* Final section */}
            <MenuPosts withImage={true} />
        </div>
    );
};
