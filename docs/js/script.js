!function(t){let e={},n=[];const i=[2,3,2],a=["motivation","carefree","ephemeral"];let s,o,r,l,m,p,c,g=[],u=0,d=0,f=!0,w=[[0,0,0],[0,0,0],[0,0,0]];function x(){f=!1,t(".js-btn").on("click",function(){if(f)return;f=!0;const s=t(this);s.addClass("clicked");const o=s.attr("data-action");setTimeout(function(){"select"===o&&function(s){let o=t(s.parents(".choices_wrap")).find(".js-btn");o.css("pointer-events","none");let r=o.index(s),l=n[u];(function(t){let e=w[u],n=e.length,i=0;for(let a=0;a<n;a++)i=e[a],e[a]=i+t[a];w[u]=e})(e[l][d].answers[r].type),d++,i[u]===d?function(){let t=null,e=0,i=w[u];for(let n=0;n<i.length;n++){let s=i[n],o=a[n];if(s>=2)t=o,e=s;else if(s>=0)if(s>e)t=o,e=s;else if(s===e){let n=Math.floor(2*Math.random());1===n&&(t=o,e=s)}}g.push(t),u===n.length-1?function(){const t=window.DEMO_APP.resultData;m=t[g[0]][g[1]][g[2]].param,c=t[g[0]][g[1]][g[2]].text;const e=g.filter(function(t,e,n){return n.indexOf(t)===e&&e!==n.lastIndexOf(t)});let n;n=e.length>0?e[0]:"carefree";p=t[n].param,h()}():h()}():_()}(s),"next"===o&&_(!0)},400)})}function _(e=!1){e?(u++,d=0,r.fadeOut(300,function(){s.fadeIn(300),n()})):l.fadeOut(300,function(){n()});const n=function(){let e=t(o.find(".diagnose_list").eq(u));t(e.find(".question").eq(d)).fadeIn(300,function(){l=t("#question-"+u+"-"+d),f=!1})}}function h(){let e;r=t(".pageOverlay").eq(u);const n=window.mediaQueryList.matches?"":"sp-",i=function(){r.find(".intermediate_image").attr("src",e),s.fadeOut(400),l.fadeOut(400,function(){r.fadeIn(400,function(){r.addClass("isAnimationStarted"),f=!1})})},a=function(){s.fadeOut(400),l.fadeOut(400,function(){r.fadeIn(400,function(){r.addClass("isAnimationStarted"),setTimeout(function(){location.href="/result/"+m+".html"},5800)})})};!function(){if(0===u){e="/images/content/bottle/"+n+"bottle-"+g[0]+".png";const a=t("#loading_frame"),s="/images/content/"+n+"loading-"+g[0]+".png";a.attr("src",s),i()}else 1===u?(e="/images/content/flower/"+n+"flower-"+g[0]+"-"+g[1]+".png",i()):2===u&&a()}()}window.mediaQueryList=window.matchMedia("(min-width:768px)"),document.addEventListener("DOMContentLoaded",function(){t("#shindan_content")[0]&&(s=t("#diagnose"),o=t("#diagnose_area"),function(a){const s=window.DEMO_APP.questionData,r=(n=Object.keys(s)).length;let m,p=["qNum/qNum-1.png","qNum/qNum-2.png","qNum/qNum-3.png","qNum/qNum-4.png","qNum/qNum-5.png","qNum/qNum-6.png","qNum/qNum-7.png","qNum/sp-qNum-1.png","qNum/sp-qNum-2.png","qNum/sp-qNum-3.png","qNum/sp-qNum-4.png","qNum/sp-qNum-5.png","qNum/sp-qNum-6.png","qNum/sp-qNum-7.png"];const c=function(){p.forEach(t=>{const e=document.createElement("img");e.src=`/images/content/${t}`}),g()},g=function(){let i,s,m="",p=0,c=0;for(let t=0;t<r;t++){i=n[t],m+=`<ul class="diagnose_list" id="${i}">`,p=Object.keys(e[i]).length;for(let n=0;n<p;n++){const a=1==++c?"":"display: none;";m+=`\n                        <li class="question" style="${a}" id="question-${t}-${n}">\n                            <p class="question_numbering">\n                                 <picture>\n                                    <source media="(max-width:767px)" srcset="/images/content/qNum/sp-qNum-${c}.png" sizes="100vw">\n                                    <img src="/images/content/qNum/qNum-${c}.png" alt="Q.${c}">\n                                  </picture>\n                            </p>`;let o=(s=e[i][n]).title,r=s.title_img;m+=`\n                        <p class="question_text">\n                          <picture>\n                            <source media="(max-width:767px)" srcset="/images/content/qText/sp-${r}" sizes="100vw">\n                            <img src="/images/content/qText/${r}" alt="${o}">\n                          </picture>\n                        </p>\n                        <div class="choices_wrap">`;let l=s.answers;for(let t=0;t<l.length;t++){let e=l[t].text,n=l[t].answer_img;m+=`\n                            <button type="button" class="btn btn-choice js-btn" data-action="select">\n                                <picture>\n                                    <source media="(max-width:767px)" srcset="/images/content/qBtn/sp-${n}" sizes="100vw">\n                                    <img src="/images/content/qBtn/${n}" alt="${e}">\n                                </picture>\n                            </button>`}m+="</div></li>"}m+="</ul>"}o.append(m),o.removeClass("load"),l=t("#question-0-0"),a()};!function(){let t,a=0;for(let o=0;o<r;o++){t=n[o],m=Object.keys(s[t]).length,a=i[o];let r=[],l=[];for(let e=0;e<a;e++){let e=Math.floor(Math.random()*m);for(;r.includes(e);)e=Math.floor(Math.random()*m);let n=s[t][e].title,i=s[t][e].title_img,a="qText/"+i,o="qText/sp-"+i;p.push(a,o);let c=s[t][e].answers;for(let t=0;t<c.length;t++){let e=c[t].answer_img,n="qBtn/"+e,i="qBtn/sp-"+e;p.push(n,i)}let g={title:n,title_img:i,answers:c};l.push(g),r.push(e)}e[t]=l}c()}()}(x))})}(jQuery),void 0===window.DEMO_APP&&(window.DEMO_APP={}),window.DEMO_APP.questionData={bottle:[{title:"肌に触れた時の印象は？",title_img:"text-1.png",answers:[{text:"ふっくらとしている",type:[1,0,0],answer_img:"selectBtn-1-1.png"},{text:"つるんとしている",type:[0,1,0],answer_img:"selectBtn-1-2.png"},{text:"かさつきを感じる",type:[0,0,1],answer_img:"selectBtn-1-3.png"}]},{title:"肌トラブルが起きる場所はいかがですか？",title_img:"text-2.png",answers:[{text:"顔全体にトラブルが起きがち",type:[1,0,1],answer_img:"selectBtn-2-1.png"},{text:"部分的にトラブルが起きがち",type:[0,1,0],answer_img:"selectBtn-2-2.png"},{text:"あまり感じない",type:[0,0,0],answer_img:"selectBtn-2-3.png"}]},{title:"肌にくすみ感のない明るさを感じますか？",title_img:"text-3.png",answers:[{text:"とても感じる",type:[0,0,1],answer_img:"selectBtn-3-1.png"},{text:"少し感じる",type:[0,1,0],answer_img:"selectBtn-3-2.png"},{text:"あまり感じない",type:[1,0,0],answer_img:"selectBtn-3-3.png"}]}],mainFlower:[{title:"肌のテカリは気になる？",title_img:"text-4.png",answers:[{text:"テカりやすい",type:[1,0,0],answer_img:"selectBtn-4-1.png"},{text:"部分的にテカる",type:[0,1,0],answer_img:"selectBtn-4-2.png"},{text:"あまり気にならない",type:[0,0,1],answer_img:"selectBtn-4-3.png"}]},{title:"お肌のうるおいに満足していますか？",title_img:"text-5.png",answers:[{text:"常に満足できていない",type:[0,0,1],answer_img:"selectBtn-5-1.png"},{text:"部分的に満足できていない",type:[0,1,0],answer_img:"selectBtn-5-2.png"},{text:"不満はない",type:[1,0,0],answer_img:"selectBtn-5-3.png"}]},{title:"ニキビについてお聞かせください",title_img:"text-6.png",answers:[{text:"できやすい",type:[1,0,0],answer_img:"selectBtn-6-1.png"},{text:"たまにできる",type:[0,1,0],answer_img:"selectBtn-6-2.png"},{text:"あまりできない",type:[0,0,1],answer_img:"selectBtn-6-3.png"}]},{title:"肌のキメ・毛穴はいかがですか？",title_img:"text-7.png",answers:[{text:"全体的に気になる",type:[1,0,0],answer_img:"selectBtn-7-1.png"},{text:"部分的に気になる",type:[0,1,0],answer_img:"selectBtn-7-2.png"},{text:"あまり気にならない",type:[0,0,1],answer_img:"selectBtn-7-3.png"}]}],subFlower:[{title:"ベースメイク(ファンデ・化粧下地など)についてお聞かせください",title_img:"text-8.png",answers:[{text:"全体的にくずれやすい",type:[1,0,0],answer_img:"selectBtn-8-1.png"},{text:"部分的にくずれやすい",type:[0,1,0],answer_img:"selectBtn-8-2.png"},{text:"くずれにくいが、粉浮きや乾燥が気になる",type:[0,0,1],answer_img:"selectBtn-8-3.png"}]},{title:"洗顔後の肌の状態は？",title_img:"text-9.png",answers:[{text:"ざらつきをよく感じる",type:[1,0,0],answer_img:"selectBtn-9-1.png"},{text:"ざらつきをたまに感じる",type:[0,1,0],answer_img:"selectBtn-9-2.png"},{text:"つっぱりやすい",type:[0,0,1],answer_img:"selectBtn-9-3.png"}]},{title:"お肌のお手入れ時に困ることは？",title_img:"text-10.png",answers:[{text:"日によってなじみが悪い日がある",type:[0,1,0],answer_img:"selectBtn-10-1.png"},{text:"過去、化粧品がしみたことがある",type:[0,0,1],answer_img:"selectBtn-10-2.png"},{text:"とくに困ることはない",type:[1,0,0],answer_img:"selectBtn-10-3.png"}]},{title:"朝起きた時の肌の状態は？",title_img:"text-11.png",answers:[{text:"全体的にベタついている",type:[1,0,0],answer_img:"selectBtn-11-1.png"},{text:"部分的にベタついている",type:[0,1,0],answer_img:"selectBtn-11-2.png"},{text:"ベタつきはない",type:[0,0,1],answer_img:"selectBtn-11-3.png"}]}]},function(t){window.addEventListener("load",function(){t("#shindan_result")[0]&&(function(){const t=document.getElementsByClassName("js-animationLoadTarget");for(let e=0;e<t.length;e++)t[e].classList.add("isAnimationStarted")}(),function(){const t=document.getElementsByClassName("js-animationTarget"),e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&!t.target.classList.contains("isAnimationStarted")&&t.target.classList.add("isAnimationStarted")})},{root:null,rootMargin:"5000px 0px -10% 0px",threshold:0});for(let n=0;n<t.length;n++)e.observe(t[n])}(),window.mediaQueryList.matches||function(){const e=t(".js-scroll"),n=t(".result_detail");let i=!1;setTimeout(function(){n.offset().top>=t(window).scrollTop()&&(e.fadeIn(400),i=!0,a())},7e3);const a=function(){window.addEventListener("scroll",function(){i&&e.fadeOut(400),i=!1})}}())})}(jQuery),void 0===window.DEMO_APP&&(window.DEMO_APP={}),window.DEMO_APP.resultData={motivation:{param:"r7Nt",motivation:{motivation:{param:"aC43",text:"G6nr"},carefree:{param:"Zi4j",text:"K6yT"},ephemeral:{param:"T7a3",text:"Em7z"}},carefree:{motivation:{param:"Fn2J",text:"Lr2M"},carefree:{param:"fM4x",text:"W8i9"},ephemeral:{param:"eZ4f",text:"Sw8E"}},ephemeral:{motivation:{param:"e6EM",text:"rW2y"},carefree:{param:"w6BG",text:"hX6W"},ephemeral:{param:"p7Ce",text:"zE7n"}}},carefree:{param:"fU7P",motivation:{motivation:{param:"i9A3",text:"G6nr"},carefree:{param:"Fy4H",text:"K6yT"},ephemeral:{param:"V9dr",text:"Em7z"}},carefree:{motivation:{param:"p3FE",text:"Lr2M"},carefree:{param:"f9UV",text:"W8i9"},ephemeral:{param:"pR5A",text:"Sw8E"}},ephemeral:{motivation:{param:"vE84",text:"uX5F"},carefree:{param:"x5Pc",text:"hX6W"},ephemeral:{param:"Bw4y",text:"zE7n"}}},ephemeral:{param:"x5Mu",motivation:{motivation:{param:"N3pB",text:"G6nr"},carefree:{param:"sP9k",text:"K6yT"},ephemeral:{param:"b9Xq",text:"k6L2"}},carefree:{motivation:{param:"uT8H",text:"Lr2M"},carefree:{param:"pR5H",text:"W8i9"},ephemeral:{param:"s6Fu",text:"Sw8E"}},ephemeral:{motivation:{param:"J7tG",text:"uX5F"},carefree:{param:"w4Sd",text:"hX6W"},ephemeral:{param:"Jw4G",text:"zE7n"}}}},function(t){const e=[void 0,void 0,void 0,void 0,void 0,void 0];let n,i;const a="isAnimationStarted";function s(){const e=t(".intro");e.addClass("isAnimationStarted"),setTimeout(function(){t(".beforeLoading").hide(),setTimeout(function(){e.css("pointer-events","none"),o(),r()},1e3)},5e3)}function o(){let t;for(let i=0,a=n.length;i<a;i++)setTimeout(function(){e[i].autoplay.start()},t=1e3*i)}function r(){i.addClass(a)}window.addEventListener("load",function(){t("#shindan_top")[0]&&(n=document.getElementsByClassName("swiper"),i=t(".js-animationLoadTarget"),function(){let t=0;for(let i=0,a=n.length;i<a;i++)t=Math.floor(9*Math.random()),e[i]=new Swiper(n[i],{initialSlide:t,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},autoplay:{delay:2e3},speed:3e3}),e[i].autoplay.stop()}(),function(){const e=Math.floor((new Date).getTime()/1e3),n=Cookies.get("viewed_demo");void 0===n?(s(),Cookies.set("viewed_demo",e,{expires:1,path:"/"})):e-n>=864e5?(s(),Cookies.set("viewed_demo",e,{expires:1,path:"/"})):(t(".intro").css("pointer-events","none"),t(".beforeLoading").hide(),o(),r())}())})}(jQuery);