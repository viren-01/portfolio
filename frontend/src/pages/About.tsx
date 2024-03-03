import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export default function About() {
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate()

    const handleScroll = () => {
        if (window.scrollY === 0) {
            setIsAnimating(true);
            setTimeout(() => {
                setIsAnimating(false);
                navigate('/skills');
            }, 500);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        window.scrollTo(0, 20)
        return (() => {
            window.removeEventListener('scroll', handleScroll)
        })
    })

    return (
        <div>
        </div>
    )
}