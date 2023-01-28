import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import React from 'react'

import rootStyles from '~/styles/root.css'

import Layout from './components/layout'
import { seedTransactions } from './seeders/transaction.seeder'

/**
 * @returns {import("@remix-run/node").LinkDescriptor[]}
 */
export const links = () => [
  {
    rel: 'stylesheet',
    href: rootStyles,
  },
]

/**
 * @returns {import("@remix-run/node").MetaFunction}
 */
export const meta = () => ({
  charset: 'utf-8',
  title: 'Finance Manager',
  viewport: 'width=device-width,initial-scale=1',
})

export default function App() {
  React.useEffect(() => {
    seedTransactions()
  }, [])

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
