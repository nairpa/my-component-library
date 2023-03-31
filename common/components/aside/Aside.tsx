import Link from 'next/link';
import styles from './Aside.module.css';
import Image from 'next/image';

export const Aside = () => {
    return (
        <aside className={styles.sidebar}>
            <Link href='/'>
                <Image src="/stone-iu-iso.svg" alt="stone-ui-logo" width={220} height={100} />
            </Link>
            <ul className={styles.list}>
                <Link href='/'><li>Getting started</li></Link>
                <Link href='buttons'><li>Buttons</li></Link>
            </ul>
        </aside>
    )
}