import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1><span style={{color:"blue"}}>News</span> App</h1>
      <p>You can access to lastest news here.</p>
    </div>
  )
}
