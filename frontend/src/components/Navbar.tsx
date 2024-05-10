import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../navbar.css'

export default function Navbar() {
    const [navItems, setNavItem] = useState<string[]>([])
    const location = useLocation()
    const navigate = useNavigate()

    const handleRedirect = (path: string) => {
        let redirectTo = path.split(' ')[0]
        if(redirectTo === 'home') redirectTo = ''
        navigate("/" +redirectTo)
    }

    useEffect(() => {
        let nav = ['HOME', 'SKILLS', 'CONTACT']
        setNavItem(nav)
    }, [])

    return (
        <div>
            <ul className="navbar-ul">
                {
                    navItems.map((name: any, key: number) => {
                        let newName = name
                        let isActive = newName.toLowerCase().includes(location.pathname.replace('/', '')) ? true : false
                        if(newName !== 'HOME' && location.pathname === '/') isActive = false

                        return (
                            <li className={`navbar-li`} key={name + key} >
                                <button className={`nav-btn ${isActive ? 'active' : ''}`} onClick={() => handleRedirect(name.toLowerCase())}>
                                    {name}
                                </button>
                            </li>
                        )
                    })
                }
                <li className="navbar-li" key={'linkedin'}>
                    <div className="circle-container">
                        <img src='./linked-In.png' alt="LinkedIn Logo" className="profile-img" onClick={() => window.open('https://www.linkedin.com/in/virendra-vishwakarma-401b17159/')} />
                    </div>
                </li>
                <li className="navbar-li" key={'github'}>
                    <div className="circle-container">
                        <img src='./github.png' alt="github Logo" className="profile-img" onClick={() => window.open('https://github.com/viren-01')} />
                    </div>
                </li>
                <li className="navbar-li" key={'twitter'}>
                    <div className="circle-container">
                        <img src='./twitter.png' alt="twitter Logo" className="profile-img" onClick={() => window.open('https://twitter.com/viren_99')}/>
                    </div>
                </li>
            </ul>
        </div>
    )
}
