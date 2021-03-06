import React from 'react'
const queryString = require('query-string');
import "./ArticleContent.less"
import axios from "axios/index";
import {preURL, publicURL} from "../config";
import moment from "moment/moment";
const ReactMarkdown = require('react-markdown')

export default class ArticleContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            post:{}
        }
    }

    componentDidMount(){
        const query = queryString.parse(location.search);
        console.log('pathName:', query);

        axios.get(`${preURL}/post?pathName=${query.pathName}`).then((response) => {
            console.log(response.data)
            this.setState({
                post:response.data
            })
        },(error) => {
            alert('拉取数据失败，请配置后端博客服务！')
        })
    }

    render(){
        return(
            <div className={'post-container'}>

                <div className={'post-title'}>
                    {this.state.post.title}
                </div>

                <div className={'post-meta'}>

                    <span className={'attr'}>
                        发布于：
                        {moment(this.state.post.date).format('YYYY-MM-DD hh:mm:ss')}
                    </span>

                    <span className={'attr'}>
                        标签：/
                        {(this.state.post.tags || []).map((item, index) =>
                            " " + item + " /"
                        )}
                    </span>

                    <span className={'attr'}>
                        访问：

                    </span>

                </div>


                <div className={'post-content'}>
                    <ReactMarkdown source={this.state.post._content} />
                </div>

            </div>
        )
    }
}