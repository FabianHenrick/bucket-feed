import style from './Post.module.css'

export function Post(props){

    return (
        <div className={style.postbox}>
            <strong>{props.author}</strong>
             <p>{props.coment}</p>
        </div>
    )
}