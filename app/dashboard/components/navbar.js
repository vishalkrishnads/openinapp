'use client'


import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import '../styles/layout.css'
  
export const ROUTES = [
    { label: 'Dashboard', route: '/', icon: 'dashboard.png' },
    { label: 'Transactions', route: '/transactions', icon: 'transaction.png' },
    { label: 'Schedules', route: '/schedules', icon: 'schedules.png' },
    { label: 'Users', route: '/users', icon: 'users.png' },
    { label: 'Settings', route: '/settings', icon: 'settings.png' },
]

export default function Navbar({ active, setActive, mobile, toggle }) {

    const router = useRouter()

    function Route({ label, route, icon, index }) {
        return <div onClick={() => {
                setActive(index);
                toggle(false)
                router.push(`/dashboard${route}`)
            }} className='link'>
            <Image
                src={`/${icon}`}
                width={18}
                height={18}
                alt={label} 
            />
            <p className={active === index ? 'active' : ''}><Link href={`/dashboard${route}`}>{label}</Link></p>
        </div>
    }

    return <div className={`navbar ${mobile ? 'visible' : ''}`}>
        <div style={{ flex:2 }} />
        <div style={{ flex: 10, display: 'flex', flexDirection: 'column' }}>
            <div className='brand'>
                <h1>Board.</h1>
            </div>
            <div className='links'>
                {ROUTES.map((item, index) => {
                    return <Route 
                        key={index} 
                        index={index}
                        label={item.label} 
                        route={item.route} 
                        icon={item.icon}
                    />
                })}
            </div>
            <div className='meta'>
                <p>Help</p>
                <p>Contact Us</p>
            </div>
        </div>
    </div>
}