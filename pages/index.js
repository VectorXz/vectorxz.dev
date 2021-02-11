import Head from 'next/head'
import style from '../styles/index.module.css'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-10">
      <Head>
        <title>Patiphol Pussawong | VectorXz.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex-grow">
        <div className="grid lg:grid-cols-6 grid-cols-1 gap-y-3">
          <div className="lg:col-span-3 col-auto flex self-start lg:self-end justify-center lg:justify-end pt-8 lg:pt-0">
            <h1 className="lg:text-6xl text-3xl font-bold">Patiphol Pussawong</h1>
          </div>
          <div className="lg:col-span-3 col-auto order-first justify-center self-center lg:order-none row-span-1 lg:row-span-2 lg:ml-12">
            <img className={style.profileImg} src={require('./../public/profile.jpg')} />
          </div>
          <div className="lg:col-start-2 lg:col-span-2 col-auto flex self-start justify-center lg:justify-end">
            <p>4th year Software Engineering student in ICT Faculty, Mahidol University. I'm keen to learn all about web development including both frontend and backend.</p>
          </div>
        </div>
      </main>

      <footer className="container mx-auto pb-2">
        <div className="grid text-xs">
          <div className="flex justify-center">
            <p>This web is part of my Learning at React with Next.JS and Tailwind CSS</p>
          </div>
          <div className="flex justify-center">
            <p>Made with ❤️ by <a className={style.footerLink} href="https://github.com/VectorXz">@VectorXz</a></p>
          </div>
        </div>
      </footer>


    </div>
  )
}
