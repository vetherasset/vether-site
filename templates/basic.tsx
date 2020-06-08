import * as React from "react"

import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import { name, url } from "../common/defaults"

import core from '../particles/less/core.module.less'
import grid from '../particles/less/grid.module.less'
import '../particles/less/typography.module.less'

type Props = {
    title: string;
    type: string;
    path: string;
    publishedTime?: string;
    author?: string;
    tag?: string;
}

const Basic: React.FunctionComponent<Props> = ({title, type, path, publishedTime,
        author, tag, children})  => {

    const metaOgPath = `${url}${path}`
    let metaOgArticle;

    if(type === 'article') {
        metaOgArticle = (
            <>
                <meta property='article:published_time' content={publishedTime} />
                <meta property='article:author' content={author} />
                <meta property='article:tag' content={tag} />
            </>
        )
    }

   return (
       <>
           <Head>
               <meta charSet="utf-8" />
               <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, width=device-width" />
               <link rel="icon" href='../public/ico/favicon.ico' />
               <title>{name} - {title}</title>
               <meta property='og:site_name' content={name} />
               <meta property='og:title' content={title} />
               <meta property='og:type' content={type} />
               <meta property='og:url' content={metaOgPath} />
               {metaOgArticle}
           </Head>

               <div className={core.viewport}>
                   <Header/>

                   <main className={grid.container}>
                       {children}
                   </main>

                   <Footer/>
               </div>
       </>
   );

};

export { Basic as default };
