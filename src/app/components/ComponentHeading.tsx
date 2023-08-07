import styles from '../page.module.css';


const ComponentHeading = ({ heading }:{heading:string}) => {
  return (
    <div className={styles.componentHeading}>
      {heading}
    </div>
  );
};

export default ComponentHeading;
