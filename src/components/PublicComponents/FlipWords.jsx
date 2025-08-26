import React, { useEffect, useMemo, useState } from 'react'
import './flipwords.css'

export default function FlipWords({ words = [], interval = 2000 }) {
    const safeWords = useMemo(() => (Array.isArray(words) && words.length ? words : ['No Credit Card']), [words])
    const [index, setIndex] = useState(0)
    const [flip, setFlip] = useState(false)

    useEffect(() => {
        const id = setInterval(() => {
        setFlip(true)
        setTimeout(() => {
            setIndex(prev => (prev + 1) % safeWords.length)
            setFlip(false)
        }, 250)
        }, interval)
        return () => clearInterval(id)
    }, [interval, safeWords.length])

    return (
        <span className={`flip-words ${flip ? 'flipping' : ''}`}>{safeWords[index]}</span>
    )
}
