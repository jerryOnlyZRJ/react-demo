# 为博客增加反馈表单页面

本阶段，我们会为自己的博客增加一个反馈界面，访问者可以通过反馈界面留言，并且通过后端服务，留言会直接以邮件的形式发送给我们。  
通过本阶段项目的实际操作，可以增加我们对课程所学内容的表单部分的理解。

## 项目说明

在进行本阶段项目之前，我们首先需要在我们的 [my-react-blog-backend](http://git.imweb.io/reactlearn/my-react-blog-backend) 后端服务配置我们的邮箱，这样我们的留言邮件才会正确送达你的邮箱里：

配置邮箱需要在 `my-react-blog-backend` 的 `config.js` 中配置相应的 mail 字段。

例如您的邮箱是 "helloworld@qq.com"，则需要如下配置：

```
if(process.env.NODE_ENV  === "production"){ // 生产环境
    let port = 9010;
    module.exports = {
        port: port,
        host: 'http://localhost:' + port,
        mail: 'helloworld@qq.com'
    };
} else { // 非生产环境
    let port = 9010;
    module.exports = {
        port: port,
        host: 'http://localhost:' + port,
        mail: 'helloworld@qq.com'
    };
}
```

配置好邮箱之后，可以按照之前的方式启动后端服务。

### 目录结构

```
├── .babelrc babel配置文件
├── webpack.config.js webpack配置文件
├── index.html html模版文件
├── package.json  
└── src
	├── components 展示类组件
	├── config 配置文件
	├── container 容器类组件
	├── resource 资源文件夹
	├── style 样式文件
	└── pages 网站主入口文件
	    ├── Article 文章页面文件夹
	    ├── Feedback 反馈页面文件夹
	    └── Main 主页面文件夹
```

相对于上一阶段，我们本次的目录结构变更并不多，主要是增加了一个 `Feedback` 反馈表单页面。

## 具体要求

本阶段要求大家完成以下几个任务：

### 1. 配置邮件并成功尝试留言

首先需要按照上面说的规则配置个人邮箱（具体邮箱无限制，常用邮箱均可），并且在启动后端和前端开发环境后，进入`反馈`页面，并留言提交，这个时候，应该会有提醒留言成功的弹框出现，并且相应邮箱能够收到留言。

### 2. 添加留言过滤机制与字段验证机制

目前前端对留言几乎没有任何形式的验证，这实际上是有风险的，并且可能会使我们的邮箱增加大量无效留言，为了防止这类情况的发生，我们需要在前端增加验证机制，比如可以对邮箱进行验证、对详细信息进行字数限制、昵称和标题不能为空等限制。

这部分内容由大家使用之前所学习的内容，自行添加。

## 总结

本阶段我们主要为自己的博客增加了留言功能，但实际上这部分内容可扩展的非常多，比如将留言内容在后端进行存储、在前端展示一部分留言内容等，但由于这方面的内容涉及领域较多，并且不是本次学习的重点，所以只是希望如果有同学有兴趣，可以进行进一步的探索，也可以将个人成果分享至我们的课程官方。