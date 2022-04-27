import {useRef, useEffect, useState} from 'react'

export const useOutsideAlerter = (initialValue) => {
    const ref = useRef(null)
    const [visible, setVisible] = useState(initialValue)

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setVisible(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside, true)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside, true)
        }
    }, [ref]) 

    return { ref, visible, setVisible }

}

