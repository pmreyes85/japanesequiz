(this.webpackJsonpjapanesequiz=this.webpackJsonpjapanesequiz||[]).push([[0],{19:function(n,i,o){},24:function(n,i,o){"use strict";o.r(i);var a=o(1),e=o(14),r=o.n(e),s=o(6),l=(o(19),o(9)),d=(o(20),o(27)),u=o(26),g=o(28),p=o(29),t=o(0);function k(n){for(var i=n.length-1;i>0;i--){var o=Math.floor(Math.random()*(i+1)),a=n[i];n[i]=n[o],n[o]=a}return n}function c(){return Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)("h1",{children:"My Japanese Quiz"}),Object(t.jsx)("h2",{children:"What is the English for the Japanese word shown?"}),Object(t.jsx)(b,{}),Object(t.jsx)("br",{}),Object(t.jsxs)("p",{children:["Commands:",Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{children:"Left Arrow: Previous word"}),Object(t.jsx)("li",{children:"Right Arrow: Next word"}),Object(t.jsx)("li",{children:"Shift: Show/Hide answers"})]})]})]})}function b(){var n=Object(a.useState)(0),i=Object(s.a)(n,2),o=i[0],e=i[1],r=Object(a.useState)(0),c=Object(s.a)(r,2),b=c[0],m=c[1],y=Object(a.useState)(l[o]),w=Object(s.a)(y,2),h=w[0],j=w[1],f=Object(a.useState)(h.length),z=Object(s.a)(f,2),x=z[0],O=z[1],v=Object(a.useState)(h[b]),L=Object(s.a)(v,2),S=L[0],A=L[1],N=Object(a.useState)(!1),C=Object(s.a)(N,2),q=C[0],E=C[1];function G(){var n,i=(n=b)<=0?0:n-1;m(i),A(h[i]),E(!1)}function J(){var n=function(n,i){return n===l[i].length-1?0:n+1}(b,o);m(n),A(h[n]),E(!1)}var M,R=Object(a.useCallback)((function(n){n.preventDefault(),"ArrowRight"===n.key&&J(),"ArrowLeft"===n.key&&G(),n.shiftKey&&E(!q)}),[b,q]);return Object(a.useEffect)((function(){return document.addEventListener("keydown",R),function(){document.removeEventListener("keydown",R)}}),[R]),Object(t.jsxs)(d.a,{className:"mx-auto w-50",children:[Object(t.jsx)("h2",{children:(M=o,0===M?"Hiragana":1===M?"Hiragana Words":2===M?"Katakana":3===M?"Katakana Words":"ERROR")}),Object(t.jsxs)(d.a.Label,{children:["Question ",b+1," of ",x]}),Object(t.jsx)(u.a,{children:Object(t.jsx)("p",{className:"h1",children:S.word})}),Object(t.jsxs)(d.a.Group,{as:u.a,children:[Object(t.jsx)(d.a.Label,{column:!0,children:"Meaning"}),Object(t.jsx)(d.a.Label,{column:!0,className:q?"visible":"invisible",children:S.meaning})]}),Object(t.jsxs)(d.a.Group,{as:u.a,children:[Object(t.jsx)(d.a.Label,{column:!0,children:"Pronunciation"}),Object(t.jsx)(d.a.Label,{column:!0,className:q?"visible":"invisible",children:S.pronunciation})]}),Object(t.jsxs)(d.a.Group,{as:u.a,children:[Object(t.jsx)(d.a.Label,{column:!0,children:"Spelling"}),Object(t.jsx)(d.a.Label,{column:!0,className:q?"visible":"invisible",children:S.spelling})]}),Object(t.jsxs)(d.a.Group,{as:u.a,className:"mb-3",children:[Object(t.jsx)(d.a.Label,{column:!0,children:"Keyboard"}),Object(t.jsx)(d.a.Label,{column:!0,className:q?"visible":"invisible",children:S.keyboard})]}),Object(t.jsxs)(g.a,{direction:"horizontal",gap:2,children:[Object(t.jsx)(p.a,{onClick:function(){return G()},children:"Previous"}),Object(t.jsx)(p.a,{onClick:function(){return J()},children:"Next"}),Object(t.jsx)(p.a,{variant:"secondary",onClick:function(){return E(!q)},children:q?"Hide Answers":"Show Answers"}),Object(t.jsx)(p.a,{variant:"info",onClick:function(){var n=k(l[o]);j(n),m(0),A(n[0])},children:"Shuffle"}),Object(t.jsx)(p.a,{variant:"info",onClick:function(){var n=function(n){return n===l.length-1?0:n+1}(o);e(n);var i=k(l[n]);j(i),m(0),A(i[0]),O(i.length)},children:"Change List"})]})]})}var m=document.getElementById("root");r.a.render(Object(t.jsx)(a.StrictMode,{children:Object(t.jsx)(c,{})}),m)},9:function(n){n.exports=JSON.parse('[[{"word":"\u3042","meaning":"","pronunciation":"a","spelling":"a","keyboard":"a"},{"word":"\u3044","meaning":"","pronunciation":"i","spelling":"i","keyboard":"i"},{"word":"\u3046","meaning":"","pronunciation":"u","spelling":"u","keyboard":"u"},{"word":"\u3048","meaning":"","pronunciation":"e","spelling":"e","keyboard":"e"},{"word":"\u304a","meaning":"","pronunciation":"o","spelling":"o","keyboard":"o"},{"word":"\u304b","meaning":"","pronunciation":"ka","spelling":"ka","keyboard":"ka"},{"word":"\u304d","meaning":"","pronunciation":"ki","spelling":"ki","keyboard":"ki"},{"word":"\u304f","meaning":"","pronunciation":"ku","spelling":"ku","keyboard":"ku"},{"word":"\u3051","meaning":"","pronunciation":"ke","spelling":"ke","keyboard":"ke"},{"word":"\u3053","meaning":"","pronunciation":"ko","spelling":"ko","keyboard":"ko"},{"word":"\u304c","meaning":"","pronunciation":"ga","spelling":"ga","keyboard":"ga"},{"word":"\u304e","meaning":"","pronunciation":"gi","spelling":"gi","keyboard":"gi"},{"word":"\u3050","meaning":"","pronunciation":"gu","spelling":"gu","keyboard":"gu"},{"word":"\u3052","meaning":"","pronunciation":"ge","spelling":"ge","keyboard":"ge"},{"word":"\u3054","meaning":"","pronunciation":"go","spelling":"go","keyboard":"go"},{"word":"\u3055","meaning":"","pronunciation":"sa","spelling":"sa","keyboard":"sa"},{"word":"\u3057","meaning":"","pronunciation":"shi","spelling":"shi","keyboard":"shi or si"},{"word":"\u3059","meaning":"","pronunciation":"su","spelling":"su","keyboard":"su"},{"word":"\u305b","meaning":"","pronunciation":"se","spelling":"se","keyboard":"se"},{"word":"\u305d","meaning":"","pronunciation":"so","spelling":"so","keyboard":"so"},{"word":"\u3056","meaning":"","pronunciation":"za","spelling":"za","keyboard":"za"},{"word":"\u3058","meaning":"","pronunciation":"ji","spelling":"ji","keyboard":"ji"},{"word":"\u305a","meaning":"","pronunciation":"zu","spelling":"zu","keyboard":"zu"},{"word":"\u305c","meaning":"","pronunciation":"ze","spelling":"ze","keyboard":"ze"},{"word":"\u305e","meaning":"","pronunciation":"zo","spelling":"zo","keyboard":"zo"},{"word":"\u305f","meaning":"","pronunciation":"ta","spelling":"ta","keyboard":"ta"},{"word":"\u3061","meaning":"","pronunciation":"chi","spelling":"chi","keyboard":"ti or chi"},{"word":"\u3064","meaning":"","pronunciation":"tsu","spelling":"tsu","keyboard":"tu or tsu"},{"word":"\u3066","meaning":"","pronunciation":"te","spelling":"te","keyboard":"te"},{"word":"\u3068","meaning":"","pronunciation":"to","spelling":"to","keyboard":"to"},{"word":"\u3060","meaning":"","pronunciation":"da","spelling":"da","keyboard":"da"},{"word":"\u3065","meaning":"","pronunciation":"dzu","spelling":"du","keyboard":"du"},{"word":"\u3067","meaning":"","pronunciation":"de","spelling":"de","keyboard":"de"},{"word":"\u3069","meaning":"","pronunciation":"do","spelling":"do","keyboard":"do"},{"word":"\u306a","meaning":"","pronunciation":"na","spelling":"na","keyboard":"na"},{"word":"\u306b","meaning":"","pronunciation":"ni","spelling":"ni","keyboard":"ni"},{"word":"\u306c","meaning":"","pronunciation":"nu","spelling":"nu","keyboard":"nu"},{"word":"\u306d","meaning":"","pronunciation":"ne","spelling":"ne","keyboard":"ne"},{"word":"\u306e","meaning":"","pronunciation":"no","spelling":"no","keyboard":"no"},{"word":"\u306f","meaning":"","pronunciation":"ha","spelling":"ha","keyboard":"ha"},{"word":"\u3072","meaning":"","pronunciation":"hi","spelling":"hi","keyboard":"hi"},{"word":"\u3075","meaning":"","pronunciation":"fu","spelling":"fu","keyboard":"hu or fu"},{"word":"\u3078","meaning":"","pronunciation":"he","spelling":"he","keyboard":"he"},{"word":"\u307b","meaning":"","pronunciation":"ho","spelling":"ho","keyboard":"ho"},{"word":"\u3070","meaning":"","pronunciation":"ba","spelling":"ba","keyboard":"ba"},{"word":"\u3073","meaning":"","pronunciation":"bi","spelling":"bi","keyboard":"bi"},{"word":"\u3076","meaning":"","pronunciation":"bu","spelling":"bu","keyboard":"bu"},{"word":"\u3079","meaning":"","pronunciation":"be","spelling":"be","keyboard":"be"},{"word":"\u307c","meaning":"","pronunciation":"bo","spelling":"bo","keyboard":"bo"},{"word":"\u3071","meaning":"","pronunciation":"pa","spelling":"pa","keyboard":"pa"},{"word":"\u3074","meaning":"","pronunciation":"pi","spelling":"pi","keyboard":"pi"},{"word":"\u3077","meaning":"","pronunciation":"pu","spelling":"pu","keyboard":"pu"},{"word":"\u307a","meaning":"","pronunciation":"pe","spelling":"pe","keyboard":"pe"},{"word":"\u307d","meaning":"","pronunciation":"po","spelling":"po","keyboard":"po"},{"word":"\u3089","meaning":"","pronunciation":"ra","spelling":"ra","keyboard":"ra"},{"word":"\u308a","meaning":"","pronunciation":"ri","spelling":"ri","keyboard":"ri"},{"word":"\u308b","meaning":"","pronunciation":"ru","spelling":"ru","keyboard":"ru"},{"word":"\u308c","meaning":"","pronunciation":"re","spelling":"re","keyboard":"re"},{"word":"\u308d","meaning":"","pronunciation":"ro","spelling":"ro","keyboard":"ro"},{"word":"\u3084","meaning":"","pronunciation":"ya","spelling":"ya","keyboard":"ya"},{"word":"\u3086","meaning":"","pronunciation":"yu","spelling":"yu","keyboard":"yu"},{"word":"\u3088","meaning":"","pronunciation":"yo","spelling":"yo","keyboard":"yo"},{"word":"\u3072\u3083","meaning":"","pronunciation":"hya","spelling":"hya","keyboard":"hya"},{"word":"\u3072\u3085","meaning":"","pronunciation":"hyu","spelling":"hyu","keyboard":"hyu"},{"word":"\u3072\u3087","meaning":"","pronunciation":"hyo","spelling":"hyo","keyboard":"hyo"},{"word":"\u3073\u3083","meaning":"","pronunciation":"bya","spelling":"bya","keyboard":"bya"},{"word":"\u3073\u3085","meaning":"","pronunciation":"byu","spelling":"byu","keyboard":"byu"},{"word":"\u3073\u3087","meaning":"","pronunciation":"byo","spelling":"byo","keyboard":"byo"},{"word":"\u3074\u3083","meaning":"","pronunciation":"pya","spelling":"pya","keyboard":"pya"},{"word":"\u3074\u3085","meaning":"","pronunciation":"pyu","spelling":"pyu","keyboard":"pyu"},{"word":"\u3074\u3087","meaning":"","pronunciation":"pyo","spelling":"pyo","keyboard":"pyo"},{"word":"\u308a\u3083","meaning":"","pronunciation":"rya","spelling":"rya","keyboard":"rya"},{"word":"\u308a\u3085","meaning":"","pronunciation":"ryu","spelling":"ryu","keyboard":"ryu"},{"word":"\u308a\u3087","meaning":"","pronunciation":"ryo","spelling":"ryo","keyboard":"ryo"},{"word":"\u307f\u3083","meaning":"","pronunciation":"mya","spelling":"mya","keyboard":"mya"},{"word":"\u307f\u3085","meaning":"","pronunciation":"myu","spelling":"myu","keyboard":"myu"},{"word":"\u307f\u3087","meaning":"","pronunciation":"myo","spelling":"myo","keyboard":"myo"},{"word":"\u306b\u3083","meaning":"","pronunciation":"nya","spelling":"nya","keyboard":"nya"},{"word":"\u306b\u3085","meaning":"","pronunciation":"nyu","spelling":"nyu","keyboard":"nyu"},{"word":"\u306b\u3087","meaning":"","pronunciation":"nyo","spelling":"nyo","keyboard":"nyo"},{"word":"\u3061\u3083","meaning":"","pronunciation":"cha","spelling":"cha","keyboard":"cha or tya"},{"word":"\u3061\u3085","meaning":"","pronunciation":"chu","spelling":"chu","keyboard":"chu or tyu"},{"word":"\u3061\u3087","meaning":"","pronunciation":"cho","spelling":"cho","keyboard":"cho or tyo"},{"word":"\u3057\u3083","meaning":"","pronunciation":"sha","spelling":"sha","keyboard":"sha"},{"word":"\u3057\u3085","meaning":"","pronunciation":"shu","spelling":"shu","keyboard":"shu"},{"word":"\u3057\u3087","meaning":"","pronunciation":"sho","spelling":"sho","keyboard":"sho"},{"word":"\u3058\u3083","meaning":"","pronunciation":"jya","spelling":"jya","keyboard":"jya"},{"word":"\u3058\u3085","meaning":"","pronunciation":"jyu","spelling":"jyu","keyboard":"jyu"},{"word":"\u3058\u3087","meaning":"","pronunciation":"jyo","spelling":"jyo","keyboard":"jyo"},{"word":"\u304e\u3083","meaning":"","pronunciation":"gya","spelling":"gya","keyboard":"gya"},{"word":"\u304e\u3085","meaning":"","pronunciation":"gyu","spelling":"gyu","keyboard":"gyu"},{"word":"\u304e\u3087","meaning":"","pronunciation":"gyo","spelling":"gyo","keyboard":"gyo"},{"word":"\u304d\u3083","meaning":"","pronunciation":"kya","spelling":"kya","keyboard":"kya"},{"word":"\u304d\u3085","meaning":"","pronunciation":"kyu","spelling":"kyu","keyboard":"kyu"},{"word":"\u304d\u3087","meaning":"","pronunciation":"kyo","spelling":"kyo","keyboard":"kyo"},{"word":"\u307e","meaning":"","pronunciation":"ma","spelling":"ma","keyboard":"ma"},{"word":"\u307f","meaning":"","pronunciation":"mi","spelling":"mi","keyboard":"mi"},{"word":"\u3080","meaning":"","pronunciation":"mu","spelling":"mu","keyboard":"mu"},{"word":"\u3081","meaning":"","pronunciation":"me","spelling":"me","keyboard":"me"},{"word":"\u3082","meaning":"","pronunciation":"mo","spelling":"mo","keyboard":"mo"},{"word":"\u308f","meaning":"","pronunciation":"wa","spelling":"wa","keyboard":"wa"},{"word":"\u3092","meaning":"","pronunciation":"wo","spelling":"wo","keyboard":"wo"},{"word":"\u3093","meaning":"","pronunciation":"n","spelling":"n","keyboard":"nn"}],[{"word":"\u307f\u307f","meaning":"ears","pronunciation":"mimi","spelling":"mi","keyboard":"mi"},{"word":"\u3061\u304f\u3073","meaning":"nipple","pronunciation":"chikubi","spelling":"chikubi","keyboard":"chikubi"},{"word":"\u3044\u3093\u3051\u3044","meaning":"penis","pronunciation":"inkei","spelling":"inkei","keyboard":"innkei"},{"word":"\u3042\u3044","meaning":"love","pronunciation":"ai","spelling":"ai","keyboard":"ai"},{"word":"\u3044","meaning":"stomach","pronunciation":"i","spelling":"i","keyboard":"i"},{"word":"\u3046\u3048","meaning":"up","pronunciation":"ue","spelling":"ue","keyboard":"ue"},{"word":"\u3042\u304a\u3044","meaning":"blue","pronunciation":"aoi","spelling":"aoi","keyboard":"aoi"},{"word":"\u3044\u3044\u3048","meaning":"bo","pronunciation":"iie","spelling":"iie","keyboard":"iie"},{"word":"\u304b","meaning":"mosquito","pronunciation":"ka","spelling":"ka","keyboard":"ka"},{"word":"\u304b\u3052","meaning":"shadow","pronunciation":"kage","spelling":"kage","keyboard":"kage"},{"word":"\u3059\u3057","meaning":"sushi","pronunciation":"sushi","spelling":"sushi","keyboard":"sushi"},{"word":"\u304d\u304f","meaning":"to listen","pronunciation":"kiku","spelling":"kiku","keyboard":"kiku"},{"word":"\u304b\u304f","meaning":"to write","pronunciation":"kaku","spelling":"kaku","keyboard":"kaku"},{"word":"\u3053\u3048","meaning":"voice","pronunciation":"koe","spelling":"koe","keyboard":"koe"},{"word":"\u304b\u304e","meaning":"key","pronunciation":"kagi","spelling":"kagi","keyboard":"kagi"},{"word":"\u304d\u304a\u304f","meaning":"memory","pronunciation":"kioku","spelling":"kioku","keyboard":"kioku"},{"word":"\u3048\u3044\u304c","meaning":"movie","pronunciation":"eiga","spelling":"eiga","keyboard":"eiga"},{"word":"\u304a\u304a\u304d\u3044","meaning":"big","pronunciation":"ookii","spelling":"ookii","keyboard":"ookii"},{"word":"\u305a","meaning":"diagram","pronunciation":"zu","spelling":"zu","keyboard":"zu"},{"word":"\u3058\u3053","meaning":"accident","pronunciation":"jiko","spelling":"jiko","keyboard":"jiko"},{"word":"\u3059\u304d","meaning":"like","pronunciation":"suki","spelling":"suki","keyboard":"suki"},{"word":"\u3055\u304f","meaning":"to bloom","pronunciation":"saku","spelling":"saku","keyboard":"saku"},{"word":"\u305e\u3046","meaning":"elephant","pronunciation":"zou","spelling":"zou","keyboard":"zou"},{"word":"\u304a\u304b\u3057","meaning":"sweets","pronunciation":"okashi","spelling":"okashi","keyboard":"okashi"},{"word":"\u304a\u3055\u3051","meaning":"alcohol","pronunciation":"osake","spelling":"osake","keyboard":"osake"},{"word":"\u3055\u3044\u3054","meaning":"last","pronunciation":"saigo","spelling":"saigo","keyboard":"saigo"},{"word":"\u3053\u3046\u3053\u3046\u305b\u3044","meaning":"high school student","pronunciation":"koukousei","spelling":"koukousei","keyboard":"koukousei"},{"word":"\u304b\u3055","meaning":"umbrella","pronunciation":"kasa","spelling":"kasa","keyboard":"kasa"},{"word":"\u304a\u3059","meaning":"to push","pronunciation":"osu","spelling":"osu","keyboard":"osu"},{"word":"\u304d\u3057","meaning":"knight","pronunciation":"kishi","spelling":"kishi","keyboard":"kishi"},{"word":"\u3059\u3050","meaning":"immediately","pronunciation":"sugu","spelling":"sugu","keyboard":"sugu"},{"word":"\u3051\u3059","meaning":"to erase","pronunciation":"kesu","spelling":"kesu","keyboard":"kesu"},{"word":"\u304f\u3058","meaning":"lottery","pronunciation":"kuji","spelling":"kuji","keyboard":"kuji"},{"word":"\u3057\u304a","meaning":"salt","pronunciation":"shio","spelling":"shio","keyboard":"shio"},{"word":"\u3057\u3050\u3055","meaning":"gesture or mannerism","pronunciation":"shigusa","spelling":"shigusa","keyboard":"shigusa"},{"word":"\u3055\u305d\u3046","meaning":"to invite","pronunciation":"sasou","spelling":"sasou","keyboard":"sasou"},{"word":"\u304a\u3053\u3059","meaning":"to wake someone up or to cause to happen","pronunciation":"okosu","spelling":"okosu","keyboard":"okosu"},{"word":"\u3059\u3053\u3057","meaning":"a little","pronunciation":"sukoshi","spelling":"sukoshi","keyboard":"sukoshi"},{"word":"\u3055\u304c\u3059","meaning":"to search","pronunciation":"sagasu","spelling":"sagasu","keyboard":"sagasu"},{"word":"\u3057\u304b\u304f","meaning":"square","pronunciation":"shikaku","spelling":"shikaku","keyboard":"shikaku"},{"word":"\u304b\u3048\u3059","meaning":"to return","pronunciation":"kaesu","spelling":"kaesu","keyboard":"kaesu"},{"word":"\u3046\u3055\u304e","meaning":"rabbit","pronunciation":"usagi","spelling":"usagi","keyboard":"usagi"},{"word":"\u304a\u304b\u3057\u3044","meaning":"strange","pronunciation":"okashii","spelling":"okashii","keyboard":"okashii"},{"word":"\u304c\u304f\u305b\u3044","meaning":"student","pronunciation":"gakusei","spelling":"gakusei","keyboard":"gakusei"},{"word":"\u3061\u3044\u3055\u3044","meaning":"small","pronunciation":"chiisai","spelling":"chiisai","keyboard":"chiisai"},{"word":"\u3061\u3044\u3055\u3044\u3064","meaning":"small \u3064","pronunciation":"chiisaitsu","spelling":"chiisaitsu","keyboard":"chiisaitsu"},{"word":"\u304b\u3063\u3053\u3044\u3044","meaning":"cool","pronunciation":"kakkoi","spelling":"kakkoi","keyboard":"kakkoii"},{"word":"\u3058\u3063\u304b","meaning":"one\'s family home","pronunciation":"jiika","spelling":"jikka","keyboard":"jikka"},{"word":"\u304b\u3063\u305f","meaning":"bought","pronunciation":"kaata","spelling":"katta","keyboard":"katta"},{"word":"\u304b\u3053","meaning":"past","pronunciation":"kako","spelling":"kako","keyboard":"kako"},{"word":"\u304b\u305f","meaning":"shoulder","pronunciation":"kata","spelling":"kata","keyboard":"kata"},{"word":"\u3066","meaning":"hand","pronunciation":"te","spelling":"te","keyboard":"te"},{"word":"\u304f\u3064","meaning":"shoes","pronunciation":"kutsu","spelling":"kutsu","keyboard":"kutsu"},{"word":"\u3061\u305a","meaning":"map","pronunciation":"chizu","spelling":"chizu","keyboard":"chizu"},{"word":"\u305f\u3064","meaning":"to stand","pronunciation":"tatsu","spelling":"tatsu","keyboard":"tatsu"},{"word":"\u3068\u304a\u3044","meaning":"far","pronunciation":"tooi","spelling":"t\u014di","keyboard":"tooi"},{"word":"\u3064\u3065\u304f","meaning":"to continue","pronunciation":"tsudzuku","spelling":"tsudzuku","keyboard":"tsuduku"},{"word":"\u3069\u3063\u3061","meaning":"which","pronunciation":"doochi","spelling":"dotchi","keyboard":"docchi"},{"word":"\u3060\u3044\u304c\u304f","meaning":"university","pronunciation":"daigaku","spelling":"daigaku","keyboard":"daigaku"},{"word":"\u3042\u3055\u3063\u3066","meaning":"the day after tomorrow","pronunciation":"asaate","spelling":"asatte","keyboard":"asatte"},{"word":"\u304a\u3061\u3064\u304f","meaning":"to calm down","pronunciation":"ochitsuku","spelling":"ochitsuku","keyboard":"ochitsuku"},{"word":"\u3058","meaning":"letter or character","pronunciation":"ji","spelling":"ji","keyboard":"ji"},{"word":"\u306a\u306b","meaning":"what","pronunciation":"nani","spelling":"nani","keyboard":"nani"},{"word":"\u3044\u306c","meaning":"dog","pronunciation":"inu","spelling":"inu","keyboard":"inu"},{"word":"\u306d\u3053","meaning":"cat","pronunciation":"neko","spelling":"neko","keyboard":"neko"},{"word":"\u306b\u3058","meaning":"rainbow","pronunciation":"niji","spelling":"niji","keyboard":"niji"},{"word":"\u304a\u304b\u306d","meaning":"money","pronunciation":"okane","spelling":"okane","keyboard":"okane"},{"word":"\u305b\u306a\u304b","meaning":"upper back","pronunciation":"senaka","spelling":"senaka","keyboard":"senaka"},{"word":"\u306a\u3063\u3068\u3046","meaning":"fermented soybeans","pronunciation":"naato","spelling":"natto","keyboard":"nattou"},{"word":"\u304a\u306d\u304c\u3044","meaning":"\'Please!\' or a request","pronunciation":"onegai","spelling":"onegai","keyboard":"onegai"},{"word":"\u304b\u305f\u306a","meaning":"sword","pronunciation":"katana","spelling":"katana","keyboard":"katana"},{"word":"\u306f\u306a","meaning":"flower","pronunciation":"hana","spelling":"hana","keyboard":"hana"},{"word":"\u3072\u3056","meaning":"knee","pronunciation":"hiza","spelling":"hiza","keyboard":"hiza"},{"word":"\u306f\u3057","meaning":"chopsticks or bridge","pronunciation":"hashi","spelling":"hashi","keyboard":"hashi"},{"word":"\u3075\u3057\u304e","meaning":"mysterious","pronunciation":"hushigi","spelling":"bushigi","keyboard":"bushigi"},{"word":"\u306f\u306a\u3073","meaning":"fireworks","pronunciation":"hanabi","spelling":"hanabi","keyboard":"hanabi"},{"word":"\u3075\u304f\u3056\u3064","meaning":"complicated","pronunciation":"hukuzatsu","spelling":"bukuzatsu","keyboard":"bukuzatsu"},{"word":"\u3072\u304d\u3060\u3057","meaning":"drawer","pronunciation":"hikidashi","spelling":"hikidashi","keyboard":"hikidashi"},{"word":"\u3061\u3073","meaning":"little","pronunciation":"chibi","spelling":"chibi","keyboard":"chibi"},{"word":"\u3081","meaning":"eye","pronunciation":"me","spelling":"me","keyboard":"me"},{"word":"\u307e\u3061","meaning":"town or city","pronunciation":"machi","spelling":"machi","keyboard":"machi"},{"word":"\u3082\u3061","meaning":"rice cake","pronunciation":"mochi","spelling":"mochi","keyboard":"mochi"},{"word":"\u3042\u3081","meaning":"rain or candy - depending on pronunciation","pronunciation":"rain = ame (slow) or candy = ame (fast)","spelling":"ame","keyboard":"ame"},{"word":"\u3042\u305f\u307e","meaning":"head","pronunciation":"atama","spelling":"atama","keyboard":"atama"},{"word":"\u304d\u3082\u306e","meaning":"something you wear","pronunciation":"kimono","spelling":"kimono","keyboard":"kimono"},{"word":"\u305f\u3081\u3044\u304d","meaning":"sigh","pronunciation":"tameiki","spelling":"tameiki","keyboard":"tameiki"},{"word":"\u307e\u3044\u306b\u3061","meaning":"everyday","pronunciation":"mainichi","spelling":"mainichi","keyboard":"mainichi"},{"word":"\u3080\u305a\u304b\u3057\u3044","meaning":"difficult","pronunciation":"muzukashii","spelling":"muzukashii","keyboard":"muzukashii"},{"word":"\u3046\u306a\u304e","meaning":"eel","pronunciation":"unagi","spelling":"unagi","keyboard":"unagi"},{"word":"\u304f\u307e","meaning":"bear","pronunciation":"kuma","spelling":"kuma","keyboard":"kuma"},{"word":"\u306f\u304f","meaning":"foil or white","pronunciation":"haku","spelling":"haku","keyboard":"haku"},{"word":"\u306d\u3058","meaning":"screw or whirl or twist or wrench","pronunciation":"neji","spelling":"neji","keyboard":"neji"},{"word":"\u3064\u306a\u307f","meaning":"tsunami","pronunciation":"tsunami","spelling":"tsunami","keyboard":"tsunami"},{"word":"\u304d\u3064\u306d","meaning":"fox","pronunciation":"kitsune","spelling":"kitsune","keyboard":"kitsune"},{"word":"\u306e\u3070\u3057","meaning":"to grow or extension","pronunciation":"nobashi","spelling":"nobashi","keyboard":"nobashi"},{"word":"\u304b\u307f","meaning":"hair or paper or god","pronunciation":"kami","spelling":"kami","keyboard":"kami"},{"word":"\u304b\u304b\u3057","meaning":"scarecrow","pronunciation":"kakashi","spelling":"kakashi","keyboard":"kakashi"},{"word":"\u306f\u305f\u3051","meaning":"farmland or field","pronunciation":"hatake","spelling":"hatake","keyboard":"hatake"},{"word":"\u3044\u3061\u3054","meaning":"strawberry","pronunciation":"ichigo","spelling":"ichigo","keyboard":"ichigo"},{"word":"\u3044\u305f\u3061","meaning":"weasel","pronunciation":"itachi","spelling":"itachi","keyboard":"itachi"},{"word":"\u304d\u3055\u3081","meaning":"shark","pronunciation":"kisame","spelling":"kisame","keyboard":"kisame"},{"word":"\u3055\u3051","meaning":"sake or salmon","pronunciation":"sake","spelling":"sake","keyboard":"sake"},{"word":"\u3055\u308b","meaning":"monkey","pronunciation":"saru","spelling":"saru","keyboard":"saru"},{"word":"\u306f\u308c","meaning":"sunny, clear weather","pronunciation":"hare","spelling":"hare","keyboard":"hare"},{"word":"\u3089\u304f","meaning":"convenient or comfortable","pronunciation":"raku","spelling":"raku","keyboard":"raku"},{"word":"\u304a\u3075\u308d","meaning":"bath","pronunciation":"ofuro","spelling":"ofuro","keyboard":"ofuro"},{"word":"\u304f\u3059\u308a","meaning":"medicine","pronunciation":"kusuri","spelling":"kusuri","keyboard":"kusuri"},{"word":"\u304a\u306b\u304e\u308a","meaning":"onigiri","pronunciation":"onigiri","spelling":"onigiri","keyboard":"onigiri"},{"word":"\u306c\u3044\u3050\u308b\u307f","meaning":"stuffed toy","pronunciation":"nuigurumi","spelling":"nuigurumi","keyboard":"nuigurumi"},{"word":"\u307e\u308b","meaning":"circle","pronunciation":"maru","spelling":"maru","keyboard":"maru"},{"word":"\u3057\u304b\u307e\u308b","meaning":"squat","pronunciation":"shikamaru","spelling":"shikamaru","keyboard":"shikamaru"},{"word":"\u306c\u308b","meaning":"slimy","pronunciation":"nuru","spelling":"nuru","keyboard":"nuru"},{"word":"\u3071\u3044\u305a\u308a","meaning":"bucking","pronunciation":"paizuri","spelling":"paizuri","keyboard":"paizuri"},{"word":"\u3068\u3073","meaning":"jump","pronunciation":"tobi","spelling":"tobi","keyboard":"tobi"},{"word":"\u3055\u305d\u308a","meaning":"scorpion","pronunciation":"sasori","spelling":"sasori","keyboard":"sasori"},{"word":"\u3068\u3069\u308d\u304d","meaning":"to roar","pronunciation":"todoroki","spelling":"todoroki","keyboard":"toboroki"},{"word":"\u304a\u3044\u308d\u3051","meaning":"sex appeal","pronunciation":"oiroke","spelling":"oiroke","keyboard":"oiroke"},{"word":"\u3048\u3073","meaning":"shrimp","pronunciation":"ebi","spelling":"ebi","keyboard":"ebi"},{"word":"\u308a\u3085\u3046","meaning":"dragon","pronunciation":"ryu","spelling":"ry\u016b","keyboard":"ryuu"},{"word":"\u308a\u3086\u3046","meaning":"reason","pronunciation":"riyu","spelling":"riy\u016b","keyboard":"riyuu"},{"word":"\u304d\u3087\u3046","meaning":"today","pronunciation":"kyo","spelling":"ky\u014d","keyboard":"kyou"},{"word":"\u3086\u3081","meaning":"dream","pronunciation":"yume","spelling":"yume","keyboard":"yume"},{"word":"\u3084\u307e","meaning":"mountain","pronunciation":"yama","spelling":"yama","keyboard":"yama"},{"word":"\u3084\u3059\u3044","meaning":"cheap","pronunciation":"yasui","spelling":"yasui","keyboard":"yasui"},{"word":"\u308a\u3087\u3046\u308a","meaning":"cooking","pronunciation":"ryouri","spelling":"ry\u014dri","keyboard":"ryouri"},{"word":"\u304b\u3044\u3057\u3083","meaning":"company","pronunciation":"kaisha","spelling":"kaisha","keyboard":"kaisha"},{"word":"\u3058\u3085\u3046\u3069\u3046","meaning":"judo","pronunciation":"judo","spelling":"judo","keyboard":"juudou"},{"word":"\u3057\u3085\u304f\u3060\u3044","meaning":"homework","pronunciation":"shukudai","spelling":"shukudai","keyboard":"shukudai"},{"word":"\u3073\u3087\u3046\u3044\u3093","meaning":"hospital","pronunciation":"byoin","spelling":"by\u014din","keyboard":"byouin "},{"word":"\u3059\u307f\u307e\u305b\u3093","meaning":"excuse me","pronunciation":"sumimasen","spelling":"sumimasen","keyboard":"sumimasen"},{"word":"\u306f\u3044","meaning":"yes","pronunciation":"hai","spelling":"hai","keyboard":"hai"}],[{"word":"\u30a2","meaning":"","pronunciation":"a","spelling":"a","keyboard":"a "},{"word":"\u30a4","meaning":"","pronunciation":"i","spelling":"i","keyboard":"i"},{"word":"\u30a6","meaning":"","pronunciation":"u","spelling":"u","keyboard":"u"},{"word":"\u30a8","meaning":"","pronunciation":"e","spelling":"e","keyboard":"e"},{"word":"\u30aa","meaning":"","pronunciation":"o","spelling":"o","keyboard":"o"},{"word":"\u30ab","meaning":"","pronunciation":"ka","spelling":"ka","keyboard":"ka "},{"word":"\u30ad","meaning":"","pronunciation":"ki","spelling":"ki","keyboard":"ki"},{"word":"\u30af","meaning":"","pronunciation":"ku","spelling":"ku","keyboard":"ku"},{"word":"\u30b1","meaning":"","pronunciation":"ke","spelling":"ke","keyboard":"ke"},{"word":"\u30b3","meaning":"","pronunciation":"ko","spelling":"ko","keyboard":"ko"},{"word":"\u30b5","meaning":"","pronunciation":"sa","spelling":"sa","keyboard":"sa "},{"word":"\u30b7","meaning":"","pronunciation":"shi","spelling":"shi","keyboard":"shi or si"},{"word":"\u30b9","meaning":"","pronunciation":"su","spelling":"su","keyboard":"su"},{"word":"\u30bb","meaning":"","pronunciation":"se","spelling":"se","keyboard":"se"},{"word":"\u30bd","meaning":"","pronunciation":"so","spelling":"so","keyboard":"so"},{"word":"\u30b6","meaning":"","pronunciation":"za","spelling":"za","keyboard":"za "},{"word":"\u30b8","meaning":"","pronunciation":"ji","spelling":"ji","keyboard":"ji"},{"word":"\u30ba","meaning":"","pronunciation":"zu","spelling":"zu","keyboard":"zu"},{"word":"\u30bc","meaning":"","pronunciation":"ze","spelling":"ze","keyboard":"ze"},{"word":"\u30be","meaning":"","pronunciation":"zo","spelling":"zo","keyboard":"zo"},{"word":"\u30bf","meaning":"","pronunciation":"ta","spelling":"ta","keyboard":"ta "},{"word":"\u30c1","meaning":"","pronunciation":"chi","spelling":"chi","keyboard":"chi"},{"word":"\u30c4","meaning":"","pronunciation":"tsu","spelling":"tsu","keyboard":"tsu"},{"word":"\u30c6","meaning":"","pronunciation":"te","spelling":"te","keyboard":"te"},{"word":"\u30c8","meaning":"","pronunciation":"to","spelling":"to","keyboard":"to"},{"word":"\u30c0","meaning":"","pronunciation":"da","spelling":"da","keyboard":"da "},{"word":"\u30c2","meaning":"","pronunciation":"di","spelling":"ji","keyboard":"di"},{"word":"\u30c5","meaning":"","pronunciation":"dsu","spelling":"du","keyboard":"du"},{"word":"\u30c7","meaning":"","pronunciation":"de","spelling":"de","keyboard":"de"},{"word":"\u30c9","meaning":"","pronunciation":"do","spelling":"do","keyboard":"do"},{"word":"\u30c1\u30a7","meaning":"","pronunciation":"che","spelling":"che","keyboard":"che"},{"word":"\u30c6\u30a3","meaning":"","pronunciation":"ti","spelling":"ti","keyboard":"texi"},{"word":"\u30c7\u30a3","meaning":"","pronunciation":"di","spelling":"di","keyboard":"dexi"},{"word":"\u30c8\u30a5","meaning":"","pronunciation":"tu","spelling":"tu","keyboard":"toxu"},{"word":"\u30c9\u30a5","meaning":"","pronunciation":"du","spelling":"du","keyboard":"doxu"},{"word":"\u30f4","meaning":"V sound","pronunciation":"b","spelling":"b","keyboard":"vu"},{"word":"\u30a4\u30a7","meaning":"","pronunciation":"ye","spelling":"ye","keyboard":"ye"},{"word":"\u30a6\u30a3","meaning":"","pronunciation":"wi","spelling":"wi","keyboard":"wi"},{"word":"\u30a6\u30a7","meaning":"","pronunciation":"we","spelling":"we","keyboard":"we"},{"word":"\u30f4\u30a1","meaning":"","pronunciation":"ba","spelling":"ba","keyboard":"va"},{"word":"\u30f4\u30a3","meaning":"","pronunciation":"bi","spelling":"bi","keyboard":"vi"},{"word":"\u30f4\u30a7","meaning":"","pronunciation":"be","spelling":"be","keyboard":"ve"},{"word":"\u30f4\u30a9","meaning":"","pronunciation":"bo","spelling":"bo","keyboard":"vo"},{"word":"\u30a2\u30fc","meaning":"","pronunciation":"aa","spelling":"a","keyboard":"a-"},{"word":"\u30b7\u30a7","meaning":"","pronunciation":"she","spelling":"she","keyboard":"she"},{"word":"\u30b8\u30a7","meaning":"","pronunciation":"je","spelling":"je","keyboard":"je"},{"word":"\u30ca","meaning":"","pronunciation":"na","spelling":"na","keyboard":"na"},{"word":"\u30cb","meaning":"","pronunciation":"ni","spelling":"ni","keyboard":"ni"},{"word":"\u30cc","meaning":"","pronunciation":"nu","spelling":"nu","keyboard":"nu"},{"word":"\u30cd","meaning":"","pronunciation":"ne","spelling":"ne","keyboard":"ne"},{"word":"\u30ce","meaning":"","pronunciation":"no","spelling":"no","keyboard":"no"},{"word":"\u30cf","meaning":"","pronunciation":"ha","spelling":"ha","keyboard":"ha"},{"word":"\u30d2","meaning":"","pronunciation":"hi","spelling":"hi","keyboard":"hi"},{"word":"\u30d5","meaning":"","pronunciation":"fu","spelling":"fu","keyboard":"fu"},{"word":"\u3078","meaning":"","pronunciation":"he","spelling":"he","keyboard":"he"},{"word":"\u30db","meaning":"","pronunciation":"ho","spelling":"ho","keyboard":"ho"},{"word":"\u30d0","meaning":"","pronunciation":"ba","spelling":"ba","keyboard":"ba"},{"word":"\u30d3","meaning":"","pronunciation":"bi","spelling":"bi","keyboard":"bi"},{"word":"\u30d6","meaning":"","pronunciation":"bu","spelling":"bu","keyboard":"bu"},{"word":"\u30d9","meaning":"","pronunciation":"be","spelling":"be","keyboard":"be"},{"word":"\u30dc","meaning":"","pronunciation":"bo","spelling":"bo","keyboard":"bo"},{"word":"\u30d1","meaning":"","pronunciation":"pa","spelling":"pa","keyboard":"pa"},{"word":"\u30d4","meaning":"","pronunciation":"pi","spelling":"pi","keyboard":"pi"},{"word":"\u30d7","meaning":"","pronunciation":"pu","spelling":"pu","keyboard":"pu"},{"word":"\u307a","meaning":"","pronunciation":"pe","spelling":"pe","keyboard":"pe"},{"word":"\u30dd","meaning":"","pronunciation":"po","spelling":"po","keyboard":"po"},{"word":"\u30d5\u30a1","meaning":"","pronunciation":"fa","spelling":"fa","keyboard":"fa"},{"word":"\u30d5\u30a3","meaning":"","pronunciation":"fi","spelling":"fi","keyboard":"fi"},{"word":"\u30d5\u30a7","meaning":"","pronunciation":"fe","spelling":"fe","keyboard":"fe"},{"word":"\u30d5\u30a9","meaning":"","pronunciation":"fo","spelling":"fo","keyboard":"fo"}],[{"word":"\u30a2!","meaning":"expression when you realize something","pronunciation":"Ah!","spelling":"a!","keyboard":"a!"},{"word":"\u30aa\uff1d","meaning":"expression when being amazed","pronunciation":"Oooo","spelling":"oo","keyboard":"o-"},{"word":"\u30a8\u30b3","meaning":"eco-friendly","pronunciation":"eko","spelling":"eco","keyboard":"eco"},{"word":"\u30ae\u30e4","meaning":"gear","pronunciation":"giya","spelling":"gear","keyboard":"giya"},{"word":"\u30ab\u30ab\u30aa","meaning":"cacao","pronunciation":"kakao","spelling":"cacao","keyboard":"kakao"},{"word":"\u30b1\u30fc\u30ad","meaning":"cake","pronunciation":"keeki","spelling":"cake","keyboard":"ke-ki"},{"word":"\u30ab\u30fc\u30ab\u30fc","meaning":"crow\'s sound or caw caw!","pronunciation":"kaakaa","spelling":"kaakaa","keyboard":"ka-ka-"},{"word":"\u30a4\u30b1\u3066\u308b","meaning":"cool or sexy","pronunciation":"iketeru","spelling":"cool or sexy","keyboard":"iketeru"},{"word":"\u30b0\u30fc\u30b0\u30fc","meaning":"sound of snoring or a grumbling stomach","pronunciation":"guuguu","spelling":"guuguu","keyboard":"gu-gu-"},{"word":"\u30aa\u30fc\u30b1\u30fc","meaning":"okay","pronunciation":"ookee","spelling":"okay","keyboard":"o-ke or o-ke-"},{"word":"\u30b7\u30a7\u30a2","meaning":"share","pronunciation":"shea","spelling":"share","keyboard":"shea"},{"word":"\u30b7\u30a7\u30a2\u3059\u308b","meaning":"to share","pronunciation":"sheasuru","spelling":"to share","keyboard":"sheasuru"},{"word":"\u30b7\u30a7\u30d5","meaning":"chef","pronunciation":"shef","spelling":"chef","keyboard":"shefu"},{"word":"\u30b8\u30a7\u30ea\u30fc","meaning":"jelly","pronunciation":"jerii","spelling":"jelly","keyboard":"jeri-"},{"word":"\u30ac\u30b9","meaning":"gas (in gas lines)","pronunciation":"gasu","spelling":"gas","keyboard":"gasu"},{"word":"\u30a2\u30b8\u30a2","meaning":"Asia","pronunciation":"aja","spelling":"Asia","keyboard":"aja"},{"word":"\u30b9\u30ad\u30fc","meaning":"skiing","pronunciation":"sukii","spelling":"skiing","keyboard":"suki-"},{"word":"\u30b3\u30fc\u30b9","meaning":"course","pronunciation":"koosu","spelling":"course","keyboard":"ko-su"},{"word":"\u30bd\u30fc\u30b9","meaning":"sauce or source","pronunciation":"soosu","spelling":"sauce or source","keyboard":"so-su"},{"word":"\u30ab\u30b5\u30ab\u30b5","meaning":"sound of rustling or dry","pronunciation":"kasakasa","spelling":"kasakasa","keyboard":"kasakasa"},{"word":"\u30a6\u30a3\u30b9\u30ad\u30fc","meaning":"whiskey","pronunciation":"wisukii","spelling":"whiskey","keyboard":"wisuki-"},{"word":"\u30bf\u30a4","meaning":"Thailand","pronunciation":"tai","spelling":"Thailand","keyboard":"tai"},{"word":"\u30c1\u30fc\u30ba","meaning":"cheese","pronunciation":"chizu","spelling":"cheese","keyboard":"chi-zu"},{"word":"\u30c7\u30fc\u30c8","meaning":"date (romantic)","pronunciation":"deeto","spelling":"date","keyboard":"de-to"},{"word":"\u30c9\u30a4\u30c4","meaning":"Germany","pronunciation":"doitsu","spelling":"Germany","keyboard":"doitsu"},{"word":"\u30b9\u30a4\u30c3\u30c1","meaning":"switch","pronunciation":"suicchi","spelling":"switch","keyboard":"suicchi"},{"word":"\u30b5\u30c3\u30ab\u30fc","meaning":"soccer","pronunciation":"sakkaa","spelling":"soccer","keyboard":"sakka-"},{"word":"\u30a2\u30a6\u30c8\u30c9\u30a2","meaning":"outdoor Activities","pronunciation":"autodoa","spelling":"outdoor","keyboard":"autodoa"},{"word":"\u30b8\u30a7\u30c3\u30c8\u30b3\u30fc\u30b9\u30bf\u30fc","meaning":"roller coaster","pronunciation":"jettokoostaa","spelling":"roller coaster","keyboard":"jettoko-suta-"},{"word":"\u30c4\u30ca","meaning":"tuna","pronunciation":"tsuna","spelling":"tuna","keyboard":"tuna or tsuna"},{"word":"\u30cd\u30bf","meaning":"joke material or punchline","pronunciation":"neta","spelling":"joke material or punchline","keyboard":"neta"},{"word":"\u30ce\u30fc\u30c8","meaning":"notebook","pronunciation":"nooto","spelling":"notebook","keyboard":"no-to"},{"word":"\u30b7\u30cb\u30a2","meaning":"elderly people","pronunciation":"shinia","spelling":"elderly people","keyboard":"shinia"},{"word":"\u30ab\u30cc\u30fc","meaning":"canoe","pronunciation":"kanuu","spelling":"canoe","keyboard":"kanu-"},{"word":"\u30cd\u30c3\u30c8","meaning":"internet","pronunciation":"netto","spelling":"internet","keyboard":"netto"},{"word":"\u30cb\u30b3\u30cb\u30b3","meaning":"smiling from ear to ear","pronunciation":"nikoniko","spelling":"smiling from ear to ear","keyboard":"nikoniko"},{"word":"\u30c7\u30b6\u30a4\u30ca\u30fc","meaning":"designer","pronunciation":"dezainaa","spelling":"designer","keyboard":"dezaina-"},{"word":"\u30a2\u30a4\u30b9","meaning":"ice cream","pronunciation":"aisu","spelling":"ice cream","keyboard":"aisu"},{"word":"\u30d9\u30fc\u30b9","meaning":"bass (instrument) or base (baseball)","pronunciation":"beesu","spelling":"bass or base","keyboard":"be-su"},{"word":"\u30b5\u30dc\u308b","meaning":"to slack off","pronunciation":"saboru","spelling":"to slack off","keyboard":"saboru"},{"word":"\u30b3\u30fc\u30d2\u30fc","meaning":"coffee","pronunciation":"koofii","spelling":"coffee","keyboard":"ko-fi-"},{"word":"\u30c7\u30d1\u30fc\u30c8","meaning":"department store","pronunciation":"depaato","spelling":"department store","keyboard":"depa-to"},{"word":"\u30d3\u30b8\u30cd\u30b9","meaning":"business","pronunciation":"bijinesu","spelling":"business","keyboard":"bijinesu"},{"word":"\u30d1\u30fc\u30c6\u30a3\u30fc","meaning":"party","pronunciation":"paatii","spelling":"party","keyboard":"pa-texi-"},{"word":"\u30d4\u30ab\u30d4\u30ab","meaning":"shiny, sparkling","pronunciation":"pikapika","spelling":"shiny, sparkling","keyboard":"pikapika"},{"word":"\u30b4\u30dc\u30b4\u30dc","meaning":"sound of rushing water","pronunciation":"gobogobo","spelling":"sound of rushing water","keyboard":"gobogobo"},{"word":"\u30b9\u30de\u30fc\u30c8","meaning":"smart-looking","pronunciation":"sumaato","spelling":"smart-looking","keyboard":"suma-to"}]]')}},[[24,1,2]]]);
//# sourceMappingURL=main.0d51f0cc.chunk.js.map