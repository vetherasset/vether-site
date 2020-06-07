import * as React from "react";
import {url} from "../common/defaults"
import Link from 'next/link'

import header from '../particles/less/header.module.less';
import grid from '../particles/less/grid.module.less';
import button from '../particles/less/buttons.module.less';
import utilities from '../particles/less/utilities.module.less';

const Header: React.FunctionComponent = () => (
    <header className={grid.container}>
        <div className={`${grid.col4} ${header.brand}`} >
            <img onClick={e => {
                window.location.href = url;
            }} className={header.logotype}
                 src="svg/logotype.svg" alt="Vether - A strictly-scarce Ethereum-based asset." />
        </div>
        <div className={grid.col4}>
        </div>
        <div className={`
            ${grid.col4}
            ${header.action}
        `}>
            <Link href="https://vetherasset.org/">
                <a className={button.menubar}>Open Dapp</a>
            </Link>
        </div>
    </header>
)

export { Header as default };
