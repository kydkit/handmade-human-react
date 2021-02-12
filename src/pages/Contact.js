import styles from '../css/Contact.module.css';
import linkedIn from '../assets/linkedin-brands.svg'

const Contact = () => {
  return (
    <div className={styles.about}>
      <p>These are a collection of projects I have done while studying Front End Development at Medieinstitutet in Malmö, Sweden.</p>
      <p>Prior to programming, I worked as an architect, in Copenhagen and Malmö, specializing in architectural visualizations. Every now and then, I still freelance in that area.</p>
      <p>Say <a href="mailto:info@kydkit.com"><span>Hello</span>!</a></p>
      <a href="https://www.linkedin.com/in/kyd-kitchaiya-4685b2161/"><img src={linkedIn} alt="linkedIn logo"/></a>
    </div>
  );
}

export default Contact;