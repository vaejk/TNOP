import React, { Component } from 'react'
import Head from './Head'
class Rankinglist extends Component {
    constructor() {
        super()
        this.state = {
            defaultHeight: true
        }
    }
    render() {
        return (
            <>
                <Head></Head>
                <ul className="fentou">
                    <li>
                        <a>周排行</a>
                        <i></i>
                    </li>
                    <li>
                        <a>月排行</a>
                        <i></i>
                    </li>
                    <li>
                        <a>新书排行</a>
                        <i></i>
                    </li>
                </ul>
                <div className="content">
                    <ul className="cont-left">
                        <li>重磅榜</li>
                        <li>佳作榜</li>
                        <li>月票榜</li>
                        <li>轻币榜</li>
                        <li>墨水榜</li>
                        <li>应援榜</li>
                    </ul>
                    <ul className="cont-right">
                        <li>
                            <img src="https://rin.linovel.net/cover/20191219/101752_0_702a843cda59206171ef0af0489ed363.jpg!min300jpg" alt="" />
                            <div>
                                <p><span>我的便携式游戏女友</span><span className="greng">08</span></p>
                                <p>灯雨黄昏</p>
                                <p>66.7万</p>
                                <p><span>恋爱</span><span>科幻</span><span>6016.7万热度</span></p>
                            </div>
                        </li>
                        <li>
                            <img src="https://rin.linovel.net/cover/20191219/101752_0_702a843cda59206171ef0af0489ed363.jpg!min300jpg" alt="" />
                            <div>
                                <p><span>我的便携式游戏女友</span><span className="greng">08</span></p>
                                <p>灯雨黄昏</p>
                                <p>66.7万</p>
                                <p><span>恋爱</span><span>科幻</span><span>6016.7万热度</span></p>
                            </div>
                        </li>
                        <li>
                            <img src="https://rin.linovel.net/cover/20191219/101752_0_702a843cda59206171ef0af0489ed363.jpg!min300jpg" alt="" />
                            <div>
                                <p><span>我的便携式游戏女友</span><span className="greng">08</span></p>
                                <p>灯雨黄昏</p>
                                <p>66.7万</p>
                                <p><span>恋爱</span><span>科幻</span><span>6016.7万热度</span></p>
                            </div>
                        </li>
                        <li>
                            <img src="https://rin.linovel.net/cover/20191219/101752_0_702a843cda59206171ef0af0489ed363.jpg!min300jpg" alt="" />
                            <div>
                                <p><span>我的便携式游戏女友</span><span className="greng">08</span></p>
                                <p>灯雨黄昏</p>
                                <p>66.7万</p>
                                <p><span>恋爱</span><span>科幻</span><span>6016.7万热度</span></p>
                            </div>
                        </li>
                        <li>
                            <img src="https://rin.linovel.net/cover/20191219/101752_0_702a843cda59206171ef0af0489ed363.jpg!min300jpg" alt="" />
                            <div>
                                <p><span>我的便携式游戏女友</span><span className="greng">08</span></p>
                                <p>灯雨黄昏</p>
                                <p>66.7万</p>
                                <p><span>恋爱</span><span>科幻</span><span>6016.7万热度</span></p>
                            </div>
                        </li>
                        <li>
                            <img src="https://rin.linovel.net/cover/20191219/101752_0_702a843cda59206171ef0af0489ed363.jpg!min300jpg" alt="" />
                            <div>
                                <p><span>我的便携式游戏女友</span><span className="greng">08</span></p>
                                <p>灯雨黄昏</p>
                                <p>66.7万</p>
                                <p><span>恋爱</span><span>科幻</span><span>6016.7万热度</span></p>
                            </div>
                        </li>
                        <li>
                            <img src="https://rin.linovel.net/cover/20191219/101752_0_702a843cda59206171ef0af0489ed363.jpg!min300jpg" alt="" />
                            <div>
                                <p><span>我的便携式游戏女友</span><span className="greng">08</span></p>
                                <p>灯雨黄昏</p>
                                <p>66.7万</p>
                                <p><span>恋爱</span><span>科幻</span><span>6016.7万热度</span></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}
export default Rankinglist;