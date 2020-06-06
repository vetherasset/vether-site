import * as React from "react";
import Head from 'next/head'

import Layout from '../templates/basic'
import Intro from '../components/intro'

import grid from '../particles/less/grid.module.less';
import section from '../particles/less/sections.module.less'

import {siteTitle} from "../common/defaults"
const pageTitle = 'A strictly-scarce Ethereum-based asset.';

type Props = {
    title: string;
}

const Index: React.FunctionComponent<Props> = () => (
        <Layout>
            <Head>
                <title>{siteTitle+pageTitle}</title>
            </Head>

            <div className={grid.container}>

                <Intro/>

                <div className={section.headline}>
                    <h1>Vether</h1>
                    <span>A strictly-scarce Ethereum-based asset</span>
                </div>

            </div>

        </Layout>
)

export { Index as default };
