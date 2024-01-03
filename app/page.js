import Image from 'next/image'
import styles from '~/assets/styles/page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.home_login_container+ ' container'}>
        <div className='row'>
          <div className='col-md-6'>
            hello
          </div>
          <div className='col-md-6'>Hi</div>
        </div>
      </div>
    </main>
  )
}
