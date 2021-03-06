import React from 'react'
import axios from 'axios'
import { preURL, publicURL } from "../config";

import "./FeedbackForm.less"
import "./ArticleContent.less"

export default class FeedbackForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                nickname: "",
                mail: "",
                title: "",
                detail: ""
            }
        }
    }

    componentDidMount() {
    }

    setForm(obj = {}) {
        let form = this.state.form;
        let newForm = Object.assign({}, form, obj);
        this.setState({
            form: newForm
        })
    }

    submitFeedback() {
        console.log(this.state.form);

        function htmlEncode(str) {
            return String(str)
                .replace(/&/g, '&amp;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
        }

        const zhForm = {
            nickname: "昵称",
            mail: "邮箱",
            title: "标题",
            detail: "详情"
        }

        const emptyKey = Object.keys(this.state.form).filter((key) => !this.state.form[key])
        if (emptyKey.length !== 0) {
            alert(`${zhForm[emptyKey[0]]}不能为空`);
            return;
        }

        const mailRegExp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        if (!mailRegExp.test(this.state.form['mail'])) {
            alert('请输入正确邮箱')
            return
        }
        //编码XSS
        Object.keys(this.state.form).map(key => {
            this.state.form[key] = htmlEncode(this.state.form[key])
        })

        axios.post(preURL + '/mail', {
            info: this.state.form
        })
            .then((response) => {
                console.log(response);
                if (response.data.success) {
                    this.setState({
                        form: {
                            nickname: "",
                            mail: "",
                            title: "",
                            detail: ""
                        }
                    })
                    if (response.data.success)
                        alert('提交留言成功');
                    else
                        alert('提交留言失败，服务器错误');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className={'post-container'}>

                <div className={'post-title'}>
                    给我留言
                </div>

                <div className={'form-item'}>
                    <label htmlFor="name">昵称：</label>
                    <input id={'name'} autoComplete="off" value={this.state.form.nickname} onChange={e => {
                        this.setForm({
                            nickname: e.target.value
                        })
                    }} />
                </div>

                <div className={'form-item'}>
                    <label htmlFor="mail">邮箱：</label>
                    <input id={'mail'} autoComplete="off" value={this.state.form.mail} onChange={e => {
                        this.setForm({
                            mail: e.target.value
                        })
                    }} />
                </div>

                <div className={'form-item'}>
                    <label htmlFor="title">标题：</label>
                    <input id={'title'} autoComplete="off" value={this.state.form.title} onChange={e => {
                        this.setForm({
                            title: e.target.value
                        })
                    }} />
                </div>

                <div className={'form-item'}>
                    <label htmlFor="detail">详情：</label>
                    <textarea id={'detail'} autoComplete="off" value={this.state.form.detail} onChange={e => {
                        this.setForm({
                            detail: e.target.value
                        })
                    }} />
                </div>

                <div className={'form-item'}>
                    <button onClick={() => { this.submitFeedback() }}>提交留言</button>
                </div>

            </div>
        )
    }
}