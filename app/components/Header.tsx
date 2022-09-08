export default function Header() {
  return (
    <header className="flex items-center justify-between py-12 mx-6 sm:mx-24 lg:mx-36 xl:mx-48 2xl:mx-96">
      <h1 className="flex-auto max-w-sm md:max-w-md lg:max-w-2xl font-heading font-extrabold tracking-tight text-6xl md:text-7xl lg:text-8xl italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-teal-500 pv-12">
        <span>
            Kim Thompson
        </span>
      </h1>

          <a
            href="http://kimthompson.me"
            className=""
          >
      <img
        className="w-16 sm:w-24 lg:w-32 hover:animate-wiggle self-end"
        src="/assets/grump_full_transparent.png"
      />
          </a>
    </header>
  )
}
