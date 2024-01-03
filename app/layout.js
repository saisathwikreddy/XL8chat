import { Inter } from 'next/font/google'
import '~/assets/styles/globals.scss'
import '~/assets/styles/grid.scss'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'XL8 Chat',
  description: 'No language barrier should stop you from interacting with friends',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  )
}
