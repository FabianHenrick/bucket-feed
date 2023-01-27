import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment(props){
    return(
        <div className={styles.comment}>
            <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/833cdd3e-ebb9-4385-8dff-b7021141ec5d-profile_image-300x300.png"></img>
            <div className ={styles.commentBox}>
               <div className = {styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Fabian Henrick</strong>
                            <time title='8 de março de 2022'>cerca de 4 horas atrás</time>
                        </div>
                        <button title ="Deletar">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p> {props.content}</p>

               </div>

               <footer>
                <button>
                  <ThumbsUp/> 
                   Aplaudir <span>20</span>
                </button>
               </footer>
            </div>
        </div>
    )
}