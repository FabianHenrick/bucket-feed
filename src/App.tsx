
import { Post } from './components/posts/Post'
import styles from './App.module.css'
import { Header } from './components/header/Header'
import{Sidebar} from './components/sidebar/Sidebar'
import './global.css'

let posts=[
  {id:1,
    author: {
      avatarUrl: 'https://github.com/JohnLDev.png',
      name: 'John Lenon',
      role:'Only Fans Artist'
    },
    content: [
     { type:'paragraph', content: 'Quase esqueci de dar, boa noite!🤤',},
     { type:'paragraph', content: 'Lembrando que minhas fotos com a Tigresa Vip estão com desconto.'},
     { type: 'link', content: '#OnlyJonh #Packs'}
    ],
    publishedAt:new Date('2023-01-15 20:00:00'),
  },
  {id:2,
    author: {
      avatarUrl: 'https://pps.whatsapp.net/v/t61.24694-24/317657166_125363037088822_1837386508038471594_n.jpg?ccb=11-4&oh=01_AdQ7dxiOPvxqmhBujN906jjCs957tLXj-0MMmdG26FxGgw&oe=63E00777',
      name: 'Haniel Oliveira',
      role:'Corno Manso'
    },
    content: [
     { type:'paragraph', content: 'Não aguento mais trabalhar com transporte de madeira, ontem tive que levar tora até em Joá😫',},
    ],
    publishedAt:new Date('2023-01-10 20:00:00'),
  },
  {id:3,
    author: {
      avatarUrl: 'https://github.com/FabianHenrick.png',
      name:'Fabian Henrick',
      role:'Full-Stack Developer'
    },
    content: [
     { type:'paragraph', content: 'Cansei de Engulir tanta porra calado 😡',},
    ],
    publishedAt:new Date('2023-01-09 20:00:00'),
  },
];

export function App() {

  return (
   
      <div>
       <Header />
       <div className={styles.wrapper}>
         <Sidebar
          coverUrl ="https://images5.alphacoders.com/121/1217525.png"
          user = 'Fabian Henrick'
          descrip = 'Web Developer'

         />
         
         <main>
         {posts.map(post =>{
          return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />)
         })}
         </main>
       </div>
    </div>
  )
}
