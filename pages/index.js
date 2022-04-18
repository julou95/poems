import React, { useState } from 'react'
import Icons from '../src/components/Icons'
import Filters from '../src/components/Filters'
import styles from '../styles/Home.module.css'


function Home({ poems, poem, length }) {
  const [currentPoem, setCurrentPoem] = useState(poem)
  const [showNsfw, setShowNsfw] = useState(true)

  const reloadPoem = () => {
    const newIndex = Math.floor(Math.random() * length)
    console.log('get new', poems[newIndex])
    setCurrentPoem(poems[newIndex])
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.card}>
          <Filters setNsfw={setShowNsfw} isNsfw={showNsfw} />
        </div>
        <div className={styles.card}>
          <h2>
            { currentPoem.title }
          </h2>
          <p>
            { currentPoem.text }
          </p>
        </div>
      </main>
      <footer>
        <button className={styles.reload} onClick={reloadPoem}>
          <Icons name="reload" size="48" />
        </button>
      </footer>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const data = await import('/public/data.json')
  const length = data.length
  const randomIndex = Math.floor(Math.random() * length)
  const poem = data[randomIndex]
  return { poems: data, poem: poem, length }
}

export default Home