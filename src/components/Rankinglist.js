import React, { Component } from 'react'
import Head from './Head'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
class Rankinglist extends Component {
    constructor() {
        super()
        this.state = {
            actins: '周排行',
            actins2: "重推榜",
            navs: [{ name: '周排行' }, { name: '月排行' }, { name: '新生排行' }],
            nav2: [{ name: '重磅榜' }, { name: '佳作榜' }, { name: '月票榜' }, { name: '轻币榜' }, { name: '墨水榜' }, { name: '应援榜' }],
            api: [{ arr: [] }],
            num: 0
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
        let { name, index } = xc
        this.setState({
            actins2: name,
            num: index
        })
    }
    componentDidMount() {
        axios.get('http://192.168.43.3:8100/nei')
            .then((res) => {
                this.setState({
                    api: res.data
                })
            })
    }
    render() {
        return (
            <>
                <Head></Head>
                <ul className="fentou">
                    {this.state.navs.map(item => {
                        return <li key={item.name} className={this.state.actins === item.name ? 'activity' : null} onClick={this.actin.bind(null, item.name)}>
                            <a href="###">{item.name}</a>
                            <i></i>
                        </li>
                    })}
                </ul>
                <div className="content">
                    <ul className="cont-left">
                        {this.state.api.map((item, index) => {
                            return <li key={index} className={this.state.actins2 === item.title ? 'checked' : null} onClick={this.actin2.bind(null, { name: item.title, index })}>
                                {item.title}
                            </li>
                        })}
                    </ul>
                    <ul className="cont-right">
                        {this.state.api[this.state.num].arr.map((item, index) => {
                            return <li key={index}>
                                <img src={item.images} alt="" />
                                <div>
                                    <p><span>{item.title}</span><span className="greng">{item.rank_number}</span></p>
                                    <p>{item.author}</p>
                                    <p>{item.works_info}</p>
                                    <p><span>{item.works_tags}</span><span>{item.works_tags1}</span><span>{item.works_hot}</span></p>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            </>
        )
    }
}
Rankinglist = withRouter(Rankinglist)
export default Rankinglist;