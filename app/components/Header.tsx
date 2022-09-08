import { Theme, useTheme } from '../utils/themeProvider'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function Header() {
  const [, setTheme] = useTheme()

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  }

  return (
    <header className="flex flex-col md:flex-row items-center justify-between py-12 mx-6 sm:mx-24 lg:mx-36 xl:mx-48 2xl:mx-96">
      <a className="md:hidden" href="http://kimthompson.me">
        <img
          className="w-24 lg:w-32 hover:animate-wiggle self-end"
          src="/assets/grump_full_transparent.png"
        />
      </a>

      <h1 className="flex-auto max-w-sm md:max-w-md lg:max-w-2xl font-heading font-extrabold tracking-tight text-6xl md:text-7xl lg:text-8xl italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-teal-500 pv-12">
        <span>
            Kim Thompson
        </span>
        {/* TODO: Add a blurb about me */}
      </h1>

      <a className="hidden md:block" href="http://kimthompson.me">
        <img
          className="w-24 lg:w-32 hover:animate-wiggle self-end"
          src="/assets/grump_full_transparent.png"
        />
      </a>

      <button className="absolute top-8 right-5" onClick={toggleTheme}>
        <FiSun className="h-9 w-9 p-2 mx-3 rounded-md text-slate-300 dark:text-gray-900 transition ease-in-out bg-gray-900 dark:bg-slate-300 hover:-translate-y-1 hover:scale-110 duration-300"/>
      </button>

    </header>
  )
}
