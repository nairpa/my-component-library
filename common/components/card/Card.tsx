import { PropsWithChildren, useState } from 'react';
import styles from './Card.module.css';

export const Card = ({children}: PropsWithChildren) => {
    const [ tab, setTab ] = useState('example');

    const handleTabChange = (e: any) => {
        setTab(e.target.id);
    }

    const getCurrentTab = () => {
        if(tab === 'example') {
            return (
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                {children}
                </div>
            </div>)
        } else if(tab === 'code') {
            return (
                <div className={styles.cardCode}>
                    <div className={styles.card}>
                        {`<Button color="primary" variant="text">`}
                    </div>
                </div>
            )
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.cardButtons}>
                <button name='example' id="example" onClick={(e) => handleTabChange(e)}>example</button>
                <button name='code' id="code" onClick={(e) => handleTabChange(e)}>code</button>
            </div>
            { getCurrentTab() }
        </div>
    )
}