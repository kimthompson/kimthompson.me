import styles from 'highlight.js/styles/tokyo-night-dark.css'
import { LinksFunction } from '@remix-run/node'
import { Outlet } from '@remix-run/react'

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ]
}

export default function Ideas() {
  return (
    <div className="flex justify-center">
      <article className="prose lg:prose-xl prose-slate dark:prose-invert prose-img:rounded-md  prose-headings:font-heading prose-headings:italic prose-headings:font-light">
        <Outlet />
      </article>
    </div>
  )
}
