'use client'
import styles from '~/assets/styles/page.module.scss';
import useMediaQuery from '@/utils/useMediaQuery';

export default function Home() {
  const { isDesktop } = useMediaQuery();
  // console.log(isDesktop)
  
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
