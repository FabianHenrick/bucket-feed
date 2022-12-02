import styles from './Header.module.css'
import bucketLogo from '../../assets/bucket-logo.svg'
export function Header() {
    return (
        <header className={styles.header}>
            <div>
                <img src={bucketLogo} alt="Logotipo do FaceBucket"/>
                <h2 >Face Bucket </h2>
           </div>
        </header>
    )
}