import Head from 'next/head'
import { MainPageContainer } from '@/widgets/main-page-container'
import { Hero } from '@/widgets/hero'
import { Map } from '@/widgets/map'
import { DayNight } from '@/widgets/day-night'
import { FromStreet } from '@/widgets/from-street'
import { Tovars } from '@/widgets/tovars'
import { SelfCheckout } from '@/widgets/self-checkout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hazbin Shop</title>
        <meta name="description" content="Самый модный магазин города Demovio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPageContainer>
        <Hero />
        <DayNight />
        <FromStreet />
        <Tovars />
        <SelfCheckout />
        <Map />
      </MainPageContainer>
    </>
  )
}
