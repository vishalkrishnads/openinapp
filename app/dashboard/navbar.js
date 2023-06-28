'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lato } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import './styles/layout.css'

const lato = Lato({
    subsets: ['latin'],
    weight: '400'
  })

  
const ROUTES = [
    { label: 'Dashboard', route: '/', icon: 'dashboard.png' },
    { label: 'Transactions', route: '/transactions', icon: 'transaction.png' },
    { label: 'Schedules', route: '/schedules', icon: 'schedules.png' },
    { label: 'Users', route: '/users', icon: 'users.png' },
    { label: 'Settings', route: '/settings', icon: 'settings.png' },
]

function Navbar({ active, setActive, mobile, toggle }) {

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

export default function Layout({ children }) {
    const [active, setActive] = useState(0)
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

    return <><div className='nav'>
        <Navbar active={active} setActive={setActive} mobile={isNavbarVisible} toggle={setIsNavbarVisible} />
        </div>
        <div className='page'>
            <div style={{ flex: '0.45' }} />
            <div className='header'>
                <div style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
                    <div onClick={() => setIsNavbarVisible(!isNavbarVisible)} className='mobile'>
                        <Image
                            src={`/more.png`}
                            width={20}
                            height={18}
                            alt={''}
                        />
                    </div>
                    <h1>{ROUTES[active].label}</h1>
                </div>
                <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <div className='bar'>
                        <div style={{ flex: 0.5 }} />
                        <div style={{ flex: 7, display: 'flex', alignItems: 'center' }}>
                            <input className={lato.className} type='text' placeholder='Search...' />
                        </div>
                        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                            <Image
                                src={`/search.png`}
                                width={12}
                                height={12}
                                alt={''}
                            />
                        </div>
                    </div>
                    <Image
                        src={`/notification.png`}
                        width={18}
                        height={20}
                        alt={''}
                        style={{ borderRadius: '50%', marginLeft: '5%' }}
                    />
                    <Image
                        src={`/users.png`}
                        width={26}
                        height={26}
                        alt={''}
                        style={{ borderRadius: '50%', marginLeft: '5%' }}
                    />
                </div>
                <div style={{flex: 0.1}} />
            </div>
            <div className='component'>{children}</div>
    </div></>
}