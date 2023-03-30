import React from 'react'
import styles from './Postit.module.css'

const Postit = (props) => {
  return (
    <button onClick={props.onClick} className={styles.postit}>
        <p className={styles.text}>{props.content}</p>
    </button>
  )
}

export default Postit