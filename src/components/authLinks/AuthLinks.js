// components
import Link from "next/link";

// css files
import styles from "./authLinks.module.css";

const AuthLinks = () => {
    // temporary
    const status = "notAuthenticated";

    return (
        <>
            {status === "notAuthenticated" ? (
                <Link href={"/login"}>Login</Link>
            ) : (
                <>
                    <Link href={"/write"}>Write</Link>
                    <span className={styles.logoutLink}>Logout</span>
                </>
            )}
        </>
    );
};

export default AuthLinks;
