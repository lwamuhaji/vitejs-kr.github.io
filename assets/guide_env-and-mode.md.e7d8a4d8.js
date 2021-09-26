import{o as e,c as o,d as n}from"./app.cd01fd1f.js";const a='{"title":"Vite의 환경 변수와 모드","description":"","frontmatter":{"title":"Vite의 환경 변수와 모드"},"headers":[{"level":2,"title":"환경 변수","slug":"env-variables"},{"level":3,"title":"프로덕션에서의 환경 변수","slug":"production-replacement"},{"level":2,"title":".env 파일들","slug":"env-files"},{"level":3,"title":"인텔리센스","slug":"intellisense"},{"level":2,"title":"모드","slug":"modes"}],"relativePath":"guide/env-and-mode.md","lastUpdated":1632641254071}',t={},s=n('<h1 id="env-variables-and-modes"><a class="header-anchor" href="#env-variables-and-modes" aria-hidden="true">#</a>Vite의 환경 변수와 모드</h1><h2 id="env-variables"><a class="header-anchor" href="#env-variables" aria-hidden="true">#</a>환경 변수</h2><p>Vite는 <strong><code>import.<wbr>meta.env</code></strong> 객체를 이용해 환경 변수에 접근할 수 있도록 하고 있으며, 아래와 같은 환경 변수에 접근이 가능합니다.</p><ul><li><p><strong><code>import.<wbr>meta.env.MODE</code></strong>: {string} 현재 앱이 동작하고 있는 <a href="#modes">모드</a>입니다.</p></li><li><p><strong><code>import.<wbr>meta.env.BASE_URL</code></strong>: {string} 앱이 제공되는 베이스 URL이며, 이 값은 <a href="/config/#base"><code>base</code> 설정</a>에 의해 결정됩니다.</p></li><li><p><strong><code>import.<wbr>meta.env.PROD</code></strong>: {boolean} 앱이 프로덕션에서 실행 중인지 여부입니다.</p></li><li><p><strong><code>import.<wbr>meta.env.DEV</code></strong>: {boolean} 앱이 개발 환경에서 실행 중인지 여부이며, 항상 <code>import.<wbr>meta.env.PROD</code>와 반대되는 값을 가집니다.</p></li></ul><h3 id="production-replacement"><a class="header-anchor" href="#production-replacement" aria-hidden="true">#</a>프로덕션에서의 환경 변수</h3><p>프로덕션에서는 환경 변수가 모두 <strong>정적으로 교체됩니다</strong>. 따라서 항상 환경 변수는 정적으로 참조해야만 하며, <code>import.<wbr>meta.env[key]</code>와 같은 동적 참조는 작동하지 않습니다.</p><p>JavaScript 문자열 및 Vue 템플릿에서도 마찬가지로 환경 변수는 모두 정적으로 교체됩니다. 이로 인해 환경 변수와 동일한 네이밍을 갖지만 실제로는 환경 변수가 아닌 경우, 의도하지 않은 동작이 발생될 수 있습니다. 가령 <code>&quot;process.<wbr>env.NODE_ENV:&quot;</code>가 <code>&quot;&quot;development&quot;: &quot;</code>로 교체되는 경우, <code>Missing Semicolon</code> 또는 <code>Unexpected token</code>과 같은 오류가 표시됩니다.</p><ul><li><p>JavaScript 문자열의 경우, <code>&#39;import.<wbr>meta\\u200b.env.MODE&#39;</code>와 같이 너비가 0인 공백으로 문자열을 분리</p></li><li><p>Vue 템플릿 또는 JavaScript 문자열로 컴파일되는 HTML의 경우, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr" target="_blank" rel="noopener noreferrer"><code>&lt;wbr&gt;</code> 태그</a>를 이용 (<code>import.<wbr>meta.&lt;wbr&gt;env.MODE</code>)</p></li></ul><h2 id="env-files"><a class="header-anchor" href="#env-files" aria-hidden="true">#</a><code>.env</code>파일들</h2><p>Vite는 <a href="https://github.com/motdotla/dotenv" target="_blank" rel="noopener noreferrer">dotenv</a>를 이용해 <a href="/config/#envdir">환경 변수가 저장된 디렉터리</a> 내 아래의 파일에서 환경 변수를 가져옵니다.</p><div class="language-"><pre><code>.env                # 모든 상황에서 사용될 환경 변수\n.env.local          # 모든 상황에서 사용되나, 로컬 개발 환경에서만 사용될(Git에 의해 무시될) 환경 변수\n.env.[mode]         # 특정 모드에서만 사용될 환경 변수\n.env.[mode].local   # 특정 모드에서만 사용되나, 로컬 개발 환경에서만 사용될(Git에 의해 무시될) 환경 변수\n</code></pre></div><p>마찬가지로 이렇게 설정된 환경 변수는 <code>import.<wbr>meta.env</code> 객체를 통해 접근이 가능합니다.</p><p>참고로, Vite에서 접근 가능한 환경 변수는 일반 환경 변수와 구분을 위해 <code>VITE_</code> 라는 접두사를 붙여 나타냅니다. 가령, 아래와 같이 환경 변수를 정의했다면:</p><div class="language-"><pre><code>DB_PASSWORD=foobar\nVITE_SOME_KEY=123\n</code></pre></div><p><code>VITE_SOME_KEY</code> 변수만이 <code>import.<wbr>meta.env.VITE_SOME_KEY</code>로 접근이 가능합니다. (<code>DB_PASSWORD</code>는 노출되지 않습니다.)</p><p>만약 환경 변수에 대한 접미사(Prefix)를 커스터마이즈 하고자 한다면, <a href="/config/index.html#envprefix">envPrefix</a> 옵션을 참고해주세요.</p><div class="warning custom-block"><p class="custom-block-title">보안 사항</p><ul><li><p><code>.env.*.local</code> 파일은 오로지 로컬에서만 접근이 가능한 파일이며, 데이터베이스 비밀번호와 같은 민감한 정보를 이 곳에 저장하도록 합니다. 또한 <code>.gitignore</code> 파일에 <code>.local</code> 파일을 명시해 Git에 체크인되는 것을 방지하도록 합니다.</p></li><li><p>Vite 소스 코드에 노출되는 모든 환경 변수는 번들링 시 포함되게 됩니다. 따라서, <code>VITE_*</code> 환경 변수에는 민감한 정보들이 <em>포함되어서는 안됩니다</em>.</p></li></ul></div><h3 id="intellisense"><a class="header-anchor" href="#intellisense" aria-hidden="true">#</a>인텔리센스</h3><p>기본적으로, Vite는 <code>import.<wbr>meta.env</code>에 대한 타입 정의를 제공하고 있습니다. 물론 <code>.env.[mode]</code> 파일에서 더 많은 사용자 정의 환경 변수를 정의할 수 있으며, <code>VITE_</code> 접두사가 붙은 사용자 정의 환경 변수에 대해서는 TypeScript 인텔리센스 정의가 가능합니다.</p><p><code>src</code> 디렉터리 내 <code>env.d.ts</code> 파일을 생성한 후, 아래와 같이 <code>ImportMetaEnv</code>를 정의하여 <code>VITE_</code> 환경 변수에 대한 타입을 정의할 수 있습니다.</p><div class="language-typescript"><pre><code><span class="token keyword">interface</span> <span class="token class-name">ImportMetaEnv</span> <span class="token keyword">extends</span> <span class="token class-name">Readonly<span class="token operator">&lt;</span>Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;&gt;</span></span> <span class="token punctuation">{</span>\n  <span class="token keyword">readonly</span> <span class="token constant">VITE_APP_TITLE</span><span class="token operator">:</span> <span class="token builtin">string</span>\n  <span class="token comment">// 다른 환경 변수들에 대한 타입 정의...</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">interface</span> <span class="token class-name">ImportMeta</span> <span class="token punctuation">{</span>\n  <span class="token keyword">readonly</span> env<span class="token operator">:</span> ImportMetaEnv\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="modes"><a class="header-anchor" href="#modes" aria-hidden="true">#</a>모드</h2><p>기본적으로, <code>dev</code> 명령으로 실행되는 개발 서버는 <code>development</code> 모드로 동작하고, <code>serve</code> 명령으로 실행되는 경우에는 <code>production</code> 모드로 동작합니다.</p><p>즉, <code>vite build</code> 명령을 실행하게 되면 <code>.env.production</code>에 정의된 환경 변수를 불러오게 됩니다.</p><div class="language-"><pre><code># .env.production\nVITE_APP_TITLE=My App\n</code></pre></div><p>앱 내에서는 <code>My App</code> 이라는 문자열이 <code>import.<wbr>meta.env.VITE_APP_TITLE</code> 환경 변수를 통해 나타나지게 됩니다.</p><p>이 <strong>모드</strong> 라는 개념은 단지 개발(<code>development</code>)이나 배포(<code>production</code>) 뿐만 아니라 더 넓은 개념을 다루고 있습니다. 가령, 배포 모드와 비슷한(그러나 일부 다른 환경 변수를 갖는) &quot;staging&quot; 이라는 모드가 필요하다면 어떻게 해야 할까요?</p><p>방법은 간단하게도, 그저 <code>--mode</code> 옵션을 전달해 사용할 모드를 지정하면 됩니다. 예를 들어 &quot;staging&quot; 모드로 서버를 동작(배포)하고 싶다면 아래와 같이 명령을 실행해주면 됩니다.</p><div class="language-bash"><pre><code>vite build --mode staging\n</code></pre></div><p>&quot;staging&quot; 모드에서 사용될 환경 변수는 <code>.env.staging</code> 파일에 정의합니다.</p><div class="language-"><pre><code># .env.staging\nNODE_ENV=production\nVITE_APP_TITLE=My App (staging)\n</code></pre></div><p>위와 같이 환경 변수를 설정하게 되면 &quot;staging&quot; 모드에서는 <code>My App (staging)</code> 이라는 문자열이 <code>import.<wbr>meta.env.VITE_APP_TITLE</code> 환경 변수를 통해 나타나지게 됩니다.</p>',32);t.render=function(n,a,t,d,c,r){return e(),o("div",null,[s])};export default t;export{a as __pageData};
