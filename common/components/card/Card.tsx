import { PropsWithChildren } from 'react';
import styles from './Card.module.css';

export const Card = ({children}: PropsWithChildren) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardButtons}>
                <button>example</button>
                <button>code</button>
            </div>
            <div className={styles.card}>
                {children}
            </div>
        </div>
    )
}