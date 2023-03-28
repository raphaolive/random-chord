import styles from './Button.module.css'

import React from 'react'

const Button = (props) => {
  return (
    <button className={styles.btn} onClick={props.onClick}/>
  )
}

export default Button