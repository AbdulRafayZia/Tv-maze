import {GrFormPrevious, GrFormNext} from "react-icons/gr"
import styles from "./footer.module.css"
import { useState } from "react"
export default  function Footer({currentPage,numbers, prevPage,nextPage,changePage}) {
   
    
    return (
      <footer className={styles.footer}>
    
      <button className={styles.prevlogo} onClick={prevPage} > <GrFormPrevious/></button>
     
      {/* number.map  */}
      {numbers.map((num,index)=>{
        return(
          
        
          <button className={`${currentPage===num&& styles.focus} ${styles.btn}`} onClick={()=>changePage(num)} key={index}>{num}</button>
        )
      })}
    
      <button className={styles.nextlogo} onClick={nextPage}> <GrFormNext/></button>
    

  </footer>
  )
    
}