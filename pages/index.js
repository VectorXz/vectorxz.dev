import Head from 'next/head'
import style from '../styles/index.module.css'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Patiphol Pussawong | VectorXz.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container m-auto">
        <div className="justify-center">
          <div className="grid lg:grid-cols-6 grid-cols-1 gap-y-3">
            <div className="lg:col-span-3 col-auto flex self-start lg:self-end justify-center lg:justify-end pt-8 lg:pt-0">
              <h1 className="lg:text-6xl text-3xl font-bold">Patiphol Pussawong</h1>
            </div>
            <div className="lg:col-span-3 col-auto order-first justify-center self-center lg:order-none lg:row-span-2 lg:ml-12">
              <img className={style.profileImg} src={require('./../public/profile.jpg')} />
            </div>
            <div className="lg:col-start-2 lg:col-span-2 col-auto flex self-start justify-center lg:justify-end">
              <p>4th year Software Engineering student in ICT Faculty, Mahidol University. I'm keen to learn all about web development including both frontend and backend.</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-6 grid-cols-1 gap-y-3 grid-rows-1 mt-5 lg:mt-1">
            <div className="lg:col-start-2 col-span-2">
              <a href="https://www.vectorxz.com/" className={style.btnLink} style={{width: "100%", minHeight: "80px"}}>Visit my personal blog</a>
            </div>
          </div>
        </div>
      </main>

      <main className="container m-auto">
        <div className="justify-center">
          <div className="grid lg:grid-cols-6 grid-cols-1 gap-y-3">
            <div className="lg:col-span-3 col-auto flex self-start lg:self-end justify-center pt-8 lg:pt-0">
              <h1 className="lg:text-6xl text-3xl font-bold">See me on</h1>
            </div>
          </div>
          <div className="grid lg:grid-cols-6 grid-cols-2 gap-y-3 my-3">
            <div className="lg:col-span-2 col-span-1 flex lg:justify-end justify-center">
              <a href="https://www.linkedin.com/in/patipholpus/" className={style.platformLink}>LinkedIn</a>
            </div>
            <div className="lg:col-span-2 col-span-1 flex justify-center">
              <a href="https://github.com/VectorXz" className={style.platformLink}>GitHub</a>
            </div>
            <div className="lg:col-span-2 col-span-1 flex lg:justify-start justify-center">
              <a href="https://dev.to/vectorxz" className={style.platformLink}>Dev.to</a>
            </div>
            <div className="lg:col-span-2 col-span-1 flex lg:justify-end justify-center">
              <a href="https://vectorxz.medium.com/" className={style.platformLink}>Medium</a>
            </div>
            <div className="lg:col-span-2 col-span-1 flex justify-center">
              <a href="https://www.codecademy.com/profiles/vectorx2263" className={style.platformLink}>Codecademy</a>
            </div>
            <div className="lg:col-span-2 col-span-1 flex lg:justify-start justify-center">
              <a href="https://www.hackerrank.com/vectorxz2263" className={style.platformLink}>Hackerrank</a>
            </div>
          </div>
        </div>
      </main>

      <footer className="container mx-auto pb-2">
        <div className="grid text-xs">
          <div className="flex justify-center text-center">
            <p>This web is part of my Learning at React with Next.JS and Tailwind CSS</p>
          </div>
          <div className="flex justify-center mt-2">
            <p>Made with ❤️ by <a className={style.footerLink} href="https://github.com/VectorXz">@VectorXz</a></p>
          </div>
        </div>
      </footer>


    </div>
  )
}
