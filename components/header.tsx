import * as React from "react"
import {url} from "../common/defaults"
import Link from 'next/link'

import header from '../particles/less/header.module.less'
import grid from '../particles/less/grid.module.less'
import button from '../particles/less/buttons.module.less'

const Header: React.FunctionComponent = () => (
    <header className={grid.container}>
        <div className={`${grid.col4} ${header.brand}`} >
            <a href={url}>
                <img className={header.logotype} src="svg/logotype.svg" alt="Vether - A strictly-scarce Ethereum-based asset." />
            </a>
        </div>
        <div className={grid.col4}>
        </div>
        <div className={`
            ${grid.col4}
            ${header.action}
        `}>
            <a href='https://vetherasset.org/' className={button.menubar}>Open Dapp</a>
        </div>
    </header>
)

export { Header as default };
