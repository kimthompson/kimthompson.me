import styles from '@catppuccin/highlightjs/css/catppuccin-mocha.css'
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
    <main className="mx-6 sm:mx-24 lg:mx-36 xl:mx-48 2xl:mx-96">
      <article className="prose lg:prose-xl prose-slate dark:prose-invert prose-img:rounded-md  prose-headings:font-heading prose-headings:italic prose-headings:font-light">
        <Outlet />
      </article>
    </main>
  )
}
