import * as React from "react";
import videocontent from '../public/mp4/intro.mp4'
import section from '../particles/less/sections.module.less'

const Intro: React.FunctionComponent = () => (
    <div>
        <video className={section.intro} autoPlay controls muted loop>
            <source src={videocontent} type="video/mp4"/>
        </video>
    </div>
)

export default Intro
