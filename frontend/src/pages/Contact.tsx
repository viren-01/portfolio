import { useEffect, useState } from 'react'
import '../contact.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as fs from 'fs'

export default function Contact() {
    const [showEmailBox, setShowEmailBox] = useState<boolean>(false)
    const [isAnimating, setIsAnimating] = useState(false);
    const [inputFields, setInputFields] = useState<any>({})

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

    const handleChange = (e: any, name: string) => {
        setInputFields((prev: any) => ({ ...prev, [name]: e.target.value }))
    }

    const handleSubmit = () => {
        let email = inputFields.email
        let message = inputFields.body


        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!emailRegex.test(email)) return toast.error("Please enter a valid email")
        if (!message || (message.length <50)) return toast.error("Message should be of atleast 50 characters")

        const text = new Date() + "\n" + email + '\n' + message + '\n'
        toast.success("Thanks for writing to me, will get back to you soon.")
        setShowEmailBox(false)
    }


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
                            <img src='./linked-In.png' alt="LinkedIn Logo" className="profile-img" onClick={() => window.open('https://www.linkedin.com/in/virendra-vishwakarma-401b17159/')} />
                        </div>
                    </li>
                    <li className="" key={'github'}>
                        <div className="contact-circle-container">
                            <img src='./github.png' alt="github Logo" className="profile-img" onClick={() => window.open('https://github.com/viren-01')} />
                        </div>
                    </li>
                    <li className="" key={'twitter'}>
                        <div className="contact-circle-container">
                            <img src='./twitter.png' alt="twitter Logo" className="profile-img" onClick={() => window.open('https://twitter.com/viren_99')} />
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
                        <textarea rows={4} placeholder="Enter your email" className='input-text' maxLength={50} onChange={(e: any) => handleChange(e, 'email')}></textarea>
                    </div>

                    <div className='form-row'>
                        <label className='form-email'>Body</label>
                        <textarea rows={4} cols={50} placeholder="Enter Message" className='input-text-body' maxLength={500} onChange={(e: any) => handleChange(e, 'body')}></textarea>
                    </div>
                    <button className='btn-send' onClick={handleSubmit}> SEND MESSAGE</button>
                </div>
            }

        </div>
    )
}