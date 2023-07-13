'use client'

import { useState, useEffect } from 'react'
import { googleLogout } from '@react-oauth/google'
import { useRouter } from 'next/navigation';
import { lato } from '../page'
import { getProfileImage } from '../api/google'
import Image from 'next/image'
import Navbar, { ROUTES } from './components/navbar'
import './styles/layout.css'

export default function DashboardLayout({ children }) {

    const [active, setActive] = useState(0)
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const [image, setImage] = useState('/users.png')
    const router = useRouter();

    useEffect(() => {
        async function getImage() {
            getProfileImage()
            .then((response) => setImage(response))
            .catch((err) => console.error(err))
        }
        getImage();
    }, [])

    const logout = () => {
        googleLogout()
        localStorage.removeItem('vishalisted')
        router.push('/')
    }

    return <section>
        <div className='nav'>
            <Navbar active={active} setActive={setActive} mobile={isNavbarVisible} toggle={setIsNavbarVisible} />
            </div>
            <div className='page'>
                <div style={{ flex: '0.45' }} />
                <div className='header'>
                    <div style={{flex: '0.1'}} />
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
                            src={image}
                            width={26}
                            height={26}
                            alt={'Click here to logout'}
                            onClick={logout}
                            style={{ borderRadius: '50%', marginLeft: '5%' }}
                        />
                    </div>
                    <div style={{flex: 0.1}} />
                </div>
                <div className='component'>{children}</div>
        </div>
    </section>
}