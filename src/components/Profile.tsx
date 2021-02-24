import styles from '../styles/components/Profile.module.css';

export function Profile () {
  return (
    <div className={styles.profileContainer}>
      <img src="http://github.com/renans4ntos.png" alt="Renan Santos"/>
      <div>
        <strong>Renan Santos</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}