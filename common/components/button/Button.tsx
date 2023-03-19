import { Label } from "@mui/icons-material";
import { ButtonHTMLAttributes, DetailedHTMLProps, useRef } from "react";
import { CustomIcon, IconName } from "../icon/CustomIcon";
import styles from './Button.module.css';

type Variants = 'outline' | 'filled' | 'text';
type Sizes = 'sm' | 'md' | 'lg';
type Colors = 'default' | 'primary' | 'secondary' | 'danger' | 'success';

interface Button extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: Variants,
    disableShadow?: boolean,
    startIcon?: IconName,
    endIcon?: IconName,
    size?: Sizes,
    color?: Colors,
    label: string,
}

export const Button = ({label = "Button", variant = 'filled', disableShadow = false, startIcon, endIcon, size = 'md', color='primary', ...props} : Button) => {
    const ref = useRef<HTMLButtonElement>(null);
 
    const getIcon = () => {
        if(startIcon) {
            return(
                <>
                    <CustomIcon name={startIcon}/>
                    <span className={styles.buttonLabel}>{ label }</span>
                </>
            )
        } else if(endIcon) {
            return(
                <>
                    <span className={styles.buttonLabel}>{ label }</span>
                    <CustomIcon name={endIcon}/>
                </>
            )
        } else {
            return <>{ label }</>
        }
    }

    return (
        <button 
            className={`
                ${styles.button} 
                ${styles[variant]} 
                ${styles[color]} 
                ${styles[size]}
                ${!disableShadow ? styles.shadow : ''}
            `} 
            ref={ref} 
            {...props}
        > { getIcon() }</button>
    )
}