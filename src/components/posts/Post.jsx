import style from './Post.module.css'
import {Comment} from '../comment/Comment'
import {Avatar} from '../avatar/Avatar'

export function Post(props){

    return (

        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar
                        src="https://github.com/JohnLDev.png"
                        hasBorder={true}
                     />
                    <div className={style.authorInfo}>
                        <strong>Nome Genérico</strong>
                        <span> {props.descrip} </span>
                    </div>
                </div>
                <time title="11 de maio as 08:13" dateTime="2022-05-11 08:13:30" >Publicado a 1h</time>
            </header>
            <p className={style.comment}>{props.comment}</p>
        <form className={style.commentForm}>
            <strong>Deixe seu Feedback</strong>
            <textarea placeholder="Deixe seu comentário"></textarea>
            <button type="submit">Comentar</button>
        </form>

        <div className={style.commentList}>
            <Comment />
        </div>

        </article>
    )
}