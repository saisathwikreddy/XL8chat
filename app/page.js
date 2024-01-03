import Image from 'next/image'
import styles from '~/assets/styles/page.module.scss';
import { Container } from '@mui/material';

export default function Home() {
  return (
    <main className={styles.main}>
      <Container className={styles.home_login_container}>
        <div className={styles.home_login_container__login_action}>
          hello
        </div>
        <div className={styles.home_login_container__info}></div>
      </Container>
    </main>
  )
}
