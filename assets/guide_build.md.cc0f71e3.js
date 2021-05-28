import{o as n,c as a,a as s}from"./app.25729eba.js";const t='{"title":"배포 버전으로 빌드하기","description":"","frontmatter":{},"headers":[{"level":2,"title":"브라우저 지원 현황","slug":"브라우저-지원-현황"},{"level":2,"title":"Public Base Path","slug":"public-base-path"},{"level":2,"title":"빌드 커스터마이즈하기","slug":"빌드-커스터마이즈하기"},{"level":2,"title":"Multi-Page App","slug":"multi-page-app"},{"level":2,"title":"Library 모드","slug":"library-모드"}],"relativePath":"guide/build.md","lastUpdated":1622179076984}',p={},e=s('<h1 id="배포-버전으로-빌드하기"><a class="header-anchor" href="#배포-버전으로-빌드하기" aria-hidden="true">#</a> 배포 버전으로 빌드하기</h1><p>앱을 어느정도 완성하셨나요? 배포 버전으로 빌드하고자 한다면 <code>vite build</code> 명령을 실행해주세요. 빌드 시 기본적으로 <code>&lt;root&gt;/index.html</code> 파일이 빌드를 위한 진입점(Entry point)으로 사용되며, 정적 호스팅을 위한 형태로 진행됩니다. 추가적으로, GitHub Pages와 같은 정적 호스팅 서비스를 위한 빌드 방법을 알고싶다면 <a href="./static-deploy.html">정적 사이트 배포하기</a> 섹션을 참고해주세요.</p><h2 id="브라우저-지원-현황"><a class="header-anchor" href="#브라우저-지원-현황" aria-hidden="true">#</a> 브라우저 지원 현황</h2><p>빌드된 배포 버전의 경우, 모던 JavaScript를 지원하는 브라우저를 타깃으로 합니다. 따라서 <em>기본적으로</em> 모든 코드는 <a href="https://caniuse.com/es6-module" target="_blank" rel="noopener noreferrer">네이티브 ESM 태그를 지원하는 브라우저</a>를 타깃으로 변환됩니다.</p><ul><li>Chrome &gt;=61</li><li>Firefox &gt;=60</li><li>Safari &gt;=11</li><li>Edge &gt;=16</li></ul><p>물론 <a href="https://github.com/GoogleChromeLabs/dynamic-import-polyfill" target="_blank" rel="noopener noreferrer">Dynamic Import 폴리필</a>은 자동으로 포함됩니다.</p><p>만약 JavaScript 타깃을 지정하고자 한다면, <a href="/config/#build-target"><code>build.target</code> 설정</a>을 이용해주세요. 다만 버전은 최소한 <code>es2015</code> 이상이어야 합니다.</p><p>위에서 언급되는 <em>&#39;기본적으로&#39;</em> 라는 말의 의미를 잠깐 설명하자면, Vite은 오로지 구분 변환만 진행할 뿐 <strong>폴리필을 다루지 않는다는 말</strong> 입니다. 따라서 만약 폴리필을 생각해야 할 경우, User Agent를 기반으로 자동으로 폴리필을 생성해주는 <a href="https://polyfill.io/v3/" target="_blank" rel="noopener noreferrer">Polyfill.io</a>를 이용해주세요.</p><p>레거시 브라우저의 경우 <a href="https://github.com/vitejs/vite/tree/main/packages/plugin-legacy" target="_blank" rel="noopener noreferrer">@vitejs/plugin-legacy</a> 플러그인을 이용할 수 있습니다. 이 플러그인을 사용하면 자동으로 레거시 버전에 대한 청크를 생성하게 되고, 이를 통해 레거시 브라우저 또한 Vite으로 빌드된 앱을 이용할 수 있게 됩니다. 참고로, 생성된 레거시 청크는 브라우저가 ESM을 지원하지 않는 경우에만 불러오게 됩니다.</p><h2 id="public-base-path"><a class="header-anchor" href="#public-base-path" aria-hidden="true">#</a> Public Base Path</h2><ul><li><a href="./assets.html">에셋 가져오기</a> 섹션과 관련이 있는 내용입니다.</li></ul><p>만약 배포하고자 하는 디렉터리가 루트 디렉터리가 아닌가요? 간단히 <a href="/config/#base"><code>base</code> 설정</a>을 이용해 프로젝트의 루트가 될 디렉터리를 명시해 줄 수 있습니다. 또는 <code>vite build --base=/my/public/path</code> 명령과 같이 커맨드 라인에서도 지정이 가능합니다.</p><p>JS(<code>import</code>), CSS(<code>url()</code>), 그리고 <code>.html</code> 파일에서 참조되는 에셋 파일의 URL들은 빌드 시 이 Base Path를 기준으로 가져올 수 있도록 자동으로 맞춰지게 됩니다.</p><p>만약 동적으로 에셋의 URL을 생성해야 하는 경우라면, <code>import.<wbr>meta.env.BASE_URL</code>을 이용해주세요. 이 상수는 빌드 시 Public Base Path로 변환되어 이를 이용해 동적으로 가져오려는 에셋에 대한 URL을 생성할 수 있습니다. 다만 정확히 <code>import.<wbr>meta.env.BASE_URL</code>과 동일한 문자열에 대해 치환하는 방식이며, <code>import.<wbr>meta.env[&#39;BASE_URL&#39;]</code>과 같은 경우 Public Base Path로 치환되지 않는다는 것을 유의해주세요.</p><h2 id="빌드-커스터마이즈하기"><a class="header-anchor" href="#빌드-커스터마이즈하기" aria-hidden="true">#</a> 빌드 커스터마이즈하기</h2><p>빌드와 관련된 커스터마이즈는 <a href="/config/#build-options">build 설정</a>을 통해 가능합니다. 특별히 알아두어야 할 것이 하나 있는데, <a href="https://rollupjs.org/guide/en/#big-list-of-options" target="_blank" rel="noopener noreferrer">Rollup 옵션</a>을 <code>build.rollupOptions</code>에 명시해 사용이 가능합니다.</p><div class="language-js"><pre><code><span class="token comment">// vite.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  build<span class="token operator">:</span> <span class="token punctuation">{</span>\n    rollupOptions<span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token comment">// https://rollupjs.org/guide/en/#big-list-of-options</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>예를 들어, 여러 Rollup 빌드 결과(Output)를 위해 빌드 플러그인을 등록할 수도 있습니다.</p><h2 id="multi-page-app"><a class="header-anchor" href="#multi-page-app" aria-hidden="true">#</a> Multi-Page App</h2><p>아래와 같은 구조의 소스 코드를 갖고 있다고 가정해봅시다.</p><div class="language-"><pre><code>├── package.json\n├── vite.config.js\n├── index.html\n├── main.js\n└── nested\n    ├── index.html\n    └── nested.js\n</code></pre></div><p>개발 시, <code>/nested/</code> 디렉터리 아래에 있는 페이지는 간단히 <code>/nested/</code>로 참조가 가능합니다. 일반적인 정적 파일 서버와 다르지 않습니다.</p><p>빌드 시에는, 사용자가 접근할 수 있는 모든 <code>.html</code> 파일에 대해 아래와 같이 빌드 진입점이라 명시해줘야만 합니다.</p><div class="language-js"><pre><code><span class="token comment">// vite.config.js</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  build<span class="token operator">:</span> <span class="token punctuation">{</span>\n    rollupOptions<span class="token operator">:</span> <span class="token punctuation">{</span>\n      input<span class="token operator">:</span> <span class="token punctuation">{</span>\n        main<span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;index.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        nested<span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;nested/index.html&#39;</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="library-모드"><a class="header-anchor" href="#library-모드" aria-hidden="true">#</a> Library 모드</h2><p>만약 브라우저 기반의 라이브러리를 개발하고 있다면, 라이브러리 갱신 시마다 테스트 페이지에서 이를 불러오는 데 많은 시간을 소모할 것입니다. Vite은 <code>index.html</code>을 이용해 좀 더 나은 개발 환경(경험)을 마련해줍니다.</p><p>라이브러리 배포 시점에서, <a href="/config/#build-lib"><code>build.lib</code> 설정 옵션</a>을 이용해보세요. 또한 라이브러리에 포함하지 않을 디펜던시를 명시할 수도 있습니다. <code>vue</code>나 <code>react</code> 같이 말이죠.</p><div class="language-js"><pre><code><span class="token comment">// vite.config.js</span>\n<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  build<span class="token operator">:</span> <span class="token punctuation">{</span>\n    lib<span class="token operator">:</span> <span class="token punctuation">{</span>\n      entry<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;lib/main.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      name<span class="token operator">:</span> <span class="token string">&#39;MyLib&#39;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    rollupOptions<span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 라이브러리에 포함하지 않을 디펜던시를 명시해주세요</span>\n      external<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      output<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 라이브러리 외부에 존재하는 디펜던시를 위해</span>\n        <span class="token comment">// UMD(Universal Module Definition) 번들링 시 사용될 전역 변수를 명시할 수도 있습니다.</span>\n        globals<span class="token operator">:</span> <span class="token punctuation">{</span>\n          vue<span class="token operator">:</span> <span class="token string">&#39;Vue&#39;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>위와 같은 Rollup 설정과 함께 <code>vite build</code> 명령을 실행하게 되면, <code>es</code> 및 <code>umd</code> 두 가지의 포맷으로 번들링 과정이 진행되게 됩니다(이에 대해 조금 더 자세히 알고 싶다면 <code>build.lib</code> 설정을 참고해주세요).</p><div class="language-"><pre><code>$ vite build\nbuilding for production...\n[write] my-lib.es.js 0.08kb, brotli: 0.07kb\n[write] my-lib.umd.js 0.30kb, brotli: 0.16kb\n</code></pre></div><p><code>package.json</code>에는 아래와 같이 사용할 라이브러리를 명시해주세요.</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-lib&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;dist&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist/my-lib.umd.js&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist/my-lib.es.js&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;exports&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;.&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;import&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist/my-lib.es.js&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;require&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist/my-lib.umd.js&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',32);p.render=function(s,t,p,o,c,l){return n(),a("div",null,[e])};export default p;export{t as __pageData};
