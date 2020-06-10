import * as React from "react"

import '../particles/less/footer.module.less'
import grid from '../particles/less/grid.module.less'
import '../particles/less/footer.module.less'

const Footer: React.FunctionComponent = () => (
    <footer>
        <div className={grid.container}>
            <div className={grid.col3}>
                <h3>Resources</h3>
                <ul>
                    <li>
                        <a href='https://vetherasset.org/whitepaper'>Whitepaper</a>
                    </li>
                    <li>
                        <a href='https://github.com/vetherasset/vether-contracts'>Smart Contract</a>
                    </li>
                    <li>
                        <a href='https://github.com/vetherasset/vether-miner'>Mining client</a>
                    </li>
                    <li>
                        <a href='https://etherscan.io/address/0x0111011001100001011011000111010101100101'>Burnt Ether</a>
                    </li>
                    <li>
                        <a href='https://github.com/vetherasset/vether-branding'>Branding</a>
                    </li>
                </ul>
            </div>
            <div className={grid.col3}>
                <h3>Exchange</h3>
                <ul>
                    <li>
                        <a href='https://v1.uniswap.exchange/swap/0x31Bb711de2e457066c6281f231fb473FC5c2afd3'>Uniswap</a>
                    </li>
                    <li>
                        <a href='https://trade.resfinex.com/?pair=VETH_ETH'>Resfinex</a>
                    </li>
                    <li>
                        <a href='https://fatbtc.com/trading?currency=VETH%2FUSDT&freetab=2'>FatBTC</a>
                    </li>
                    <li>
                        <a href='https://forkdelta.app/#!/trade/0x31bb711de2e457066c6281f231fb473fc5c2afd3-ETH'>Forkdelta</a>
                    </li>
                </ul>
            </div>
            <div className={grid.col3}>
                <h3>Media</h3>
                <ul>
                    <li>
                        <a href='https://coinmarketcap.com/currencies/vether/'>CoinMarketCap</a>
                    </li>
                    <li>
                        <a href='https://www.coingecko.com/en/coins/vether'>CoinGecko</a>
                    </li>
                    <li>
                        <a href='https://etherscan.io/address/0x31bb711de2e457066c6281f231fb473fc5c2afd3'>EtherScan</a>
                    </li>
                </ul>
            </div>
            <div className={grid.col3}>
                <h3>Community</h3>
                <ul>
                    <li>
                        <a href='https://discord.gg/c5aBC7Q'>Discord</a>
                    </li>
                    <li>
                        <a href='https://twitter.com/strictly_scarce'>Twitter</a>
                    </li>
                    <li>
                        <a href='https://github.com/vetherasset'>Github</a>
                    </li>
                    <li>
                        <a href='https://discord.com/invite/c5aBC7Q'>Telegram</a>
                    </li>
                    <li>
                        <a href='https://bitcointalk.org/index.php?topic=5243406'>Bitcointalk.org</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
)

export { Footer as default };
