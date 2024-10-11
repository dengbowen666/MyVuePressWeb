import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,f as a,o as i}from"./app-B-7tlJE2.js";const l={};function t(p,s){return i(),e("div",null,s[0]||(s[0]=[a(`<blockquote><p>GitHub Actions 是 GitHub 的持续集成服务，是一个非常强大的功能，用它可以实现很多自动化功能。现在我们来使用Github Actions将我们做好的Vue项目部署到Github Pages上。</p></blockquote><ul><li>workflow：持续集成一次运行的过程，即一个工作流程</li><li>job：任务，一个工作流程由一个或多个任务组成</li><li>step：步骤，每个任务由多个步骤组成，逐步完成</li><li>action：动作，每个步骤可以执行一个或多个动作</li></ul><h2 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤"><span>步骤：</span></a></h2><h3 id="修改配置" tabindex="-1"><a class="header-anchor" href="#修改配置"><span>修改配置</span></a></h3><p><strong>修改publicPath为将要发布的Github Pages的子路径，比如发布后的地址<a href="https://tuzilow.github.io/github-actions-demo/" target="_blank" rel="noopener noreferrer">https://tuzilow.github.io/github-actions-demo/</a> ，那么publicPath就要设置为/github-actions-demo/</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  publicPath: &#39;/github-actions-demo/&#39;,</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="编写workflow文件" tabindex="-1"><a class="header-anchor" href="#编写workflow文件"><span>编写workflow文件</span></a></h3><p><strong>workflow文件采用YAML格式，后缀为.yml，在项目根目录下创建.github/workflows/目录，Github只要发现该目录中由yml文件就会自动运行该文件。创建ci.yml</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 该workflow的名称，可以随意填写</span></span>
<span class="line"><span>name: Build And Deploy To Github Pages</span></span>
<span class="line"><span></span></span>
<span class="line"><span># workflow的触发事件，这里代表master分支的push事件触发</span></span>
<span class="line"><span>on:</span></span>
<span class="line"><span>  push:</span></span>
<span class="line"><span>    branches: [ master ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 任务</span></span>
<span class="line"><span>jobs:</span></span>
<span class="line"><span>  # build-and-deploy 为任务的ID</span></span>
<span class="line"><span>  build-and-deploy:</span></span>
<span class="line"><span>    # 运行所需要的环境</span></span>
<span class="line"><span>    runs-on: ubuntu-latest </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    steps:</span></span>
<span class="line"><span>      # 步骤名</span></span>
<span class="line"><span>      - name: Checkout</span></span>
<span class="line"><span>        # 使用的actions脚本，这里是官方提供的获取源码脚本</span></span>
<span class="line"><span>        uses: actions/checkout@v2.3.1</span></span>
<span class="line"><span>        # 这个为使用 JamesIves/github-pages-deploy-action脚本所需要的配置</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          persist-credentials: false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      # 执行npm脚本打包项目</span></span>
<span class="line"><span>      - name: Install and Build</span></span>
<span class="line"><span>        run: |</span></span>
<span class="line"><span>          npm install</span></span>
<span class="line"><span>          npm run build</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      # 执行JamesIves/github-pages-deploy-action将项目发布到Github Pages</span></span>
<span class="line"><span>      - name: Deploy</span></span>
<span class="line"><span>        uses: JamesIves/github-pages-deploy-action@3.7.1</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          # 该workflow需要操作repo，因此需要一个密钥，下面会讲到如何获取这个密钥</span></span>
<span class="line"><span>          ACCESS_TOKEN: \${{ secrets.ACCESS_TOKEN }}</span></span>
<span class="line"><span>          # 发布到的分支</span></span>
<span class="line"><span>          BRANCH: gh-pages</span></span>
<span class="line"><span>          # 要发布的文件夹</span></span>
<span class="line"><span>          FOLDER: dist</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取密钥并存储到github仓库中" tabindex="-1"><a class="header-anchor" href="#获取密钥并存储到github仓库中"><span>获取密钥并存储到Github仓库中</span></a></h3><ol><li>进入Github的Settings中<a href="https://github.com/settings/%EF%BC%8C" target="_blank" rel="noopener noreferrer">https://github.com/settings/，</a> 依次点击 <em>Developer settings</em>、<em>Personal access tokens</em>。然后点击<em>Generate new token</em>创建。因为要操作仓库，所以需要勾选repo权限。</li><li>创建一个Github仓库，然后到仓库的<mark>Settings/Secret</mark>下，点击New repository secret将刚才保存的密钥保存，并命名为ACCESS_TOKEN（注意，如果这里的命名更改了，前面的yml文件中的$ secrets.ACCESS_TOKEN 也要更改）</li><li>根据Github上的提示，将准备好的本地仓库推送之后就会自动执行workflow。我们可以到Actions中实时查看运行日志。</li></ol><blockquote><p>出处：<a href="https://www.cnblogs.com/xueyubao/" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/xueyubao/</a></p></blockquote>`,13)]))}const c=n(l,[["render",t],["__file","vue项目自动部署.html.vue"]]),d=JSON.parse('{"path":"/posts/vue/vue%E9%A1%B9%E7%9B%AE%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2.html","title":"vue项目自动部署","lang":"zh-CN","frontmatter":{"title":"vue项目自动部署","tag":"-vue -技巧","sticky":true,"description":"GitHub Actions 是 GitHub 的持续集成服务，是一个非常强大的功能，用它可以实现很多自动化功能。现在我们来使用Github Actions将我们做好的Vue项目部署到Github Pages上。 workflow：持续集成一次运行的过程，即一个工作流程 job：任务，一个工作流程由一个或多个任务组成 step：步骤，每个任务由多个步骤...","head":[["meta",{"property":"og:url","content":"https://github.com/dengbowen666/MyVuePressWeb/posts/vue/vue%E9%A1%B9%E7%9B%AE%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2.html"}],["meta",{"property":"og:site_name","content":"Hiki"}],["meta",{"property":"og:title","content":"vue项目自动部署"}],["meta",{"property":"og:description","content":"GitHub Actions 是 GitHub 的持续集成服务，是一个非常强大的功能，用它可以实现很多自动化功能。现在我们来使用Github Actions将我们做好的Vue项目部署到Github Pages上。 workflow：持续集成一次运行的过程，即一个工作流程 job：任务，一个工作流程由一个或多个任务组成 step：步骤，每个任务由多个步骤..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-14T14:09:38.000Z"}],["meta",{"property":"article:author","content":"Hiki"}],["meta",{"property":"article:tag","content":"-vue -技巧"}],["meta",{"property":"article:modified_time","content":"2024-08-14T14:09:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vue项目自动部署\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-14T14:09:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hiki\\",\\"url\\":\\"https://github.com/dengbowen666/MyVuePressWeb\\",\\"email\\":\\" 2763201730@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"步骤：","slug":"步骤","link":"#步骤","children":[{"level":3,"title":"修改配置","slug":"修改配置","link":"#修改配置","children":[]},{"level":3,"title":"编写workflow文件","slug":"编写workflow文件","link":"#编写workflow文件","children":[]},{"level":3,"title":"获取密钥并存储到Github仓库中","slug":"获取密钥并存储到github仓库中","link":"#获取密钥并存储到github仓库中","children":[]}]}],"git":{"createdTime":1723644578000,"updatedTime":1723644578000,"contributors":[{"name":"dengbowen666","email":"2763201730@qq.com","commits":1}]},"readingTime":{"minutes":2.07,"words":620},"filePathRelative":"posts/vue/vue项目自动部署.md","localizedDate":"2024年8月14日","excerpt":"","autoDesc":true}');export{c as comp,d as data};
