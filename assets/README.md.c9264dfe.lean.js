import{o as e,c as l,a as r,b as t}from"./app.b84b895a.js";const n='{"title":"시작하기","description":"","frontmatter":{"title":"시작하기"},"headers":[{"level":2,"title":"시작하기","slug":"시작하기"},{"level":3,"title":"설치","slug":"설치"},{"level":3,"title":"커밋","slug":"커밋"},{"level":2,"title":"번역","slug":"번역"},{"level":3,"title":"브랜치","slug":"브랜치"},{"level":3,"title":"번역에 기여하기","slug":"번역에-기여하기"},{"level":3,"title":"커스텀 앵커(Anchor)","slug":"커스텀-앵커-anchor"}],"relativePath":"README.md","lastUpdated":1625621851858}',i={},s=r("h1",{id:"vitejs-document-korean"},[r("a",{class:"header-anchor",href:"#vitejs-document-korean","aria-hidden":"true"},"#"),t("Vitejs Document (korean)")],-1),a=r("p",{align:"center"},[r("img",{src:"/assets/logo.17e50649.svg"})],-1),o=r("p",null,[r("a",{href:"https://github.com/vitejs-kr/vitejs-kr.github.io/actions/workflows/deploy.yml",target:"_blank",rel:"noopener noreferrer"},[r("img",{src:"https://github.com/vitejs-kr/vitejs-kr.github.io/actions/workflows/deploy.yml/badge.svg",alt:"Deploy"})])],-1),u=r("p",null,[r("a",{href:"https://github.com/vitejs-kr/vitejs-kr.github.io/actions/workflows/sync.yml",target:"_blank",rel:"noopener noreferrer"},[r("img",{src:"https://github.com/vitejs-kr/vitejs-kr.github.io/actions/workflows/sync.yml/badge.svg",alt:"Sync"})])],-1),h=r("p",null,[r("a",{href:"https://vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},"ViteJs 공식 문서"),t(" 한글 번역 목적의 리포지터리 입니다.")],-1),c=r("ul",null,[r("li",null,[r("a",{href:"https://github.com/vitejs-kr/vitejs-kr.github.io/discussions",target:"_blank",rel:"noopener noreferrer"},"Discussions")]),r("li",null,[r("a",{href:"https://github.com/vitejs-kr/vitejs-kr.github.io/discussions/1",target:"_blank",rel:"noopener noreferrer"},"번역 진행 상황")])],-1),d=r("h2",{id:"시작하기"},[r("a",{class:"header-anchor",href:"#시작하기","aria-hidden":"true"},"#"),t("시작하기")],-1),g=r("h3",{id:"설치"},[r("a",{class:"header-anchor",href:"#설치","aria-hidden":"true"},"#"),t("설치")],-1),p=r("div",{class:"language-sh"},[r("pre",null,[r("code",null,"# 1. 이 리포지터리의 사본을 로컬에 복사합니다\ngit clone https://github.com/vitejs-kr/vitejs-kr.github.io\ncd vitejs-kr.github.io\n\n# 2. 모듈을 설치합니다\nyarn # or npm install\n\n# 3. 로컬 개발 서버를 시작합니다 (http://localhost:3000/)\nyarn dev # or npm run dev\n")])],-1),v=r("h3",{id:"커밋"},[r("a",{class:"header-anchor",href:"#커밋","aria-hidden":"true"},"#"),t("커밋")],-1),k=r("p",null,[t("커밋 시 "),r("code",null,"./scripts/verifyCommit.js"),t(" 스크립트를 기반으로 커밋 메시지 내용을 검증하게 됩니다. 따라서, 아래와 같은 형태로 커밋 메시지를 남겨주세요.")],-1),m=r("div",{class:"language-sh"},[r("pre",null,[r("code",null,'"docs(ko): translate <document-name>.md"\n')])],-1),b=r("p",null,[t("자세한 사항은 "),r("code",null,"./scripts/verifyCommit.js"),t(" 스크립트를 참고해주세요.")],-1),f=r("h2",{id:"번역"},[r("a",{class:"header-anchor",href:"#번역","aria-hidden":"true"},"#"),t("번역")],-1),j=r("h3",{id:"브랜치"},[r("a",{class:"header-anchor",href:"#브랜치","aria-hidden":"true"},"#"),t("브랜치")],-1),y=r("ul",null,[r("li",null,[r("code",null,"main"),t(" 브랜치는 번역 작업을 진행하는 목적으로 사용됩니다.")]),r("li",null,[r("code",null,"sync"),t(" 브랜치는 매일 00시, 원본 문서와의 동기화를 진행하는 목적으로 사용됩니다.")]),r("li",null,[r("code",null,"gh-pages"),t(" 브랜치는 "),r("a",{href:"https://vitejs-kr.github.io/",target:"_blank",rel:"noopener noreferrer"},"https://vitejs-kr.github.io/"),t(" 사이트 소스로 사용됩니다.")])],-1),w=r("h3",{id:"번역에-기여하기"},[r("a",{class:"header-anchor",href:"#번역에-기여하기","aria-hidden":"true"},"#"),t("번역에 기여하기")],-1),_=r("blockquote",null,[r("p",null,[r("a",{href:"https://github.com/vitejs-kr/vitejs-kr.github.io/discussions/1",target:"_blank",rel:"noopener noreferrer"},"번역 진행 상황"),t("을 참고해 번역을 진행해주세요.")])],-1),D=r("ol",null,[r("li",null,"이 리포지터리의 우측 상단에 위치한 Fork 버튼을 눌러 자신의 계정으로 리포지터리를 복사해주세요."),r("li",null,[r("code",null,"git clone https://github.com/<계정명>/vitejs-kr.github.io"),t(" 명령을 통해 로컬로 Fork한 리포지터리를 복사해주세요.")]),r("li",null,"번역되지 못한 부분을 번역해주세요."),r("li",null,[t("번역을 완료한 후, "),r("code",null,"vitejs-ko/main"),t(" 으로 PR을 생성해주세요.")])],-1),A=r("h3",{id:"커스텀-앵커-anchor"},[r("a",{class:"header-anchor",href:"#커스텀-앵커-anchor","aria-hidden":"true"},"#"),t("커스텀 앵커(Anchor)")],-1),x=r("p",null,"본 리포지터리는 올바른 앵커 참조를 위해 커스텀 앵커를 사용하고 있습니다.",-1),C=r("p",null,[t("Heading 마지막에 "),r("code",null,"{#custom-anchor-name}"),t("와 같은 형태로 커스텀 앵커의 지정이 가능하며, 앵커 이름은 원본 문서를 기준으로 합니다.")],-1),E=r("p",null,"가령, 아래와 같은 문서를 번역한다고 했을 때",-1),F=r("div",{class:"language-"},[r("pre",null,[r("code",null,"# Getting Started\n")])],-1),P=r("p",null,"아래와 같이 커스텀 앵커를 지정해주세요.",-1),R=r("div",{class:"language-"},[r("pre",null,[r("code",null,"# 시작하기 {#getting-started}\n")])],-1),S=r("p",null,"위 앵커는 다음과 같이 참조가 가능합니다.",-1),V=r("div",{class:"language-"},[r("pre",null,[r("code",null,"[시작하기](#getting-started)\n")])],-1);i.render=function(r,t,n,i,q,G){return e(),l("div",null,[s,a,o,u,h,c,d,g,p,v,k,m,b,f,j,y,w,_,D,A,x,C,E,F,P,R,S,V])};export default i;export{n as __pageData};