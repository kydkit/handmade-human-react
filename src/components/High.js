import React, {useRef, useEffect} from 'react';

import {TweenMax, Power1} from 'gsap';
import styles from '../css/High.module.css'

const High = () => {
  let letterH = useRef (null);
  let letterI = useRef (null);
  let letterG = useRef (null);
  let letterH2 = useRef (null); 

  useEffect(() => {
    TweenMax.to(
      letterH, 
      7,
      {
        opacity: 0,
        y: 0,
        ease: Power1.easeOut,
        delay: .5,
        repeat: -1
      }
    )
    TweenMax.to(
      letterI, 
      7,
      {
        opacity: 0,
        y: 0,
        ease: Power1.easeOut,
        delay: .7,
        repeat: -1
      }
    )
    TweenMax.to(
      letterG, 
      7,
      {
        opacity: 0,
        y: 0,
        ease: Power1.easeOut,
        repeat: -1
      }
    )
    TweenMax.to(
      letterH2, 
      7,
      {
        opacity: 0,
        y: 0,
        ease: Power1.easeOut,
        delay: .2,
        repeat: -1
      }
    )
  })
  return (
    <div className={styles.highFade}>
      <span className={styles.first} ref={el => {letterH = el }}>H</span>
      <span className={styles.second} ref={el => {letterI = el }}>I</span>
      <span className={styles.third} ref={el => {letterG = el }}>G</span>
      <span className={styles.fourth} ref={el => {letterH2 = el }}>H</span>
    </div>
  );
}

export default High;