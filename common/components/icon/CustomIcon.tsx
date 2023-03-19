import { Icon } from "@mui/material"
import styles from './CustomIcon.module.css';

export type IconName = 'home' | 'paid' | 'menu' | 'search' | 'favorite';

interface Props {
    name: IconName
}

export const CustomIcon = ({name}: Props) => {
    return (
        <Icon className={styles.iconFont}>{name}</Icon>
    )
}