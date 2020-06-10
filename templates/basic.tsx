import * as React from "react"

import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import { name, basePath } from "../common/defaults"

import core from '../less/core.module.less'
import grid from '../less/grid.module.less'
import '../less/typography.module.less'

type Props = {
    title: string;
    type: string;
    path: string;
    publishedTime?: string;
    author?: string;
    tag?: string;
    image?: string;
    imageType?: string;
    description?: string;
}

const Basic: React.FunctionComponent<Props> = ({title, type, path, publishedTime,
        author, tag, image, imageType, description, children})  => {

    let metaOgWebsite;
    let metaOgArticle;
    const metaOgPath = `${basePath}${path}`;
    const metaOgImage = `${basePath}${image}`;

    if(type === 'website') {
        metaOgWebsite = (
            <>
                <meta property="og:image:secure_url" content={metaOgImage} />
                <meta property="og:image:type" content={imageType} />
            </>
        )
    }

    if(type === 'article') {
        metaOgArticle = (
            <>
                <meta property='article:published_time' content={publishedTime} />
                <meta property='article:author' content={author} />
                <meta property='article:tag' content={tag} />
                <meta property="og:image:secure_url" content={metaOgImage} />
                <meta property="og:image:type" content={imageType} />
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
               <meta property="og:locale" content="en_US" />
               <meta property='og:description' content={description} />
               {metaOgWebsite}
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
   )

}

export { Basic as default };
