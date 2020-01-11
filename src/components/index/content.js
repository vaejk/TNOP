import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
class Content extends Component {
    constructor() {
        super()
        this.state = {
            links: [
                { imgs: require('../../images/book_icon.png'), name: '分类', path: '/pagelist' },
                { imgs: require('../../images/calendar_icon.png'), name: '活动', path: '/activity' },
                { imgs: require('../../images/trophy_icon.png'), name: '新人赏', path: '/new' },
                { imgs: require('../../images/pen_icon.png'), name: '签约', path: '/sign' }
            ],
            api: [],
            apiname: [{ name: '全部', id: 1 }, { name: '校园', id: 2 }, { name: '恋爱', id: 3 }, { name: '幻想', id: 4 }, { name: '战斗', id: 5 }, { name: '搞笑', id: 6 }, { name: '日常', id: 7 }, { name: '后宫', id: 8 }],
            api2: [{ id: 1 }],
            num: '全部'
        }
        this.links = this.likns.bind(this)
        this.lisits = this.lisits.bind(this)
    }
    likns(path) {
        this.props.history.push(path)
    }
    componentDidMount() {
        axios.get('http://192.168.43.3:8100/middle')
            .then((res) => {
                this.setState({
                    api: res.data.data
                })
            })
            .catch((err) => console.log(err));
        axios.get('http://192.168.43.3:8100/a?id=1')
            .then((res) => {
                this.setState({
                    api2: res.data.item.arr
                })
            })
            .catch((err) => console.log(err));

    }
    lisits(obj) {
        let { id, name } = obj
        axios.get('http://192.168.43.3:8100/a?id=' + id)
            .then((res) => {
                this.setState({
                    api2: res.data.item.arr,
                    num: name
                })
            })
            .catch((err) => console.log(err));
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
                            <h3>编辑推荐</h3><span>2019第25周勤更推荐</span><a href="###">更多<img src="../../images/more.png" alt="" /></a>
                        </div>
                        <ul className="list">
                            {this.state.api.map(item => {
                                return <li key={item.id}>
                                    <img src={item.images}
                                        alt="" />
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>{item.jianjie}</p>
                                        <i></i>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="fenglei">
                    <div className="w">
                        <div className="fenlei-top">
                            <ul>
                                {this.state.apiname.map(item => {
                                    return <li key={item.name} onClick={this.lisits.bind(null, { id: item.id, name: item.name })} className={this.state.num === item.name ? 'gaoliang' : null}>{item.name}</li>
                                })}
                            </ul>
                        </div>
                        <div className="tb">查看更多<img src="../src/images/more.png" alt="" /></div>
                        <ul className="fenlei-bottom">
                            {this.state.api2.map(item => {
                                return <li key={item.id}>
                                    <img src={item.images}
                                        alt="" />
                                    <div>
                                        <h4>{item.bookname}</h4>
                                        <p>{item.introduce}</p>
                                        <p className={'p2'}>{item.Theauthor}</p>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}
Content = withRouter(Content)
export default Content