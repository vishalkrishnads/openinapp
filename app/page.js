'use client'

import { GoogleOAuthProvider } from '@react-oauth/google';
import { Lato } from 'next/font/google'
import styles from './styles/page.module.css'
import SignIn from './signin';

export const lato = Lato({
  subsets: ['latin'],
  weight: '400'
})

export default function Home() {

  return (
    <GoogleOAuthProvider clientId='1076100266525-98ippp1ubmtv8pi7fsbhcmra2vd00jpd.apps.googleusercontent.com'>
      <main className={styles.main}>
        <div className={styles.banner}>
          <h1>Board.</h1>
        </div>
        <div className={styles.content}>
          <SignIn />
        </div>
      </main>
    </GoogleOAuthProvider>
  )
}
