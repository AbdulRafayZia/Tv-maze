import styles from "./header.module.css"

export default function Header() {


 return(
    <>
  
  <header className={styles.header}>
      <p className={styles.title}>TV Bland</p>
      <p className={styles.text}>TV Shows and web series database <br/>Create personalised schedules. Episode guid, cast, crew andcharacter information.</p>
      
      </header>
        
    </>
 )
}