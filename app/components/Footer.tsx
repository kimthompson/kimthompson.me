import {
  FiPaperclip,
  FiGithub,
  FiMail,
  FiLinkedin,
  FiYoutube,
  FiTwitch,
  FiTwitter,
} from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="py-12 text-gray-900 dark:text-slate-100">
      <div className="flex items-center justify-center mb-6">
        <a href="/assets/resume.pdf">
          <FiPaperclip className="h-8 w-8 p-1 mx-3 rounded-md text-slate-100 dark:text-gray-900 transition ease-in-out bg-gradient-to-br from-pink-500 via-purple-500 to-teal-500 hover:-translate-y-1 hover:scale-110 duration-300" />
        </a>
        <a href="https://github.com/kimthompson">
          <FiGithub className="h-8 w-8 p-1 mx-3 rounded-md text-slate-100 dark:text-gray-900 transition ease-in-out bg-gradient-to-br from-pink-500 via-purple-500 to-teal-500 hover:-translate-y-1 hover:scale-110 duration-300" />
        </a>
        <a href="mailto:kim.thompson.dev@proton.me">
          <FiMail className="h-8 w-8 p-1 mx-3 rounded-md text-slate-100 dark:text-gray-900 transition ease-in-out bg-gradient-to-br from-pink-500 via-purple-500 to-teal-500 hover:-translate-y-1 hover:scale-110 duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/kimberlyannthompson/">
          <FiLinkedin className="h-8 w-8 p-1 mx-3 rounded-md text-slate-100 dark:text-gray-900 transition ease-in-out bg-gradient-to-br from-pink-500 via-purple-500 to-teal-500 hover:-translate-y-1 hover:scale-110 duration-300" />
        </a>
      </div>
      <div className="flex items-center justify-center">
        <a href="https://www.youtube.com/channel/UCfXT3usekugleJdBo2LIjig">
          <FiYoutube className="h-8 w-8 p-1 mx-3 rounded-md text-slate-100 dark:text-gray-900 transition ease-in-out bg-gradient-to-br from-pink-500 via-purple-500 to-teal-500 hover:-translate-y-1 hover:scale-110 duration-300" />
        </a>
        <a href="https://www.twitch.tv/kimicalburn">
          <FiTwitch className="h-8 w-8 p-1 mx-3 rounded-md text-slate-100 dark:text-gray-900 transition ease-in-out bg-gradient-to-br from-pink-500 via-purple-500 to-teal-500 hover:-translate-y-1 hover:scale-110 duration-300" />
        </a>
        <a href="https://twitter.com/Kimical_Burn">
          <FiTwitter className="h-8 w-8 p-1 mx-3 rounded-md text-slate-100 dark:text-gray-900 transition ease-in-out bg-gradient-to-br from-pink-500 via-purple-500 to-teal-500 hover:-translate-y-1 hover:scale-110 duration-300" />
        </a>
      </div>
    </footer>
    
  )
}
