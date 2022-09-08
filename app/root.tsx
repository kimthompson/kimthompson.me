import type { MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { LinksFunction } from '@remix-run/node'

import Header from './components/Header'
import Footer from './components/Footer'

import styles from './styles/app.css'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Kim Thompson',
  viewport: 'width=device-width,initial-scale=1',
})

export default function App() {
  return (
    <html lang="en" className="bg-slate-300 dark:bg-gray-900">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="w-screen">
        <Header />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
