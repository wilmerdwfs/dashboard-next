import styles from "./TopBar.module.css"; 
import Menu from "./Menu"; 

const TopBar = () => {
  return (
    <div className={styles.topBar}>
        <div className={styles.topBarContent}>
            <Menu/>
        </div>
        <div className={styles.topBarContentUsu}>
            
        </div>
    </div>
  );
};

export default TopBar;