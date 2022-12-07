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
          avatarUrl = "https://scontent.fgru6-1.fna.fbcdn.net/v/t31.18172-8/29355228_1513387852092495_7376612784037570248_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFOcGNd4qmii3NFliWJgkAd504Bgs9nZtrnTgGCz2dm2ruxZVA3khFsSqwfIDDBezzYB_Yw1HM4oZ0k3uNOgVn8&_nc_ohc=xNw2DF_EtkwAX-ehh3V&_nc_ht=scontent.fgru6-1.fna&oh=00_AfDzLp3uI2cZnP1gqq3tckV4i2dAlhvyybBWGZTMcYpwzw&oe=63B76537"
          author = 'John Lenon'
          descrip = 'Only Fans Artist'
          coment = 'Quase esqueci de dar, boa noite!🤤'
       />

      <Post 
          avatarUrl = "https://xesque.rocketseat.dev/users/avatar/profile-c1251e41-8a53-4e05-b4d2-fe4050cfec18-1649877645530.jpg"
          author = 'Fabian Henrick' 
          descrip = 'Web Delevoper'
          coment = 'Cansei de Engulir tanta porra calado 😡'
       />

      <Post 
          avatarUrl = "https://scontent.fgru6-1.fna.fbcdn.net/v/t39.30808-6/281538345_5047164855349695_7536293735702300454_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE-aq0UeslvDLeFBKZatKj__YSAhYYRp7H9hICFhhGnsRe5veH21R5c5OQLNPAzSDBdoOglSYftAbCaRqnqE_sQ&_nc_ohc=6lJZMV_BoDQAX9jniCX&_nc_ht=scontent.fgru6-1.fna&oh=00_AfCewYZGkQw_YatZxHovnIpEX3l7KZlkx7PBgdticKpwjQ&oe=6393FDA5"
          author = 'Haniel Oliveira'
          descrip = 'Corno Manso'
          coment = 'Não aguento mais trabalhar com transporte de madeira, ontem tive que levar tora até em Joá😫'
       />
         </main>
       </div>
    </div>
  )
}
