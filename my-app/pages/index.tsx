import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Section from '../components/Section'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Navegation Bar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Section />
    </div>
  )
}