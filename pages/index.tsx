import * as React from "react"
import Head from 'next/head'
import Link from 'next/link'

import Layout from '../templates/basic'
import Intro from '../components/intro'

import grid from '../particles/less/grid.module.less'
import section from '../particles/less/sections.module.less'

import {siteTitle, url} from "../common/defaults"
const pageTitle = 'A strictly-scarce Ethereum-based asset'

const Index: React.FunctionComponent = () => (
        <Layout>
            <Head>
                <title>{siteTitle+pageTitle}</title>
            </Head>

            <div className={grid.container}>

                <Intro/>

                <div className={section.headline}>
                    <h1>Vether</h1>
                    <p>A strictly-scarce Ethereum-based asset</p>
                    <div>
                        <Link href="https://discord.gg/p9RhrM">
                            <a>
                                <img className={section.discord} src="svg/discord.svg" alt="Vether - A strictly-scarce Ethereum-based asset" />
                            </a>
                        </Link>
                        <Link href="https://github.com/vetherasset">
                            <a>
                                <img className={section.github} src="svg/github.svg" alt="Vether - A strictly-scarce Ethereum-based asset" />
                            </a>
                        </Link>
                        <Link href="https://t.me/vetherasset">
                            <a>
                                <img className={section.telegram} src="svg/telegram.svg" alt="Vether - A strictly-scarce Ethereum-based asset" />
                            </a>
                        </Link>
                    </div>
                </div>

            </div>

        </Layout>
)

export { Index as default };
