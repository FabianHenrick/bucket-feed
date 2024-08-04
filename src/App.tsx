
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
      role:'Tech Lead'
    },
    content: [
     { type:'paragraph', content: 'Quase esqueci de dar boa noite!🤤',},
     { type:'paragraph', content: 'Desde quando comecei a estudar quase não tenho tempo pra dormir.'},
     { type: 'link', content: '#GoodNight #Estudando'}
    ],
    publishedAt:new Date('2024-08-15 20:00:00'),
  },
  {id:2,
    author: {
      avatarUrl: 'https://media.licdn.com/dms/image/D4D03AQEX3Uy23j00Hw/profile-displayphoto-shrink_200_200/0/1691893253444?e=2147483647&v=beta&t=fPutQZg3ehX0ifesaPY15oZWneYm8Zg-UrG9XG3cyS8',
      name: 'Haniel Oliveira',
      role:'Auxiliar de TI'
    },
    content: [
     { type:'paragraph', content: 'Passei o dia pedindo pra desligarem e religuarem o roteador novamente😫',},
    ],
    publishedAt:new Date('2024-07-10 20:00:00'),
  },
  {id:3,
    author: {
      avatarUrl: 'https://github.com/FabianHenrick.png',
      name:'Fabian Henrick',
      role:'Full-Stack Developer'
    },
    content: [
     { type:'paragraph', content: 'Alguém sabe algum roadmap bom pra desenvolvedor front-end?'},
    ],
    publishedAt:new Date('2024-08-09 20:00:00'),
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
