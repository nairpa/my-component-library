import { Icon } from "@mui/material"
import styles from './CustomIcon.module.css';

export type IconName = 'content_copy' | 'paid' | 'menu' | 'search' | 'favorite';

interface Props {
    name: IconName,
    customClass?: string,
}

export const CustomIcon = ({name, customClass}: Props) => {
    return (
        <Icon className={`${styles.iconFont} ${customClass ? customClass : ''}`}>{name}</Icon>
    )
}