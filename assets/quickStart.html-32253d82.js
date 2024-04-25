import{_ as e,r as c,o,c as i,a,w as t,e as n,b as p}from"./app-168742e2.js";const l="/easy-dnd-docs/assets/image-20231003193536147-1bcbaa1e.png",u="/easy-dnd-docs/assets/image-20231003195330466-4457689a.png",r={},d=n(`<h1 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h1><h2 id="浏览器中使用easy-dnd" tabindex="-1"><a class="header-anchor" href="#浏览器中使用easy-dnd" aria-hidden="true">#</a> 浏览器中使用easy-dnd</h2><p>在html文件顶部引入es module map</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>importmap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;imports&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;easy-dnd&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./easy-dnd.js&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着试试导入<code>easy-dnd</code>是否生效</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    
  <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> dnd <span class="token keyword">from</span> <span class="token string">&#39;easy-dnd&#39;</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dnd<span class="token punctuation">)</span>
    
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建拖拽上下文" tabindex="-1"><a class="header-anchor" href="#创建拖拽上下文" aria-hidden="true">#</a> 创建拖拽上下文</h2><p>页面中，可能会有多个拖拽区域，这些拖拽区域之间互不影响，因此我们需要为每个区域创建各自的拖拽上下文</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> 
  createProvider
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;easy-dnd&#39;</span>

<span class="token comment">// 创建拖拽上下文</span>
<span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token function">createProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建drag对象" tabindex="-1"><a class="header-anchor" href="#创建drag对象" aria-hidden="true">#</a> 创建drag对象</h2><p>页面中添加一个<code>dom</code>元素，并且引入<code>DragCore</code>类，并实例化它</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.a</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token function">rgb</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  盒子A
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

  <span class="token keyword">import</span> <span class="token punctuation">{</span>
    createProvider<span class="token punctuation">,</span>
    DragCore<span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;easy-dnd&#39;</span>

  <span class="token comment">// 创建拖拽上下文</span>
  <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token function">createProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// 创建一个拖拽类型</span>
  <span class="token keyword">const</span> <span class="token constant">DRAG_TYPE</span> <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span>

  <span class="token comment">// 创建拖拽对象</span>
  <span class="token keyword">const</span> drag <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DragCore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 把拖拽类型放在这里</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">DRAG_TYPE</span><span class="token punctuation">,</span>
      <span class="token comment">// 关联上下文</span>
      context
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中需要配置一个<code>type</code>，至于这个<code>type</code>干什么用的，可以等如何创建drop对象说完之后再细细道来</p><p>现在页面上没有任何效果，因为还没把drag对象和原生dom元素关联在一起，添加如下代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">...</span><span class="token operator">...</span>

<span class="token comment">// 创建拖拽对象</span>
<span class="token keyword">const</span> drag <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DragCore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 把拖拽类型放在这里</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">DRAG_TYPE</span><span class="token punctuation">,</span>
    <span class="token comment">// 关联上下文</span>
    context
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">registerDom</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，元素就可以进行拖拽了</p>`,16),k=p("img",{src:l,alt:"image-20231003193536147",style:{zoom:"50%"}},null,-1),v=n(`<h2 id="创建drop对象" tabindex="-1"><a class="header-anchor" href="#创建drop对象" aria-hidden="true">#</a> 创建drop对象</h2><p>创建drop对象同理</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">...

  .b</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px dashed <span class="token function">rgb</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

...

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  盒子B
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

  <span class="token keyword">import</span> <span class="token punctuation">{</span>
	<span class="token operator">...</span>
    DropCore 
  <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;easy-dnd&#39;</span>
    
  <span class="token operator">...</span>
    
  <span class="token comment">// 创建放置实例</span>
  <span class="token keyword">const</span> drop <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DropCore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 上下文下</span>
      context<span class="token punctuation">,</span>
      <span class="token comment">// 设置当前控件允许放置的类型，和 new Drag 中的 config.type 一一对应</span>
      <span class="token literal-property property">acceptType</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token constant">DRAG_TYPE</span> <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">registerDom</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，盒子a就能拖到盒子b中，并显示允许放置的图标</p>`,4),m=p("img",{src:u,alt:"image-20231003195330466",style:{zoom:"50%"}},null,-1),b=n(`<h2 id="为什么需要type" tabindex="-1"><a class="header-anchor" href="#为什么需要type" aria-hidden="true">#</a> 为什么需要type</h2><p>比如房间里有个垃圾桶，还有个箱子，我们怎么知道手中的东西需要丢到垃圾桶中还是箱子中？同理，开发者需要告诉<code>easy-dnd</code>，哪些元素可以放到哪些元素中，每个物品都有属于它自己的标识，这对应了<code>DragCore.config.type</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> drag1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DragCore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  config<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> drag2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DragCore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  config<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么放置元素也需要被告知它允许放置哪些类型，对应<code>DropCore.config.acceptType</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> drop <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DropCore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">acceptType</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="绑定事件" tabindex="-1"><a class="header-anchor" href="#绑定事件" aria-hidden="true">#</a> 绑定事件</h2><p><code>easy-dnd</code>为DragCore添加了如下事件，与原生一一对应，但是做了特殊处理</p><ul><li><strong>dragStart：</strong> 拖拽开始</li><li><strong>drag：</strong> 拖拽中</li><li><strong>dragEnd：</strong> 拖拽结束</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> drag <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DragCore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">DRAG_TYPE</span><span class="token punctuation">,</span>
    context
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">dragStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;开始拖拽&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">drag</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;拖拽中&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">dragEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;结束拖拽&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>easy-dnd</code>也为DropCore添加了如下事件</p><ul><li><strong>dragEnter：</strong> 拖拽元素进入该<code>dom</code>时触发</li><li><strong>dragOver：</strong> 拖拽元素在该<code>dom</code>范围内触发</li><li><strong>dragLeave：</strong> 拖拽元素离开该<code>dom</code>时触发</li><li><strong>drop：</strong> 拖拽元素松开的位置在目标元素中</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">DropCore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    context<span class="token punctuation">,</span>
    <span class="token literal-property property">acceptType</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token constant">DRAG_TYPE</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">dragEnter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;拖拽元素进入&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">dragOver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;拖拽元素在当前元素范围内移动&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">dragLeave</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;拖拽元素离开&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">drop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;拖拽元素放置&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="拖拽元素携带数据" tabindex="-1"><a class="header-anchor" href="#拖拽元素携带数据" aria-hidden="true">#</a> 拖拽元素携带数据</h2><p>在具体应用场景中，一堆物品可能同一种类型，但是它们都有各自的属性，比如，它们都是水果，但是水果有多种类型。<code>easy-dnd</code>抽象了这种关系，延伸出了 <code>DragCore.config.data</code> 配置项，示例如下</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  盒子A1
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  盒子A2
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  盒子B
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

  <span class="token keyword">import</span> <span class="token punctuation">{</span>
    createProvider<span class="token punctuation">,</span>
    DragCore<span class="token punctuation">,</span>
    DropCore
  <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;easy-dnd&#39;</span>

  <span class="token comment">// 创建拖拽上下文</span>
  <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token function">createProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// 创建一个拖拽类型</span>
  <span class="token keyword">const</span> <span class="token constant">DRAG_TYPE</span> <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span>

  <span class="token keyword">const</span> drag1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DragCore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">DRAG_TYPE</span><span class="token punctuation">,</span>
      context<span class="token punctuation">,</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;a1&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">registerDom</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.a1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> drag2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DragCore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">DRAG_TYPE</span><span class="token punctuation">,</span>
      context<span class="token punctuation">,</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;a2&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">registerDom</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.a2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// 创建放置实例</span>
  <span class="token keyword">const</span> drop <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DropCore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      context<span class="token punctuation">,</span>
      <span class="token literal-property property">acceptType</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token constant">DRAG_TYPE</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">drop</span><span class="token punctuation">(</span><span class="token parameter">monitor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;拖拽元素放置，放置的data为&#39;</span><span class="token punctuation">,</span> monitor<span class="token punctuation">.</span><span class="token function">getDragData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">registerDom</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function g(h,y){const s=c("center");return o(),i("div",null,[d,a(s,null,{default:t(()=>[k]),_:1}),v,a(s,null,{default:t(()=>[m]),_:1}),b])}const w=e(r,[["render",g],["__file","quickStart.html.vue"]]);export{w as default};
