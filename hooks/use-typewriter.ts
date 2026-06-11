'use client'

import { useState, useEffect } from 'react'

export function useTypewriter(
  strings: string[],
  { typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2000 } = {},
) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentString = strings[currentIndex]

    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting) {
      if (displayText.length < currentString.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentString.slice(0, displayText.length + 1))
        }, typingSpeed)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pauseDuration)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, deletingSpeed)
      } else {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % strings.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, strings, typingSpeed, deletingSpeed, pauseDuration])

  return { displayText, isDeleting }
}
