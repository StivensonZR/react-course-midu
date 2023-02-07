import { useState } from 'react'

import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true,
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'Stiven_ZapataR',
    name: 'Stivenson Zapata',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

export function App() {
  return (
    <section className="App">
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }

  {/*     <TwitterFollowCard
        userName="midudev" initialIsFollowing={true}>
        Miguel Ángel Durá
      </TwitterFollowCard>

      <TwitterFollowCard
        userName="Stiven_ZapataR" initialIsFollowing={false}>
        Stivenson Zapata
      </TwitterFollowCard>

      <TwitterFollowCard
        userName="auronplay" initialIsFollowing={false}>
        Auron
      </TwitterFollowCard>

      <TwitterFollowCard
        userName="petrogustavo" initialIsFollowing={true}>
        Gustavo Petro
      </TwitterFollowCard> */}


    </section>
  )
}

