import React, { useState } from 'react'
import Icons from '../src/components/Icons'
import Filters from '../src/components/Filters'
import styles from '../styles/Add.module.css'
import fs from 'fs'


function Add({ data =[] }) {
  const [showNsfw, setShowNsfw] = useState(true)

  const addPoem = () => {
    console.log('data', data)
    const newData = [...data.default]
    newData.push({
      id: data.length + 1,
      text: 'this is jjust a test',
      title: 'test',
      nsfw: true,
      language: 'en',
    });
    fs.writeFile('/public/config.json', JSON.stringify(newData));
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>ADDDDD</h1>
        <textarea type="text" className={styles.inputcard} placeholder="insert here.." />
        <div className={styles.card}>
          Filters
        </div>
      </main>
      <footer>
        <button className={styles.reload} onClick={addPoem}>
          Add Poem
        </button>
      </footer>
    </div>
  )
}

Add.getInitialProps = async (ctx) => {
  const data = await import('/public/data.json')
  return { data }
}

export default Add