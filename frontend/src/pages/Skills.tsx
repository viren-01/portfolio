import { useEffect, useState } from 'react'
import '../skills.css'
import { useNavigate } from 'react-router-dom';

export default function Skills() {
    const [skills, setSkills] = useState<string[]>([])
    const [isAnimating, setIsAnimating] = useState(false);
    let timeout: any = null

    const navigate = useNavigate()

    const handleScroll = (e: any) => {
        e.preventDefault();
        const currentScrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if(!timeout) {
            if (currentScrollY === 0) {
                setIsAnimating(true);
                timeout = setTimeout(() => {
                    setIsAnimating(false);
                    navigate('//');
                }, 500);
            }
    
            else if (currentScrollY + windowHeight >= documentHeight) {
                setIsAnimating(true);
                timeout = setTimeout(() => {
                    setIsAnimating(false);
                    navigate('/contact');
                }, 500);
            }
        }
    };

    useEffect(() => {
        let skills = ["REACT JS", "NODE JS", "JAVASCRIPT", "TYPESCRIPT", "MYSQL", "NOSQL", "AWS", "GCP"]
        setSkills(skills)
        window.scrollTo(0, 5);

        window.addEventListener('scroll', (e) => handleScroll(e));
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeout)
        };
    }, [])

    return (
        <div className={`skills ${isAnimating ? 'animating' : ''}`}>
            <h1>SKILLS</h1>
            <div className='btn-container'>
                {
                    skills.map((name: string, idx: number) => {
                        return (
                            <button key={name + idx}>{name}</button>
                        )
                    })
                }
            </div>
        </div>
    )
}