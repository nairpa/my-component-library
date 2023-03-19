import Link from 'next/link';
import styles from './Aside.module.css';

export const Aside = () => {
    return (
        <aside className={styles.sidebar}>
            <h3>My Component Library</h3>
            <ul className={styles.list}>
                <Link href='buttons'><li>Buttons</li></Link>
            </ul>
        </aside>
    )
}