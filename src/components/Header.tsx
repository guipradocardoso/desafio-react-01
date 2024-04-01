import styles from './Header.module.css';
import rocketLogo from '../assets/rocket.svg';

export function Header() {
  return (
    <header className={styles.container}>
      <img src={rocketLogo} alt="Logotipo de um foguete" />
      <div>
        <span className={styles.firstColor}>to</span>
        <span className={styles.secondColor}>do</span>
      </div>
    </header >
  );
}