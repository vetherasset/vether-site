import * as React from "react"
import Link from 'next/link'

import footer from '../particles/less/footer.module.less'
import grid from '../particles/less/grid.module.less'
import '../particles/less/footer.module.less'

const Footer: React.FunctionComponent = () => (
    <footer>
        <div className={grid.container}>
            <div className={grid.col3}>
                <h3>Resources</h3>
                <ul>
                    <li>
                        <Link href='https://vetherasset.org/whitepaper'>
                            <a>Whitepaper</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://github.com/vetherasset/vether-contracts'>
                            <a>Smart Contract</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://github.com/vetherasset/vether-miner'>
                            <a>Mining client</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://etherscan.io/address/0x0111011001100001011011000111010101100101'>
                            <a>Burnt Ether</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://github.com/vetherasset/vether-branding'>
                            <a>Branding</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={grid.col3}>
                <h3>Exchange</h3>
                <ul>
                    <li>
                        <Link href='https://v1.uniswap.exchange/swap/0x31Bb711de2e457066c6281f231fb473FC5c2afd3'>
                            <a>Uniswap</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://trade.resfinex.com/?pair=VETH_ETH'>
                            <a>Resfinex</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://fatbtc.com/trading?currency=VETH%2FUSDT&freetab=2'>
                            <a>FatBTC</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://forkdelta.app/#!/trade/0x31bb711de2e457066c6281f231fb473fc5c2afd3-ETH'>
                            <a>Forkdelta</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={grid.col3}>
                <h3>Media</h3>
                <ul>
                    <li>
                        <Link href='https://coinmarketcap.com/currencies/vether/'>
                            <a>CoinMarketCap</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://www.coingecko.com/en/coins/vether'>
                            <a>CoinGecko</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://etherscan.io/address/0x31bb711de2e457066c6281f231fb473fc5c2afd3'>
                            <a>EtherScan</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={grid.col3}>
                <h3>Community</h3>
                <ul>
                    <li>
                        <Link href='https://discord.gg/p9RhrM'>
                            <a>Discord</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://twitter.com/strictly_scarce'>
                            <a>Twitter</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://github.com/vetherasset'>
                            <a>Github</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://discord.com/invite/c5aBC7Q'>
                            <a>Telegram</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://bitcointalk.org/index.php?topic=5243406'>
                            <a>Bitcointalk.org</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
)

export { Footer as default };
