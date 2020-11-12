import styles from "./layout.module.css"
import Head from "next/head"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link"

const name = "Alvin Uchenna"
export const siteTitle = "Basic Next JS webpage"

function layout({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default layout
