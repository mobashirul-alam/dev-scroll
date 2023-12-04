"use client";

// configuration
import { useContext } from "react";

// components
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";

// css file
import styles from "./themeToggle.module.css";

const ThemeToggle = () => {
    const { theme, toggle } = useContext(ThemeContext);

    return (
        <div
            className={styles.container}
            onClick={toggle}
            style={
                theme === "dark"
                    ? { backgroundColor: "white" }
                    : { backgroundColor: "#0f172a" }
            }
        >
            <Image src={"/moon.png"} alt="" width={14} height={14} />
            <div
                className={styles.ball}
                style={
                    theme === "dark"
                        ? { left: 2, backgroundColor: "#0f172a" }
                        : { right: 2, backgroundColor: "white" }
                }
            ></div>
            <Image src={"/sun.png"} alt="" width={14} height={14} />
        </div>
    );
};

export default ThemeToggle;
