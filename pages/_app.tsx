import Sidebar from '@/common/layouts/sidebar/Sidebar.layout'
import '@/styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ComponentType, ReactElement } from 'react'

export type NextPageLayout<P = {}> = NextPage<P> & {
  getLayout?:(_page: ReactElement) => React.ReactNode;
  layout?: ComponentType
}

interface AppPropsLayout extends AppProps {
  Component: NextPageLayout
}

export default function App({ Component, pageProps }: AppPropsLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <Sidebar> 
      <Component {...pageProps} />
    </Sidebar>
  );
}