import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import axios from 'axios'
class Content extends Component {
    constructor() {
        super()
        this.state = {
            links: [
                { imgs: require('../../images/book_icon.png'), name: '分类', path: '/pagelist' },
                { imgs: require('../../images/calendar_icon.png'), name: '活动', path: '/activity' },
                { imgs: require('../../images/trophy_icon.png'), name: '新人赏', path: '/new' },
                { imgs: require('../../images/pen_icon.png'), name: '签约', path: '/sign' }
            ]
        }
        this.links = this.likns.bind(this)
    }
    likns(path) {
        this.props.history.push(path)
    }
    componentDidMount() {
        // axios.get('https://www.linovel.net/hub/getBooksByCollection?id=5d1331bd4e741b02ed36fee5')
        // .then((res) => console.log(res))
        // .catch((err) => console.log(err));      
    }
    render() {
        return (
            <>
                <ul className="nav">
                    <div className="w">
                        {this.state.links.map(item => {
                            return <li key={item.name} onClick={this.links.bind(null, item.path)}><img src={item.imgs} alt={item.name + 1} />{item.name}</li>
                        })}
                        {/* <li><img src="../src/images/book_icon.png" alt="">分类</li>
            <li><img src="../src/images/book_icon.png" alt="">活动</li>
            <li><img src="../src/images/book_icon.png" alt="">新人赏</li>
            <li><img src="../src/images/book_icon.png" alt="">签约</li> */}
                    </div>
                </ul>
                <div className="top-line">
                    <div className="w">
                        <img src={require('../../images/news_heading_title.png')} alt="" />
                        <span>2019新人赏</span>
                    </div>
                </div>
                <div className="testimonial">
                    <div className="w">
                        <div className="top">
                            <h3>编辑推荐</h3><span>2019第25周勤更推荐</span><a href="">更多<img src="../../images/more.png" alt="" /></a>
                        </div>
                        <ul className="list">
                            <li>
                                <img src={'https://rin.linovel.net/cover/20190802/105549_0_0a96fdea7ba13ace6b61a3c7ab67ae23.jpg!min300jpg'}
                                    alt="" />
                                <div>
                                    <h4>攻略宫城小姐的恋爱计划</h4>
                                    <p>我叫羽岛刹那，我现在慌的一批，是这样的，有个妹子刚才扇了我一巴掌，我却对她动心了，请问这是病么？
                                        什么？抖M，讨厌啦~我才不是抖M，只是碰巧喜欢那个妹子对我动粗的感觉~
                                        于是，我打算对那位妹子发起积极攻势，总而言之，先讨好她，让她娇羞，再来......
                                        咳咳咳！有点太猛烈了......
                                        不过，虽然我很喜欢宫城小姐啦，可总觉得宫城小姐有什么秘密瞒着我？
                            就在某一天，当我看到宫城小姐在我面前......</p>
                                    <i></i>
                                </div>
                            </li>
                            <li>
                                <img src="https://rin.linovel.net/cover/20190802/105549_0_0a96fdea7ba13ace6b61a3c7ab67ae23.jpg!min300jpg"
                                    alt="" />
                                <div>
                                    <h4>攻略宫城小姐的恋爱计划</h4>
                                    <p>我叫羽岛刹那，我现在慌的一批，是这样的，有个妹子刚才扇了我一巴掌，我却对她动心了，请问这是病么？
                                        什么？抖M，讨厌啦~我才不是抖M，只是碰巧喜欢那个妹子对我动粗的感觉~
                                        于是，我打算对那位妹子发起积极攻势，总而言之，先讨好她，让她娇羞，再来......
                                        咳咳咳！有点太猛烈了......
                                        不过，虽然我很喜欢宫城小姐啦，可总觉得宫城小姐有什么秘密瞒着我？
                            就在某一天，当我看到宫城小姐在我面前......</p>
                                    <i></i>
                                </div>
                            </li>
                            <li>
                                <img src="https://rin.linovel.net/cover/20190802/105549_0_0a96fdea7ba13ace6b61a3c7ab67ae23.jpg!min300jpg"
                                    alt="" />
                                <div>
                                    <h4>攻略宫城小姐的恋爱计划</h4>
                                    <p>我叫羽岛刹那，我现在慌的一批，是这样的，有个妹子刚才扇了我一巴掌，我却对她动心了，请问这是病么？
                                        什么？抖M，讨厌啦~我才不是抖M，只是碰巧喜欢那个妹子对我动粗的感觉~
                                        于是，我打算对那位妹子发起积极攻势，总而言之，先讨好她，让她娇羞，再来......
                                        咳咳咳！有点太猛烈了......
                                        不过，虽然我很喜欢宫城小姐啦，可总觉得宫城小姐有什么秘密瞒着我？
                            就在某一天，当我看到宫城小姐在我面前......</p>
                                    <i></i>
                                </div>
                            </li>
                            <li>
                                <img src="https://rin.linovel.net/cover/20190802/105549_0_0a96fdea7ba13ace6b61a3c7ab67ae23.jpg!min300jpg"
                                    alt="" />
                                <div>
                                    <h4>攻略宫城小姐的恋爱计划</h4>
                                    <p>我叫羽岛刹那，我现在慌的一批，是这样的，有个妹子刚才扇了我一巴掌，我却对她动心了，请问这是病么？
                                        什么？抖M，讨厌啦~我才不是抖M，只是碰巧喜欢那个妹子对我动粗的感觉~
                                        于是，我打算对那位妹子发起积极攻势，总而言之，先讨好她，让她娇羞，再来......
                                        咳咳咳！有点太猛烈了......
                                        不过，虽然我很喜欢宫城小姐啦，可总觉得宫城小姐有什么秘密瞒着我？
                            就在某一天，当我看到宫城小姐在我面前......</p>
                                    <i></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="fenglei">
                    <div className="w">
                        <div className="fenlei-top">
                            <ul>
                                <li>分类</li>
                                <li>校园</li>
                                <li>恋爱</li>
                                <li>幻想</li>
                                <li>战斗</li>
                                <li>搞笑</li>
                                <li>日常</li>
                                <li>后宫</li>
                            </ul>
                        </div>
                        <div className="tb">查看更多<img src="../src/images/more.png" alt="" /></div>
                        <ul className="fenlei-bottom">
                            <li>
                                <img src="https://rin.linovel.net/cover/105882_526e72b3035f566de9e94088a6b67de1.jpg!min300jpg"
                                    alt="" />
                                <div>
                                    <h4>月光的守護者</h4>
                                    <p>友情提示：絕對不要買加油站旁邊的房子！
                                        意外受到襲擊導致房子被惡火燒毀，無家可歸的青年，其真實身分竟是......
                                        「所以我才說不要買在加油站旁邊的房子嘛！」
                                        流傳已久的都市傳說——血腥瑪麗，真相竟是......
                                        「嚇人最好玩了！」
                                        捲入一場陰謀的兩人，註定無法在這個城市過上安穩的生活......
                                        「不要偷吃我豆腐啦…...」
                            就這樣，兩人的冒險在全身濕透的展開下開啟了序幕。</p>
                                    <span>二十四owo</span><span>8.7万字</span>
                                </div>
                            </li>
                            <li>
                                <img src="https://rin.linovel.net/cover/105882_526e72b3035f566de9e94088a6b67de1.jpg!min300jpg"
                                    alt="" />
                                <div>
                                    <h4>月光的守護者</h4>
                                    <p>友情提示：絕對不要買加油站旁邊的房子！
                                        意外受到襲擊導致房子被惡火燒毀，無家可歸的青年，其真實身分竟是......
                                        「所以我才說不要買在加油站旁邊的房子嘛！」
                                        流傳已久的都市傳說——血腥瑪麗，真相竟是......
                                        「嚇人最好玩了！」
                                        捲入一場陰謀的兩人，註定無法在這個城市過上安穩的生活......
                                        「不要偷吃我豆腐啦…...」
                            就這樣，兩人的冒險在全身濕透的展開下開啟了序幕。</p>
                                    <span>二十四owo</span><span>8.7万字</span>
                                </div>
                            </li>
                            <li>
                                <img src="https://rin.linovel.net/cover/105882_526e72b3035f566de9e94088a6b67de1.jpg!min300jpg"
                                    alt="" />
                                <div>
                                    <h4>月光的守護者</h4>
                                    <p>友情提示：絕對不要買加油站旁邊的房子！
                                        意外受到襲擊導致房子被惡火燒毀，無家可歸的青年，其真實身分竟是......
                                        「所以我才說不要買在加油站旁邊的房子嘛！」
                                        流傳已久的都市傳說——血腥瑪麗，真相竟是......
                                        「嚇人最好玩了！」
                                        捲入一場陰謀的兩人，註定無法在這個城市過上安穩的生活......
                                        「不要偷吃我豆腐啦…...」
                            就這樣，兩人的冒險在全身濕透的展開下開啟了序幕。</p>
                                    <span>二十四owo</span><span>8.7万字</span>
                                </div>
                            </li>
                            <li>
                                <img src="https://rin.linovel.net/cover/105882_526e72b3035f566de9e94088a6b67de1.jpg!min300jpg"
                                    alt="" />
                                <div>
                                    <h4>月光的守護者</h4>
                                    <p>友情提示：絕對不要買加油站旁邊的房子！
                                        意外受到襲擊導致房子被惡火燒毀，無家可歸的青年，其真實身分竟是......
                                        「所以我才說不要買在加油站旁邊的房子嘛！」
                                        流傳已久的都市傳說——血腥瑪麗，真相竟是......
                                        「嚇人最好玩了！」
                                        捲入一場陰謀的兩人，註定無法在這個城市過上安穩的生活......
                                        「不要偷吃我豆腐啦…...」
                            就這樣，兩人的冒險在全身濕透的展開下開啟了序幕。</p>
                                    <span>二十四owo</span><span>8.7万字</span>
                                </div>
                            </li>
                            <li>
                                <img src="https://rin.linovel.net/cover/105882_526e72b3035f566de9e94088a6b67de1.jpg!min300jpg"
                                    alt="" />
                                <div>
                                    <h4>月光的守護者</h4>
                                    <p>友情提示：絕對不要買加油站旁邊的房子！
                                        意外受到襲擊導致房子被惡火燒毀，無家可歸的青年，其真實身分竟是......
                                        「所以我才說不要買在加油站旁邊的房子嘛！」
                                        流傳已久的都市傳說——血腥瑪麗，真相竟是......
                                        「嚇人最好玩了！」
                                        捲入一場陰謀的兩人，註定無法在這個城市過上安穩的生活......
                                        「不要偷吃我豆腐啦…...」
                            就這樣，兩人的冒險在全身濕透的展開下開啟了序幕。</p>
                                    <span>二十四owo</span><span>8.7万字</span>
                                </div>
                            </li>
                            <li>
                                <img src="https://rin.linovel.net/cover/105882_526e72b3035f566de9e94088a6b67de1.jpg!min300jpg"
                                    alt="" />
                                <div>
                                    <h4>月光的守護者</h4>
                                    <p>友情提示：絕對不要買加油站旁邊的房子！
                                        意外受到襲擊導致房子被惡火燒毀，無家可歸的青年，其真實身分竟是......
                                        「所以我才說不要買在加油站旁邊的房子嘛！」
                                        流傳已久的都市傳說——血腥瑪麗，真相竟是......
                                        「嚇人最好玩了！」
                                        捲入一場陰謀的兩人，註定無法在這個城市過上安穩的生活......
                                        「不要偷吃我豆腐啦…...」
                            就這樣，兩人的冒險在全身濕透的展開下開啟了序幕。</p>
                                    <span>二十四owo</span><span>8.7万字</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}
Content = withRouter(Content)
export default Content