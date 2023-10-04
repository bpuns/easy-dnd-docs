import{_ as n,o as s,c as a,e as t}from"./app-c4b61520.js";const p={},e=t(`<h1 id="react下使用" tabindex="-1"><a class="header-anchor" href="#react下使用" aria-hidden="true">#</a> React下使用</h1><p>在安装<code>easy-dnd</code>的时候就会携带上 react 相关桥接文件，所以不要单独安装</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> 
  <span class="token comment">// react下使用的拖拽上下文</span>
  DndProvider<span class="token punctuation">,</span>
  <span class="token comment">// drag hook</span>
  useDrop<span class="token punctuation">,</span>
  <span class="token comment">// drop hook</span>
  useDrag
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;easy-dnd/react&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以直接从<code>easy-dnd/react</code>中引入所有<code>easy-dnd</code>的变量和方法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> 
  <span class="token constant">DND_MODE</span><span class="token punctuation">,</span>
  DragCore<span class="token punctuation">,</span>
  DropCore<span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;easy-dnd/react&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dndprovider" tabindex="-1"><a class="header-anchor" href="#dndprovider" aria-hidden="true">#</a> DndProvider</h2><p>用于提供拖拽的上下文，是基于 createProvider 的 React 封装版本</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> DndProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;easy-dnd/react&#39;</span>

<span class="token keyword">function</span> <span class="token function">Example1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DndProvider</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
	  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Component</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DndProvider</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同理，你也可以配置dnd mode与delay</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> 
  DndProvider<span class="token punctuation">,</span>
  <span class="token constant">DND_MODE</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;easy-dnd/react&#39;</span>

<span class="token keyword">function</span> <span class="token function">Example1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DndProvider</span></span>
      <span class="token attr-name">type</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token constant">DND_MODE</span><span class="token punctuation">.</span><span class="token constant">SCOPE</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">delay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span></span>    
    <span class="token punctuation">&gt;</span></span><span class="token plain-text">
	  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Component</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DndProvider</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hooks" tabindex="-1"><a class="header-anchor" href="#hooks" aria-hidden="true">#</a> hooks</h2><p><code>easy-dnd/react</code> 提供了如下两个 hooks</p><ul><li><strong>useDrag：</strong> 用于创建拖拽实例</li><li><strong>useDrop：</strong> 用于创建放置实例</li></ul><p>hooks的好处有以下两点</p><ol><li>不需要手动调用 subscribe 与 unSubscribe</li><li>不需要传递上下文</li></ol><h3 id="usedrag" tabindex="-1"><a class="header-anchor" href="#usedrag" aria-hidden="true">#</a> useDrag</h3><p>在 react hooks 中，因为 react 的渲染机制问题，因此创建 drag 与 drop 实例需要把配置项放到一个函数中，此函数的返回值作为其配置项，理想情况下，这个拖拽对象只会实例化一次，你可以把<code>easy-dnd/react</code>提供的 hooks 看成一个 useMemo</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useDrag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;easy-dnd/react&#39;</span>

<span class="token keyword">function</span> <span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// 创建拖拽实例</span>
  <span class="token keyword">const</span> drag <span class="token operator">=</span> <span class="token function">useDrag</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 不需要传递上下文</span>
      <span class="token comment">// context: null</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span>  <span class="token string">&#39;A&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 拖拽开始的回调</span>
    <span class="token function-variable function">dragStart</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;A 开始拖拽&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 拖拽结束的回调</span>
    <span class="token function-variable function">dragEnd</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;A 结束拖拽&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token comment">// 不传第二个参数参数，那么效果与 useMemo(()=&gt;config, []) 一致</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token comment">// 如果配置内部需要使用到最新的数据，需要在这里添加依赖性，防止闭包</span>
  <span class="token comment">// }), [ data1, data2 ])</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token comment">// 与dom绑定</span>
      <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>drag<span class="token punctuation">.</span>dragRef<span class="token punctuation">}</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token plain-text">
      盒子A
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usedrop" tabindex="-1"><a class="header-anchor" href="#usedrop" aria-hidden="true">#</a> useDrop</h3><p>与 useDrag 同理，同样不需要传递上下文与显性的调用 subscribe 与 unSubscribe</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useDrop <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;easy-dnd/react&#39;</span>

<span class="token keyword">function</span> <span class="token constant">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">const</span> drop <span class="token operator">=</span> <span class="token function">useDrop</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 不需要传递上下文</span>
      <span class="token comment">// context: null</span>
      <span class="token literal-property property">acceptType</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token string">&#39;A&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">dragEnter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;A进入了B的范围&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// A放置时触发的回调</span>
    <span class="token function">drop</span><span class="token punctuation">(</span><span class="token parameter">monitor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;A放置在B上&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;存放的数据:&#39;</span> <span class="token operator">+</span> monitor<span class="token punctuation">.</span><span class="token function">getDragData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">dragOver</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;A在B中移动&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">dragLeave</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;A离开了B的范围&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token comment">// 不传第二个参数参数，那么效果与 useMemo(()=&gt;config, []) 一致</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token comment">// 如果配置内部需要使用到最新的数据，需要在这里添加依赖性，防止闭包</span>
  <span class="token comment">// }), [ data1, data2 ])</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>drop<span class="token punctuation">.</span>dropRef<span class="token punctuation">}</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token string">&#39;1px dashed #000&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token plain-text">
      盒子B
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="既可以drag又可以drop" tabindex="-1"><a class="header-anchor" href="#既可以drag又可以drop" aria-hidden="true">#</a> 既可以drag又可以drop</h2><p>如果当前元素既可以drag又可以drop，你可以这么写</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">ListItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">const</span> drag <span class="token operator">=</span> <span class="token function">useDrag</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span>  <span class="token string">&#39;list&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> drop <span class="token operator">=</span> <span class="token function">useDrop</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">acceptType</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token string">&#39;list&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token comment">// 当前控件既可以拖拽，也可以放置</span>
  <span class="token keyword">const</span> dropDragRef <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> drop<span class="token punctuation">.</span><span class="token function">dropRef</span><span class="token punctuation">(</span>drag<span class="token punctuation">.</span>dragRef<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>dropDragRef<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
	
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="class下使用" tabindex="-1"><a class="header-anchor" href="#class下使用" aria-hidden="true">#</a> class下使用</h2><p>不是很推荐在<code>class</code>下使用，因为使用起来相对繁琐，但是<code>easy-dnd/react</code>依然提供了对应的方法</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  useDrag<span class="token punctuation">,</span>
  useDrop<span class="token punctuation">,</span>
  Drop<span class="token punctuation">,</span>
  Drag
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;easy-dnd/react&#39;</span>

<span class="token keyword">class</span> <span class="token class-name">DropDrag</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>

  <span class="token comment">// 注入上下文</span>
  <span class="token keyword">static</span> contextType <span class="token operator">=</span> DndContext

  <span class="token comment">// Drop实例</span>
  dropInstance <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token comment">// Drag实例</span>
  dragInstance <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createDragInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createDropInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/** 
   * 创建drag实例
   * @param context 拖拽上下文
   */</span>
  <span class="token function-variable function">createDragInstance</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dragInstance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Drag</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span>
        context
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/** 
   * 创建drop实例
   * @param context     拖拽上下文
   */</span>
  <span class="token function-variable function">createDropInstance</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dropInstance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Drop</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        context<span class="token punctuation">,</span>
        <span class="token literal-property property">acceptType</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token string">&#39;A&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> dragInstance<span class="token punctuation">,</span> dropInstance <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
    dragInstance <span class="token operator">&amp;&amp;</span> dragInstance<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    dropInstance <span class="token operator">&amp;&amp;</span> dropInstance<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> dragInstance<span class="token punctuation">,</span> dropInstance <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
    dragInstance <span class="token operator">&amp;&amp;</span> dragInstance<span class="token punctuation">.</span><span class="token function">unSubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    dropInstance <span class="token operator">&amp;&amp;</span> dropInstance<span class="token punctuation">.</span><span class="token function">unSubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function-variable function">render</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>dragInstance<span class="token punctuation">.</span>dragRef<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>dropInstance<span class="token punctuation">.</span>dragRef<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>

  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),c=[e];function o(i,l){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","react.html.vue"]]);export{r as default};
