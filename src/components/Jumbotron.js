import React, {useRef, useEffect} from 'react'; 

import {TweenMax, Power1} from 'gsap';
import styles from '../css/Jumbotron.module.css'

const Jumbotron = () => {
  let handmadeFade = useRef (null);
  let humanFade = useRef (null);

  useEffect(() => {
    TweenMax.to(
      handmadeFade,
      1.2,
      {
        opacity: 1,
        y: 0,
        ease: Power1.easeOut
      }
    )
    TweenMax.to(
      humanFade,
      1.2,
      {
        opacity: 1,
        y: 0,
        ease: Power1.easeOut,
        delay: .4
      }
    )
  })

  return (
    <div className={styles.jumbo}>
      <div className={styles.textContainer}>
        <h1 className={styles.hide}>
          <span className={styles.span} ref={el => {handmadeFade = el}}>Handmade</span>
        </h1>
        <h1 className={styles.hide}>
          <span className={styles.span} ref={el => {humanFade = el}}>Human</span>
        </h1>
      </div>
      <p className={styles.subhead}>Projects done by Kyd Kitchaiya while diving into the world of programming, starting from Autumn 2020</p>
    </div>
  );
}

export default Jumbotron;