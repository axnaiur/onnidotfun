import React from 'react'
import styles from './OnniButton.module.css'

interface OnniButtonProps {
  label: string
  onClick: () => void
}

const OnniButton: React.FC<OnniButtonProps> = ({ label, onClick }) => {
  return (
    <button className={styles.onniButton} onClick={onClick}>
      {label}
    </button>
  )
}

export default OnniButton
