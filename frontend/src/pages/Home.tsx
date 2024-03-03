import { useEffect, useState } from 'react'
import '../home.css'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate()

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            setIsAnimating(true);
            setTimeout(() => {
                setIsAnimating(false);
                navigate('/skills', { replace: true});
            }, 500);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0)
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (<>
        <div className={`home ${isAnimating ? 'animating' : ''}`}>
            <p>Hi, my name is </p>
            <h2>Virendra Vishwakarma.</h2>
            <h2>I am a Full Stack Developer.</h2>
            <br />
            <p>I'm a software engineer based in Noida, India, specializing in</p>
            <p>building websites and applications. I have worked with <span className='org-name'>TELUS</span>, </p>
            <p><span className='org-name'>HINDUSTAN TIMES</span> and <span className='org-name'> CARDEKHO </span>.</p>
            <div className='btn-div'>
                <button className='btn-git' onClick={() => navigate('/contact')}>{"GET IN TOUCH"}</button>
                <button className='btn-git' onClick={() => window.open('./resume.pdf')}>
                    <i className="fas fa-download" style={{ marginRight: '6px' }} />
                    {"RESUME"}
                </button>
            </div>
        </div>
    </>

    )
}