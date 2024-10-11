import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,f as l,o as i}from"./app-B-7tlJE2.js";const p={};function e(d,s){return i(),a("div",null,s[0]||(s[0]=[l(`<p>练习浮动盒子和整体布局，注重微调</p><h2 id="代码如下" tabindex="-1"><a class="header-anchor" href="#代码如下"><span>代码如下</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;div class=&quot;total&quot;&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;header w&quot;&gt;</span></span>
<span class="line"><span> &lt;div class=&quot;logo&quot;&gt;&lt;img src=&quot;../../.vuepress/public/assets/images/%E5%AD%A6%E6%88%90%E5%9C%A8%E7%BA%BF%E6%A1%88%E4%BE%8Bimage/logo.png&quot; alt=&quot;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span> &lt;div class=&quot;nav&quot;&gt;</span></span>
<span class="line"><span> &lt;ul&gt;</span></span>
<span class="line"><span>    &lt;!-- li是块级元素从上往下，给li加浮动 --&gt;</span></span>
<span class="line"><span>    &lt;li&gt;&lt;a href=&quot;&quot;&gt;首页&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;&lt;a href=&quot;&quot;&gt;课程&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;li&gt;&lt;a href=&quot;&quot;&gt;职业规划&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span> &lt;/ul&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div class=&quot;search&quot;&gt;</span></span>
<span class="line"><span>&lt;input type=&quot;text&quot; name=&quot;&quot; id=&quot;&quot; value=&quot;输入关键词&quot;&gt;</span></span>
<span class="line"><span>&lt;button&gt;&lt;img src=&quot;../../.vuepress/public/assets/images/%E5%AD%A6%E6%88%90%E5%9C%A8%E7%BA%BF%E6%A1%88%E4%BE%8Bimage/btn.png&quot; alt=&quot;&quot;&gt;&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;user&quot;&gt;</span></span>
<span class="line"><span>&lt;img src=&quot;../../.vuepress/public/assets/images/学成在线案例image/user.png&quot; alt=&quot;&quot;&gt;</span></span>
<span class="line"><span>qq-lileie</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;!-- header结束 --&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;banner&quot;&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;w&quot;&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;subnav&quot;&gt;</span></span>
<span class="line"><span>&lt;ul&gt;</span></span>
<span class="line"><span>&lt;li&gt;&lt;a href=&quot;&quot;&gt;前端开发&lt;span&gt;&gt;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>&lt;li&gt;&lt;a href=&quot;&quot;&gt;前端开发&lt;span&gt;&gt;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>&lt;li&gt;&lt;a href=&quot;&quot;&gt;前端开发&lt;span&gt;&gt;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>&lt;li&gt;&lt;a href=&quot;&quot;&gt;前端开发&lt;span&gt;&gt;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>&lt;li&gt;&lt;a href=&quot;&quot;&gt;前端开发&lt;span&gt;&gt;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>&lt;li&gt;&lt;a href=&quot;&quot;&gt;前端开发&lt;span&gt;&gt;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>&lt;li&gt;&lt;a href=&quot;&quot;&gt;前端开发&lt;span&gt;&gt;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>&lt;li&gt;&lt;a href=&quot;&quot;&gt;前端开发&lt;span&gt;&gt;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>&lt;li&gt;&lt;a href=&quot;&quot;&gt;前端开发&lt;span&gt;&gt;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span>&lt;/ul&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;course&quot;&gt;</span></span>
<span class="line"><span>&lt;h2&gt;我的课程表&lt;/h2&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;bd&quot;&gt;</span></span>
<span class="line"><span>&lt;ul&gt;</span></span>
<span class="line"><span>&lt;li&gt;</span></span>
<span class="line"><span>&lt;h4&gt;继续学习&lt;/h4&gt;</span></span>
<span class="line"><span>&lt;p&gt;正在学习-使用对象&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/li&gt;</span></span>
<span class="line"><span>&lt;li&gt;</span></span>
<span class="line"><span>&lt;h4&gt;继续学习&lt;/h4&gt;</span></span>
<span class="line"><span>&lt;p&gt;正在学习&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/li&gt;</span></span>
<span class="line"><span>&lt;li&gt;</span></span>
<span class="line"><span>&lt;h4&gt;继续学习&lt;/h4&gt;</span></span>
<span class="line"><span>&lt;p&gt;正在学习&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/li&gt;</span></span>
<span class="line"><span>&lt;/ul&gt;</span></span>
<span class="line"><span>&lt;a href=&quot;&quot; class=&quot;more&quot;&gt;全部课程&lt;/a&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;!-- banner结束 --&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>*{</span></span>
<span class="line"><span>    /* 清除内外边距，紧贴 */</span></span>
<span class="line"><span>    margin: 0;</span></span>
<span class="line"><span>    padding: 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>li{</span></span>
<span class="line"><span>   list-style: none; </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>a{</span></span>
<span class="line"><span>    text-decoration: none;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.total{</span></span>
<span class="line"><span>    background-color: #f3f5f7;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/* 为了方便调用这个版型，提出来写 */</span></span>
<span class="line"><span>.w{</span></span>
<span class="line"><span>    width: 1200px;</span></span>
<span class="line"><span>    margin: auto;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.header{</span></span>
<span class="line"><span>    height: 42px;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 会层叠w中的margin */</span></span>
<span class="line"><span>    margin: 30px auto;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.logo{</span></span>
<span class="line"><span>    width: 198px;</span></span>
<span class="line"><span>    height: 42px;</span></span>
<span class="line"><span>    float: left;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.nav{</span></span>
<span class="line"><span>    float: left;</span></span>
<span class="line"><span>    margin-left: 60px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.nav ul li{</span></span>
<span class="line"><span>    float: left;</span></span>
<span class="line"><span>margin: 0px 15px 15px 0;</span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>.nav ul li a{</span></span>
<span class="line"><span>    display: block;</span></span>
<span class="line"><span>    height: 42px;</span></span>
<span class="line"><span>    padding: 0 10px;</span></span>
<span class="line"><span>    line-height: 42px;</span></span>
<span class="line"><span>    font-size: 18px;</span></span>
<span class="line"><span>    color: #050505;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.nav ul li a:hover{</span></span>
<span class="line"><span>border-bottom: 2px solid #6bb4d6;</span></span>
<span class="line"><span>color: #6bb4d6;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.search{</span></span>
<span class="line"><span>    margin-left: 70px;</span></span>
<span class="line"><span>    float: left;</span></span>
<span class="line"><span>    width: 412px;</span></span>
<span class="line"><span>    height: 42px;</span></span>
<span class="line"><span>    background-color: skyblue;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.search input{</span></span>
<span class="line"><span>    float: left;</span></span>
<span class="line"><span>    width: 345px;</span></span>
<span class="line"><span>    height: 40px;</span></span>
<span class="line"><span>    border: 1px solid #6bb4d6;</span></span>
<span class="line"><span>    border-right: 0px;</span></span>
<span class="line"><span>    color: #bfbfbf;</span></span>
<span class="line"><span>    font-size:14px ;</span></span>
<span class="line"><span>    /* 挤文字 */</span></span>
<span class="line"><span>    padding-left: 15px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.search button{</span></span>
<span class="line"><span>    float: left;</span></span>
<span class="line"><span>    width: 50px;</span></span>
<span class="line"><span>    height: 42px;</span></span>
<span class="line"><span>    /* 去掉边框 */</span></span>
<span class="line"><span>    border: 0;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.user{</span></span>
<span class="line"><span>    float: right;</span></span>
<span class="line"><span>    margin-right: 30px;</span></span>
<span class="line"><span>    font-size: 14px;</span></span>
<span class="line"><span>    color: #666;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.banner{</span></span>
<span class="line"><span>    height: 421px;</span></span>
<span class="line"><span>    background-color: #1c036c;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.banner .w{</span></span>
<span class="line"><span>    height: 421px;</span></span>
<span class="line"><span>    background-color: pink;</span></span>
<span class="line"><span>    background: url(images/banner2.png);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.subnav{</span></span>
<span class="line"><span>    float: left;</span></span>
<span class="line"><span>    width: 190px;</span></span>
<span class="line"><span>    height: 421px;</span></span>
<span class="line"><span>    background-color: rgb(0, 0,0 ,0.3);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.subnav ul li a{</span></span>
<span class="line"><span>    display: block;</span></span>
<span class="line"><span>    font-size: 14px;</span></span>
<span class="line"><span>    color: #fff;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.subnav ul li :hover{</span></span>
<span class="line"><span>    color: #6bb4d6;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.subnav ul li {</span></span>
<span class="line"><span>    height: 45px;</span></span>
<span class="line"><span>    line-height: 45px;</span></span>
<span class="line"><span>    padding-left: 20px;</span></span>
<span class="line"><span>    padding-right: 20px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.subnav ul li a span{</span></span>
<span class="line"><span>    float: right;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.course{</span></span>
<span class="line"><span>    float: right;</span></span>
<span class="line"><span>    width: 230px;</span></span>
<span class="line"><span>    height: 300px;</span></span>
<span class="line"><span>    background-color: pink;</span></span>
<span class="line"><span>    margin-top: 50px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.course h2{</span></span>
<span class="line"><span>    height: 48px;</span></span>
<span class="line"><span>    background-color: #7ab8d9;</span></span>
<span class="line"><span>    line-height: 48px;</span></span>
<span class="line"><span>    text-align: center;</span></span>
<span class="line"><span>    font-size: 18px;</span></span>
<span class="line"><span>    color: #fff;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.bd{</span></span>
<span class="line"><span>    padding-left: 20px;</span></span>
<span class="line"><span>    padding-right: 20px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.bd ul li h4{</span></span>
<span class="line"><span>    font-size: 16px;</span></span>
<span class="line"><span>    color: #414141;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.bd ul li p{</span></span>
<span class="line"><span>    font-size: 12px;</span></span>
<span class="line"><span>    color: #a5a5a5;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.bd ul li{</span></span>
<span class="line"><span>    padding:14px 0;</span></span>
<span class="line"><span>    border-bottom: 1px solid #ccc;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.bd .more{</span></span>
<span class="line"><span>    /* a本身属于行内元素，要转化成块 */</span></span>
<span class="line"><span>    display: block;</span></span>
<span class="line"><span>    height: 38px;</span></span>
<span class="line"><span>    border: 1px solid #7ab8d9;</span></span>
<span class="line"><span>    margin-top: 5px;</span></span>
<span class="line"><span>    line-height: 38px;</span></span>
<span class="line"><span>    text-align: center;</span></span>
<span class="line"><span>    color: #00a4ff;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    font-weight: 700;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const v=n(p,[["render",e],["__file","综合案例4.html.vue"]]),r=JSON.parse('{"path":"/posts/css/%E7%BB%BC%E5%90%88%E6%A1%88%E4%BE%8B4.html","title":"综合案例四：学成在线","lang":"zh-CN","frontmatter":{"title":"综合案例四：学成在线","tag":"-css","category":"学习","date":"2024-08-11T00:00:00.000Z","description":"练习浮动盒子和整体布局，注重微调 代码如下","head":[["meta",{"property":"og:url","content":"https://github.com/dengbowen666/MyVuePressWeb/posts/css/%E7%BB%BC%E5%90%88%E6%A1%88%E4%BE%8B4.html"}],["meta",{"property":"og:site_name","content":"Hiki"}],["meta",{"property":"og:title","content":"综合案例四：学成在线"}],["meta",{"property":"og:description","content":"练习浮动盒子和整体布局，注重微调 代码如下"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-12T03:26:25.000Z"}],["meta",{"property":"article:author","content":"Hiki"}],["meta",{"property":"article:tag","content":"-css"}],["meta",{"property":"article:published_time","content":"2024-08-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-12T03:26:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"综合案例四：学成在线\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-12T03:26:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hiki\\",\\"url\\":\\"https://github.com/dengbowen666/MyVuePressWeb\\",\\"email\\":\\" 2763201730@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"代码如下","slug":"代码如下","link":"#代码如下","children":[]}],"git":{"createdTime":1723366731000,"updatedTime":1723433185000,"contributors":[{"name":"dengbowen666","email":"2763201730@qq.com","commits":2}]},"readingTime":{"minutes":2.42,"words":726},"filePathRelative":"posts/css/综合案例4.md","localizedDate":"2024年8月11日","excerpt":"","autoDesc":true}');export{v as comp,r as data};
