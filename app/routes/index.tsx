import { data } from '~/routes/processPosts'

import type { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import Posts from '../components/Posts'
import Projects from '../components/Projects'
import { indieProjects, corpoProjects } from '~/utils/projectData'

export const loader: LoaderFunction = () => data

export default function Index() {
  const data = useLoaderData()

  return (
    <main className="mx-6 sm:mx-24 lg:mx-36 xl:mx-48 2xl:mx-96">
      <h2 className="font-heading text-3xl italic text-gray-900 dark:text-slate-100">
        Recent Posts
      </h2>
      <Posts posts={data.posts} />

      <h2 className="flex flex-wrap font-heading text-3xl italic text-gray-900 dark:text-slate-100">
        Digital Garden
        <span className="text-base not-italic text-indigo-500 pb-2 sm:pl-3 sm:pt-2">
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

      <h2 className="font-heading text-3xl italic text-gray-900 dark:text-slate-100">
        Recent Indie Projects
      </h2>
      <Projects projects={indieProjects} />

      <h2 className="font-heading text-3xl italic text-gray-900 dark:text-slate-100">
        Selected Past Corporate Contributions
      </h2>
      <Projects projects={corpoProjects} />
    </main>
  )
}
