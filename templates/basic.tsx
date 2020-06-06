import * as React from "react";

import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

import core from '../particles/less/core.module.less';
import grid from '../particles/less/grid.module.less';
import '../particles/less/typography.module.less';

const Basic: React.FunctionComponent = ({children})  => (
    <div className={core.viewport}>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, width=device-width" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header/>

        <main className={grid.container}>
            {children}
        </main>

        <Footer/>
    </div>
)

export { Basic as default };
