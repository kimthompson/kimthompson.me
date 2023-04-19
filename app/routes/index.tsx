import { data } from '~/routes/processPosts'

import { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import Posts from '../components/Posts'

export const loader: LoaderFunction = () => data

export default function Index() {
  const data = useLoaderData()

  return (
    <main className="mx-6 sm:mx-24 lg:mx-36 xl:mx-48 2xl:mx-96">
      <h2 className="font-heading text-3xl italic text-gray-900 dark:text-slate-100 px-2 pb-6">
        Recent Posts
      </h2>
      <Posts posts={data.posts} />

      <h2 className="font-heading text-3xl italic text-gray-900 dark:text-slate-100 px-2 pb-6">
        Digital Garden
        <span className="text-base not-italic text-indigo-500 pl-3">
          Because privacy is for cowards{' '}
          <a
            className="hover:text-gray-900 dark:hover:text-slate-100"
            href="https://www.eff.org"
          >
            /s
          </a>
        </span>
      </h2>
      <Posts posts={data.drafts} isDraft={true} />

      <h2 className="font-heading text-3xl italic text-gray-900 dark:text-slate-100 px-2 pb-6">
        Recent Indie Projects
      </h2>
      <ul className="text-gray-900 dark:text-slate-100 pb-12">
        <li>
          <a
            href="www.spicetower.games"
            className="transition ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-teal-500 px-2 my-2"
          >
            Spice Tower Games
          </a>
        </li>
      </ul>

      <h2 className="font-heading text-3xl italic text-gray-900 dark:text-slate-100 px-2 pb-6">
        Selected Past Corporate Contributions
      </h2>
      <ul className="text-gray-900 dark:text-slate-100 pb-12">
        <li>
          <a
            href="https://apps.apple.com/us/app/cox-app/id415894489"
            className="transition ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-teal-500 px-2 my-2"
          >
            Cox App for iOS
          </a>
        </li>
        <li>
          <span
            className="transition ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-teal-500 px-2 my-2"
          >
            An internal React, Redux, and Java Spring application for Best Buy
          </span>
        </li>
        <li>
          <span
            className="transition ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-teal-500 px-2 my-2"
          >
            An internal React, Redux, and Java Spring application for Express Scripts
          </span>
        </li>
        <li>
          <a
            href="https://www.yourclassical.org/story/2021/10/20/listen-to-the-yourclassical-app-on-your-mobile-device" 
            className="transition ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-teal-500 px-2 my-2"
          >
            Your Classical in React Native for MPR
          </a>
        </li>
        <li>
          <a
            href="https://www.slowdownshow.org/"
            className="transition ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-teal-500 px-2 my-2"
          >
            APM Podcast subsite engine in Next.js for MPR
          </a>
        </li>
        <li>
          <a
            href="https://www.mprnews.org"
            className="transition ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-teal-500 px-2 my-2"
          >
            MPR News complete site rebuild in Next.js for MPR
          </a>
        </li>
        <li>
          <a
            href="https://www.npmjs.com/search?q=%40apmg"
            className="transition ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-teal-500 px-2 my-2"
          >
            Assorted React component libraries for MPR
          </a>
        </li>
        <li>
          <span
            className="transition ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-teal-500 px-2 my-2"
          >
            An internal iOS application for Renewal By Anderson
          </span>
        </li>
      </ul>
    </main>
  )
}
