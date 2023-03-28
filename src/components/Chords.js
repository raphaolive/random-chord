import styles from './Chords.module.css'

import React from 'react'

const Chords = (props) => {
  return (
    <div className={styles.chords}>{props.showIt}</div>
  )
}

export default Chords