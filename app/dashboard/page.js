import Image from 'next/image';
import { Lato } from 'next/font/google';
import Chart from './components/chart';
import styles from './styles/page.module.css'
import PieChart from './components/pie';
import Card from './components/card';

const lato = Lato({
    subsets: ['latin'],
    weight: '400'
})

export default function Home() {

    const data = {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        values: [30, 50, 20],
        colors: ['#FF6384', '#36A2EB', '#FFCE56'],
      };

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
        const labels = ['Label 1', 'Label 2', 'Label 3', 'Label 1', 'Label 2', 'Label 3'];
        const data1 = [3, 14, 15];
        const data2 = [5, 15, 10];
    
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
                        <Chart labels={labels} data1={data1} data2={data2} />
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
                    <p>{value}</p>
                </div>
            </div>
        }
        return <div className={styles.products}>
            <div style={{flex: 0.2}}/>
            <div style={{flex: 5, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className={styles.pie} style={{height: '80%', width: '90%'}}>
                    <PieChart data={data} />
                </div>
            </div>
            <div className={styles.legends}>
                <div className={styles.placeholder} />
                <div className={styles.one}>
                    <Legend label={'Basic Tee'} value={55} icon={'/user.png'} />
                    <Legend label={'Short Pants'} value={31} icon={'/pants.png'} />
                    <Legend label={'Super Hoodies'} value={14} icon={'/guest.png'} />
                </div>
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

    return <div className={styles.dashboard} >
        <div className={styles.cards}>
            <div className={styles.container}>
                <Card delay={0} value={2129430} />
                <Card delay={100} value={1520} />
                <Card delay={200} value={9721}/>
                <Card delay={300} value={892} />
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
                                        <Schedule color={'#9BDD7C'} task={'Meeting with suppliers'} time={'14:00 - 15:00'} place={'at Sunset Road'} />
                                        <Schedule color={'#6972C3'} task={'Check operation at Giga Factory'} time={'18:00 - 20:00'} place={'at Central Jakarta'} />
                                    </div>
                                    <div style={{flex: 0.2}} />
                                </div>
                            </div>
                    </Detail>
                </div>
            </div>
        </div>
    </div>
}