import { Lato } from 'next/font/google'
import Image from 'next/image'
import styles from './styles/page.module.css'

const lato = Lato({
  subsets: ['latin'],
  weight: '400'
})

export default function Home() {

  const Button = ({isLeft, icon, label}) => {
    return <div style={{ marginRight: isLeft ? 25 : 0 }} className={styles.button}>
      <div style={{ flex: 1 }} />
      <div className={styles.icon}>
        <Image
          src={icon}
          width={14}
          height={14}
          alt={label}
        />
      </div>
      <div className={styles.label}>
        <p>{label}</p>
      </div>
      <div style={{ flex: 1 }} />
    </div>
  }

  const Field = ({label, isMasked}) => {
    return <div className={styles.field}>
      <p className={lato.className}>{label}</p>
      <input type={isMasked ? 'password': 'text'} className={lato.className} />
    </div>
  }

  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <h1>Board.</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.signin}>
          <div className={styles.header}>
            <h2>Sign In</h2>
            <h3>Sign in to your account</h3>
          </div>
          <div className={styles.buttons}>
            <Button icon={'/google.png'} label={'Sign in with Google'} isLeft />
            <Button icon={'/apple.png'} label={'Sign in with Apple'} />
          </div>
          <div className={styles.form}>
            <div className={styles.box}>
              <div style={{ flex: 1.5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Field label={'Email address'} />
                <Field label={'Password'} isMasked />
              </div>
              <div className={styles.actions}>
                <p className={lato.className}>Forgot Password</p>
                <div className={styles.action}>
                  <p>Sign In</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.alternate}>
            <p className={lato.className}>{"Don't have an account?"} <a className={styles.link}>Register here</a></p>
          </div>
        </div>
      </div>
    </main>
  )
}
