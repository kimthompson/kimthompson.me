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

export default function Blog() {
  return (
    <div className="flex justify-center">
      <article className="prose lg:prose-xl py-10">
        <Outlet />
      </article>
    </div>
  )
}
