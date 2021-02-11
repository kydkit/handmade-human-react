import styles from '../css/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.about}>
      <p>These are a collection of projects I have done while studying Front End Development at Medieinstitutet in Malmö, Sweden.</p>
      <p>Prior to programming, I worked as an architect, in Copenhagen and Malmö, specializing in architectural visualizations. Every now and then, I still freelance in that area.</p>
      <p>Say <a href="mailto:info@kydkit.com"><span>Hello</span>!</a></p>
    </div>
  );
}

export default Contact;