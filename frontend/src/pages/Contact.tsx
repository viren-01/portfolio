import { useEffect, useState } from 'react'
import '../contact.css'
import { useNavigate } from 'react-router-dom';

export default function Contact() {
    const [showEmailBox, setShowEmailBox] = useState<boolean>(false)
    const [isAnimating, setIsAnimating] = useState(false);

    const navigate = useNavigate()

    const handleEmailBox = () => {
        setShowEmailBox(true)
    }

    const handleScroll = (e: any) => {
        e.preventDefault();
        const currentScrollY = window.scrollY;

        if (currentScrollY === 0) {
            setIsAnimating(true);
            setTimeout(() => {
                setIsAnimating(false);
                navigate('/skills');
            }, 500);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 5)
        window.addEventListener('scroll', handleScroll)
        return (() => {
            window.removeEventListener('scroll', handleScroll)
            setShowEmailBox(false)
        })
    }, [])

    return (
        <div className={`contact ${isAnimating ? 'animating' : ''}`}>
            <h1> {"CONTACT"} </h1>
            <div className="icons">
                <ul>
                    <li className="" key={'linkedin'}>
                        <div className="contact-circle-container">
                            <img src='/linked-In.png' alt="LinkedIn Logo" className="profile-img" onClick={() => window.open('https://www.linkedin.com/in/virendra-vishwakarma-401b17159/')} />
                        </div>
                    </li>
                    <li className="" key={'github'}>
                        <div className="contact-circle-container">
                            <img src='/github.png' alt="github Logo" className="profile-img" onClick={() => window.open('https://github.com/viren-01')} />
                        </div>
                    </li>
                    <li className="" key={'twitter'}>
                        <div className="contact-circle-container">
                            <img src='/twitter.png' alt="twitter Logo" className="profile-img" onClick={() => window.open('https://twitter.com/viren_99')} />
                        </div>
                    </li>
                </ul>
            </div>

            {
                    !showEmailBox && <button className='btn-send' onClick={handleEmailBox}> SEND A MESSAGE</button>
            }

            {
                showEmailBox &&
                <div className='form'>
                    <div className='form-row'>
                        <label className='form-email'>Email</label>
                        <input type='text' className='input-text'></input>
                    </div>

                    <div className='form-row'>
                        <label className='form-email'>Body</label>
                        <input type='text' className='input-text-body'></input>
                    </div>
                    <button className='btn-send'> SEND MESSAGE</button>
                </div>
            }

        </div>
    )
}