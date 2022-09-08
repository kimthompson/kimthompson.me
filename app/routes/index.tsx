import * as firstPost from './blog/testing-at-mpr.mdx'
import * as secondPost from './blog/on-basecamp.mdx'

import * as firstDraft from './ideas/thoughts-on-stray.mdx'
import * as secondDraft from './ideas/an-ode-to-victor-mono.mdx'
import * as thirdDraft from './ideas/swift-ui-for-react-developers.mdx'

import { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import Posts from '../components/Posts'

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx??$/, ''),
    ...mod.attributes.meta,
  }
}

function sortPostsByDate(a: any, b: any) {
  let first: any = new Date(a.date)
  let second: any = new Date(b.date)
  return second - first
}

export const loader: LoaderFunction = () => {
  return {
    posts: [postFromModule(firstPost), postFromModule(secondPost)],
    drafts: [postFromModule(firstDraft), postFromModule(secondDraft), postFromModule(thirdDraft)],
  }
}

export default function Index() {
  const data = useLoaderData()

  return (
    <main className="mx-6 sm:mx-24 lg:mx-36 xl:mx-48 2xl:mx-96">
      <h2 className="font-heading text-3xl italic text-gray-900 dark:text-slate-100 px-2 pb-6">Recent Posts</h2>
      <Posts posts={data.posts.sort(sortPostsByDate)} />

      <h2 className="font-heading text-3xl italic text-gray-900 dark:text-slate-100 px-2 pb-6">Drafts <span className="text-base not-italic text-indigo-500">Because privacy is for cowards <a className="hover:text-gray-900 dark:hover:text-slate-100" href="https://www.eff.org">/s</a></span></h2>
      <Posts posts={data.drafts.sort(sortPostsByDate)} isDraft={true} />
    </main>
  )
}
