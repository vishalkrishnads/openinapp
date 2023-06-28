'use client'

import * as React from 'react'
import Image from 'next/image'
import styles from './card.module.css'
import { Open_Sans } from 'next/font/google'
import { lato } from '../../page'

const sans = Open_Sans({
    subsets: ['latin'],
    weight: '700'
})

export default function Card({ delay, value, label, isCurrency, color, icon }) {

    const [loaded, setLoaded] = React.useState(styles.before);
    const [display, setDisplay] = React.useState(0);

    React.useEffect(() => {
        const animation = setTimeout(() => setLoaded(styles.after), delay);
        return () => clearTimeout(animation)
    }, []);

    React.useEffect(() => {
        let animationFrameId;
        let start = value - 100;
        const step = () => {
        setDisplay(start);
        start++;

        if (start <= value) {
            animationFrameId = requestAnimationFrame(step);
        }
        };

        animationFrameId = requestAnimationFrame(step);

        return () => {
        cancelAnimationFrame(animationFrameId);
        };
    }, [])

    function addCommas(number) {
        var strNumber = String(number);
      
        var parts = strNumber.split('.');
        var integerPart = parts[0];
        var decimalPart = parts.length > 1 ? '.' + parts[1] : '';
      
        var formattedInteger = '';
        var length = integerPart.length;
        for (var i = 0; i < length; i++) {
          if (i > 0 && (length - i) % 3 === 0) {
            formattedInteger += ',';
          }
          formattedInteger += integerPart[i];
        }
      
        var formattedNumber = formattedInteger + decimalPart;
      
        return formattedNumber;
      }
      

    return <div className={loaded}>
        <div style={{ backgroundColor: color }} className={styles.card}>
            <div className={styles.content}>
                <div className={styles.icon}>
                    <Image
                        src={icon}
                        width={26}
                        height={24}
                        alt={''}
                    />
                </div>
                <div className={styles.label}>
                    <h2 className={lato.className}>{label}</h2>
                </div>
                <div className={styles.value}>
                    <h1 className={sans.className}>{`${isCurrency ? '$':''}${addCommas(display)}`}</h1>
                </div>
            </div>
        </div>
    </div>
}