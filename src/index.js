import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'

function Typewriter({ textArray }) {
  if (typeof textArray === 'undefined' || textArray.length === 0) {
    throw new Error('The prop textArray most have at least one value')
  }

  useEffect(() => {
    startType(textArray[0], 0)
  }, [])

  const typewriter = useRef()
  const [typed, setTyped] = useState('')
  const [showHighlight, setShowHighlight] = useState(false)
  const textLineSize = textArray.length - 1

  let newTyped = ''
  let textLineIndex = 0

  function startType(pun, index) {
    if (index < pun.length) {
      newTyped = newTyped + pun.charAt(index)
      setTyped(newTyped)
      index++
      setTimeout(function () {
        startType(pun, index)
      }, 50)
    } else {
      setTimeout(function () {
        setShowHighlight(true)
      }, 4000)

      setTimeout(function () {
        setShowHighlight(false)
        newTyped = ''
        setTyped(newTyped)
        textLineIndex++
        if (textLineIndex > textLineSize) {
          textLineIndex = 0
        }
        startType(textArray[textLineIndex], 0)
      }, 5000)
    }
  }

  return (
    <span
      ref={typewriter}
      className={`${styles.typewriter} ${
        showHighlight ? styles.highlight : ''
      }`}
    >
      {typed}
    </span>
  )
}

export default Typewriter
