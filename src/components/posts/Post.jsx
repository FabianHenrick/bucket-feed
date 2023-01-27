import style from './Post.module.css'
import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import {Comment} from '../comment/Comment'
import {Avatar} from '../avatar/Avatar'
import { LineSegment } from 'phosphor-react'
import { useState } from 'react'

const comments = [

]

export function Post(props){
     
    const [comments,setComments] = useState([

    ])
    const publishedDateFormatted = format( props.publishedAt ,"d 'de' LLLL 'ás' HH':'mm'h'", {locale:ptBR})

    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, { 
        locale:ptBR,
        addSuffix:true,
    })


    function  handleCreateNewComment(){
        event.preventDefault()
        setComments([...comments, comments.length+1])
    }

    return (

        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar
                        src={props.author.avatarUrl}
                        hasBorder={true}
                     />
                    <div className={style.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span> {props.author.role} </span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime="2022-05-11 08:13:30" >{publishedDateRelativeToNow} </time>
            </header>

            <div className={style.comment}>
                {props.content.map(line =>{
                    if (line.type === 'paragraph'){
                        return <p> {line.content}</p>
                    }else if (line.type === 'link'){
                        return <p><a href=''>{line.content}</a></p>
                    }
                })}
            </div>
               
        <form onSubmit={handleCreateNewComment} className={style.commentForm}>
            <strong>Deixe seu Feedback</strong>
            <textarea placeholder="Deixe seu comentário"></textarea>
            <button type="submit">Comentar</button>
        </form>

        <div className={style.commentList}>
            {comments.map(comment => {
                return <Comment />
            })}
        </div>

        </article>
    )
}