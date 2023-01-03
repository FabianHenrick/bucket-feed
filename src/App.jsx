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
          comment = 'Quase esqueci de dar, boa noite!🤤'
       />

      <Post 
          avatarUrl = "https://xesque.rocketseat.dev/users/avatar/profile-c1251e41-8a53-4e05-b4d2-fe4050cfec18-1649877645530.jpg"
          author = 'Fabian Henrick' 
          descrip = 'Web Delevoper'
          comment = 'Cansei de Engulir tanta porra calado 😡'
       />

      <Post 
          avatarUrl = "https://scontent.fgru6-1.fna.fbcdn.net/v/t39.30808-6/286709535_5125421047524075_4756231834624939953_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHGn2h3U-9WWt-X16fWB5Jhott2ObikPB6i23Y5uKQ8HiHHeUKSITeEIJWNwRD--O0uz83lu_pWJSg9VgtcEg8T&_nc_ohc=7qjBQHyDhNAAX9XPH-u&_nc_oc=AQkQLNwlbgee8iilTel-rgOBZ3ND1CMQBYbu58XDtb9OD4YZf3UVLeL5GW5vMq1MRTcK71GS20ShqzuzszZL6yZ-&tn=nz6-Rc-0r95TvM08&_nc_ht=scontent.fgru6-1.fna&oh=00_AfAFf2LlXi9HY2sADNSaTbfsUfbBSTgBQthgbG2Qyg0_zQ&oe=63B9354D"
          author = 'Haniel Oliveira'
          descrip = 'Corno Manso'
          comment = 'Não aguento mais trabalhar com transporte de madeira, ontem tive que levar tora até em Joá😫'
       />
         </main>
       </div>
    </div>
  )
}
