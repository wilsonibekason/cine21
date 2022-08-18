import { useState } from 'react'
import {Feed, Footer,Header, MovieCard, Post,Tickets} from "./components"
import styles from './styles'
function App() {
  return (
  <>
  <div className='bg-primary w-full overflow-hidden'>
       <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Header/>
        </div>
       </div>
       {/** header */}
       <div className={`${styles.boxWidth}`}>
        <Feed/>
       </div>
       <div className={`${styles.paddingX} bg-primary ${styles.flexStart}`}>
       <Tickets/>
       <Footer/>
       </div>
  </div>
  </>
  )
}

export default App
