import { useState } from 'react'
import { Post } from './components/posts/Post'
import styles from './App.module.css'
import { Header } from './components/header/Header'
import{Sidebar} from './components/sidebar/Sidebar'
import './global.css'
import { Avatar } from './components/avatar/avatar'

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
         <Post 
          author = 'John Lenon'
          descrip = 'Only Fans Artist'
          comment = 'Quase esqueci de dar, boa noite!🤤'
       />

      <Post 
          
          author = 'Fabian Henrick' 
          descrip = 'Web Delevoper'
          comment = 'Cansei de Engulir tanta porra calado 😡'
       />

      <Post 
         
          author = 'Haniel Oliveira'
          descrip = 'Corno Manso'
          comment = 'Não aguento mais trabalhar com transporte de madeira, ontem tive que levar tora até em Joá😫'
       />
         </main>
       </div>
    </div>
  )
}
