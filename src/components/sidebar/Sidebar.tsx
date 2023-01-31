import styles from './Sidebar.module.css'
import { PencilLine} from 'phosphor-react'
import { Avatar } from '../avatar/Avatar'

export function Sidebar(props){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={props.coverUrl}></img>
            <div className={styles.profile}>
                <Avatar 
                    src="https://github.com/FabianHenrick.png"
                    hasBorder

                />
                <strong>{props.user}</strong>
                <span>{props.descrip}</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine 
                    size = {20}
                    color='#00B37E'
                    />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}