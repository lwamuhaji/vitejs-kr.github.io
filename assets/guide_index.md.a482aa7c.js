import{o as e,c as n,a as l,b as t}from"./app.cd01fd1f.js";const a='{"title":"시작하기","description":"","frontmatter":{"title":"시작하기"},"headers":[{"level":2,"title":"들어가기 전에","slug":"overview"},{"level":2,"title":"지원하는 브라우저","slug":"browser-support"},{"level":2,"title":"첫 Vite 프로젝트 만들어보기","slug":"scaffolding-your-first-vite-project"},{"level":2,"title":"커뮤니티 템플릿","slug":"community-templates"},{"level":2,"title":"index.html 그리고 프로젝트의 루트","slug":"index-html-and-project-root"},{"level":2,"title":"커맨드 라인 인터페이스","slug":"command-line-interface"},{"level":2,"title":"릴리즈되지 않은 Vite 사용하기","slug":"using-unreleased-commits"},{"level":2,"title":"커뮤니티","slug":"community"}],"relativePath":"guide/index.md","lastUpdated":1632641254071}',i={},s=l("h1",{id:"getting-started"},[l("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#"),t("시작하기")],-1),r=l("audio",{id:"vite-audio"},[l("source",{src:"/vite.mp3",type:"audio/mpeg"})],-1),o=l("h2",{id:"overview"},[l("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),t("들어가기 전에")],-1),c=l("p",null,[t('Vite(프랑스어로 "빠르다(Quick)"를 의미하며, 발음은 "veet"와 비슷한 '),l("code",null,"/vit/"),l("button",{style:{border:"none",padding:"3px","border-radius":"4px"},id:"play-vite-audio",onclick:"document.getElementById('vite-audio').play();"},[l("img",{src:"/voice.svg",height:"15"})]),t(" 입니다.)은 빠르고 간결한 모던 웹 프로젝트 개발 경험에 초점을 맞춰 탄생한 빌드 도구이며, 두 가지 컨셉을 중심으로 하고 있습니다.")],-1),u=l("ul",null,[l("li",null,[l("p",null,[t("개발 시 "),l("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",target:"_blank",rel:"noopener noreferrer"},"네이티브 ES Module"),t("을 넘어 "),l("a",{href:"./features.html"},"더욱 다양한 기능"),t("을 제공합니다. 가령, "),l("a",{href:"./features.html#hot-module-replacement"},"Hot Module Replacement (HMR)"),t("과 같은 것들 말이죠.")])]),l("li",null,[l("p",null,[t("번들링 시, "),l("a",{href:"https://rollupjs.org",target:"_blank",rel:"noopener noreferrer"},"Rollup"),t(" 기반의 다양한 빌드 커맨드를 사용할 수 있습니다. 이는 높은 수준으로 최적화된 정적(Static) 리소스들을 배포할 수 있게끔 하며, 미리 정의된 설정(Pre-configured)을 제공합니다.")])])],-1),p=l("p",null,[t("vite는 기본적으로 최적화 된 설정을 제공하지만, "),l("a",{href:"./api-plugin.html"},"Plugin API"),t(" 또는 "),l("a",{href:"./api-javascript.html"},"JavaScript API"),t("를 이용할 수 있습니다. (물론 TypeScript 역시 지원하구요.)")],-1),d=l("p",null,[t("왜 Vite를 만들게 되었는지 알고 싶다면 "),l("a",{href:"./why.html"},"Vite를 사용해야 하는 이유"),t(" 섹션을 참고해주세요.")],-1),m=l("h2",{id:"browser-support"},[l("a",{class:"header-anchor",href:"#browser-support","aria-hidden":"true"},"#"),t("지원하는 브라우저")],-1),h=l("ul",null,[l("li",null,[l("p",null,[t("개발 시: 반드시 "),l("a",{href:"https://caniuse.com/es6-module-dynamic-import",target:"_blank",rel:"noopener noreferrer"},"Native ESM dynamic import"),t("를 지원하는 브라우저를 이용해야 합니다.")])]),l("li",null,[l("p",null,[t("배포 시: 기본적으로 "),l("a",{href:"https://caniuse.com/es6-module",target:"_blank",rel:"noopener noreferrer"},"Script 태그를 이용한 Native ESM"),t("을 지원하는 브라우저를 대상으로 하고 있습니다. 만일 레거시 브라우저 역시 타겟으로 하고 있다면, "),l("a",{href:"https://github.com/vitejs/vite/tree/main/packages/plugin-legacy",target:"_blank",rel:"noopener noreferrer"},"@vitejs/plugin-legacy"),t(" 플러그인을 이용해주세요. ("),l("a",{href:"./build.html"},"배포하기"),t(" 섹션에서 조금 더 자세히 다룹니다.)")])])],-1),v=l("h2",{id:"scaffolding-your-first-vite-project"},[l("a",{class:"header-anchor",href:"#scaffolding-your-first-vite-project","aria-hidden":"true"},"#"),t("첫 Vite 프로젝트 만들어보기")],-1),g=l("div",{class:"tip custom-block"},[l("p",{class:"custom-block-title"},"호환성"),l("p",null,[t("vite는 버전 12.0.0 이상의 "),l("a",{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},"Node.js"),t("를 요구합니다.")])],-1),f=l("p",null,"NPM:",-1),k=l("div",{class:"language-bash"},[l("pre",null,[l("code",null,[t("$ "),l("span",{class:"token function"},"npm"),t(" init vite@latest\n")])])],-1),b=l("p",null,"Yarn:",-1),y=l("div",{class:"language-bash"},[l("pre",null,[l("code",null,[t("$ "),l("span",{class:"token function"},"yarn"),t(" create vite\n")])])],-1),j=l("p",null,"PNPM:",-1),V=l("div",{class:"language-bash"},[l("pre",null,[l("code",null,[t("$ "),l("span",{class:"token function"},"pnpm"),t(" dlx create-vite\n")])])],-1),x=l("p",null,"이후에는 프롬프트 창에 출력된 메시지를 따라주세요.",-1),S=l("p",null,"물론 프로젝트의 이름이나 템플릿을 지정해 프로젝트를 만들 수 있습니다. 가령, Vite를 이용해 Vue 프로젝트를 만들자고 한다면...",-1),_=l("div",{class:"language-bash"},[l("pre",null,[l("code",null,[l("span",{class:"token comment"},"# npm 6.x"),t("\n"),l("span",{class:"token function"},"npm"),t(" init vite@latest my-vue-app --template vue\n\n"),l("span",{class:"token comment"},"# npm 7+, '--'를 반드시 붙여주세요"),t("\n"),l("span",{class:"token function"},"npm"),t(" init vite@latest my-vue-app -- --template vue\n\n"),l("span",{class:"token comment"},"# yarn"),t("\n"),l("span",{class:"token function"},"yarn"),t(" create vite my-vue-app --template vue\n")])])],-1),w=l("p",null,"이와 같이 지정할 수 있습니다.",-1),P=l("p",null,"현재 Vite에서 공식적으로 지원하고 있는 템플릿은 아래와 같습니다.",-1),M=l("ul",null,[l("li",null,[l("code",null,"vanilla")]),l("li",null,[l("code",null,"vanilla-ts")]),l("li",null,[l("code",null,"vue")]),l("li",null,[l("code",null,"vue-ts")]),l("li",null,[l("code",null,"react")]),l("li",null,[l("code",null,"react-ts")]),l("li",null,[l("code",null,"preact")]),l("li",null,[l("code",null,"preact-ts")]),l("li",null,[l("code",null,"lit")]),l("li",null,[l("code",null,"lit-ts")]),l("li",null,[l("code",null,"svelte")]),l("li",null,[l("code",null,"svelte-ts")])],-1),R=l("p",null,[t("각 템플릿에 대해 조금 더 자세한 설명이 필요하다면 "),l("a",{href:"https://github.com/vitejs/vite/tree/main/packages/create-vite",target:"_blank",rel:"noopener noreferrer"},"create-vite"),t("을 참고해주세요.")],-1),U=l("h2",{id:"community-templates"},[l("a",{class:"header-anchor",href:"#community-templates","aria-hidden":"true"},"#"),t("커뮤니티 템플릿")],-1),L=l("p",null,[t("Vite에서 제공하고 있는 템플릿 말고도 "),l("a",{href:"https://github.com/vitejs/awesome-vite#templates",target:"_blank",rel:"noopener noreferrer"},"Awesome-vite templates"),t("와 같이 다양한 도구와 프레임워크를 타겟으로 하는 커뮤니티 템플릿들이 있습니다. "),l("code",null,"create-vite"),t("은 이러한 템플릿을 기반으로도 빠르게 프로젝트를 구성할 수 있도록 지원하고 있으며, "),l("a",{href:"https://github.com/Rich-Harris/degit",target:"_blank",rel:"noopener noreferrer"},"degit"),t("을 이용합니다.")],-1),I=l("div",{class:"language-bash"},[l("pre",null,[l("code",null,[t("npx degit user/project my-project\n"),l("span",{class:"token builtin class-name"},"cd"),t(" my-project\n\n"),l("span",{class:"token function"},"npm"),t(),l("span",{class:"token function"},"install"),t("\n"),l("span",{class:"token function"},"npm"),t(" run dev\n")])])],-1),H=l("p",null,[t("만약 특정 브랜치에서 시작하고 싶다면, "),l("code",null,"#"),t(" 접미사(Suffix)를 붙여 브랜치를 명시해주세요. 가령 "),l("code",null,"main"),t(" 브랜치에서 시작하고자 한다면, "),l("code",null,"#main"),t("과 같이 말이죠.")],-1),N=l("div",{class:"language-bash"},[l("pre",null,[l("code",null,[t("npx degit user/project"),l("span",{class:"token comment"},"#main my-project"),t("\n")])])],-1),A=l("h2",{id:"index-html-and-project-root"},[l("a",{class:"header-anchor",href:"#index-html-and-project-root","aria-hidden":"true"},"#"),l("code",null,"index.html"),t("그리고 프로젝트의 루트")],-1),C=l("p",null,[t("만들어진 Vite 프로젝트를 유심히 보면 "),l("code",null,"index.html"),t(" 파일이 "),l("code",null,"public"),t(" 디렉터리가 아닌 프로젝트의 루트에 위치해 있다는 것을 발견할 수 있습니다. 의도적으로 이렇게 위치시킨 것인데, 추가적인 번들링 과정 없이 "),l("code",null,"index.html"),t(" 파일이 앱의 진입점이 되게끔 하기 위함입니다.")],-1),E=l("p",null,[t("vite는 "),l("code",null,"index.html"),t(" 파일을 소스 코드이자 JavaScript 모듈 그래프를 구성하는 요소 중 하나로 취급하고 있습니다. 다시말해, "),l("code",null,'<script type="module" src="...">'),t(" 태그를 이용해 JavaScript 소스 코드를 가져온다는 의미이며, 인라인으로 작성된 "),l("code",null,'<script type="module">'),t("이나 "),l("code",null,"<link href>"),t("와 같은 CSS 역시 Vite에서 취급이 가능합니다. 추가적으로, Vite는 "),l("code",null,"index.html"),t(" 내에 존재하는 URL에 대해 "),l("code",null,"%PUBLIC_URL%"),t("과 같은 Placeholder 없이 사용할 수 있도록 URL 베이스를 자동으로 맞춰줍니다.")],-1),J=l("p",null,[t('vite는 정적(Static) HTTP 서버와 비슷하게 "루트 디렉터리"라는 개념을 갖고 있습니다. 향후 '),l("code",null,"<root>"),t("라는 이름으로 문서 내에서 보게 되는데, 이는 Absolute URL을 프로젝트 루트를 가리키게끔 함으로써 일반적인 정적 파일 서버와 동일하게 코드를 작성할 수 있게 됩니다. 또한 vite는 프로젝트 루트 외부에서도 디펜던시를 가져올 수 있게끔 구현했는데, 이를 이용하면 모노리포 구성 등 다양한 작업이 가능합니다.")],-1),T=l("p",null,[t("또한 vite는 여러 "),l("code",null,".html"),t(" 파일을 앱의 진입점으로 하는 "),l("a",{href:"./build.html#multi-page-app"},"Multi-page apps"),t("를 지원하고 있습니다.")],-1),$=l("h4",{id:"specifying-alternative-root"},[l("a",{class:"header-anchor",href:"#specifying-alternative-root","aria-hidden":"true"},"#"),t("프로젝트 루트 지정")],-1),B=l("p",null,[l("code",null,"vite"),t("은 개발 서버를 시작할 때 현재 위치해 있는 디렉터리를 프로젝트 루트로 가정하고 동작합니다. 만약 특정 디렉터리를 지정해 프로젝트 루트로써 동작하게끔 하고 싶다면, "),l("code",null,"vite serve some/sub/dir"),t(" 명령으로 Vite를 시작해주세요.")],-1),D=l("h2",{id:"command-line-interface"},[l("a",{class:"header-anchor",href:"#command-line-interface","aria-hidden":"true"},"#"),t("커맨드 라인 인터페이스")],-1),G=l("p",null,[t("vite가 설치된 프로젝트는 "),l("code",null,"vite"),t(" 명령을 통해 바로 Vite를 실행할 수 있습니다. ("),l("code",null,"npx vite"),t("을 이용해도 되구요.) 기본적으로 Vite에서 제공하는 npm 스크립트는 아래와 같습니다.")],-1),z=l("div",{class:"language-json"},[l("pre",null,[l("code",null,[l("span",{class:"token punctuation"},"{"),t("\n  "),l("span",{class:"token property"},'"scripts"'),l("span",{class:"token operator"},":"),t(),l("span",{class:"token punctuation"},"{"),t("\n    "),l("span",{class:"token property"},'"dev"'),l("span",{class:"token operator"},":"),t(),l("span",{class:"token string"},'"vite"'),l("span",{class:"token punctuation"},","),t(),l("span",{class:"token comment"},"// start dev server"),t("\n    "),l("span",{class:"token property"},'"build"'),l("span",{class:"token operator"},":"),t(),l("span",{class:"token string"},'"vite build"'),l("span",{class:"token punctuation"},","),t(),l("span",{class:"token comment"},"// build for production"),t("\n    "),l("span",{class:"token property"},'"serve"'),l("span",{class:"token operator"},":"),t(),l("span",{class:"token string"},'"vite preview"'),t(),l("span",{class:"token comment"},"// locally preview production build"),t("\n  "),l("span",{class:"token punctuation"},"}"),t("\n"),l("span",{class:"token punctuation"},"}"),t("\n")])])],-1),K=l("p",null,[t("Vite CLI와 함께 "),l("code",null,"--port"),t(", "),l("code",null,"--https"),t("와 같은 옵션을 사용할 수 있습니다. 모든 CLI 옵션을 보고자 한다면, vite가 설치된 프로젝트 안에서 "),l("code",null,"npx vite --help"),t(" 명령을 실행해주세요.")],-1),Q=l("h2",{id:"using-unreleased-commits"},[l("a",{class:"header-anchor",href:"#using-unreleased-commits","aria-hidden":"true"},"#"),t("릴리즈되지 않은 Vite 사용하기")],-1),W=l("p",null,[t("만약 아직 릴리즈되지 않은 Vite를 사용하고자 한다면, 먼저 "),l("a",{href:"https://github.com/vitejs/vite",target:"_blank",rel:"noopener noreferrer"},"Vite 리포지토리"),t("를 로컬 컴퓨터로 클론한 뒤 이를 빌드해 사용하는 방법이 있습니다. ("),l("a",{href:"https://pnpm.io/",target:"_blank",rel:"noopener noreferrer"},"pnpm"),t("가 필요해요.)")],-1),Y=l("div",{class:"language-bash"},[l("pre",null,[l("code",null,[l("span",{class:"token function"},"git"),t(" clone https://github.com/vitejs/vite.git\n"),l("span",{class:"token builtin class-name"},"cd"),t(" vite\n"),l("span",{class:"token function"},"pnpm"),t(),l("span",{class:"token function"},"install"),t("\n"),l("span",{class:"token builtin class-name"},"cd"),t(" packages/vite\n"),l("span",{class:"token function"},"pnpm"),t(" run build\n"),l("span",{class:"token function"},"pnpm"),t(),l("span",{class:"token function"},"link"),t(),l("span",{class:"token comment"},"# 이 단계에서는 선호하는 패키지 관리자를 사용할 수 있습니다."),t("\n")])])],-1),q=l("p",null,[t("이후 Vite를 클론한 프로젝트 위에서 "),l("code",null,"pnpm link vite"),t(" 명령을 실행해 주세요(또는 "),l("code",null,"vite"),t("를 전역적으로 링크하는 데 사용했던 패키지 관리자를 사용합니다). 이 작업 이후 개발 서버를 재시작("),l("code",null,"yarn dev"),t(")하게 되면, 클론된 Vite를 이용해 프로젝트를 진행할 수 있게 됩니다.")],-1),F=l("h2",{id:"community"},[l("a",{class:"header-anchor",href:"#community","aria-hidden":"true"},"#"),t("커뮤니티")],-1),O=l("p",null,[t("질문이나 도움이 필요하다면, "),l("a",{href:"https://discord.gg/4cmKdMfpU5",target:"_blank",rel:"noopener noreferrer"},"Discord"),t(" 또는 "),l("a",{href:"https://github.com/vitejs/vite/discussions",target:"_blank",rel:"noopener noreferrer"},"GitHub Discussions"),t("에 방문해주세요.")],-1);i.render=function(l,t,a,i,X,Z){return e(),n("div",null,[s,r,o,c,u,p,d,m,h,v,g,f,k,b,y,j,V,x,S,_,w,P,M,R,U,L,I,H,N,A,C,E,J,T,$,B,D,G,z,K,Q,W,Y,q,F,O])};export default i;export{a as __pageData};
