import * as React from "react"

import Page from '../templates/basic'
import Intro from '../components/intro'

import grid from '../particles/less/grid.module.less'
import section from '../particles/less/sections.module.less'
import {title} from "../common/defaults";

const Index: React.FunctionComponent = () => (

    <Page title={title} type='article' path='/'>

        <div className={grid.container}>

            <Intro/>

            <div className={section.headline}>
                <h1>Vether</h1>
                <p>A strictly-scarce Ethereum-based asset</p>
                <div>
                    <a href='https://discord.gg/p9RhrM'>
                        <img className={section.discord} src="svg/discord.svg" alt="Vether - A strictly-scarce Ethereum-based asset" />
                    </a>
                    <a href='https://github.com/vetherasset'>
                        <img className={section.github} src="svg/github.svg" alt="Vether - A strictly-scarce Ethereum-based asset" />
                    </a>
                    <a href='https://t.me/vetherasset'>
                        <img className={section.telegram} src="svg/telegram.svg" alt="Vether - A strictly-scarce Ethereum-based asset" />
                    </a>
                </div>
            </div>

        </div>

    </Page>

)

export { Index as default };
