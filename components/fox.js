import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from 'styles/fox.module.css'

const RandomFox = () => {
  const [imageUrl, setImageUrl] = useState(null)

  useEffect(() => {
    async function fetchRandomFox () {
      const response = await axios.get('https://randomfox.ca/floof/')
      setImageUrl(response.data.image)
    }

    fetchRandomFox()
  }, [])

  if (!imageUrl) {
    return (
      <div className={styles.loading}>
        <p className={styles.message}>
          Loading...
        </p>
      </div>
    )
  }

  return (
    <div className={styles.back}>
      <img src={imageUrl} alt='Random fox' className={styles.image} />
    </div>
  )
}
export default RandomFox
