import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavLayout from '../components/NavLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Contact from '../pages/Contact'

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' Component={() => <NavLayout component={Home}/>}/>
                {/* <Route path='/about' Component={() => <NavLayout component={About}/>}/> */}
                <Route path='/skills' Component={() => <NavLayout component={Skills}/>}/>
                <Route path='/contact' Component={() => <NavLayout component={Contact}/>}/>
            </Routes>
        </Router>
    )
}