import { data } from '~/routes/processPosts'

import { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import Posts from '../components/Posts'
import Projects, { Technology } from '../components/Projects'

export const loader: LoaderFunction = () => data

export default function Index() {
  const data = useLoaderData()

  const indieProjects: { name: string, link: string, technologies: Technology[] }[] = [
    {
      name: 'Spice Tower Entertainment',
      link: 'https://spicetower.games',
      technologies: [
        Technology.web,
        Technology.remix,
        Technology.react,
        Technology.tailwind,
      ],
    },
  ]

  const corpoProjects: { name: string, link?: string, technologies: Technology[] }[] = [
    {
      name: 'Cox App',
      link: 'https://apps.apple.com/us/app/cox-app/id415894489',
      technologies: [
        Technology.ios,
        Technology.swift,
        Technology.aws,
      ],
    },
    {
      name: 'Internal Application for Best Buy',
      technologies: [
        Technology.web,
        Technology.react,
        Technology.redux,
        Technology.java,
        Technology.css,
        Technology.aws,
      ],
    },
    {
      name: 'Internal Application for Express Scripts',
      technologies: [
        Technology.web,
        Technology.react,
        Technology.redux,
        Technology.java,
        Technology.css,
        Technology.webpack,
      ],
    },
    {
      name: 'Your Classical',
      link: 'https://apps.apple.com/us/app/yourclassical/id1564157090',
      technologies: [
        Technology.ios,
        Technology.android,
        Technology.web,
        Technology.react,
        Technology.css,
        Technology.webpack,
      ],
    },
    {
      name: 'APM Podcast Site Generator',
      link: 'https://www.slowdownshow.org/',
      technologies: [
        Technology.web,
        Technology.react,
        Technology.nextjs,
        Technology.node,
        Technology.sass,
        Technology.webpack,
      ],
    },
    {
      name: 'MPR News complete site rebuild',
      link: 'https://www.mprnews.org/',
      technologies: [
        Technology.web,
        Technology.react,
        Technology.nextjs,
        Technology.node,
        Technology.sass,
        Technology.webpack,
      ],
    },
    {
      name: 'MPR News 2020 Election Visualizations',
      link: 'https://www.mprnews.org/2020-11-03/',
      technologies: [
        Technology.web,
        Technology.d3,
        Technology.react,
        Technology.sass,
      ],
    },
    {
      name: 'React Component Libraries for MPR',
      link: 'https://www.npmjs.com/search?q=%40apmg',
      technologies: [
        Technology.npm,
        Technology.react,
        Technology.sass,
        Technology.webpack,
      ],
    },
    {
      name: 'Internal Application for Renewal by Anderson',
      technologies: [
        Technology.ios,
        Technology.objc,
      ],
    },
    {
      name: 'Internal Application for Cargill',
      technologies: [
        Technology.ios,
        Technology.windows,
        Technology.objc,
        Technology.csharp,
      ],
    },
    {
      name: 'Internal Application for Aramark',
      technologies: [
        Technology.windows,
        Technology.csharp,
      ],
    },
  ]

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
            href="https://www.eff.org"
            className="hover:text-gray-900 dark:hover:text-slate-100"
          >
            /s
          </a>
        </span>
      </h2>
      <Posts posts={data.drafts} isDraft={true} />

      <h2 className="font-heading text-3xl italic text-gray-900 dark:text-slate-100 px-2 pb-6">
        Recent Indie Projects
      </h2>
      <Projects projects={indieProjects} />

      <h2 className="font-heading text-3xl italic text-gray-900 dark:text-slate-100 px-2 pb-6">
        Selected Past Corporate Contributions
      </h2>
      <Projects projects={corpoProjects} />
    </main>
  )
}
