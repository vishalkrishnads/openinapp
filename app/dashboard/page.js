'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Lato } from 'next/font/google';
import Chart from './components/chart';
import styles from './styles/page.module.css'
import PieChart from './components/pie';
import Card from './components/card';
import { refresh } from '../api/data';

const lato = Lato({
    subsets: ['latin'],
    weight: '400'
})

export default function Home() {

    const [cards, setCards] = useState([])
    const [schedules, setSchedules] = useState([])
    const [pie, setPie] = useState({})
    const [chart, setChart] = useState({})
    const [buffering, setBuffering] = useState(true)
    const [error, isError] = useState(false)

    useEffect(() => {
        async function refreshData() {
            await refresh()
            .then((response) => {
                setCards(response.cards)
                setSchedules(response.schedule)
                setPie(response.pie)
                setChart(response.chart)
            })
            .catch((err) => {console.error(err); isError(true)})
            setBuffering(false)
        }
        refreshData();
    }, [])

    function Detail({children, label, filter, icon}) {
        return <div className={styles.detail}>
            <div className={styles.header}>
                <div style={{flex: 1}} />
                <div className={styles.label}>
                    <h3>{label}</h3>
                </div>
                <div className={styles.filter}>
                    <p>{filter}</p>
                    <Image
                        src={icon}
                        height={6}
                        width={8}
                        alt={''}
                        style={{marginLeft: '3%', marginBottom: '2%'}}
                    />
                </div>
                <div style={{flex: 1}} />
            </div>
            <div style={{flex: 3, display: 'flex'}} >{children}</div>
        </div>
    }

    function Activities() {
    
        function Legend({icon, label}) {
            return <div className={styles.legend}>
                <Image
                    src={icon}
                    height={8}
                    width={8}
                    alt={''}
                    style={{marginRight: '15%', marginTop: '5%'}}
                />
                <p className={lato.className}>{label}</p>
            </div>
        }
    
        return  <div className={styles.chart}>
            <div className={styles.container}>
                <div style={{flex: 1.2, display: 'flex'}}>
                    <div style={{flex: 0.3}}/>
                    <div className={styles.header}>
                        <h3>Activities</h3>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <p>May 2023 - Jun 2023</p>
                            <Image
                                src={'/dropdown.png'}
                                height={8}
                                width={8}
                                alt={''}
                                style={{marginLeft: '1%'}}
                            />
                        </div>
                    </div>
                    <div className={styles.legends}>
                        <Legend icon={'/guest.png'} label={'Guest'} />
                        <Legend icon={'/user.png'} label={'User'} />
                    </div>
                    <div style={{flex: 0.3}}/>
                </div>
                <div style={{flex: 4, display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                    <div style={{width: '92%', height: '85%'}}>
                        {Object.keys(chart).length > 0 ? <Chart labels={chart.labels} data1={chart.data1} data2={chart.data2} /> : null}
                    </div>
                </div>
            </div>
        </div>
    }

    function Products() {
        function Legend({label, value, icon}) {
            return <div className={styles.legend}>
                <div style={{flex: 0.5, display:'flex', justifyContent: 'center'}}>
                    <Image
                        src={icon}
                        height={8}
                        width={8}
                        alt={''} 
                        className={styles.icon}
                    />
                </div>
                <div style={{flex: 5, display: 'flex', flexDirection: 'column'}}>
                    <h4>{label}</h4>
                    <p>{value}%</p>
                </div>
            </div>
        }
        return <div className={styles.products}>
            <div style={{flex: 0.2}}/>
            <div style={{flex: 5, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className={styles.pie} style={{height: '80%', width: '90%'}}>
                    {Object.keys(pie).length > 0 ? <PieChart data={pie} /> : null}
                </div>
            </div>
            <div className={styles.legends}>
                <div className={styles.placeholder} />
                {Object.keys(pie).length > 0 ? <div className={styles.one}>
                    <Legend label={'Basic Tee'} value={pie.values[0]} icon={'/user.png'} />
                    <Legend label={'Short Pants'} value={pie.values[1]} icon={'/pants.png'} />
                    <Legend label={'Super Hoodies'} value={pie.values[2]} icon={'/guest.png'} />
                </div>:<div className={styles.one} />}
            </div>
            <div style={{flex: 0.2}}/>
        </div>
    }

    function Schedule({task, time, place, color}) {
        return <div className={styles.schedule}>
            <div className={styles.border}>
                <div style={{width: '20%', height: '85%', backgroundColor: color}} />
            </div>
            <div className={styles.text}>
                <h6>{task}</h6>
                <p>{time}</p>
                <p>{place}</p>
            </div>
        </div>
    }

    return (
        <>
            {!error ? 
            buffering ? <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span className={styles.loader} />
            </div>
             : <div className={styles.dashboard} >
                <div className={styles.cards}>
                    <div className={styles.container}>
                        {cards.map((item, index) => {
                            return <Card key={index} delay={item.delay} label={item.label} value={item.value} isCurrency={index === 0} color={item.color} icon={item.icon} />
                        })}
                    </div>
                </div>
                <Activities />
                <div className={styles.details}>
                    <div className={styles.responsive}>
                        <div className={styles.container}>
                            <Detail 
                                label={'Top Products'}
                                filter={'May 2023 - Jun 2023'}
                                icon={'/dropdown.png'}
                                >
                                    <Products />
                            </Detail>
                        </div>
                        <div className={styles.container}>
                            <Detail 
                                label={"Today's schedule"}
                                filter={'See All'}
                                icon={'/side.png'}
                                >
                                    <div style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <div style={{height: '80%', width: '83%', display: 'flex', flexDirection: 'column'}}>
                                            <div style={{flex: 0.2}} />
                                            <div style={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
                                                {schedules.map((item, index) => {
                                                    return <Schedule key={index} color={index === 0 ? '#9BDD7C' : '#6972C3'} task={item.activity} time={item.timePeriod} place={item.place} />    
                                                })}
                                            </div>
                                            <div style={{flex: 0.2}} />
                                        </div>
                                    </div>
                            </Detail>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div style={{ flex: 1, color: 'black', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <p>Uh, oh! Something unexpected happened. :(</p>
                <p>Please verify your intenet connection</p>
            </div>}
        </>
    )
}