import type { MetaFunction } from '@remix-run/node'
import type { LinksFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import { ThemeProvider, useTheme } from './utils/themeProvider'

import Header from './components/Header'
import Footer from './components/Footer'

import styles from './styles/app.css'

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: styles },

  ]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Kim Thompson',
  viewport: 'width=device-width,initial-scale=1',
})

function App() {
  const [theme] = useTheme()

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <Meta />
        <Links />
      </head>
      <body className="w-screen bg-slate-100 dark:bg-gray-900 overflow-x-hidden">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Header />
            <Outlet />
            <Footer />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  )
}

export default function AppWithProviders() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}
