import styles from './layout.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'

const name = 'Colin Zhou'
export const siteTitle = "Next.js Demo Site"

export default function Layout({children, home}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Learn how to build a personal site'/>
        <meta name='og:title' content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/Profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
              />
              <h1 className={utilStyles.heading2X1}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image 
                  priority
                  src="/images/Profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}