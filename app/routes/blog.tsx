import styles from 'highlight.js/styles/base16/papercolor-dark.css'
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

export default function Blog() {
  return (
    <div className="flex justify-center">
      <article className="prose lg:prose-xl prose-slate dark:prose-invert prose-img:rounded-md  prose-headings:font-heading prose-headings:italic prose-headings:font-light">
        <Outlet />
      </article>
    </div>
  )
}
