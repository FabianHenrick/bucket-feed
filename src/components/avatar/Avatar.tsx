import styles from './Avatar.module.css'

interface avatarProps{
    hasBorder: boolean;
    src:string;
    alt?:string;
}

export function Avatar({hasBorder = true, src}:avatarProps){
    return (
       <img 
       className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={src} >

        </img> 
    )
}