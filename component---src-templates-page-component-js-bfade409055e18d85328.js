(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(214),o=n.n(i),s=n(166),c=n(164),l=n(333),p=n(762),d=function(e){var t=e.children,n=e.className,a=r.a.useReducer(function(e){return!e},!1),i=a[0],o=a[1];return"language-plain"!==n?r.a.createElement("code",null,t):r.a.createElement("div",{className:"code-example"},r.a.createElement(p.d,{code:t[0],scope:{Checkbox:l.Checkbox,Radio:l.Radio,Switch:l.Switch}},r.a.createElement("div",{className:"code-example__preview"},r.a.createElement(p.c,null),r.a.createElement(p.b,null)),r.a.createElement("button",{className:"code-example__editor-toggle",onClick:o},i?"Hide Code":"Show Code"),i?r.a.createElement("div",{className:"code-example__editor"},r.a.createElement(p.a,{tabSize:4})):null))},u=(n(750),n(752),n(76),n(55),n(35),n(753),n(152)),m=n.n(u),h=n(755);function _(e){var t=e.component,n=e.show;return void 0!==n&&n?r.a.createElement("table",{className:"props-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Required"),r.a.createElement("th",{width:"20%"},"Default Value"),r.a.createElement("th",null,"Description"))),r.a.createElement("tbody",null,Object.keys(t.props).map(function(e){var n=t.props[e];return r.a.createElement("tr",{key:e},r.a.createElement("td",null,e),r.a.createElement("td",{title:n.flowType.raw},r.a.createElement("span",{className:m()(n.flowType.raw?"has-tooltip":null)},"signature"===n.flowType.name?n.flowType.type:n.flowType.name)),r.a.createElement("td",null,n.required.toString()),r.a.createElement("td",null,n.defaultValue?n.defaultValue.value:null),r.a.createElement("td",{dangerouslySetInnerHTML:{__html:h.markdown.toHTML(n.description)}}))}))):null}var j=n(761);n.d(t,"query",function(){return g});var y=new o.a({createElement:r.a.createElement,components:{code:d,pre:function(e){return e.children&&e.children[0]?r.a.createElement("pre",e):r.a.createElement("div",e)},table:function(e){return r.a.createElement("table",Object.assign({},e,{className:"content__table"}))}}}).Compiler,S=function(e){var t=e.displayName,n=r.a.useReducer(function(e){return!e},!1),a=n[0],i=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"link toggle-props",onClick:i},a?"Hide":"Show"," Props"),r.a.createElement(_,{component:j[t],show:a}))},g=(t.default=function(e){var t=e.data.markdownRemark;return r.a.createElement(s.a,null,r.a.createElement(c.a,{title:t.frontmatter.title}),r.a.createElement("div",null,r.a.createElement("h1",null,t.frontmatter.title),j[t.frontmatter.displayName]?r.a.createElement(S,{displayName:t.frontmatter.displayName}):null,y(t.htmlAst)))},"2466149919")},155:function(e,t,n){var a;e.exports=(a=n(160))&&a.default||a},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Pretty Checkbox React",description:"A tiny react wrapper around pretty-checkbox"}}}}},160:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(56),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},161:function(e){e.exports={data:{allSitePage:{edges:[{node:{path:"/dev-404-page/",context:null}},{node:{path:"/home/",context:{id:"70290906-d9eb-5b6e-a1f9-5034702f10c8",parent:null,children:[],slug:"/home/",title:"Home",order:-2}}},{node:{path:"/components/cuztomize/",context:{id:"2786ada0-9ec8-55bb-adeb-94cb4c937e49",parent:null,children:[],slug:"/components/cuztomize/",title:"Customize",order:6}}},{node:{path:"/getting-started/",context:{id:"4c3f7dae-1d89-5996-8f09-7b8c95e7ffdb",parent:null,children:[],slug:"/getting-started/",title:"Getting Started",order:-1}}},{node:{path:"/components/faq/",context:{id:"b258baef-5087-504a-8802-bf90b274284a",parent:null,children:[],slug:"/components/faq/",title:"FAQ",order:6}}},{node:{path:"/components/switch/",context:{id:"ce0a125a-5840-5e86-a83e-e19c4e5d7a82",parent:null,children:[],slug:"/components/switch/",title:"Switch",order:2}}},{node:{path:"/components/radio/",context:{id:"79b7716a-4434-521d-945c-d92a11084b33",parent:null,children:[],slug:"/components/radio/",title:"Radio",order:3}}},{node:{path:"/components/checkbox/indeterminate/",context:{id:"33d3e7c4-dbe0-5c0f-9946-97f833415d90",parent:"e65c1164-efe1-593d-b48f-e1a9c1e2d376",children:[],slug:"/components/checkbox/indeterminate/",title:"Indeterminate",order:0}}},{node:{path:"/components/checkbox/",context:{id:"e65c1164-efe1-593d-b48f-e1a9c1e2d376",parent:null,children:["33d3e7c4-dbe0-5c0f-9946-97f833415d90"],slug:"/components/checkbox/",title:"Checkbox",order:0}}},{node:{path:"/components/features/colors/",context:{id:"71898035-aa09-5bc1-b206-181b0185bedb",parent:"131a8e68-2b22-52a0-9c19-f1d77eaf7a51",children:[],slug:"/components/features/colors/",title:"Colors",order:1}}},{node:{path:"/components/features/animations/",context:{id:"b549c4d3-917a-5c91-8a0d-011a9748e71a",parent:"131a8e68-2b22-52a0-9c19-f1d77eaf7a51",children:[],slug:"/components/features/animations/",title:"Animations",order:0}}},{node:{path:"/components/features/icons/",context:{id:"747d9e5c-0150-5ec5-b7da-29695b5df1c8",parent:"131a8e68-2b22-52a0-9c19-f1d77eaf7a51",children:[],slug:"/components/features/icons/",title:"Icons",order:3}}},{node:{path:"/components/features/",context:{id:"131a8e68-2b22-52a0-9c19-f1d77eaf7a51",parent:null,children:["71898035-aa09-5bc1-b206-181b0185bedb","b549c4d3-917a-5c91-8a0d-011a9748e71a","747d9e5c-0150-5ec5-b7da-29695b5df1c8","beb2d253-ab5b-53ba-95d8-a09bf50b9657"],slug:"/components/features/",title:"Features",order:4}}},{node:{path:"/components/features/states/",context:{id:"beb2d253-ab5b-53ba-95d8-a09bf50b9657",parent:"131a8e68-2b22-52a0-9c19-f1d77eaf7a51",children:[],slug:"/components/features/states/",title:"Component States",order:2}}},{node:{path:"/404/",context:{id:null,parent:null,children:null,slug:null,title:null,order:null}}},{node:{path:"/",context:{id:null,parent:null,children:null,slug:null,title:null,order:null}}},{node:{path:"/404.html",context:{id:null,parent:null,children:null,slug:null,title:null,order:null}}}]}}}},164:function(e,t,n){"use strict";var a=n(165),r=n(0),i=n.n(r),o=n(185),s=n.n(o);function c(e){var t=e.description,n=e.lang,r=e.meta,o=e.title,c=a.data.site,l=t||c.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},165:function(e){e.exports={data:{site:{siteMetadata:{title:"Pretty Checkbox React",description:"A tiny react wrapper around pretty-checkbox",author:"@djthoms"}}}}},166:function(e,t,n){"use strict";n(77),n(78);var a=n(159),r=n(0),i=n.n(r),o=n(4),s=n.n(o),c=n(33),l=n.n(c),p=(n(155),i.a.createContext({})),d=function(e){return i.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func};var u=n(15),m=n(152),h=n.n(m),_=(n(34),n(79)),j=n.n(_),y=n(175),S=i.a.memo(function(e){var t=e.siteTitle,n=e.description,a=e.className,r=e.isHome,o=void 0!==r&&r,s=j()(e,["siteTitle","description","className","isHome"]);return i.a.createElement("header",Object.assign({className:h()("header",{"header--alt":!o},a)},s),i.a.createElement("h1",null,i.a.createElement(l.a,{to:"/home/"},t)),i.a.createElement("p",{className:"header__description"},n,o?i.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=atomicpages&repo=pretty-checkbox-react&type=star&count=true",frameBorder:"0",scrolling:"0",width:"90px",height:"20px",title:"Github Stargazers"}):null),o?null:i.a.createElement("p",{className:"github-buttons button-group"},i.a.createElement(y.a,{href:"https://github.com/atomicpages/pretty-checkbox-react","data-icon":"octicon-star","aria-label":"Star atomicpages/pretty-checkbox-react on GitHub"},"Star"),i.a.createElement(y.a,{href:"https://github.com/atomicpages/pretty-checkbox-react/archive/master.zip","data-icon":"octicon-cloud-download","aria-label":"Download atomicpages/pretty-checkbox-react on GitHub"},"Download")))});S.displayName="Header";var g=S,f=(n(158),n(76),n(55),n(35),n(176),n(161)),x=n(177),E=n.n(x);function b(e){var t=e.children;return i.a.createElement(d,{query:"2987220871",render:function(e){var n=E()(e.allSitePage.edges.filter(function(e){return e.node.context&&e.node.context.id}).map(function(e){return Object.assign({},e.node,{isRoot:!e.node.context.parent})}),function(e){return e.context.id});return t({getRootNodes:function(){return Object.values(n).filter(function(e){return e.isRoot}).map(function(e){var t=e.context.title;return Object.assign({},e,{context:Object.assign({},e.context,{title:t})})})},getChildNodes:function(e){return Array.isArray(e.context.children)?e.context.children.map(function(e){return n[e]}).sort(function(e,t){var n=e.context.title.toLowerCase(),a=t.context.title.toLowerCase();return n<a?-1:n>a?1:0}):[]}})},data:f})}function w(e){var t=e.location,n=e.node,a=e.className,r=e.getChildNodes,o=void 0===r?function(){return[]}:r,s=o(n),c=0===t.indexOf(n.path);return i.a.createElement("li",{className:h()("sidebar__nav__item",a,{"sidebar__nav__item--expanded":c})},i.a.createElement(l.a,{to:n.path},n.context.title,s.length?i.a.createElement("i",{className:h()("sidebar__nav__item__ec","mdi",{"mdi-chevron-down":c,"mdi-chevron-right":!c})}):null),s.length&&c?i.a.createElement("ul",null,s.map(function(e){return i.a.createElement(w,{key:e.path,location:t,node:e,getChildNodes:o,className:"nested-link"})})):null)}function v(e){return i.a.createElement(u.Location,null,function(t){var n=t.location;return i.a.createElement("nav",Object.assign({className:"sidebar"},e),i.a.createElement(b,null,function(e){var t=e.getRootNodes,a=e.getChildNodes;return i.a.createElement("ul",{className:"sidebar__nav"},t().sort(function(e,t){return e.context.order-t.context.order}).map(function(e){return i.a.createElement(w,{key:e.path,location:n.pathname,node:e,getChildNodes:a})}))}))})}n(146);var k=i.a.memo(function(e){var t=e.children;return i.a.createElement(d,{query:"2562398822",render:function(e){return i.a.createElement(u.Location,null,function(n){var a=n.location;return i.a.createElement("div",{className:h()("grid-container",{"grid-container--alt":!a.pathname.includes("/home/")})},i.a.createElement(g,{siteTitle:e.site.siteMetadata.title,description:e.site.siteMetadata.description,isHome:a.pathname.includes("/home/")}),i.a.createElement(v,null),i.a.createElement("main",{className:"content"},t))})},data:a})});k.displayName="Layout";t.a=k},345:function(e,t,n){var a={"./Binary_Property/ASCII.js":346,"./Binary_Property/ASCII_Hex_Digit.js":347,"./Binary_Property/Alphabetic.js":348,"./Binary_Property/Any.js":349,"./Binary_Property/Assigned.js":350,"./Binary_Property/Bidi_Control.js":351,"./Binary_Property/Bidi_Mirrored.js":352,"./Binary_Property/Case_Ignorable.js":353,"./Binary_Property/Cased.js":354,"./Binary_Property/Changes_When_Casefolded.js":355,"./Binary_Property/Changes_When_Casemapped.js":356,"./Binary_Property/Changes_When_Lowercased.js":357,"./Binary_Property/Changes_When_NFKC_Casefolded.js":358,"./Binary_Property/Changes_When_Titlecased.js":359,"./Binary_Property/Changes_When_Uppercased.js":360,"./Binary_Property/Dash.js":361,"./Binary_Property/Default_Ignorable_Code_Point.js":362,"./Binary_Property/Deprecated.js":363,"./Binary_Property/Diacritic.js":364,"./Binary_Property/Emoji.js":365,"./Binary_Property/Emoji_Component.js":366,"./Binary_Property/Emoji_Modifier.js":367,"./Binary_Property/Emoji_Modifier_Base.js":368,"./Binary_Property/Emoji_Presentation.js":369,"./Binary_Property/Extended_Pictographic.js":370,"./Binary_Property/Extender.js":371,"./Binary_Property/Grapheme_Base.js":372,"./Binary_Property/Grapheme_Extend.js":373,"./Binary_Property/Hex_Digit.js":374,"./Binary_Property/IDS_Binary_Operator.js":375,"./Binary_Property/IDS_Trinary_Operator.js":376,"./Binary_Property/ID_Continue.js":377,"./Binary_Property/ID_Start.js":378,"./Binary_Property/Ideographic.js":379,"./Binary_Property/Join_Control.js":380,"./Binary_Property/Logical_Order_Exception.js":381,"./Binary_Property/Lowercase.js":382,"./Binary_Property/Math.js":383,"./Binary_Property/Noncharacter_Code_Point.js":384,"./Binary_Property/Pattern_Syntax.js":385,"./Binary_Property/Pattern_White_Space.js":386,"./Binary_Property/Quotation_Mark.js":387,"./Binary_Property/Radical.js":388,"./Binary_Property/Regional_Indicator.js":389,"./Binary_Property/Sentence_Terminal.js":390,"./Binary_Property/Soft_Dotted.js":391,"./Binary_Property/Terminal_Punctuation.js":392,"./Binary_Property/Unified_Ideograph.js":393,"./Binary_Property/Uppercase.js":394,"./Binary_Property/Variation_Selector.js":395,"./Binary_Property/White_Space.js":396,"./Binary_Property/XID_Continue.js":397,"./Binary_Property/XID_Start.js":398,"./General_Category/Cased_Letter.js":399,"./General_Category/Close_Punctuation.js":400,"./General_Category/Connector_Punctuation.js":401,"./General_Category/Control.js":402,"./General_Category/Currency_Symbol.js":403,"./General_Category/Dash_Punctuation.js":404,"./General_Category/Decimal_Number.js":405,"./General_Category/Enclosing_Mark.js":406,"./General_Category/Final_Punctuation.js":407,"./General_Category/Format.js":408,"./General_Category/Initial_Punctuation.js":409,"./General_Category/Letter.js":410,"./General_Category/Letter_Number.js":411,"./General_Category/Line_Separator.js":412,"./General_Category/Lowercase_Letter.js":413,"./General_Category/Mark.js":414,"./General_Category/Math_Symbol.js":415,"./General_Category/Modifier_Letter.js":416,"./General_Category/Modifier_Symbol.js":417,"./General_Category/Nonspacing_Mark.js":418,"./General_Category/Number.js":419,"./General_Category/Open_Punctuation.js":420,"./General_Category/Other.js":421,"./General_Category/Other_Letter.js":422,"./General_Category/Other_Number.js":423,"./General_Category/Other_Punctuation.js":424,"./General_Category/Other_Symbol.js":425,"./General_Category/Paragraph_Separator.js":426,"./General_Category/Private_Use.js":427,"./General_Category/Punctuation.js":428,"./General_Category/Separator.js":429,"./General_Category/Space_Separator.js":430,"./General_Category/Spacing_Mark.js":431,"./General_Category/Surrogate.js":432,"./General_Category/Symbol.js":433,"./General_Category/Titlecase_Letter.js":434,"./General_Category/Unassigned.js":435,"./General_Category/Uppercase_Letter.js":436,"./Script/Adlam.js":437,"./Script/Ahom.js":438,"./Script/Anatolian_Hieroglyphs.js":439,"./Script/Arabic.js":440,"./Script/Armenian.js":441,"./Script/Avestan.js":442,"./Script/Balinese.js":443,"./Script/Bamum.js":444,"./Script/Bassa_Vah.js":445,"./Script/Batak.js":446,"./Script/Bengali.js":447,"./Script/Bhaiksuki.js":448,"./Script/Bopomofo.js":449,"./Script/Brahmi.js":450,"./Script/Braille.js":451,"./Script/Buginese.js":452,"./Script/Buhid.js":453,"./Script/Canadian_Aboriginal.js":454,"./Script/Carian.js":455,"./Script/Caucasian_Albanian.js":456,"./Script/Chakma.js":457,"./Script/Cham.js":458,"./Script/Cherokee.js":459,"./Script/Common.js":460,"./Script/Coptic.js":461,"./Script/Cuneiform.js":462,"./Script/Cypriot.js":463,"./Script/Cyrillic.js":464,"./Script/Deseret.js":465,"./Script/Devanagari.js":466,"./Script/Dogra.js":467,"./Script/Duployan.js":468,"./Script/Egyptian_Hieroglyphs.js":469,"./Script/Elbasan.js":470,"./Script/Elymaic.js":471,"./Script/Ethiopic.js":472,"./Script/Georgian.js":473,"./Script/Glagolitic.js":474,"./Script/Gothic.js":475,"./Script/Grantha.js":476,"./Script/Greek.js":477,"./Script/Gujarati.js":478,"./Script/Gunjala_Gondi.js":479,"./Script/Gurmukhi.js":480,"./Script/Han.js":481,"./Script/Hangul.js":482,"./Script/Hanifi_Rohingya.js":483,"./Script/Hanunoo.js":484,"./Script/Hatran.js":485,"./Script/Hebrew.js":486,"./Script/Hiragana.js":487,"./Script/Imperial_Aramaic.js":488,"./Script/Inherited.js":489,"./Script/Inscriptional_Pahlavi.js":490,"./Script/Inscriptional_Parthian.js":491,"./Script/Javanese.js":492,"./Script/Kaithi.js":493,"./Script/Kannada.js":494,"./Script/Katakana.js":495,"./Script/Kayah_Li.js":496,"./Script/Kharoshthi.js":497,"./Script/Khmer.js":498,"./Script/Khojki.js":499,"./Script/Khudawadi.js":500,"./Script/Lao.js":501,"./Script/Latin.js":502,"./Script/Lepcha.js":503,"./Script/Limbu.js":504,"./Script/Linear_A.js":505,"./Script/Linear_B.js":506,"./Script/Lisu.js":507,"./Script/Lycian.js":508,"./Script/Lydian.js":509,"./Script/Mahajani.js":510,"./Script/Makasar.js":511,"./Script/Malayalam.js":512,"./Script/Mandaic.js":513,"./Script/Manichaean.js":514,"./Script/Marchen.js":515,"./Script/Masaram_Gondi.js":516,"./Script/Medefaidrin.js":517,"./Script/Meetei_Mayek.js":518,"./Script/Mende_Kikakui.js":519,"./Script/Meroitic_Cursive.js":520,"./Script/Meroitic_Hieroglyphs.js":521,"./Script/Miao.js":522,"./Script/Modi.js":523,"./Script/Mongolian.js":524,"./Script/Mro.js":525,"./Script/Multani.js":526,"./Script/Myanmar.js":527,"./Script/Nabataean.js":528,"./Script/Nandinagari.js":529,"./Script/New_Tai_Lue.js":530,"./Script/Newa.js":531,"./Script/Nko.js":532,"./Script/Nushu.js":533,"./Script/Nyiakeng_Puachue_Hmong.js":534,"./Script/Ogham.js":535,"./Script/Ol_Chiki.js":536,"./Script/Old_Hungarian.js":537,"./Script/Old_Italic.js":538,"./Script/Old_North_Arabian.js":539,"./Script/Old_Permic.js":540,"./Script/Old_Persian.js":541,"./Script/Old_Sogdian.js":542,"./Script/Old_South_Arabian.js":543,"./Script/Old_Turkic.js":544,"./Script/Oriya.js":545,"./Script/Osage.js":546,"./Script/Osmanya.js":547,"./Script/Pahawh_Hmong.js":548,"./Script/Palmyrene.js":549,"./Script/Pau_Cin_Hau.js":550,"./Script/Phags_Pa.js":551,"./Script/Phoenician.js":552,"./Script/Psalter_Pahlavi.js":553,"./Script/Rejang.js":554,"./Script/Runic.js":555,"./Script/Samaritan.js":556,"./Script/Saurashtra.js":557,"./Script/Sharada.js":558,"./Script/Shavian.js":559,"./Script/Siddham.js":560,"./Script/SignWriting.js":561,"./Script/Sinhala.js":562,"./Script/Sogdian.js":563,"./Script/Sora_Sompeng.js":564,"./Script/Soyombo.js":565,"./Script/Sundanese.js":566,"./Script/Syloti_Nagri.js":567,"./Script/Syriac.js":568,"./Script/Tagalog.js":569,"./Script/Tagbanwa.js":570,"./Script/Tai_Le.js":571,"./Script/Tai_Tham.js":572,"./Script/Tai_Viet.js":573,"./Script/Takri.js":574,"./Script/Tamil.js":575,"./Script/Tangut.js":576,"./Script/Telugu.js":577,"./Script/Thaana.js":578,"./Script/Thai.js":579,"./Script/Tibetan.js":580,"./Script/Tifinagh.js":581,"./Script/Tirhuta.js":582,"./Script/Ugaritic.js":583,"./Script/Vai.js":584,"./Script/Wancho.js":585,"./Script/Warang_Citi.js":586,"./Script/Yi.js":587,"./Script/Zanabazar_Square.js":588,"./Script_Extensions/Adlam.js":589,"./Script_Extensions/Ahom.js":590,"./Script_Extensions/Anatolian_Hieroglyphs.js":591,"./Script_Extensions/Arabic.js":592,"./Script_Extensions/Armenian.js":593,"./Script_Extensions/Avestan.js":594,"./Script_Extensions/Balinese.js":595,"./Script_Extensions/Bamum.js":596,"./Script_Extensions/Bassa_Vah.js":597,"./Script_Extensions/Batak.js":598,"./Script_Extensions/Bengali.js":599,"./Script_Extensions/Bhaiksuki.js":600,"./Script_Extensions/Bopomofo.js":601,"./Script_Extensions/Brahmi.js":602,"./Script_Extensions/Braille.js":603,"./Script_Extensions/Buginese.js":604,"./Script_Extensions/Buhid.js":605,"./Script_Extensions/Canadian_Aboriginal.js":606,"./Script_Extensions/Carian.js":607,"./Script_Extensions/Caucasian_Albanian.js":608,"./Script_Extensions/Chakma.js":609,"./Script_Extensions/Cham.js":610,"./Script_Extensions/Cherokee.js":611,"./Script_Extensions/Common.js":612,"./Script_Extensions/Coptic.js":613,"./Script_Extensions/Cuneiform.js":614,"./Script_Extensions/Cypriot.js":615,"./Script_Extensions/Cyrillic.js":616,"./Script_Extensions/Deseret.js":617,"./Script_Extensions/Devanagari.js":618,"./Script_Extensions/Dogra.js":619,"./Script_Extensions/Duployan.js":620,"./Script_Extensions/Egyptian_Hieroglyphs.js":621,"./Script_Extensions/Elbasan.js":622,"./Script_Extensions/Elymaic.js":623,"./Script_Extensions/Ethiopic.js":624,"./Script_Extensions/Georgian.js":625,"./Script_Extensions/Glagolitic.js":626,"./Script_Extensions/Gothic.js":627,"./Script_Extensions/Grantha.js":628,"./Script_Extensions/Greek.js":629,"./Script_Extensions/Gujarati.js":630,"./Script_Extensions/Gunjala_Gondi.js":631,"./Script_Extensions/Gurmukhi.js":632,"./Script_Extensions/Han.js":633,"./Script_Extensions/Hangul.js":634,"./Script_Extensions/Hanifi_Rohingya.js":635,"./Script_Extensions/Hanunoo.js":636,"./Script_Extensions/Hatran.js":637,"./Script_Extensions/Hebrew.js":638,"./Script_Extensions/Hiragana.js":639,"./Script_Extensions/Imperial_Aramaic.js":640,"./Script_Extensions/Inherited.js":641,"./Script_Extensions/Inscriptional_Pahlavi.js":642,"./Script_Extensions/Inscriptional_Parthian.js":643,"./Script_Extensions/Javanese.js":644,"./Script_Extensions/Kaithi.js":645,"./Script_Extensions/Kannada.js":646,"./Script_Extensions/Katakana.js":647,"./Script_Extensions/Kayah_Li.js":648,"./Script_Extensions/Kharoshthi.js":649,"./Script_Extensions/Khmer.js":650,"./Script_Extensions/Khojki.js":651,"./Script_Extensions/Khudawadi.js":652,"./Script_Extensions/Lao.js":653,"./Script_Extensions/Latin.js":654,"./Script_Extensions/Lepcha.js":655,"./Script_Extensions/Limbu.js":656,"./Script_Extensions/Linear_A.js":657,"./Script_Extensions/Linear_B.js":658,"./Script_Extensions/Lisu.js":659,"./Script_Extensions/Lycian.js":660,"./Script_Extensions/Lydian.js":661,"./Script_Extensions/Mahajani.js":662,"./Script_Extensions/Makasar.js":663,"./Script_Extensions/Malayalam.js":664,"./Script_Extensions/Mandaic.js":665,"./Script_Extensions/Manichaean.js":666,"./Script_Extensions/Marchen.js":667,"./Script_Extensions/Masaram_Gondi.js":668,"./Script_Extensions/Medefaidrin.js":669,"./Script_Extensions/Meetei_Mayek.js":670,"./Script_Extensions/Mende_Kikakui.js":671,"./Script_Extensions/Meroitic_Cursive.js":672,"./Script_Extensions/Meroitic_Hieroglyphs.js":673,"./Script_Extensions/Miao.js":674,"./Script_Extensions/Modi.js":675,"./Script_Extensions/Mongolian.js":676,"./Script_Extensions/Mro.js":677,"./Script_Extensions/Multani.js":678,"./Script_Extensions/Myanmar.js":679,"./Script_Extensions/Nabataean.js":680,"./Script_Extensions/Nandinagari.js":681,"./Script_Extensions/New_Tai_Lue.js":682,"./Script_Extensions/Newa.js":683,"./Script_Extensions/Nko.js":684,"./Script_Extensions/Nushu.js":685,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":686,"./Script_Extensions/Ogham.js":687,"./Script_Extensions/Ol_Chiki.js":688,"./Script_Extensions/Old_Hungarian.js":689,"./Script_Extensions/Old_Italic.js":690,"./Script_Extensions/Old_North_Arabian.js":691,"./Script_Extensions/Old_Permic.js":692,"./Script_Extensions/Old_Persian.js":693,"./Script_Extensions/Old_Sogdian.js":694,"./Script_Extensions/Old_South_Arabian.js":695,"./Script_Extensions/Old_Turkic.js":696,"./Script_Extensions/Oriya.js":697,"./Script_Extensions/Osage.js":698,"./Script_Extensions/Osmanya.js":699,"./Script_Extensions/Pahawh_Hmong.js":700,"./Script_Extensions/Palmyrene.js":701,"./Script_Extensions/Pau_Cin_Hau.js":702,"./Script_Extensions/Phags_Pa.js":703,"./Script_Extensions/Phoenician.js":704,"./Script_Extensions/Psalter_Pahlavi.js":705,"./Script_Extensions/Rejang.js":706,"./Script_Extensions/Runic.js":707,"./Script_Extensions/Samaritan.js":708,"./Script_Extensions/Saurashtra.js":709,"./Script_Extensions/Sharada.js":710,"./Script_Extensions/Shavian.js":711,"./Script_Extensions/Siddham.js":712,"./Script_Extensions/SignWriting.js":713,"./Script_Extensions/Sinhala.js":714,"./Script_Extensions/Sogdian.js":715,"./Script_Extensions/Sora_Sompeng.js":716,"./Script_Extensions/Soyombo.js":717,"./Script_Extensions/Sundanese.js":718,"./Script_Extensions/Syloti_Nagri.js":719,"./Script_Extensions/Syriac.js":720,"./Script_Extensions/Tagalog.js":721,"./Script_Extensions/Tagbanwa.js":722,"./Script_Extensions/Tai_Le.js":723,"./Script_Extensions/Tai_Tham.js":724,"./Script_Extensions/Tai_Viet.js":725,"./Script_Extensions/Takri.js":726,"./Script_Extensions/Tamil.js":727,"./Script_Extensions/Tangut.js":728,"./Script_Extensions/Telugu.js":729,"./Script_Extensions/Thaana.js":730,"./Script_Extensions/Thai.js":731,"./Script_Extensions/Tibetan.js":732,"./Script_Extensions/Tifinagh.js":733,"./Script_Extensions/Tirhuta.js":734,"./Script_Extensions/Ugaritic.js":735,"./Script_Extensions/Vai.js":736,"./Script_Extensions/Wancho.js":737,"./Script_Extensions/Warang_Citi.js":738,"./Script_Extensions/Yi.js":739,"./Script_Extensions/Zanabazar_Square.js":740,"./index.js":741,"./unicode-version.js":742};function r(e){var t=i(e);return n(t)}function i(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=345},761:function(e){e.exports={Checkbox:{description:"",displayName:"Checkbox",methods:[],props:{indeterminate:{required:!1,flowType:{name:"boolean"},description:"Set true when the checkbox is in an indeterminate state."},type:{required:!0,flowType:{name:"union",raw:'"checkbox" | "radio"',elements:[{name:"literal",value:'"checkbox"'},{name:"literal",value:'"radio"'}]},description:"Select the type if component: checkbox or radio."},children:{required:!1,flowType:{name:"union",raw:"React.Node | (() => React.Node)",elements:[{name:"ReactNode",raw:"React.Node"},{name:"signature",type:"function",raw:"() => React.Node",signature:{arguments:[],return:{name:"ReactNode",raw:"React.Node"}}}]},description:"Customize the rendering of the checkbox, radio,\nor switch.\n\n**Note:** You are responsible for providing\nthe details of pretty-checkbox's `div.state`."},render:{required:!1,flowType:{name:"signature",type:"function",raw:"() => React.Node",signature:{arguments:[],return:{name:"ReactNode",raw:"React.Node"}}},description:"Customize the rendering of the checkbox, radio,\nor switch.\n\n**Note:** You are responsible for providing\nthe details of pretty-checkbox's `div.state`."},style:{required:!1,flowType:{name:"union",raw:'"fill" | "thick"',elements:[{name:"literal",value:'"fill"'},{name:"literal",value:'"thick"'}]},description:"The style of the checkbox or radio."},shape:{required:!1,flowType:{name:"union",raw:'"round" | "curve"',elements:[{name:"literal",value:'"round"'},{name:"literal",value:'"curve"'}]},description:"The shape of the checkbox or radio component."},icon:{required:!1,flowType:{name:"ReactElement",raw:"React.Element<any>",elements:[{name:"any"}]},description:"Render a custom font icon in the checkbox or radio."},svg:{required:!1,flowType:{name:"ReactElement",raw:"React.Element<'svg'>",elements:[{name:"literal",value:"'svg'"}]},description:"Render a custom `.svg` in the checkbox or radio."},image:{required:!1,flowType:{name:"ReactElement",raw:"React.Element<'img'>",elements:[{name:"literal",value:"'img'"}]},description:"Render a custom `img` in the checkbox or radio."},className:{required:!1,flowType:{name:"string"},description:"Additional class selectors to pass to the `pretty` element."},prettySelector:{required:!1,flowType:{name:"string"},defaultValue:{computed:!1,value:"pretty"},description:"Set this to your custom value for `$pretty--class-name`. If you have not changed this in `.scss` then _do not modify this prop_."},value:{required:!1,flowType:{name:"union",raw:"string | number | string[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"Specify a value for the underlying `input` element."},onChange:{required:!1,flowType:{name:"signature",type:"function",raw:"(SyntheticMouseEvent<HTMLInputElement>) => void",signature:{arguments:[{name:"",type:{name:"SyntheticMouseEvent",elements:[{name:"HTMLInputElement"}],raw:"SyntheticMouseEvent<HTMLInputElement>"}}],return:{name:"void"}}},description:"Add an event handler when the radio/checkbox/switch changes."},id:{required:!1,flowType:{name:"string"},description:"Need a11y? Add your `id` here and it'll automatically be added to the `label`\nwhen you use `children` as a prop and not a function."},inputProps:{required:!1,flowType:{name:"signature",type:"object",raw:"{}",signature:{properties:[]}},description:"Additional input props to pass to the input component."},color:{required:!1,flowType:{name:"string"},description:"Specify colors to add to the checkbox, radio, or switch."},animation:{required:!1,flowType:{name:"union",raw:'"smooth" | "jelly" | "tada" | "rotate" | "pulse"',elements:[{name:"literal",value:'"smooth"'},{name:"literal",value:'"jelly"'},{name:"literal",value:'"tada"'},{name:"literal",value:'"rotate"'},{name:"literal",value:'"pulse"'}]},description:"Specify animations to add to the checkbox, radio, or switch."},checked:{required:!1,flowType:{name:"boolean"},description:"Control the state of your component by deciding when it can be checked/unchecked."},disabled:{required:!1,flowType:{name:"boolean"},description:"Disable the checkbox, radio, or switch."},locked:{required:!1,flowType:{name:"boolean"},description:"Lock the checkbox, radio, or switch."},bigger:{required:!1,flowType:{name:"boolean"},description:"Make the checkbox, radio, or switch bigger."},plain:{required:!1,flowType:{name:"boolean"},description:"Style the checkbox or radio as plain."}}},Radio:{description:"",displayName:"Radio",methods:[],props:{name:{required:!0,flowType:{name:"string"},description:"The name of the radio group."},type:{required:!0,flowType:{name:"union",raw:'"checkbox" | "radio"',elements:[{name:"literal",value:'"checkbox"'},{name:"literal",value:'"radio"'}]},description:"Select the type if component: checkbox or radio."},children:{required:!1,flowType:{name:"union",raw:"React.Node | (() => React.Node)",elements:[{name:"ReactNode",raw:"React.Node"},{name:"signature",type:"function",raw:"() => React.Node",signature:{arguments:[],return:{name:"ReactNode",raw:"React.Node"}}}]},description:"Customize the rendering of the checkbox, radio,\nor switch.\n\n**Note:** You are responsible for providing\nthe details of pretty-checkbox's `div.state`."},render:{required:!1,flowType:{name:"signature",type:"function",raw:"() => React.Node",signature:{arguments:[],return:{name:"ReactNode",raw:"React.Node"}}},description:"Customize the rendering of the checkbox, radio,\nor switch.\n\n**Note:** You are responsible for providing\nthe details of pretty-checkbox's `div.state`."},style:{required:!1,flowType:{name:"union",raw:'"fill" | "thick"',elements:[{name:"literal",value:'"fill"'},{name:"literal",value:'"thick"'}]},description:"The style of the checkbox or radio."},shape:{required:!1,flowType:{name:"union",raw:'"round" | "curve"',elements:[{name:"literal",value:'"round"'},{name:"literal",value:'"curve"'}]},description:"The shape of the checkbox or radio component."},icon:{required:!1,flowType:{name:"ReactElement",raw:"React.Element<any>",elements:[{name:"any"}]},description:"Render a custom font icon in the checkbox or radio."},svg:{required:!1,flowType:{name:"ReactElement",raw:"React.Element<'svg'>",elements:[{name:"literal",value:"'svg'"}]},description:"Render a custom `.svg` in the checkbox or radio."},image:{required:!1,flowType:{name:"ReactElement",raw:"React.Element<'img'>",elements:[{name:"literal",value:"'img'"}]},description:"Render a custom `img` in the checkbox or radio."},className:{required:!1,flowType:{name:"string"},description:"Additional class selectors to pass to the `pretty` element."},prettySelector:{required:!1,flowType:{name:"string"},defaultValue:{computed:!1,value:"pretty"},description:"Set this to your custom value for `$pretty--class-name`. If you have not changed this in `.scss` then _do not modify this prop_."},value:{required:!1,flowType:{name:"union",raw:"string | number | string[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"Specify a value for the underlying `input` element."},onChange:{required:!1,flowType:{name:"signature",type:"function",raw:"(SyntheticMouseEvent<HTMLInputElement>) => void",signature:{arguments:[{name:"",type:{name:"SyntheticMouseEvent",elements:[{name:"HTMLInputElement"}],raw:"SyntheticMouseEvent<HTMLInputElement>"}}],return:{name:"void"}}},description:"Add an event handler when the radio/checkbox/switch changes."},id:{required:!1,flowType:{name:"string"},description:"Need a11y? Add your `id` here and it'll automatically be added to the `label`\nwhen you use `children` as a prop and not a function."},inputProps:{required:!1,flowType:{name:"signature",type:"object",raw:"{}",signature:{properties:[]}},description:"Additional input props to pass to the input component."},color:{required:!1,flowType:{name:"string"},description:"Specify colors to add to the checkbox, radio, or switch."},animation:{required:!1,flowType:{name:"union",raw:'"smooth" | "jelly" | "tada" | "rotate" | "pulse"',elements:[{name:"literal",value:'"smooth"'},{name:"literal",value:'"jelly"'},{name:"literal",value:'"tada"'},{name:"literal",value:'"rotate"'},{name:"literal",value:'"pulse"'}]},description:"Specify animations to add to the checkbox, radio, or switch."},checked:{required:!1,flowType:{name:"boolean"},description:"Control the state of your component by deciding when it can be checked/unchecked."},disabled:{required:!1,flowType:{name:"boolean"},description:"Disable the checkbox, radio, or switch."},locked:{required:!1,flowType:{name:"boolean"},description:"Lock the checkbox, radio, or switch."},bigger:{required:!1,flowType:{name:"boolean"},description:"Make the checkbox, radio, or switch bigger."},plain:{required:!1,flowType:{name:"boolean"},description:"Style the checkbox or radio as plain."}}},Switch:{description:"",displayName:"Switch",methods:[],props:{animation:{required:!1,flowType:{name:"union",raw:'"smooth" | "jelly" | "tada"',elements:[{name:"literal",value:'"smooth"'},{name:"literal",value:'"jelly"'},{name:"literal",value:'"tada"'}]},description:"Specify animation for the `Switch` component."},shape:{required:!1,flowType:{name:"union",raw:'"outline" | "fill" | "slim"',elements:[{name:"literal",value:'"outline"'},{name:"literal",value:'"fill"'},{name:"literal",value:'"slim"'}]},description:"The shape of the `Switch` component.",defaultValue:{value:"'outline'",computed:!1}},name:{required:!1,flowType:{name:"string"},description:"Provide a name when `type` is `radio`."},type:{required:!0,flowType:{name:"union",raw:'"checkbox" | "radio"',elements:[{name:"literal",value:'"checkbox"'},{name:"literal",value:'"radio"'}]},description:"Select the type if component: checkbox or radio."},children:{required:!1,flowType:{name:"union",raw:"React.Node | (() => React.Node)",elements:[{name:"ReactNode",raw:"React.Node"},{name:"signature",type:"function",raw:"() => React.Node",signature:{arguments:[],return:{name:"ReactNode",raw:"React.Node"}}}]},description:"Customize the rendering of the checkbox, radio,\nor switch.\n\n**Note:** You are responsible for providing\nthe details of pretty-checkbox's `div.state`."},render:{required:!1,flowType:{name:"signature",type:"function",raw:"() => React.Node",signature:{arguments:[],return:{name:"ReactNode",raw:"React.Node"}}},description:"Customize the rendering of the checkbox, radio,\nor switch.\n\n**Note:** You are responsible for providing\nthe details of pretty-checkbox's `div.state`."},style:{required:!1,flowType:{name:"union",raw:'"fill" | "thick"',elements:[{name:"literal",value:'"fill"'},{name:"literal",value:'"thick"'}]},description:"The style of the checkbox or radio."},icon:{required:!1,flowType:{name:"ReactElement",raw:"React.Element<any>",elements:[{name:"any"}]},description:"Render a custom font icon in the checkbox or radio."},svg:{required:!1,flowType:{name:"ReactElement",raw:"React.Element<'svg'>",elements:[{name:"literal",value:"'svg'"}]},description:"Render a custom `.svg` in the checkbox or radio."},image:{required:!1,flowType:{name:"ReactElement",raw:"React.Element<'img'>",elements:[{name:"literal",value:"'img'"}]},description:"Render a custom `img` in the checkbox or radio."},className:{required:!1,flowType:{name:"string"},description:"Additional class selectors to pass to the `pretty` element."},prettySelector:{required:!1,flowType:{name:"string"},defaultValue:{computed:!1,value:"pretty"},description:"Set this to your custom value for `$pretty--class-name`. If you have not changed this in `.scss` then _do not modify this prop_."},value:{required:!1,flowType:{name:"union",raw:"string | number | string[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"Specify a value for the underlying `input` element."},onChange:{required:!1,flowType:{name:"signature",type:"function",raw:"(SyntheticMouseEvent<HTMLInputElement>) => void",signature:{arguments:[{name:"",type:{name:"SyntheticMouseEvent",elements:[{name:"HTMLInputElement"}],raw:"SyntheticMouseEvent<HTMLInputElement>"}}],return:{name:"void"}}},description:"Add an event handler when the radio/checkbox/switch changes."},id:{required:!1,flowType:{name:"string"},description:"Need a11y? Add your `id` here and it'll automatically be added to the `label`\nwhen you use `children` as a prop and not a function."},inputProps:{required:!1,flowType:{name:"signature",type:"object",raw:"{}",signature:{properties:[]}},description:"Additional input props to pass to the input component."},color:{required:!1,flowType:{name:"string"},description:"Specify colors to add to the checkbox, radio, or switch."},checked:{required:!1,flowType:{name:"boolean"},description:"Control the state of your component by deciding when it can be checked/unchecked."},disabled:{required:!1,flowType:{name:"boolean"},description:"Disable the checkbox, radio, or switch."},locked:{required:!1,flowType:{name:"boolean"},description:"Lock the checkbox, radio, or switch."},bigger:{required:!1,flowType:{name:"boolean"},description:"Make the checkbox, radio, or switch bigger."},plain:{required:!1,flowType:{name:"boolean"},description:"Style the checkbox or radio as plain."}},composes:["InputProps"]}}}}]);
//# sourceMappingURL=component---src-templates-page-component-js-bfade409055e18d85328.js.map