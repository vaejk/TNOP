import React, { Component } from 'react'
import Head from './Head'
import { withRouter } from 'react-router-dom'
class Rankinglist extends Component {
    constructor() {
        super()
        this.state = {
            actins: '周排行',
            actins2: '重磅榜',
            navs: [{ name: '周排行' }, { name: '月排行' }, { name: '新生排行' }],
            nav2: [{ name: '重磅榜' }, { name: '佳作榜' }, { name: '月票榜' }, { name: '轻币榜' }, { name: '墨水榜' }, { name: '应援榜' }]
        }
        this.actin = this.actin.bind(this)
        this.actin2 = this.actin2.bind(this)
    }
    actin(xc) {
        // this.props.history.push(path);
        this.setState({
            actins: xc
        })
    }
    actin2(xc) {
        this.setState({
            actins2: xc
        })
    }
    render() {
        return (
            <>
                <Head></Head>
                <ul className="fentou">
                    {this.state.navs.map(item => {
                        return <li key={item.name} className={this.state.actins == item.name ? 'activity' : null} onClick={this.actin.bind(null, item.name)}>
                            <a>{item.name}</a>
                            <i></i>
                        </li>
                    })}
                </ul>
                <div className="content">
                    <ul className="cont-left">
                        {this.state.nav2.map(item => {
                            return <li key={item.name} className={this.state.actins2 == item.name ? 'checked' : null} onClick={this.actin2.bind(null, item.name)}>
                                {item.name}
                            </li>
                        })}
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
Rankinglist = withRouter(Rankinglist)
export default Rankinglist;