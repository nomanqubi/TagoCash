import React from 'react'
import { Layout } from '../layout/Layout.jsx'
import { Hero } from '../Components/Home/Hero/Hero.jsx'
import { Fasst } from '../Components/Home/Fasst/Fasst.jsx'
import { Exchange } from '../Components/Home/Exchange/Exchange.jsx'
import { Paying } from '../Components/Home/Paying/Paying.jsx'
import { Everywhere } from '../Components/Home/Everywhere/Everywhere.jsx'
import { GetMore } from '../Components/Home/GetMore/GetMore.jsx'
import { Tago } from '../Components/Home/Tago/Tago.jsx'
import { Frequently } from '../Components/Home/Frequently/Frequently.jsx'
import { Stay } from '../Components/Home/Stay/Stay.jsx'
import { Sliders } from '../Components/Home/Slider/Sliders.jsx'

export const Home = () => {
    return (
        <>
            <Layout>
                <Hero />
                <Fasst />
                <Exchange />
                <Paying />
                <Everywhere />
                <GetMore />
                <Tago />
                <Frequently />
                <Stay />
                <Sliders />
            </Layout>
        </>
    )
}
