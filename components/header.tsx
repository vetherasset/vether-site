import * as React from "react"
import Link from 'next/link'

import header from '../less/header.module.less'
import grid from '../less/grid.module.less'
import button from '../less/buttons.module.less'

const Header: React.FunctionComponent = () =>  {

   return (
        <header className={grid.container}>
            <div className={`${grid.col4} ${header.brand}`} >
                <Link href="/">
                    <a>
                        <img className={header.logotype} src="svg/logotype.svg" alt="Vether - A strictly-scarce Ethereum-based asset." />
                    </a>
                </Link>
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
}

export { Header as default };
