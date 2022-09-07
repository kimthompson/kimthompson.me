export default function Header() {
  return (
    <header className="w-screen flex items-center justify-center m-6 px-6">
      <h1 className="flex-auto max-w-sm md:max-w-md lg:max-w-2xl font-heading font-extrabold tracking-tight text-5xl md:text-6xl lg:text-8xl not-italic text-gray-900 dark:text-slate-300">
        <span>
          <a href="http://kimthompson.me" className="transition-all italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-teal-500 hover:text-gray-900 hover:dark:text-slate-300 pr-12">
            Kim Thompson
          </a>
        </span>
      </h1>

      <img className="w-16 md:w-24 lg:w-32 hover:animate-wiggle" src="/assets/grump_full_transparent.png" />
    </header>
  )
}