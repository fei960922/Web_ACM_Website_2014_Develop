---
layout:	documentation
title: Documentation
title_full: 文档<br/>Documentation
pic: btop_documentation.jpg
---

<h1 id = "introduction">引言</h1>

<h2 id = "target">目标</h2>

上海交通大学ACM班2013级编程综合实践课程网页设计小组在课程中重做ACM班班级主页，新的班级主页代号为ACM14。该班级主页的目标是:

* 改造现有的ACM班班级主页，整合当前较为杂乱的分类，处理样式与内容陈旧、布局不合理等现象。以此提升ACM班对外的宣传能力。
* 建立一个方便且功能准确的平台。使得浏览网站的人更容易获取有效信息，使用课程中心进行课程管理时更加便捷，并突出ACM班新闻宣传的及时性和分类准确性。

而该文档的目标则是明确网页设计的“继承”性。既丰富网页设计思路，为后续的改造者做好铺垫；又提供一些必要的维护应用软件，语言的信息以供学习。

<h2 id = "frame">风格与理念</h2>
	
记录整个设计理念，不仅仅是想让读者去理解设计者的设计理念，更是想让修改者选择去跟随这种设计理念，只有认识到这种设计理念的优点，才能对它有所认同，才能更好的完善网页的制作与设计。

###求同存异

依据上一次旧版网页，制作新版网页。我们在这里确立了求同存异的核心设计理念。

所谓求同，指的是公共主页之间要有相同点，这种相同点不仅仅指的是布局的一种相似，更是在整体思路，外观设计上的相似。但是一定要做到避免过多的重复造成的审美疲劳等现象的发生。

所谓存异，指的是各个不同的布局，各个不同的子栏目，应该有自己的鲜明的特点，只有保存并将其展示出来，才能更好展现网站的美感。这是一种创新，更是一种融汇。

求同存异是设计的基本设计理念，也是众多门户网站的常用设计理念。

###探索精神
	
我们需要贯彻原ACM班主页的内容理念。内容选材以原主页的内容为主，但必须进行有效地整合和提炼，必要时进行新增书写。在书写时，还原ACM班的本质精神。突出ACM班的科学性和创新性。

而对于整体框架的设计，相关图片和插件的选择，兼顾整体性与区域性相关联的美感，这些重要性都是不言而喻的，而实质上，这些皆与探索精神有关。我们号召维护者们大胆探索，努力创新，创造出更有艺术性，更具有时代特征和ACM班特征的网站。

<h1 id = "basic">基础工具</h1>

网站是由诸多的相互关联的网页搭建而成的。本章将简单的介绍<a href = "#markdown">Markdown</a>、<a href = "#jekyll">Jekyll</a>等在维护中必要的网页工具,而网页设计的基础<a href = "#html">Html</a>、<a href = "#CSS">CSS</a>等工具将给与链接，不做重点介绍。

值得强调的是，介绍方式虽简，但绝不浅尝辄止。了解超文本标记语言和这些工具之间的关系，既可以使得整体维护时遭遇的错误信息减少，也能更清楚地了解整体构架，防止分类错误等不优雅的事件发生。

值得注意的是，在后文对整体的网站构建进行介绍的章节，会提及相关章节应该如何去修改，新增或完善相关网页。这些应用将大量使用这些基础工具，我们强烈建议认真学习以下内容。

<h2 id = "html_and_markdown">Html 与 Markdown</h2>

<h3 id = "html">HTML</h3>
在添加网页维护网页前，首先是必须要了解网页。大多数网页是通过使用超文本标记语言(HTML)完成的，ACM14也不例外。

HTML语言的结构包括“Head”和“Body”两个部分。“Head”提供网页的信息，而“Body”提供网页的具体内容。如果只需要添加新闻等文类的话，只需要提供网页的具体内容(即“Body”内的信息即可)。

在这里并不详述HTML的具体的语法细节了。如果想了解具体的语言细节，请查询<a href = "http://www.w3school.com.cn/html/">HTML教程</a>。

肯定的，在后文也会提及部分HTML的语法以方便维护者的灵活应用。

<h3 id = "markdown">Markdown</h3>

Markdown是一种语法，一种适用于网络的书写语言。它的语法是通过一些符号组成的，这些符号经过精挑细选，其作用一目了然。

一份使用Markdown格式撰写的文件是可以以纯文本发布的。换句话说，不了解Markdown语言的人也能读懂多数代码。Markdown语言是一种可视化的语言，它“易读易写”。

Markdown的语法只能对应实现小部分的HTML标记。所以，Markdown的生成器同时也能编译HTML标签，且不会出错。

值得注意的是，在HTML区块标签间的Markdown格式语法将不会被处理。例如在HTML区块内使用Markdown样式的斜体("* *")是会没有效果的。

下文将简要介绍在进行网页维护时所需要的语法。

<h3 id = "kuai">区块元素</h3>

####段落与换行

一个 Markdown 段落是由一个或多个连续的文本行组成，它的前后要有一个以上的空行（空行的定义是显示上看起来像是空的，便会被视为空行。比方说，若某一行只包含空格和制表符，则该行也会被视为空行）。普通段落不该用空格或制表符来缩进。

"由一个或多个连续的文本行组成"这句话其实暗示了Markdown允许段落内的强迫换行（插入换行符），这个特性和其他大部分的 text-to-HTML 格式不一样（包括 Movable Type 的"Convert Line Breaks"选项），其它的格式会把每个换行符都转成 <code>&lt;br /&gt;</code> 标签。

####标题

Markdown 支持两种标题的语法，类 <a href="http://docutils.sourceforge.net/mirror/setext.html">Setext</a> 和类 <a href="http://www.aaronsw.com/2002/atx/">atx</a> 形式。

其中Setext形式是用底线的形式，例如：
	
	This is an H1
	=============

	This is an H2
	-------------

在这里利用<code>=</code>（最高阶标题H1）与<code>-</code>（第二阶标题H2）以进行的实现

而类Atx形式则是在行首插入1到6个<code>#</code>，对应H1到H6的六个阶。例如：
	
	# 这是H1
	
	### 这是H3
	
	####### 这是H6

而为了使得文本更加美观，也可以在行尾叫上任意个<code>#</code>。这达到的是一种可选择性的“闭合”类Atx形式，例如：

	# 这是H1 #
	
	## 这是H2 ###
	
	### 这是H3 ######

注意，行尾可以加入任意个<code>#</code>，和开头的数量并不一定要相同。

####区块引用Blockquotes

Markdown 标记区块引用是使用类似 email 中用<code>></code>的引用方式。如果熟悉在 email 信件中的引言部分，就可以知道在 Markdown 文件中建立一个区块引用，类似于先断好行，然后在每行的最前面加上<code>></code>。例如：

	>I used to rule the world,
	>Seas would rise when I gave the word. 
	>
	>Now in the morning I sleep alone,
	>Sweep the streets I used to own.

而实际上，只在整个段落的第一行最前面加上<code>></code>也是被允许的。例如：

	>I used to rule the world,
	Seas would rise when I gave the word. 
	
	>Now in the morning I sleep alone,
	Sweep the streets I used to own.

值得注意的是，区块引用是可以嵌套的，只要根据层次加上不同数量的<code>></code>即可。例如：

	>This is the first level of quoting
	> 
	> > This is the second blockquote
	> 
	> Back to the first level

####分隔线

可以通过在一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他代码。这也可以在星号或是减号中间插入空格。下面每种写法都可以建立分隔线：

	* * *
	
	***
	
	*****

	- - -

	-------------------------------------

####列表

#####无序列表

无序列表使用星号、加号或是减号作为列表标记：

	* Red
	* Green
	* Blue

等同于：

	+ Red
	+ Green
	+ Blue

等同于：
	
	- Red
	- Green
	- Blue

#####有序列表

有序列表则使用数字+英文句点，例如：	

	1. Red
	2. Green
	3. Blue

&emsp;&emsp;值得注意的是，列表标记使用的数字并不会影响输出的HTML结果，并且列表标记也可以类似区块引用一样进行嵌套，这里就不一一列举了。

<h3 id = "duan">区段元素</h3>

####链接

链接分为行内式和参考式。

行内式指被链接的文字使用<code>[]</code>包起来，在方括号后面马上接着括号并插入网址链接即可。例如：
	
	This is [an example](http://example.com/ "Title") inline link.

	[This link](http://example.net/) has no title attribute.

而参考式是在链接文字的括号后面再接上另一个方括号，第二个方括号里面填入辨识链接的标记。并在文件的任意处，定义这些链接内容。例如：

	This is [an example][id] reference-style link.
	
	[id]: http://example.com/  "Optional Title Here"

链接内容定义的格式为：

* 方括号，内部为定义链接文字
* 冒号
* 一个以上的空格或制表符(TAB)
* 链接网址
* 选择性的接着title内容，可以用单引号、双引号或者圆括号包着

除此之外，还有一种方便的应用是自动连接。一般网址的链接文字和链接地址相同时，只需要把这个地址用<code><></code>符号包起来即可。例如：
	
	<http://acm.sjtu.edu.cn>

值得一提的是，HTML标签所用的<code>&lt;a&gt;</code>链接标签也十分的方便使用。制作ACM14时大量应用的是<code>&lt;a&gt;</code>标签。

####强调

Markdown使用星号<code>\*</code>和<code>\_</code>强调字词的符号，被<code>\*</code>或<code>\_</code>包围的字词会被转成斜体(<code>&lt;em&gt;</code>)，用<code>\**</code>或<code>\__</code>包起来的话，则会被转成粗体(<code>&lt;strong&gt;</code>)，例如：

	*single asterisks*

	_single underscores_

	**double asterisks**

	__double underscores__

请注意，如果<code>\*</code>和<code>\_</code>两边都有空格或制表符的话，它们会被当做普通的符号。

####图片

图片插入的语法类似链接插入的语法。分为行内式和参考式两种。

与链接插入不同的只是它们前面多加了个惊叹号<code>\!</code>。例如：

	行内式：
	![Alt test](/img.jpg)

	参考式：
	![Alt test][id]
	[id]: url/to/image "XXX"

然而实际上，图片的插入目前还没有到自适应长宽这样如此智能的地步。但是由于Markdown是支持HTML标签的。我们可以通过使用<code>&lt;img&gt;</code>来实现。

<h3 id = "other">其它</h3>

####转义字符

Markdown和HTML作为语言本身，是有一定的保留字符的。若试图将这些保留字符作为单纯的字符输出，系统还没有智能到如此的程度。常用的方式是使用转义字符。

例如文本里有<code><</code>字符，而这个字符被HTML语法限制着，我们可输出它的转义字符编号(&lt ;)即可。

这里提供一个在线转义字符表连接：<http://tool.oschina.net/commons?type=2>

####反斜杠

而实际上，Mardown可以利用反斜杠来插入一些普通的符号。例如：如果你想要用星号加在文字旁边的方式来做出强调效果（但不用<code>&lt;em&gt;</code>标签），你可以在星号的前面加上反斜杠：
	
	\*Interesting\*

####参考

以下是Markdown语法说明的参考资料，可以选择性的阅读:

1. <a href = "http://zh.wikipedia.org/wiki/Markdown">Markdown Wiki</a>
2. <a href = "http://wowubuntu.com/markdown/">Markdown 语法说明</a>
3. <a href = "http://jianshu.io/p/0752bd0418df">Markdown 语法纪要</a>
4. <a href = "http://jianshu.io/p/3bd994e702a7">Markdown 写作规范参考</a>



<h2 id = "css_and_js">CSS 与 JavaScript</h2>

级联样式表(CSS)是一种用来表现HTML（标准通用标记语言的一个应用）或XML（标准通用标记语言的一个子集）等文件样式的计算机语言；而JavaScript是一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。

网页通过使用这两种语言，实现提升网页工作者的效率，增强网页交互性等功能。读者请通过阅读网站<http://www.w3school.com.cn/index.html>的内容以掌握此工具。

<h2 id = "jekyll">Jekyll</h2>

这里主要讲解的是Jekyll。Jekyll是一个简单的静态Blog生成工具，不需要数据库支持。但是可以配合第三方服务，例如discuz达到良好的效果。ACM14网站中大量的使用了Jekyll。

<h3 id = "abstract">概述</h3>

许多人误以为Jekyll是一种语言，与html、JS类似，但实际上不是的。它实际上是一个简单的博客形态的静态站点生产工具。最关键的是，它是开源的。

举一个简单的例子，Jekyll是一台机器，将你用Markdown、Textile、Html写的文章或代码整合在一起，形成一个完整的网站。

Jekyll的主要思路是利用一些特定的语法，使得许多网页可以共用网页格式（css，js等）。举一个实际的应用：一个新闻中心的新闻大多是共用同一个格式的；所以将新闻的格式固定下来，可以有效起到减小工作量的作用。

<h3 id = "install">本地Jekyll的安装</h3>

Jekyll没有独立的安装软件，如果要安装Jekyll，主要需要依靠devkit和ruby。

####Windows环境下安装Jekyll

1. <b>安装ruby</b><br/>
	ruby是一门语言，采用liquid语法。我们将在官网上下载ruby。<br/>
   ruby官网：<http://rubyinstaller.org/downloads/> <br>
   打开官网后，选择下载ruby2.0.0-p481即可。<br/>
   下载完成后，直接运行相应文件装在任意目录下即可。<br/>

2. <b>安装ruby devkit</b><br/>
   devkit全称为rubyinstaller development kit，直译过来是ruby安装的扩展包，jekyll是需要使用这个扩展包的。<br/>
   双击右边的下载地址进行下载：<a href = "{{site.baseurl}}/downloads/DevKit-tdm-32-4.5.2-20111229-1559-sfx.exe">DevKit-tdm-32-4.5.2-20111229-1559-sfx.exe</a>
   <br/>这是一个可运行文件格式的压缩包，把它解压到任意的位置均可。

3. <b>安装准备工作</b><br/>
   进入DevKit目录下(G:/DevKit)，在此目录下运行cmd命令：<code>ruby dk.rb init</code>将生成config.xml，此时将显示对应的ruby的路径。<br/>
   然后在同一目录下运行以下命令<code>ruby dk.rb install</code>将提示出是否成功生成的信息。

4. <b>安装</b><br/>
   最后，在Devkit目录下直接输入cmd命令：<code>gem install jekyll</code><br/>
   安装需要进行一定长的时间，请耐心等待。

安装完成后，Jekyll在Windows下的基本功能已经可以使用了。如果在安装中出现了问题，请查询<a  href = "#FAQ">F.A.Q</a>。

####Linux环境下安装Jekyll

如果Linux下没有安装ruby，采用下面的命令安装ruby。
	
	Arch Linux：	
	pacman -S ruby
	gem update --system
	Ubuntu：
	sudo apt-cache search ruby
	sudo apt-get install ruby1.9.3-full
	Fedora：
	yum install ruby

安装之后，运行命令<code>gem install jekyll</code>即可完成Jekyll的安装。

####本地Jekyll的运行

Jekyll的运行非常简单：在已搭建的本地静态网站的根目录下，输入cmd命令：<code>jekyll serve</code>或者<code>jekyll server --watch</code>即可运行。前者只会建立当前的网站页面，后者则可以实时更新。这两者各有利弊，在维护时慎重选择。

在运行中，网页构建者可以在<code>localhost:4000</code>这个本地服务器上看网页的效果。

<h3 id = "run">Jekyll运行原理</h3>

Jekyll的核心其实是一个文本转换引擎。通过Jekyll语言将各不同的标记语言，排版布局等整合起来。只需要纯文本编辑，最终生成静态成品页面。

Jekyll用Ruby实现，这就是安装Jekyll必须要安装Ruby的原因。

<h3 id = "directory_specification">Jekyll的目录规范</h3>

如果要在目录下搭建本地静态网站，那么在该目录下必须要含有如下的文件和文件夹。

以下是详细的存储树形图：

	ACM14(建立Jekyll的文件夹)
	├── index.html(首页，搭建的本地网站的主页)
	├── _layouts(文件夹，存放必要的模板)
	│   ├── camp.html
	│   ├── news.html
	│   ├── ...
	│   └── travel.html
	├── _includes(文件夹，存放小段的html以方便在模板或文章中使用)
	│   ├── navigation.html
	│   ├── ...
	│   └── footer.html
	├── _posts(文件夹，存放该网站收录的文章)
    │	├── 2014-07-14-LJJ1.md
    │	├── ...
    │	└── 2014-07-14-LJJ2.html
	└──_config.yml(配置设定文件。对整个网站的几个属性值作一个规定，比如是否加上代码高亮，markdown的编译环境，页面存放内容限制等。)

<h3 id = "written_specification">Jekyll的编写规范（Jekyll文档）</h3>

关于Jekyll的一些编写规范，最好的方案是查看官方<a href = "http://jekyllcn.com/">Jekyll文档</a>。

那里包含了大量需要了解的内容。在这里，并不进行完全的照搬。只是在下文中列举几个要点。

####命令
jekyll的命令包括了上文介绍的两种命令：<code>jekyll serve</code>和<code>jekyll server --watch</code>。但这两个命令只是所有jekyll命令中的冰山一角，更多的命令请在文档中查找。

值得注意的是，主要有应用的是有关<code>build</code>、<code>serve</code>的命令。

####配置
对于_config.yml的配置。有以下几个要点：

> 1. 不能在_config.yml中使用tab制表符，这会造成解析失败。
> 2. 有关site source和site destination。这两个命令十分形象，即Jekyll从哪读入文件以及生成好的网站放在哪个目录下。推荐使用默认设置，默认设置在当前根目录下读入，并在当前根目录下面生成一个_site的文件夹，放置生成好的网站。
> 3. exclude：xxx。这个主要用来告诉jekyll哪些文件是不需要转换的。将不需要或者不想要转换的文件放在xxx位置即可。
> 4. encoding：xxx。这个配置会将所有文章和html都被转成xxx格式，比如utf-8、gbk等格式。
> 5. port：4000。这用来设端口的，默认端口为4000。
> 6. markdown选项推荐使用的是<code>kramdown</code>

####头信息
头信息，全称是yaml头信息。这些信息包含在两行虚线之间。头信息是在使用Jekyll样式时的必要使用信息。

jekyll在扫描html、md等文件时，会根据文章顶端的的头信息进行编译。例如：

	---
	layout:	documentation
	title: Documentation
	title_full: 文档<br/>Documentation
	pic: btop_documentation.jpg
	---

虚线之间包含的变量可以有很多，甚至可以是维护者进行自定义的。下面将介绍几个常用变量。（值得注意的是，如果使用utf-8格式，不要出现BOM头字符）

> 1. layout: xxx。定义样式。xxx一定要是_layout文件夹里的html文件名，而且不用.html后缀。
> 2. title: xxx。定义page或post的标题。
> 3. permalink: xxx。用来指定这篇page或post的url。方便以后使用超链接时进行链接。
> 4. category: xxx。有时候并不需要指定一个完整的路径，那么写category就足够了。category本质上是给文章指定一个类别。jekyll会在_site文件夹下生成一个xxx的文件夹，这时转换好的文章就会放在其中。
> 5. <b>自定义变量</b>。jekyll提供的这个功能是十分有用的。举例来说，比如我现在写一个课程中心，课程包含的信息有名称，老师，上课时间等等，但这些肯定不会是保留属性。那么我们可以自己起。比如cirriculum_name: xxx，teacher: xxx, class hour: xxx，等等

在样式html中直接调用就可以直接使用这些变量了（这一点有点像C++中的<code>#define</code>）。调用方式是<code>{{page.property}}</code>，如果是<code>_post</code>目录内的post文件，那么就要用<code>{{post.property}}</code>。

值得注意的是，头信息可以是空的，jekyll仍然会处理。

####常用变量

#####全局变量
<b>`site：`</b>来自`_config.yml`文件，全站范文的信息和配置

<b>`page：`</b>页面的专属信息+yaml头信息。包含上文所述的头信息变量

<b>`content：`</b>被 layout 包裹的那些 Post 或者 Page 渲染生成的内容，但是又没定义在 Post 或者 Page 文件中的变量。

<b>`paginator：`</b>这是一个分页变量。若新闻首页只想放10篇，剩下的会有最下面的1、2、3、4……页码，那就要用到这个变量。在`_config.yml`中设置`paginate: 10;`就可以使用这个变量了。（不一定是10，视个人爱好或具体要求决定）

#####全站变量（site）

这里主要是site下面的一些常用变量。

其他还有一些，可以在<http://jekyllcn.com/docs/variables/>查询。

#####页面变量（page）
这里主要是page下面的一些常用变量。

其他还有一些，可以在<http://jekyllcn.com/docs/variables/>查询。

#####分页器（paginator）
这里主要是paginator下面的一些常用变量。


####Jekyll路径整合

值得注意的是，在本地运行jekyll与在网络上运行时，有不同的路径。例如，当前网页上有一个照片：<code>me.jpg</code>。本地的设置路径是“<code>/images/me.jpg</code>”；而在网络上运行的时候，地址应改变为“<code>username.github.io/images/me</code>”。

所以需要在<code>config.yml</code>中加入一个属性：<code>baseurl</code>。

本地运行时，设置为：

	baseurl: "";

上传到网站后，将命令改为:

	baseurl: "username.github.io/my_websites"
或

	baseurl: "username.github.io"

并且在路径书写时，加入：<code>{{site.baseurl}}</code>，比如上文中出现的例子，地址应书写为：<code>"{{site.baseurl}}/images/me.jpg"</code>

类似的，在有关超链接、css、js的引用、图片的引用时都要注意相应的路径问题。

<h2 id = "bootstrap">BootStrap</h2>

Bootstrap是最受欢迎的HTML、CSS和JS框架，用于开发响应式布局、移动设备优先的WEB项目。官方网站：<http://www.bootcss.com/>和官方文档：<http://v3.bootcss.com/getting-started/>描述的非常详细，这里并不赘述。

<h1 id = "build">网站构建</h1>

本章将主要介绍网页构建上的各个框架。包括整体框架构建，各中心，各主页框架构建等。本章的目的是让读者明确网页各处设计缘由以及各段的源代码的意义。

<h2 id = "framework">结构框架</h2>

网站的首页是位于根目录下的<code>index.html</code>文件。随后，根据导航栏的每条，进行扩展。以下是扩展树形图：

	ACM14(班级网站)
	├── index.html(首页)
	├── intros(班级介绍)
	│   ├── intro_index.html
	│   ├── class.html
	│   ├── teachers.html
	│   ├── students.html
	│   │    ├── ...
	│   │ 	 └─students_2013.html
	│   └── honor.html
	├── enroll.html(招生信息)
	├── lessons(课程中心)
	│   ├── lesson_index.html
	│   ├── lesson_1.html
	│   ├── lesson_2.html
	│   ├── ...
	│   └── lesson_X.html
	├── academics(学术中心)
    │	├── academic_1.html
    │	├── academic_2.html
    │	├── academic_3.html
    │	├── academic_4.html
    │	└── academic_5
	│		├── 1.html
	│		├── 2.html
	│		├── ...
    │		└── X.html
	├── activity.html(活动中心)
	├── news.html(新闻中心)
	└──_posts(各新闻目录)

以下将逐次介绍各个结构。

<h2 id = "index">首页</h2>

首页分为五个<a href = "http://www.w3school.com.cn/html/html_blocks.asp">HTML 块</a>。

第一块命名为<code>index\_1</code>。背景是第一视角背景图片<code>index\_1.jpg</code>。通过插入背景为空的书法图片<code>hand\_writing.jpg</code>并设置它的<code>margin</code>和<code>width</code>的值以控制图片的位置。

第二块命名为<code>index\_2</code>。背景是纯色颜色<code>#DDDDDD</code>。可以在CSS里面的<code>background-color</code>选项做调整。正文是"欢迎来到ACM班"，同时它也被作为第三块的标题。

第三块命名为<code>index\_3</code>。是对ACM班的简介。

第四块命名为<code>index\_4</code>。背景图片是<code>index_2.jpg</code>。正文是"新闻中心"，同时它也被作为第四块的标题。这一块视差滚动的实现效果，视差滚动的CSS可以在<code>main.css</code>内“Index”部分进行查看。有关时差滚动的详细解释，可以在BootStarp中查找。

第五块命名为<code>index\_5</code>。是新闻中心在首页的展示，会集中展示最近的重要新闻。左侧会有一副配图，配图的被放置在<code>margin:2%</code>的位置，地址为<code>index\_5.jpg</code>。左侧是罗列的最新新闻，采用有序表进行规范，直接定义链接的方法进行链接。值得注意的是，有序表的第一个元素的字符大小被刻意的放大，已达到吸引力加大的效果，并突出了新闻的新颖性的特点。

###最新新闻更新

由于最新新闻采用的是直接定义链接的方法。若要更新最新新闻，需要手工修改有序表。注意在Jekyll内提到的链接设置采用的Liquid语言“<code>{{site.baseurl}}</code>”的使用。

<h2 id = "default_post">default_post类型</h2>

deafult_post类型是被设计出的模板类型，大多网页是均应用此设计模板进行完成。例如<a href = "#class">班级理念</a>与<a href = "#acmicpc">ACM_ICPC</a>竞赛介绍等

文本类的设计在<code>_layouts\default_post.html</code>文件，该文件通过Jekyll语言实现了文本类的设计。在页首插入<code>_includes</code>文件夹下的html文件:<code>head.html</code>与<code>navigation.html</code>，在页尾插入<code>footer.html</code>。

<h2 id = "news">新闻中心</h2>
	
新闻中心首页是使用Jekyll生成的。内置的<code>main.css</code>内的“News Center”部分。设计了时间轴、newer&order等格式。

新闻中心首页中将显示所有新闻的链接。除此之外，体育节、旅游、夏令营的内容都属于新闻版块，而在它们各自的首页中只显示相关的链接。

###新增一篇新闻

所有的新闻均放在<code>_posts</code>目录下。

新闻文件的命名格式是"时间-文章标题.后缀名"。时间格式请使用“YYYY-MM-DD”，后缀名使用<code>.md</code>和<code>html</code>均可。

维护人员可以将任意一份新闻当做模板，进行适当的修改形成新的新闻即可。

以下解释头信息的具体内容：

* title是新闻的标题。
* feature的内容为这篇新闻在首页上的配图，只需在根目录下的images下添加图片，将图片名填入feature即可。值得注意的是，我们希望让每篇新闻在首页上显示的时候都有配图。
* layout与category是和内容的属性有关，当下设置了如下的属性：
	* 体育节的新闻需要填写为pefestival
	* 旅游的新闻需要填写为travel
	* 夏令营的新闻需要填写为camp
	* 其它的新闻均填写为news


<h2 id = "intros">班级介绍</h2>

班级介绍的所有内容被放置在<code>intros</code>文件夹内。

<h3 id = "intro_index">班级介绍主页</h3>

班级介绍主页的命名是<code>intro_index.html</code>。本页被分为四个HTML块，分别表示班级介绍的四个侧重方向：“班”，“师”，“生”，“赛”。

#####“班”

第一块命名为<code>intro_1 fullh</code>，背景颜色选择为C蓝色，C蓝色rgb编号为<code>#CCCCCC</code>，是最纯正的蓝色。蓝色有创新的含义，体现了ACM班的创新精神。
第一块分为上下两个之HTML块。

第一块上半部分依次完成<code>H1</code>字号文字：“班”，班级介绍的HTML块和ACM班徽图片。其中ACM班班徽右对齐，<code>H1</code>字号文字左对齐，正文起填充效果。

第一块下半部分是通过CSS实现的时间轴效果<code>timeline</code>。有关的CSS地址为：。

#####“师”

第二块命名为<code>intro_2 fullh</code>。背景颜色是浅蓝色，rgb编码为<code>rgba(46,93,156,0.2)</code>，起过渡作用。第二块分为上下两个之HTML块。

第二块上半部分采用CSS设计<code>container_big</code>。书写韩愈著《师说》的选句，并插入<code>H1</code>字号文字：“师”，字号文字右对齐。

第二块下半部分通过采用CSS设计<code>col-xs-4</code>。插入三位教师的照片与姓名。

#####“生”

第三块命名为<code>intro_3 fullh</code>。使用Bootstarp的滚轮设计:<code>intro_slide item active</code>。滚轮设计的每一页分别成HTML块。每一块对应一个班级。例如，2013级ACM班的HTML语言为：

	<div class="intro_slide item active">
    	<div class = "halfh intro_slide_pic"style="background-image:url(../images/stu_2013.jpg)" > </div>
    	<div class = "intro_slide_text">
		<h2> ACM 2011 </h2>
    	<button type="button" class="btn btn_new"> 2013年级集体照 </button>
    	<button type="button" class="btn btn_new"> 2013年级学生介绍 </button>
    	</div>
    </div>

可以依据这个模板，进行ACM班班级的添加。集体照推荐使用“<code>stu_YYYY.jpg</code>”命名并存储在<code>images</code>文件夹内。

#####“赛”

第四块命名为<code>intro_4 fullh</code>。背景颜色依然是C蓝色，rgb编号为<code>#CCCCCC</code>。设计方式与第一块上半部分类似。

依次完成<code>H1</code>字号文字：“赛”，班级介绍的HTML块和ACM_ICPC世界冠军奖杯图片。其中ACM班班徽左对齐，<code>H1</code>字号文字右对齐，正文起填充效果。

<h3 id = "class">班级理念</h3>

班级理念命名为<code>class.html</code>，采用一般文本类设计方案，可以在文本类查询。这里并不复述。

<h3 id = "teachers">教师名单</h3>

教师名单命名为<code>teachers.html</code>。左侧为教师名单，右侧为各个教师的介绍。

####在教师名单上加入一个教师

假设需要添加一名名称为<code>[teacher_name]</code>的教师。

需要在名录上（即`<div class="col-md-2 content">`内）添加：

	<h5><a href="#[teacher_name]">[teacher_name]</a></h5>

并且在正文部分（即`<div class="col-md-10 padding_0">`内）添加：

	<div class="teacher_in">
		<img src="{图片地址}">
		<a id="[teacher_name]"><h1>[teacher_name]</h1></a>
		{教师介绍}
	</div>

图片地址为`../images/{file_name}` 

同时请将图片放入<code>images</code>文件夹中并改名为<code>{file_name}</code>

在这里推荐将图片名改为：`teacher_$id.jpg` 以方便管理。

需要<strong>注意</strong>的是，为了名单页面与名录的有序性，请根据教师姓名拼音的<a href = "http://baike.baidu.com/link?url=RwIuVALUfnrymdGT7xhXa3BgjcUJ6YFxKozPGU7GyxoQH4sDqAzmA27cLWGSshVLfKgx622lctHn7cUv2BqN1q">音序排列</a>找到当前合适的教师插入位置，进行加入。

<h3 id = "honor">荣誉榜</h3>

>修改中

<h3 id = "acmicpc">ACM_ICPC竞赛介绍</h3>

ACM_ICPC竞赛介绍主页命名为<code>acmicpc.html</code>，采用一般文本类设计方案，可以在文本类查询。这里并不复述。

<h2 id = "academic">学术中心</h2>

>修改中

<h2 id = "lessons">课程中心</h2>

课程中心的所有内容被放置在<code>lessons</code>文件夹内。

<h3 id = "lesson_index">课程中心首页</h3>

课程中心文本的命名是<code>lesson_index.html</code>，使用了文本类模板。而这里的文本是特殊的，是由若干<code>col-md-4</code>HTML块组成的。对于每一个HTML块，需要使用HTML的img命令插入一张图片，使用链接命令将这个课程的名字给出链接。例如有关PPCA这个课程采用的Html源码是：

	<div class = "col-md-4">
		<img src = "{{site.baseurl}}/images/lesson_PPCA.jpg">
		<a href = "{{site.baseurl}}/lessons/lesson_PPCA.html"><h1>PPCA</h1></a>
	</div>

这里，插入的图片是<code>lesson_PPCA.jpg</code>，PPCA课程的详细地址是<code>/lessons/lesson_PPCA.html</code>。

<h3 id = "lesson_xxx">单个课程</h3>

单个课程在lesson文件夹下以HTML文件。命名规则为<code>lesson_XXX.html</code>，其中XXX为课程名称。例如课程PPCA的课程名称为<code>lesson_PPCA.html</code>。在这里并不推荐使用中文进行命名。

单个课程采用Jekyll模板。模板文件为<code>lesson.html</code>，放置在模板存放文件夹<code>_layout</code>下。

在lessons文件夹下有一个模板文件<code>lesson_model.html</code>。可以通过模仿模板的设计单个课程网页。

以下解释头信息的具体内容：

* layout: lesson。所指定模板格式为_post文件夹下的<code>lesson.html</code>。
* title: 课程名称缩写，显示在网页标签栏中。
* fullname: 课程名称。
* teacher: 授课教师
* grade: 授课时间

<h2 id = "activity">活动中心</h2>

活动中心使用了BootStarp的滚轮设计，体现活动的灵动性。几个由大图片构成的页面相互轮换，与文字相得益彰。活动中心相比于其它的几个中心，具有更加的开放性，可以尝试一些华丽新颖的设计理念。

同时活动中心也需要将各方面的活动，如体育类活动，旅游类活动等尽全尽善的表现出来。对图片的要求较高。

有关滚轮设计的模板在<code>bootstrap.min.css</code>和<code>bootstrap.min.js</code>里面，维护者若对实现有兴趣，可以前去阅读。

在这里，共设计了三个页面，分别对应体育节、旅游和夏令营这三件ACM班的主要活动信息。每个项目的具体活动信息存储在新闻中心内，可以在新闻中心的介绍中查询到对应信息。
每个页面的设计是类似的。这三个页面分别被分为了三个HTML块：<code>activity_1</code>,<code>activity_2</code>与<code>activity_3</code>。而对应每一个页面都有一个HTML块<code>article_activity</code>存储并显示图片所对应的文字内容。每段文字后会有一个“点击查看更多”方框。这个方框是固定模板，可查看js文件夹下的<code>main.js</code>文件了解相信的实现方法。

###如何修改活动中心的页面

活动中心页面的修改须直接修改<code>activity.html</code>。

若欲新增一个页面，不仅需要在css内新增activity_4的配置，而且还需要在新闻中心内做出一定的改变。这样做是不推荐的。

而将新的活动信息替换旧的活动信息，可直接通过替换对应图片<code>activity_X.jpg</code>与在对应的<code>article_activity</code>块内修改对应的文字信息（使用Html语言）即可。

这种替换方式的具体模块可以参照需要替换的旧的新闻模块，超文本标记语言的易书写易阅读的特性被合理展现。

<h1 id = "FAQ">F.A.Q</h1>

&emsp;&emsp;本环节详细解答网页维护时可能会遇到的问题。这些问题大多是在网页重构时遭遇的困难，大家集思广益想到的解决方案；也有一些是具有前瞻性的，带有设问性的问题，这些问题将会充分考虑一个维护人员所遭遇的种种难题。

&emsp;&emsp;在进行网页维护时难免会遭遇整个文档（包括F.A.Q）都无法解决的问题。如若遭遇这类情况，请及时联系ACM14设计小组成员。我们会在帮助解决问题，同时进行F.A.Q的更新。

##Jekyll问题

###问题1：Windows下安装Jekyll失败，有些文件没有被安装

答：这可能是由如下的问题造成的，他们各有不同的解决方案。

1. 证书问题。可以前往<http://curl.haxx.se/ca/cacert.pem>上直接下载，并把<code>cacert.pem</code>放在ruby安装根目录下。

2. windows编码问题。这种错误经常显示“UTF-8”和"GBK"等单词。可在网站：<http://yanping.me/cn/blog/2012/10/09/chinese-charset-problems-with-jekyll/>上查询解决方案。

###问题2：修改网页以后，网页没有被Jekyll编译

答：在修改网页的任何一个细节的疏忽都有可能导致这个问题的发生。

1. 没有编译。请查看Jekyll教程内的有关Build的命令进行学习，对于编译成功的代码可以在_site文件夹内查询到。 
2. 编码问题。由于Windows和Linux下不同的编码，Jekyll的头信息由于对空格等字符有十分严格的审查限定，在Jekyll的头信息附件意外增加无用的字符是出现这种问题的最大可能。请认真检查Jekyll，可以使用Emacs作为编辑器辅助工具进行检查。

##History问题

###问题1：意外删掉了一些网页代码怎么办

答：为了防止这种情况的发生，请在对网站做修改时，及时保存历史信息。

##网页意外Bug

###问题1：当前图片无法显示

答：检查对应的图片链接是否正确，是否使用Jekyll要求的Liquid语言：“<code>{{site.baseurl}}</code>”。



