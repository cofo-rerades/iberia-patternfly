if(typeof window._oEa!=='object'){if(window.eflash===undefined){window.eflash=0}if(window.EA_param===undefined){window.EA_param=''}var _oEa=window._oEa={server:'ibe1.iberia.com',apath:'',version:'5.5.6',iattr:' height="2" width="2" style="border:none" alt="" ',
v:2,ia:'948a',whoami:'ea.js',stg:'etuix',v$B:0,v$C:-1,v$D:1,ws:'',wsp:'',etagid:'',v$E:[],v$F:[],v$G:[],app:[],agp:[],adn:[],adnend:0,v$H:0,v$I:0,v$K:2040,ctype:'text/javascript',cspnonce:0,ald:[],v$4:0,v$L:{},v$O:{'link':'lk',
'download':'dl','event':'ev','button':'bt'},reserved:['url','rf','fra','ss','sd','fl','sa'],v$T:0,v$Q:0,v$P:{},hcgi:{},cjs:{},jsbwr:{},ato:[],htook:{},atotv:0,kl:'xob',ftrue:function(){return 1},v$N:{'path':'urlp','actionref':'actr','action':'eact','actionin':'eacti','actionout':'eacto',
'eventtype':'evtype','eventurl':'evurl','eventname':'evname','eventview':'evt','newcustomer':'nc','error':'pgerr','opein':'eope','scartdur':'ttl','duration':'ttl','scartamount':'amount','scartref':'ref','scarttype':'type','scartpayment':'payment','scartcumul':'sccumul','currency':'cur',
'prdamount':'prda','prdname':'prdn','prdquantity':'prdq','prdref':'prdr','prdparam':'prdp','prdcategory':'prdc','prdgroup':'prdg','prdmargin':'prdm','actionname':'actn','actionmode':'actm','actionlabel':'actl','actionpname':'actpn','actionpvalue':'actpv','actionpfinite':'actpf','pagegroup':'pggrp',
'pagelabel':'pglbl','referrer':'rf','referer':'rf','email':'eemail','isearchengine':'eise','isearchkey':'eisk','isearchdata':'eisd','isearchdesc':'eiss','isearchresults':'eisr','propertyname':'epron','propertyvalue':'eprov','waitreply':'_epix','pix':'_epix','location':'eloc','target':'etg',
'keyword':'ekw','nb':'enb'},_vc:0,vcall:function(x){var o=_oEa;if(x&&!o._vc){o._vc=x}return o._vc},f$A:function(){var o=_oEa;var n=o.d.querySelector('[nonce]');if(n){o.cspnonce=n.nonce||n.getAttribute('nonce')}},f$B:function(){var _js,w,h,o=_oEa;if(o.w.screen){
o.v$1=(o.isns?o.w.screen.pixelDepth:o.w.screen.colorDepth)}if(o.v$R>3){w=screen.width;h=screen.height}else if(o.isns&&(o.v$R===3)&&o.n.javaEnabled()){_js=java.awt.Toolkit.getDefaultToolkit().getScreenSize();w=_js.width;h=_js.height}if(h&&w){o.v$0=w+'x'+h}},f$C:function(){
var fl,o=_oEa,i=0,fp=o.n.plugins;if(fp&&fp.length){for(i=0;i<fp.length;i+=1){if(fp[i].name.indexOf('Shockwave Flash')!==-1){o.flash=fp[i].description.split('Shockwave Flash ')[1];break}}}else if(o.w.ActiveXObject){for(i=10;i>=2;i-=1){try{
fl=eval('new ActiveXObject("ShockwaveFlash.ShockwaveFlash.'+i+'");');if(fl){o.flash=i+'.0';break}}catch(ignore){}}}},f$D:function(x){var t,o=_oEa;t=o.newelt('div');t.innerHTML='&nbsp;';t.className=x.reverse().join('');o.v$W=t;o.v$V=-1},f$E:function(){var b,o=_oEa;if(o.v$V===-1){
b=o.body();b.appendChild(o.v$W);o.v$V=(o.v$W.offsetHeight===0)?1:'';b.removeChild(o.v$W)}return o.v$V},urloverride:function(u,r,srv){_oEa.orig[_oEa.f$AW(srv)]=[u,r]},f$AV:function(srv){var orig,u,o=_oEa;orig=o.orig[o.f$AW(srv)];if(orig&&orig[2]){u=o.w.location.href;
if(orig[2]!==u){orig[0]=orig[2]=u}}return orig},f$F:function(srv){var s,ur,u,o=_oEa;o.w=window;o.d=document;o.n=navigator;o.orig=o.orig||{};u=o.w.location.href;o.orig[srv]=o.orig[srv]||[u,o.d.referrer,u];o.isns=(o.n.appName==='Netscape');o.isie=(o.n.userAgent.indexOf('MSIE')>-1);
o.isaol8=(o.n.userAgent.indexOf('AOL 8.0')>-1);o.v$R=parseInt(o.n.appVersion,10);o.v$S=(o.w.top!==o.w.self)?1:0;o.proto=o.w.location.protocol;o.ls=o.w.localStorage;o.domain=o.d.domain;if(!o.isdef(o.proto)){o.proto='http:'}if(!eval(o.d.images)){o.v$D=0}o.f$A();o.f$B();o.f$C();s=o.kl+'sda';
o.f$D(s.split(''));if(!o.isie){o.v$K=4095}o._dbg=o.f$AO(o.stg+'-dbg')},debug:function(b){var o=_oEa;o.f$AN(o.stg+'-dbg',b);o._dbg=b},f$G:function(u){var t,f=7;if(!u){return''}u=u.toLowerCase();if(u.indexOf('http')!==0){return''}if(u.indexOf('https')===0){f+=1}u=u.substring(f);t=u.indexOf('/');
if(t>0){u=u.substring(0,t)}return u},f$AW:function(s){return s||_oEa.server},def:function(s){if((s===undefined)||(s===null)||(s==='')||(s==='[unknown origin]')||(s==='unknown')||(s==='undefined')){return''}return s},isdef:function(s){return(_oEa.def(s)===''?0:1)},aisdef:function(a){var i;
for(i=0;i<a.length;i+=1){if(!_oEa.isdef(a[i])){return 0}}return 1},isobj:function(o){return(typeof o==='object')},f$H:function(l){var o=_oEa;l=o.def(l);return((l==='')||(l.indexOf('/'+o.whoami)>=0)||(l.indexOf('//'+o.server)>=0))?0:1},log:function(e1,e2){if(window.console&&window.console.log){
if(!e2){e2=''}window.console.log('Eulerian',e1,e2)}},dbg:function(x){if(_oEa._dbg){_oEa.log('debug',x)}},logsend:function(cat,catid,e){_oEa.misc('',['rterrcat',cat,'rterrcatid',catid,'rterr',e]);_oEa.log(cat+" "+catid,e)},esc:function(s){
return encodeURIComponent(s).replace(/[!'()*]/g,function(c){return'%'+c.charCodeAt(0).toString(16)})},unesc:function(s){return decodeURIComponent(s)},f$AM:function(a){var idx=a.length,ridx,tval;while(0!==idx){ridx=Math.floor(Math.random()*idx);idx-=1;tval=a[idx];a[idx]=a[ridx];a[ridx]=tval}
return a},f$I:function(k,v){var o=_oEa;k=o.def(k);v=o.def(v);if(k===''||v===''){return''}o.hcgi[k]=v;return(o.esc(k)+'='+o.esc(v)+'&')},straarg:function(a){var j,s='',_a=[],o=_oEa;if(!o.isobj(a)){return o.def(a)}for(j=0;j<a.length;j+=2){s=o.f$I(a[j],a[j+1]);if(s!==''){_a.push(s)}}
return o.f$AM(_a).join('')},f$K:function(a){var o=_oEa,j=0,_a=[];if(!o.isobj(a)){return o.def(a)}for(j=0;j<a.length;j+=1){if(o.isobj(a[j])){_a=_a.concat(o.f$K(a[j]))}else{_a.push(a[j],a[j+1]);j+=1}}return _a},f$J:function(a){return _oEa.straarg(_oEa.f$K(a))},f$L:function(srv){
var o=_oEa,orig=o.f$AV(srv);if(o.f$G(orig[0])===o.f$G(orig[1])){orig[1]=''}return['url',orig[0],'rf',orig[1],'euidlls',o.uidget(1),'etagid',o.etagid]},f$M:function(){var o=_oEa;return['ss',o.v$0,'sd',o.v$1,'fra',(o.v$S?1:0),'fl',o.flash,'sa',o.f$E()]},f$N:function(v){var o=_oEa,j,s,p='';
if(!o.isobj(v)){v=[v]}for(j=0;j<v.length;j+=1){s=o.def(v[j]);if(s!==''){p=p+o.esc(s)+'/'}}return p},cookieset:function(k,v,session){var o=_oEa;o.d.cookie=k+'='+o.esc(v)+'; domain='+o.domain+'; path=/'+(session?'':'; expires=Sun, 10 Jan 2026 00:00:00 GMT')},cookieget:function(k){
var o=_oEa,st=o.d.cookie.indexOf(k+'='),kl,l,en;kl=k.length;if(st<0){return null}l=st+kl+1;en=o.d.cookie.indexOf(';',l);if(en<0){en=o.d.cookie.length}return o.def(o.unesc(o.d.cookie.substring(l,en)))},f$AN:function(k,v){var ls=_oEa.ls;if(ls){if(v){ls.setItem(k,v)}else{ls.removeItem(k)}}},
f$AO:function(k){var ls=_oEa.ls;return(ls)?ls.getItem(k):null},uidset:function(v){_oEa.u=v;_oEa.f$AN(_oEa.stg,v)},uidget:function(v$2){return((!v$2)?_oEa.u:null)||_oEa.f$AO(_oEa.stg)||null},rand:function(){return(Math.round(Math.random()*2147483647)).toString()},h31:function(s){var i,h=5381;
for(i=0;i<s.length;i+=1){h=((h<<5)+h)+s.charCodeAt(i)}return h& ~(1<<31)},h31b:function(s){var i=s.length,h=5381;while(i){i-=1;h=(h*33)^s.charCodeAt(i)}return(h>>>=0)},tm:function(){return(new Date()).getTime()},website:function(ws){if(ws){if(!_oEa.wsp){_oEa.wsp=_oEa.ws}_oEa.ws=ws}},
websiteend:function(){var o=_oEa;o.f$AY();if(o.wsp){o.ws=o.wsp}},f$O:function(k,v){if(k===''||v===''){_oEa.v$F.push(k,v);return 1}},f$P:function(ms,v){var extm,o=_oEa;if(!o.v$B){return}if(o.v$C<0){o.v$C=o.tm()+ms}do{extm=o.v$C+ms}while(extm>o.tm())},issleep:function(){return _oEa.v$B},
f$Q:function(){_oEa.v$C=_oEa.tm();_oEa.v$B+=1},f$R:function(){var o=_oEa;if(o.v$B>0){o.v$B-=1;if(o.v$B===0){o.v$C=0}}},f$S:function(act,ap,srv,r){var tk,u,o=_oEa,p;tk=act.indexOf('?');if(tk>0){act=act.substring(0,tk)+o.ia}p=o.f$J(ap);u=o.proto+'//'+o.f$AW(srv)+o.apath+'/'+act+'/'+
((o.ws&&!p.match(/[&?]url=http/))?o.ws:'-');return u+'/'+(r||o.rand())+'?'+p},eltbyname:function(n){return _oEa.d.getElementsByTagName(n)},eltbyid:function(n){return _oEa.d.getElementById(n)},newelt:function(n,i,c){var e=_oEa.d.createElement(n);if(c){e.type=c}if(i){e.id=i}
if(n!='div'&&_oEa.cspnonce){e.nonce=_oEa.cspnonce}return e},f$AU:function(){return((_oEa.d.body)?1:0)},body:function(){var o=_oEa,h;if(!o.b){o.b=o.d.body;if(!o.b){o.b=o.newelt('body');o.b.height='1px';o.b.style.display='none';try{o.d.body=o.b}catch(e){h=o.eltbyname('html');
if(h){h[0].appendChild(o.b)}}}}return o.b},ptarget:function(tp){var o=_oEa,as,ab,ah,p;ab=o.body();ah=o.eltbyname('head');p=o.eltbyname('script');if(ah){ah=ah[0]}if(p&&p.length){as=p[p.length-1].parentNode}switch(tp){case'js':return as||ab||ah||0;case'css':return ah||ab||0}return ab},
gloadtimeout:function(to,id,tg){var o=_oEa;if(tg&&typeof tg==='object'){o.ato.push([o.tm(),to,id,tg]);if(!o.atotv){o.atotv=setInterval(function(){var _o=_oEa,x,i,an=[],a,tm,ak;a=_o.ato;tm=_o.tm();_o.ato=an;for(i=0;i<a.length;i+=1){x=a[i];if(x){try{if(!x[3].complete){if(x[0]+x[1]<tm){
ak=['onload','onreadystatechange','src','data','text'];while(ak.length){x[3].removeAttribute(ak.shift())}ak=x[3].parentNode;if(ak){ak.removeChild(x[3])}delete x[3];_o.misc('',['tmto',x[2],'tmdiff',tm-x[0]])}else{an.push(x)}}}catch(e){_o.log('err',e)}}}if(!an.length){clearInterval(_o.atotv);
_o.atotv=0}},50)}}},gloadimg:function(src,edyn,onload){var o=_oEa,img,fct;if(typeof onload!=='function'){onload=0}if(o.v$D){fct=(edyn)?o.sleepdone:o.ftrue;img=new Image();if(o.cspnonce){img.nonce=o.cspnonce}o.v$E.push(img);(function(old,f){img.onload=function(){if(old){old()}if(f){f()}};
}(onload,fct));o.dbg(['gli',src]);img.src=src;return img}},gpost:function(s,onload){var i,u,p;i=s.indexOf('?');if(i<=0){return}u=s.substring(0,i);p=s.substring(i+1);(function(u,p,old){var h=new XMLHttpRequest();h.open('POST',u,1);
h.setRequestHeader('Content-type','application/x-www-form-urlencoded');h.onreadystatechange=function(){var hs=h.status;if(h.readyState==4&&hs>=200&&hs<400){if(old){old()}}};h.send(p)})(u,p,onload)},gloadimgto:function(src,to){if(!to){to=50}_oEa.f$Q();_oEa.gloadimg(src,1);_oEa.f$P(to);return 1},
gloadbeacon:function(src){var u=src,up,sep=u.indexOf('?');if(sep>0){u=src.substring(0,sep);up=new URLSearchParams(src.substring(sep+1))}navigator.sendBeacon(u,up)},gloadjs:function(src,cback,a,id){var o=_oEa,s;if(!id){id='_EA_gjs'+o.rand()}if(o.isobj(src)){o.cjs[id]=[src,cback];return o.f$T(id)}
o.dbg(['gljs',src]);if(!a){a=o.ptarget('js');if(!a){return}}s=o.newelt('script',id,o.ctype);if(o.cspnonce){s.nonce=o.cspnonce}(function(a,s,src,cback){s.complete=0;if(s.readyState){s.onreadystatechange=function(){if(s.readyState==='loaded'||s.readyState==='complete'){s.onreadystatechange=null;
s.complete=1;if(_oEa.isdef(cback)){cback()}}}}else{s.onload=function(){s.complete=1;if(_oEa.isdef(cback)){cback()}}}s.src=src;a.appendChild(s)}(a,s,src,cback));return s},f$T:function(id){var o=_oEa,u,l;u=o.cjs[id][0].shift();l=o.cjs[id][0].length;o.gloadjs(u,
((l>0)?function(){try{_oEa.f$T(id)}catch(e){_oEa.log('glcjs: sub cjs error',e)}}:o.cjs[id][1]));if(!l){o.cjs[id]={}}},gloadjsbwr:function(src,cback,id){var o=_oEa,j,f;j=o.jsbwr;if(!j){return}f=function(){if(j.pre){j.pre()}return o.gloadjs(src,function(){if(o.isdef(cback)){cback()}j.post()},0,
id)};if(o.isdef(typeof _oEaDWR)){return f()}return o.gloadjs(o.proto+j.s,f,o.body(),(id?(id+o.rand()):id))},gloadeval:function(code){var ret=eval(code+';42;');if(ret!==42){_oEa.log('gleval',code)}},gloadcss:function(src){var o=_oEa,a,s;a=o.ptarget('css');if(!a){return}o.dbg(['glcss',src]);
s=o.newelt('link',0,'text/css');if(o.cspnonce){s.nonce=o.cspnonce}s.rel='stylesheet';s.media='screen';s.href=src;a.appendChild(s)},gloaddiv:function(src,frameid){var o=_oEa,id,s,a,i;id='_EA_gdiv';s=o.eltbyid(id);if(!s){a=o.ptarget('div');if(!a){return}s=o.newelt('div',id);s.style.display='none';
a.appendChild(s)}o.dbg(['gldiv',src]);i=o.newelt('iframe',frameid);if(o.cspnonce){i.nonce=o.cspnonce}if(frameid){i.name=frameid}(function(i){i.onload=function(){i.complete=1}}(i));i.width=i.height='2px';i.style.display='none';i.src=src;s.appendChild(i);return i},f$U:function(src,ctx){
var o=_oEa,id,idsrc,s,a,jsi,jso,h,v,x,idoc;var sh='<script type="'+o.ctype+'"';var no='';if(o.cspnonce){no=' nonce="'+o.cspnonce+'"'}id='_EA_ggen'+o.rand();idsrc='_EA_js'+o.rand();o.dbg(['glgen',src]);o.gloaddiv('about:blank',id);s=o.eltbyid(id);a=src;if(!_oEa.isobj(src)){a=[['js',src]]}
jsi=sh+no+'>/*<![CDATA[*/';jso='/*]]>*/</script>';h='<html><body>'+jsi+'var _oEa=( window.parent !== undefined ? window.parent._oEa : {});'+jso;for(x=0;x<a.length;x+=1){if(a[x].length===2){v=a[x][1];if(v){switch(a[x][0]){case'js':h+=sh+no+' id="'+idsrc+
'" onreadystatechange="this.complete=1;" onload="this.complete=1;" src="'+v+'"></script>'+jsi+'var d=document.getElementById("'+idsrc+'");if(d){try{d.complete=1;}catch(ignore){}}'+jso;break;case'css':h+='<link rel="stylesheet" type="text/css" href="'+v+'" '+no+'/>';break;case'img':
h+='<img src="'+v+'"'+no+o.iattr+'/>';break;case'code':if(!ctx){ctx='sub tag error'}h+=jsi+'try{'+v+"\n"+'}catch(e){_oEa.log("glg: '+ctx+'",e);}'+jso;break;case'html':h+=v;break}}}}h+='</body></html>';idoc=null;if(s.contentDocument){idoc=s.contentDocument}
else if(s.contentWindow){idoc=s.contentWindow.document}else if(s.document){idoc=s.document}if(idoc){idoc.open();idoc.write(h);idoc.close()}return idoc.getElementById(idsrc)},gloaddivjs:function(src){return _oEa.f$U(src)},
gloadiframe:function(src){return _oEa.gloaddiv(src,'_EA_eif'+_oEa.rand())},gloadjssrc:function(src,pre,post,ctx){var a=[];if(pre){a.push(['code',pre])}if(src){a.push(['js',src])}if(post){a.push(['code',post])}if(a.length){return _oEa.f$U(a,ctx)}},gevent:function(tg,k,m,rm){
var klc=k.toLowerCase(),oldfn;if(tg.addEventListener){if(rm){tg.removeEventListener(klc,m,0)}else{tg.addEventListener(klc,m,0)}}else if(tg.attachEvent){if(rm){tg.removeEvent('on'+klc,m)}else{tg.attachEvent('on'+klc,m)}}else{oldfn=tg['on'+k];tg['on'+k]=(typeof tg['on'+k]==='function'?
function(){var v=oldfn();m()}:m)}},mgevent:function(atg,k,m,rm){var i;for(i=0;i<atg.length;i+=1){_oEa.gevent(atg[i],k,m,rm)}},onload:function(m){if(typeof m==='function'){if(_oEa.v$J){m()}else{_oEa.ald.push(m);if(!_oEa.v$4){_oEa.v$4=setInterval(function(){switch(_oEa.d.readyState){
case'interactive':case'complete':_oEa.f$AX();break}},50);_oEa.gevent(_oEa.w,'load',_oEa.f$AX)}}}},f$AX:function(){var f;_oEa.v$J=1;if(_oEa.v$4){clearInterval(_oEa.v$4);_oEa.v$4=0}while(_oEa.ald.length){f=_oEa.ald.shift();f()}},addOnload:function(m){return _oEa.onload(m)},ondone:function(m){
if(typeof m==='function'){if(_oEa.adnend){m()}else{_oEa.adn.push(m)}}},f$AY:function(){var f,o=_oEa;o.adnend=1;while(o.adn.length){f=o.adn.shift();f()}},f$AT:function(h){var fu=_oEa.ftrue,t,sleep=h.sleep||100,retry=h.retry||15,fc=h.fcheck||fu,ffc=h.fcommit||fu,ffr=h.frollback||fu;
t=setInterval(function(){try{if(fc(h)){retry=0;ffc()}else{retry-=1;if(!retry){ffr()}}}catch(e){retry=0}if(!retry){clearInterval(t)}},sleep)},f$X:function(url,isjs,srv){var o=_oEa,fr,pend,path,cgip,ap=[],blkl,blki,i,s=o.f$AW(srv);if(url.length-o.proto.length-2-s.length<o.v$K){return 0}
fr=o.rand();pend=url.indexOf('?');path=o.esc(url.substring(url.indexOf('/',8),pend));cgip=url.substring(pend+1);blkl=o.v$K-(o.apath.length+34+fr.length*2+path.length);if(cgip.length<blkl*2){blki=cgip.lastIndexOf('&',blkl);if(blki<0){blki=cgip.indexOf('&');if(blki<0){blki=i}}
ap=[cgip.substring(0,blki),cgip.substring(blki+1)]}else{ap=[cgip,'']}for(i=0;i<2;i+=1){ap[i]=o.proto+'//'+s+o.apath+'/chainget/'+fr+'?echainp='+(i+1).toString()+'2'+fr+((i===0)?('&echainu='+path):'')+((ap[i].length)?'&'+ap[i]:'')}o.f$Y([ap,isjs]);return 1},f$Y:function(ra){
var cb,o=_oEa,u=ra[0].shift();if(u){if(ra[0][0]){cb=function(){_oEa.f$Y(ra)};if(u.length<o.v$K){o.gloadimg(u,0,cb)}else{o.gpost(u,cb)}}else if(ra[1]){o.gloadjs(u)}else{o.gloadimg(u)}}},f$Z:function(act,ws,ap,srv,p){var o=_oEa;o.website(ws);if(o.proto.indexOf('http')!==0){return''}
return o.f$S(act,[ap,o.f$L(srv),o.agp],srv,p)},gcall:function(act,ws,ap,edyn,redir,srv,p){var o=_oEa,u;u=o.f$Z(act,ws,ap,srv,p);if(!o.f$X(u,0,srv)){if(redir){o.d.location=u}else if(!o.issleep()&&o.beacon){o.gloadbeacon(u)}else{o.gloadimg(u,edyn)}}},gcallbeacon:function(act,ws,ap,srv,p){
var o=_oEa,u;u=o.f$Z(act,ws,ap,srv,p);if(!o.f$X(u,0,srv)){o.gloadbeacon(u)}},f$_:function(act,ws,ap,srv,p){var o=_oEa,u;u=o.f$Z(act,ws,ap,srv,p);if(!o.f$X(u,1,srv)){o.gloadjs(u)}o.v$C=0},ginject:function(tg,s){tg=_oEa.eltbyid(tg);if(tg){try{while(tg.firstChild){tg.removeChild(tg.firstChild)}
tg.innerHTML=s;return 1}catch(e){_oEa.log('ginject',e)}}},f$0:function(tg,call,tp,n,f,v,nb){var url='',cname='',o=_oEa;try{if(!o.aisdef([tp,n])){if(!tg){return 1}if(tg&&tg.nodeName.toUpperCase()==='A'){url=tg.href}cname=tg.className;if(o.f$G(url)!==''){
if(o.isaol8&&(tg.target==='_new'||tg.target==='_blank')){return 1}}}if(o.isdef(url)||o.isdef(n)){o.f$Q();o.gcall(call,o.ws,['type',tp,'name',n,'value',v,'finite',f,'nb',nb,'evurl',url],1);o.f$P(50)}}catch(ignore){}return 1},f$1:function(e){var o=_oEa,x=0,y=0,px=0,py=0,ob,obe,cx;o.v$_='';try{
ob=o.body();obe=o.d.documentElement;x=Math.max(ob.scrollWidth,obe.scrollWidth,ob.offsetWidth,obe.offsetWidth,ob.clientWidth,obe.clientWidth);y=Math.max(ob.scrollHeight,obe.scrollHeight,ob.offsetHeight,obe.offsetHeight,ob.clientHeight,obe.clientHeight);if(!e){e=o.w.event}if(e){
if((!o.isie)&&(e.pageX||e.pageY)){px=e.pageX;py=e.pageY}else if(e.clientX||e.clientY){px=e.clientX+Math.max(ob.scrollLeft,obe.scrollLeft,ob.offsetLeft,obe.offsetLeft,ob.clientLeft,obe.clientLeft);
py=e.clientY+Math.max(ob.scrollTop,obe.scrollTop,ob.offsetTop,obe.offsetTop,ob.clientTop,obe.clientTop)}}if(o.hmapc===1){cx=(x+(x%2))/2;px-=cx-1000;if(px<0){px=0}}else if(o.hmapc===2){if(!x){x=1024}px=Math.floor((1180*px)/x)}o.v$_=x+'x'+y+'x'+px+'x'+py}catch(ignore){}},f$2:function(tg){
var cname=tg.className,i;if((!_oEa.isdef(cname))||_oEa.isobj(cname)){return}i=cname.indexOf('EA_');if(i<0){return}cname=cname.substring(i+3);i=cname.indexOf(' ');if(i>0){cname=cname.substring(0,i)}i=cname.indexOf('-');if(i>=0){return[cname.substring(0,i),cname.substring(i+1)]}return[cname]},
evtg:function(e){return(e?e.target:_oEa.w.event.srcElement)},f$3:function(){var o=_oEa,af,i,j,ae,tg,v$3;if(o.d){if(o.d.body){o.d.body.onmousedown=function(e){_oEa.onmdown(e)};o.d.body.onclick=function(e){_oEa.onclick(e)}}else{o.d.onmousedown=function(e){_oEa.onmdown(e)};
o.d.onclick=function(e){_oEa.onclick(e)}}af=o.d.forms;for(i=0;i<af.length;i+=1){ae=af[i].elements;for(j=0;j<ae.length;j+=1){tg=ae[j];v$3=o.f$2(tg);if(v$3){tg.onfocus=function(e){_oEa.onfocus(e)};tg.onblur=function(e){_oEa.onblur(e)}}}}}},onclick:function(e){_oEa.f$P(100)},onmdown:function(e){
var o=_oEa,tg,v$3;o.f$1(e);if(o.hmap&&o.v$_){o.f$Q();o.gcall('hmap',o.ws,['ehm',o.hmap,'epos',o.v$_,'ss',o.v$0],1)}tg=o.evtg(e);if(!tg){return 1}v$3=o.f$2(tg);if(!v$3){return 1}v$3[0]=o.v$O[v$3[0]];if(!v$3[0]){return 1}return o.f$0(tg,'ev?',v$3[0],v$3[1])},onfocus:function(e){
var o=_oEa,tg,v$3,k,t,f;tg=o.evtg(e);if(!tg){return 1}v$3=o.f$2(tg);if(!v$3){return 1}if(v$3[0]!=='actionparam'){return 1}k='A.'+v$3.join('.');if(o.v$P[k]){return 1}o.v$P[k]=1;t=tg.type;f=1;if(t==='text'||t==='textarea'){f=0}return o.f$0(tg,'actionparam',v$3[0],v$3[1],f)},onblur:function(e){
var o=_oEa,tg,v$3,t,v,ao,av,i,k,f;tg=o.evtg(e);if(!tg){return 1}v$3=o.f$2(tg);if(!v$3){return 1}if(v$3[0]!=='actionparam'){return 1}v$3[0]='actionparamvalid';t=tg.type;v='';f=1;if(t==='text'||t==='textarea'){f=0;v=tg.value}else if(t==='radio'){v=tg.value}else if(t==='checkbox'){v=tg.checked}
else if(t==='select-one'||t==='select-multi'){ao=tg.options;av=[];for(i=0;i<ao.length;i+=1){if(ao[i].selected){av.push(ao[i].value)}}v=av.join(':')}k='B.'+v$3.join('.');if(o.v$P[k]){o.v$P[k]+=1}else{o.v$P[k]=1}return o.f$0(tg,'actionparam',v$3[0],v$3[1],f,v,o.v$P[k])},
f$4:function(act,ws,ap,edyn){var o=_oEa,tagto,d;if((!eflash)&&(!o.v$T)){o.tag(ws)}if(!o.v$T){tagto=o.tm()+300;while(o.tm()<=tagto&&(!o.v$T)){d=1}o.v$T=1}o.gcall(act,ws,ap,edyn)},gev:function(tp,n,tg){var o=_oEa,t;if(o.isobj(n)){t=n;n=tg;tg=t}return o.f$0(tg,'ev?',tp,n)},
levent:function(n,tg){return _oEa.gev('ev',n,tg)},button:function(n,tg){return _oEa.gev('bt',n,tg)},link:function(n,tg){return _oEa.gev('lk',n,tg)},download:function(n,tg){return _oEa.gev('dl',n,tg)},f$5:function(tp,n,tg,prdr){var o=_oEa,t;if(o.isobj(n)){t=n;n=tg;tg=t}
return o.f$0(tg,'prdevent',tp,n,null,prdr)},productevent:function(prdr,n,tg){return _oEa.f$5('ev',n,tg,prdr)},productbutton:function(prdr,n,tg){return _oEa.f$5('bt',n,tg,prdr)},productlink:function(prdr,n,tg){return _oEa.f$5('lk',n,tg,prdr)},
productdownload:function(prdr,n,tg){return _oEa.f$5('dl',n,tg,prdr)},contextflag:function(a,v){var o=_oEa,i,k,ci=0,cf,hcf={},ap=[];if(o.isdef(v)){a=[a,v]}for(i=0;i<a.length;i+=2){cf=a[i];v=a[i+1];if(o.isdef(hcf[cf])){if(!o.isobj(hcf[cf])){hcf[cf]=[hcf[cf]]}if(o.isobj(v)){
hcf[cf]=hcf[cf].concat(v)}else{hcf[cf].push(v)}}else{hcf[cf]=v}}for(k in hcf){v=hcf[k];if(o.isobj(v)){v=v.join(',')}ap.push(['ecf'+ci+'k',k,'ecf'+ci+'v',v]);ci+=1}if(ap.length){o.f$Q();o.gcall('cflag?',o.ws,ap,1);o.f$P(50)}},heatmap:function(hm,c){var o=_oEa;if(o.isdef(hm)){o.hmap=hm;c+=0;
o.hmapc=((c===1||c===2)?c:0)}},f$6:function(d){var o=_oEa;if(o.f$O('evt'+o.v$H,d)){o.v$H+=1}},f$7:function(k,d,s){var o=_oEa,i=o.v$I;if(o.f$O('eisk'+i,k)){o.f$O('eisd'+i,d);o.f$O('eiss'+i,s);o.v$I+=1}},f$8:function(rf){if(_oEa.f$H(rf)){_oEa.rf=rf}},tag:function(ws,epath,emulti){var o=_oEa,i;
if(o.isdef(ws)&&(emulti||(!o.v$A))){if(!(eflash||emulti)){o.v$A=1}if(!epath){epath=''}o.gcall('tag',ws,[o.f$M(),['urlp',epath],o.v$F]);o.v$T=1}o.v$H=o.v$I=0},action:function(ws,act,acto,acti){var o=_oEa,a;a=['eact',act,'eacto',acto,'eacti',acti];if(o.straarg(a)!==''){
o.f$4('action',ws,[a,['actr',o.actionref],o.v$F])}},f$AA:function(r){_oEa.f$AA=r},actionin:function(a){if(a[0]=='actionname'){_oEa.gcall('action','',_oEa.f$AK(a));return}_oEa.gcall('action','',['eacti',a[0]])},actionout:function(a){if(a[0]=='actionname'){
_oEa.gcall('action','',_oEa.f$AK(a));return}_oEa.gcall('action','',['eacto',a[0],'actr',a[1]])},actionparam:function(a){_oEa.gcall('actionparam','',_oEa.f$AK(a))},f$9:function(r){_oEa.f$9=r},f$AB:function(ws,ref,am,tp){var o=_oEa;o.f$4('estimate',ws,
['amount',am,'ref',ref,'type',tp,'fl',o.flash])},f$AC:function(ws,dur){var o=_oEa;if(o.isdef(ws)){o.f$4('scart',ws,['scart','1','ttl',dur])}},f$AD:function(am,qty,ref,n){var o=_oEa,i;i=o.v$G.length;o.v$G.push(['prda'+i,am,'prdq'+i,qty,'prdr'+i,ref,'prdn'+i,n])},f$AE:function(){var o=_oEa;
if(o.v$Y){o.f$_('orderhook','',o.v$Y);o.v$Y=[]}},f$AF:function(ws,am,ref,dur,tp,pay){var o=_oEa,i;if(o.aisdef([ws,ref])){o.v$Y=['amount',am,'ref',ref,'ttl',dur,'type',tp,'payment',pay,'estimateref',o.f$9,'fl',o.flash];o.f$4('order',ws,[o.v$Y,o.v$G,o.v$F])}o.v$G=[]},f$AG:function(ws){
_oEa.f$4('nc',ws,'')},misc:function(ws,ap){_oEa.gcall('misc',ws,ap)},blockpromo:function(ws,bp,redir){_oEa.gcall('bpromo',ws,['ebp',bp],0,redir)},click:function(ws,ope,redir){_oEa.gcall('click',ws,['eope',ope,'epix','1'],0,redir)},view:function(ws,ope,redir){
_oEa.gcall('view',ws,['eope',ope],0,redir)},uparam:function(hpk,hpm){var o=_oEa,k,ap=[];for(k in hpk){ap.push('euk'+k,hpk[k])}for(k in hpm){ap.push('eum'+k,hpm[k])}o.gcall('uparam','',ap)},f$AH:function(tp,ws,tpo,tpod,tpp,tpm,cat,url,redir){var o=_oEa,ap=[],s;if(o.isdef(tpo)){
ap.push(['ecat',cat,'ecpos',o.tpcpos,'ecnbr',o.tpcnbr]);ap.push(((o.isdef(url))?['eurl',url]:['epix','1']));if(o.tpcprd){ap.push(['ecprdr',o.tpcprd[0],'ecprdn',o.tpcprd[1]])}if(!o.isdef(tpod)){tpod=tpo}s=o.f$N([tpo,tpod]);if(o.aisdef([tpp,tpm])){s+=o.f$N([tpp,tpm])}if(tp===1){o.f$Q();
o.gcall('tpclick',ws,ap,0,redir,null,s);o.f$P(50)}else{return o.f$Z('tpclick',ws,ap,null,s)}}},tpclickpos:function(pos,nbr){_oEa.tpcpos=pos;_oEa.tpcnbr=nbr},tpclickprd:function(prdr,prdn){_oEa.tpcprd=[prdr,prdn]},tpclick:function(ws,tpo,tpod,cat,url,redir){
return _oEa.f$AH(1,ws,tpo,tpod,'','',cat,url,redir)},dyntpclick:function(ws,tpo,tpod,tpp,tpm,cat,url,redir){return _oEa.f$AH(1,ws,tpo,tpod,tpp,tpm,cat,url,redir)},tpclickurl:function(ws,tpo,tpod,cat,url){return _oEa.f$AH(2,ws,tpo,tpod,'','',cat,url)},
dyntpclickurl:function(ws,tpo,tpod,tpp,tpm,cat,url){return _oEa.f$AH(2,ws,tpo,tpod,tpp,tpm,cat,url)},tpviewprd:function(prdr,pos){var ap=_oEa.tpvprd=_oEa.tpvprd||[];pos=pos||ap.length;_oEa.tpvprd[pos]=prdr},f$AI:function(tp,ws,tpo,tpod,tpp,tpm,cat,url){var o=_oEa,ap=[],s,i,j,_a;
if(o.isdef(ws)&&o.isdef(tpo)){ap.push('ecat',cat);if(o.isdef(url)){ap.push('eurl',url)}if(!o.isdef(tpod)){tpod=tpo}s=o.f$N([tpo,tpod]);if(o.aisdef([tpp,tpm])){s+=o.f$N([tpp,tpm])}if(tp===1){_a=o.tpvprd;if(_a&&_a.length){for(i=0,j=0;i<_a.length;i+=1){if(_a[i]){
ap.push(['evprdr'+j,_a[i],'evprdpos'+j,i]);j+=1}}o.tpvprd=[]}o.gcall('tpview',ws,ap,0,null,null,s)}else{return o.f$Z('tpview',ws,ap,null,s)}}},tpview:function(ws,tpo,tpod,cat,url){return _oEa.f$AI(1,ws,tpo,tpod,'','',cat,url)},dyntpview:function(ws,tpo,tpod,tpp,tpm,cat,url){
return _oEa.f$AI(1,ws,tpo,tpod,tpp,tpm,cat,url)},tpviewurl:function(ws,tpo,tpod,cat,url){return _oEa.f$AI(2,ws,tpo,tpod,'','',cat,url)},dyntpviewurl:function(ws,tpo,tpod,tpp,tpm,cat,url){return _oEa.f$AI(2,ws,tpo,tpod,tpp,tpm,cat,url)},f$AJ:function(s){var i,j,a=[],b;if(s){
b=s.replace(/(\n|\t| )+/g,' ').replace(/(^ | $)/g,'').replace(/ *, */g,',').split(',');for(i=0;i<b.length;i+=1){if((j=b[i].indexOf(' '))<=0){a[i*2]=b[i];a[1+i*2]=''}else{a[i*2]=b[i].substring(0,j);a[1+i*2]=b[i].substring(j+1)}}}return a},globalarg:function(a){_oEa.agp=(a&&_oEa.isobj(a))?a:[]},
canbeacon:function(){var o=_oEa;return(o.isdef(typeof navigator)&&o.isdef(typeof URLSearchParams))},usebeacon:function(a){var o=_oEa;o.beacon=(o.canbeacon())?((a&&o.isobj(a))?a[0]:a):0},carg:function(k,v){if(_oEa.isdef(k)){_oEa.app=_oEa.app.concat([k,v])}},f$AK:function(hp,hflags){
var o=_oEa,i,j,ap=[],multi=0,iski=0,isdi=0,propi=0,v2inc={eact:1,eacto:1,eacti:1,evt:1,estimateref:1},hprd={},hcf={},prdr='',cf='',ai=0,ci=0,pi=0,hact={},hacte,actpn,actn,k,kk,ko,v,pr,prd,ppi,isreserved,ari,ar;if(o.isobj(hp)){if(hp.length%2){hp=[]}}else{hp=o.f$AJ(hp)}try{if(EA_param&&(!o.v$Q)){
hp=hp.concat(o.f$AJ(EA_param));o.v$Q=1}}catch(ignore){}if(o.rec){hp=o.app.concat(['recurse','1'],hp);o.rec=0}else{o.app=hp.concat(o.app)}if(o.isobj(hp)){ar=o.reserved;for(j=0;j<hp.length;j+=2){kk='';ko=hp[j];if(typeof ko==='function'){j-=1;continue}v=hp[j+1];if(typeof v==='function'){
if(ko==='onload'){o.ondone(v)}j-=1;continue}if(ko==='multi'&&v){multi=1;continue}k=o.v$N[ko];if(!k){k=ko}else{if(k.charAt(0)==='_'){k=k.substring(1);if(hflags){hflags[k]=v}}}for(ari=0,isreserved=0;ari<ar.length;ari+=1){if(ar[ari]===k){isreserved=1;break}}if(isreserved){continue}
if(k.substring(0,3)==='prd'){if((i=ko.indexOf('-'))>0){kk=ko.substring(i+1);ko=ko.substring(0,i);k=o.v$N[ko];if(!k){k=ko}}if(k==='prdr'){prdr=v;if(!hprd[v]){hprd[v]={'_i':pi};pi+=1}}else if(o.isdef(prdr)){if(!hprd[prdr][k]){hprd[prdr][k]=kk?{}:v;if(kk){hprd[prdr][k][kk]=v}}else{
if(k==='prdq'){hprd[prdr][k]*=1;hprd[prdr][k]+=parseInt(v,10)}else if(kk){hprd[prdr][k][kk]=v}else{hprd[prdr][k]=v}}}continue}if(k==='actn'){actn=v;actpn='';hacte=hact[actn]={};continue}if(actn){if(k==='actl'){hacte.l=v;continue}if(k==='actr'){hacte.r=v;continue}if(k==='actm'){hacte.m=v;
continue}if(k.substring(0,4)==='actp'){if(k==='actpn'){actpn=v;hacte.p=hacte.p||{}}else if(actpn){var _a=hacte.p[actpn]=hacte.p[actpn]||[];if(k==='actpv'){_a[0]=v}if(k==='actpf'){_a[1]=v}}continue}}if(k==='etagid'){o.etagid=v;continue}if(k.substring(0,6)==='cflag-'){kk=k.substring(6);
if(kk==='key'){cf=v}else if(kk==='val'){if(cf!==''){if(o.isdef(hcf[cf])){if(!o.isobj(hcf[cf])){hcf[cf]=[hcf[cf]]}if(o.isobj(v)){hcf[cf]=hcf[cf].concat(v)}else{hcf[cf].push(v)}}else{hcf[cf]=v}}}continue}if(v2inc[k]){v2inc[k]+=1;k+=(v2inc[k]-2).toString()}
if(k.substring(0,3)==='eis'&&k!=='eise'){if(k==='eisr'){iski+=1;ap.push('eisk'+(iski-1),'results');k='eisd'}if(k==='eisk'){iski+=1}if(k==='eisd'){isdi+=1;if(iski<isdi){iski=isdi}}k+=(iski-1).toString()}if(k.substring(0,4)==='epro'){if(k==='epron'){propi+=1}k+=(propi-1).toString()}
if(k==='urlp'&&v.indexOf('|')>=0){v=v.replace(/\|/g,'/')}if(k==='rf'){o.f$8(v)}else{ap.push(k,v)}}for(pr in hprd){prd=hprd[pr];if(o.isobj(prd)){pi=prd._i;ap.push('prdr'+pi,pr);for(k in prd){if(k==='_i'){continue}v=prd[k];if(o.isobj(v)){ppi=0;for(kk in v){
ap.push([k+pi+'k'+ppi,kk,k+pi+'d'+ppi,v[kk]]);ppi+=1}}else{ap.push(k+pi,v)}}}}for(k in hact){hacte=hact[k];ap.push(['actn'+ai,k,'actr'+ai,hacte.r,'actl'+ai,hacte.l,'actm'+ai,hacte.m]);if(hacte.p){var sk,sai=0;for(sk in hacte.p){v=hacte.p[sk];ap.push(
['actp'+ai+'n'+sai,sk,'actp'+ai+'v'+sai,v[0],'actp'+ai+'f'+sai,v[1]]);sai+=1}}ai+=1}for(k in hcf){v=hcf[k];if(o.isobj(v)){v=v.join(',')}ap.push(['ecf'+ci+'k',k,'ecf'+ci+'v',v]);ci+=1}}ap.push(['evariant',o.v+'-'+o.vcall()]);return ap},collectorurl:function(hp,hf){var o=_oEa;
return o.f$Z('col?','',[o.f$AK(hp,hf),o.f$M()])},f$AL:function(srv,ok){var r,o=_oEa,k=o.f$AW(srv);r=o.v$L[k]=o.v$L[k]||0;if(ok){o.v$L[k]+=1}return r},collectorclean:function(srv){var qs,o=_oEa,orig=o.f$AV(srv),u=orig[0];if(o.f$G(u)!==o.f$G(orig[1])){orig[1]=''}
qs=(u.indexOf('?')!==-1)?u.split('?')[1]:'';if(qs!==''){var rtn=u.split('?')[0],p,pa=[],i,
rx=/^(eope|edebug|ebp|eurl|estimate|scart|actr|eact[io]*|et|pgerr|erf|ept|euidl|euidlh|euidle|uid-enc|eparam|eanonymous|enotrack|eis[kds][0-9]+|epos|epix|eqrcode|eqrdot|evt[0-9]+|evtype|eemail|tduid|piuid|zanpid|prd[armnqpgf][0-9]*|ea-rnd|eseg-[a-z]+|eseg-[a-z]+|e(?:sl|ml|tf|pi|ad|af|pt|gn|sc)-[a-z]+)$/g;
pa=qs.split('&');for(i=pa.length-1;i>=0;i-=1){p=pa[i].split('=')[0];if(p.match(rx)){pa.splice(i,1)}}orig[0]=rtn+'?'+pa.join('&')}},collector:function(a,srv){var o=_oEa,i,f,hp,hf,ap=[],spanb;o.hpp=a||[];spanb=o.f$AL(srv,1);o.vcall(3);if(!o.isobj(a[0])){a=[a]}for(i=0;i<a.length;i+=1){
if(spanb&&!o.rec){o.collectorclean()}hp=a[i];if(!o.f$AU()){f=function(){o.body();o.collector(hp,srv)};o.f$AT({fcheck:o.f$AU,fcommit:f,frollback:f});continue}hf={};ap=[o.f$AK(hp,hf),o.f$M()];if(hf.epix){o.f$Q();o.gcall('col?','',ap,1,0,srv,o.rand()+'.png');o.f$P(100)}
else if(hf.ebeacon&&o.canbeacon()){o.gcallbeacon('col?','',ap,srv)}else{o.f$_('col?','',ap,srv)}}return 1},recurse:function(yn){_oEa.rec=yn},rad:function(hp){var o=_oEa,hf={},ws=o.ws||'-';o.f$_('rad','',[o.f$AK(hp,{}),o.f$M()]);return 1},go:function(srv){var o=_oEa,t,v=250,c=50,d;
if(o.isdef(typeof EA_data)){d=EA_data}o.f$F(srv);if(!o.f$AL(srv)){if(d){o.vcall(2);o.collector(d,srv)}else{t=setInterval(function(){c-=1;if(o.f$AL(srv)){c=0}else if(d){o.vcall(2);o.collector(d,srv);c=0}if(!c){clearInterval(t)}},v)}}if(o.v$X){return}o.v$X=1;o.onload(_oEa.f$3)},
tcfv2load:function(srv){var o=_oEa;if(!o.tcfv2loaded){var t=o.isdef(typeof __tcfapi);if(!t&&!o.isdef(typeof __eaGenericCmpApi)){setTimeout(o.tcfv2load,100);return}if(t){var cb=function cb(tcd,ok){var o=_oEa;if(ok&&tcd.eventStatus!=='cmpuishown'){o.tcfv2d=tcd;
if(o.isdef(typeof o.pmtcfv2thaw)){o.pmtcfv2thaw()}}};__tcfapi('addEventListener',2,cb);__tcfapi('ping',2,function c(x){_oEa.CmpTcfv2=1});if(!o.CmpTcfv2){var ddKey='euconsent-v2',v=o.f$AO(ddKey);if(v){cb({tcString:v},1)}(function(cb,ddKey){var lp=_oEa.ls.__proto__;
lp.setItemEAWrap=lp.setItemEAWrap||lp.setItem;lp.setItem=function(k,v){if(k===ddKey){setTimeout(function(){cb({tcString:v},1)},10)}return this.setItemEAWrap(k,v)}})(cb,ddKey)}}else{__eaGenericCmpApi(function c(k,payload,ok){var o=_oEa;if(ok){o.tcfv2d={eamode:k,eapayload:payload};
if(o.isdef(typeof o.pmtcfv2thaw)){o.pmtcfv2thaw()}}})}o.tcfv2loaded=1}}};var _oEaW=window._oEaW=_oEa;_oEa.v$U=_oEa.server;if(typeof window._oEaXp!=="object"){var _oEaXp=window._oEaXp={version:'5.5.6',_map:[],noidcnt:0,_rd:function(ev){return(ev.indexOf('follow')>=0||ev==='extclick')?1:0},
_ccnt:[],_ccntmax:[],cancall:function(i){if(_oEaXp._ccntmax[i]&&_oEaXp._ccnt[i]>=_oEaXp._ccntmax[i]){return 0}_oEaXp._ccnt[i]+=1;return 1},map:function(axp){var i,hxp,tg,cb,lk,v,li,evn;for(i=0;i<axp.length;i+=1){hxp=axp[i];tg=this.thaw(hxp.xp);if(tg){cb='';lk=hxp.actp;if(!lk){continue}
li=_oEaXp._ccnt.length;_oEaXp._ccnt.push(0);_oEaXp._ccntmax.push(hxp.cnt);if(hxp.act=='actionparam'){tg.elt.className+="EA_actionparam-"+lk;tg.elt.onfocus=function(e){_oEa.onfocus(e)};tg.elt.onblur=function(e){_oEa.onblur(e)};continue}cb=(function(lk,act,li){var alk=lk.split(';');switch(act){
case'ev-ev':return function(v,ev){if(_oEaXp.cancall(li)){_oEa.levent(lk)}};case'ev-bt':return function(v,ev){if(_oEaXp.cancall(li)){_oEa.button(lk)}};case'ev-lk':return function(v,ev){if(_oEaXp.cancall(li)){_oEa.link(lk)}};case'ev-dl':return function(v,ev){if(_oEaXp.cancall(li)){_oEa.download(lk)}};
case'rec-cback':case'cback':return function(v,ev){if(_oEaXp.cancall(li)){_oEa.recurse(1);eval(lk);_oEa.recurse(0)}};case'dc':return function(v,ev){if(_oEaXp.cancall(li)){var c=_oEa.xpathdc[lk];if(c){c()}}};case'mt':return function(v,ev){if(_oEaXp.cancall(li)){var c=_oEa.xpathmt[lk];if(c){c()}}};
case'tpclick':return function(v,ev){if(_oEaXp.cancall(li)){_oEa.tpclick('',alk[0],alk[1],alk[2],alk[3],_oEaXp._rd(ev))}};case'tpview':return function(v,ev){if(_oEaXp.cancall(li)){_oEa.tpview('',alk[0],alk[1],alk[2],alk[3])}};case'bpromo':return function(v,ev){if(_oEaXp.cancall(li)){
_oEa.blockpromo('',lk,_oEaXp._rd(ev))}};case'rec-carg':return function(v,ev){if(_oEaXp.cancall(li)){_oEa.carg(lk,v)}};case'uparam':return function(v,ev){if(_oEaXp.cancall(li)){_oEa.uparam([],[lk,v])}};case'click':return function(v,ev){if(_oEaXp.cancall(li)){_oEa.click('',lk,_oEaXp._rd(ev))}};
case'view':return function(v,ev){if(_oEaXp.cancall(li)){_oEa.view('',lk,_oEaXp._rd(ev))}};case'dyntpclick':return function(v,ev){if(_oEaXp.cancall(li)){_oEa.dyntpclick('',alk[0],alk[1],alk[2],alk[3],alk[4],alk[5],_oEaXp._rd(ev))}};case'dyntpview':return function(v,ev){if(_oEaXp.cancall(li)){
_oEa.dyntpview('',alk[0],alk[1],alk[2],alk[3],alk[4],alk[5])}};case'action':return function(v,ev){if(_oEaXp.cancall(li)){_oEa.action('',lk)}};case'extclick':return function(v,ev){if(_oEaXp.cancall(li)){_oEa.d.location=lk}};case'extview':return function(v,ev){if(_oEaXp.cancall(li)){
_oEa.gloadimg(lk)}};case'extjs':return function(v,ev){if(_oEaXp.cancall(li)){_oEa.gloadjs(lk)}}}return''}(lk,hxp.act,li));if(!cb){continue}evn='';switch(hxp.ev){case'text':case'onload':v=this.tgvalue(tg);if(v){cb(v)}break;case'mclickfollow':case'mclick':evn='Click';case'mover':
evn=evn||'MouseOver';case'fin':evn=evn||'FocusIn';case'fout':evn=evn||'FocusOut';case'mout':evn=evn||'MouseOut';(function(tg,ev,cb){_oEaXp._map.push([tg.elt,tg]);_oEa.gevent(tg.elt,evn,function(e){var se=_oEa.evtg(e);if(_oEaXp._rd(ev)||ev==='extclick'){e.preventDefault();e.stopPropagation();
if(tg.elt.href!==undefined){tg.elt.removeAttribute('href')}}cb(_oEaXp.tgvalue(tg),ev);return 0})}(tg,hxp.ev,cb));break}}}},tgvalue:function(tg){if((!tg)||(!tg.elt)){return''}var v='',re;if(tg.att){v=tg.elt.getAttribute(tg.att)||''}else{v=this._nv(tg.elt)||''}if(v!==''&&tg.regex){try{
re=new RegExp(tg.regex[0],'m');if(v.match(re)){v=v.replace(re,tg.regex[1])}else{v=''}}catch(ignore){}}else{v=v.replace(/\s+/mg,' ');v=v.replace(/(^ | $)/mg,'')}return v},_nv:function(e){var v='',i,se;if(e){if(e.nodeName=='INPUT'){v=e.value}else{for(i=0;i<e.childNodes.length;i+=1){
se=e.childNodes[i];if(se.nodeType===3){v+=' '+se.nodeValue}}}v=v.replace(/(^\s+|\s+$)/mg,'')}return v},freeze:function(tg){var path="",cnt,elt,noid,sib;noid=_oEaXp.noidcnt;for(elt=tg.elt;(elt&&elt.nodeType===1);elt=elt.parentNode){if(elt.id&&_oEa.eltbyid(elt.id)!==null){if(noid){noid-=1}else{
path='id("'+elt.id+'")'+path;break}}cnt=1;for(sib=elt.previousSibling;sib;sib=sib.previousSibling){if(sib.nodeType===1&&sib.tagName===elt.tagName){cnt+=1}}path="/"+elt.tagName+((cnt>1)?"["+cnt+"]":"")+path}if(tg.att){path=path+"@"+tg.att}if(tg.regex&&tg.regex[0]){path=path+".replace('"+
tg.regex[0].replace(/'/g,"''")+"','"+tg.regex[1].replace(/'/g,"''")+"')"}return path;},thaw:function(path){var i,rep,att,ap,elt,s,bopen,bclose,tagname,ae,j,tg,r,pos;if((i=path.indexOf('.replace('))>0){rep=path.substring(i+8);path=path.substring(0,i)}if((i=path.indexOf('@'))>0){
att=path.substring(i+1);path=path.substring(0,i)}ap=path.split('/');for(i=0;i<ap.length;i+=1){s=ap[i];if(s){if(s.indexOf('id(')===0){s=s.substring(4,s.length-2);elt=_oEa.eltbyid(s);if(!elt){_oEa.log('404 xp-id',path);return}}else{if(elt){bopen=s.indexOf('[');bclose=s.indexOf(']');tagname=s;pos=1;
if(bopen>0){tagname=s.substring(0,bopen);pos=s.substring(bopen+1,bclose)}if(elt.childNodes){ae=elt.childNodes;for(j=0;j<ae.length;j+=1){if(ae[j].tagName===tagname){if(pos===1){elt=ae[j];break}pos-=1}}}}else{elt=_oEa.eltbyname(s);if(!elt){_oEa.log('404 xp-name',path);return}elt=elt[0]}}}}
tg={'elt':elt};if(rep){r=[];if((i=rep.indexOf("','"))>0){r[0]=rep.substring(2,i).replace(/''/g,"'");r[1]=rep.substring(i+3,rep.lastIndexOf("')")).replace(/''/g,"'");tg.regex=r}}if(att){tg.att=att}return tg}}}}if(!_oEa.go2){_oEa.collectorcback=function(x){
_oEa.ondone(x)};_oEa.f$AS=function(n){var a,o=_oEa;a=o.w[n]=o.w[n]||[];if(Array.isArray(a))(function(o,a){a.push=function(){[].push.apply(a,arguments);_oEa.f$AP(a)};o.f$AP(a)}(o,a))};_oEa.f$AR=function(n){var i,h={},as,o=_oEa;var ln=o.h31b(o.server);if(n){h[n]=1}as=o.eltbyname('script');
for(i=0;i<as.length;i+=1){n=as[i].ea;if(n){h[n]=1}}if(!o.qln){o.qln=1;as=['EA','_EA_'];for(i=0;i<as.length;i+=1){if(o.w[as[i]+ln]){h[as[i]+ln]=1}}}for(i in h){o.f$AS(i)}};_oEa.f$AP=function(a,r){var i,e,h,ae,k,o=_oEa;var a2pt=['collector','collectorcback','onload','ondone','link','event','levent',
'button','download','tpview','tpviewprd','dyntpview','tpclick','tpclickpos','tpclickprd','dyntpclick','productevent','productbutton','productlink','productdownload','actionin','actionout','action','actionparam','globalarg','usebeacon'];var a2ptsync=[2,3,24,25];o.vcall(4);if(!a.length){return}
if(!a.eah){if(!r){r=0}if(r<50){return(function(a,r){setTimeout(function(){_oEa.f$AP(a,r)},50)})(a,r+1)}}for(i=0;i<a.length;i+=1){if(o.isobj(a[i])&&!(a[i].hasOwnProperty("push"))){a[i]=[].slice.call(a[i])}}h=a.eah;a=a.splice(0);for(i=0;i<a.length;i+=1){var ipt=0;ae=a[i];
if(ae.length&&typeof ae[0]==='string'){ipt=a2pt.indexOf(ae[0]);if(ipt>=0){ae.shift()}else{ipt=0}}while(ae&&o.isobj(ae[0])){ae=ae[0]}k=a2pt[ipt];if(!ipt){ae=[ae,h]}else if(ipt>19&&ipt<26){ae=[ae]}else if(ipt==5){k='levent'}if(ipt==22){k='actionin'}(function(f,ap,sync){if(f){
if(sync){f.apply(null,ap)}else{setTimeout(function(){f.apply(null,ap)},1)}}}(o[k],ae,(o.beacon||a2ptsync.indexOf(ipt)>=0)));o.dbg(['q',a2pt[ipt],ae])}};_oEa.go2=function(srv){_oEa.go(srv);_oEa.onload(_oEa.f$AR);}}(function(){_oEa.go2('ibe1.iberia.com')}());
