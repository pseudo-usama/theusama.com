import { Link, useLocation } from 'react-router-dom'
import './nav.scss'


export default function Nav() {
    const location = useLocation()
    const path = location.pathname

    return <>
        <ul>
            <li><Link to="/" className={path === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/experience" className={path === '/experience' ? 'active' : ''}>Experience</Link></li>
            <li><Link to="/education" className={path === '/education' ? 'active' : ''}>Education</Link></li>
            <li><Link to="/skills" className={path === '/skills' ? 'active' : ''}>Skills</Link></li>
            <li><Link to="/personal-projects" className={path === '/personal-projects' ? 'active' : ''}>Personal Projects</Link></li>
        </ul>
    </>
}
