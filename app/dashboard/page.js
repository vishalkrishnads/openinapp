import Image from 'next/image';
import { Lato } from 'next/font/google';
import Chart from './components/chart';
import styles from './styles/page.module.css'

const lato = Lato({
    subsets: ['latin'],
    weight: '400'
})

export default function Home() {
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
            <div style={{flex: 3}} />
        </div>
    }

    return <div className={styles.dashboard} >
        <div className={styles.cards}></div>
        <div className={styles.chart}>
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
        <div className={styles.details}>
            <div className={styles.responsive}>
                <div className={styles.container}>
                    <Detail 
                        label={'Top Products'}
                        filter={'May 2023 - Jun 2023'}
                        icon={'/dropdown.png'}
                        >

                    </Detail>
                </div>
                <div className={styles.container}>
                    <Detail 
                        label={"Today's schedule"}
                        filter={'See All'}
                        icon={'/side.png'}
                        >

                    </Detail>
                </div>
            </div>
        </div>
    </div>
}