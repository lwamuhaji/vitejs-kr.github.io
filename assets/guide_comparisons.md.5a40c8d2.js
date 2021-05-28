import{o as e,c as t,a as r}from"./app.25729eba.js";const o='{"title":"Comparisons with Other No-Bundler Solutions","description":"","frontmatter":{},"headers":[{"level":2,"title":"Snowpack","slug":"snowpack"},{"level":2,"title":"WMR","slug":"wmr"},{"level":2,"title":"@web/dev-server","slug":"web-dev-server"}],"relativePath":"guide/comparisons.md","lastUpdated":1622179076984}',i={},a=r('<h1 id="comparisons-with-other-no-bundler-solutions"><a class="header-anchor" href="#comparisons-with-other-no-bundler-solutions" aria-hidden="true">#</a> Comparisons with Other No-Bundler Solutions</h1><h2 id="snowpack"><a class="header-anchor" href="#snowpack" aria-hidden="true">#</a> Snowpack</h2><p><a href="https://www.snowpack.dev/" target="_blank" rel="noopener noreferrer">Snowpack</a> is also a no-bundle native ESM dev server that is very similar in scope to Vite. Aside from different implementation details, the two projects share a lot in terms of technical advantages over traditional tooling. Vite&#39;s dependency pre-bundling is also inspired by Snowpack v1 (now <a href="https://github.com/snowpackjs/snowpack/tree/main/esinstall" target="_blank" rel="noopener noreferrer"><code>esinstall</code></a>). Some of the main differences between the two projects are:</p><p><strong>Production Build</strong></p><p>Snowpack&#39;s default build output is unbundled: it transforms each file into separate built modules, which can then be fed into different &quot;optimizers&quot; that perform the actual bundling. The benefit of this is that you can choose between different end-bundlers to fit specific needs (e.g. webpack, Rollup, or even esbuild), the downside is that it&#39;s a bit of a fragmented experience - for example, the esbuild optimizer is still unstable, the Rollup optimizer is not officially maintained, and different optimizers have different output and configurations.</p><p>Vite opts to have a deeper integration with one single bundler (Rollup) in order to provide a more streamlined experience. It also allows Vite to support a <a href="./api-plugin.html">Universal Plugin API</a> that works for both dev and build.</p><p>Due to a more integrated build process, Vite supports a wide range of features that are currently not available in Snowpack build optimizers:</p><ul><li><a href="./build.html#multi-page-app">Multi-Page Support</a></li><li><a href="./build.html#library-모드">Library Mode</a></li><li><a href="./features.html#css-code-splitting">Automatic CSS code-splitting</a></li><li><a href="./features.html#async-chunk-loading-optimization">Optimized async chunk loading</a></li><li><a href="./features.html#dynamic-import-polyfill">Automatic dynamic import polyfill</a></li><li>Official <a href="https://github.com/vitejs/vite/tree/main/packages/plugin-legacy" target="_blank" rel="noopener noreferrer">legacy mode plugin</a> that generates dual modern/legacy bundles and auto delivers the right bundle based on browser support.</li></ul><p><strong>Faster Dependency Pre-Bundling</strong></p><p>Vite uses <a href="https://esbuild.github.io/" target="_blank" rel="noopener noreferrer">esbuild</a> instead of Rollup for dependency pre-bundling. This results in significant performance improvements in terms of cold server start and re-bundling on dependency invalidations.</p><p><strong>Monorepo Support</strong></p><p>Vite is designed to handle monorepo setups and we have users successfully using it with Yarn, Yarn 2, and PNPM based monorepos.</p><p><strong>CSS Pre-Processor Support</strong></p><p>Vite provides more refined support for Sass and Less, including improved <code>@import</code> resolution (aliases and npm dependencies) and <a href="./features.html#import-inlining-and-rebasing">automatic <code>url()</code> rebasing for inlined files</a>.</p><p><strong>First Class Vue Support</strong></p><p>Vite was initially created to serve as the future foundation of <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js</a> tooling. Although as of 2.0 Vite is now fully framework-agnostic, the official Vue plugin still provides first-class support for Vue&#39;s Single File Component format, covering all advanced features such as template asset reference resolving, <code>&lt;script setup&gt;</code>, <code>&lt;style module&gt;</code>, custom blocks and more. In addition, Vite provides fine-grained HMR for Vue SFCs. For example, updating the <code>&lt;template&gt;</code> or <code>&lt;style&gt;</code> of an SFC will perform hot updates without resetting its state.</p><h2 id="wmr"><a class="header-anchor" href="#wmr" aria-hidden="true">#</a> WMR</h2><p><a href="https://github.com/preactjs/wmr" target="_blank" rel="noopener noreferrer">WMR</a> by the Preact team provides a similar feature set, and Vite 2.0&#39;s support for Rollup&#39;s plugin interface is inspired by it.</p><p>WMR is mainly designed for <a href="https://preactjs.com/" target="_blank" rel="noopener noreferrer">Preact</a> projects, and offers more integrated features such as pre-rendering. In terms of scope, it&#39;s closer to a Preact meta framework, with the same emphasis on compact size as Preact itself. If you are using Preact, WMR is likely going to offer a more fine-tuned experience. However, it&#39;s unlikely for WMR to prioritize support for other frameworks.</p><h2 id="web-dev-server"><a class="header-anchor" href="#web-dev-server" aria-hidden="true">#</a> @web/dev-server</h2><p><a href="https://modern-web.dev/docs/dev-server/overview/" target="_blank" rel="noopener noreferrer">@web/dev-server</a> (previously <code>es-dev-server</code>) is a great project and Vite 1.0&#39;s Koa-based server setup was inspired by it.</p><p><code>@web/dev-server</code> is a bit lower-level in terms of scope. It does not provide official framework integrations, and requires manually setting up a Rollup configuration for the production build.</p><p>Overall, Vite is a more opinionated / higher-level tool that aims to provide a more out-of-the-box workflow. That said, the <code>@web</code> umbrella project contains many other excellent tools that may benefit Vite users as well.</p>',23);i.render=function(r,o,i,n,s,l){return e(),t("div",null,[a])};export default i;export{o as __pageData};
