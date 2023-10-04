import{_ as e,r as c,o as r,c as l,a as s,d as n,w as t,b as p,e as o}from"./app-d46ce3b0.js";const u={},i=o(`<h1 id="vue-api" tabindex="-1"><a class="header-anchor" href="#vue-api" aria-hidden="true">#</a> Vue API</h1><h2 id="dndprovier" tabindex="-1"><a class="header-anchor" href="#dndprovier" aria-hidden="true">#</a> DndProvier</h2><p>vue拖拽作用域组件</p><ul><li>类型</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> DndProvider<span class="token operator">:</span> DefineComponent<span class="token operator">&lt;</span>
  <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 拖拽类型 */</span>
    type<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token constant">DND_MODE</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** dragEnter延时时间 */</span>
    delay<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> NumberConstructor<span class="token punctuation">;</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token operator">&gt;</span>
</code></pre></div><ul><li>参考</li></ul>`,6),k=o(`<h2 id="drag" tabindex="-1"><a class="header-anchor" href="#drag" aria-hidden="true">#</a> Drag</h2><p>继承至 DragCore，扩展 dragRef 方法</p><ul><li>类型</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Drag<span class="token operator">&lt;</span>Data <span class="token operator">=</span> <span class="token builtin">any</span><span class="token punctuation">,</span> Rubbish <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">DragCore<span class="token operator">&lt;</span>Data<span class="token punctuation">,</span> Rubbish<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token function-variable function">dragRef</span><span class="token operator">:</span> <span class="token punctuation">(</span>dom<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="drop" tabindex="-1"><a class="header-anchor" href="#drop" aria-hidden="true">#</a> Drop</h2><p>继承至 DropCore，扩展 dropRef 方法</p><ul><li>类型</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Drop<span class="token operator">&lt;</span>Data <span class="token operator">=</span> <span class="token builtin">any</span><span class="token punctuation">,</span> Rubbish <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">DropCore<span class="token operator">&lt;</span>Data<span class="token punctuation">,</span> Rubbish<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
    dropRef<span class="token operator">:</span> <span class="token punctuation">(</span>forwardRef<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> Drag<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token string">&#39;dragRef&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>dom<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="usedrag" tabindex="-1"><a class="header-anchor" href="#usedrag" aria-hidden="true">#</a> useDrag</h2><p>创建Drag对象</p><ul><li>类型</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">IDragHooksParams<span class="token operator">&lt;</span>Data<span class="token punctuation">,</span> Rubbish<span class="token operator">&gt;</span></span> <span class="token operator">=</span> Omit<span class="token operator">&lt;</span>IDragCoreConstructorParams<span class="token operator">&lt;</span>Data<span class="token punctuation">,</span> Rubbish<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token string">&#39;config&#39;</span><span class="token operator">&gt;</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
    config<span class="token operator">:</span> Omit<span class="token operator">&lt;</span>IDragCoreConstructorParams<span class="token operator">&lt;</span>Data<span class="token punctuation">,</span> Rubbish<span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token string">&#39;config&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;context&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">useDrag</span><span class="token generic class-name"><span class="token operator">&lt;</span>Data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Rubbish <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>params<span class="token operator">:</span> IDragHooksParams<span class="token operator">&lt;</span>Data<span class="token punctuation">,</span> Rubbish<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> Drag<span class="token operator">&lt;</span>Data<span class="token punctuation">,</span> Rubbish<span class="token operator">&gt;</span>
</code></pre></div><ul><li>参考</li></ul>`,13),d=o(`<h2 id="usedrop" tabindex="-1"><a class="header-anchor" href="#usedrop" aria-hidden="true">#</a> useDrop</h2><p>创建Drop对象</p><ul><li>类型</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">IDropHooksParams<span class="token operator">&lt;</span>Data<span class="token punctuation">,</span> Rubbish<span class="token operator">&gt;</span></span> <span class="token operator">=</span> Omit<span class="token operator">&lt;</span>IDropCoreConstructorParams<span class="token operator">&lt;</span>Data<span class="token punctuation">,</span> Rubbish<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token string">&#39;config&#39;</span><span class="token operator">&gt;</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
    config<span class="token operator">:</span> Omit<span class="token operator">&lt;</span>IDropCoreConstructorParams<span class="token operator">&lt;</span>Data<span class="token punctuation">,</span> Rubbish<span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token string">&#39;config&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;context&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">useDrop</span><span class="token generic class-name"><span class="token operator">&lt;</span>Data<span class="token punctuation">,</span> Rubbish<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>params<span class="token operator">:</span> IDropHooksParams<span class="token operator">&lt;</span>Data<span class="token punctuation">,</span> Rubbish<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> Drop<span class="token operator">&lt;</span>Data<span class="token punctuation">,</span> Rubbish<span class="token operator">&gt;</span>
</code></pre></div><ul><li>参考</li></ul>`,5);function g(h,b){const a=c("RouterLink");return r(),l("div",null,[i,s("p",null,[n(a,{to:"/vue.html#dndprovider"},{default:t(()=>[p("Vue下使用 > DndProvider")]),_:1})]),k,s("p",null,[n(a,{to:"/vue.html#usedrag"},{default:t(()=>[p("Vue下使用 > hooks > useDrag")]),_:1})]),d,s("p",null,[n(a,{to:"/vue.html#usedrop"},{default:t(()=>[p("Vue下使用 > hooks > useDrop")]),_:1})])])}const m=e(u,[["render",g],["__file","vue.html.vue"]]);export{m as default};