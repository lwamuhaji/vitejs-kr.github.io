import{_ as e,c as a,o,a as s}from"./app.9b20fbb0.js";const g=JSON.parse('{"title":"v2\uC5D0\uC11C \uB9C8\uC774\uADF8\uB808\uC774\uC158\uD558\uAE30","description":"","frontmatter":{"title":"v2\uC5D0\uC11C \uB9C8\uC774\uADF8\uB808\uC774\uC158\uD558\uAE30"},"headers":[{"level":2,"title":"\uC9C0\uC6D0\uD558\uB294 Node \uBC84\uC804","slug":"node-support"},{"level":2,"title":"\uCD5C\uC2E0 \uBE0C\uB77C\uC6B0\uC800 \uAE30\uC900 \uBCC0\uACBD","slug":"modern-browser-baseline-change"},{"level":2,"title":"\uC124\uC815 \uC635\uC158 \uAD00\uB828 \uBCC0\uACBD \uC0AC\uD56D","slug":"config-options-changes"},{"level":2,"title":"\uC544\uD0A4\uD14D\uCC98 \uBCC0\uACBD\uACFC \uB808\uAC70\uC2DC \uC635\uC158\uB4E4","slug":"architecture-changes-and-legacy-options"},{"level":2,"title":"\uAC1C\uBC1C \uC11C\uBC84 \uAD00\uB828 \uBCC0\uACBD \uC0AC\uD56D","slug":"dev-server-changes"},{"level":3,"title":"SSR \uAD00\uB828 \uBCC0\uACBD \uC0AC\uD56D","slug":"ssr-changes"},{"level":2,"title":"\uC77C\uBC18\uC801\uC778 \uBCC0\uACBD \uC0AC\uD56D","slug":"general-changes"},{"level":3,"title":"import.meta.glob","slug":"import-meta-glob"},{"level":3,"title":"WebAssembly \uC9C0\uC6D0 \uAD00\uB828","slug":"webassembly-support"},{"level":3,"title":"\uC790\uB3D9\uC73C\uB85C https \uC778\uC99D\uC11C \uC0DD\uC131\uD558\uAE30","slug":"automatic-https-certificate-generation"},{"level":2,"title":"\uC2E4\uD5D8\uC801 \uAE30\uB2A5","slug":"experimental"},{"level":3,"title":"\uBE4C\uB4DC \uC2DC esbuild \uB514\uD39C\uB358\uC2DC \uCD5C\uC801\uD654 \uC0AC\uC6A9\uD558\uAE30","slug":"using-esbuild-deps-optimization-at-build-time"},{"level":2,"title":"Advanced","slug":"advanced"},{"level":2,"title":"v1\uC5D0\uC11C \uB9C8\uC774\uADF8\uB808\uC774\uC158\uD558\uAE30","slug":"migration-from-v1"}],"relativePath":"guide/migration.md"}'),l={name:"guide/migration.md"},t=s(`<h1 id="migrating-from-v2" tabindex="-1">v2\uC5D0\uC11C \uB9C8\uC774\uADF8\uB808\uC774\uC158\uD558\uAE30 <a class="header-anchor" href="#migrating-from-v2" aria-hidden="true">#</a></h1><h2 id="node-support" tabindex="-1">\uC9C0\uC6D0\uD558\uB294 Node \uBC84\uC804 <a class="header-anchor" href="#node-support" aria-hidden="true">#</a></h2><p>Vite\uB294 EOL(End-of-life)\uC5D0 \uB3C4\uB2EC\uD55C Node v12\uB97C \uB354 \uC774\uC0C1 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. Node \uBC84\uC804 14.18+ \uC774\uC0C1\uC744 \uC0AC\uC6A9\uD574\uC8FC\uC138\uC694.</p><h2 id="modern-browser-baseline-change" tabindex="-1">\uCD5C\uC2E0 \uBE0C\uB77C\uC6B0\uC800 \uAE30\uC900 \uBCC0\uACBD <a class="header-anchor" href="#modern-browser-baseline-change" aria-hidden="true">#</a></h2><p>\uD504\uB85C\uB355\uC158 \uBC84\uC804\uC73C\uB85C \uBE4C\uB4DC \uBC0F \uBC88\uB4E4\uB9C1 \uC2DC, \uC18C\uC2A4 \uCF54\uB4DC\uAC00 \uCD5C\uC2E0 JavaScript\uB97C \uC9C0\uC6D0\uD558\uB294 \uD658\uACBD\uC5D0\uC11C \uB3D9\uC791\uD55C\uB2E4\uACE0 \uAC00\uC815\uD558\uACE0 \uC9C4\uD589\uB429\uB2C8\uB2E4. \uAE30\uC874\uC801\uC73C\uB85C Vite\uB294 <a href="https://caniuse.com/es6-module" target="_blank" rel="noopener noreferrer">\uB124\uC774\uD2F0\uBE0C ES \uBAA8\uB4C8</a>, <a href="https://caniuse.com/es6-module-dynamic-import" target="_blank" rel="noopener noreferrer">\uB124\uC774\uD2F0\uBE0C ESM\uC758 \uB3D9\uC801 Import</a>, \uADF8\uB9AC\uACE0 <a href="https://caniuse.com/mdn-javascript_statements_import_meta" target="_blank" rel="noopener noreferrer"><code>import.<wbr>meta</code></a>\uB97C \uC9C0\uC6D0\uD558\uB294 \uBE0C\uB77C\uC6B0\uC800\uB97C \uB300\uC0C1\uC73C\uB85C \uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4:</p><ul><li>Chrome &gt;=87</li><li>Firefox &gt;=78</li><li>Safari &gt;=13</li><li>Edge &gt;=88</li></ul><p>\uB9CC\uC57D \uC774\uBCF4\uB2E4 \uC774\uC804 \uBC84\uC804\uC758 \uBE0C\uB77C\uC6B0\uC800\uB97C \uB300\uC0C1\uC73C\uB85C \uD55C\uB2E4\uBA74 <a href="https://github.com/vitejs/vite/tree/main/packages/plugin-legacy" target="_blank" rel="noopener noreferrer">@vitejs/plugin-legacy</a> \uD50C\uB7EC\uADF8\uC778\uC744 \uC0AC\uC6A9\uD574\uC8FC\uC138\uC694. \uC774 \uD50C\uB7EC\uADF8\uC778\uC740 \uC790\uB3D9\uC73C\uB85C \uB808\uAC70\uC2DC \uCCAD\uD06C \uBC0F ES \uC5B8\uC5B4 \uAE30\uB2A5\uC5D0 \uB300\uD55C \uD3F4\uB9AC\uD544\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4.</p><h2 id="config-options-changes" tabindex="-1">\uC124\uC815 \uC635\uC158 \uAD00\uB828 \uBCC0\uACBD \uC0AC\uD56D <a class="header-anchor" href="#config-options-changes" aria-hidden="true">#</a></h2><ul><li><p>\uC544\uB798\uC758 \uC635\uC158\uC740 \uC774\uBBF8 Vite v2\uC5D0\uC11C \uC0AC\uC6A9\uB418\uC9C0 \uC54A\uB294 \uC635\uC158\uC774\uC5C8\uC73C\uBA70, v3\uC5D0\uC11C\uB294 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4:</p><ul><li><code>alias</code> (<a href="./../config/shared-options.html#resolve-alias"><code>resolve.alias</code></a>\uB85C \uBCC0\uACBD)</li><li><code>dedupe</code> (<a href="./../config/shared-options.html#resolve-dedupe"><code>resolve.dedupe</code></a>\uB85C \uBCC0\uACBD)</li><li><code>build.base</code> (<a href="./../config/shared-options.html#base"><code>base</code></a>\uB85C \uBCC0\uACBD)</li><li><code>build.brotliSize</code> (<a href="./../config/build-options.html#build-reportcompressedsize"><code>build.reportCompressedSize</code></a>\uB85C \uBCC0\uACBD)</li><li><code>build.cleanCssOptions</code> (Vite\uB294 \uC774\uC81C CSS \uC555\uCD95 \uC2DC esbuild\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4)</li><li><code>polyfillDynamicImport</code> (\uB3D9\uC801 Import\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uBE0C\uB77C\uC6B0\uC800\uB294 <a href="https://github.com/vitejs/vite/tree/main/packages/plugin-legacy" target="_blank" rel="noopener noreferrer"><code>@vitejs/plugin-legacy</code></a> \uD50C\uB7EC\uADF8\uC778\uC744 \uC0AC\uC6A9\uD574\uC8FC\uC138\uC694)</li><li><code>optimizeDeps.keepNames</code> (<a href="./../config/dep-optimization-options.html#optimizedeps-esbuildoptions"><code>optimizeDeps.esbuildOptions.keepNames</code></a>\uB85C \uBCC0\uACBD)</li></ul></li></ul><h2 id="architecture-changes-and-legacy-options" tabindex="-1">\uC544\uD0A4\uD14D\uCC98 \uBCC0\uACBD\uACFC \uB808\uAC70\uC2DC \uC635\uC158\uB4E4 <a class="header-anchor" href="#architecture-changes-and-legacy-options" aria-hidden="true">#</a></h2><p>\uC774 \uC139\uC158\uC5D0\uC11C\uB294 Vite v3 \uC544\uD0A4\uD14D\uCC98\uC5D0 \uB300\uD55C \uAC00\uC7A5 \uD070 \uBCC0\uACBD \uC0AC\uD56D\uC5D0 \uB300\uD574 \uC124\uBA85\uD569\uB2C8\uB2E4. \uB9CC\uC57D \uD638\uD658\uC131 \uBB38\uC81C\uAC00 \uC788\uB294 \uACBD\uC6B0, \uD504\uB85C\uC81D\uD2B8\uB97C v2\uC5D0\uC11C \uB9C8\uC774\uADF8\uB808\uC774\uC158 \uD560 \uC218 \uC788\uB3C4\uB85D Vite v2 \uC804\uB7B5\uC73C\uB85C \uB418\uB3CC\uB9AC\uB294 \uB808\uAC70\uC2DC \uC635\uC158\uC774 \uC874\uC7AC\uD569\uB2C8\uB2E4.</p><h2 id="dev-server-changes" tabindex="-1">\uAC1C\uBC1C \uC11C\uBC84 \uAD00\uB828 \uBCC0\uACBD \uC0AC\uD56D <a class="header-anchor" href="#dev-server-changes" aria-hidden="true">#</a></h2><p>Vite \uAC1C\uBC1C \uC11C\uBC84\uC758 \uAE30\uBCF8 \uD3EC\uD2B8 \uBC88\uD638\uB294 \uC774\uC81C 5173 \uC785\uB2C8\uB2E4. \uBB3C\uB860 <a href="./../config/server-options.html#server-port"><code>server.port</code></a> \uC635\uC158\uC744 \uC774\uC6A9\uD574 3000\uC73C\uB85C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>Vite \uAC1C\uBC1C \uC11C\uBC84\uC758 \uAE30\uBCF8 \uD638\uC2A4\uD2B8\uB294 \uC774\uC81C <code>localhost</code> \uC785\uB2C8\uB2E4. \uC774 \uC5ED\uC2DC <a href="./../config/server-options.html#server-host"><code>server.host</code></a> \uC635\uC158\uC744 \uC774\uC6A9\uD574 <code>127.0.0.1</code>\uB85C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h3 id="ssr-changes" tabindex="-1">SSR \uAD00\uB828 \uBCC0\uACBD \uC0AC\uD56D <a class="header-anchor" href="#ssr-changes" aria-hidden="true">#</a></h3><p>Vite v3\uB294 \uAE30\uBCF8\uC801\uC73C\uB85C SSR \uBE4C\uB4DC \uC2DC ESM\uC744 \uD0C0\uAE43\uC73C\uB85C \uD569\uB2C8\uB2E4. ESM\uC744 \uC0AC\uC6A9\uD558\uAC8C \uB418\uBA74 <a href="./../guide/ssr.html#ssr-externals">SSR \uC678\uBD80\uD654 \uD734\uB9AC\uC2A4\uD2F1</a>\uC740 \uB354 \uC774\uC0C1 \uD544\uC694\uD558\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC774\uC8E0. <a href="./../config/ssr-options.html#ssr-noexternal"><code>ssr.noExternal</code></a> \uC635\uC158\uC744 \uC774\uC6A9\uD574 SSR \uBC88\uB4E4\uC5D0 \uD3EC\uD568\uB420 \uB514\uD39C\uB358\uC2DC\uB97C \uC124\uC815\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C SSR\uC6A9 ESM\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uB294 \uACBD\uC6B0\uB77C\uBA74, <code>legacy.buildSsrCjsExternalHeuristics</code> \uC635\uC158\uC744 \uC774\uC6A9\uD574 Vite v2\uC640 \uB3D9\uC77C\uD55C \uC678\uBD80\uD654 \uBC29\uC2DD\uC744 \uC0AC\uC6A9\uD558\uB294 CJS \uBC88\uB4E4 \uC0DD\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.</p><p>\uB610\uD55C <a href="https://rollupjs.org/guide/en/#outputinlinedynamicimports" target="_blank" rel="noopener noreferrer"><code>build.rollupOptions.output.inlineDynamicImports</code></a> \uC635\uC158\uC740 \uC774\uC81C <code>ssr.target</code>\uC774 <code>&#39;node&#39;</code>\uC77C \uB54C \uAE30\uBCF8\uC801\uC73C\uB85C <code>false</code>\uAC00 \uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C Node.js \uBE4C\uB4DC \uC2DC <code>inlineDynamicImports</code>\uB85C \uC778\uD574 \uBC1C\uC0DD\uB418\uB294 \uC2E4\uD589 \uC21C\uC11C \uBCC0\uACBD\uC774\uB098 \uB2E8\uC77C \uD30C\uC77C\uB85C \uBC88\uB4E4\uB9C1\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p><h2 id="general-changes" tabindex="-1">\uC77C\uBC18\uC801\uC778 \uBCC0\uACBD \uC0AC\uD56D <a class="header-anchor" href="#general-changes" aria-hidden="true">#</a></h2><ul><li>SSR \uBC0F lib \uBAA8\uB4DC\uC5D0\uC11C \uBE4C\uB4DC\uB41C JS \uD30C\uC77C\uC758 \uD655\uC7A5\uC790\uB294 \uC774\uC81C \uD3EC\uB9F7\uACFC \uD328\uD0A4\uC9C0 \uD0C0\uC785\uC5D0 \uB530\uB77C \uC62C\uBC14\uB978 \uD655\uC7A5\uC790(<code>js</code>, <code>mjs</code>, \uB610\uB294 <code>cjs</code>)\uB97C \uAC16\uC2B5\uB2C8\uB2E4.</li><li>Terser\uB294 \uC774\uC81C \uC120\uD0DD\uC801\uC778(Optional) \uB514\uD39C\uB358\uC2DC\uC785\uB2C8\uB2E4. \uD544\uC694\uD55C \uACBD\uC6B0 <code>build.minify: &#39;terser&#39;</code> \uC635\uC158\uACFC \uD568\uAED8 \uC774 \uB514\uD39C\uB358\uC2DC\uB97C \uC124\uCE58\uD574\uC8FC\uC138\uC694.<div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm add -D terser</span></span>
<span class="line"></span></code></pre></div></li></ul><h3 id="import-meta-glob" tabindex="-1"><code>import.<wbr>meta.glob</code> <a class="header-anchor" href="#import-meta-glob" aria-hidden="true">#</a></h3><ul><li><p>Raw\uC5D0 \uB300\uD55C <a href="./features.html#glob-import-as"><code>import.<wbr>meta.glob</code></a> \uC635\uC158\uC774 <code>{ assert: { type: &#39;raw&#39; }}</code>\uC5D0\uC11C <code>{ as: &#39;raw&#39; }</code>\uC73C\uB85C \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4.</p></li><li><p><code>import.<wbr>meta.glob</code>\uC758 \uD0A4\uB294 \uC774\uC81C \uD604\uC7AC \uBAA8\uB4C8\uC5D0 \uC0C1\uB300\uC801\uC73C\uB85C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-diff"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \uD30C\uC77C: /foo/index.js</span></span>
<span class="line"><span style="color:#A6ACCD;">const modules = import.<wbr>meta.glob(&#39;../foo/*.js&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \uBCC0\uD658\uB41C \uCF54\uB4DC:</span></span>
<span class="line"><span style="color:#A6ACCD;">const modules = {</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;">  &#39;../foo/bar.js&#39;: () =&gt; {}</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">  &#39;./bar.js&#39;: () =&gt; {}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div></li><li><p><code>import.<wbr>meta.glob</code>\uACFC \uD568\uAED8 \uBCC4\uCE6D\uC744 \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uD0A4 \uAC12\uC774 \uD56D\uC0C1 \uC808\uB300\uC801\uC778 \uC704\uCE58\uB97C \uAC00\uB9AC\uD0A4\uAC8C \uB429\uB2C8\uB2E4.</p></li><li><p><code>import.<wbr>meta.globEager</code> \uC635\uC158\uC740 \uB354 \uC774\uC0C1 \uC0AC\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC774 \uB300\uC2E0 <code>import.<wbr>meta.glob(&#39;*&#39;, { eager: true })</code>\uC744 \uC0AC\uC6A9\uD574\uC8FC\uC138\uC694.</p></li></ul><h3 id="webassembly-support" tabindex="-1">WebAssembly \uC9C0\uC6D0 \uAD00\uB828 <a class="header-anchor" href="#webassembly-support" aria-hidden="true">#</a></h3><p><a href="https://github.com/WebAssembly/esm-integration" target="_blank" rel="noopener noreferrer">&quot;ESM integration for Wasm&quot;</a>\uACFC\uC758 \uD5A5\uD6C4 \uCDA9\uB3CC\uC744 \uBC29\uC9C0\uD558\uC9C0 \uC704\uD574 <code>import init from &#39;example.wasm&#39;</code> \uAD6C\uBB38\uC774 \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774 \uB300\uC2E0 <code>?init</code> \uC811\uBBF8\uC0AC\uB97C \uC0AC\uC6A9\uD574\uC8FC\uC138\uC694.</p><div class="language-diff"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;">import init from &#39;example.wasm&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">import init from &#39;example.wasm?init&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;">init().then((exports) =&gt; {</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">init().then(({ exports }) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  exports.test()</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"></span></code></pre></div><h3 id="automatic-https-certificate-generation" tabindex="-1">\uC790\uB3D9\uC73C\uB85C https \uC778\uC99D\uC11C \uC0DD\uC131\uD558\uAE30 <a class="header-anchor" href="#automatic-https-certificate-generation" aria-hidden="true">#</a></h3><p><code>https</code> \uC635\uC158\uC744 \uC0AC\uC6A9\uD560 \uB54C\uB294 \uC720\uD6A8\uD55C \uC778\uC99D\uC11C\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4. Vite v2\uC5D0\uC11C\uB294 \uC778\uC99D\uC11C\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC740 \uACBD\uC6B0 \uC790\uCCB4\uC801\uC73C\uB85C \uC11C\uBA85\uB41C \uC778\uC99D\uC11C\uB97C \uB9CC\uB4E0 \uB4A4 \uCE90\uC2F1\uD588\uC5C8\uC2B5\uB2C8\uB2E4. Vite v3\uBD80\uD130\uB294 \uC778\uC99D\uC11C\uB97C \uC9C1\uC811 \uC218\uB3D9\uC73C\uB85C \uC0DD\uC131\uD558\uB294 \uAC83\uC744 \uAD8C\uACE0\uD558\uC9C0\uB9CC, v2\uC758 \uC778\uC99D\uC11C \uC790\uB3D9 \uC0DD\uC131 \uBC29\uC2DD\uC744 \uACC4\uC18D \uC0AC\uC6A9\uD558\uACE0\uC790 \uD55C\uB2E4\uBA74 \uD504\uB85C\uC81D\uD2B8\uC5D0 <a href="https://github.com/vitejs/vite-plugin-basic-ssl" target="_blank" rel="noopener noreferrer">@vitejs/plugin-basic-ssl</a> \uD50C\uB7EC\uADF8\uC778\uC744 \uCD94\uAC00\uD574\uC8FC\uC138\uC694.</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> basicSsl </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vitejs/plugin-basic-ssl</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#82AAFF;">basicSsl</span><span style="color:#A6ACCD;">()]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="experimental" tabindex="-1">\uC2E4\uD5D8\uC801 \uAE30\uB2A5 <a class="header-anchor" href="#experimental" aria-hidden="true">#</a></h2><h3 id="using-esbuild-deps-optimization-at-build-time" tabindex="-1">\uBE4C\uB4DC \uC2DC esbuild \uB514\uD39C\uB358\uC2DC \uCD5C\uC801\uD654 \uC0AC\uC6A9\uD558\uAE30 <a class="header-anchor" href="#using-esbuild-deps-optimization-at-build-time" aria-hidden="true">#</a></h3><p>Vite v3\uC5D0\uC11C\uB294 esbuild\uB97C \uC0AC\uC6A9\uD574 \uBE4C\uB4DC \uC2DC \uB514\uD39C\uB358\uC2DC\uB97C \uCD5C\uC801\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uD65C\uC131\uD654\uD558\uBA74 Vite v2\uC5D0 \uC788\uC5C8\uB358 \uAC1C\uBC1C \uBC84\uC804\uACFC \uD504\uB85C\uB355\uC158 \uBC84\uC804 \uC0AC\uC774\uC758 \uC911\uC694\uD55C \uCC28\uC774\uC810 \uC911 \uD558\uB098\uAC00 \uC0AC\uB77C\uC9C0\uAC8C \uB429\uB2C8\uB2E4. esbuild\uB294 CJS \uD3EC\uB9F7\uC758 \uB514\uD39C\uB358\uC2DC\uB97C ESM\uC73C\uB85C \uBCC0\uD658\uD558\uAE30 \uB54C\uBB38\uC5D0 <a href="https://github.com/rollup/plugins/tree/master/packages/commonjs" target="_blank" rel="noopener noreferrer"><code>@rollupjs/plugin-commonjs</code></a>\uB294 \uB354 \uC774\uC0C1 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC544\uB3C4 \uB429\uB2C8\uB2E4.</p><p>\uC774 \uBE4C\uB4DC \uBC29\uC2DD\uC744 \uC0AC\uC6A9\uD558\uACE0\uC790 \uD55C\uB2E4\uBA74 <code>optimizeDeps.disabled</code> \uC635\uC158\uC758 \uAC12\uC744 <code>false</code>\uB85C \uC124\uC815\uD574\uC8FC\uC138\uC694(v3\uC758 \uAE30\uBCF8\uAC12\uC740 <code>disabled: &#39;build&#39;</code> \uC785\uB2C8\uB2E4). <code>@rollup/plugin-commonjs</code>\uB294 <code>build.commonjsOptions: { include: [] }</code>\uB85C \uC81C\uAC70\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="advanced" tabindex="-1">Advanced <a class="header-anchor" href="#advanced" aria-hidden="true">#</a></h2><p>\uC544\uB798\uB294 Vite \uAD00\uB828 \uD50C\uB7EC\uADF8\uC778 \uB610\uB294 \uD234 \uAC1C\uBC1C\uC790\uC5D0\uAC8C\uB9CC \uC601\uD5A5\uC744 \uBBF8\uCE58\uB294 \uBA87 \uAC00\uC9C0 \uBCC0\uACBD \uC0AC\uD56D\uB4E4\uC5D0 \uB300\uD55C \uB0B4\uC6A9\uC785\uB2C8\uB2E4.</p><ul><li><a href="https://github.com/vitejs/vite/pull/5868" target="_blank" rel="noopener noreferrer">[#5868] refactor: remove deprecated api for 3.0</a><ul><li><code>printHttpServerUrls</code> \uC81C\uAC70</li><li><code>server.app</code>, <code>server.transformWithEsbuild</code> \uC81C\uAC70</li><li><code>import.<wbr>meta.hot.acceptDeps</code> \uC81C\uAC70</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/6901" target="_blank" rel="noopener noreferrer">[#6901] fix: sequential injection of tags in transformIndexHtml</a><ul><li><code>transformIndexHtml</code>\uC740 \uC774\uC81C \uC774\uC804 \uD50C\uB7EC\uADF8\uC778\uC5D0 \uC758\uD574 \uC218\uC815\uB41C \uC62C\uBC14\uB978 \uCF58\uD150\uCE20\uB97C \uAC00\uC838\uC624\uAE30\uC5D0, \uC774\uC81C \uC0BD\uC785\uB41C \uD0DC\uADF8\uC758 \uC21C\uC11C\uAC00 \uC608\uC0C1\uACFC \uAC19\uC774 \uB3D9\uC791\uD569\uB2C8\uB2E4.</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/7995" target="_blank" rel="noopener noreferrer">[#7995] chore: do not fixStacktrace</a><ul><li><code>ssrLoadModule</code>\uC758 <code>fixStacktrace</code> \uC635\uC158\uC758 \uAE30\uBCF8 \uAC12\uC740 \uC774\uC81C <code>false</code> \uC785\uB2C8\uB2E4.</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/8178" target="_blank" rel="noopener noreferrer">[#8178] feat!: migrate to ESM</a><ul><li><code>formatPostcssSourceMap</code>\uB294 \uC774\uC81C \uBE44\uB3D9\uAE30\uC801(async)\uC73C\uB85C \uB3D9\uC791\uD569\uB2C8\uB2E4</li><li><code>resolvePackageEntry</code> \uBC0F <code>resolvePackageData</code>\uB294 \uB354 \uC774\uC0C1 CJS \uBE4C\uB4DC\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. (CJS\uC5D0\uC11C \uC0AC\uC6A9\uD558\uAE30 \uC704\uD574\uC11C\uB294 \uB3D9\uC801 Import \uAE30\uB2A5\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.)</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/8626" target="_blank" rel="noopener noreferrer">[#8626] refactor: type client maps</a><ul><li><code>import.<wbr>meta.hot.accept</code> \uC635\uC158\uC758 \uCF5C\uBC31 \uD0C0\uC785\uC774 \uB354 \uC5C4\uACA9\uD574\uC84C\uC2B5\uB2C8\uB2E4. \uC774\uC81C <code>(mod: (Record&lt;string, any&gt; &amp; { [Symbol.toStringTag]: &#39;Module&#39; }) | undefined) =&gt; void</code> \uC785\uB2C8\uB2E4(\uAE30\uC874 <code>(mod: any) =&gt; void</code>).</li></ul></li></ul><p>\uC544\uB798\uB294 \uC77C\uBD80 \uC0AC\uC6A9\uC790\uC5D0\uAC8C\uB9CC \uC601\uD5A5\uC744 \uBBF8\uCE58\uB294 \uBCC0\uACBD \uC0AC\uD56D\uC785\uB2C8\uB2E4.</p><ul><li><a href="https://github.com/vitejs/vite/pull/5018" target="_blank" rel="noopener noreferrer">[#5018] feat: enable <code>generatedCode: &#39;es2015&#39;</code> for rollup build</a><ul><li>\uC0AC\uC6A9\uC790 \uCF54\uB4DC\uC5D0 ES5\uB9CC \uD3EC\uD568\uB41C \uACBD\uC6B0\uC5D0\uB3C4 ES5\uB85C \uBCC0\uD658\uD558\uB294 \uACFC\uC815\uC740 \uC774\uC81C \uD544\uC694\uD569\uB2C8\uB2E4.</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/7877" target="_blank" rel="noopener noreferrer">[#7877] fix: vite client types</a><ul><li><code>/// &lt;reference lib=&quot;dom&quot; /&gt;</code>\uC774 <code>vite/client.d.ts</code>\uC5D0\uC11C \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C <code>{ &quot;lib&quot;: [&quot;dom&quot;] }</code> \uB610\uB294 <code>{ &quot;lib&quot;: [&quot;webworker&quot;] }</code>\uC774 <code>tsconfig.json</code>\uC5D0 \uBA85\uC2DC\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/8090" target="_blank" rel="noopener noreferrer">[#8090] feat: preserve process env vars in lib build</a><ul><li><code>process.<wbr>env.*</code>\uB294 \uC774\uC81C \uB77C\uC774\uBE0C\uB7EC\uB9AC \uBAA8\uB4DC\uC5D0\uC11C\uB3C4 \uBCF4\uC874\uB429\uB2C8\uB2E4.</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/8280" target="_blank" rel="noopener noreferrer">[#8280] feat: non-blocking esbuild optimization at build time</a><ul><li><code>server.force</code> \uC635\uC158\uC774 <code>optimizeDeps.force</code> \uC635\uC158 \uB300\uC2E0 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4.</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/8550" target="_blank" rel="noopener noreferrer">[#8550] fix: dont handle sigterm in middleware mode</a><ul><li>\uBBF8\uB4E4\uC6E8\uC5B4 \uBAA8\uB4DC\uC5D0\uC11C \uC2E4\uD589\uD560 \uB54C, Vite\uB294 \uB354 \uC774\uC0C1 <code>SIGTERM</code>\uC5D0\uC11C \uD504\uB85C\uC138\uC2A4\uB97C \uC885\uB8CC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</li></ul></li></ul><h2 id="migration-from-v1" tabindex="-1">v1\uC5D0\uC11C \uB9C8\uC774\uADF8\uB808\uC774\uC158\uD558\uAE30 <a class="header-anchor" href="#migration-from-v1" aria-hidden="true">#</a></h2><p><a href="./migration-from-v1.html">v1\uC5D0\uC11C \uB9C8\uC774\uADF8\uB808\uC774\uC158\uD558\uAE30</a> \uBB38\uC11C\uB97C \uBA3C\uC800 \uD655\uC778\uD574 \uC571\uC744 Vite v2\uB85C \uB9C8\uC774\uADF8\uB808\uC774\uC158 \uD55C \uB2E4\uC74C, \uC774 \uD398\uC774\uC9C0\uC5D0\uC11C \uC5B8\uAE09\uB41C \uB0B4\uC6A9\uC744 \uD655\uC778\uD574 v3\uB85C \uB9C8\uC774\uADF8\uB808\uC774\uC158\uC744 \uC9C4\uD589\uD574\uC8FC\uC138\uC694.</p>`,39),i=[t];function r(n,c,p,d,h,u){return o(),a("div",null,i)}var b=e(l,[["render",r]]);export{g as __pageData,b as default};
