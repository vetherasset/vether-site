import * as React from "react"
import { useRouter } from 'next/router'

import Page from '../templates/basic'
import Intro from '../components/intro'

import grid from '../less/grid.module.less'
import section from '../less/sections.module.less'
import {title, screenshot, description} from "../common/defaults";

const type = 'website'

const Index: React.FunctionComponent = () => {

    const router = useRouter()

    return (
        <Page title={title} type={type} path={router.pathname} image={screenshot} description={description}>

            <div className={grid.container}>

                <Intro/>

                <div className={section.headline}>
                    <h1>Vether</h1>
                    <p>A strictly-scarce Ethereum-based asset</p>
                    <div>
                        <a href='https://discord.gg/c5aBC7Q'>
                            <img className={section.discord} src="svg/discord.svg"
                                 alt="Vether - A strictly-scarce Ethereum-based asset"/>
                        </a>
                        <a href='https://github.com/vetherasset'>
                            <img className={section.github} src="svg/github.svg"
                                 alt="Vether - A strictly-scarce Ethereum-based asset"/>
                        </a>
                        <a href='https://t.me/vaderprotocol'>
                            <img className={section.telegram} src="svg/telegram.svg"
                                 alt="Vether - A strictly-scarce Ethereum-based asset"/>
                        </a>
                    </div>
                </div>

            </div>

        </Page>
    )
}

export { Index as default };
