// import { PaperClipIcon } from '@heroicons/react/24/solid'
import { FiPaperclip, FiGithub, FiLinkedin, FiYoutube, FiTwitch, FiTwitter } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="flex items-center justify-center py-12 text-gray-900 dark:text-slate-300">
        <a href=""><FiPaperclip className="h-8 w-8 p-1 mx-3 rounded-md text-slate-300 dark:text-gray-900 transition ease-in-out bg-gradient-to-br from-pink-500 via-purple-500 to-teal-500 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-gray-900 dark:hover:text-slate-300"/></a>
        <a href=""><FiGithub className="h-8 w-8 p-1 mx-3 rounded-md text-slate-300 dark:text-gray-900 transition ease-in-out bg-gradient-to-br from-pink-500 via-purple-500 to-teal-500 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-gray-900 dark:hover:text-slate-300"/></a>
        <a href=""><FiLinkedin className="h-8 w-8 p-1 mx-3 rounded-md text-slate-300 dark:text-gray-900 transition ease-in-out bg-gradient-to-br from-pink-500 via-purple-500 to-teal-500 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-gray-900 dark:hover:text-slate-300"/></a>
        <a href=""><FiYoutube className="h-8 w-8 p-1 mx-3 rounded-md text-slate-300 dark:text-gray-900 transition ease-in-out bg-gradient-to-br from-pink-500 via-purple-500 to-teal-500 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-gray-900 dark:hover:text-slate-300"/></a>
        <a href=""><FiTwitch className="h-8 w-8 p-1 mx-3 rounded-md text-slate-300 dark:text-gray-900 transition ease-in-out bg-gradient-to-br from-pink-500 via-purple-500 to-teal-500 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-gray-900 dark:hover:text-slate-300"/></a>
        <a href=""><FiTwitter className="h-8 w-8 p-1 mx-3 rounded-md text-slate-300 dark:text-gray-900 transition ease-in-out bg-gradient-to-br from-pink-500 via-purple-500 to-teal-500 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-gray-900 dark:hover:text-slate-300"/></a>
    </footer>
  )
}