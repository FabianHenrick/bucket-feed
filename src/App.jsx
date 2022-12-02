import { useState } from 'react'
import { Post } from './components/posts/Post'
import styles from './App.module.css'
import { Header } from './components/header/Header'
import{Sidebar} from './components/sidebar/Sidebar'
import './global.css'

export function App() {

  return (
   
      <div>
       <Header />
       <div className={styles.wrapper}>
         <Sidebar
          coverUrl ="https://images5.alphacoders.com/121/1217525.png"
          avatarUrl= 'https://xesque.rocketseat.dev/users/avatar/profile-c1251e41-8a53-4e05-b4d2-fe4050cfec18-1649877645530.jpg'
          user = 'Fabian Henrick'
          descrip = 'Web Developer'

         />
         
         <main>
         <Post 
          author = 'John Lenon'
          coment = 'Quase esqueci de dar, boa noite!🤤'
       />

      <Post 
          author = 'Fabian Henrick'
          coment = 'Cansei de Engulir tanta porra calado 😡'
       />

      <Post 
          author = 'Haniel Oliveira'
          coment = 'Não aguento mais trabalhar com transporte de madeira, ontem tive que levar tora até em Joá😫'
       />
         </main>
       </div>
    </div>
  )
}
