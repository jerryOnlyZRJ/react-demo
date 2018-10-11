# 搭建基于多页面的博客应用

本阶段，我们会在第一阶段的基础上，完成主体内容的丰富，打通列表页和详情页之间的逻辑，并实现详情页分页。从而巩固我们在本阶段课程中学习到的 react 组件生命周期、react 组件书写方式等知识点。

## 项目说明

本次项目需要数据接口，模拟数据接口已经在资料中给出，请大家自行下载 [my-react-blog-backend](http://git.imweb.io/reactlearn/my-react-blog-backend)，对本阶段而言，大家无需对后端数据接口服务进行改动，只需按照下面的命令启动即可，提供的后端接口服务中包含了一些模拟的博客文章数据。

```
cd my-react-blog-backend

npm install

npm start
```

之后，我们需要保证在后端接口已经启动的情况下进行前端开发，前端开发环境仍然使用我们第一阶段搭建的开发环境。

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
	    └── Main 主页面文件夹
```

同样的，我们主要内容都放在 src 文件夹下，一般情况下只改动 src 文件夹的内容就能够满足我们的开发需求。

相对第一次而言，我们的 src 文件夹下多了一些文件，主要是由于我们对项目进行了分组：

* 容器类组件，提供布局、排版等功能，负责编排页面其他展示类组件。
* 展示类组件，负责某一块内容的具体展示，根据输入数据进行展示。
* 页面组件，负责整个页面的编排和对外暴露。


## 具体要求

本阶段要求大家完成以下几个任务：

### 1. 运行项目并对项目样式进行适当丰富

按照之前已经给出的前端启动方式和后端启动方式，先启动博客后端数据服务，再启动前端，并且可以通过`http://127.0.0.1:8081/`正确访问到页面，无错误提示弹出。

大家可以自行对博客用户名、slogan、footer 等信息内容进行修改，并且目前样式较为简单，也可以对样式进行修改。

### 2. 更改文章的排序方式

目前文章的排序方式较为混乱，这方面内容交由大家自行开发，大家可以增加按照时间进行排序的功能，并且增加置顶的博客文章（提示：可以通过标题筛选来置顶）。

### 3. 添加自己的博客文章

如果大家想添加自己的博客文章，只需要在 `my-react-blog-backend/blog` 文件夹下按照已有博客的样式（重点是头部样式，否则相关元信息可能无法展示），添加自己的博客，相关资源文件放在 `my-react-blog-backend/blog/imgs ` 文件夹下，并采用 markdown 的写法进行相对路径引入即可。

添加完文章后重启后端服务，刷新页面即可查看自己添加的文章。

## 总结

通过本阶段的项目实践，我们的博客已经初步成型了，已经具备了添加博客、访问博客列表、访问文章详情页、博客列表分页展示等常规功能，在接下来的几个阶段中，我们会进一步完善整个系统的功能丰富度，并进行适当性能优化。

## 注意

我们本次的三个具体要求均会作为评判标准，因此会涉及到客户端代码和服务端代码。  
大家提交项目的时候，可以将客户端和服务端合并到一个项目中，删除各自的 .git 文件（这是为了防止子目录代码无法提交的最便捷的方式），进行统一管理和提交，例如

```
├── client 客户端文件
└── server 服务端文件
```