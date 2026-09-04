// ============================================================
// BlueBee Studio 2.0 — script.js
// Seluruh JavaScript dipisahkan dari BlueBee_Studio_2.0.html
// Urutan eksekusi dipertahankan: qrcode lib -> app utama -> app v2
// ============================================================

/* ---------- 1) qrcode-generator 1.4.4 (MIT) - embedded agar QR Generator berfungsi offline ---------- */
/* qrcode-generator 1.4.4 (MIT) — embedded agar QR Generator berfungsi offline */
var qrcode=function(){function i(t,r){function a(t,r){g=function(t){for(var r=new Array(t),e=0;e<t;e+=1){r[e]=new Array(t);for(var n=0;n<t;n+=1)r[e][n]=null}return r}(l=4*u+17),e(0,0),e(l-7,0),e(0,l-7),i(),o(),v(t,r),7<=u&&h(t),null==n&&(n=w(u,f,c)),d(n,r)}var u=t,f=y[r],g=null,l=0,n=null,c=[],s={},e=function(t,r){for(var e=-1;e<=7;e+=1)if(!(t+e<=-1||l<=t+e))for(var n=-1;n<=7;n+=1)r+n<=-1||l<=r+n||(g[t+e][r+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},o=function(){for(var t=8;t<l-8;t+=1)null==g[t][6]&&(g[t][6]=t%2==0);for(var r=8;r<l-8;r+=1)null==g[6][r]&&(g[6][r]=r%2==0)},i=function(){for(var t=B.getPatternPosition(u),r=0;r<t.length;r+=1)for(var e=0;e<t.length;e+=1){var n=t[r],o=t[e];if(null==g[n][o])for(var i=-2;i<=2;i+=1)for(var a=-2;a<=2;a+=1)g[n+i][o+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a}},h=function(t){for(var r=B.getBCHTypeNumber(u),e=0;e<18;e+=1){var n=!t&&1==(r>>e&1);g[Math.floor(e/3)][e%3+l-8-3]=n}for(e=0;e<18;e+=1){n=!t&&1==(r>>e&1);g[e%3+l-8-3][Math.floor(e/3)]=n}},v=function(t,r){for(var e=f<<3|r,n=B.getBCHTypeInfo(e),o=0;o<15;o+=1){var i=!t&&1==(n>>o&1);o<6?g[o][8]=i:o<8?g[o+1][8]=i:g[l-15+o][8]=i}for(o=0;o<15;o+=1){i=!t&&1==(n>>o&1);o<8?g[8][l-o-1]=i:o<9?g[8][15-o-1+1]=i:g[8][15-o-1]=i}g[l-8][8]=!t},d=function(t,r){for(var e=-1,n=l-1,o=7,i=0,a=B.getMaskFunction(r),u=l-1;0<u;u-=2)for(6==u&&(u-=1);;){for(var f=0;f<2;f+=1)if(null==g[n][u-f]){var c=!1;i<t.length&&(c=1==(t[i]>>>o&1)),a(n,u-f)&&(c=!c),g[n][u-f]=c,-1==(o-=1)&&(i+=1,o=7)}if((n+=e)<0||l<=n){n-=e,e=-e;break}}},w=function(t,r,e){for(var n=b.getRSBlocks(t,r),o=M(),i=0;i<e.length;i+=1){var a=e[i];o.put(a.getMode(),4),o.put(a.getLength(),B.getLengthInBits(a.getMode(),t)),a.write(o)}var u=0;for(i=0;i<n.length;i+=1)u+=n[i].dataCount;if(o.getLengthInBits()>8*u)throw"code length overflow. ("+o.getLengthInBits()+">"+8*u+")";for(o.getLengthInBits()+4<=8*u&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*u||(o.put(236,8),o.getLengthInBits()>=8*u));)o.put(17,8);return function(t,r){for(var e=0,n=0,o=0,i=new Array(r.length),a=new Array(r.length),u=0;u<r.length;u+=1){var f=r[u].dataCount,c=r[u].totalCount-f;n=Math.max(n,f),o=Math.max(o,c),i[u]=new Array(f);for(var g=0;g<i[u].length;g+=1)i[u][g]=255&t.getBuffer()[g+e];e+=f;var l=B.getErrorCorrectPolynomial(c),h=C(i[u],l.getLength()-1).mod(l);a[u]=new Array(l.getLength()-1);for(g=0;g<a[u].length;g+=1){var s=g+h.getLength()-a[u].length;a[u][g]=0<=s?h.getAt(s):0}}var v=0;for(g=0;g<r.length;g+=1)v+=r[g].totalCount;var d=new Array(v),w=0;for(g=0;g<n;g+=1)for(u=0;u<r.length;u+=1)g<i[u].length&&(d[w]=i[u][g],w+=1);for(g=0;g<o;g+=1)for(u=0;u<r.length;u+=1)g<a[u].length&&(d[w]=a[u][g],w+=1);return d}(o,n)};s.addData=function(t,r){var e=null;switch(r=r||"Byte"){case"Numeric":e=x(t);break;case"Alphanumeric":e=m(t);break;case"Byte":e=L(t);break;case"Kanji":e=D(t);break;default:throw"mode:"+r}c.push(e),n=null},s.isDark=function(t,r){if(t<0||l<=t||r<0||l<=r)throw t+","+r;return g[t][r]},s.getModuleCount=function(){return l},s.make=function(){if(u<1){for(var t=1;t<40;t++){for(var r=b.getRSBlocks(t,f),e=M(),n=0;n<c.length;n++){var o=c[n];e.put(o.getMode(),4),e.put(o.getLength(),B.getLengthInBits(o.getMode(),t)),o.write(e)}var i=0;for(n=0;n<r.length;n++)i+=r[n].dataCount;if(e.getLengthInBits()<=8*i)break}u=t}a(!1,function(){for(var t=0,r=0,e=0;e<8;e+=1){a(!0,e);var n=B.getLostPoint(s);(0==e||n<t)&&(t=n,r=e)}return r}())},s.createTableTag=function(t,r){t=t||2;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+(r=void 0===r?4*t:r)+"px;",e+='">',e+="<tbody>";for(var n=0;n<s.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<s.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+t+"px;",e+=" height: "+t+"px;",e+=" background-color: ",e+=s.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>"},s.createSvgTag=function(t,r,e,n){var o={};"object"==typeof t&&(t=(o=t).cellSize,r=o.margin,e=o.alt,n=o.title),t=t||2,r=void 0===r?4*t:r,(e="string"==typeof e?{text:e}:e||{}).text=e.text||null,e.id=e.text?e.id||"qrcode-description":null,(n="string"==typeof n?{text:n}:n||{}).text=n.text||null,n.id=n.text?n.id||"qrcode-title":null;var i,a,u,f,c=s.getModuleCount()*t+2*r,g="";for(f="l"+t+",0 0,"+t+" -"+t+",0 0,-"+t+"z ",g+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',g+=o.scalable?"":' width="'+c+'px" height="'+c+'px"',g+=' viewBox="0 0 '+c+" "+c+'" ',g+=' preserveAspectRatio="xMinYMin meet"',g+=n.text||e.text?' role="img" aria-labelledby="'+p([n.id,e.id].join(" ").trim())+'"':"",g+=">",g+=n.text?'<title id="'+p(n.id)+'">'+p(n.text)+"</title>":"",g+=e.text?'<description id="'+p(e.id)+'">'+p(e.text)+"</description>":"",g+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',g+='<path d="',a=0;a<s.getModuleCount();a+=1)for(u=a*t+r,i=0;i<s.getModuleCount();i+=1)s.isDark(a,i)&&(g+="M"+(i*t+r)+","+u+f);return g+='" stroke="transparent" fill="black"/>',g+="</svg>"},s.createDataURL=function(o,t){o=o||2,t=void 0===t?4*o:t;var r=s.getModuleCount()*o+2*t,i=t,a=r-t;return I(r,r,function(t,r){if(i<=t&&t<a&&i<=r&&r<a){var e=Math.floor((t-i)/o),n=Math.floor((r-i)/o);return s.isDark(n,e)?0:1}return 1})},s.createImgTag=function(t,r,e){t=t||2,r=void 0===r?4*t:r;var n=s.getModuleCount()*t+2*r,o="";return o+="<img",o+=' src="',o+=s.createDataURL(t,r),o+='"',o+=' width="',o+=n,o+='"',o+=' height="',o+=n,o+='"',e&&(o+=' alt="',o+=p(e),o+='"'),o+="/>"};var p=function(t){for(var r="",e=0;e<t.length;e+=1){var n=t.charAt(e);switch(n){case"<":r+="&lt;";break;case">":r+="&gt;";break;case"&":r+="&amp;";break;case'"':r+="&quot;";break;default:r+=n}}return r};return s.createASCII=function(t,r){if((t=t||1)<2)return function(t){t=void 0===t?2:t;var r,e,n,o,i,a=1*s.getModuleCount()+2*t,u=t,f=a-t,c={"██":"█","█ ":"▀"," █":"▄","  ":" "},g={"██":"▀","█ ":"▀"," █":" ","  ":" "},l="";for(r=0;r<a;r+=2){for(n=Math.floor((r-u)/1),o=Math.floor((r+1-u)/1),e=0;e<a;e+=1)i="█",u<=e&&e<f&&u<=r&&r<f&&s.isDark(n,Math.floor((e-u)/1))&&(i=" "),u<=e&&e<f&&u<=r+1&&r+1<f&&s.isDark(o,Math.floor((e-u)/1))?i+=" ":i+="█",l+=t<1&&f<=r+1?g[i]:c[i];l+="\n"}return a%2&&0<t?l.substring(0,l.length-a-1)+Array(1+a).join("▀"):l.substring(0,l.length-1)}(r);t-=1,r=void 0===r?2*t:r;var e,n,o,i,a=s.getModuleCount()*t+2*r,u=r,f=a-r,c=Array(t+1).join("██"),g=Array(t+1).join("  "),l="",h="";for(e=0;e<a;e+=1){for(o=Math.floor((e-u)/t),h="",n=0;n<a;n+=1)i=1,u<=n&&n<f&&u<=e&&e<f&&s.isDark(o,Math.floor((n-u)/t))&&(i=0),h+=i?c:g;for(o=0;o<t;o+=1)l+=h+"\n"}return l.substring(0,l.length-1)},s.renderTo2dContext=function(t,r){r=r||2;for(var e=s.getModuleCount(),n=0;n<e;n++)for(var o=0;o<e;o++)t.fillStyle=s.isDark(n,o)?"black":"white",t.fillRect(n*r,o*r,r,r)},s}i.stringToBytes=(i.stringToBytesFuncs={default:function(t){for(var r=[],e=0;e<t.length;e+=1){var n=t.charCodeAt(e);r.push(255&n)}return r}}).default,i.createStringToBytes=function(u,f){var i=function(){function t(){var t=r.read();if(-1==t)throw"eof";return t}for(var r=S(u),e=0,n={};;){var o=r.read();if(-1==o)break;var i=t(),a=t()<<8|t();n[String.fromCharCode(o<<8|i)]=a,e+=1}if(e!=f)throw e+" != "+f;return n}(),a="?".charCodeAt(0);return function(t){for(var r=[],e=0;e<t.length;e+=1){var n=t.charCodeAt(e);if(n<128)r.push(n);else{var o=i[t.charAt(e)];"number"==typeof o?(255&o)==o?r.push(o):(r.push(o>>>8),r.push(255&o)):r.push(a)}}return r}};var r,t,a=1,u=2,o=4,f=8,y={L:1,M:0,Q:3,H:2},e=0,n=1,c=2,g=3,l=4,h=5,s=6,v=7,B=(r=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],(t={}).getBCHTypeInfo=function(t){for(var r=t<<10;0<=d(r)-d(1335);)r^=1335<<d(r)-d(1335);return 21522^(t<<10|r)},t.getBCHTypeNumber=function(t){for(var r=t<<12;0<=d(r)-d(7973);)r^=7973<<d(r)-d(7973);return t<<12|r},t.getPatternPosition=function(t){return r[t-1]},t.getMaskFunction=function(t){switch(t){case e:return function(t,r){return(t+r)%2==0};case n:return function(t,r){return t%2==0};case c:return function(t,r){return r%3==0};case g:return function(t,r){return(t+r)%3==0};case l:return function(t,r){return(Math.floor(t/2)+Math.floor(r/3))%2==0};case h:return function(t,r){return t*r%2+t*r%3==0};case s:return function(t,r){return(t*r%2+t*r%3)%2==0};case v:return function(t,r){return(t*r%3+(t+r)%2)%2==0};default:throw"bad maskPattern:"+t}},t.getErrorCorrectPolynomial=function(t){for(var r=C([1],0),e=0;e<t;e+=1)r=r.multiply(C([1,w.gexp(e)],0));return r},t.getLengthInBits=function(t,r){if(1<=r&&r<10)switch(t){case a:return 10;case u:return 9;case o:case f:return 8;default:throw"mode:"+t}else if(r<27)switch(t){case a:return 12;case u:return 11;case o:return 16;case f:return 10;default:throw"mode:"+t}else{if(!(r<41))throw"type:"+r;switch(t){case a:return 14;case u:return 13;case o:return 16;case f:return 12;default:throw"mode:"+t}}},t.getLostPoint=function(t){for(var r=t.getModuleCount(),e=0,n=0;n<r;n+=1)for(var o=0;o<r;o+=1){for(var i=0,a=t.isDark(n,o),u=-1;u<=1;u+=1)if(!(n+u<0||r<=n+u))for(var f=-1;f<=1;f+=1)o+f<0||r<=o+f||0==u&&0==f||a==t.isDark(n+u,o+f)&&(i+=1);5<i&&(e+=3+i-5)}for(n=0;n<r-1;n+=1)for(o=0;o<r-1;o+=1){var c=0;t.isDark(n,o)&&(c+=1),t.isDark(n+1,o)&&(c+=1),t.isDark(n,o+1)&&(c+=1),t.isDark(n+1,o+1)&&(c+=1),0!=c&&4!=c||(e+=3)}for(n=0;n<r;n+=1)for(o=0;o<r-6;o+=1)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(e+=40);for(o=0;o<r;o+=1)for(n=0;n<r-6;n+=1)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(e+=40);var g=0;for(o=0;o<r;o+=1)for(n=0;n<r;n+=1)t.isDark(n,o)&&(g+=1);return e+=Math.abs(100*g/r/r-50)/5*10},t);function d(t){for(var r=0;0!=t;)r+=1,t>>>=1;return r}var w=function(){for(var r=new Array(256),e=new Array(256),t=0;t<8;t+=1)r[t]=1<<t;for(t=8;t<256;t+=1)r[t]=r[t-4]^r[t-5]^r[t-6]^r[t-8];for(t=0;t<255;t+=1)e[r[t]]=t;var n={glog:function(t){if(t<1)throw"glog("+t+")";return e[t]},gexp:function(t){for(;t<0;)t+=255;for(;256<=t;)t-=255;return r[t]}};return n}();function C(n,o){if(void 0===n.length)throw n.length+"/"+o;var r=function(){for(var t=0;t<n.length&&0==n[t];)t+=1;for(var r=new Array(n.length-t+o),e=0;e<n.length-t;e+=1)r[e]=n[e+t];return r}(),i={getAt:function(t){return r[t]},getLength:function(){return r.length},multiply:function(t){for(var r=new Array(i.getLength()+t.getLength()-1),e=0;e<i.getLength();e+=1)for(var n=0;n<t.getLength();n+=1)r[e+n]^=w.gexp(w.glog(i.getAt(e))+w.glog(t.getAt(n)));return C(r,0)},mod:function(t){if(i.getLength()-t.getLength()<0)return i;for(var r=w.glog(i.getAt(0))-w.glog(t.getAt(0)),e=new Array(i.getLength()),n=0;n<i.getLength();n+=1)e[n]=i.getAt(n);for(n=0;n<t.getLength();n+=1)e[n]^=w.gexp(w.glog(t.getAt(n))+r);return C(e,0).mod(t)}};return i}function p(){var e=[],o={writeByte:function(t){e.push(255&t)},writeShort:function(t){o.writeByte(t),o.writeByte(t>>>8)},writeBytes:function(t,r,e){r=r||0,e=e||t.length;for(var n=0;n<e;n+=1)o.writeByte(t[n+r])},writeString:function(t){for(var r=0;r<t.length;r+=1)o.writeByte(t.charCodeAt(r))},toByteArray:function(){return e},toString:function(){var t="";t+="[";for(var r=0;r<e.length;r+=1)0<r&&(t+=","),t+=e[r];return t+="]"}};return o}var k,A,b=(k=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],(A={}).getRSBlocks=function(t,r){var e=function(t,r){switch(r){case y.L:return k[4*(t-1)+0];case y.M:return k[4*(t-1)+1];case y.Q:return k[4*(t-1)+2];case y.H:return k[4*(t-1)+3];default:return}}(t,r);if(void 0===e)throw"bad rs block @ typeNumber:"+t+"/errorCorrectionLevel:"+r;for(var n,o,i=e.length/3,a=[],u=0;u<i;u+=1)for(var f=e[3*u+0],c=e[3*u+1],g=e[3*u+2],l=0;l<f;l+=1)a.push((n=g,o=void 0,(o={}).totalCount=c,o.dataCount=n,o));return a},A),M=function(){var e=[],n=0,o={getBuffer:function(){return e},getAt:function(t){var r=Math.floor(t/8);return 1==(e[r]>>>7-t%8&1)},put:function(t,r){for(var e=0;e<r;e+=1)o.putBit(1==(t>>>r-e-1&1))},getLengthInBits:function(){return n},putBit:function(t){var r=Math.floor(n/8);e.length<=r&&e.push(0),t&&(e[r]|=128>>>n%8),n+=1}};return o},x=function(t){var r=a,n=t,e={getMode:function(){return r},getLength:function(t){return n.length},write:function(t){for(var r=n,e=0;e+2<r.length;)t.put(o(r.substring(e,e+3)),10),e+=3;e<r.length&&(r.length-e==1?t.put(o(r.substring(e,e+1)),4):r.length-e==2&&t.put(o(r.substring(e,e+2)),7))}},o=function(t){for(var r=0,e=0;e<t.length;e+=1)r=10*r+i(t.charAt(e));return r},i=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+t};return e},m=function(t){var r=u,n=t,e={getMode:function(){return r},getLength:function(t){return n.length},write:function(t){for(var r=n,e=0;e+1<r.length;)t.put(45*o(r.charAt(e))+o(r.charAt(e+1)),11),e+=2;e<r.length&&t.put(o(r.charAt(e)),6)}},o=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);if("A"<=t&&t<="Z")return t.charCodeAt(0)-"A".charCodeAt(0)+10;switch(t){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+t}};return e},L=function(t){var r=o,e=i.stringToBytes(t),n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=0;r<e.length;r+=1)t.put(e[r],8)}};return n},D=function(t){var r=f,e=i.stringToBytesFuncs.SJIS;if(!e)throw"sjis not supported.";!function(){var t=e("友");if(2!=t.length||38726!=(t[0]<<8|t[1]))throw"sjis not supported."}();var o=e(t),n={getMode:function(){return r},getLength:function(t){return~~(o.length/2)},write:function(t){for(var r=o,e=0;e+1<r.length;){var n=(255&r[e])<<8|255&r[e+1];if(33088<=n&&n<=40956)n-=33088;else{if(!(57408<=n&&n<=60351))throw"illegal char at "+(e+1)+"/"+n;n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13),e+=2}if(e<r.length)throw"illegal char at "+(e+1)}};return n},S=function(t){var e=t,n=0,o=0,i=0,r={read:function(){for(;i<8;){if(n>=e.length){if(0==i)return-1;throw"unexpected end of file./"+i}var t=e.charAt(n);if(n+=1,"="==t)return i=0,-1;t.match(/^\s$/)||(o=o<<6|a(t.charCodeAt(0)),i+=6)}var r=o>>>i-8&255;return i-=8,r}},a=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw"c:"+t};return r},I=function(t,r,e){for(var n=function(t,r){var n=t,o=r,l=new Array(t*r),e={setPixel:function(t,r,e){l[r*n+t]=e},write:function(t){t.writeString("GIF87a"),t.writeShort(n),t.writeShort(o),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(n),t.writeShort(o),t.writeByte(0);var r=i(2);t.writeByte(2);for(var e=0;255<r.length-e;)t.writeByte(255),t.writeBytes(r,e,255),e+=255;t.writeByte(r.length-e),t.writeBytes(r,e,r.length-e),t.writeByte(0),t.writeString(";")}},i=function(t){for(var r=1<<t,e=1+(1<<t),n=t+1,o=h(),i=0;i<r;i+=1)o.add(String.fromCharCode(i));o.add(String.fromCharCode(r)),o.add(String.fromCharCode(e));var a=p(),u=function(t){var e=t,n=0,o=0,r={write:function(t,r){if(t>>>r!=0)throw"length over";for(;8<=n+r;)e.writeByte(255&(t<<n|o)),r-=8-n,t>>>=8-n,n=o=0;o|=t<<n,n+=r},flush:function(){0<n&&e.writeByte(o)}};return r}(a);u.write(r,n);var f=0,c=String.fromCharCode(l[f]);for(f+=1;f<l.length;){var g=String.fromCharCode(l[f]);f+=1,o.contains(c+g)?c+=g:(u.write(o.indexOf(c),n),o.size()<4095&&(o.size()==1<<n&&(n+=1),o.add(c+g)),c=g)}return u.write(o.indexOf(c),n),u.write(e,n),u.flush(),a.toByteArray()},h=function(){var r={},e=0,n={add:function(t){if(n.contains(t))throw"dup key:"+t;r[t]=e,e+=1},size:function(){return e},indexOf:function(t){return r[t]},contains:function(t){return void 0!==r[t]}};return n};return e}(t,r),o=0;o<r;o+=1)for(var i=0;i<t;i+=1)n.setPixel(i,o,e(i,o));var a=p();n.write(a);for(var u=function(){function e(t){a+=String.fromCharCode(r(63&t))}var n=0,o=0,i=0,a="",t={},r=function(t){if(t<0);else{if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw"n:"+t};return t.writeByte=function(t){for(n=n<<8|255&t,o+=8,i+=1;6<=o;)e(n>>>o-6),o-=6},t.flush=function(){if(0<o&&(e(n<<6-o),o=n=0),i%3!=0)for(var t=3-i%3,r=0;r<t;r+=1)a+="="},t.toString=function(){return a},t}(),f=a.toByteArray(),c=0;c<f.length;c+=1)u.writeByte(f[c]);return u.flush(),"data:image/gif;base64,"+u};return i}();qrcode.stringToBytesFuncs["UTF-8"]=function(t){return function(t){for(var r=[],e=0;e<t.length;e++){var n=t.charCodeAt(e);n<128?r.push(n):n<2048?r.push(192|n>>6,128|63&n):n<55296||57344<=n?r.push(224|n>>12,128|n>>6&63,128|63&n):(e++,n=65536+((1023&n)<<10|1023&t.charCodeAt(e)),r.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return r}(t)},function(t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports&&(module.exports=t())}(function(){return qrcode});

/* ---------- 2) Script aplikasi utama ---------- */
// ============================================================
// [v2.0.2] Code Cleanup (±2.000 baris dibuang, perilaku tidak berubah):
//  • 39 salinan duplikat 21 fungsi tool (renderQrGen, renderLubang,
//    renderImg2Pdf, renderPdfComp, convPdfBuild, dkk.) dihapus — kini
//    tiap fungsi hanya 1 definisi (salinan terakhir = yang aktif).
//  • 18 fungsi orphan + var BB_QR_STYLES/BB_QR_STYLE_ORDER/renderTimeout
//    dihapus (fitur lama: QR Multi file-source pra-v2.2, style grid, helper).
//  • FIX: urutan halaman Images→PDF kini mengikuti urutan pemilihan file
//    (dulu urutan selesai-load).
//  • Guard ZIP standar >65.000 entri (tanpa ZIP64) → error jelas.
//  • Shortcut Reset/Dark mode utama Ctrl+Alt+R/D (fallback Ctrl+Shift+R/D);
//    shortcut nonaktif saat mengetik di input; modal bantuan diperbarui.
// ============================================================
// ============================================================
// Constants
// ============================================================
const BOOK_SIZES = [
  {value:'A7',label:'A7'},{value:'A6',label:'A6'},{value:'A5',label:'A5'},
  {value:'A4',label:'A4'},{value:'A3',label:'A3'},{value:'B5',label:'B5'},
  {value:'B4',label:'B4'},{value:'F4',label:'F4'},{value:'Novel',label:'Novel'},
  {value:'Custom',label:'Custom'}
];
const BOOK_SIZE_MAP = {A7:{w:74,h:105},A6:{w:105,h:148},A5:{w:148,h:210},A4:{w:210,h:297},A3:{w:297,h:420},B5:{w:176,h:250},B4:{w:250,h:353},F4:{w:210,h:330},Novel:{w:130,h:190}};

// PAPER_ISI_MAP = single source of truth untuk data kertas (nama, tipe, gsm, ketebalan)
const PAPER_ISI_MAP = {
  hvs75:{name:'HVS 75gsm',type:'HVS',gsm:75,thickness:0.1},
  hvs80:{name:'HVS 80gsm',type:'HVS',gsm:80,thickness:0.11},
  hvs100:{name:'HVS 100gsm',type:'HVS',gsm:100,thickness:0.12},
  art120:{name:'Art Paper 120gsm',type:'Art Paper',gsm:120,thickness:0.13},
  art150:{name:'Art Paper 150gsm',type:'Art Paper',gsm:150,thickness:0.142},
  matte120:{name:'Matte Paper 120gsm',type:'Matte',gsm:120,thickness:0.13},
  matte150:{name:'Matte Paper 150gsm',type:'Matte',gsm:150,thickness:0.142},
  carton210:{name:'Art Carton 210gsm',type:'Carton',gsm:210,thickness:0.23},
  carton230:{name:'Art Carton 230gsm',type:'Carton',gsm:230,thickness:0.25},
  carton260:{name:'Art Carton 260gsm',type:'Carton',gsm:260,thickness:0.32},
  carton310:{name:'Art Carton 310gsm',type:'Carton',gsm:310,thickness:0.36},
  carton400:{name:'Art Carton 400gsm',type:'Carton',gsm:400,thickness:0.4},
  // [NEW] Ivory board — ditambahkan atas permintaan user
  ivory210:{name:'Ivory 210gsm',type:'Ivory',gsm:210,thickness:0.25},
  ivory230:{name:'Ivory 230gsm',type:'Ivory',gsm:230,thickness:0.28},
  ivory250:{name:'Ivory 250gsm',type:'Ivory',gsm:250,thickness:0.30},
  ivory270:{name:'Ivory 270gsm',type:'Ivory',gsm:270,thickness:0.33},
  ivory300:{name:'Ivory 300gsm',type:'Ivory',gsm:300,thickness:0.38},
  ivory350:{name:'Ivory 350gsm',type:'Ivory',gsm:350,thickness:0.41},
  ivory400:{name:'Ivory 400gsm',type:'Ivory',gsm:400,thickness:0.45},
  // [NEW] Stiker — dipakai di Hitung Harga untuk kalkulasi stiker
  // GSM & thickness tidak relevan untuk stiker, pakai placeholder 0
  stikerVinil:{name:'Stiker Vinil',type:'Stiker',gsm:0,thickness:0},
  stikerKromo:{name:'Stiker Kromo',type:'Stiker',gsm:0,thickness:0},
  stikerSilver:{name:'Stiker Silver',type:'Stiker',gsm:0,thickness:0},
  stikerGold:{name:'Stiker Gold',type:'Stiker',gsm:0,thickness:0},
  stikerTransparan:{name:'Stiker Transparan',type:'Stiker',gsm:0,thickness:0},
  stikerSegel:{name:'Stiker Segel',type:'Stiker',gsm:0,thickness:0},
  stikerHologram:{name:'Stiker Hologram',type:'Stiker',gsm:0,thickness:0},
  bookpaper80:{name:'Bookpaper 80gsm',type:'Bookpaper',gsm:80,thickness:0.14}
};
// Diturunkan dari PAPER_ISI_MAP (tidak duplikat)
const PAPER_ISI_OPTIONS = Object.entries(PAPER_ISI_MAP).map(([k,v])=>({value:k,label:v.name}));

const JILID_OPTIONS = [{value:'soft',label:'Soft Cover'},{value:'hard',label:'Hard Cover'},{value:'spiral',label:'Spiral Kawat'}];

const PRINT_PAPER_OPTIONS = [{value:'A4',label:'A4'},{value:'A3',label:'A3'},{value:'A3+',label:'A3+'},{value:'LongCarton',label:'Long Carton'},{value:'Custom',label:'Custom'}];
const PRINT_PAPER_MAP = {A4:{w:297,h:210},A3:{w:420,h:297},'A3+':{w:480,h:320},LongCarton:{w:640,h:320}}; // NOTE: LongCarton stored as landscape w x h; PAPER_REF_SIZES uses portrait w x h

// [NEW] Opsi Custom (isi manual) ditambahkan ke SEMUA dropdown Bleed Area & Margin Kertas
const BLEED_OPTIONS = [{value:'0',label:'Tanpa Bleed'},{value:'2',label:'2mm'},{value:'3',label:'3mm'},{value:'5',label:'5mm'},{value:'custom',label:'Custom'}];

const PAPER_CUT_MARGIN_OPTIONS = [{value:'0',label:'Tanpa Margin'},{value:'5',label:'5mm'},{value:'10',label:'10mm'},{value:'15',label:'15mm'},{value:'20',label:'20mm'},{value:'custom',label:'Custom'}];

// [NEW] Nilai bleed/margin final — dukung opsi Custom (angka bebas diisi user).
// Dipakai di SEMUA tab (Cover Layout, Paper Cut, Kalkulator ISI, Shuffle Pages)
// agar perhitungan bleed/margin konsisten mengikuti pilihan dropdown.
function resolveBleed(s) { return s.bleed === 'custom' ? (Number(s.bleedCustom) || 0) : (Number(s.bleed) || 0); }
function resolveMargin(s) { return s.margin === 'custom' ? (Number(s.marginCustom) || 0) : (Number(s.margin) || 0); }
// [NEW] Label opsi Custom dinamis — menampilkan nilai yang sedang diisi (mis. "Custom — 4mm")
function bleedOptionsFor(s) {
  return BLEED_OPTIONS.map(o => o.value === 'custom'
    ? { value:'custom', label: (s.bleed === 'custom' && Number(s.bleedCustom) > 0) ? 'Custom — ' + s.bleedCustom + 'mm' : 'Custom (isi manual)' }
    : o);
}
function marginOptionsFor(s) {
  return PAPER_CUT_MARGIN_OPTIONS.map(o => o.value === 'custom'
    ? { value:'custom', label: (s.margin === 'custom' && Number(s.marginCustom) > 0) ? 'Custom — ' + s.marginCustom + 'mm' : 'Custom (isi manual)' }
    : o);
}

const HARDCOVER_EXTRA = 7;
const SAFE_ZONE = 5;
const SPIRAL_SIZES = [{number:5,maxSpine:5},{number:6,maxSpine:7},{number:7,maxSpine:8},{number:8,maxSpine:9},{number:9,maxSpine:11},{number:10,maxSpine:13},{number:12,maxSpine:16},{number:14,maxSpine:18},{number:16,maxSpine:21},{number:20,maxSpine:30}];
const SPIRAL_PITCH = 8.47;
const SPIRAL_HOLE_SIZE = 4;
const SPIRAL_MARGIN = 10;

const MAX_LEMBARAN = 9999;
const MAX_DIMENSION = 2000;

// ============================================================
// Premium SVG Icons
// ============================================================
// ============================================================
// New Tab Data Constants
// ============================================================
// Laminating options & pricing (per sisi — kalikan ×2 untuk cover depan+belakang)

// Paper Reference Database
const PAPER_REF_SIZES = [
  {name:'A0',w:841,h:1189,series:'A'},{name:'A1',w:594,h:841,series:'A'},{name:'A2',w:420,h:594,series:'A'},
  {name:'A3',w:297,h:420,series:'A'},{name:'A4',w:210,h:297,series:'A'},{name:'A5',w:148,h:210,series:'A'},
  {name:'A6',w:105,h:148,series:'A'},{name:'A7',w:74,h:105,series:'A'},{name:'A8',w:52,h:74,series:'A'},
  {name:'B0',w:1000,h:1414,series:'B'},{name:'B1',w:707,h:1000,series:'B'},{name:'B2',w:500,h:707,series:'B'},
  {name:'B3',w:353,h:500,series:'B'},{name:'B4',w:250,h:353,series:'B'},{name:'B5',w:176,h:250,series:'B'},
  {name:'B6',w:125,h:176,series:'B'},{name:'F4',w:210,h:330,series:'Lain'},{name:'Folio',w:216,h:330,series:'Lain'},
  {name:'Legal',w:216,h:356,series:'Lain'},{name:'Letter',w:216,h:279,series:'Lain'},{name:'Tabloid',w:279,h:432,series:'Lain'},
  {name:'Long Carton',w:320,h:640,series:'Lain'},{name:'A3+',w:320,h:480,series:'Lain'},
  {name:'Novel',w:130,h:190,series:'Lain'},
  // Seri R (Foto)
  {name:'2R',w:60,h:90,series:'R'},{name:'3R',w:89,h:127,series:'R'},{name:'4R',w:102,h:152,series:'R'},
  {name:'5R',w:127,h:178,series:'R'},{name:'6R',w:152,h:203,series:'R'},{name:'8R',w:203,h:254,series:'R'},
  {name:'10R',w:254,h:305,series:'R'},{name:'12R',w:305,h:381,series:'R'},{name:'14R',w:356,h:432,series:'R'},
  {name:'16R',w:406,h:508,series:'R'},{name:'20R',w:508,h:610,series:'R'},{name:'24R',w:610,h:762,series:'R'},
  {name:'30R',w:762,h:1016,series:'R'}
];
// Diturunkan dari PAPER_ISI_MAP (tidak duplikat)
const PAPER_REF_WEIGHTS = Object.values(PAPER_ISI_MAP).map(v=>({name:v.name,gsm:v.gsm,thickness:v.thickness,type:v.type}));

// [NEW] Global options untuk inline dropdown di Perbandingan Ukuran (Referensi Kertas).
// Perlu di-expose ke global scope karena dipanggil dari inline onclick.
// Format: [{value, label}, ...] sesuai kontrak openDropdownMenuAt.
const __PAPER_REF_OPTIONS__ = PAPER_REF_SIZES.map(p => ({value: p.name, label: p.name + ' (' + p.w + '×' + p.h + 'mm)'}));

const ICONS = {
  book: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  portrait: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/></svg>',
  paper: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
  sheets: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/></svg>',
  binding: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="2" width="18" height="20" rx="2"/><line x1="9" y1="2" x2="9" y2="22"/></svg>',
  printPaper: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
  landscape: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/></svg>',
  bleed: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" stroke-dasharray="4,3"/></svg>',
  margin: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><rect x="7" y="7" width="10" height="10" rx="1" stroke-dasharray="3,2"/></svg>',
  pcs: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="9" height="9" rx="1.5"/><rect x="13" y="2" width="9" height="9" rx="1.5"/><rect x="2" y="13" width="9" height="9" rx="1.5"/><rect x="13" y="13" width="9" height="9" rx="1.5"/></svg>',
  chacaRel: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M8 5V3"/><path d="M16 5V3"/><line x1="2" y1="10" x2="22" y2="10" stroke-dasharray="3,2"/></svg>',
  twoSides: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="8" height="16" rx="1"/><rect x="13" y="4" width="8" height="16" rx="1"/><line x1="12" y1="2" x2="12" y2="22" stroke-dasharray="2,2"/></svg>',
  jilid: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><circle cx="9" cy="11" r="0.5" fill="currentColor"/><circle cx="9" cy="14" r="0.5" fill="currentColor"/><circle cx="9" cy="17" r="0.5" fill="currentColor"/></svg>',
  // [NEW] Hitung Harga icons
  price: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
  qty: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h18v18H3z"/><path d="M9 9h6M9 15h6M12 6v12"/></svg>',
  cut: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>',
  ppn: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="9" y1="14" x2="15" y2="14"/></svg>',
  discount: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
  size: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 6H3M21 18H3M6 3v18M18 3v18"/></svg>'
};

// ============================================================
// Utility
// ============================================================
function fmtNum(n) { return parseFloat(n.toFixed(2)).toString(); }
let currentUnit = 'mm';
function fmtMm(mm) {
  if (currentUnit === 'cm') return fmtNum(mm/10) + 'cm';
  if (currentUnit === 'inch') return fmtNum(mm/25.4) + 'in';
  return fmtNum(mm) + 'mm';
}
function fmtSecondaryUnit(mm) {
  if (currentUnit === 'inch') return fmtNum(mm/10) + 'cm';
  if (currentUnit === 'cm') return fmtNum(mm) + 'mm';
  return fmtNum(mm/10) + 'cm';
}
function fmtDim(mm) { return fmtMm(mm); }
function fmtDimWxH(w, h) { return fmtMm(w) + '×' + fmtMm(h); }
function mmToDisplay(mm) {
  if (currentUnit === 'cm') return fmtNum(mm/10);
  if (currentUnit === 'inch') return fmtNum(mm/25.4);
  return fmtNum(mm);
}
function displayToMm(val) {
  if (currentUnit === 'cm') return val * 10;
  if (currentUnit === 'inch') return val * 25.4;
  return val;
}
function toggleUnit() {
  const units = ['mm','cm','inch'];
  const idx = units.indexOf(currentUnit);
  currentUnit = units[(idx+1) % units.length];
  const btns = document.querySelectorAll('.studio-dim-unit-btn');
  btns.forEach(btn => btn.textContent = currentUnit);
  // Update dimension inputs display values
  document.querySelectorAll('.studio-custom-dim').forEach(dim => {
    const inputs = dim.querySelectorAll('input[type="number"]');
    inputs.forEach(inp => {
      const raw = Number(inp.value);
      if (!isNaN(raw) && inp._mmValue !== undefined) {
        inp.value = mmToDisplay(inp._mmValue);
      }
    });
  });
  renderAll(true);
  showToast('Satuan: ' + currentUnit, 'info');
}
function formatWeight(g) { return g>=1000 ? {value:fmtNum(g/1000)+' kg',sub:g.toFixed(1)+' g'} : {value:g.toFixed(1)+' g',sub:fmtNum(g/1000)+' kg'}; }

// [Bug #21] Toast with max limit
const MAX_TOASTS = 3;
function showToast(msg, type='success') {
  const c = document.getElementById('toastContainer');
  // Limit toast count
  while (c.children.length >= MAX_TOASTS) { c.firstChild.remove(); }
  const t = document.createElement('div');
  t.className = 'studio-toast ' + type;
  t.setAttribute('role', 'alert');
  t.textContent = (type==='success'?'✓':type==='warning'?'⚠':'ℹ') + ' ' + msg;
  c.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateY(8px)'; t.style.transition = 'all 0.18s ease'; }, 1500);
  setTimeout(() => { if (t.parentNode) t.remove(); }, 1900);
}

function copyText(text, silent) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function() {
        if (!silent) showToast('Tersalin!', 'success');
      }).catch(function() { copyTextFallback(text, silent); });
    } else {
      copyTextFallback(text, silent);
    }
  } catch(e) {
    copyTextFallback(text, silent);
  }
}
function copyTextFallback(text, silent) {
  try {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    // Deliberate fallback: navigator.clipboard.writeText (above) may fail in non-HTTPS / older browsers
    document.execCommand('copy');
    document.body.removeChild(ta);
    if (!silent) showToast('Tersalin!', 'success');
  } catch(e2) {
    showToast('Gagal menyalin teks', 'warning');
  }
}

// ============================================================
// State
// ============================================================
let activeTab = 'cover-layout';
let isDark = false;

const coverState = {
  bookSize:'A4', position:'Portrait', customW:210, customH:297,
  // [NEW] 'Jumlah Lembaran' diganti 'Jumlah Halaman' + toggle 2 Sisi (On/Off)
  // jumlahHalaman = input user; lembaran efektif dihitung via getCoverLembaran()
  // default 400 hal × 2 Sisi = 200 lembar (identik dengan default lama)
  paperIsi:'hvs75', jumlahHalaman:400, duaSisi:true, jilid:'spiral',
  printPaper:'A3+', customPrintW:480, customPrintH:320, paperPosition:'Landscape', paperPositionAuto:true, bleed:'0', margin:'0', bleedCustom:3, marginCustom:5,
  coverIsi:'carton260'
};
let coverZoom = 0;
let coverSplitView = 'front'; // [Bug #9] Track which half is shown in split mode

const paperCutState = {
  customW:148, customH:210, position:'Portrait', chacaRel:false, jumlahPcs:200,
  printPaper:'A3+', customPrintW:480, customPrintH:320, paperPosition:'Landscape', paperPositionAuto:true,
  bleed:'0', margin:'0', bleedCustom:3, marginCustom:5
};
let paperCutZoom = 0;
let coverExportInfo = [];   // info lines for export
let paperCutExportInfo = []; // info lines for export

// New tab states
const kalkulatorIsiState = {
  jumlahHalaman:20, bookSize:'A4', position:'Portrait', customW:210, customH:297,
  duaSisi:true,
  printPaper:'A3+', customPrintW:480, customPrintH:320, paperPosition:'Landscape', paperPositionAuto:true,
  bleed:'0', margin:'0', bleedCustom:3, marginCustom:5,
  // [NEW] Untuk kartu Tebal Punggung & Spiral Number di mode ISI
  paperIsi:'hvs75',     // default HVS 75gsm
  jilid:'spiral'        // 'soft' | 'hard' | 'spiral' — default Spiral Kawat
};
let referensiSearchFilter = '';
let referensiCompareA = 'A4';
let referensiCompareB = 'A3';

// [NEW] Hitung Harga — kalkulator harga cetak
// ukuran: key dari BOOK_SIZES ('A4','A5','Custom',...)
// customW, customH: dimensi manual dalam mm (dipakai saat ukuran='Custom')
// qty: jumlah pcs/lembaran
// qtyUnit: 'pcs' | 'lembaran' — satuan untuk qty
// hargaPcs: harga satuan per pcs/lembaran (Rp)
// hargaUnit: 'pcs' | 'lembaran' — satuan untuk harga satuan
// jenisKertas: key dari PAPER_ISI_MAP (mis. 'hvs75', 'carton260', 'stikerVinil') atau 'lainnya'
// laminasi: 'none' | 'glossy' | 'doff' | 'tebal' — jenis laminasi
// laminasiHarga: harga laminasi PER SISI PER PCS (Rp) — default 3500/3000/5000
// laminasiDuaSisi: boolean — apakah laminasi diterapkan kedua sisi (disabled untuk 'tebal')
// potongMode: 'potong' | 'kisscut' | 'diecut' — mode potong
// potongHarga: harga potong PER PCS (Rp) — default 2000/5000/10000
// ppnMode: 'persen' | 'rp'  — satuan potongan PPN
// ppnValue: nilai potongan PPN
// diskonMode: 'persen' | 'rp'  — satuan diskon
// diskonValue: nilai diskon
const LAMINASI_DEFAULT_HARGA = { none:0, glossy:3500, doff:3000, tebal:5000 };
const POTONG_DEFAULT_HARGA = { potong:50000, kisscut:5000, diecut:10000 };
const hitungHargaState = {
  ukuran: 'A4',
  customW: 210,
  customH: 297,
  qty: 100,
  qtyUnit: 'pcs',
  hargaPcs: 500,
  hargaUnit: 'pcs',
  jenisKertas: 'hvs75',
  cetakDuaSisi: false,
  laminasi: 'none',
  laminasiHarga: 0,
  laminasiDuaSisi: false,
  potongMode: 'potong',
  potongHarga: 50000,
  hargaJual: 0,
  ppnMode: 'persen',
  ppnValue: 11,
  diskonMode: 'persen',
  diskonValue: 5
};

// [NEW] Options untuk Hitung Harga
const LAMINASI_OPTIONS = [
  {value:'none',label:'Tanpa Laminasi'},
  {value:'glossy',label:'Glossy'},
  {value:'doff',label:'Doff'},
  {value:'tebal',label:'Tebal'}
];
const POTONG_MODE_OPTIONS = [
  {value:'potong',label:'Potong'},
  {value:'kisscut',label:'Kiss Cut'},
  {value:'diecut',label:'Die Cut'}
];

// Per-preview interaction state (persists across re-renders)
// zoom: CSS transform scale (1 = auto-fit, >1 = zoomed in)
// autoFitScale: the auto-fit scale factor from renderAll (used for zoom bar → CSS scale conversion)
const _previewState = {
  cover: { zoom: 1, panX: 0, panY: 0, isDragging: false, startX: 0, startY: 0, autoFitScale: 1 },
  papercut: { zoom: 1, panX: 0, panY: 0, isDragging: false, startX: 0, startY: 0, autoFitScale: 1 }
};

// ============================================================
// Tab Switching [A11y #3]
// ============================================================
function handleTabKeydown(e) {
  const tabs = Array.from(document.querySelectorAll('.studio-tab'));
  const idx = tabs.indexOf(e.currentTarget);
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    e.preventDefault();
    const next = tabs[(idx + 1) % tabs.length];
    next.focus(); next.click();
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault();
    const prev = tabs[(idx - 1 + tabs.length) % tabs.length];
    prev.focus(); prev.click();
  }
}

function switchTab(tab) {
  activeTab = tab;
  if (tab !== 'cover-layout') coverSplitView = 'front';
  document.querySelectorAll('.studio-tab').forEach(t => {
    const isActive = t.dataset.tab === tab;
    t.classList.toggle('active', isActive);
    t.setAttribute('aria-selected', isActive ? 'true' : 'false');
    t.setAttribute('tabindex', isActive ? '0' : '-1');
  });
  document.querySelectorAll('.studio-tab').forEach(tab => {
    tab.removeEventListener('keydown', handleTabKeydown);
    tab.addEventListener('keydown', handleTabKeydown);
  });
  // Show/hide all tab panels
  const allPanels = ['cover-layout-studio','paper-cut-studio','kalkulator-isi-studio','shuffle-pages-studio','referensi-kertas-studio','hitung-harga-studio','img2pdf-studio','pdfcomp-studio','qrgen-studio','lubang-studio']; // [NEW v4.4] +4 tools
  allPanels.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('hidden', id !== tab + '-studio');
  });

  // Update header based on active tab
  const tabInfo = {
    'cover-layout': {title:'Cover Layout', subtitle:'Hitung layout cetak cover buku', icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="7" height="18" rx="1.5"/><line x1="11" y1="3" x2="13" y2="3"/><line x1="11" y1="21" x2="13" y2="21"/><rect x="15" y="3" width="7" height="18" rx="1.5"/></svg>'},
    'paper-cut': {title:'Paper Cut', subtitle:'Hitung layout potong & imposisi halaman', icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="9" height="9" rx="1.5"/><rect x="13" y="2" width="9" height="9" rx="1.5"/><rect x="2" y="13" width="9" height="9" rx="1.5"/><rect x="13" y="13" width="9" height="9" rx="1.5"/></svg>'},
    'kalkulator-isi': {title:'Perhitungan ISI', subtitle:'Hitung jumlah tanda & lembar cetak isi buku', icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>'},
    'shuffle-pages': {title:'Shuffle Pages', subtitle:'Acak urutan halaman PDF untuk layout N-up', icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>'},
    'referensi-kertas': {title:'Referensi Kertas', subtitle:'Database ukuran & berat kertas', icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>'},
    'hitung-harga': {title:'Hitung Harga', subtitle:'Kalkulator harga cetak, potong, PPN & diskon', icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>'},
    // [NEW v4.4] Tools
    'img2pdf': {title:'Convert File', subtitle:'Gambar jadi PDF, atau PDF jadi folder JPG (ZIP)', icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>'},
    'pdfcomp': {title:'PDF Flatten', subtitle:'Perkecil ukuran file PDF langsung di browser', icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="12" x2="12" y2="18"/><polyline points="9 15 12 18 15 15"/></svg>'},
    'qrgen': {title:'QR Generator', subtitle:'Buat QR code custom & unduh PNG resolusi tinggi', icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><line x1="14" y1="14" x2="14" y2="14.01"/><line x1="17.5" y1="14" x2="17.5" y2="14.01"/><line x1="21" y1="14" x2="21" y2="14.01"/><line x1="14" y1="17.5" x2="14" y2="17.51"/><line x1="17.5" y1="17.5" x2="17.5" y2="17.51"/><line x1="21" y1="17.5" x2="21" y2="17.51"/><line x1="14" y1="21" x2="14" y2="21.01"/><line x1="17.5" y1="21" x2="17.5" y2="21.01"/><line x1="21" y1="21" x2="21" y2="21.01"/></svg>'},
    'lubang': {title:'Preview Lubang', subtitle:'Posisi & jumlah lubang mata layang banner', icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="10" rx="1.5"/><circle cx="5" cy="7" r="1.1" fill="#fff" stroke="none"/><circle cx="12" cy="7" r="1.1" fill="#fff" stroke="none"/><circle cx="19" cy="7" r="1.1" fill="#fff" stroke="none"/><circle cx="5" cy="17" r="1.1" fill="#fff" stroke="none"/><circle cx="12" cy="17" r="1.1" fill="#fff" stroke="none"/><circle cx="19" cy="17" r="1.1" fill="#fff" stroke="none"/></svg>'}
  };
  const info = tabInfo[tab] || tabInfo['cover-layout'];
  document.getElementById('headerTitle').textContent = info.title;
  document.getElementById('headerSubtitle').textContent = info.subtitle;
  document.title = 'BlueBee Studio';
  document.getElementById('headerIcon').innerHTML = info.icon;

  // [Bug fix] Hide sidebar toggle on tabs without a left panel (e.g. Referensi)
  const sidebarBtn = document.getElementById('sidebarToggleBtn');
  if (sidebarBtn) {
    if (tab === 'referensi-kertas') {
      sidebarBtn.style.display = 'none';
      // Close sidebar if currently open
      const panels = document.querySelectorAll('.studio-left-panel');
      panels.forEach(p => p.classList.remove('sidebar-open'));
      const overlay = document.querySelector('.studio-sidebar-overlay');
      if (overlay) overlay.remove();
      sidebarBtn.classList.remove('sidebar-open-handle');
    } else {
      sidebarBtn.style.display = '';
      // [FIX v4.3] Drawer terbuka lalu pindah tab: pindahkan 'sidebar-open'
      // ke panel tab BARU supaya overlay blur + drawer tetap konsisten
      // (sebelumnya: blur tetap tampil tapi drawer milik tab lama yang hidden)
      const _spDrawerOpen = document.querySelector('.studio-left-panel.sidebar-open');
      if (_spDrawerOpen && window.innerWidth >= 1024) {
        // [FIX v4.3] Viewport desktop: drawer tidak dipakai -> tutup paksa
        // (sisa state drawer mobile saat jendela dilebarkan)
        _spDrawerOpen.classList.remove('sidebar-open');
        const _spOv = document.querySelector('.studio-sidebar-overlay');
        if (_spOv) _spOv.remove();
        sidebarBtn.classList.remove('sidebar-open-handle');
        sidebarBtn.classList.remove('fab-hidden'); // [FIX v4.3] pulihkan FAB
        sidebarBtn.title = 'Buka sidebar';
      } else if (_spDrawerOpen) {
        const _spDrawerMap = { 'cover-layout': 'coverLeftPanel', 'paper-cut': 'paperCutLeftPanel', 'kalkulator-isi': 'kalkulatorIsiLeftPanel', 'shuffle-pages': 'shufflePagesLeftPanel', 'hitung-harga': 'hitungHargaLeftPanel', 'img2pdf': 'img2pdfLeftPanel', 'pdfcomp': 'pdfcompLeftPanel', 'qrgen': 'qrgenLeftPanel', 'lubang': 'lubangLeftPanel' };
        const _spNewPanel = document.getElementById(_spDrawerMap[tab] || '');
        if (_spNewPanel && _spNewPanel !== _spDrawerOpen) {
          _spDrawerOpen.classList.remove('sidebar-open');
          _spNewPanel.classList.add('sidebar-open');
          _spNewPanel.scrollTop = 0; // mulai dari atas, isi drawer baru
        }
        sidebarBtn.classList.add('fab-hidden'); // drawer tetap terbuka -> FAB tetap disembunyikan
      } else {
        sidebarBtn.classList.remove('fab-hidden'); // [FIX v4.3] pulihkan FAB bila drawer sudah tertutup (mis. sisa dari tab Referensi)
      }
    }
  }

  renderAll();
}

function toggleTheme() {
  const btn = document.getElementById('themeBtn');
  const rect = btn.getBoundingClientRect();
  const ox = rect.left + rect.width / 2;
  const oy = rect.top + rect.height / 2;

  const willBeDark = !isDark;
  const pxX = (ox / window.innerWidth * 100).toFixed(2) + '%';
  const pxY = (oy / window.innerHeight * 100).toFixed(2) + '%';

  // Calculate max radius to cover viewport from button position
  const maxR = Math.sqrt(
    Math.pow(Math.max(ox, window.innerWidth - ox), 2) +
    Math.pow(Math.max(oy, window.innerHeight - oy), 2)
  );

  // Apply new theme immediately (hidden behind old theme overlay)
  isDark = willBeDark;
  document.documentElement.classList.toggle('dark', isDark);
  localStorage.setItem('studio-theme', isDark ? 'dark' : 'light');
  updateThemeIcon();
  // Re-render SVG previews immediately with updated theme colors
  renderAll();

  // Old theme overlay — clipped to circle that will shrink
  const bg = document.createElement('div');
  bg.className = 'studio-circle-bg';
  bg.style.clipPath = 'circle(' + maxR + 'px at ' + pxX + ' ' + pxY + ')';
  bg.style.background = willBeDark ? '#F6F8FB' : '#0B1220';
  document.body.appendChild(bg);

  // Glow ring at the boundary edge
  const ring = document.createElement('div');
  ring.className = 'studio-circle-ring';
  const initSize = maxR * 2;
  ring.style.width = initSize + 'px';
  ring.style.height = initSize + 'px';
  ring.style.left = ox + 'px';
  ring.style.top = oy + 'px';
  ring.style.transform = 'translate(-50%, -50%)';
  ring.style.opacity = '0';
  document.body.appendChild(ring);

  const duration = 400;
  const start = performance.now();

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animate(now) {
    const t = Math.min((now - start) / duration, 1);
    const ease = easeInOutCubic(t);

    // Shrink circle — old theme area gets smaller
    const radius = maxR * (1 - ease);
    bg.style.clipPath = 'circle(' + radius.toFixed(1) + 'px at ' + pxX + ' ' + pxY + ')';

    // Ring follows the shrinking edge
    const ringSize = radius * 2;
    ring.style.width = Math.max(0, ringSize).toFixed(1) + 'px';
    ring.style.height = Math.max(0, ringSize).toFixed(1) + 'px';

    // Ring opacity: quick fade in → hold → fade out at end
    if (t < 0.05) {
      ring.style.opacity = (t / 0.05).toFixed(3);
    } else if (t < 0.7) {
      ring.style.opacity = '1';
    } else {
      ring.style.opacity = (1 - (t - 0.7) / 0.3).toFixed(3);
    }

    if (t < 1) {
      requestAnimationFrame(animate);
    } else {
      bg.remove();
      ring.remove();
    }
  }

  requestAnimationFrame(animate);
}

function updateThemeIcon() {
  document.getElementById('themeBtn').innerHTML = isDark
    ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
    : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
}

// ============================================================
// Dropdown helper [A11y #1, #2]
// ============================================================

// [NEW] Reusable helper: open a dropdown menu anchored to any trigger element.
// Pakai logic yang sama dengan createDropdown (termasuk flash-fix di pojok kiri atas),
// tapi tidak perlu attach ke container — cocok untuk button inline di template literal.
//
// options: [{value, label}, ...]
// currentValue: nilai yang sedang aktif (untuk highlight 'active')
// onChange: callback(value) — dipanggil saat user pilih item
// ariaLabel: optional, untuk a11y
function openDropdownMenuAt(trigger, options, currentValue, onChange, ariaLabel) {
  // Toggle close jika menu yang terbuka milik trigger ini
  const existingMenu = document.querySelector('.studio-dropdown-menu');
  if (existingMenu && existingMenu._trigger === trigger) {
    trigger.setAttribute('aria-expanded', 'false');
    existingMenu.classList.add('closing');
    const target = existingMenu;
    setTimeout(() => { if (target.parentNode) target.remove(); }, 180);
    return;
  }
  closeAllDropdowns();
  const menu = document.createElement('div');
  menu.className = 'studio-dropdown-menu';
  menu._trigger = trigger;
  menu.setAttribute('role', 'listbox');
  if (ariaLabel) menu.setAttribute('aria-label', ariaLabel);
  options.forEach((opt, i) => {
    const item = document.createElement('button');
    item.type = 'button';
    item.className = 'studio-dropdown-item' + (opt.value === currentValue ? ' active' : '');
    item.textContent = opt.label;
    item.setAttribute('role', 'option');
    item.setAttribute('aria-selected', opt.value === currentValue ? 'true' : 'false');
    item.addEventListener('click', (ev) => {
      ev.stopPropagation();
      onChange(opt.value);
      menu.remove();
      trigger.setAttribute('aria-expanded', 'false');
      renderAll();
    });
    menu.appendChild(item);
  });
  // [Flash fix] Sama dengan createDropdown — disable animation, posisi off-screen,
  // write final coords, reflow, baru enable animation.
  document.body.appendChild(menu);
  const triggerRect = trigger.getBoundingClientRect();
  const triggerWidth = triggerRect.width;
  const viewportH = window.innerHeight;
  const viewportW = window.innerWidth;
  menu.style.animation = 'none';
  menu.style.visibility = 'hidden';
  menu.style.left = '-9999px';
  menu.style.top = '0';
  menu.style.width = triggerWidth + 'px';
  menu.style.minWidth = '';
  const menuH = menu.offsetHeight;
  let top = triggerRect.bottom + 6;
  if (top + menuH > viewportH - 10) top = triggerRect.top - menuH - 6;
  let left = triggerRect.left;
  if (left + triggerWidth > viewportW - 10) left = viewportW - triggerWidth - 10;
  menu.style.top = top + 'px';
  menu.style.left = Math.max(10, left) + 'px';
  menu.style.visibility = '';
  void menu.offsetWidth;
  menu.style.animation = '';
  trigger.setAttribute('aria-expanded', 'true');
  // Focus first item
  const firstItem = menu.querySelector('.studio-dropdown-item');
  if (firstItem) firstItem.focus();
  return menu;
}

function closeAllDropdowns() {
  document.querySelectorAll('.studio-dropdown-menu').forEach(m => {
    // Reset aria-expanded on the trigger that opened this menu
    if (m._trigger) {
      m._trigger.setAttribute('aria-expanded', 'false');
      m._trigger.setAttribute('aria-activedescendant', '');
      const arrow = m._trigger.querySelector('.studio-dropdown-arrow');
      if (arrow) arrow.classList.remove('open');
    }
    // Premium close animation: fade-out then remove
    if (!m.classList.contains('closing')) {
      m.classList.add('closing');
      const target = m;
      setTimeout(() => { if (target.parentNode) target.remove(); }, 180);
    }
  });
  // Fallback: ensure any orphan arrows are cleared
  document.querySelectorAll('.studio-dropdown-arrow.open').forEach(a => a.classList.remove('open'));
}
window.addEventListener('resize', closeAllDropdowns);

// [A11y] Keyboard accessibility for result cards - delegated
document.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('studio-result-card')) {
    e.preventDefault(); e.target.click();
  }
});
document.addEventListener('click', closeAllDropdowns);

// [A11y #2] Keyboard handler for dropdown menus
function handleDropdownKeydown(e, menu, trigger, options, value, onChange) {
  const items = menu.querySelectorAll('.studio-dropdown-item');
  if (!items.length) return;
  const focused = menu.querySelector('.studio-dropdown-item:focus');
  let idx = Array.from(items).indexOf(focused);

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    idx = idx < items.length - 1 ? idx + 1 : 0;
    items[idx].focus();
    trigger.setAttribute('aria-activedescendant', items[idx].id);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    idx = idx > 0 ? idx - 1 : items.length - 1;
    items[idx].focus();
    trigger.setAttribute('aria-activedescendant', items[idx].id);
  } else if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    if (focused) focused.click();
  } else if (e.key === 'Escape') {
    e.preventDefault();
    menu.remove();
    trigger.querySelector('.studio-dropdown-arrow').classList.remove('open');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-activedescendant', '');
    trigger.focus();
  }
}

function createDropdown(containerId, label, options, value, onChange, iconSvg) {
  const container = document.getElementById(containerId);
  const group = document.createElement('div');
  group.className = 'studio-form-group';

  // [FIX SCROLL] ID trigger deterministik (container + label + urutan) agar setelah
  // panel di-render ulang, fokus bisa dikembalikan ke trigger yang sama tanpa scroll.
  const _ddBase = 'dd_' + containerId + '_' + (label ? label.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '') : Math.random().toString(36).slice(2, 10));
  let triggerId = _ddBase;
  let _ddN = 1;
  while (document.getElementById(triggerId)) { triggerId = _ddBase + '__' + (++_ddN); }
  // [NEW] Skip label jika string kosong (untuk inline dropdown di grid 2 kolom)
  if (label) {
    const lbl = document.createElement('label');
    lbl.className = 'studio-form-label';
    lbl.htmlFor = triggerId;
    if (iconSvg) { const span = document.createElement('span'); span.className = 'studio-form-icon'; span.innerHTML = iconSvg; lbl.appendChild(span); }
    lbl.appendChild(document.createTextNode(label));
    group.appendChild(lbl);
  }

  const wrapper = document.createElement('div');
  wrapper.className = 'studio-dropdown-wrapper';

  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.id = triggerId;
  trigger.className = 'studio-dropdown-trigger';
  // [A11y #1] ARIA attributes
  trigger.setAttribute('aria-haspopup', 'listbox');
  trigger.setAttribute('aria-expanded', 'false');
  trigger.setAttribute('aria-activedescendant', '');
  const selected = options.find(o => o.value === value);
  trigger.innerHTML = `<span>${selected ? selected.label : 'Pilih...'}</span><svg class="studio-dropdown-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const existingMenu = document.querySelector('.studio-dropdown-menu');
    // [Bug fix] Only toggle-close if the open menu belongs to THIS trigger.
    // Otherwise, close all and open this one (previously: clicking a different
    // dropdown required two clicks).
    if (existingMenu && existingMenu._trigger === trigger) {
      // Premium close: animate then remove
      trigger.setAttribute('aria-expanded', 'false');
      trigger.setAttribute('aria-activedescendant', '');
      trigger.querySelector('.studio-dropdown-arrow').classList.remove('open');
      existingMenu.classList.add('closing');
      const target = existingMenu;
      setTimeout(() => { if (target.parentNode) target.remove(); }, 180);
      return;
    }
    closeAllDropdowns();
    const menu = document.createElement('div');
    menu.className = 'studio-dropdown-menu';
    menu._trigger = trigger; // track owner for toggle logic
    // [A11y #1] ARIA on menu
    menu.setAttribute('role', 'listbox');
    menu.setAttribute('aria-label', label);
    options.forEach((opt, i) => {
      const item = document.createElement('button');
      item.type = 'button';
      item.id = triggerId + '_opt' + i;
      item.className = 'studio-dropdown-item' + (opt.value === value ? ' active' : '');
      item.textContent = opt.label;
      item.setAttribute('role', 'option');
      item.setAttribute('aria-selected', opt.value === value ? 'true' : 'false');
      if (i === 0) item.setAttribute('tabindex', '0'); else item.setAttribute('tabindex', '-1');
      item.addEventListener('click', (ev) => {
        ev.stopPropagation();
        // [FIX SCROLL] Blur item menu SEBELUM dihapus — menghapus elemen yang
        // sedang fokus membuat Chrome melompat scroll ke atas halaman.
        if (document.activeElement && menu.contains(document.activeElement)) document.activeElement.blur();
        onChange(opt.value);
        menu.remove();
        trigger.querySelector('.studio-dropdown-arrow').classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
        trigger.setAttribute('aria-activedescendant', '');
        renderAll();
        // [FIX SCROLL] Kembalikan fokus ke trigger barunya (panel kiri di-render ulang)
        // dengan preventScroll agar posisi scroll tidak berpindah.
        const newTrigger = document.getElementById(triggerId);
        if (newTrigger) newTrigger.focus({ preventScroll: true });
      });
      menu.appendChild(item);
    });
    // Append to body to avoid clipping by scrollable parents
    document.body.appendChild(menu);
    const triggerRect = trigger.getBoundingClientRect();
    const triggerWidth = triggerRect.width;
    const viewportH = window.innerHeight;
    const viewportW = window.innerWidth;
    // Measure menu height after appending (width must be set first so the
    // height reflects the wrapped layout, not the unbounded shrink-to-fit).
    //
    // [BUG FIX] Prevent flash at top-left corner:
    // The menu has `animation: dropdown-in` defined in CSS, which starts
    // running the moment the element is appended to the DOM. During the
    // measurement phase we set `left:0; top:0` and toggle `visibility`, but
    // the animation still progresses and the element briefly paints at the
    // top-left of the viewport before its final position is applied.
    //
    // Fix: disable animation during measurement, then re-enable it AFTER
    // the final coordinates are written. Also position the element off-screen
    // (left:-9999px) while measuring so no paint occurs in the visible area.
    menu.style.animation = 'none';
    menu.style.visibility = 'hidden';
    menu.style.left = '-9999px';
    menu.style.top = '0';
    // Set the menu width to match the trigger width exactly. Previously the
    // menu used `width: auto` (shrink-to-fit) with `min-width: triggerWidth`,
    // but because the items have `width: 100%` the shrink-to-fit resolved
    // against the containing block (the viewport for fixed elements), making
    // the menu span almost the entire viewport. Pinning width to the trigger
    // keeps the menu aligned with the sidebar; long labels are truncated with
    // ellipsis via the CSS on `.studio-dropdown-item`.
    menu.style.width = triggerWidth + 'px';
    menu.style.minWidth = '';
    const menuH = menu.offsetHeight;
    // Position below trigger; flip above if no room
    let top = triggerRect.bottom + 6;
    if (top + menuH > viewportH - 10) {
      top = triggerRect.top - menuH - 6;
    }
    let left = triggerRect.left;
    if (left + triggerWidth > viewportW - 10) {
      left = viewportW - triggerWidth - 10;
    }
    // [BUG FIX] Write final coordinates FIRST, then un-hide and re-enable
    // animation in a single reflow. This guarantees the element never paints
    // at the placeholder position.
    menu.style.top = top + 'px';
    menu.style.left = Math.max(10, left) + 'px';
    menu.style.visibility = '';
    // Force a reflow so the browser commits the new position before the
    // animation is re-enabled; otherwise some engines batch the style change
    // and still run the animation from the off-screen position.
    void menu.offsetWidth;
    menu.style.animation = '';
    trigger.querySelector('.studio-dropdown-arrow').classList.add('open');
    trigger.setAttribute('aria-expanded', 'true');
    // Focus first item & update aria-activedescendant
    const firstItem = menu.querySelector('.studio-dropdown-item');
    if (firstItem) {
      firstItem.focus();
      trigger.setAttribute('aria-activedescendant', firstItem.id);
    }
    // [A11y #2] Keyboard navigation
    menu.addEventListener('keydown', (e) => handleDropdownKeydown(e, menu, trigger, options, value, onChange));
  });
  // [A11y #2] Open dropdown with keyboard
  trigger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      trigger.click();
    }
  });

  wrapper.appendChild(trigger);
  group.appendChild(wrapper);
  container.appendChild(group);
}

// [Bug #8, #17] Input validation with min/max
function createNumberInput(containerId, label, value, onChange, min=0, iconSvg, max=undefined, step=1) {
  const container = document.getElementById(containerId);
  const group = document.createElement('div');
  group.className = 'studio-form-group';

  const inputId = 'num_' + Math.random().toString(36).slice(2,10);
  const lbl = document.createElement('label');
  lbl.className = 'studio-form-label';
  lbl.htmlFor = inputId;
  if (iconSvg) { const span = document.createElement('span'); span.className = 'studio-form-icon'; span.innerHTML = iconSvg; lbl.appendChild(span); }
  lbl.appendChild(document.createTextNode(label));
  group.appendChild(lbl);

  const spinner = document.createElement('div');
  spinner.className = 'studio-number-spinner';

  const minusBtn = document.createElement('button');
  minusBtn.className = 'studio-spinner-btn';
  minusBtn.type = 'button';
  minusBtn.textContent = '−';

  const input = document.createElement('input');
  input.id = inputId;
  input.type = 'number';
  input.className = 'studio-number-input';
  input.value = value;
  input.min = min;
  input.step = step;
  if (max !== undefined) input.max = max;

  const plusBtn = document.createElement('button');
  plusBtn.className = 'studio-spinner-btn';
  plusBtn.type = 'button';
  plusBtn.textContent = '+';

  const errorDiv = document.createElement('div');
  errorDiv.className = 'studio-input-error-msg';
  errorDiv.style.display = 'none';

  let isStepping = false; // flag to prevent duplicate applyValue from change event

  function applyValue() {
    if (isStepping) return; // spinner already handled the update
    let raw = Number(input.value);
    let invalid = false;
    let errorMsg = '';
    if (input.value.trim() === '' || isNaN(raw)) {
      invalid = true;
      errorMsg = 'Wajib diisi angka';
      raw = min;
    } else if (raw < min) {
      invalid = true;
      errorMsg = 'Minimum ' + min;
      raw = min;
    } else if (max !== undefined && raw > max) {
      invalid = true;
      errorMsg = 'Maximum ' + max;
      raw = max;
    }
    if (invalid) {
      input.classList.add('invalid');
      errorDiv.textContent = errorMsg;
      errorDiv.style.display = 'block';
    } else {
      input.classList.remove('invalid');
      errorDiv.style.display = 'none';
    }
    input.value = raw;
    onChange(raw);
    renderAll(true); // skip left panel to preserve spinner DOM
  }

  function stepDown() {
    let v = Number(input.value);
    if (isNaN(v)) v = min;
    v = Math.max(min, v - step);
    input.value = v;
    input.classList.remove('invalid');
    errorDiv.style.display = 'none';
    onChange(v);
    renderAll(true); // skip left panel to preserve spinner DOM
  }
  function stepUp() {
    let v = Number(input.value);
    if (isNaN(v)) v = min;
    v = v + step;
    if (max !== undefined) v = Math.min(max, v);
    input.value = v;
    input.classList.remove('invalid');
    errorDiv.style.display = 'none';
    onChange(v);
    renderAll(true); // skip left panel to preserve spinner DOM
  }

  // Long-press support for continuous increment/decrement
  function addLongPress(btnEl, actionFn) {
    let pressTimer = null;
    let pressInterval = null;
    const startPress = (e) => {
      e.preventDefault();
      isStepping = true;
      actionFn();
      pressTimer = setTimeout(() => {
        pressInterval = setInterval(actionFn, 80);
      }, 400);
    };
    const endPress = () => {
      clearTimeout(pressTimer);
      clearInterval(pressInterval);
      pressTimer = null;
      pressInterval = null;
      // Reset stepping flag after a short delay to allow change event to fire and be ignored
      setTimeout(() => { isStepping = false; }, 100);
    };
    btnEl.addEventListener('mousedown', startPress);
    btnEl.addEventListener('mouseup', endPress);
    btnEl.addEventListener('mouseleave', endPress);
    btnEl.addEventListener('touchstart', startPress, {passive: false});
    btnEl.addEventListener('touchend', endPress);
    btnEl.addEventListener('touchcancel', endPress);
  }

  addLongPress(minusBtn, stepDown);
  addLongPress(plusBtn, stepUp);

  // Only apply on Enter key or blur (change event)
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); applyValue(); input.blur(); }
  });
  input.addEventListener('change', applyValue);

  spinner.appendChild(minusBtn);
  spinner.appendChild(input);
  spinner.appendChild(plusBtn);
  group.appendChild(spinner);
  group.appendChild(errorDiv);
  container.appendChild(group);
  // [Fix] Validate initial value (e.g. corrupted localStorage)
  applyValue();
}

// [Bug #8] Dimension input validation
function createDimensionInput(containerId, label, w, h, onChangeW, onChangeH, iconSvg) {
  const container = document.getElementById(containerId);
  const group = document.createElement('div');
  group.className = 'studio-form-group';

  if (label) {
    const lbl = document.createElement('label');
    lbl.className = 'studio-form-label';
    if (iconSvg) { const span = document.createElement('span'); span.className = 'studio-form-icon'; span.innerHTML = iconSvg; lbl.appendChild(span); }
    lbl.appendChild(document.createTextNode(label));
    group.appendChild(lbl);
  }

  const dim = document.createElement('div');
  dim.className = 'studio-custom-dim';

  function makeApply(inputEl, onChangeFn) {
    return function() {
      let raw = Number(inputEl.value);
      let invalid = false;
      let errorMsg = '';
      if (inputEl.value.trim() === '' || isNaN(raw)) {
        invalid = true; errorMsg = 'Wajib diisi angka'; raw = 1;
      } else if (raw < 1) {
        invalid = true; errorMsg = 'Minimum 1'; raw = 1;
      } else if (raw > MAX_DIMENSION) {
        invalid = true; errorMsg = 'Maximum ' + MAX_DIMENSION; raw = MAX_DIMENSION;
      }
      // Show/hide error on the dimension wrapper
      const dimWrapper = inputEl.closest('.studio-custom-dim');
      let errEl = dimWrapper ? dimWrapper.parentNode.querySelector(':scope > .studio-input-error-msg') : null;
      if (invalid) {
        inputEl.classList.add('invalid');
        if (dimWrapper) dimWrapper.classList.add('invalid');
        if (!errEl) { errEl = document.createElement('div'); errEl.className = 'studio-input-error-msg'; dimWrapper.parentNode.insertBefore(errEl, dimWrapper.nextSibling); }
        errEl.textContent = errorMsg; errEl.style.display = 'block';
      } else {
        inputEl.classList.remove('invalid');
        if (dimWrapper) dimWrapper.classList.remove('invalid');
        if (errEl) errEl.style.display = 'none';
      }
      inputEl.value = raw;
      onChangeFn(raw);
      renderAll(true); // skip left panel to preserve input DOM
    };
  }

  const fieldW = document.createElement('div');
  fieldW.className = 'studio-custom-dim-field';
  const dimIdW = 'dimW_' + Math.random().toString(36).slice(2,8);
  const lblW = document.createElement('label');
  lblW.className = 'studio-form-label-sm';
  lblW.htmlFor = dimIdW;
  lblW.textContent = 'Lebar';
  const inputW = document.createElement('input');
  inputW.id = dimIdW;
  inputW.type = 'number'; inputW.className = 'studio-number-input sm'; inputW.value = mmToDisplay(w); inputW.min = 0.01; inputW.max = MAX_DIMENSION; inputW.step = 'any'; inputW._mmValue = w;
  const applyW = makeApply(inputW, (v) => { const mmVal = displayToMm(v); inputW._mmValue = mmVal; onChangeW(mmVal); });
  inputW.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); applyW(); inputW.blur(); } });
  inputW.addEventListener('change', applyW);
  fieldW.appendChild(lblW); fieldW.appendChild(inputW);

  const sep = document.createElement('span');
  sep.className = 'studio-dim-separator';
  sep.textContent = '×';

  const fieldH = document.createElement('div');
  fieldH.className = 'studio-custom-dim-field';
  const dimIdH = 'dimH_' + Math.random().toString(36).slice(2,8);
  const lblH = document.createElement('label');
  lblH.className = 'studio-form-label-sm';
  lblH.htmlFor = dimIdH;
  lblH.textContent = 'Tinggi';
  const inputH = document.createElement('input');
  inputH.id = dimIdH;
  inputH.type = 'number'; inputH.className = 'studio-number-input sm'; inputH.value = mmToDisplay(h); inputH.min = 0.01; inputH.max = MAX_DIMENSION; inputH.step = 'any'; inputH._mmValue = h;
  const applyH = makeApply(inputH, (v) => { const mmVal = displayToMm(v); inputH._mmValue = mmVal; onChangeH(mmVal); });
  inputH.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); applyH(); inputH.blur(); } });
  inputH.addEventListener('change', applyH);
  fieldH.appendChild(lblH); fieldH.appendChild(inputH);

  const unit = document.createElement('button');
  unit.type = 'button';
  unit.className = 'studio-dim-unit-btn';
  unit.title = 'Ganti satuan';
  unit.setAttribute('aria-label', 'Ganti satuan mm/cm/inch');
  unit.textContent = currentUnit;
  unit.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleUnit();
  });

  dim.appendChild(fieldW); dim.appendChild(sep); dim.appendChild(fieldH); dim.appendChild(unit);
  group.appendChild(dim);
  container.appendChild(group);
}

function createSectionTitle(containerId, text) {
  const container = document.getElementById(containerId);
  const div = document.createElement('div');
  div.className = 'studio-section-title';
  div.textContent = text;
  container.appendChild(div);
}

function createToggle(containerId, label, checked, onChange, iconSvg, hintText) {
  const container = document.getElementById(containerId);
  const group = document.createElement('div');
  group.className = 'studio-toggle-group';

  const cbId = 'toggle_' + Math.random().toString(36).slice(2,10);
  const lbl = document.createElement('label');
  lbl.className = 'studio-toggle-label';
  lbl.htmlFor = cbId;
  if (iconSvg) { const span = document.createElement('span'); span.className = 'studio-form-icon'; span.innerHTML = iconSvg; lbl.appendChild(span); }
  lbl.appendChild(document.createTextNode(label));
  group.appendChild(lbl);

  const row = document.createElement('div');
  row.className = 'studio-toggle-row';

  const text = document.createElement('span');
  text.className = 'studio-toggle-text' + (checked ? '' : ' off');
  text.textContent = checked ? 'ON' : 'OFF';
  row.appendChild(text);

  const switchWrap = document.createElement('label');
  switchWrap.className = 'studio-toggle-switch';
  switchWrap.style.cursor = 'pointer';

  const input = document.createElement('input');
  input.id = cbId;
  input.type = 'checkbox';
  input.checked = checked;
  input.setAttribute('role', 'switch');
  input.setAttribute('aria-checked', checked ? 'true' : 'false');

  const slider = document.createElement('span');
  slider.className = 'studio-toggle-slider';

  switchWrap.appendChild(input);
  switchWrap.appendChild(slider);
  row.appendChild(switchWrap);

  input.addEventListener('change', () => {
    const newVal = input.checked;
    text.textContent = newVal ? 'ON' : 'OFF';
    text.className = 'studio-toggle-text' + (newVal ? '' : ' off');
    input.setAttribute('aria-checked', newVal ? 'true' : 'false');
    onChange(newVal);
    renderAll();
  });

  group.appendChild(row);

  if (hintText) {
    const hint = document.createElement('div');
    hint.className = 'studio-toggle-hint';
    hint.textContent = hintText;
    group.appendChild(hint);
  }

  container.appendChild(group);
}

// ============================================================
// Cover Layout Calculations
// ============================================================
function getBookDim(s) {
  if (s.bookSize === 'Custom') return {w:s.customW, h:s.customH};
  const base = BOOK_SIZE_MAP[s.bookSize];
  if (!base) return {w:148,h:210};
  return s.position === 'Landscape' ? {w:base.h, h:base.w} : {w:base.w, h:base.h};
}

function getPrintPaperDim(s) {
  /* [FIX v2.0.1 / BUG M2] kertas Custom kini mengikuti konvensi kertas preset:
     nilai Lebar/Tinggi yang diisi = basis Landscape, dan Posisi Kertas Portrait
     menukar keduanya. Sebelumnya Custom tidak pernah di-swap sehingga saat Auto
     memilih Portrait, fitsOnPaper/preview tetap menghitung memakai orientasi
     Landscape -> muncul warning "melebihi Kertas Print" palsu & aspek preview salah. */
  if (s.printPaper === 'Custom') {
    const cw = Number(s.customPrintW) || 0, ch = Number(s.customPrintH) || 0;
    return s.paperPosition === 'Portrait' ? {w:ch, h:cw} : {w:cw, h:ch};
  }
  const base = PRINT_PAPER_MAP[s.printPaper];
  if (!base) return {w:297,h:210};
  return s.paperPosition === 'Landscape' ? {w:base.w, h:base.h} : {w:base.h, h:base.w};
}

function calcSpineThickness(lembaran, paperIsi) {
  const info = PAPER_ISI_MAP[paperIsi];
  return info ? lembaran * info.thickness : 0;
}

function calcTotalBentang(w, jilid, spine) {
  const hc = jilid === 'hard' ? HARDCOVER_EXTRA : 0;
  return w + hc + spine + hc + w;
}

// [NEW] Konversi 'Jumlah Halaman' + toggle 2 Sisi → jumlah lembar isi efektif
// Konvensi sama dengan Kalkulator ISI (pagesPerSheet): ON = 1 lembar untuk 2 halaman,
// OFF = 1 lembar untuk 1 halaman. Dipakai untuk Tebal Punggung & Estimasi Berat.
function getCoverLembaran(s) {
  const hal = Math.max(1, Number(s.jumlahHalaman) || 1);
  const pagesPerSheet = s.duaSisi ? 2 : 1;
  return Math.ceil(hal / pagesPerSheet);
}

// [Bug #1] Fixed: removed *2 from isiW calculation
// [Bug #2] Fixed: use cover paper GSM from coverIsi state (e.g. Art Carton) instead of hardcoded 260
function calcWeight(lembaran, paperIsi, w, h, jilid, coverIsi) {
  const info = PAPER_ISI_MAP[paperIsi];
  if (!info) return 0;
  const isiW = (w*h*info.gsm*lembaran)/1000000;
  // Use cover paper GSM from state if available, otherwise fallback to 260gsm
  const coverInfo = coverIsi ? PAPER_ISI_MAP[coverIsi] : null;
  const coverGsm = coverInfo ? coverInfo.gsm : 260;
  const spine = calcSpineThickness(lembaran, paperIsi);
  const bentang = calcTotalBentang(w, jilid, spine);
  const coverW = (bentang*h*coverGsm)/1000000;
  return isiW + coverW;
}

// Spiral: returns {number, outOfRange}
function getSpiralInfo(spine) {
  for (const s of SPIRAL_SIZES) { if (spine <= s.maxSpine) return {number:s.number, outOfRange:false}; }
  return {number:null, outOfRange:true};
}
// [Bug #16] Guard for very small book heights
function getSpiralHoleCount(h) {
  const usable = h - 2*SPIRAL_MARGIN;
  if (usable <= 0) return 0;
  return Math.max(2, Math.floor(usable/SPIRAL_PITCH)+1);
}

function determineDisplayMode(totalBentang, h, ppW, ppH, jilid, bleed, margin) {
  const m = margin || 0;
  if (jilid === 'spiral') return 'spiral';
  if (totalBentang + bleed*2 <= ppW - m*2 && h + bleed*2 <= ppH - m*2) return 'full';
  return 'split';
}

// [Bug #18] Fixed tie-breaking logic
function autoCoverPaperPos(totalBentang, w, h, bleed, pp, jilid, margin) {
  const m = margin || 0;
  const hc = jilid === 'hard' ? HARDCOVER_EXTRA : 0;
  // 1) Check if full spread fits
  const fullW = totalBentang + bleed*2, fullH = h + bleed*2;
  const fitL_full = fullW <= pp.w - m*2 && fullH <= pp.h - m*2;
  const fitP_full = fullW <= pp.h - m*2 && fullH <= pp.w - m*2;
  if (fitL_full && !fitP_full) return 'Landscape';
  if (fitP_full && !fitL_full) return 'Portrait';
  if (fitL_full && fitP_full) {
    // Both fit — prefer orientation with more remaining area
    const remainL = (pp.w - m*2 - fullW) * (pp.h - m*2 - fullH);
    const remainP = (pp.h - m*2 - fullW) * (pp.w - m*2 - fullH);
    return remainL >= remainP ? 'Landscape' : 'Portrait';
  }
  // 2) Full spread doesn't fit — check split layout
  const spine = totalBentang - w*2 - hc*2;
  const splitW = w + spine + hc + bleed*2, splitH = h + bleed*2;
  const fitL_split = splitW <= pp.w - m*2 && splitH <= pp.h - m*2;
  const fitP_split = splitW <= pp.h - m*2 && splitH <= pp.w - m*2;
  if (fitL_split && !fitP_split) return 'Landscape';
  if (fitP_split && !fitL_split) return 'Portrait';
  if (fitL_split && fitP_split) {
    const remainL = (pp.w - m*2 - splitW) * (pp.h - m*2 - splitH);
    const remainP = (pp.h - m*2 - splitW) * (pp.w - m*2 - splitH);
    return remainL >= remainP ? 'Landscape' : 'Portrait';
  }
  // 3) Neither fits — default to Landscape
  return 'Landscape';
}

// ============================================================
// Paper Cut Calculations
// ============================================================
function getPageDim(s) {
  return s.position === 'Landscape' ? {w:s.customH, h:s.customW} : {w:s.customW, h:s.customH};
}

function getPaperCutPrintDim(s) {
  /* [FIX v2.0.1 / BUG M2] sama seperti getPrintPaperDim — Custom ikut di-swap saat Portrait */
  if (s.printPaper === 'Custom') {
    const cw = Number(s.customPrintW) || 0, ch = Number(s.customPrintH) || 0;
    return s.paperPosition === 'Portrait' ? {w:ch, h:cw} : {w:cw, h:ch};
  }
  const base = PRINT_PAPER_MAP[s.printPaper];
  if (!base) return {w:480,h:320};
  return s.paperPosition === 'Landscape' ? {w:base.w, h:base.h} : {w:base.h, h:base.w};
}

function getMarginValue(s) { return resolveMargin(s); }

function calcCutLayout(pageDim, ppDim, bleed, margin, totalPcs) {
  const pageW = pageDim.w + bleed*2, pageH = pageDim.h + bleed*2;
  const usableW = ppDim.w - margin*2, usableH = ppDim.h - margin*2;
  const cols = Math.max(0, Math.floor(usableW/pageW));
  const rows = Math.max(0, Math.floor(usableH/pageH));
  const totalPerPage = cols*rows;
  const totalSheets = totalPerPage > 0 ? Math.ceil(totalPcs/totalPerPage) : 0;
  const usedW = cols*pageW, usedH = rows*pageH;
  const offsetX = (ppDim.w - usedW)/2, offsetY = (ppDim.h - usedH)/2;
  const totalArea = ppDim.w*ppDim.h, usedArea = usedW*usedH;
  const wasteArea = Math.max(0, totalArea - usedArea);
  const utilization = totalArea > 0 ? (usedArea/totalArea)*100 : 0;
  return {cols,rows,totalPerPage,pageW,pageH,margin,bleed,totalSheets,wasteArea,totalArea,utilization,offsetX,offsetY};
}

function calcFitForOrientation(pageDim, ppBase, bleed, margin, orientation) {
  const ppW = orientation==='Landscape' ? ppBase.w : ppBase.h;
  const ppH = orientation==='Landscape' ? ppBase.h : ppBase.w;
  const pageW = pageDim.w + bleed*2, pageH = pageDim.h + bleed*2;
  const usableW = ppW - margin*2, usableH = ppH - margin*2;
  const cols = Math.max(0, Math.floor(usableW/pageW));
  const rows = Math.max(0, Math.floor(usableH/pageH));
  return cols*rows;
}

function autoPaperCutPos(pageDim, ppBase, bleed, margin) {
  const lF = calcFitForOrientation(pageDim, ppBase, bleed, margin, 'Landscape');
  const pF = calcFitForOrientation(pageDim, ppBase, bleed, margin, 'Portrait');
  return lF >= pF ? 'Landscape' : 'Portrait';
}

// ============================================================
// Render Cover Layout Studio
// ============================================================
let coverAlertShown = false;
let paperCutAlertShown = false;

// Helper: cleanup preview AbortController before re-render to prevent memory leak
function cleanupPreviewListeners() {
  ['coverPreviewBody','paperCutPreviewBody'].forEach(id => {
    const el = document.getElementById(id);
    if (el && el._abortCtrl) { el._abortCtrl.abort(); el._abortCtrl = null; }
  });
}

function renderCoverLayout(skipLeftPanel=false) {
  cleanupPreviewListeners();
  const s = coverState;
  const bookDim = getBookDim(s);
  const ppBase = s.printPaper === 'Custom' ? {w:s.customPrintW, h:s.customPrintH} : (PRINT_PAPER_MAP[s.printPaper]||{w:297,h:210});

  // [NEW] Jumlah Halaman + 2 Sisi → lembaran efektif untuk Tebal Punggung & Berat
  const coverLembaran = getCoverLembaran(s);
  const spine = calcSpineThickness(coverLembaran, s.paperIsi);
  const totalBentang = calcTotalBentang(bookDim.w, s.jilid, spine);
  const bleed = resolveBleed(s);
  const margin = resolveMargin(s);
  const autoPos = autoCoverPaperPos(totalBentang, bookDim.w, bookDim.h, bleed, ppBase, s.jilid, margin);
  // [Bug #6 fixed] Only auto-update when user hasn't manually overridden (paperPositionAuto !== false)
  if (s.paperPositionAuto !== false) { s.paperPosition = autoPos; }
  const ppDim = getPrintPaperDim(s);
  const displayMode = determineDisplayMode(totalBentang, bookDim.h, ppDim.w, ppDim.h, s.jilid, bleed, margin);
  // [Bug #1, #2] Fixed weight calculation — pass coverIsi for accurate cover GSM
  const weight = calcWeight(coverLembaran, s.paperIsi, bookDim.w, bookDim.h, s.jilid, s.coverIsi);
  const spiralInfo = getSpiralInfo(spine);
  const holeCount = getSpiralHoleCount(bookDim.h);
  /* [FIX v2.0.1 / BUG M4] Di mode Split yang dicek adalah LEBAR PARUH terlebar
     (cover + punggung + 1 strip hard cover bila hard cover), bukan bentang penuh.
     Split memang solusi saat bentang penuh tidak muat — sebelumnya fitsOnPaper
     tetap memakai bentang penuh sehingga selalu muncul "Fits on Paper ✗" yang
     kontradiktif dengan kartu "Split Mode — 2x Cetak". */
  const _hcExtra = s.jilid==='hard' ? HARDCOVER_EXTRA : 0;
  const splitHalfW = bookDim.w + spine + _hcExtra;
  const neededW = displayMode==='spiral' ? bookDim.w+bleed*2
    : displayMode==='split' ? splitHalfW+bleed*2
    : totalBentang+bleed*2;
  const neededH = bookDim.h+bleed*2;
  const fitsOnPaper = (neededW <= ppDim.w - margin*2) && (neededH <= ppDim.h - margin*2);

  // [Bug #13] Consistent formatting in toast
  if (!fitsOnPaper && !coverAlertShown) {
    coverAlertShown = true;
    showToast(`Ukuran buku (${fmtMm(neededW)} x ${fmtMm(neededH)}) melebihi Kertas Print ${s.printPaper} (${fmtMm(ppDim.w)} x ${fmtMm(ppDim.h)})!`, 'warning');
  }
  if (fitsOnPaper) { coverAlertShown = false; }

  // Left panel — only rebuild when structural changes happen (dropdowns, tab switch)
  if (!skipLeftPanel) {
    const left = document.getElementById('coverLeftPanel');
    left.innerHTML = '';

    createSectionTitle('coverLeftPanel', 'Ukuran & Posisi');
    createDropdown('coverLeftPanel', 'Ukuran Buku', BOOK_SIZES, s.bookSize, v=>{coverState.bookSize=v;}, ICONS.book);
    createDropdown('coverLeftPanel', 'Posisi Cover', [{value:'Portrait',label:'Portrait'},{value:'Landscape',label:'Landscape'}], s.position, v=>{coverState.position=v;}, ICONS.portrait);
    if (s.bookSize === 'Custom') {
      createDimensionInput('coverLeftPanel', '', s.customW, s.customH, v=>{coverState.customW=v;}, v=>{coverState.customH=v;});
    }

    createSectionTitle('coverLeftPanel', 'Kertas Isi & Jilid');
    createDropdown('coverLeftPanel', 'Kertas Isi', PAPER_ISI_OPTIONS, s.paperIsi, v=>{coverState.paperIsi=v;}, ICONS.paper);
    // [NEW] 'Jumlah Lembaran' diganti 'Jumlah Halaman'
    createNumberInput('coverLeftPanel', 'Jumlah Halaman', s.jumlahHalaman, v=>{coverState.jumlahHalaman=v;}, 1, ICONS.sheets, 99999);
    // [NEW] Toggle 2 Sisi (On/Off) — posisinya langsung di bawah Jumlah Halaman
    createToggle('coverLeftPanel', '2 Sisi (On/Off)', !!s.duaSisi, v=>{coverState.duaSisi=v;}, ICONS.twoSides, 'ON = 1 lembar untuk 2 halaman, OFF = 1 lembar untuk 1 halaman');
    createDropdown('coverLeftPanel', 'Jenis Jilid', JILID_OPTIONS, s.jilid, v=>{coverState.jilid=v;}, ICONS.binding);
    createDropdown('coverLeftPanel', 'Kertas Cover', PAPER_ISI_OPTIONS.filter(p => { const info = PAPER_ISI_MAP[p.value]; return info && (info.type === 'Carton' || info.type === 'Art Paper' || info.type === 'Ivory'); }), s.coverIsi, v=>{coverState.coverIsi=v;}, ICONS.paper);

    createSectionTitle('coverLeftPanel', 'Kertas Print');
    createDropdown('coverLeftPanel', 'Kertas Print', PRINT_PAPER_OPTIONS, s.printPaper, v=>{coverState.printPaper=v;}, ICONS.printPaper);
    if (s.printPaper === 'Custom') {
      createDimensionInput('coverLeftPanel', '', s.customPrintW, s.customPrintH, v=>{coverState.customPrintW=v;}, v=>{coverState.customPrintH=v;});
    }
    createDropdown('coverLeftPanel', 'Posisi Kertas', [{value:'Auto',label:'Auto'},{value:'Landscape',label:'Landscape'},{value:'Portrait',label:'Portrait'}], (s.paperPositionAuto!==false?'Auto':s.paperPosition), v=>{ if(v==='Auto'){coverState.paperPositionAuto=true;} else {coverState.paperPositionAuto=false; coverState.paperPosition=v;} }, ICONS.landscape);
    // [NEW] Bleed Area & Margin Kertas — opsi Custom (isi manual) untuk semua dropdown
    createDropdown('coverLeftPanel', 'Bleed Area', bleedOptionsFor(s), s.bleed, v=>{coverState.bleed=v;}, ICONS.bleed);
    if (s.bleed === 'custom') createNumberInput('coverLeftPanel', 'Nilai Bleed (mm)', coverState.bleedCustom, v=>{coverState.bleedCustom=v;}, 0, ICONS.bleed, 50, 0.5);
    createDropdown('coverLeftPanel', 'Margin Kertas', marginOptionsFor(s), s.margin, v=>{coverState.margin=v;}, ICONS.margin);
    if (s.margin === 'custom') createNumberInput('coverLeftPanel', 'Nilai Margin (mm)', coverState.marginCustom, v=>{coverState.marginCustom=v;}, 0, ICONS.margin, 100, 0.5);
  }

  // Right panel
  const right = document.getElementById('coverRightPanel');
  right.innerHTML = '';

  // [Bug #4] Result cards conditional on displayMode
  let spiralCardHtml = '';
  if (s.jilid === 'spiral') {
    if (spiralInfo.outOfRange) {
      spiralCardHtml = `
      <div class="studio-result-card card-warning studio-result-card-anim">
        <div class="studio-result-card-top"><span class="studio-result-label">Spiral Number</span></div>
        <div class="studio-result-value" style="font-size:14px;">Di Luar Ukuran</div>
        <div class="studio-result-sub">Tebal punggung ${fmtMm(spine)} melebihi max ${fmtMm(SPIRAL_SIZES[SPIRAL_SIZES.length-1].maxSpine)}</div>
        <div class="studio-result-bar"></div>
      </div>`;
    } else {
      spiralCardHtml = `
      <div class="studio-result-card card-violet studio-result-card-anim">
        <div class="studio-result-card-top"><span class="studio-result-label">Spiral Number</span></div>
        <div class="studio-result-value">#${spiralInfo.number}</div>
        <div class="studio-result-sub">Max ${fmtMm(SPIRAL_SIZES.find(x=>x.number===spiralInfo.number)?.maxSpine||0)}</div>
        <div class="studio-result-bar"></div>
      </div>`;
    }
  }

  // [Bug #14] formatWeight called once
  const fw = formatWeight(weight);

  // Show appropriate cards based on displayMode
  const showBentangCards = (displayMode === 'full' || displayMode === 'split');

  let cardsHtml = '<div class="studio-result-cards">';
  cardsHtml += `<div class="studio-result-card card-blue studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${fmtMm(spine)}');">
    <div class="studio-result-card-top"><span class="studio-result-label">Tebal Punggung</span></div>
    <div class="studio-result-value">${fmtMm(spine)}</div>
    <div class="studio-result-sub">${fmtSecondaryUnit(spine)}</div>
    <div class="studio-result-bar"></div>
  </div>`;
  cardsHtml += spiralCardHtml;
  if (s.jilid === 'spiral') {
    cardsHtml += `<div class="studio-result-card card-rose studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${fmtMm(bookDim.w)} x ${fmtMm(bookDim.h)}');">
      <div class="studio-result-card-top"><span class="studio-result-label">Ukuran Cover</span></div>
      <div class="studio-result-value" style="font-size:18px">${fmtMm(bookDim.w)} x ${fmtMm(bookDim.h)}</div>
      <div class="studio-result-sub">Tanpa Bleed</div>
      <div class="studio-result-bar"></div>
    </div>`;
  }
  if (showBentangCards) {
    cardsHtml += `<div class="studio-result-card card-sky studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${fmtMm(totalBentang)}');">
      <div class="studio-result-card-top"><span class="studio-result-label">Total Bentang</span></div>
      <div class="studio-result-value">${fmtMm(totalBentang)}</div>
      <div class="studio-result-sub">${fmtSecondaryUnit(totalBentang)}</div>
      <div class="studio-result-bar"></div>
    </div>`;
  }
  cardsHtml += `<div class="studio-result-card card-amber studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${fw.value}');">
    <div class="studio-result-card-top"><span class="studio-result-label">Estimasi Berat</span></div>
    <div class="studio-result-value">${fw.value}</div>
    <div class="studio-result-sub">${fw.sub}</div>
    <div class="studio-result-bar"></div>
  </div>`;
  if (showBentangCards) {
    cardsHtml += `<div class="studio-result-card card-emerald studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${fmtMm(totalBentang+bleed*2)}');">
      <div class="studio-result-card-top"><span class="studio-result-label">Bentang + Bleed</span></div>
      <div class="studio-result-value">${fmtMm(totalBentang+bleed*2)}</div>
      <div class="studio-result-sub">${fmtSecondaryUnit(totalBentang+bleed*2)}</div>
      <div class="studio-result-bar"></div>
    </div>`;
  }
  // For spiral, show cover dimensions
  if (displayMode === 'spiral') {
    cardsHtml += `<div class="studio-result-card card-sky studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${fmtMm(bookDim.w+bleed*2)} x ${fmtMm(bookDim.h+bleed*2)}');">
      <div class="studio-result-card-top"><span class="studio-result-label">Ukuran Cetak</span></div>
      <div class="studio-result-value" style="font-size:18px">${fmtMm(bookDim.w+bleed*2)} x ${fmtMm(bookDim.h+bleed*2)}</div>
      <div class="studio-result-sub">Cover + Bleed</div>
      <div class="studio-result-bar"></div>
    </div>`;
  }
  cardsHtml += '</div>';
  right.innerHTML = cardsHtml;

  // Copy All button — Feature 4
  const coverCopyText = [];
  coverCopyText.push(`Tebal Punggung: ${fmtMm(spine)} (${fmtSecondaryUnit(spine)})`);
  if (showBentangCards) coverCopyText.push(`Total Bentang: ${fmtMm(totalBentang)} (${fmtSecondaryUnit(totalBentang)})`);
  coverCopyText.push(`Estimasi Berat: ${fw.value} (${fw.sub})`);
  if (showBentangCards) coverCopyText.push(`Bentang + Bleed: ${fmtMm(totalBentang+bleed*2)} (${fmtSecondaryUnit(totalBentang+bleed*2)})`);
  if (displayMode === 'spiral') coverCopyText.push(`Ukuran Cetak: ${fmtMm(bookDim.w+bleed*2)} x ${fmtMm(bookDim.h+bleed*2)}`);
  if (s.jilid === 'spiral' && !spiralInfo.outOfRange) coverCopyText.push(`Spiral Number: #${spiralInfo.number}`);
  if (s.jilid === 'spiral') coverCopyText.push(`Ukuran Cover: ${fmtMm(bookDim.w)} x ${fmtMm(bookDim.h)}`);

  // Build export info lines
  coverExportInfo = [];
  coverExportInfo.push(`Book Size: ${fmtDimWxH(bookDim.w,bookDim.h)} (${s.bookSize} ${s.position})`);
  coverExportInfo.push(`Jilid: ${s.jilid==='soft'?'Soft Cover':s.jilid==='hard'?'Hard Cover':'Spiral Kawat'}`);
  coverExportInfo.push(`Tebal Punggung: ${fmtMm(spine)}`);
  if (showBentangCards) coverExportInfo.push(`Total Bentang: ${fmtMm(totalBentang)}`);
  if (showBentangCards && Number(bleed)>0) coverExportInfo.push(`Bentang + Bleed: ${fmtMm(totalBentang+bleed*2)}`);
  coverExportInfo.push(`Estimasi Berat: ${fw.value}`);
  if (displayMode === 'spiral') coverExportInfo.push(`Ukuran Cetak: ${fmtMm(bookDim.w+bleed*2)} x ${fmtMm(bookDim.h+bleed*2)}`);
  if (s.jilid === 'spiral' && !spiralInfo.outOfRange) coverExportInfo.push(`Spiral Number: #${spiralInfo.number}`);
  if (s.jilid === 'spiral') coverExportInfo.push(`Ukuran Cover: ${fmtMm(bookDim.w)} x ${fmtMm(bookDim.h)}`);
  coverExportInfo.push(`Print Paper: ${fmtDimWxH(ppDim.w,ppDim.h)} (${s.printPaper} ${s.paperPosition})`);
  if (Number(bleed)>0) coverExportInfo.push(`Bleed: ${bleed}mm`);
  if (Number(margin)>0) coverExportInfo.push(`Margin: ${margin}mm`);

  right.innerHTML += `<button class="studio-copy-all-btn" data-copy="${coverCopyText.join('&#10;').replace(/"/g,'&quot;')}" onclick="copyText(this.dataset.copy)"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy Semua Hasil</button><div class="studio-copy-all-spacer"></div>`;

  // Preview — always render at auto-fit scale; zoom/pan handled by CSS transform
  const scale = Math.min(540/ppDim.w, 380/ppDim.h, 2);
  _previewState.cover.autoFitScale = scale;

  const svgW = ppDim.w*scale, svgH = ppDim.h*scale;
  const w = bookDim.w, h = bookDim.h;
  const hcSpace = s.jilid==='hard' ? HARDCOVER_EXTRA : 0;

  // [Bug #9] Split mode: determine which half to show
  const showFront = coverSplitView !== 'back';
  const showBack = coverSplitView === 'back';

  let offset = {x:0,y:0};
  if (displayMode==='full') { offset = {x:(svgW-totalBentang*scale)/2, y:(svgH-h*scale)/2}; }
  else if (displayMode==='split') {
    if (showBack) {
      // Show back cover half: back cover + hc + spine + hc
      const backHalfW = w + hcSpace + spine; /* [FIX v2.0.1 / BUG L1] 1 hc saja — konsisten dgn paruh depan (spine + hc + cover) */
      offset = {x:(svgW-backHalfW*scale)/2, y:(svgH-h*scale)/2};
    } else {
      // Front cover half: spine + hc + cover depan
      const frontHalfW = w + spine + hcSpace;
      offset = {x:(svgW-frontHalfW*scale)/2, y:(svgH-h*scale)/2};
    }
  }
  else { offset = {x:(svgW-w*scale)/2, y:(svgH-h*scale)/2}; }

  // [Bug #7] All SVG colors adapt to dark mode
  const padX = 20;
  const _bg = isDark ? '#0E1628' : '#EEF2F7';
  const _paper = isDark ? '#ffffff' : '#faf8f5';
  const _paperS = isDark ? '#5a6080' : '#c9c2b8';
  const _grid = isDark ? '#3a3f5a' : '#e7e3de';
  const _label = isDark ? '#94a3b8' : '#475569';
  const _txt = isDark ? '#c7d2fe' : '#1e3a5f';
  const _txtS = isDark ? '#a5b4fc' : '#3b5f8f';
  const _coverBack = isDark ? '#2563eb' : '#93c5fd';
  const _coverFront = isDark ? '#3b82f6' : '#60a5fa';
  const _coverStroke = isDark ? '#60a5fa' : '#3b82f6';
  const _spine = isDark ? '#1d4ed8' : '#3b82f6';
  const _spineS = isDark ? '#3b82f6' : '#1d4ed8';
  const _hcSpace = isDark ? '#2a3a6f' : '#bfdbfe';
  const _bleedS = isDark ? '#c4707e' : '#e88fa0';
  const _safeS = isDark ? '#2dd4bf' : '#5eead4';
  const _spiralLine = isDark ? '#94a3b8' : '#6b7280';
  const _spiralHole = isDark ? '#64748b' : '#6b7280';
  const _spiralHoleS = isDark ? '#475569' : '#4b5563';
  const _marginS = isDark ? '#8b5cf6' : '#a78bfa';
  const _bleedFill = isDark ? 'rgba(244,163,177,0.3)' : 'rgba(244,163,177,0.18)';
  const _safeFill = isDark ? 'rgba(110,231,183,0.22)' : 'rgba(110,231,183,0.1)';
  const _marginFill = isDark ? 'rgba(196,181,253,0.15)' : 'rgba(196,181,253,0.1)';
  const _bleedLegend = isDark ? 'rgba(244,163,177,0.5)' : 'rgba(244,163,177,0.4)';
  const _safeLegend = isDark ? 'rgba(94,234,212,0.5)' : 'rgba(94,234,212,0.4)';
  const _marginLegend = isDark ? 'rgba(167,139,250,0.5)' : 'rgba(167,139,250,0.4)';

  let svgContent = `<rect x="${-padX}" y="-20" width="${svgW+padX*2}" height="${svgH+40}" fill="${_bg}"/>`;
  svgContent += `<rect x="0" y="0" width="${svgW}" height="${svgH}" fill="${_paper}" rx="4" stroke="${_paperS}" stroke-width="1"/>`;
  // Margin area visualization
  if (margin > 0) svgContent += `<rect x="${margin*scale}" y="${margin*scale}" width="${(ppDim.w-margin*2)*scale}" height="${(ppDim.h-margin*2)*scale}" fill="${_marginFill}" stroke="${_marginS}" stroke-width="0.8" stroke-dasharray="5,3"/>`;
  [0.25,0.5,0.75].forEach(pct => {
    svgContent += `<line x1="${svgW*pct}" y1="0" x2="${svgW*pct}" y2="${svgH}" stroke="${_grid}" stroke-width="0.4" stroke-dasharray="6,4"/>`;
    svgContent += `<line x1="0" y1="${svgH*pct}" x2="${svgW}" y2="${svgH*pct}" stroke="${_grid}" stroke-width="0.4" stroke-dasharray="6,4"/>`;
  });

  const x0 = offset.x, y0 = offset.y;
  const bw = w*scale, bh = h*scale, sw = spine*scale, hcw = hcSpace*scale;

  // [Bug #11] Scale guard for cover text labels
  const showText = scale >= 0.3;

  if (displayMode === 'full') {
    if (bleed>0) svgContent += `<rect x="${x0-bleed*scale}" y="${y0-bleed*scale}" width="${(totalBentang+bleed*2)*scale}" height="${(h+bleed*2)*scale}" fill="${_bleedFill}" stroke="${_bleedS}" stroke-width="1" stroke-dasharray="5,3"/>`;
    if (totalBentang > SAFE_ZONE*2 && h > SAFE_ZONE*2) svgContent += `<rect x="${x0+SAFE_ZONE*scale}" y="${y0+SAFE_ZONE*scale}" width="${(totalBentang-SAFE_ZONE*2)*scale}" height="${(h-SAFE_ZONE*2)*scale}" fill="${_safeFill}" stroke="${_safeS}" stroke-width="0.5" stroke-dasharray="3,3"/>`;
    svgContent += `<rect x="${x0}" y="${y0}" width="${bw}" height="${bh}" fill="${_coverBack}" stroke="${_coverStroke}" stroke-width="1" rx="2"/>`;
    if (showText) {
      svgContent += `<text x="${x0+bw/2}" y="${y0+bh/2}" text-anchor="middle" font-size="${11*Math.min(scale,1.5)}" fill="${_txt}" font-weight="600">Cover Belakang</text>`;
      svgContent += `<text x="${x0+bw/2}" y="${y0+bh/2+14*Math.min(scale,1.5)}" text-anchor="middle" font-size="${9*Math.min(scale,1.5)}" fill="${_txtS}">${fmtDimWxH(w,h)}</text>`;
    }
    if (hcSpace>0) svgContent += `<rect x="${x0+bw}" y="${y0}" width="${hcw}" height="${bh}" fill="${_hcSpace}" stroke="${_coverStroke}" stroke-width="0.5" stroke-dasharray="2,2"/>`;
    svgContent += `<rect x="${x0+bw+hcw}" y="${y0}" width="${sw}" height="${bh}" fill="${_spine}" stroke="${_spineS}" stroke-width="1"/>`;
    if (showText) {
      svgContent += `<text x="${x0+bw+hcw+sw/2}" y="${y0+bh/2}" text-anchor="middle" font-size="${9*Math.min(scale,1.5)}" fill="#fff" font-weight="600" transform="rotate(-90,${x0+bw+hcw+sw/2},${y0+bh/2})">Punggung ${fmtMm(spine)}</text>`;
    }
    if (hcSpace>0) svgContent += `<rect x="${x0+bw+hcw+sw}" y="${y0}" width="${hcw}" height="${bh}" fill="${_hcSpace}" stroke="${_coverStroke}" stroke-width="0.5" stroke-dasharray="2,2"/>`;
    svgContent += `<rect x="${x0+bw+hcw+sw+hcw}" y="${y0}" width="${bw}" height="${bh}" fill="${_coverFront}" stroke="${_coverStroke}" stroke-width="1" rx="2"/>`;
    if (showText) {
      svgContent += `<text x="${x0+bw+hcw+sw+hcw+bw/2}" y="${y0+bh/2}" text-anchor="middle" font-size="${11*Math.min(scale,1.5)}" fill="${_txt}" font-weight="600">Cover Depan</text>`;
      svgContent += `<text x="${x0+bw+hcw+sw+hcw+bw/2}" y="${y0+bh/2+14*Math.min(scale,1.5)}" text-anchor="middle" font-size="${9*Math.min(scale,1.5)}" fill="${_txtS}">${fmtDimWxH(w,h)}</text>`;
    }
  } else if (displayMode === 'split') {
    // [Bug #9] Show both halves with toggle tabs
    if (showBack) {
      // Back cover half: back cover + hc + spine + hc
      const backHalfW = w + hcSpace + spine; /* [FIX v2.0.1 / BUG L1] 1 hc saja — konsisten dgn paruh depan (spine + hc + cover) */
      if (bleed>0) svgContent += `<rect x="${x0-bleed*scale}" y="${y0-bleed*scale}" width="${(backHalfW+bleed*2)*scale}" height="${(h+bleed*2)*scale}" fill="${_bleedFill}" stroke="${_bleedS}" stroke-width="1" stroke-dasharray="5,3"/>`;
      svgContent += `<rect x="${x0}" y="${y0}" width="${bw}" height="${bh}" fill="${_coverBack}" stroke="${_coverStroke}" stroke-width="1" rx="2"/>`;
      if (showText) {
        svgContent += `<text x="${x0+bw/2}" y="${y0+bh/2}" text-anchor="middle" font-size="${11*Math.min(scale,1.5)}" fill="${_txt}" font-weight="600">Cover Belakang</text>`;
        svgContent += `<text x="${x0+bw/2}" y="${y0+bh/2+14*Math.min(scale,1.5)}" text-anchor="middle" font-size="${9*Math.min(scale,1.5)}" fill="${_txtS}">${fmtDimWxH(w,h)}</text>`;
      }
      if (hcSpace>0) svgContent += `<rect x="${x0+bw}" y="${y0}" width="${hcw}" height="${bh}" fill="${_hcSpace}" stroke="${_coverStroke}" stroke-width="0.5" stroke-dasharray="2,2"/>`;
      svgContent += `<rect x="${x0+bw+hcw}" y="${y0}" width="${sw}" height="${bh}" fill="${_spine}" stroke="${_spineS}" stroke-width="1"/>`;
      if (showText) {
        svgContent += `<text x="${x0+bw+hcw+sw/2}" y="${y0+bh/2}" text-anchor="middle" font-size="${9*Math.min(scale,1.5)}" fill="#fff" font-weight="600" transform="rotate(-90,${x0+bw+hcw+sw/2},${y0+bh/2})">Punggung ${fmtMm(spine)}</text>`;
      }
      if (hcSpace>0) svgContent += `<rect x="${x0+bw+hcw+sw}" y="${y0}" width="${hcw}" height="${bh}" fill="${_hcSpace}" stroke="${_coverStroke}" stroke-width="0.5" stroke-dasharray="2,2"/>`;
    } else {
      // Front cover half: spine + hc + cover depan
      if (bleed>0) svgContent += `<rect x="${x0-bleed*scale}" y="${y0-bleed*scale}" width="${(w+spine+hcSpace+bleed*2)*scale}" height="${(h+bleed*2)*scale}" fill="${_bleedFill}" stroke="${_bleedS}" stroke-width="1" stroke-dasharray="5,3"/>`;
      if (w+spine+hcSpace > SAFE_ZONE*2 && h > SAFE_ZONE*2) svgContent += `<rect x="${x0+SAFE_ZONE*scale}" y="${y0+SAFE_ZONE*scale}" width="${(w+spine+hcSpace-SAFE_ZONE*2)*scale}" height="${(h-SAFE_ZONE*2)*scale}" fill="${_safeFill}" stroke="${_safeS}" stroke-width="0.5" stroke-dasharray="3,3"/>`;
      svgContent += `<rect x="${x0}" y="${y0}" width="${sw}" height="${bh}" fill="${_spine}" stroke="${_spineS}" stroke-width="1"/>`;
      if (showText) {
        svgContent += `<text x="${x0+sw/2}" y="${y0+bh/2}" text-anchor="middle" font-size="${9*Math.min(scale,1.5)}" fill="#fff" font-weight="600" transform="rotate(-90,${x0+sw/2},${y0+bh/2})">Punggung ${fmtMm(spine)}</text>`;
      }
      if (hcSpace>0) svgContent += `<rect x="${x0+sw}" y="${y0}" width="${hcw}" height="${bh}" fill="${_hcSpace}" stroke="${_coverStroke}" stroke-width="0.5" stroke-dasharray="2,2"/>`;
      svgContent += `<rect x="${x0+sw+hcw}" y="${y0}" width="${bw}" height="${bh}" fill="${_coverFront}" stroke="${_coverStroke}" stroke-width="1" rx="2"/>`;
      if (showText) {
        svgContent += `<text x="${x0+sw+hcw+bw/2}" y="${y0+bh/2}" text-anchor="middle" font-size="${11*Math.min(scale,1.5)}" fill="${_txt}" font-weight="600">Cover Depan</text>`;
        svgContent += `<text x="${x0+sw+hcw+bw/2}" y="${y0+bh/2+14*Math.min(scale,1.5)}" text-anchor="middle" font-size="${9*Math.min(scale,1.5)}" fill="${_txtS}">${fmtDimWxH(w,h)}</text>`;
      }
    }
  } else if (displayMode === 'spiral') {
    if (bleed>0) svgContent += `<rect x="${x0-bleed*scale}" y="${y0-bleed*scale}" width="${(w+bleed*2)*scale}" height="${(h+bleed*2)*scale}" fill="${_bleedFill}" stroke="${_bleedS}" stroke-width="1" stroke-dasharray="5,3"/>`;
    if (w > SAFE_ZONE*2 && h > SAFE_ZONE*2) svgContent += `<rect x="${x0+SAFE_ZONE*scale}" y="${y0+SAFE_ZONE*scale}" width="${(w-SAFE_ZONE*2)*scale}" height="${(h-SAFE_ZONE*2)*scale}" fill="${_safeFill}" stroke="${_safeS}" stroke-width="0.5" stroke-dasharray="3,3"/>`;
    svgContent += `<rect x="${x0}" y="${y0}" width="${bw}" height="${bh}" fill="${_coverFront}" stroke="${_coverStroke}" stroke-width="1" rx="2"/>`;
    svgContent += `<line x1="${x0}" y1="${y0}" x2="${x0}" y2="${y0+bh}" stroke="${_spiralLine}" stroke-width="2"/>`;
    if (showText) {
      svgContent += `<text x="${x0+bw/2}" y="${y0+bh/2}" text-anchor="middle" font-size="${11*Math.min(scale,1.5)}" fill="${_txt}" font-weight="600">Cover Depan</text>`;
      svgContent += `<text x="${x0+bw/2}" y="${y0+bh/2+14*Math.min(scale,1.5)}" text-anchor="middle" font-size="${9*Math.min(scale,1.5)}" fill="${_txtS}">${fmtDimWxH(w,h)}</text>`;
    }
    // [Bug #16] Spiral holes with guard for small book heights
    const usableH2 = Math.max(0, h - 2*SPIRAL_MARGIN);
    if (holeCount > 1 && usableH2 > 0) {
      for (let i=0; i<holeCount; i++) {
        const hy = SPIRAL_MARGIN + (usableH2/(holeCount-1))*i;
        svgContent += `<circle cx="${x0}" cy="${hy*scale+offset.y}" r="${SPIRAL_HOLE_SIZE/2*scale}" fill="${_spiralHole}" stroke="${_spiralHoleS}" stroke-width="0.5"/>`;
      }
    }
  }

  // Dimension label
  const yBottom = offset.y + h*scale + (bleed>0?bleed*scale:0) + 14;
  if (displayMode==='full') svgContent += `<text x="${offset.x+totalBentang*scale/2}" y="${yBottom}" text-anchor="middle" font-size="10" fill="${_label}" font-weight="600">${fmtMm(totalBentang)} (${fmtSecondaryUnit(totalBentang)})</text>`;
  else if (displayMode==='split') {
    if (showBack) {
      const backHalfW = w + hcSpace + spine; /* [FIX v2.0.1 / BUG L1] 1 hc saja — konsisten dgn paruh depan (spine + hc + cover) */
      svgContent += `<text x="${offset.x+backHalfW*scale/2}" y="${yBottom}" text-anchor="middle" font-size="10" fill="${_label}" font-weight="600">${fmtMm(backHalfW)} (Cover Belakang)</text>`;
    } else {
      svgContent += `<text x="${offset.x+(w+spine+hcSpace)*scale/2}" y="${yBottom}" text-anchor="middle" font-size="10" fill="${_label}" font-weight="600">${fmtMm(w+spine+hcSpace)} (Cover Depan)</text>`;
    }
  }
  else svgContent += `<text x="${offset.x+w*scale/2}" y="${yBottom}" text-anchor="middle" font-size="10" fill="${_label}" font-weight="600">${fmtDim(w)}</text>`;

  // ── Overlap Warning: area that exceeds print paper ──
  if (!fitsOnPaper) {
    const usableW = ppDim.w - margin*2, usableH = ppDim.h - margin*2;
    const contentW = neededW, contentH = neededH;
    const cx0 = margin*scale, cy0 = margin*scale; // start of usable area in SVG coords
    // Right overflow
    if (contentW > usableW) {
      const overX = cx0 + usableW*scale;
      const overW = Math.min((contentW - usableW)*scale, svgW - overX);
      if (overW > 0) svgContent += `<rect class="studio-overlap-area" x="${overX}" y="${cy0}" width="${overW}" height="${usableH*scale}" fill="rgba(239,68,68,0.45)" stroke="#ef4444" stroke-width="1" stroke-dasharray="4,3"/>`;
    }
    // Bottom overflow
    if (contentH > usableH) {
      const overY = cy0 + usableH*scale;
      const overH = Math.min((contentH - usableH)*scale, svgH - overY);
      if (overH > 0) svgContent += `<rect class="studio-overlap-area" x="${cx0}" y="${overY}" width="${usableW*scale}" height="${overH}" fill="rgba(239,68,68,0.45)" stroke="#ef4444" stroke-width="1" stroke-dasharray="4,3"/>`;
    }
    // Corner overflow (both)
    if (contentW > usableW && contentH > usableH) {
      const overX = cx0 + usableW*scale;
      const overY = cy0 + usableH*scale;
      const overW = Math.min((contentW - usableW)*scale, svgW - overX);
      const overH = Math.min((contentH - usableH)*scale, svgH - overY);
      if (overW > 0 && overH > 0) svgContent += `<rect class="studio-overlap-area" x="${overX}" y="${overY}" width="${overW}" height="${overH}" fill="rgba(239,68,68,0.55)" stroke="#ef4444" stroke-width="1" stroke-dasharray="4,3"/>`;
    }
  }

  const modeLabel = displayMode==='full'?'Full Spread':displayMode==='split'?'Split':'Spiral';
  const zoomBtns = [{l:'Fit',v:0},{l:'25%',v:0.25},{l:'50%',v:0.5},{l:'75%',v:0.75},{l:'100%',v:1}];
  let splitTabsHtml = '';
  if (displayMode === 'split') {
    splitTabsHtml = `<div class="studio-split-tabs">
      <button class="studio-split-tab ${coverSplitView!=='back'?'active':''}" onclick="coverSplitView='front';renderAll(true)">Cover Depan</button>
      <button class="studio-split-tab ${coverSplitView==='back'?'active':''}" onclick="coverSplitView='back';renderAll(true)">Cover Belakang</button>
    </div>`;
  }

  // [A11y #4] SVG accessibility — apply zoom/pan transform immediately to avoid flash-to-fit
  const _cst = _previewState.cover;
  const _csvgStyle = `display:block;max-width:100%;height:auto;font-family:'Poppins',sans-serif;transform:translate(${_cst.panX}px,${_cst.panY}px) scale(${_cst.zoom});transform-origin:center center`;
  // [Samakan Shuffle] chip legend Bleed/Margin — tampil hanya bila nilai > 0 (gaya sp-zone-legend)
  const _covLegend = (bleed > 0 || margin > 0)
    ? `<div class="sp-zone-legend" style="margin:2px 0 0">${bleed > 0 ? `<span class="sp-legend-chip"><i style="background:#ef4444"></i>Bleed Area ${bleed} mm</span>` : ''}${margin > 0 ? `<span class="sp-legend-chip"><i style="background:#f59e0b"></i>Margin Kertas ${margin} mm</span>` : ''}</div>`
    : '';
  // [Samakan Shuffle] subjudul deskriptif ala sp-slide-sub
  const _covModeSub = displayMode === 'split' ? 'Full spread tidak muat — cover dicetak terpisah 2×'
    : displayMode === 'spiral' ? 'Cover depan + lubang spiral pada kertas print'
    : 'Bentang cover utuh (depan + punggung + belakang) dalam satu lembar';
  right.innerHTML += `
    <div class="studio-preview-container">
      <div class="studio-preview-header">
        <div style="min-width:0">
          <div class="studio-preview-title">Layout Preview — ${modeLabel}</div>
        </div>
        <span class="sp-slide-badge sp-badge-front">${s.printPaper === 'Custom' ? 'CUSTOM' : s.printPaper} &middot; ${s.paperPosition}</span>
        ${_covLegend}
      </div>
      ${splitTabsHtml}
      <div class="studio-preview-body" id="coverPreviewBody"><svg width="${svgW+padX*2}" height="${svgH+40}" viewBox="${-padX} -20 ${svgW+padX*2} ${svgH+40}" role="img" aria-label="Preview layout cetak cover mode ${modeLabel}" style="${_csvgStyle}"><title>Cover Layout Preview - ${modeLabel}</title>${svgContent}</svg></div>
      <div class="studio-zoom-bar">
        <div class="studio-zoom-buttons">${zoomBtns.map(z=>`<button class="studio-zoom-btn${coverZoom===z.v?' active':''}" onclick="coverZoom=${z.v};_previewState.cover.zoom=${z.v===0?1:z.v/(_previewState.cover.autoFitScale||1)};_previewState.cover.panX=0;_previewState.cover.panY=0;renderAll(true)">${z.l}</button>`).join('')}</div>
        <div style="display:flex;gap:6px">
        <button class="studio-export-badge png-badge" onclick="exportPng('coverPreviewBody','cover-layout.png',coverExportInfo)" title="Export PNG"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>PNG</button>
        <button class="studio-export-badge pdf-badge" onclick="exportPdf('coverPreviewBody','cover-layout.pdf',coverExportInfo)" title="Export PDF"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>PDF</button>
        </div>
      </div>
      <div class="studio-preview-footer"><div class="sp-slide-info">
        <div class="sp-slide-info-row"><span class="sp-slide-info-label">Kertas Print</span><span class="sp-slide-info-value">${s.printPaper === 'Custom' ? 'Custom — ' + fmtDimWxH(Number(s.customPrintW)||0, Number(s.customPrintH)||0) : s.printPaper + ' — ' + fmtDimWxH(ppDim.w, ppDim.h)}</span></div>
        <div class="sp-slide-info-row"><span class="sp-slide-info-label">Ukuran Cover</span><span class="sp-slide-info-value">${fmtDimWxH(bookDim.w, bookDim.h)}${displayMode === 'split' ? ' · Split 2x cetak' : ''}</span></div>
        <div class="sp-slide-info-row"><span class="sp-slide-info-label">Posisi Kertas</span><span class="sp-slide-info-value">${s.paperPosition}${s.paperPositionAuto !== false ? ' (Auto)' : ''}</span></div>
        <div class="sp-slide-info-row"><span class="sp-slide-info-label">Mode Layout</span><span class="sp-slide-info-value">${modeLabel}</span></div>
      </div></div>
    </div>`;

  // Info cards
  let infoHtml = '<div style="margin-top:16px">';
  // [Bug #9] Info about split requiring 2 prints
  if (displayMode === 'split') {
    infoHtml += `<div class="studio-info-card studio-info-warning studio-info-card-anim"><div class="studio-info-card-header"><span class="studio-info-card-title">Split Mode — 2x Cetak</span></div><div class="studio-info-card-body">
      <div class="studio-info-row"><span class="studio-info-row-label">Status</span><span class="studio-info-row-value" style="color:#f59e0b">Full spread tidak muat — perlu 2 kali cetak</span></div>
      <div class="studio-info-row"><span class="studio-info-row-label">Cetak 1</span><span class="studio-info-row-value">Cover Depan (Punggung + Cover Depan)</span></div>
      <div class="studio-info-row"><span class="studio-info-row-label">Cetak 2</span><span class="studio-info-row-value">Cover Belakang (Cover Belakang + Punggung)</span></div></div></div>`;
  }
  if (s.jilid==='hard') {
    infoHtml += `<div class="studio-info-card studio-info-warning studio-info-card-anim"><div class="studio-info-card-header"><span class="studio-info-card-title">Hard Cover Info</span></div><div class="studio-info-card-body">
      <div class="studio-info-row"><span class="studio-info-row-label">Extra Space (Nyentrik)</span><span class="studio-info-row-value">${HARDCOVER_EXTRA}mm × 2</span></div>
      <div class="studio-info-row"><span class="studio-info-row-label">Space Per Side</span><span class="studio-info-row-value">${HARDCOVER_EXTRA}mm</span></div>
      <div class="studio-info-row"><span class="studio-info-row-label">Total Extra in Bentang</span><span class="studio-info-row-value">${HARDCOVER_EXTRA*2}mm</span></div></div></div>`;
  }
  if (s.jilid==='spiral') {
    if (spiralInfo.outOfRange) {
      infoHtml += `<div class="studio-info-card studio-info-warning studio-info-card-anim"><div class="studio-info-card-header"><span class="studio-info-card-title">Spiral — Di Luar Ukuran</span></div><div class="studio-info-card-body">
        <div class="studio-info-row"><span class="studio-info-row-label">Spiral Number</span><span class="studio-info-row-value" style="color:#dc2626">Di Luar Ukuran</span></div>
        <div class="studio-info-row"><span class="studio-info-row-label">Tebal Punggung</span><span class="studio-info-row-value" style="color:#dc2626">${fmtMm(spine)}</span></div>
        <div class="studio-info-row"><span class="studio-info-row-label">Max Ukuran Tabel</span><span class="studio-info-row-value">${SPIRAL_SIZES[SPIRAL_SIZES.length-1].maxSpine}mm (#${SPIRAL_SIZES[SPIRAL_SIZES.length-1].number})</span></div>
        <div class="studio-info-row"><span class="studio-info-row-label">Margin from Edge</span><span class="studio-info-row-value">${SPIRAL_MARGIN}mm</span></div></div></div>`;
    } else {
      infoHtml += `<div class="studio-info-card studio-info-info studio-info-card-anim"><div class="studio-info-card-header"><span class="studio-info-card-title">Binding Info</span></div><div class="studio-info-card-body">
        <div class="studio-info-row"><span class="studio-info-row-label">Spiral Number</span><span class="studio-info-row-value">#${spiralInfo.number}</span></div>
        <div class="studio-info-row"><span class="studio-info-row-label">Max Spine</span><span class="studio-info-row-value">${SPIRAL_SIZES.find(x=>x.number===spiralInfo.number)?.maxSpine||0}mm</span></div>
        <div class="studio-info-row"><span class="studio-info-row-label">Margin from Edge</span><span class="studio-info-row-value">${SPIRAL_MARGIN}mm</span></div></div></div>`;
    }
    infoHtml += `<div class="studio-info-card studio-info-card-anim"><div class="studio-info-card-header"><span class="studio-info-card-title">Spiral Size Table</span></div><div class="studio-info-card-body"><table class="studio-table"><thead><tr><th>Number</th><th>Max Spine (mm)</th></tr></thead><tbody>`;
    SPIRAL_SIZES.forEach(s2 => {
      const isActive = !spiralInfo.outOfRange && s2.number === spiralInfo.number;
      const isExceeded = spiralInfo.outOfRange && s2.number === SPIRAL_SIZES[SPIRAL_SIZES.length-1].number;
      infoHtml += `<tr class="${isActive?'active-row':''}" style="${isExceeded?'background:rgba(239,68,68,0.08);':''}"><td>#${s2.number}</td><td>${s2.maxSpine}${isExceeded?' ← melebihi':''}</td></tr>`;
    });
    infoHtml += `</tbody></table></div></div>`;
  }

  infoHtml += `<div class="studio-info-card studio-info-card-anim ${fitsOnPaper?'studio-info-success':'studio-info-warning'}"><div class="studio-info-card-header"><span class="studio-info-card-title">Print Paper Info</span></div><div class="studio-info-card-body">
    <div class="studio-info-row"><span class="studio-info-row-label">Paper Size</span><span class="studio-info-row-value">${fmtDimWxH(ppDim.w,ppDim.h)}</span></div>
    <div class="studio-info-row"><span class="studio-info-row-label">Needed Size</span><span class="studio-info-row-value">${fmtMm(neededW)}×${fmtMm(neededH)}</span></div>
    <div class="studio-info-row"><span class="studio-info-row-label">Fits on Paper</span><span class="studio-info-row-value" style="color:${fitsOnPaper?'#10b981':'#f59e0b'}">${fitsOnPaper?'✓ Yes':'✗ No — consider larger paper'}</span></div>
    <div class="studio-info-row"><span class="studio-info-row-label">Margin</span><span class="studio-info-row-value">${margin}mm</span></div></div></div>`;

  infoHtml += `<div class="studio-info-card studio-info-card-anim"><div class="studio-info-card-header"><span class="studio-info-card-title">Info Warna</span></div><div class="studio-info-card-body"><div class="studio-legend">
    <div class="studio-legend-item"><span class="studio-legend-dot" style="background:${_paper};border:1px solid ${_paperS}"></span><span class="studio-legend-label">Kertas Print</span></div>
    <div class="studio-legend-item"><span class="studio-legend-dot" style="background:${_coverBack}"></span><span class="studio-legend-label">Cover Belakang</span></div>
    <div class="studio-legend-item"><span class="studio-legend-dot" style="background:${_coverFront}"></span><span class="studio-legend-label">Cover Depan</span></div>
    <div class="studio-legend-item"><span class="studio-legend-dot" style="background:${_spine}"></span><span class="studio-legend-label">Punggung/Spine</span></div>
    <div class="studio-legend-item"><span class="studio-legend-dot" style="background:${_hcSpace}"></span><span class="studio-legend-label">Hard Cover Space</span></div>
    <div class="studio-legend-item"><span class="studio-legend-dot" style="background:${_bleedLegend}"></span><span class="studio-legend-label">Bleed Area</span></div>
    <div class="studio-legend-item"><span class="studio-legend-dot" style="background:${_safeLegend}"></span><span class="studio-legend-label">Safe Zone</span></div>
    <div class="studio-legend-item"><span class="studio-legend-dot" style="background:${_spiralHole}"></span><span class="studio-legend-label">Spiral Holes</span></div>
    <div class="studio-legend-item"><span class="studio-legend-dot" style="background:${_marginLegend}"></span><span class="studio-legend-label">Margin</span></div>
  </div>
  </div></div>`;
  infoHtml += '</div>';
  right.innerHTML += infoHtml;

  // Setup preview interaction after render
  // Setup preview interaction — use requestAnimationFrame for immediate but safe setup
  requestAnimationFrame(() => {
    setupPreviewInteraction('coverPreviewBody', 'cover');
  });
}

// ============================================================
// Render Paper Cut Studio
// ============================================================
function renderPaperCut(skipLeftPanel=false) {
  cleanupPreviewListeners();
  const s = paperCutState;
  const pageDim = getPageDim(s);
  const ppBase = s.printPaper === 'Custom' ? {w:s.customPrintW, h:s.customPrintH} : (PRINT_PAPER_MAP[s.printPaper]||{w:480,h:320});
  const bleed = resolveBleed(s);
  const margin = getMarginValue(s);
  const totalPcs = s.jumlahPcs;

  const autoPos = autoPaperCutPos(pageDim, ppBase, bleed, margin);
  if (s.chacaRel) { s.paperPosition = 'Landscape'; }
  else if (s.paperPositionAuto !== false) { s.paperPosition = autoPos; }
  const ppDim = getPaperCutPrintDim(s);
  const cut = calcCutLayout(pageDim, ppDim, bleed, margin, totalPcs);

  // Left panel — only rebuild when structural changes happen
  if (!skipLeftPanel) {
    const left = document.getElementById('paperCutLeftPanel');
    left.innerHTML = '';

    createSectionTitle('paperCutLeftPanel', 'Ukuran & Posisi');
    createDimensionInput('paperCutLeftPanel', 'Custom Ukuran Desain', s.customW, s.customH, v=>{paperCutState.customW=v;}, v=>{paperCutState.customH=v;}, ICONS.book);
    createDropdown('paperCutLeftPanel', 'Posisi Desain', [{value:'Portrait',label:'Portrait'},{value:'Landscape',label:'Landscape'}], s.position, v=>{paperCutState.position=v;}, ICONS.portrait);
    createToggle('paperCutLeftPanel', 'Chaca/Rel', s.chacaRel, v=>{paperCutState.chacaRel=v; if(v) paperCutState.paperPosition='Landscape';}, ICONS.chacaRel, 'Jika ON, Posisi Kertas hanya Landscape');

    createSectionTitle('paperCutLeftPanel', 'Jumlah');
    createNumberInput('paperCutLeftPanel', 'Jumlah Pcs', s.jumlahPcs, v=>{paperCutState.jumlahPcs=v;}, 1, ICONS.pcs, 99999);

    createSectionTitle('paperCutLeftPanel', 'Kertas Print');
    createDropdown('paperCutLeftPanel', 'Kertas Print', PRINT_PAPER_OPTIONS, s.printPaper, v=>{paperCutState.printPaper=v;}, ICONS.printPaper);
    if (s.printPaper === 'Custom') {
      createDimensionInput('paperCutLeftPanel', '', s.customPrintW, s.customPrintH, v=>{paperCutState.customPrintW=v;}, v=>{paperCutState.customPrintH=v;});
    }
    const paperPosOptions = s.chacaRel ? [{value:'Landscape',label:'Landscape'}] : [{value:'Auto',label:'Auto'},{value:'Landscape',label:'Landscape'},{value:'Portrait',label:'Portrait'}];
    createDropdown('paperCutLeftPanel', s.chacaRel ? 'Posisi Kertas (Landscape Only)' : 'Posisi Kertas', paperPosOptions, (s.chacaRel?'Landscape':(s.paperPositionAuto!==false?'Auto':s.paperPosition)), v=>{ if(v==='Auto'){paperCutState.paperPositionAuto=true;} else {paperCutState.paperPositionAuto=false; paperCutState.paperPosition=v;} }, ICONS.landscape);
    // [Bug #12] Use BLEED_OPTIONS constant instead of inline duplicate
    // [NEW] Opsi Custom (isi manual) untuk Bleed Area & Margin Kertas
    createDropdown('paperCutLeftPanel', 'Bleed Area', bleedOptionsFor(s), s.bleed, v=>{paperCutState.bleed=v;}, ICONS.bleed);
    if (s.bleed === 'custom') createNumberInput('paperCutLeftPanel', 'Nilai Bleed (mm)', paperCutState.bleedCustom, v=>{paperCutState.bleedCustom=v;}, 0, ICONS.bleed, 50, 0.5);
    createDropdown('paperCutLeftPanel', 'Margin Kertas', marginOptionsFor(s), s.margin, v=>{paperCutState.margin=v;}, ICONS.margin);
    if (s.margin === 'custom') createNumberInput('paperCutLeftPanel', 'Nilai Margin (mm)', paperCutState.marginCustom, v=>{paperCutState.marginCustom=v;}, 0, ICONS.margin, 100, 0.5);
  }

  // Right panel
  const right = document.getElementById('paperCutRightPanel');
  right.innerHTML = '';

  const fitsOnPaper = cut.totalPerPage > 0;
  const sisaPcs = cut.totalSheets * cut.totalPerPage - totalPcs;

  // Alert when page exceeds print paper
  if (!fitsOnPaper && !paperCutAlertShown) {
    paperCutAlertShown = true;
    const pgW = pageDim.w + bleed*2, pgH = pageDim.h + bleed*2;
    showToast(`Ukuran halaman (${fmtMm(pgW)} x ${fmtMm(pgH)}) melebihi Kertas Print ${s.printPaper} (${fmtMm(ppDim.w)} x ${fmtMm(ppDim.h)})!`, 'warning');
  }
  if (fitsOnPaper) { paperCutAlertShown = false; }

  let cardsHtml = `<div class="studio-result-cards">
    <div class="studio-result-card card-blue studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${cut.totalPerPage} pcs');">
      <div class="studio-result-card-top"><span class="studio-result-label">Pcs Per Lembar</span></div>
      <div class="studio-result-value">${cut.totalPerPage} pcs</div>
      <div class="studio-result-sub">${cut.cols}×${cut.rows} grid</div>
      <div class="studio-result-bar"></div>
    </div>
    <div class="studio-result-card card-sky studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${cut.totalSheets} lbr');">
      <div class="studio-result-card-top"><span class="studio-result-label">Total Lembar Cetak</span></div>
      <div class="studio-result-value">${cut.totalSheets} lbr</div>
      <div class="studio-result-sub">${totalPcs} pcs ÷ ${cut.totalPerPage}/lbr</div>
      <div class="studio-result-bar"></div>
    </div>
    <div class="studio-result-card card-rose studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${totalPcs} pcs');">
      <div class="studio-result-card-top"><span class="studio-result-label">Total Pcs</span></div>
      <div class="studio-result-value">${totalPcs} pcs</div>
      <div class="studio-result-sub">Jumlah yang dicetak</div>
      <div class="studio-result-bar"></div>
    </div>
    <div class="studio-result-card ${cut.utilization>=70?'card-emerald':'card-amber'} studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${cut.utilization.toFixed(1)}%');">
      <div class="studio-result-card-top"><span class="studio-result-label">Efisiensi Kertas</span></div>
      <div class="studio-result-value">${cut.utilization.toFixed(1)}%</div>
      <div class="studio-result-sub">Sisa: ${cut.wasteArea.toFixed(0)}mm²</div>
      <div class="studio-result-bar"></div>
    </div>
    ${sisaPcs>0 ? `<div class="studio-result-card card-violet studio-result-card-anim">
      <div class="studio-result-card-top"><span class="studio-result-label">Sisa Slot Kosong</span></div>
      <div class="studio-result-value">${sisaPcs} pcs</div>
      <div class="studio-result-sub">Bisa diisi pcs lain</div>
      <div class="studio-result-bar"></div>
    </div>` : ''}
  </div>`;
  right.innerHTML = cardsHtml;

  // Copy All button — Feature 4
  const paperCopyText = [];
  paperCopyText.push(`Pcs Per Lembar: ${cut.totalPerPage} pcs (${cut.cols}×${cut.rows} grid)`);
  paperCopyText.push(`Total Lembar Cetak: ${cut.totalSheets} lbr`);
  paperCopyText.push(`Total Pcs: ${totalPcs} pcs`);
  paperCopyText.push(`Efisiensi Kertas: ${cut.utilization.toFixed(1)}%`);
  if (sisaPcs > 0) paperCopyText.push(`Sisa Slot Kosong: ${sisaPcs} pcs`);

  // Build export info lines
  paperCutExportInfo = [];
  paperCutExportInfo.push(`Ukuran Halaman: ${fmtDimWxH(pageDim.w,pageDim.h)} (${s.position})`);
  if (Number(bleed)>0) paperCutExportInfo.push(`Halaman + Bleed: ${fmtDimWxH(pageDim.w+bleed*2,pageDim.h+bleed*2)}`);
  paperCutExportInfo.push(`Pcs Per Lembar: ${cut.totalPerPage} pcs (${cut.cols}×${cut.rows} grid)`);
  paperCutExportInfo.push(`Total Lembar Cetak: ${cut.totalSheets} lbr`);
  paperCutExportInfo.push(`Total Pcs: ${totalPcs}`);
  paperCutExportInfo.push(`Efisiensi Kertas: ${cut.utilization.toFixed(1)}%`);
  if (sisaPcs > 0) paperCutExportInfo.push(`Sisa Slot Kosong: ${sisaPcs} pcs`);
  paperCutExportInfo.push(`Print Paper: ${fmtDimWxH(ppDim.w,ppDim.h)} (${s.printPaper} ${s.paperPosition})`);
  if (Number(bleed)>0) paperCutExportInfo.push(`Bleed: ${bleed}mm`);
  if (Number(margin)>0) paperCutExportInfo.push(`Margin: ${margin}mm`);

  right.innerHTML += `<button class="studio-copy-all-btn" data-copy="${paperCopyText.join('&#10;').replace(/"/g,'&quot;')}" onclick="copyText(this.dataset.copy)"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy Semua Hasil</button><div class="studio-copy-all-spacer"></div>`;

  // Preview SVG — always render at auto-fit scale; zoom/pan handled by CSS transform
  const ppW = ppDim.w, ppH = ppDim.h;
  const scale = Math.min(540/ppW, 380/ppH, 2);
  _previewState.papercut.autoFitScale = scale;
  const svgW = ppW*scale, svgH = ppH*scale;

  // [Bug #7] All SVG colors adapt to dark mode
  const padX = 20;
  const _bg = isDark ? '#0E1628' : '#EEF2F7';
  const _paper = isDark ? '#ffffff' : '#faf8f5';
  const _paperS = isDark ? '#5a6080' : '#c9c2b8';
  const _grid = isDark ? '#3a3f5a' : '#e7e3de';
  const _label = isDark ? '#94a3b8' : '#475569';
  const _txt = isDark ? '#c7d2fe' : '#1e3a5f';
  const _txtS = isDark ? '#a5b4fc' : '#3b5f8f';
  const _pageOdd = isDark ? '#3b82f6' : '#60a5fa';
  const _pageEven = isDark ? '#2563eb' : '#93c5fd';
  const _pageStroke = isDark ? '#60a5fa' : '#3b82f6';
  const _bleedS = isDark ? '#c4707e' : '#e88fa0';
  const _marginS = isDark ? '#8b5cf6' : '#a78bfa';
  const _topLabel = isDark ? '#60A5FA' : '#2563EB';
  const _bleedFill = isDark ? 'rgba(244,163,177,0.3)' : 'rgba(244,163,177,0.18)';
  const _marginFill = isDark ? 'rgba(196,181,253,0.15)' : 'rgba(196,181,253,0.1)';
  const _bleedLegend = isDark ? 'rgba(244,163,177,0.5)' : 'rgba(244,163,177,0.4)';
  const _marginLegend = isDark ? 'rgba(167,139,250,0.5)' : 'rgba(167,139,250,0.4)';

  let svgContent = `<rect x="${-padX}" y="-20" width="${svgW+padX*2}" height="${svgH+40}" fill="${_bg}"/>`;
  svgContent += `<rect x="0" y="0" width="${svgW}" height="${svgH}" fill="${_paper}" rx="4" stroke="${_paperS}" stroke-width="1"/>`;
  [0.25,0.5,0.75].forEach(pct => {
    svgContent += `<line x1="${svgW*pct}" y1="0" x2="${svgW*pct}" y2="${svgH}" stroke="${_grid}" stroke-width="0.4" stroke-dasharray="6,4"/>`;
    svgContent += `<line x1="0" y1="${svgH*pct}" x2="${svgW}" y2="${svgH*pct}" stroke="${_grid}" stroke-width="0.4" stroke-dasharray="6,4"/>`;
  });

  // Margin area
  if (margin > 0) svgContent += `<rect x="${margin*scale}" y="${margin*scale}" width="${(ppW-margin*2)*scale}" height="${(ppH-margin*2)*scale}" fill="${_marginFill}" stroke="${_marginS}" stroke-width="0.8" stroke-dasharray="5,3"/>`;

  // Pages
  for (let r=0; r<cut.rows; r++) {
    for (let c=0; c<cut.cols; c++) {
      const x = (cut.offsetX + c*cut.pageW)*scale;
      const y = (cut.offsetY + r*cut.pageH)*scale;
      const pw = cut.pageW*scale, ph = cut.pageH*scale;
      const pageIdx = r*cut.cols+c+1;

      if (bleed>0) svgContent += `<rect x="${x}" y="${y}" width="${pw}" height="${ph}" fill="${_bleedFill}" stroke="${_bleedS}" stroke-width="0.5" stroke-dasharray="4,2"/>`;

      const innerX = x+bleed*scale, innerY = y+bleed*scale;
      const innerW = pageDim.w*scale, innerH = pageDim.h*scale;
      const isEven = (r+c)%2===0;

      svgContent += `<rect x="${innerX}" y="${innerY}" width="${innerW}" height="${innerH}" fill="${isEven?_pageOdd:_pageEven}" stroke="${_pageStroke}" stroke-width="1" rx="2"/>`;
      if (scale>=0.3) {
        svgContent += `<text x="${innerX+innerW/2}" y="${innerY+innerH/2}" text-anchor="middle" font-size="${Math.min(11*scale,14)}" fill="${_txt}" font-weight="600">Pcs ${pageIdx}</text>`;
        svgContent += `<text x="${innerX+innerW/2}" y="${innerY+innerH/2+14*Math.min(scale,1.2)}" text-anchor="middle" font-size="${Math.min(9*scale,11)}" fill="${_txtS}">${fmtDimWxH(pageDim.w,pageDim.h)}</text>`;
      }
    }
  }

  // Labels
  svgContent += `<text x="${svgW/2}" y="${svgH+14}" text-anchor="middle" font-size="10" fill="${_label}" font-weight="600">${fmtDimWxH(ppW,ppH)}</text>`;
  if (cut.totalPerPage>0) svgContent += `<text x="${svgW/2}" y="14" text-anchor="middle" font-size="10" fill="${_topLabel}" font-weight="600">${cut.cols}×${cut.rows} = ${cut.totalPerPage} pcs/lembar</text>`;

  // ── Overlap Warning: area that exceeds print paper ──
  if (!fitsOnPaper) {
    const pgW = pageDim.w + bleed*2, pgH = pageDim.h + bleed*2;
    const usableW = ppW - margin*2, usableH = ppH - margin*2;
    const cx0 = margin*scale, cy0 = margin*scale;
    if (pgW > usableW) {
      const overX = cx0 + usableW*scale;
      const overW = Math.min((pgW - usableW)*scale, svgW - overX);
      if (overW > 0) svgContent += `<rect class="studio-overlap-area" x="${overX}" y="${cy0}" width="${overW}" height="${usableH*scale}" fill="rgba(239,68,68,0.45)" stroke="#ef4444" stroke-width="1" stroke-dasharray="4,3"/>`;
    }
    if (pgH > usableH) {
      const overY = cy0 + usableH*scale;
      const overH = Math.min((pgH - usableH)*scale, svgH - overY);
      if (overH > 0) svgContent += `<rect class="studio-overlap-area" x="${cx0}" y="${overY}" width="${usableW*scale}" height="${overH}" fill="rgba(239,68,68,0.45)" stroke="#ef4444" stroke-width="1" stroke-dasharray="4,3"/>`;
    }
    if (pgW > usableW && pgH > usableH) {
      const overX = cx0 + usableW*scale;
      const overY = cy0 + usableH*scale;
      const overW = Math.min((pgW - usableW)*scale, svgW - overX);
      const overH = Math.min((pgH - usableH)*scale, svgH - overY);
      if (overW > 0 && overH > 0) svgContent += `<rect class="studio-overlap-area" x="${overX}" y="${overY}" width="${overW}" height="${overH}" fill="rgba(239,68,68,0.55)" stroke="#ef4444" stroke-width="1" stroke-dasharray="4,3"/>`;
    }
  }

  const zoomBtns = [{l:'Fit',v:0},{l:'25%',v:0.25},{l:'50%',v:0.5},{l:'75%',v:0.75},{l:'100%',v:1}];

  // Apply zoom/pan transform immediately to avoid flash-to-fit
  const _pst = _previewState.papercut;
  const _psvgStyle = `display:block;max-width:100%;height:auto;font-family:'Poppins',sans-serif;transform:translate(${_pst.panX}px,${_pst.panY}px) scale(${_pst.zoom});transform-origin:center center`;
  // [Samakan Shuffle] chip legend Bleed/Margin — tampil hanya bila nilai > 0 (gaya sp-zone-legend)
  const _pcLegend = (bleed > 0 || margin > 0)
    ? `<div class="sp-zone-legend" style="margin:2px 0 0">${bleed > 0 ? `<span class="sp-legend-chip"><i style="background:#ef4444"></i>Bleed Area ${bleed} mm</span>` : ''}${margin > 0 ? `<span class="sp-legend-chip"><i style="background:#f59e0b"></i>Margin Kertas ${margin} mm</span>` : ''}</div>`
    : '';
  // [Samakan Shuffle] subjudul deskriptif ala sp-slide-sub
  const _pcSub = `Pratinjau potong ${cut.cols}×${cut.rows} — ${cut.totalPerPage} pcs per lembar, total ${cut.totalSheets} lembar cetak`;
  right.innerHTML += `
    <div class="studio-preview-container">
      <div class="studio-preview-header">
        <div style="min-width:0">
          <div class="studio-preview-title">Layout Potong — ${cut.cols}×${cut.rows} Grid</div>
        </div>
        <span class="sp-slide-badge sp-badge-back">${s.printPaper === 'Custom' ? 'CUSTOM' : s.printPaper} &middot; ${s.paperPosition}</span>
        ${_pcLegend}
      </div>
      <div class="studio-preview-body" id="paperCutPreviewBody"><svg width="${svgW+padX*2}" height="${svgH+40}" viewBox="${-padX} -20 ${svgW+padX*2} ${svgH+40}" role="img" aria-label="Preview layout potong kertas ${cut.cols}×${cut.rows}" style="${_psvgStyle}"><title>Paper Cut Layout Preview - ${cut.cols}×${cut.rows}</title>${svgContent}</svg></div>
      <div class="studio-zoom-bar">
        <div class="studio-zoom-buttons">${zoomBtns.map(z=>`<button class="studio-zoom-btn${paperCutZoom===z.v?' active':''}" onclick="paperCutZoom=${z.v};_previewState.papercut.zoom=${z.v===0?1:z.v/(_previewState.papercut.autoFitScale||1)};_previewState.papercut.panX=0;_previewState.papercut.panY=0;renderAll(true)">${z.l}</button>`).join('')}</div>
        <div style="display:flex;gap:6px">
        <button class="studio-export-badge png-badge" onclick="exportPng('paperCutPreviewBody','paper-cut-layout.png',paperCutExportInfo)" title="Export PNG"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>PNG</button>
        <button class="studio-export-badge pdf-badge" onclick="exportPdf('paperCutPreviewBody','paper-cut-layout.pdf',paperCutExportInfo)" title="Export PDF"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>PDF</button>
        </div>
      </div>
      <div class="studio-preview-footer"><div class="sp-slide-info">
        <div class="sp-slide-info-row"><span class="sp-slide-info-label">Kertas Print</span><span class="sp-slide-info-value">${s.printPaper === 'Custom' ? 'Custom — ' + fmtDimWxH(Number(s.customPrintW)||0, Number(s.customPrintH)||0) : s.printPaper + ' — ' + fmtDimWxH(ppDim.w, ppDim.h)}</span></div>
        <div class="sp-slide-info-row"><span class="sp-slide-info-label">Ukuran Desain</span><span class="sp-slide-info-value">${fmtDimWxH(pageDim.w, pageDim.h)}</span></div>
        <div class="sp-slide-info-row"><span class="sp-slide-info-label">Posisi Kertas</span><span class="sp-slide-info-value">${s.paperPosition}${s.paperPositionAuto !== false && !s.chacaRel ? ' (Auto)' : ''}${s.chacaRel ? ' · Chaca/Rel' : ''}</span></div>
        <div class="sp-slide-info-row"><span class="sp-slide-info-label">Grid</span><span class="sp-slide-info-value">${cut.cols} kolom × ${cut.rows} baris</span></div>
      </div></div>
    </div>`;

  // Info cards
  let infoHtml = '<div style="margin-top:16px">';
  if (!fitsOnPaper) {
    infoHtml += `<div class="studio-info-card studio-info-warning studio-info-card-anim"><div class="studio-info-card-header"><span class="studio-info-card-title">Peringatan</span></div><div class="studio-info-card-body">
      <div class="studio-info-row"><span class="studio-info-row-label">Status</span><span class="studio-info-row-value" style="color:#f59e0b">Halaman tidak muat di kertas print</span></div>
      <div class="studio-info-row"><span class="studio-info-row-label">Ukuran Halaman</span><span class="studio-info-row-value">${fmtDimWxH(pageDim.w+bleed*2,pageDim.h+bleed*2)}</span></div>
      <div class="studio-info-row"><span class="studio-info-row-label">Kertas Print</span><span class="studio-info-row-value">${fmtDimWxH(ppW,ppH)}</span></div></div></div>`;
  }

  infoHtml += `<div class="studio-info-card studio-info-card-anim ${fitsOnPaper?'studio-info-success':'studio-info-warning'}"><div class="studio-info-card-header"><span class="studio-info-card-title">Info Potong Kertas</span></div><div class="studio-info-card-body">
    <div class="studio-info-row"><span class="studio-info-row-label">Kertas Print</span><span class="studio-info-row-value">${fmtDimWxH(ppW,ppH)}</span></div>
    <div class="studio-info-row"><span class="studio-info-row-label">Ukuran Halaman</span><span class="studio-info-row-value">${fmtDimWxH(pageDim.w,pageDim.h)}</span></div>
    <div class="studio-info-row"><span class="studio-info-row-label">Halaman + Bleed</span><span class="studio-info-row-value">${fmtDimWxH(pageDim.w+bleed*2,pageDim.h+bleed*2)}</span></div>
    <div class="studio-info-row"><span class="studio-info-row-label">Grid</span><span class="studio-info-row-value">${cut.cols}×${cut.rows} = ${cut.totalPerPage} pcs/lembar</span></div>
    <div class="studio-info-row"><span class="studio-info-row-label">Total Lembar Cetak</span><span class="studio-info-row-value">${cut.totalSheets} lembar</span></div>
    <div class="studio-info-row"><span class="studio-info-row-label">Efisiensi</span><span class="studio-info-row-value" style="color:${cut.utilization>=70?'#10b981':'#f59e0b'}">${cut.utilization.toFixed(1)}%</span></div>
    <div class="studio-info-row"><span class="studio-info-row-label">Margin</span><span class="studio-info-row-value">${margin}mm</span></div></div></div>`;

  // Tips Bleed vs Margin
  const bleedVal = Number(bleed)||0;
  const tipIcon = isDark
    ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`
    : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
  const tipBorderColor = isDark ? '#92400e' : '#f59e0b';
  infoHtml += `<div class="studio-info-card studio-info-card-anim" style="border-color:${tipBorderColor};border-left:4px solid ${tipBorderColor}"><div class="studio-info-card-header"><span class="studio-info-card-icon">${tipIcon}</span><span class="studio-info-card-title">Tips Bleed & Margin</span></div><div class="studio-info-card-body" style="font-size:12px;line-height:1.8">
    <div style="margin-bottom:8px"><b style="color:${isDark?'#fcd34d':'#b45309'}">Cetak jumlah banyak (Pcs besar):</b> Gunakan <b>Bleed Area</b> agar hasil potong presisi — area bleed mencegah munculnya garis putih di tepi akibat pergeseran saat potong.${bleedVal===0?` <span style="color:#ef4444;font-weight:600">Bleed saat ini 0mm — disarankan min. 3mm.</span>`:''}</div>
    <div><b style="color:${isDark?'#6ee7b7':'#047857'}">Cetak sedikit (beberapa lembar):</b> Cukup gunakan <b>Area Margin</b> sebagai batas aman — tanpa bleed, kertas lebih hemat dan proses lebih simpel.${margin===0?` <span style="color:#ef4444;font-weight:600">Margin saat ini 0mm — disarankan min. 3mm.</span>`:''}</div>
  </div></div>`;

  infoHtml += `<div class="studio-info-card studio-info-card-anim"><div class="studio-info-card-header"><span class="studio-info-card-title">Info Warna</span></div><div class="studio-info-card-body"><div class="studio-legend">
    <div class="studio-legend-item"><span class="studio-legend-dot" style="background:${_paper};border:1px solid ${_paperS}"></span><span class="studio-legend-label">Kertas Print</span></div>
    <div class="studio-legend-item"><span class="studio-legend-dot" style="background:${_pageOdd}"></span><span class="studio-legend-label">Halaman (Ganjil)</span></div>
    <div class="studio-legend-item"><span class="studio-legend-dot" style="background:${_pageEven}"></span><span class="studio-legend-label">Halaman (Genap)</span></div>
    <div class="studio-legend-item"><span class="studio-legend-dot" style="background:${_bleedLegend}"></span><span class="studio-legend-label">Bleed Area</span></div>
    <div class="studio-legend-item"><span class="studio-legend-dot" style="background:${_marginLegend}"></span><span class="studio-legend-label">Margin</span></div>
  </div>
  </div></div>`;
  infoHtml += '</div>';
  right.innerHTML += infoHtml;

  // Setup preview interaction — use requestAnimationFrame for immediate but safe setup
  requestAnimationFrame(() => {
    setupPreviewInteraction('paperCutPreviewBody', 'papercut');
  });
}

// ============================================================
// Shared: render SVG element to an off-screen canvas (8x HD)
// Resolves CSS vars, clones SVG, draws image + info footer.
// Calls `callback(canvas, { origW, origH, infoH, svgUrl })` on success.
// ============================================================
function renderSvgToCanvas(elementId, infoLines, callback) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const svg = el.querySelector('svg');
  if (!svg) return;

  // [Bug #7] Replace CSS var() references with actual computed values
  const computedStyle = getComputedStyle(document.documentElement);
  const previewBg = computedStyle.getPropertyValue('--studio-preview-bg').trim() || '#EEF2F7';

  // Ultra HD Export — render SVG at 8x native resolution for crisp output
  const HD_SCALE = 8;
  const origW = svg.width.baseVal.value;
  const origH = svg.height.baseVal.value;

  // Calculate info footer height at 1x scale
  const INFO_PAD = 18;
  const INFO_LINE_H = 20;
  const INFO_TITLE_H = 28;
  const infoH = infoLines.length > 0 ? INFO_PAD + INFO_TITLE_H + infoLines.length * INFO_LINE_H + INFO_PAD : 0;

  const clonedSvg = svg.cloneNode(true);
  clonedSvg.style.transform = ''; // Remove zoom/pan transform for export
  clonedSvg.style.transformOrigin = '';
  clonedSvg.setAttribute('width', origW * HD_SCALE);
  clonedSvg.setAttribute('height', origH * HD_SCALE);
  let svgData = new XMLSerializer().serializeToString(clonedSvg);
  svgData = svgData.replace(/var\(--studio-preview-bg\s*,\s*[^)]+\)/g, previewBg);

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = origW * HD_SCALE;
  canvas.height = (origH + infoH) * HD_SCALE;
  const img = new Image();
  // [Bug Fix] Use UTF-8 safe encoding for SVG that may contain non-ASCII chars
  const svgBlob = new Blob([svgData], {type: 'image/svg+xml;charset=utf-8'});
  const svgUrl = URL.createObjectURL(svgBlob);
  img.onload = function() {
    // White background
    ctx.fillStyle = isDark ? '#111A2E' : '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Draw SVG image at top
    ctx.drawImage(img, 0, 0, origW * HD_SCALE, origH * HD_SCALE);

    // Draw info footer
    if (infoLines.length > 0) {
      const fy = origH * HD_SCALE;
      // Info background
      ctx.fillStyle = isDark ? '#141829' : '#f5f6fa';
      ctx.fillRect(0, fy, canvas.width, infoH * HD_SCALE);
      // Separator line
      ctx.strokeStyle = isDark ? '#3a3f55' : '#d0d5e0';
      ctx.lineWidth = 2 * HD_SCALE;
      ctx.beginPath();
      ctx.moveTo(0, fy);
      ctx.lineTo(canvas.width, fy);
      ctx.stroke();
      // Title
      const titleSize = 13 * HD_SCALE;
      ctx.font = `800 ${titleSize}px Poppins, Arial, sans-serif`;
      ctx.fillStyle = isDark ? '#60A5FA' : '#2563EB';
      ctx.fillText('LAYOUT INFO', 20 * HD_SCALE, fy + (INFO_PAD + INFO_TITLE_H - 6) * HD_SCALE);
      // Info lines
      const lineSize = 12 * HD_SCALE;
      ctx.font = `500 ${lineSize}px Poppins, Arial, sans-serif`;
      ctx.fillStyle = isDark ? '#c4c9e0' : '#3a3f55';
      infoLines.forEach((line, i) => {
        ctx.fillText(line, 20 * HD_SCALE, fy + (INFO_PAD + INFO_TITLE_H + (i + 1) * INFO_LINE_H - 4) * HD_SCALE);
      });
    }

    callback(canvas, { origW, origH, infoH, svgUrl });
  };
  img.onerror = function() { URL.revokeObjectURL(svgUrl); showToast('Export failed — try again', 'warning'); };
  img.src = svgUrl;
}

// ============================================================
// Export PNG [Bug #7] — resolve CSS vars before export
// ============================================================
function exportPng(elementId, filename, infoLines=[]) {
  renderSvgToCanvas(elementId, infoLines, function(canvas, { svgUrl }) {
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/png', 1.0);
    link.click();
    URL.revokeObjectURL(svgUrl);
    showToast('PNG Ultra HD exported!');
  });
}

// ============================================================
// Render Perhitungan ISI Buku Studio
// ============================================================
function renderKalkulatorIsi(skipLeftPanel=false) {
  const s = kalkulatorIsiState;
  const totalPages = Number(s.jumlahHalaman) || 0;
  const pagesPerSheet = s.duaSisi ? 2 : 1;
  const totalLembaran = totalPages > 0 ? Math.ceil(totalPages / pagesPerSheet) : 0;
  // NOTE: effectiveTotalPages & blankPages are computed later (after pagesPerPrintSheet)

  // Book dimension (with position orientation)
  const bookDim = s.bookSize === 'Custom' ? {w:Number(s.customW)||210, h:Number(s.customH)||297} : (function() {
    const base = BOOK_SIZE_MAP[s.bookSize];
    return base ? (s.position === 'Landscape' ? {w:base.h,h:base.w} : {w:base.w,h:base.h}) : {w:210,h:297};
  })();

  // Print paper layout (imposition)
  // Bleed & margin follow Cut Studio convention:
  //   - pageW/pageH include per-page bleed (bookDim + 2*bleed), used for layout & visualization
  //   - imposition usable area = ppDim - 2*margin (bleed is INSIDE margin, not added on top)
  const bleed = resolveBleed(s);
  const margin = resolveMargin(s);
  const pageW = bookDim.w + bleed * 2;
  const pageH = bookDim.h + bleed * 2;
  const ppBase = s.printPaper === 'Custom' ? {w:Number(s.customPrintW)||480, h:Number(s.customPrintH)||320} : (PRINT_PAPER_MAP[s.printPaper] || {w:480,h:320});

  // Auto-pick paper orientation that yields the most pages per side
  // (tie-breaker: higher utilization, then Landscape as final fallback)
  function fitFor(orient) {
    const w = orient === 'Landscape' ? ppBase.w : ppBase.h;
    const h = orient === 'Landscape' ? ppBase.h : ppBase.w;
    const uW = Math.max(0, w - margin * 2);
    const uH = Math.max(0, h - margin * 2);
    const c = pageW > 0 ? Math.max(0, Math.floor(uW / pageW)) : 0;
    const r = pageH > 0 ? Math.max(0, Math.floor(uH / pageH)) : 0;
    const slots = c * r;
    const used = c * pageW * r * pageH;
    const total = w * h;
    const util = total > 0 ? (used / total) * 100 : 0;
    return {cols:c, rows:r, slots, util};
  }
  const fitL = fitFor('Landscape');
  const fitP = fitFor('Portrait');
  const autoPos = (fitP.slots > fitL.slots) ? 'Portrait'
                : (fitL.slots > fitP.slots) ? 'Landscape'
                : (fitP.util > fitL.util) ? 'Portrait'
                : 'Landscape';
  if (s.paperPositionAuto !== false) { s.paperPosition = autoPos; }

  const ppDim = s.paperPosition === 'Landscape' ? {w:ppBase.w, h:ppBase.h} : {w:ppBase.h, h:ppBase.w};
  // Usable area for grid = paper minus margin on both sides (bleed sits inside this)
  const usableW = Math.max(0, ppDim.w - margin * 2);
  const usableH = Math.max(0, ppDim.h - margin * 2);
  const cols = pageW > 0 ? Math.max(0, Math.floor(usableW / pageW)) : 0;
  const rows = pageH > 0 ? Math.max(0, Math.floor(usableH / pageH)) : 0;
  const pagesPerSide = cols * rows;
  const pagesPerPrintSheet = pagesPerSide * pagesPerSheet;
  const printSheetsNeeded = pagesPerPrintSheet > 0 ? Math.ceil(totalPages / pagesPerPrintSheet) : 0;
  // Effective total = rounded up to fill complete lembar cetak (covers 2-sisi rounding implicitly)
  const effectiveTotalPages = printSheetsNeeded * pagesPerPrintSheet;
  const blankPages = Math.max(0, effectiveTotalPages - totalPages);
  // Blank equivalents in lembar units (alternative ways to fill the blank slots)
  const blankLembar2Sisi = Math.ceil(blankPages / 2);  // each lembar 2-sisi holds 2 hal
  const blankLembar1Sisi = blankPages;                 // each lembar 1-sisi holds 1 hal
  const usedW = cols * pageW, usedH = rows * pageH;
  const totalArea = ppDim.w * ppDim.h;
  const usedArea = usedW * usedH;
  const utilization = totalArea > 0 ? (usedArea / totalArea) * 100 : 0;
  const wasteArea = Math.max(0, totalArea - usedArea);

  // [NEW] Tebal Punggung & Spiral Number — pakai totalLembaran sebagai jumlah lembar isi
  // Mengikuti konvensi mode COVER (calcSpineThickness & getSpiralInfo)
  const isiSpine       = calcSpineThickness(totalLembaran, s.paperIsi);
  const isiSpineInfo   = PAPER_ISI_MAP[s.paperIsi] || {name:'-'};
  const isiSpiralInfo  = (s.jilid === 'spiral') ? getSpiralInfo(isiSpine) : {number:null, outOfRange:true};

  // Left panel — rebuild only on structural change
  if (!skipLeftPanel) {
    const left = document.getElementById('kalkulatorIsiLeftPanel');
    left.innerHTML = '';

    createSectionTitle('kalkulatorIsiLeftPanel', 'Ukuran Buku');
    createDropdown('kalkulatorIsiLeftPanel', 'Ukuran Buku', BOOK_SIZES, s.bookSize, v=>{kalkulatorIsiState.bookSize=v;}, ICONS.book);
    createDropdown('kalkulatorIsiLeftPanel', 'Posisi', [{value:'Portrait',label:'Portrait'},{value:'Landscape',label:'Landscape'}], s.position, v=>{kalkulatorIsiState.position=v;}, ICONS.portrait);
    if (s.bookSize === 'Custom') {
      createDimensionInput('kalkulatorIsiLeftPanel', '', s.customW, s.customH, v=>{kalkulatorIsiState.customW=v;}, v=>{kalkulatorIsiState.customH=v;});
    }

    createSectionTitle('kalkulatorIsiLeftPanel', 'Halaman');
    createNumberInput('kalkulatorIsiLeftPanel', 'Jumlah Halaman', s.jumlahHalaman, v=>{kalkulatorIsiState.jumlahHalaman=v;}, 1, ICONS.sheets, 99999);

    createSectionTitle('kalkulatorIsiLeftPanel', 'Cetak');
    createToggle('kalkulatorIsiLeftPanel', '2 Sisi (On/Off)', !!s.duaSisi, v=>{kalkulatorIsiState.duaSisi=v;}, ICONS.twoSides, 'ON = 1 lembar untuk 2 halaman, OFF = 1 lembar untuk 1 halaman');

    // [NEW] Kertas Isi & Jilid — dipakai untuk kartu Tebal Punggung & Spiral Number
    createSectionTitle('kalkulatorIsiLeftPanel', 'Kertas Isi');
    createDropdown('kalkulatorIsiLeftPanel', 'Kertas Isi', PAPER_ISI_OPTIONS, s.paperIsi, v=>{kalkulatorIsiState.paperIsi=v;}, ICONS.paper);
    createDropdown('kalkulatorIsiLeftPanel', 'Jilid', JILID_OPTIONS, s.jilid, v=>{kalkulatorIsiState.jilid=v;}, ICONS.jilid);

    createSectionTitle('kalkulatorIsiLeftPanel', 'Kertas Print');
    createDropdown('kalkulatorIsiLeftPanel', 'Kertas Print', PRINT_PAPER_OPTIONS, s.printPaper, v=>{kalkulatorIsiState.printPaper=v;}, ICONS.printPaper);
    if (s.printPaper === 'Custom') {
      createDimensionInput('kalkulatorIsiLeftPanel', '', s.customPrintW, s.customPrintH, v=>{kalkulatorIsiState.customPrintW=v;}, v=>{kalkulatorIsiState.customPrintH=v;});
    }
    createDropdown('kalkulatorIsiLeftPanel', 'Posisi Kertas', [{value:'Auto',label:'Auto'},{value:'Landscape',label:'Landscape'},{value:'Portrait',label:'Portrait'}], (s.paperPositionAuto!==false?'Auto':s.paperPosition), v=>{ if(v==='Auto'){kalkulatorIsiState.paperPositionAuto=true;} else {kalkulatorIsiState.paperPositionAuto=false; kalkulatorIsiState.paperPosition=v;} }, ICONS.landscape);
    // [NEW] Opsi Custom (isi manual) untuk Bleed Area & Margin Kertas
    createDropdown('kalkulatorIsiLeftPanel', 'Bleed Area', bleedOptionsFor(s), s.bleed, v=>{kalkulatorIsiState.bleed=v;}, ICONS.bleed);
    if (s.bleed === 'custom') createNumberInput('kalkulatorIsiLeftPanel', 'Nilai Bleed (mm)', kalkulatorIsiState.bleedCustom, v=>{kalkulatorIsiState.bleedCustom=v;}, 0, ICONS.bleed, 50, 0.5);
    createDropdown('kalkulatorIsiLeftPanel', 'Margin Kertas', marginOptionsFor(s), s.margin, v=>{kalkulatorIsiState.margin=v;}, ICONS.margin);
    if (s.margin === 'custom') createNumberInput('kalkulatorIsiLeftPanel', 'Nilai Margin (mm)', kalkulatorIsiState.marginCustom, v=>{kalkulatorIsiState.marginCustom=v;}, 0, ICONS.margin, 100, 0.5);
  }

  // Right panel — result cards
  const right = document.getElementById('kalkulatorIsiRightPanel');
  right.innerHTML = '';
  let cardsHtml = '<div class="studio-result-cards">';

  // 1) Total Lembaran
  cardsHtml += `<div class="studio-result-card card-blue studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${totalLembaran} lembaran');">
    <div class="studio-result-card-top"><span class="studio-result-label">Total Lembaran</span></div>
    <div class="studio-result-value">${totalLembaran}</div>
    <div class="studio-result-sub">${pagesPerSheet} hal/lembar</div><div class="studio-result-bar"></div></div>`;

  // 2) Total Halaman
  // [BUG FIX] Saat layout tidak muat (pagesPerPrintSheet = 0), effectiveTotalPages = 0
  // yang membingungkan user karena menginput mis. 20 halaman tapi kartu tampil 0.
  // Tampilkan totalPages (input) saat layout tidak muat; tampilkan effectiveTotalPages
  // (sudah dibulatkan ke lembar cetak) saat layout muat.
  const totalHalamanDisplay = (pagesPerPrintSheet > 0) ? effectiveTotalPages : totalPages;
  const totalHalamanSub = (pagesPerPrintSheet > 0)
    ? (effectiveTotalPages > totalPages ? `${effectiveTotalPages - totalPages} blank` : 'Halaman')
    : 'Tidak termasik lembar cetak';
  cardsHtml += `<div class="studio-result-card card-sky studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${totalHalamanDisplay} hal');">
    <div class="studio-result-card-top"><span class="studio-result-label">Total Halaman</span></div>
    <div class="studio-result-value">${totalHalamanDisplay}</div>
    <div class="studio-result-sub">${totalHalamanSub}</div><div class="studio-result-bar"></div></div>`;

  // (opsional) Blank Kosongan — tetap di antara Total Halaman dan Hal/Lembar Cetak
  if (blankPages > 0) {
    cardsHtml += `<div class="studio-result-card card-amber studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${blankPages} hal = ${blankLembar2Sisi} lembar 2 sisi atau ${blankLembar1Sisi} lembar 1 sisi');">
      <div class="studio-result-card-top"><span class="studio-result-label">Blank Kosongan</span></div>
      <div class="studio-result-value">${blankPages}</div>
      <div class="studio-result-sub">${blankLembar2Sisi} lembar 2 sisi atau ${blankLembar1Sisi} lembar 1 sisi</div><div class="studio-result-bar"></div></div>`;
  }

  // 3) Hal/Lembar Cetak  &  4) Lembar Cetak
  if (pagesPerPrintSheet > 0) {
    cardsHtml += `<div class="studio-result-card card-violet studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${pagesPerPrintSheet} hal');">
      <div class="studio-result-card-top"><span class="studio-result-label">Hal/Lembar Cetak</span></div>
      <div class="studio-result-value">${pagesPerPrintSheet}</div>
      <div class="studio-result-sub">${cols}×${rows}${s.duaSisi?' × 2 sisi':''}</div><div class="studio-result-bar"></div></div>`;
    cardsHtml += `<div class="studio-result-card card-emerald studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${printSheetsNeeded} lbr');">
      <div class="studio-result-card-top"><span class="studio-result-label">Lembar Cetak</span></div>
      <div class="studio-result-value">${printSheetsNeeded}</div>
      <div class="studio-result-sub">${s.printPaper} per lembar</div><div class="studio-result-bar"></div></div>`;
  }

  // 5) Tebal Punggung — [NEW] mengikuti mode COVER
  if (totalLembaran > 0) {
    cardsHtml += `<div class="studio-result-card card-blue studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${fmtMm(isiSpine)}');">
      <div class="studio-result-card-top"><span class="studio-result-label">Tebal Punggung</span></div>
      <div class="studio-result-value">${fmtMm(isiSpine)}</div>
      <div class="studio-result-sub">${isiSpineInfo.name} · ${fmtSecondaryUnit(isiSpine)}</div><div class="studio-result-bar"></div></div>`;
  }

  // 6) Spiral Number — [NEW] hanya tampil jika jilid = spiral
  if (s.jilid === 'spiral') {
    if (isiSpiralInfo.outOfRange) {
      cardsHtml += `<div class="studio-result-card card-warning studio-result-card-anim" role="button" tabindex="0" onclick="copyText('Spiral: Di Luar Ukuran');">
        <div class="studio-result-card-top"><span class="studio-result-label">Spiral Number</span></div>
        <div class="studio-result-value" style="font-size:14px;">Di Luar Ukuran</div>
        <div class="studio-result-sub">Tebal punggung ${fmtMm(isiSpine)} melebihi max ${fmtMm(SPIRAL_SIZES[SPIRAL_SIZES.length-1].maxSpine)}</div><div class="studio-result-bar"></div></div>`;
    } else {
      const maxSpineForNum = SPIRAL_SIZES.find(x=>x.number===isiSpiralInfo.number)?.maxSpine || 0;
      cardsHtml += `<div class="studio-result-card card-violet studio-result-card-anim" role="button" tabindex="0" onclick="copyText('Spiral #${isiSpiralInfo.number}');">
        <div class="studio-result-card-top"><span class="studio-result-label">Spiral Number</span></div>
        <div class="studio-result-value">#${isiSpiralInfo.number}</div>
        <div class="studio-result-sub">Max ${fmtMm(maxSpineForNum)}</div><div class="studio-result-bar"></div></div>`;
    }
  }
  cardsHtml += '</div>';
  right.innerHTML = cardsHtml;

  // Info cards
  let infoHtml = '<div style="margin-top:16px">';

  // Imposition layout card
  if (pagesPerPrintSheet > 0) {
    // [BUG FIX] Label dinamis: tunjukkan mode Auto/Manual sebenarnya
    const posisiModeLabel = s.paperPositionAuto !== false ? 'Posisi Kertas (Auto)' : 'Posisi Kertas (Manual)';

    // [BUG FIX] Hitung orientasi terbaik & apakah pilihan user sub-optimal
    const bestOrient = (fitL.slots > fitP.slots) ? 'Landscape'
                     : (fitP.slots > fitL.slots) ? 'Portrait'
                     : (fitL.util >= fitP.util) ? 'Landscape' : 'Portrait';
    const bestSlots = Math.max(fitL.slots, fitP.slots);
    const currentSlots = s.paperPosition === 'Landscape' ? fitL.slots : fitP.slots;
    const isSuboptimal = (s.paperPositionAuto === false) && (bestSlots > currentSlots);

    infoHtml += `<div class="studio-info-card studio-info-card-anim"><div class="studio-info-card-header"><span class="studio-info-card-title">Layout Imposisi (per sisi)</span></div><div class="studio-info-card-body">
      <div class="studio-info-row"><span class="studio-info-row-label">Ukuran Buku + Bleed</span><span class="studio-info-row-value">${fmtMm(pageW)} × ${fmtMm(pageH)} (${fmtMm(bookDim.w)}+${fmtMm(bleed)}×2)</span></div>
      <div class="studio-info-row"><span class="studio-info-row-label">Kertas Print</span><span class="studio-info-row-value">${s.printPaper} — ${fmtMm(ppDim.w)} × ${fmtMm(ppDim.h)}</span></div>
      <div class="studio-info-row"><span class="studio-info-row-label">Area Cetak</span><span class="studio-info-row-value">${fmtMm(usableW)} × ${fmtMm(usableH)} (margin ${fmtMm(margin)}×2, bleed di dalam)</span></div>
      <div class="studio-info-row"><span class="studio-info-row-label">Grid</span><span class="studio-info-row-value">floor(${fmtMm(usableW)} ÷ ${fmtMm(pageW)}) = ${cols} kolom × ${rows} baris = ${pagesPerSide} slot/sisi</span></div>
      <div class="studio-info-row"><span class="studio-info-row-label">${posisiModeLabel}</span><span class="studio-info-row-value">${s.paperPosition} — Landscape: ${fitL.cols}×${fitL.rows}=${fitL.slots} slot, Portrait: ${fitP.cols}×${fitP.rows}=${fitP.slots} slot</span></div>
      <div class="studio-info-row"><span class="studio-info-row-label">Efisiensi Kertas</span><span class="studio-info-row-value">${utilization.toFixed(1)}% (sisa ${fmtNum(wasteArea)} mm²)</span></div>
    </div></div>`;

    // [NEW] Warning card: orientasi manual sub-optimal
    // Tampil saat user pilih Portrait/Landscape manual, padahal orientasi lain memberi slot lebih banyak.
    // Memberi tombol "Gunakan Auto" untuk switch ke orientasi terbaik dalam 1 klik.
    if (isSuboptimal) {
      const subIcon = isDark
        ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
        : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;
      const subBorder = isDark ? '#92400e' : '#f59e0b';
      const subAccent = isDark ? '#fcd34d' : '#b45309';
      const subBtnBg = isDark ? '#92400e' : '#f59e0b';
      const subBtnText = '#fff';
      const potentialSheets = Math.ceil(totalPages / (bestSlots * pagesPerSheet));
      const savedSheets = printSheetsNeeded - potentialSheets;
      infoHtml += `<div class="studio-info-card studio-info-card-anim" style="border-color:${subBorder};border-left:4px solid ${subBorder}"><div class="studio-info-card-header"><span class="studio-info-card-icon">${subIcon}</span><span class="studio-info-card-title">Orientasi Sub-Optimal</span></div><div class="studio-info-card-body" style="font-size:12px;line-height:1.8">
        <div style="margin-bottom:8px">Posisi kertas <b style="color:${subAccent}">${s.paperPosition}</b> hanya muat <b>${currentSlots} slot/sisi</b>. Beralih ke <b style="color:${subAccent}">${bestOrient}</b> memuat <b>${bestSlots} slot/sisi</b> (${bestSlots > currentSlots ? `${(bestSlots/currentSlots).toFixed(1)}× lebih banyak` : 'lebih efisien'}).${savedSheets > 0 ? ` Hemat <b style="color:#10b981">${savedSheets} lembar cetak</b> (${printSheetsNeeded} → ${potentialSheets}).` : ''}</div>
        <button type="button" onclick="kalkulatorIsiState.paperPositionAuto=true; kalkulatorIsiState.paperPosition='${bestOrient}'; renderAll();" style="background:${subBtnBg};color:${subBtnText};border:none;padding:8px 14px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;display:inline-flex;align-items:center;gap:6px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          Gunakan ${bestOrient} (Auto) — ${bestSlots} slot
        </button>
      </div></div>`;
    }

    // Min. Bleed 2mm — info card (match Tips Bleed & Margin style)
    const minBleedIcon = isDark
      ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`
      : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
    const minBleedBorder = isDark ? '#92400e' : '#f59e0b';
    infoHtml += `<div class="studio-info-card studio-info-card-anim" style="border-color:${minBleedBorder};border-left:4px solid ${minBleedBorder}"><div class="studio-info-card-header"><span class="studio-info-card-icon">${minBleedIcon}</span><span class="studio-info-card-title">Min. Bleed 2mm</span></div><div class="studio-info-card-body" style="font-size:12px;line-height:1.8">
      <div style="margin-bottom:8px"><b style="color:${isDark?'#fcd34d':'#b45309'}">Wajib minimal bleed 2mm</b> untuk semua ukuran — mencegah <i>white edge</i> akibat pergeseran saat potong.${bleed>0&&bleed<2?` <span style="color:#ef4444;font-weight:600">Bleed saat ini ${bleed}mm — kurang dari 2mm!</span>`:''}${bleed===0?` <span style="color:#ef4444;font-weight:600">Bleed saat ini 0mm — wajib set min. 2mm.</span>`:''}</div>
      <div><b style="color:${isDark?'#6ee7b7':'#047857'}">Rekomendasi Margin 5–10mm</b> agar mesin cutter punya ruang aman dan kertas tidak terpotong miring.</div>
    </div></div>`;

    // Detail per lembar cetak
    infoHtml += `<div class="studio-info-card studio-info-card-anim"><div class="studio-info-card-header"><span class="studio-info-card-title">Detail Per Lembar Cetak</span></div><div class="studio-info-card-body">
      <table class="studio-table"><thead><tr><th>Lembar</th><th>Halaman</th><th>Sisi</th><th>Status</th></tr></thead><tbody>`;
    for (let sh = 0; sh < printSheetsNeeded; sh++) {
      const startPage = sh * pagesPerPrintSheet + 1;
      const endPage = Math.min((sh + 1) * pagesPerPrintSheet, totalPages);
      const isLast = sh === printSheetsNeeded - 1;
      const shBlank = isLast ? blankPages : 0;
      const status = shBlank > 0 ? `+${shBlank} blank` : 'Penuh';
      infoHtml += `<tr><td>${sh+1}</td><td>${startPage}–${endPage}${shBlank>0?` (+${shBlank})`:''}</td><td>${s.duaSisi?'2 sisi':'1 sisi'}</td><td style="color:${shBlank>0?'#f59e0b':'#10b981'}">${status}</td></tr>`;
    }
    infoHtml += `</tbody></table></div></div>`;
  } else {
    infoHtml += `<div class="studio-info-card studio-info-info studio-info-card-anim"><div class="studio-info-card-header"><span class="studio-info-card-title">Layout Tidak Muat</span></div><div class="studio-info-card-body">
      <div class="studio-info-row"><span class="studio-info-row-label">Ukuran Buku + Bleed</span><span class="studio-info-row-value">${fmtMm(pageW)} × ${fmtMm(pageH)}</span></div>
      <div class="studio-info-row"><span class="studio-info-row-label">Kertas Print</span><span class="studio-info-row-value">${s.printPaper} — ${fmtMm(ppDim.w)} × ${fmtMm(ppDim.h)}</span></div>
      <div class="studio-info-row"><span class="studio-info-row-label">Area Cetak</span><span class="studio-info-row-value">${fmtMm(usableW)} × ${fmtMm(usableH)} (margin ${fmtMm(margin)}×2)</span></div>
      <div class="studio-info-row"><span class="studio-info-row-label">Status</span><span class="studio-info-row-value" style="color:#f59e0b">Halaman buku melebihi area cetak. Pilih kertas lebih besar, kurangi bleed, atau kurangi margin.</span></div>
    </div></div>`;
  }

  // Tips
  infoHtml += `<div class="studio-info-card studio-info-info studio-info-card-anim"><div class="studio-info-card-header"><span class="studio-info-card-title">Tips Perhitungan</span></div><div class="studio-info-card-body">
    <div class="studio-info-row"><span class="studio-info-row-label">Mode Cetak</span><span class="studio-info-row-value">${s.duaSisi?'2 Sisi (Duplex) — 1 lembar = 2 halaman':'1 Sisi — 1 lembar = 1 halaman'}</span></div>
    <div class="studio-info-row"><span class="studio-info-row-label">Total Lembaran</span><span class="studio-info-row-value">${totalPages} hal ÷ ${pagesPerSheet} = ${totalLembaran} lembar</span></div>
    ${pagesPerPrintSheet > 0 ? `<div class="studio-info-row"><span class="studio-info-row-label">Total Lembar Cetak</span><span class="studio-info-row-value">${totalPages} hal ÷ ${pagesPerPrintSheet}/lbr = ${printSheetsNeeded} lembar ${s.printPaper}</span></div>` : ''}
    ${blankPages > 0 ? `<div class="studio-info-row"><span class="studio-info-row-label">Solusi Blank Page</span><span class="studio-info-row-value" style="color:#f59e0b">${blankPages} hal kosong = ${blankLembar2Sisi} lembar 2 sisi atau ${blankLembar1Sisi} lembar 1 sisi</span></div>` : ''}
  </div></div>`;
  infoHtml += '</div>';
  right.innerHTML += infoHtml;
}

// ============================================================
// Render Referensi Kertas Studio
// ============================================================
function renderReferensiKertas() {
  const panel = document.getElementById('referensiKertasPanel');
  // [Bug fix] Capture search input focus & caret before re-render so we can restore it.
  // Previously: panel.innerHTML = html destroyed the input, forcing user to click again after every keystroke.
  const prevSearchInput = panel.querySelector('.studio-search-input');
  const hadFocus = prevSearchInput && document.activeElement === prevSearchInput;
  const caretStart = prevSearchInput ? prevSearchInput.selectionStart : null;
  const caretEnd = prevSearchInput ? prevSearchInput.selectionEnd : null;
  let html = '';

  // Search
  // [BUG FIX] Escape user input sebelum interpolate ke HTML attribute.
  // Sebelumnya: value="${referensiSearchFilter}" raw — user input `"` atau
  // `"><img onerror=...>` bisa memutus atribut HTML / menyuntik markup (XSS).
  // Meskipun self-XSS, state persist di localStorage → bisa menyebar via share.
  function escapeHtmlAttr(str) {
    return String(str).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/'/g,'&#39;');
  }
  const escapedSearch = escapeHtmlAttr(referensiSearchFilter);
  html += `<div class="studio-full-panel"><div class="studio-full-panel-title">Ukuran Kertas Standar</div>
    <div class="studio-search-wrapper">
      <span class="studio-search-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></span>
      <input type="text" class="studio-search-input" placeholder="Cari ukuran kertas..." value="${escapedSearch}" oninput="referensiSearchFilter=this.value;renderReferensiKertas()"/>
    </div>`;

  // Filter tabs
  const series = ['Semua','A','B','R','Lain'];
  html += `<div style="display:flex;gap:4px;margin-bottom:16px">`;
  series.forEach(s => {
    const isActive = (referensiSearchFilter === '' && s === 'Semua') || referensiSearchFilter === s;
    html += `<button class="studio-split-tab${isActive?' active':''}" onclick="referensiSearchFilter='${s==='Semua'?'':s}';renderReferensiKertas()">${s}</button>`;
  });
  html += `</div>`;

  // Paper size table
  const SERIES_TABS = ['A','B','R','Lain'];
  const filtered = PAPER_REF_SIZES.filter(p => {
    if (!referensiSearchFilter) return true;
    const lower = referensiSearchFilter.toLowerCase();
    // If filter matches a series tab, filter by series only (not by name)
    if (SERIES_TABS.some(s => s.toLowerCase() === lower)) {
      return p.series.toLowerCase() === lower;
    }
    // Otherwise search by name or series
    return p.name.toLowerCase().includes(lower) || p.series.toLowerCase().includes(lower);
  });
  html += `<div style="overflow-x:auto"><table class="studio-table"><thead><tr><th>Nama</th><th>Lebar (mm)</th><th>Tinggi (mm)</th><th>Lebar (cm)</th><th>Tinggi (cm)</th></tr></thead><tbody>`;
  filtered.forEach(p => {
    html += `<tr><td style="font-weight:700">${p.name}</td><td>${p.w}</td><td>${p.h}</td><td>${fmtNum(p.w/10)}</td><td>${fmtNum(p.h/10)}</td></tr>`;
  });
  html += `</tbody></table></div></div>`;

  // Paper weight table
  html += `<div class="studio-full-panel"><div class="studio-full-panel-title">Berat & Ketebalan Kertas</div>
    <div style="overflow-x:auto"><table class="studio-table"><thead><tr><th>Nama</th><th>GSM</th><th>Ketebalan (mm/lembar)</th><th>Tebal per Rim (mm)</th></tr></thead><tbody>`;
  PAPER_REF_WEIGHTS.forEach(p => {
    html += `<tr><td style="font-weight:700">${p.name}</td><td>${p.gsm}</td><td>${p.thickness}</td><td>${fmtNum(p.thickness*500)}</td></tr>`;
  });
  html += `</tbody></table></div></div>`;

  // Comparison overlay — [NEW] 3 kolom horizontal: Buttons | Preview | Keterangan
  const paperA = PAPER_REF_SIZES.find(p => p.name === referensiCompareA) || PAPER_REF_SIZES[4];
  const paperB = PAPER_REF_SIZES.find(p => p.name === referensiCompareB) || PAPER_REF_SIZES[3];
  const areaA = paperA.w * paperA.h;
  const areaB = paperB.w * paperB.h;
  const selisihArea = Math.abs(areaA - areaB) / 100;
  const paperLebihBesar = areaA > areaB ? paperA.name : (areaB > areaA ? paperB.name : null);
  const rasioStr = (areaA > 0 && areaB > 0)
    ? (areaA > areaB
        ? `${paperA.name} ${fmtNum(areaA/areaB)}× ${paperB.name}`
        : `${paperB.name} ${fmtNum(areaB/areaA)}× ${paperA.name}`)
    : '';

  // ============================================================
  // PERBANDINGAN UKURAN — Premium Balanced Redesign
  // ============================================================
  // Layout: 3-kolom seimbang via CSS Grid (1fr 1.25fr 1fr)
  // Visual: card-based, subtle gradients, layered shadows, consistent rhythm
  // SVG: nested rectangles (larger behind, smaller in front), proper aspect ratio
  // ============================================================

  // --- Color tokens (premium palette) ---
  const _cmp = {
    bg:         isDark ? '#0f1428' : '#fafbfd',
    cardBg:     isDark ? '#161b30' : '#ffffff',
    cardBorder: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(15,23,42,0.06)',
    trackBg:    isDark ? 'rgba(255,255,255,0.03)' : 'rgba(15,23,42,0.025)',
    textSec:    isDark ? '#94a3b8' : '#64748b',
    A: {
      solid:    isDark ? '#60a5fa' : '#3b82f6',
      soft:     isDark ? 'rgba(96,165,250,0.12)' : 'rgba(59,130,246,0.08)',
      softer:   isDark ? 'rgba(96,165,250,0.06)' : 'rgba(59,130,246,0.04)',
      fill:     isDark ? 'rgba(96,165,250,0.28)' : 'rgba(59,130,246,0.22)',
      gradient: isDark ? 'linear-gradient(135deg, rgba(96,165,250,0.18), rgba(96,165,250,0.04))'
                       : 'linear-gradient(135deg, rgba(59,130,246,0.10), rgba(59,130,246,0.02))'
    },
    B: {
      solid:    isDark ? '#fb923c' : '#ea580c',
      soft:     isDark ? 'rgba(251,146,60,0.12)' : 'rgba(234,88,12,0.08)',
      softer:   isDark ? 'rgba(251,146,60,0.06)' : 'rgba(234,88,12,0.04)',
      fill:     isDark ? 'rgba(251,146,60,0.28)' : 'rgba(234,88,12,0.22)',
      gradient: isDark ? 'linear-gradient(135deg, rgba(251,146,60,0.18), rgba(251,146,60,0.04))'
                       : 'linear-gradient(135deg, rgba(234,88,12,0.10), rgba(234,88,12,0.02))'
    },
    G: {
      solid:    isDark ? '#34d399' : '#10b981',
      soft:     isDark ? 'rgba(52,211,153,0.12)' : 'rgba(16,185,129,0.08)',
      gradient: isDark ? 'linear-gradient(135deg, rgba(52,211,153,0.15), rgba(52,211,153,0.04))'
                       : 'linear-gradient(135deg, rgba(16,185,129,0.10), rgba(16,185,129,0.02))'
    }
  };

  html += `<div class="studio-full-panel studio-cmp-panel" style="background:${_cmp.bg};border:1px solid ${_cmp.cardBorder};border-radius:20px;padding:24px;box-shadow:${isDark?'none':'0 1px 3px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.04)'}">`;

  // Header dengan title + subtitle
  html += `<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;flex-wrap:wrap;gap:8px">
    <div>
      <div style="font-size:18px;font-weight:800;color:var(--studio-text);letter-spacing:-0.2px">Perbandingan Ukuran</div>
      <div style="font-size:12px;color:${_cmp.textSec};margin-top:2px">Pilih dua ukuran kertas untuk membandingkan luas area</div>
    </div>
    ${rasioStr ? `<div style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:${_cmp.G.soft};border:1px solid ${_cmp.G.soft};border-radius:999px;font-size:12px;font-weight:700;color:${_cmp.G.solid}">⚡ ${rasioStr}</div>` : ''}
  </div>`;

  // === GRID 3-KOLOM SEIMBANG ===
  html += `<div class="studio-cmp-grid" style="display:grid;grid-template-columns:1fr 1.25fr 1fr;gap:20px;align-items:stretch">`;

  // ---------------- KOLOM 1: SELECTOR ----------------
  // Dua button premium dengan VS di tengah
  html += `<div style="display:flex;flex-direction:column;gap:12px;justify-content:center;align-items:stretch">`;
  // Button A
  html += `<button type="button" id="refCompareBtnA" aria-haspopup="listbox" aria-expanded="false"
    onclick="event.stopPropagation(); openDropdownMenuAt(this, __PAPER_REF_OPTIONS__, referensiCompareA, v=>{referensiCompareA=v;}, 'Pilih kertas A')"
    style="background:${_cmp.cardBg};background-image:${_cmp.A.gradient};border:1.5px solid ${_cmp.A.solid};color:var(--studio-text);padding:18px 20px;border-radius:14px;cursor:pointer;display:flex;align-items:center;gap:14px;transition:all 0.2s ease;font-family:inherit;box-shadow:0 1px 2px rgba(0,0,0,0.04);width:100%;text-align:left">
    <div style="flex:0 0 auto;width:44px;height:44px;border-radius:10px;background:${_cmp.A.soft};display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;color:${_cmp.A.solid};letter-spacing:-0.5px">${paperA.name}</div>
    <div style="flex:1;min-width:0">
      <div style="font-size:11px;font-weight:600;color:${_cmp.A.solid};text-transform:uppercase;letter-spacing:0.6px">Kertas A</div>
      <div style="font-size:18px;font-weight:800;color:var(--studio-text);line-height:1.2;margin-top:2px">${paperA.name}</div>
      <div style="font-size:11px;color:${_cmp.textSec};margin-top:2px">${paperA.w}×${paperA.h}mm</div>
    </div>
    <div style="flex:0 0 auto;color:${_cmp.A.solid};opacity:0.6;font-size:10px">▼</div>
  </button>`;
  // VS divider
  html += `<div style="display:flex;align-items:center;justify-content:center;gap:10px;padding:2px 0">
    <div style="flex:1;height:1px;background:${_cmp.cardBorder}"></div>
    <div style="font-size:11px;font-weight:800;color:${_cmp.textSec};letter-spacing:2px;padding:4px 14px;background:${_cmp.trackBg};border:1px solid ${_cmp.cardBorder};border-radius:999px">VS</div>
    <div style="flex:1;height:1px;background:${_cmp.cardBorder}"></div>
  </div>`;
  // Button B
  html += `<button type="button" id="refCompareBtnB" aria-haspopup="listbox" aria-expanded="false"
    onclick="event.stopPropagation(); openDropdownMenuAt(this, __PAPER_REF_OPTIONS__, referensiCompareB, v=>{referensiCompareB=v;}, 'Pilih kertas B')"
    style="background:${_cmp.cardBg};background-image:${_cmp.B.gradient};border:1.5px solid ${_cmp.B.solid};color:var(--studio-text);padding:18px 20px;border-radius:14px;cursor:pointer;display:flex;align-items:center;gap:14px;transition:all 0.2s ease;font-family:inherit;box-shadow:0 1px 2px rgba(0,0,0,0.04);width:100%;text-align:left">
    <div style="flex:0 0 auto;width:44px;height:44px;border-radius:10px;background:${_cmp.B.soft};display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;color:${_cmp.B.solid};letter-spacing:-0.5px">${paperB.name}</div>
    <div style="flex:1;min-width:0">
      <div style="font-size:11px;font-weight:600;color:${_cmp.B.solid};text-transform:uppercase;letter-spacing:0.6px">Kertas B</div>
      <div style="font-size:18px;font-weight:800;color:var(--studio-text);line-height:1.2;margin-top:2px">${paperB.name}</div>
      <div style="font-size:11px;color:${_cmp.textSec};margin-top:2px">${paperB.w}×${paperB.h}mm</div>
    </div>
    <div style="flex:0 0 auto;color:${_cmp.B.solid};opacity:0.6;font-size:10px">▼</div>
  </button>`;
  html += `</div>`;

  // ---------------- KOLOM 2: PREVIEW SVG ----------------
  // Premium canvas: nested rectangles dengan grid background
  // Logic: kertas yang LEBIH BESAR digambar duluan (di belakang), lebih kecil di depan
  const bigPaper   = areaA >= areaB ? paperA : paperB;
  const smallPaper = areaA >= areaB ? paperB : paperA;
  const bigColor   = areaA >= areaB ? _cmp.A : _cmp.B;
  const smallColor = areaA >= areaB ? _cmp.B : _cmp.A;

  const canvasW = 420, canvasH = 320, pad = 36;
  const maxDim  = Math.max(bigPaper.w, bigPaper.h);
  const scale   = Math.min((canvasW - pad*2) / bigPaper.w, (canvasH - pad*2) / bigPaper.h);
  const bigW    = bigPaper.w * scale;
  const bigH    = bigPaper.h * scale;
  const smW     = smallPaper.w * scale;
  const smH     = smallPaper.h * scale;
  const bigX    = (canvasW - bigW) / 2;
  const bigY    = (canvasH - bigH) / 2;
  const smX     = (canvasW - smW) / 2;
  const smY     = (canvasH - smH) / 2;

  html += `<div style="background:${_cmp.cardBg};border:1px solid ${_cmp.cardBorder};border-radius:14px;padding:16px;display:flex;flex-direction:column;align-items:stretch;box-shadow:0 1px 2px rgba(0,0,0,0.04)">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;padding:0 4px">
      <span style="font-size:11px;font-weight:700;color:${_cmp.textSec};text-transform:uppercase;letter-spacing:0.6px">Preview</span>
      <div style="display:flex;gap:10px;font-size:10px;color:${_cmp.textSec}">
        <span style="display:inline-flex;align-items:center;gap:4px"><span style="width:8px;height:8px;border-radius:2px;background:${_cmp.A.solid}"></span>${paperA.name}</span>
        <span style="display:inline-flex;align-items:center;gap:4px"><span style="width:8px;height:8px;border-radius:2px;background:${_cmp.B.solid}"></span>${paperB.name}</span>
      </div>
    </div>
    <svg width="100%" viewBox="0 0 ${canvasW} ${canvasH}" style="font-family:'Poppins',sans-serif;height:auto;display:block;border-radius:8px;background:${_cmp.trackBg}">
      <!-- Grid background (subtle dotted) -->
      <defs>
        <pattern id="cmpGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.7" fill="${isDark?'rgba(255,255,255,0.05)':'rgba(15,23,42,0.05)'}"/>
        </pattern>
      </defs>
      <rect width="${canvasW}" height="${canvasH}" fill="url(#cmpGrid)"/>
      <!-- Larger rectangle (behind) -->
      <rect x="${bigX}" y="${bigY}" width="${bigW}" height="${bigH}" fill="${bigColor.fill}" stroke="${bigColor.solid}" stroke-width="2" rx="4"/>
      <!-- Smaller rectangle (in front, overlapping centered) -->
      <rect x="${smX}" y="${smY}" width="${smW}" height="${smH}" fill="${smallColor.fill}" stroke="${smallColor.solid}" stroke-width="2" rx="4"/>
      <!-- Labels: positioned at top-right of each rect, with connector dot -->
      <g>
        <circle cx="${bigX + bigW - 10}" cy="${bigY + 12}" r="3" fill="${bigColor.solid}"/>
        <text x="${bigX + bigW - 16}" y="${bigY + 16}" text-anchor="end" font-size="13" fill="${bigColor.solid}" font-weight="800">${bigPaper.name}</text>
      </g>
      <g>
        <circle cx="${smX + smW - 10}" cy="${smY + 12}" r="3" fill="${smallColor.solid}"/>
        <text x="${smX + smW - 16}" y="${smY + 16}" text-anchor="end" font-size="13" fill="${smallColor.solid}" font-weight="800">${smallPaper.name}</text>
      </g>
      <!-- Dimension labels: subtle text at bottom of each rect -->
      <text x="${bigX + bigW/2}" y="${bigY + bigH + 14}" text-anchor="middle" font-size="9" fill="${_cmp.textSec}" font-weight="500">${bigPaper.w}×${bigPaper.h}mm</text>
      <text x="${smX + smW/2}" y="${smY + smH - 6}" text-anchor="middle" font-size="9" fill="${smallColor.solid}" font-weight="600" opacity="0.8">${smallPaper.w}×${smallPaper.h}mm</text>
    </svg>
  </div>`;

  // ---------------- KOLOM 3: STATS / KETERANGAN ----------------
  html += `<div style="display:flex;flex-direction:column;gap:10px;justify-content:center">`;
  // Card A
  html += `<div style="background:${_cmp.cardBg};background-image:${_cmp.A.gradient};border:1px solid ${_cmp.A.soft};border-radius:12px;padding:14px 16px;display:flex;align-items:center;gap:12px;box-shadow:0 1px 2px rgba(0,0,0,0.03)">
    <div style="flex:0 0 auto;width:36px;height:36px;border-radius:8px;background:${_cmp.A.soft};display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:${_cmp.A.solid}">${paperA.name}</div>
    <div style="flex:1;min-width:0">
      <div style="font-size:10px;font-weight:600;color:${_cmp.A.solid};text-transform:uppercase;letter-spacing:0.5px;margin-bottom:2px">Kertas A</div>
      <div style="font-size:13px;color:var(--studio-text);font-weight:600;line-height:1.3">${paperA.w}×${paperA.h}mm</div>
    </div>
    <div style="text-align:right">
      <div style="font-size:18px;font-weight:800;color:${_cmp.A.solid};line-height:1">${fmtNum(areaA/100)}</div>
      <div style="font-size:10px;color:${_cmp.textSec};font-weight:600;margin-top:2px">cm²</div>
    </div>
  </div>`;
  // Card B
  html += `<div style="background:${_cmp.cardBg};background-image:${_cmp.B.gradient};border:1px solid ${_cmp.B.soft};border-radius:12px;padding:14px 16px;display:flex;align-items:center;gap:12px;box-shadow:0 1px 2px rgba(0,0,0,0.03)">
    <div style="flex:0 0 auto;width:36px;height:36px;border-radius:8px;background:${_cmp.B.soft};display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:${_cmp.B.solid}">${paperB.name}</div>
    <div style="flex:1;min-width:0">
      <div style="font-size:10px;font-weight:600;color:${_cmp.B.solid};text-transform:uppercase;letter-spacing:0.5px;margin-bottom:2px">Kertas B</div>
      <div style="font-size:13px;color:var(--studio-text);font-weight:600;line-height:1.3">${paperB.w}×${paperB.h}mm</div>
    </div>
    <div style="text-align:right">
      <div style="font-size:18px;font-weight:800;color:${_cmp.B.solid};line-height:1">${fmtNum(areaB/100)}</div>
      <div style="font-size:10px;color:${_cmp.textSec};font-weight:600;margin-top:2px">cm²</div>
    </div>
  </div>`;
  // Selisih Card (highlighted)
  html += `<div style="background:${_cmp.cardBg};background-image:${_cmp.G.gradient};border:1.5px solid ${_cmp.G.soft};border-radius:12px;padding:16px;box-shadow:0 2px 8px ${_cmp.G.soft};margin-top:2px">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
      <span style="font-size:10px;font-weight:700;color:${_cmp.G.solid};text-transform:uppercase;letter-spacing:0.6px">Selisih Area</span>
      ${paperLebihBesar ? `<span style="font-size:10px;font-weight:700;color:${_cmp.G.solid};padding:2px 8px;background:${_cmp.G.soft};border-radius:999px">${paperLebihBesar} lebih besar</span>` : ''}
    </div>
    <div style="display:flex;align-items:baseline;gap:4px">
      <span style="font-size:28px;font-weight:800;color:${_cmp.G.solid};line-height:1">${fmtNum(selisihArea)}</span>
      <span style="font-size:13px;font-weight:700;color:${_cmp.G.solid};opacity:0.8">cm²</span>
    </div>
    ${rasioStr ? `<div style="font-size:11px;color:${_cmp.textSec};margin-top:6px;font-weight:500">${rasioStr}</div>` : ''}
  </div>`;
  html += `</div>`; // end kolom 3

  html += `</div>`; // end grid
  html += `</div>`; // end panel

  panel.innerHTML = html;
  // [Bug fix] Restore focus & caret to search input so user can keep typing
  if (hadFocus) {
    const newSearchInput = panel.querySelector('.studio-search-input');
    if (newSearchInput) {
      newSearchInput.focus();
      if (caretStart !== null && caretEnd !== null) {
        try { newSearchInput.setSelectionRange(caretStart, caretEnd); } catch(e) {}
      }
    }
  }
}

// ============================================================
// Render Hitung Harga — [NEW] Kalkulator Harga Cetak
// ============================================================
// Format angka ke rupiah: 15000 -> "Rp 15.000"
function fmtRupiah(n) {
  const v = Math.max(0, Math.round(Number(n) || 0));
  return 'Rp ' + v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
// Format angka saja dengan pemisah ribuan: 15000 -> "15.000"
function fmtAngka(n) {
  const v = Math.round(Number(n) || 0);
  return v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
// Parse string berformat "15.000" atau "15000" atau "Rp 15.000" -> 15000 (number)
function parseRupiahInput(str) {
  if (str === null || str === undefined) return 0;
  // Buang semua kecuali digit, koma, titik, minus
  let cleaned = String(str).replace(/[^\d.,-]/g, '');
  // Asumsi format Indonesia: titik = pemisah ribuan, koma = desimal
  // Buang titik (pemisah ribuan), ganti koma dengan titik (desimal)
  cleaned = cleaned.replace(/\./g, '').replace(',', '.');
  const n = parseFloat(cleaned);
  return isNaN(n) ? 0 : n;
}
// Format angka untuk ditampilkan di input text dengan pemisah ribuan
/* [FIX v2.0.1 / BUG M3] dukung maksimal 2 desimal dgn koma (gaya Indonesia).
   Sebelumnya selalu Math.round sehingga mengetik "2,5" pada field PPN/Diskon
   langsung tampil "3" — nilai desimal mustahil diinput dengan benar.
   Contoh: 1500 -> "1.500", 2.5 -> "2,5", 1500.55 -> "1.500,55" */
function formatForInput(n) {
  const v = Math.max(0, Math.round((Number(n) || 0) * 100) / 100);
  if (!isFinite(v)) return '0';
  const parts = String(v).split('.');
  const intPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return parts[1] !== undefined ? intPart + ',' + parts[1] : intPart;
}
// Format integer murni (tanpa desimal) — dipakai field Qty yang selalu bulat
function formatIntForInput(n) {
  const v = Math.max(0, Math.round(Number(n) || 0));
  return v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// Helper: input currency dengan prefix "Rp" + pemisah ribuan di field
// Memakai type="text" + inputmode="numeric" supaya bisa diformat dengan titik ribuan
function createCurrencyInput(containerId, label, value, onChange, iconSvg, min, step) {
  const container = document.getElementById(containerId);
  const group = document.createElement('div');
  group.className = 'studio-form-group';
  if (min === undefined) min = 0;
  if (step === undefined) step = 1000;

  const inputId = 'cur_' + Math.random().toString(36).slice(2,10);
  const lbl = document.createElement('label');
  lbl.className = 'studio-form-label';
  lbl.htmlFor = inputId;
  if (iconSvg) { const span = document.createElement('span'); span.className = 'studio-form-icon'; span.innerHTML = iconSvg; lbl.appendChild(span); }
  lbl.appendChild(document.createTextNode(label));
  group.appendChild(lbl);

  const spinner = document.createElement('div');
  spinner.className = 'studio-number-spinner';

  const minusBtn = document.createElement('button');
  minusBtn.className = 'studio-spinner-btn';
  minusBtn.type = 'button';
  minusBtn.textContent = '−';

  // Currency wrapper
  const curWrap = document.createElement('div');
  curWrap.className = 'studio-currency-input';
  curWrap.style.flex = '1';
  const prefix = document.createElement('span');
  prefix.className = 'studio-currency-prefix';
  prefix.textContent = 'Rp';
  const input = document.createElement('input');
  input.id = inputId;
  input.type = 'text';
  input.inputMode = 'numeric';
  input.className = 'studio-number-input';
  input.value = formatForInput(value);
  curWrap.appendChild(prefix);
  curWrap.appendChild(input);

  const plusBtn = document.createElement('button');
  plusBtn.className = 'studio-spinner-btn';
  plusBtn.type = 'button';
  plusBtn.textContent = '+';

  function syncDisplay(n) {
    input.value = formatForInput(n);
  }

  function applyVal(v) {
    let n = Number(v);
    if (isNaN(n)) n = min;
    n = Math.max(min, n);
    syncDisplay(n);
    onChange(n);
    try { saveState(); } catch(e) {}
    renderAll(true);
  }

  minusBtn.addEventListener('click', () => {
    let v = parseRupiahInput(input.value);
    applyVal(v - step);
  });
  plusBtn.addEventListener('click', () => {
    let v = parseRupiahInput(input.value);
    applyVal(v + step);
  });

  // Saat user mengetik: simpan posisi caret, format ulang, kembalikan caret
  input.addEventListener('input', () => {
    const caret = input.selectionStart;
    const oldLen = input.value.length;
    const n = parseRupiahInput(input.value);
    /* [FIX v2.0.1 / BUG M3] skip format ulang saat input diakhiri koma/titik —
       agar koma desimal yang baru diketik tidak langsung hilang (mis. "2," ) */
    const formatted = (/[.,]$/.test(input.value)) ? input.value : formatForInput(n);
    input.value = formatted;
    const newLen = formatted.length;
    // Sesuaikan posisi caret
    let newCaret = caret + (newLen - oldLen);
    if (newCaret < 0) newCaret = 0;
    if (newCaret > newLen) newCaret = newLen;
    try { input.setSelectionRange(newCaret, newCaret); } catch(e) {}
    onChange(n);
    try { saveState(); } catch(e) {}
    renderAll(true);
  });
  input.addEventListener('blur', () => {
    const n = parseRupiahInput(input.value);
    syncDisplay(n);
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); input.blur(); }
  });

  spinner.appendChild(minusBtn);
  spinner.appendChild(curWrap);
  spinner.appendChild(plusBtn);
  group.appendChild(spinner);
  container.appendChild(group);
}

// Helper: input dengan toggle satuan Persen/Rp
// [BUG FIX] Versi sebelumnya punya bug: variabel `mode` di closure tidak ter-update
// setelah applyMode() dipanggil, sehingga user tidak bisa switch balik (stale closure).
// Sekarang pakai let currentMode yang di-update setiap kali applyMode dipanggil.
function createPercentOrRpInput(containerId, label, mode, value, onChangeMode, onChangeValue, iconSvg) {
  const container = document.getElementById(containerId);
  const group = document.createElement('div');
  group.className = 'studio-form-group';

  let currentMode = mode; // mutable — fix for stale closure bug

  const inputId = 'por_' + Math.random().toString(36).slice(2,10);
  const lbl = document.createElement('label');
  lbl.className = 'studio-form-label';
  lbl.htmlFor = inputId;
  if (iconSvg) { const span = document.createElement('span'); span.className = 'studio-form-icon'; span.innerHTML = iconSvg; lbl.appendChild(span); }
  lbl.appendChild(document.createTextNode(label));
  group.appendChild(lbl);

  // Mode toggle: Persen | Rp
  const tabs = document.createElement('div');
  tabs.className = 'studio-split-tabs';
  tabs.style.marginBottom = '8px';
  const tabPersen = document.createElement('button');
  tabPersen.type = 'button';
  tabPersen.className = 'studio-split-tab' + (currentMode === 'persen' ? ' active' : '');
  tabPersen.textContent = 'Persen (%)';
  const tabRp = document.createElement('button');
  tabRp.type = 'button';
  tabRp.className = 'studio-split-tab' + (currentMode === 'rp' ? ' active' : '');
  tabRp.textContent = 'Rupiah (Rp)';
  tabs.appendChild(tabPersen);
  tabs.appendChild(tabRp);
  group.appendChild(tabs);

  // Value input with prefix
  const spinner = document.createElement('div');
  spinner.className = 'studio-number-spinner';

  const minusBtn = document.createElement('button');
  minusBtn.className = 'studio-spinner-btn';
  minusBtn.type = 'button';
  minusBtn.textContent = '−';

  const wrap = document.createElement('div');
  wrap.className = 'studio-currency-input';
  wrap.style.flex = '1';
  const prefix = document.createElement('span');
  prefix.className = 'studio-currency-prefix';
  prefix.textContent = currentMode === 'persen' ? '%' : 'Rp';
  const input = document.createElement('input');
  input.id = inputId;
  input.type = 'text';
  input.inputMode = 'numeric';
  input.className = 'studio-number-input';
  input.value = formatForInput(value);
  wrap.appendChild(prefix);
  wrap.appendChild(input);

  const plusBtn = document.createElement('button');
  plusBtn.className = 'studio-spinner-btn';
  plusBtn.type = 'button';
  plusBtn.textContent = '+';

  function syncDisplay(n) {
    input.value = formatForInput(n);
  }

  function applyVal(v) {
    let n = Number(v);
    if (isNaN(n)) n = 0;
    n = Math.max(0, n);
    syncDisplay(n);
    onChangeValue(n);
    try { saveState(); } catch(e) {}
    renderAll(true);
  }

  function applyMode(newMode) {
    if (newMode === currentMode) return;
    currentMode = newMode; // FIX: update mutable variable
    // Update prefix
    prefix.textContent = newMode === 'persen' ? '%' : 'Rp';
    // Update active tab classes
    tabPersen.classList.toggle('active', newMode === 'persen');
    tabRp.classList.toggle('active', newMode === 'rp');
    onChangeMode(newMode);
    try { saveState(); } catch(e) {}
    renderAll(true);
  }

  tabPersen.addEventListener('click', () => applyMode('persen'));
  tabRp.addEventListener('click', () => applyMode('rp'));

  function currentStep() { return currentMode === 'persen' ? 1 : 1000; }

  minusBtn.addEventListener('click', () => {
    let v = parseRupiahInput(input.value);
    applyVal(v - currentStep());
  });
  plusBtn.addEventListener('click', () => {
    let v = parseRupiahInput(input.value);
    applyVal(v + currentStep());
  });

  // Format dengan titik ribuan saat mengetik
  input.addEventListener('input', () => {
    const caret = input.selectionStart;
    const oldLen = input.value.length;
    const n = parseRupiahInput(input.value);
    /* [FIX v2.0.1 / BUG M3] skip format ulang saat input diakhiri koma/titik —
       agar koma desimal yang baru diketik tidak langsung hilang (mis. "2," ) */
    const formatted = (/[.,]$/.test(input.value)) ? input.value : formatForInput(n);
    input.value = formatted;
    const newLen = formatted.length;
    let newCaret = caret + (newLen - oldLen);
    if (newCaret < 0) newCaret = 0;
    if (newCaret > newLen) newCaret = newLen;
    try { input.setSelectionRange(newCaret, newCaret); } catch(e) {}
    onChangeValue(n);
    try { saveState(); } catch(e) {}
    renderAll(true);
  });
  input.addEventListener('blur', () => {
    const n = parseRupiahInput(input.value);
    syncDisplay(n);
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); input.blur(); }
  });

  spinner.appendChild(minusBtn);
  spinner.appendChild(wrap);
  spinner.appendChild(plusBtn);
  group.appendChild(spinner);
  container.appendChild(group);
}

// [NEW] Helper: display read-only untuk Harga Modal (auto dari Total Harga)
// Tampil seperti input currency tapi read-only, background abu-abu
function createHargaModalDisplay(containerId, label, value, iconSvg) {
  const container = document.getElementById(containerId);
  const group = document.createElement('div');
  group.className = 'studio-form-group';

  const inputId = 'hmd_' + Math.random().toString(36).slice(2,10);
  const lbl = document.createElement('label');
  lbl.className = 'studio-form-label';
  lbl.htmlFor = inputId;
  if (iconSvg) { const span = document.createElement('span'); span.className = 'studio-form-icon'; span.innerHTML = iconSvg; lbl.appendChild(span); }
  lbl.appendChild(document.createTextNode(label));
  group.appendChild(lbl);

  const wrap = document.createElement('div');
  wrap.className = 'studio-currency-input';
  wrap.style.position = 'relative';
  const prefix = document.createElement('span');
  prefix.className = 'studio-currency-prefix';
  prefix.textContent = 'Rp';
  const input = document.createElement('input');
  input.id = inputId;
  input.type = 'text';
  input.className = 'studio-number-input';
  input.value = formatForInput(value);
  input.readOnly = true;
  input.style.backgroundColor = 'var(--studio-input-bg)';
  input.style.color = 'var(--studio-text-secondary)';
  input.style.cursor = 'default';
  input.style.fontWeight = '700';
  wrap.appendChild(prefix);
  wrap.appendChild(input);
  group.appendChild(wrap);
  container.appendChild(group);
}

// [NEW] Combined helper: Qty dengan toggle Pcs/Lembaran + input — struktur sama dengan Potongan PPN
// Layout: Label "Qty" → [Pcs | Lembaran] toggle → [−] [input] [+]
function createQtyWithUnit(containerId, label, unit, value, onChangeUnit, onChangeValue, iconSvg, min, max, step) {
  const container = document.getElementById(containerId);
  const group = document.createElement('div');
  group.className = 'studio-form-group';
  if (min === undefined) min = 0;
  if (step === undefined) step = 1;
  let currentUnit = unit;

  const inputId = 'qw_' + Math.random().toString(36).slice(2,10);
  const lbl = document.createElement('label');
  lbl.className = 'studio-form-label';
  lbl.htmlFor = inputId;
  if (iconSvg) { const span = document.createElement('span'); span.className = 'studio-form-icon'; span.innerHTML = iconSvg; lbl.appendChild(span); }
  lbl.appendChild(document.createTextNode(label));
  group.appendChild(lbl);

  // Toggle: Pcs | Lembaran (sama style dengan Persen/Rupiah)
  const tabs = document.createElement('div');
  tabs.className = 'studio-split-tabs';
  tabs.style.marginBottom = '8px';
  const tabPcs = document.createElement('button');
  tabPcs.type = 'button';
  tabPcs.className = 'studio-split-tab' + (currentUnit === 'pcs' ? ' active' : '');
  tabPcs.textContent = 'Pcs';
  const tabLembar = document.createElement('button');
  tabLembar.type = 'button';
  tabLembar.className = 'studio-split-tab' + (currentUnit === 'lembaran' ? ' active' : '');
  tabLembar.textContent = 'Lembaran';
  tabs.appendChild(tabPcs);
  tabs.appendChild(tabLembar);
  group.appendChild(tabs);

  // Spinner: [−] [input] [+]
  const spinner = document.createElement('div');
  spinner.className = 'studio-number-spinner';
  const minusBtn = document.createElement('button');
  minusBtn.className = 'studio-spinner-btn';
  minusBtn.type = 'button';
  minusBtn.textContent = '−';
  const wrap = document.createElement('div');
  wrap.style.flex = '1';
  const input = document.createElement('input');
  input.id = inputId;
  input.type = 'text';
  input.inputMode = 'numeric';
  input.className = 'studio-number-input';
  input.value = formatForInput(value);
  wrap.appendChild(input);
  const plusBtn = document.createElement('button');
  plusBtn.className = 'studio-spinner-btn';
  plusBtn.type = 'button';
  plusBtn.textContent = '+';

  function syncDisplay(n) { input.value = formatIntForInput(n); }
  function applyVal(v) {
    let n = Math.floor(Number(v));
    if (isNaN(n)) n = min;
    n = Math.max(min, n);
    if (max !== undefined) n = Math.min(max, n);
    syncDisplay(n);
    onChangeValue(n);
    try { saveState(); } catch(e) {}
    renderAll(true);
  }
  function applyUnit(newUnit) {
    if (newUnit === currentUnit) return;
    currentUnit = newUnit;
    tabPcs.classList.toggle('active', newUnit === 'pcs');
    tabLembar.classList.toggle('active', newUnit === 'lembaran');
    onChangeUnit(newUnit);
    try { saveState(); } catch(e) {}
    renderAll(false);
  }
  tabPcs.addEventListener('click', () => applyUnit('pcs'));
  tabLembar.addEventListener('click', () => applyUnit('lembaran'));
  minusBtn.addEventListener('click', () => { let v = parseRupiahInput(input.value); applyVal(v - step); });
  plusBtn.addEventListener('click', () => { let v = parseRupiahInput(input.value); applyVal(v + step); });
  input.addEventListener('input', () => {
    const caret = input.selectionStart;
    const oldLen = input.value.length;
    const n = parseRupiahInput(input.value);
    /* [FIX v2.0.1 / BUG M3] skip format ulang saat input diakhiri koma/titik;
       Qty selalu bulat -> pakai formatIntForInput (perilaku lama tetap dipertahankan) */
    const formatted = (/[.,]$/.test(input.value)) ? input.value : formatIntForInput(n);
    input.value = formatted;
    const newLen = formatted.length;
    let newCaret = caret + (newLen - oldLen);
    if (newCaret < 0) newCaret = 0;
    if (newCaret > newLen) newCaret = newLen;
    try { input.setSelectionRange(newCaret, newCaret); } catch(e) {}
    onChangeValue(Math.floor(n));
    try { saveState(); } catch(e) {}
    renderAll(true);
  });
  input.addEventListener('blur', () => { const n = parseRupiahInput(input.value); syncDisplay(n); });
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); input.blur(); } });

  spinner.appendChild(minusBtn);
  spinner.appendChild(wrap);
  spinner.appendChild(plusBtn);
  group.appendChild(spinner);
  container.appendChild(group);
}

// [NEW] Combined helper: Harga dengan toggle Pcs/Lembaran + input Rp — struktur sama dengan Potongan PPN
// Layout: Label "Harga" → [Pcs | Lembaran] toggle → [−] [Rp] [input] [+]
function createHargaWithUnit(containerId, label, unit, value, onChangeUnit, onChangeValue, iconSvg, min, step) {
  const container = document.getElementById(containerId);
  const group = document.createElement('div');
  group.className = 'studio-form-group';
  if (min === undefined) min = 0;
  if (step === undefined) step = 100;
  let currentUnit = unit;

  const inputId = 'hw_' + Math.random().toString(36).slice(2,10);
  const lbl = document.createElement('label');
  lbl.className = 'studio-form-label';
  lbl.htmlFor = inputId;
  if (iconSvg) { const span = document.createElement('span'); span.className = 'studio-form-icon'; span.innerHTML = iconSvg; lbl.appendChild(span); }
  lbl.appendChild(document.createTextNode(label));
  group.appendChild(lbl);

  // Toggle: Pcs | Lembaran
  const tabs = document.createElement('div');
  tabs.className = 'studio-split-tabs';
  tabs.style.marginBottom = '8px';
  const tabPcs = document.createElement('button');
  tabPcs.type = 'button';
  tabPcs.className = 'studio-split-tab' + (currentUnit === 'pcs' ? ' active' : '');
  tabPcs.textContent = 'Pcs';
  const tabLembar = document.createElement('button');
  tabLembar.type = 'button';
  tabLembar.className = 'studio-split-tab' + (currentUnit === 'lembaran' ? ' active' : '');
  tabLembar.textContent = 'Lembaran';
  tabs.appendChild(tabPcs);
  tabs.appendChild(tabLembar);
  group.appendChild(tabs);

  // Spinner: [−] [Rp] [input] [+]
  const spinner = document.createElement('div');
  spinner.className = 'studio-number-spinner';
  const minusBtn = document.createElement('button');
  minusBtn.className = 'studio-spinner-btn';
  minusBtn.type = 'button';
  minusBtn.textContent = '−';
  const curWrap = document.createElement('div');
  curWrap.className = 'studio-currency-input';
  curWrap.style.flex = '1';
  const prefix = document.createElement('span');
  prefix.className = 'studio-currency-prefix';
  prefix.textContent = 'Rp';
  const input = document.createElement('input');
  input.id = inputId;
  input.type = 'text';
  input.inputMode = 'numeric';
  input.className = 'studio-number-input';
  input.value = formatForInput(value);
  curWrap.appendChild(prefix);
  curWrap.appendChild(input);
  const plusBtn = document.createElement('button');
  plusBtn.className = 'studio-spinner-btn';
  plusBtn.type = 'button';
  plusBtn.textContent = '+';

  function syncDisplay(n) { input.value = formatForInput(n); }
  function applyVal(v) {
    let n = Number(v);
    if (isNaN(n)) n = min;
    n = Math.max(min, n);
    syncDisplay(n);
    onChangeValue(n);
    try { saveState(); } catch(e) {}
    renderAll(true);
  }
  function applyUnit(newUnit) {
    if (newUnit === currentUnit) return;
    currentUnit = newUnit;
    tabPcs.classList.toggle('active', newUnit === 'pcs');
    tabLembar.classList.toggle('active', newUnit === 'lembaran');
    onChangeUnit(newUnit);
    try { saveState(); } catch(e) {}
    renderAll(false);
  }
  tabPcs.addEventListener('click', () => applyUnit('pcs'));
  tabLembar.addEventListener('click', () => applyUnit('lembaran'));
  minusBtn.addEventListener('click', () => { let v = parseRupiahInput(input.value); applyVal(v - step); });
  plusBtn.addEventListener('click', () => { let v = parseRupiahInput(input.value); applyVal(v + step); });
  input.addEventListener('input', () => {
    const caret = input.selectionStart;
    const oldLen = input.value.length;
    const n = parseRupiahInput(input.value);
    /* [FIX v2.0.1 / BUG M3] skip format ulang saat input diakhiri koma/titik —
       agar koma desimal yang baru diketik tidak langsung hilang (mis. "2," ) */
    const formatted = (/[.,]$/.test(input.value)) ? input.value : formatForInput(n);
    input.value = formatted;
    const newLen = formatted.length;
    let newCaret = caret + (newLen - oldLen);
    if (newCaret < 0) newCaret = 0;
    if (newCaret > newLen) newCaret = newLen;
    try { input.setSelectionRange(newCaret, newCaret); } catch(e) {}
    onChangeValue(n);
    try { saveState(); } catch(e) {}
    renderAll(true);
  });
  input.addEventListener('blur', () => { const n = parseRupiahInput(input.value); syncDisplay(n); });
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); input.blur(); } });

  spinner.appendChild(minusBtn);
  spinner.appendChild(curWrap);
  spinner.appendChild(plusBtn);
  group.appendChild(spinner);
  container.appendChild(group);
}

// [NEW] Helper: dropdown mode potong + input harga di sampingnya (dalam 1 baris)
// Layout: [Dropdown Potong/Kiss Cut/Die Cut] [Rp input harga]
// Pakai grid 2 kolom supaya sejajar
function createPotongWithHarga(containerId, label, mode, harga, onChangeMode, onChangeHarga, iconSvg) {
  const container = document.getElementById(containerId);
  const group = document.createElement('div');
  group.className = 'studio-form-group';

  const lbl = document.createElement('label');
  lbl.className = 'studio-form-label';
  if (iconSvg) { const span = document.createElement('span'); span.className = 'studio-form-icon'; span.innerHTML = iconSvg; lbl.appendChild(span); }
  lbl.appendChild(document.createTextNode(label));
  group.appendChild(lbl);

  // Wrapper: 2 kolom (dropdown | harga) — align-items: stretch supaya tinggi sama
  const row = document.createElement('div');
  row.style.display = 'grid';
  row.style.gridTemplateColumns = '1fr 1fr';
  row.style.gap = '8px';
  row.style.alignItems = 'stretch';
  // [BUG FIX] Append row ke group SEBELUM createDropdown dipanggil,
  // supaya document.getElementById(ddId) bisa menemukan ddWrap.
  group.appendChild(row);

  // --- Kolom 1: Dropdown mode potong ---
  const ddWrap = document.createElement('div');
  const ddId = 'potongdd_' + Math.random().toString(36).slice(2,10);
  ddWrap.id = ddId;
  ddWrap.style.alignSelf = 'center';
  row.appendChild(ddWrap);
  container.appendChild(group);
  createDropdown(ddId, '', POTONG_MODE_OPTIONS, mode, onChangeMode, null);
  // [BUG FIX] Hilangkan margin-bottom form-group di dalam grid supaya
  // tinggi kolom dropdown = tinggi trigger (46px), sama dengan kolom harga.
  const ddFormGroup = ddWrap.querySelector('.studio-form-group');
  if (ddFormGroup) ddFormGroup.style.marginBottom = '0';

  // --- Kolom 2: Input harga (currency) ---
  // [BUG FIX] align-self: center + height: 46px supaya wrapper tidak ikut stretch
  // mengikuti tinggi grid row (yang termasuk margin form-group dropdown).
  // Sebelumnya prefix Rp di top:50% relative ke wrapper yang lebih tinggi dari input,
  // sehingga Rp muncul 8px di bawah center input.
  const hargaWrap = document.createElement('div');
  hargaWrap.className = 'studio-currency-input';
  hargaWrap.style.width = '100%';
  hargaWrap.style.position = 'relative';
  hargaWrap.style.height = '46px';
  hargaWrap.style.alignSelf = 'center';
  hargaWrap.style.boxSizing = 'border-box';
  const prefix = document.createElement('span');
  prefix.className = 'studio-currency-prefix';
  prefix.textContent = 'Rp';
  const input = document.createElement('input');
  input.type = 'text';
  input.inputMode = 'numeric';
  input.className = 'studio-number-input studio-potong-harga-input';
  input.value = formatForInput(harga);
  hargaWrap.appendChild(prefix);
  hargaWrap.appendChild(input);
  row.appendChild(hargaWrap);

  function syncDisplay(n) { input.value = formatForInput(n); }
  input.addEventListener('input', () => {
    const caret = input.selectionStart;
    const oldLen = input.value.length;
    const n = parseRupiahInput(input.value);
    /* [FIX v2.0.1 / BUG M3] skip format ulang saat input diakhiri koma/titik —
       agar koma desimal yang baru diketik tidak langsung hilang (mis. "2," ) */
    const formatted = (/[.,]$/.test(input.value)) ? input.value : formatForInput(n);
    input.value = formatted;
    const newLen = formatted.length;
    let newCaret = caret + (newLen - oldLen);
    if (newCaret < 0) newCaret = 0;
    if (newCaret > newLen) newCaret = newLen;
    try { input.setSelectionRange(newCaret, newCaret); } catch(e) {}
    onChangeHarga(n);
    try { saveState(); } catch(e) {}
    renderAll(true);
  });
  input.addEventListener('blur', () => {
    const n = parseRupiahInput(input.value);
    syncDisplay(n);
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); input.blur(); }
  });
  // [BUG FIX] group & row sudah di-append ke container di atas (sebelum createDropdown).
}

function renderHitungHarga(skipLeftPanel) {
  if (skipLeftPanel === undefined) skipLeftPanel = false;
  const s = hitungHargaState;

  // ----- Hitung -----
  const qty = Math.max(0, Number(s.qty) || 0);
  const hargaPcs = Math.max(0, Number(s.hargaPcs) || 0);
  // [NEW] Cetak 2 Sisi: harga satuan dikalikan 2 (cetak kedua sisi)
  const cetakSisi = s.cetakDuaSisi ? 2 : 1;
  const hargaSatuanEffective = hargaPcs * cetakSisi;
  const subtotal = qty * hargaSatuanEffective;

  // [NEW] Laminasi: harga per sisi per pcs × qty × (duaSisi ? 2 : 1)
  // Tebal & None tidak punya opsi 2 sisi
  const laminasiHarga = Math.max(0, Number(s.laminasiHarga) || 0);
  const laminasiAktif = s.laminasi && s.laminasi !== 'none';
  const laminasiSisi = (laminasiAktif && s.laminasiDuaSisi && s.laminasi !== 'tebal') ? 2 : 1;
  const laminasiTotal = laminasiAktif ? laminasiHarga * laminasiSisi * qty : 0;

  // [NEW] Potong: 
  // - Mode 'potong' = flat fee (harga untuk seluruhnya, tidak × qty)
  // - Mode 'kisscut' & 'diecut' = per pcs × qty
  const potongHarga = Math.max(0, Number(s.potongHarga) || 0);
  const potongFlat = s.potongMode === 'potong';
  const potongTotal = potongFlat ? potongHarga : (potongHarga * qty);

  // Subtotal + laminasi + potong
  const setelahTambahan = subtotal + laminasiTotal + potongTotal;

  // PPN potongan
  const ppnValue = Math.max(0, Number(s.ppnValue) || 0);
  const ppnAmount = s.ppnMode === 'persen'
    ? setelahTambahan * (ppnValue / 100)
    : Math.min(ppnValue, setelahTambahan);
  const setelahPpn = Math.max(0, setelahTambahan - ppnAmount);

  // Diskon
  const diskonValue = Math.max(0, Number(s.diskonValue) || 0);
  const diskonAmount = s.diskonMode === 'persen'
    ? setelahPpn * (diskonValue / 100)
    : Math.min(diskonValue, setelahPpn);
  const total = Math.max(0, setelahPpn - diskonAmount);

  // [NEW] Harga Modal = Total Harga (dari semua komponen biaya)
  const hargaModal = total;
  // [NEW] Harga Jual = input user, Untung = Harga Jual - Harga Modal
  const hargaJual = Math.max(0, Number(s.hargaJual) || 0);
  const untung = hargaJual - hargaModal;

  // Harga setelah diskon per pcs (untuk info)
  const hargaPerPcsFinal = qty > 0 ? total / qty : 0;

  // Jenis Kertas label
  const kertasInfo = PAPER_ISI_MAP[s.jenisKertas];
  const kertasLabel = kertasInfo ? kertasInfo.name : '-';

  // Laminasi label
  const laminasiOpt = LAMINASI_OPTIONS.find(o => o.value === s.laminasi);
  const laminasiLabel = laminasiOpt ? laminasiOpt.label : 'Tanpa Laminasi';

  // Potong mode label
  const potongOpt = POTONG_MODE_OPTIONS.find(o => o.value === s.potongMode);
  const potongLabel = potongOpt ? potongOpt.label : 'Potong';

  // ----- Left panel -----
  if (!skipLeftPanel) {
    const left = document.getElementById('hitungHargaLeftPanel');
    left.innerHTML = '';

    // [NEW] Harga section — Harga Modal (auto dari Total) + Harga Jual (input)
    createSectionTitle('hitungHargaLeftPanel', 'Harga');
    createHargaModalDisplay('hitungHargaLeftPanel', 'Harga Modal', hargaModal, ICONS.price);
    createCurrencyInput('hitungHargaLeftPanel', 'Harga Jual', s.hargaJual, v=>{hitungHargaState.hargaJual=v;}, ICONS.price, 0, 100000);

    createSectionTitle('hitungHargaLeftPanel', 'Ukuran');
    createDropdown('hitungHargaLeftPanel', 'Ukuran', BOOK_SIZES, s.ukuran, v=>{hitungHargaState.ukuran=v;}, ICONS.book);
    if (s.ukuran === 'Custom') {
      createDimensionInput('hitungHargaLeftPanel', 'Custom Ukuran', s.customW, s.customH,
        v=>{hitungHargaState.customW=v;}, v=>{hitungHargaState.customH=v;}, ICONS.size);
    }

    createSectionTitle('hitungHargaLeftPanel', 'Item');
    createDropdown('hitungHargaLeftPanel', 'Jenis Kertas', PAPER_ISI_OPTIONS, s.jenisKertas, v=>{hitungHargaState.jenisKertas=v;}, ICONS.paper);

    // [NEW] Cetak 2 Sisi toggle — di bawah Jenis Kertas
    // Saat ON: harga satuan cetak dikalikan 2 (cetak kedua sisi)
    createToggle('hitungHargaLeftPanel', 'Cetak 2 Sisi', !!s.cetakDuaSisi, v=>{hitungHargaState.cetakDuaSisi=v;}, ICONS.twoSides, 'ON = cetak kedua sisi (harga satuan × 2), OFF = cetak 1 sisi');

    // [NEW] Qty + toggle Pcs/Lembaran dalam 1 form group (struktur sama dengan Potongan PPN)
    // [CHANGED] Saat Qty unit berubah, Harga unit ikut menyusul (sync)
    createQtyWithUnit('hitungHargaLeftPanel', 'Qty', s.qtyUnit, s.qty,
      v=>{
        hitungHargaState.qtyUnit = v;
        // [SYNC] Harga satuan ikut unit Qty
        hitungHargaState.hargaUnit = v;
      }, v=>{hitungHargaState.qty=v;}, ICONS.qty, 0, 9999999, 1);

    // [CHANGED] Harga satuan — selalu pakai s.hargaUnit yang sudah di-sync dengan qtyUnit
    createHargaWithUnit('hitungHargaLeftPanel', 'Harga', s.hargaUnit, s.hargaPcs,
      v=>{
        hitungHargaState.hargaUnit = v;
        // [SYNC] Qty unit ikut unit Harga (dua arah)
        hitungHargaState.qtyUnit = v;
      }, v=>{hitungHargaState.hargaPcs=v;}, ICONS.price, 0, 100);

    // [NEW] Laminasi section — dropdown + toggle 2 Sisi (hidden untuk Tebal/None) + harga
    createSectionTitle('hitungHargaLeftPanel', 'Laminasi');
    createDropdown('hitungHargaLeftPanel', 'Jenis Laminasi', LAMINASI_OPTIONS, s.laminasi, v=>{
      hitungHargaState.laminasi = v;
      // Set default harga sesuai jenis laminasi
      hitungHargaState.laminasiHarga = LAMINASI_DEFAULT_HARGA[v] || 0;
      // Reset 2 sisi ke false jika Tebal atau None
      if (v === 'tebal' || v === 'none') {
        hitungHargaState.laminasiDuaSisi = false;
      }
    }, ICONS.bleed);
    // Toggle 2 Sisi — hanya tampil untuk Glossy & Doff
    if (s.laminasi === 'glossy' || s.laminasi === 'doff') {
      createToggle('hitungHargaLeftPanel', '2 Sisi', !!s.laminasiDuaSisi, v=>{hitungHargaState.laminasiDuaSisi=v;}, ICONS.twoSides, 'ON = laminasi kedua sisi, OFF = laminasi satu sisi');
    }
    // Input Harga Laminasi — hanya tampil jika bukan 'none'
    if (s.laminasi && s.laminasi !== 'none') {
      createCurrencyInput('hitungHargaLeftPanel', 'Harga Laminasi ' + (s.laminasiDuaSisi && s.laminasi !== 'tebal' ? '(2 Sisi)' : '(1 Sisi)'), s.laminasiHarga, v=>{hitungHargaState.laminasiHarga=v;}, ICONS.price, 0, 10000);
    }

    // [NEW] Potong section — dropdown mode + harga di sampingnya
    createSectionTitle('hitungHargaLeftPanel', 'Potong');
    createPotongWithHarga('hitungHargaLeftPanel', 'Mode Potong', s.potongMode, s.potongHarga,
      m=>{
        hitungHargaState.potongMode = m;
        // Set default harga sesuai mode potong
        hitungHargaState.potongHarga = POTONG_DEFAULT_HARGA[m] || 0;
      }, v=>{hitungHargaState.potongHarga=v;}, ICONS.cut);

    createSectionTitle('hitungHargaLeftPanel', 'Potongan');
    createPercentOrRpInput('hitungHargaLeftPanel', 'Potongan PPN', s.ppnMode, s.ppnValue,
      m=>{hitungHargaState.ppnMode=m;}, v=>{hitungHargaState.ppnValue=v;}, ICONS.ppn);
    createPercentOrRpInput('hitungHargaLeftPanel', 'Diskon', s.diskonMode, s.diskonValue,
      m=>{hitungHargaState.diskonMode=m;}, v=>{hitungHargaState.diskonValue=v;}, ICONS.discount);
  }

  // ----- Right panel -----
  const right = document.getElementById('hitungHargaRightPanel');
  right.innerHTML = '';

  // [BUG FIX] Update Harga Modal display di left panel secara langsung
  // (karena skipLeftPanel=true tidak rebuild left panel, Harga Modal yang
  // read-only tidak terupdate. Kita update via DOM query.)
  const modalInput = document.querySelector('#hitungHargaLeftPanel input[readonly]');
  if (modalInput) modalInput.value = formatForInput(hargaModal);

  // [NEW] Label ukuran untuk ringkasan
  let ukuranDisplay = s.ukuran;
  if (s.ukuran === 'Custom') {
    ukuranDisplay = fmtDimWxH(s.customW, s.customH);
  } else if (BOOK_SIZE_MAP[s.ukuran]) {
    const b = BOOK_SIZE_MAP[s.ukuran];
    ukuranDisplay = s.ukuran + ' (' + fmtDimWxH(b.w, b.h) + ')';
  }

  // Header ringkasan
  let headerRows = '';
  headerRows += '<div class="studio-info-row"><span class="studio-info-row-label">Ukuran</span><span class="studio-info-row-value">' + ukuranDisplay + '</span></div>';
  headerRows += '<div class="studio-info-row"><span class="studio-info-row-label">Jenis Kertas</span><span class="studio-info-row-value">' + kertasLabel + '</span></div>';
  headerRows += '<div class="studio-info-row"><span class="studio-info-row-label">Cetak</span><span class="studio-info-row-value">' + (s.cetakDuaSisi ? '2 Sisi' : '1 Sisi') + '</span></div>';
  if (laminasiAktif) {
    headerRows += '<div class="studio-info-row"><span class="studio-info-row-label">Laminasi</span><span class="studio-info-row-value">' + laminasiLabel + (s.laminasiDuaSisi && s.laminasi !== 'tebal' ? ' (2 Sisi)' : '') + '</span></div>';
  }
  headerRows += '<div class="studio-info-row"><span class="studio-info-row-label">Mode Potong</span><span class="studio-info-row-value">' + potongLabel + '</span></div>';
  headerRows += '<div class="studio-info-row"><span class="studio-info-row-label">Qty</span><span class="studio-info-row-value">' + fmtAngka(qty) + ' ' + s.qtyUnit + '</span></div>';
  headerRows += '<div class="studio-info-row"><span class="studio-info-row-label">Harga Satuan</span><span class="studio-info-row-value">' + fmtRupiah(hargaPcs) + ' / ' + s.hargaUnit + (s.cetakDuaSisi ? ' × 2' : '') + '</span></div>';

  let headerHtml = '<div class="studio-info-card studio-info-card-anim studio-info-info" style="margin-bottom:18px">'
    + '<div class="studio-info-card-header">'
    + '<span class="studio-info-card-icon">' + ICONS.price + '</span>'
    + '<span class="studio-info-card-title">Ringkasan Item</span>'
    + '</div>'
    + '<div class="studio-info-card-body">' + headerRows + '</div>'
    + '</div>';
  right.insertAdjacentHTML('beforeend', headerHtml);

  // Result cards
  let cardsHtml = '<div class="studio-result-cards">';

  // 1) Subtotal
  cardsHtml += '<div class="studio-result-card card-blue studio-result-card-anim" role="button" tabindex="0" onclick="copyText(\'' + fmtRupiah(subtotal) + '\');">'
    + '<div class="studio-result-card-top"><span class="studio-result-label">Subtotal' + (s.cetakDuaSisi ? ' (2 Sisi)' : '') + '</span></div>'
    + '<div class="studio-result-value">' + fmtAngka(subtotal) + '</div>'
    + '<div class="studio-result-sub">' + fmtAngka(qty) + ' ' + s.qtyUnit + ' × ' + fmtRupiah(hargaPcs) + (s.cetakDuaSisi ? ' × 2' : '') + '</div><div class="studio-result-bar"></div></div>';

  // 2) + Laminasi (jika aktif)
  if (laminasiAktif) {
    cardsHtml += '<div class="studio-result-card card-violet studio-result-card-anim" role="button" tabindex="0" onclick="copyText(\'' + fmtRupiah(laminasiTotal) + '\');">'
      + '<div class="studio-result-card-top"><span class="studio-result-label">+ Laminasi</span></div>'
      + '<div class="studio-result-value">' + fmtAngka(laminasiTotal) + '</div>'
      + '<div class="studio-result-sub">' + laminasiLabel + ' · ' + fmtRupiah(laminasiHarga) + ' × ' + laminasiSisi + ' × ' + fmtAngka(qty) + '</div><div class="studio-result-bar"></div></div>';
  }

  // 3) + Potong (mode)
  cardsHtml += '<div class="studio-result-card card-sky studio-result-card-anim" role="button" tabindex="0" onclick="copyText(\'' + fmtRupiah(potongTotal) + '\');">'
    + '<div class="studio-result-card-top"><span class="studio-result-label">+ ' + potongLabel + '</span></div>'
    + '<div class="studio-result-value">' + fmtAngka(potongTotal) + '</div>'
    + '<div class="studio-result-sub">' + (potongFlat ? fmtRupiah(potongHarga) + ' (seluruhnya)' : fmtRupiah(potongHarga) + ' × ' + fmtAngka(qty)) + '</div><div class="studio-result-bar"></div></div>';

  // 4) - PPN Potongan
  cardsHtml += '<div class="studio-result-card card-amber studio-result-card-anim" role="button" tabindex="0" onclick="copyText(\'' + fmtRupiah(ppnAmount) + '\');">'
    + '<div class="studio-result-card-top"><span class="studio-result-label">− Potongan PPN</span></div>'
    + '<div class="studio-result-value">' + fmtAngka(ppnAmount) + '</div>'
    + '<div class="studio-result-sub">' + (s.ppnMode === 'persen' ? ppnValue + '%' : fmtRupiah(ppnValue)) + ' dari ' + fmtRupiah(setelahTambahan) + '</div><div class="studio-result-bar"></div></div>';

  // 5) - Diskon
  cardsHtml += '<div class="studio-result-card card-rose studio-result-card-anim" role="button" tabindex="0" onclick="copyText(\'' + fmtRupiah(diskonAmount) + '\');">'
    + '<div class="studio-result-card-top"><span class="studio-result-label">− Diskon</span></div>'
    + '<div class="studio-result-value">' + fmtAngka(diskonAmount) + '</div>'
    + '<div class="studio-result-sub">' + (s.diskonMode === 'persen' ? diskonValue + '%' : fmtRupiah(diskonValue)) + ' dari ' + fmtRupiah(setelahPpn) + '</div><div class="studio-result-bar"></div></div>';

  cardsHtml += '</div>';
  right.insertAdjacentHTML('beforeend', cardsHtml);

  // Total harga — card besar
  let totalHtml = '<div class="studio-result-cards" style="grid-template-columns:1fr;margin-bottom:18px">'
    + '<div class="studio-result-card card-emerald studio-result-card-anim" role="button" tabindex="0" onclick="copyText(\'' + fmtRupiah(total) + '\');" style="min-height:140px">'
    + '<div class="studio-result-card-top"><span class="studio-result-label">Total Harga (Modal)</span></div>'
    + '<div class="studio-result-value" style="font-size:32px">' + fmtRupiah(total) + '</div>'
    + '<div class="studio-result-sub">' + (qty > 0 ? '~ ' + fmtRupiah(Math.round(hargaPerPcsFinal)) + ' / ' + s.qtyUnit : 'Qty 0') + '</div><div class="studio-result-bar"></div>'
    + '</div>'
    + '</div>';
  right.insertAdjacentHTML('beforeend', totalHtml);

  // [NEW] Untungnya card — hanya tampil jika Harga Jual > 0
  if (hargaJual > 0) {
    const untungColor = untung >= 0 ? '#059669' : '#ef4444';
    const untungSign = untung >= 0 ? '+' : '';
    let untungHtml = '<div class="studio-result-cards" style="grid-template-columns:1fr;margin-bottom:18px">'
      + '<div class="studio-result-card studio-result-card-anim" role="button" tabindex="0" onclick="copyText(\'' + fmtRupiah(untung) + '\');" style="min-height:120px;border-color:' + untungColor + '30;background:#fff">'
      + '<div class="studio-result-card-top" style="background:' + untungColor + '15;color:' + untungColor + '"><span class="studio-result-label">Untungnya</span></div>'
      + '<div class="studio-result-value" style="font-size:28px;color:' + untungColor + '">' + untungSign + fmtRupiah(Math.abs(untung)) + '</div>'
      + '<div class="studio-result-sub" style="color:' + untungColor + '">Jual ' + fmtRupiah(hargaJual) + ' − Modal ' + fmtRupiah(hargaModal) + (qty > 0 ? ' · ~ ' + fmtRupiah(Math.round(untung/qty)) + ' / ' + s.qtyUnit : '') + '</div>'
      + '<div class="studio-result-bar" style="background:' + untungColor + '"></div>'
      + '</div>'
      + '</div>';
    right.insertAdjacentHTML('beforeend', untungHtml);
  }

  // Breakdown detail
  let detailRows = '';
  detailRows += '<div class="studio-info-row"><span class="studio-info-row-label">Subtotal (' + fmtAngka(qty) + ' ' + s.qtyUnit + ' × ' + fmtRupiah(hargaPcs) + (s.cetakDuaSisi ? ' × 2 sisi' : '') + ')</span><span class="studio-info-row-value">' + fmtRupiah(subtotal) + '</span></div>';
  if (laminasiAktif) {
    detailRows += '<div class="studio-info-row"><span class="studio-info-row-label">+ Laminasi ' + laminasiLabel + ' (' + fmtRupiah(laminasiHarga) + ' × ' + laminasiSisi + ' × ' + fmtAngka(qty) + ')</span><span class="studio-info-row-value">' + fmtRupiah(laminasiTotal) + '</span></div>';
  }
  detailRows += '<div class="studio-info-row"><span class="studio-info-row-label">+ ' + potongLabel + ' (' + (potongFlat ? fmtRupiah(potongHarga) + ' seluruhnya' : fmtRupiah(potongHarga) + ' × ' + fmtAngka(qty)) + ')</span><span class="studio-info-row-value">' + fmtRupiah(potongTotal) + '</span></div>';
  detailRows += '<div class="studio-info-row"><span class="studio-info-row-label">= Setelah Tambahan</span><span class="studio-info-row-value">' + fmtRupiah(setelahTambahan) + '</span></div>';
  detailRows += '<div class="studio-info-row"><span class="studio-info-row-label">− PPN (' + (s.ppnMode === 'persen' ? ppnValue + '%' : fmtRupiah(ppnValue)) + ')</span><span class="studio-info-row-value">' + fmtRupiah(ppnAmount) + '</span></div>';
  detailRows += '<div class="studio-info-row"><span class="studio-info-row-label">= Setelah PPN</span><span class="studio-info-row-value">' + fmtRupiah(setelahPpn) + '</span></div>';
  detailRows += '<div class="studio-info-row"><span class="studio-info-row-label">− Diskon (' + (s.diskonMode === 'persen' ? diskonValue + '%' : fmtRupiah(diskonValue)) + ')</span><span class="studio-info-row-value">' + fmtRupiah(diskonAmount) + '</span></div>';
  detailRows += '<div class="studio-info-row" style="border-top:2px solid var(--studio-border);padding-top:12px;margin-top:4px">'
    + '<span class="studio-info-row-label" style="font-weight:700;color:var(--studio-text)">Total Harga (Modal)</span>'
    + '<span class="studio-info-row-value" style="font-size:16px;color:#059669">' + fmtRupiah(total) + '</span>'
    + '</div>';
  if (qty > 0) {
    detailRows += '<div class="studio-info-row"><span class="studio-info-row-label">Harga efektif per ' + s.qtyUnit + '</span><span class="studio-info-row-value">' + fmtRupiah(Math.round(hargaPerPcsFinal)) + '</span></div>';
  }
  // [NEW] Harga Modal, Harga Jual, Untungnya — hanya tampil jika Harga Jual > 0
  if (hargaJual > 0) {
    const untungColor = untung >= 0 ? '#059669' : '#ef4444';
    detailRows += '<div class="studio-info-row" style="border-top:2px solid var(--studio-border);padding-top:12px;margin-top:4px">'
      + '<span class="studio-info-row-label" style="font-weight:700;color:var(--studio-text)">Harga Modal</span>'
      + '<span class="studio-info-row-value" style="font-weight:700">' + fmtRupiah(hargaModal) + '</span>'
      + '</div>';
    detailRows += '<div class="studio-info-row"><span class="studio-info-row-label">Harga Jual</span><span class="studio-info-row-value" style="font-weight:700">' + fmtRupiah(hargaJual) + '</span></div>';
    const untungSign = untung >= 0 ? '+' : '−';
    detailRows += '<div class="studio-info-row" style="background:' + untungColor + '08;border-radius:6px;padding:10px 12px;margin-top:4px">'
      + '<span class="studio-info-row-label" style="font-weight:700;color:' + untungColor + '">Untungnya</span>'
      + '<span class="studio-info-row-value" style="font-size:16px;font-weight:800;color:' + untungColor + '">' + untungSign + ' ' + fmtRupiah(Math.abs(untung)) + '</span>'
      + '</div>';
    if (qty > 0) {
      detailRows += '<div class="studio-info-row"><span class="studio-info-row-label">Untung per ' + s.qtyUnit + '</span><span class="studio-info-row-value" style="color:' + untungColor + '">' + (untung >= 0 ? '+' : '−') + ' ' + fmtRupiah(Math.abs(Math.round(untung/qty))) + '</span></div>';
    }
  }

  let detailHtml = '<div class="studio-info-card studio-info-card-anim">'
    + '<div class="studio-info-card-header">'
    + '<span class="studio-info-card-icon">' + ICONS.price + '</span>'
    + '<span class="studio-info-card-title">Rincian Perhitungan</span>'
    + '</div>'
    + '<div class="studio-info-card-body">' + detailRows + '</div>'
    + '</div>';
  right.insertAdjacentHTML('beforeend', detailHtml);
}

// ============================================================
// Render Shuffle Pages Studio
// ============================================================
const shufflePagesState = {
  jumlahHalaman: 12,
  isiW: 148, isiH: 210, isiPosisi: 'Portrait',
  printPaper: 'A3+', customPrintW: 480, customPrintH: 320,
  paperPosition: 'Portrait', paperPositionAuto: true,
  bleed: '0', margin: '0', bleedCustom: 3, marginCustom: 5, // [NEW] Bleed Area & Margin Kertas (dukung Custom)
  slide: '2 Sisi',
  imposisi: 'Normal', // [NEW v3.7] imposisi 2 Sisi: Normal | Head To Head | Head To Tail [v3.8: + Normal] [v4.1: default 'Normal']
  baris: 2, kolom: 2
};
const shuffleRotasiStatus = {};
// Flag: auto-fit Baris/Kolom hanya dijalankan saat Ukuran ISI / Kertas Print /
// Posisi Kertas berubah — agar editan manual Baris & Kolom tidak terhapus
// pada render biasa (mis. ubah Jumlah Halaman atau centang rotasi).
let _spFitDirty = true;

function shufflePaperBase() {
  const s = shufflePagesState;
  return s.printPaper === 'Custom'
    ? { w: Number(s.customPrintW) || 480, h: Number(s.customPrintH) || 320 }
    : (PRINT_PAPER_MAP[s.printPaper] || { w: 480, h: 320 });
}

// Dimensi ISI ternormalisasi mengikuti orientasi (Portrait = tinggi >= lebar)
function shuffleIsiDim() {
  const s = shufflePagesState;
  const a = Number(s.isiW) || 0, b = Number(s.isiH) || 0;
  const short = Math.min(a, b), long = Math.max(a, b);
  return s.isiPosisi === 'Landscape' ? { w: long, h: short } : { w: short, h: long };
}

// Kalkulasi fit (read-only, tidak mengubah state) — dipakai untuk warning
function shuffleFitCalc() {
  const s = shufflePagesState;
  const isi = shuffleIsiDim();
  const pp = shufflePaperBase();
  function fitFor(orient) {
    // [NEW] Bleed & Margin ikut memengaruhi fit (konvensi sama dgn tab lain):
    // cell efektif = ISI + 2×bleed, area kertas efektif = kertas − 2×margin
    const _mg = resolveMargin(s), _bl = resolveBleed(s);
    const pw = Math.max(0, (orient === 'Landscape' ? pp.w : pp.h) - _mg * 2);
    const ph = Math.max(0, (orient === 'Landscape' ? pp.h : pp.w) - _mg * 2);
    const cellW = isi.w + _bl * 2, cellH = isi.h + _bl * 2;
    const c = pw > 0 ? Math.max(0, Math.floor(pw / cellW)) : 0;
    const r = ph > 0 ? Math.max(0, Math.floor(ph / cellH)) : 0;
    const total = pw * ph, used = c * cellW * r * cellH;
    return { cols: c, rows: r, slots: c * r, util: total > 0 ? (used / total) * 100 : 0 };
  }
  const fL = fitFor('Landscape'), fP = fitFor('Portrait');
  let pos = s.paperPosition;
  if (s.paperPositionAuto !== false) {
    pos = (fP.slots > fL.slots) ? 'Portrait'
        : (fL.slots > fP.slots) ? 'Landscape'
        : (fP.util > fL.util) ? 'Portrait'
        : (fL.util > fP.util) ? 'Landscape'
        : (s.isiPosisi === 'Landscape' ? 'Landscape' : 'Portrait');
  }
  const f = pos === 'Landscape' ? fL : fP;
  return { cols: f.cols, rows: f.rows, pos, notFit: (f.cols === 0 || f.rows === 0) };
}

// Auto-fit: isi Baris & Kolom otomatis dari Ukuran ISI vs Kertas Print.
// Posisi Kertas Auto dipilih dari orientasi yang memuat halaman terbanyak;
// jika seri, mengikuti orientasi Ukuran ISI (Auto mengikuti Ukuran ISI).
// Dipanggil HANYA saat Ukuran ISI / Kertas Print / Posisi Kertas berubah.
function shuffleAutoFit() {
  const s = shufflePagesState;
  if (s.isiW <= 0 && s.isiH <= 0) { _spFitDirty = false; return false; }
  const fit = shuffleFitCalc();
  if (s.paperPositionAuto !== false) s.paperPosition = fit.pos;
  s.kolom = Math.max(1, fit.cols);
  s.baris = Math.max(1, fit.rows);
  _spFitDirty = false;
  return fit.notFit;
}

// Matriks layout N-up — konvensi Shuffle Pages:
// Portrait = isi per kolom (ke bawah dulu), Landscape = isi per baris (ke kanan dulu)
// balikKolom = urutan kolom dibalik (dipakai Slide 2 / sisi belakang)
function shuffleBuatMatrix(list, baris, kolom, posisi, balikKolom) {
  const matrix = Array.from({ length: baris }, () => Array(kolom).fill(''));
  for (let r = 0; r < baris; r++) {
    for (let c = 0; c < kolom; c++) {
      let index;
      if (posisi === 'Portrait') {
        index = balikKolom ? ((kolom - 1 - c) * baris + r) : (c * baris + r);
      } else {
        index = balikKolom ? (r * kolom + (kolom - 1 - c)) : (r * kolom + c);
      }
      if (index < list.length) matrix[r][c] = list[index];
    }
  }
  return matrix;
}

// [NEW v3.7] Rotasi dasar per halaman dari mode Imposisi 2 Sisi:
// Head To Head : Depan 270° (<) + Belakang 90° (>) — kepala kartu saling bertemu
// Head To Tail : Depan 0° + Belakang 180° (*) — kepala bertemu ekor
function spBaseRotFor(page) {
  const s = shufflePagesState;
  if (s.slide !== '2 Sisi') return 0;
  if (s.imposisi === 'Normal') return 0; // [v3.8] Normal = tanpa rotasi otomatis
  const isDepan = (Number(page) % 2 === 1);
  if (s.imposisi === 'Head To Tail') return isDepan ? 0 : 180;
  return isDepan ? 270 : 90;
}
function spMarkerForDeg(deg) {
  deg = ((deg % 360) + 360) % 360;
  if (deg === 270) return '<';
  if (deg === 90) return '>';
  if (deg === 180) return '*';
  return '';
}
// Gabungan halaman — tanda rotasi: < = putar kiri 90°, > = putar kanan 90°, * = putar 180°
// [v3.7] tanda = rotasi dasar imposisi 2 Sisi + rotasi manual per halaman
function shuffleFormatGabungan(list) {
  return list.map(function(n) {
    const r = shuffleRotasiStatus[n];
    let deg = spBaseRotFor(n);
    if (r) {
      if (r.left90) deg -= 90;
      else if (r.right90) deg += 90;
      else if (r.rot180) deg += 180;
    }
    return String(n) + spMarkerForDeg(deg);
  }).join(' ');
}

// [FIX LANDSCAPE] Kecilkan (scale) baris tombol rotasi yang melebihi lebar cell-nya.
// Layout cell: nomor di atas, ↺90° ↻90° 180° satu baris di bawah — jika baris rotasi
// lebih lebar dari cell (grid padat / landscape), isi tetap terlihat utuh tanpa terpotong.
let spResizeTimer = null;
function spApplyRotScale(rootEl) {
  if (!rootEl) return;
  rootEl.querySelectorAll('.sp-cell-rot').forEach(function(el) {
    el.style.transform = 'none';
    const cell = el.closest('.sp-cell');
    if (!cell) return;
    const avail = cell.clientWidth - 6; // kurangi padding cell (2px) + toleransi border
    const need = el.scrollWidth;
    if (need > avail && need > 0) {
      el.style.transform = 'scale(' + Math.max(0.4, avail / need).toFixed(3) + ')';
    }
  });
}
// Saat window di-resize lebar card berubah → ukur ulang scale baris rotasi
window.addEventListener('resize', function() {
  if (typeof activeTab !== 'undefined' && activeTab === 'shuffle-pages') {
    clearTimeout(spResizeTimer);
    spResizeTimer = setTimeout(function() { spApplyRotScale(document.getElementById('shufflePagesRightPanel')); }, 150);
  }
});

function shuffleSlideCard(matrix, title, badgeText, badgeClass, ppDim, isi, s, extraSub, baseRot) {
  baseRot = baseRot || 0; // [v3.7] rotasi dasar imposisi 2 Sisi untuk seluruh slide
  let html = '<div class="sp-slide-card"><div class="sp-slide-head">';
  html += '<div style="min-width:0"><div class="sp-slide-title">' + title + '</div>';
  if (extraSub) html += '<div class="sp-slide-sub">' + extraSub + '</div>';
  html += '</div>';
  html += '<span class="sp-slide-badge ' + badgeClass + '">' + badgeText + '</span></div>';
  const maxW = ppDim.w >= ppDim.h ? 520 : 330;
  // [PROPORTIONAL PREVIEW] Kertas print dirender utuh sesuai rasio kertas (mis. A3+),
  // grid sel (Ukuran ISI + bleed) diskalakan PROPORSIONAL mm→% dan diposisikan di tengah
  // area usable (kertas − 2×margin) — sisa space kertas keliling grid terlihat nyata.
  const mg = resolveMargin(s), bl = resolveBleed(s);
  const cols = matrix[0].length, rowsN = matrix.length;
  const cellWmm = isi.w + bl * 2, cellHmm = isi.h + bl * 2; // ukuran potong sel (konvensi sama dgn fit)
  const gridWmm = cols * cellWmm, gridHmm = rowsN * cellHmm;
  const usableWmm = Math.max(0, ppDim.w - mg * 2), usableHmm = Math.max(0, ppDim.h - mg * 2);
  const offXmm = Math.max(0, mg + (usableWmm - gridWmm) / 2);
  const offYmm = Math.max(0, mg + (usableHmm - gridHmm) / 2);
  const gridLeftPct = Math.max(0, Math.min(100, offXmm / Math.max(1, ppDim.w) * 100));
  const gridTopPct = Math.max(0, Math.min(100, offYmm / Math.max(1, ppDim.h) * 100));
  const gridWPct = Math.max(0, Math.min(100 - gridLeftPct, gridWmm / Math.max(1, ppDim.w) * 100));
  const gridHPct = Math.max(0, Math.min(100 - gridTopPct, gridHmm / Math.max(1, ppDim.h) * 100));
  // Margin visual (zona amber): skala mm→px terhadap lebar kertas preview (maxW)
  const mgPx = (mg > 0 && ppDim.w > 0) ? Math.max(4, mg / ppDim.w * maxW) : 0;
  // Bleed visual: skala mm→px terhadap lebar cell preview yang proporsional
  const gridPxW = gridWPct / 100 * Math.min(maxW, 520);
  const cellPxW = cols > 0 ? gridPxW / cols : 0;
  let blPx = 0;
  if (bl > 0 && cols > 0) {
    blPx = Math.min(5, Math.max(1.5, bl / Math.max(1, ppDim.w) * cellPxW));
  }
  // TANPA BLEED → cell DEMPET (gap 0). DENGAN BLEED → jarak antar cell = 2× zona bleed
  // (ketemu di garis potong tengah). Font nomor adaptif terhadap lebar cell aktual.
  const gapPx = bl > 0 ? Math.min(12, blPx * 2) : 0;
  const gapStyle = 'gap:' + gapPx.toFixed(1) + 'px;';
  const numFont = Math.min(15, Math.max(9, Math.round(cellPxW * 0.22)));
  // [NEW] Zona warna preview — Bleed Area = ring MERAH keliling tiap cell (area potong
  // bertambah luar), Margin Kertas = band AMBER di tepi dalam kertas + garis putus-putus
  // batas area konten. Keduanya hanya tampil bila nilai > 0, plus chip legenda warna.
  let bleedCss = '';
  if (blPx > 0) {
    bleedCss = ' box-shadow:0 0 0 ' + blPx.toFixed(1) + 'px rgba(239,68,68,0.15);border-color:rgba(239,68,68,0.55);';
  }
  let marginZone = '';
  if (mgPx > 0) {
    marginZone = '<div class="sp-zone-margin" style="box-shadow:inset 0 0 0 ' + mgPx.toFixed(1) + 'px rgba(245,158,11,0.16);">'
      + '<span class="sp-zone-line" style="inset:' + mgPx.toFixed(1) + 'px;border:1.5px dashed rgba(217,119,6,0.5);"></span></div>';
  }
  let legendHtml = '';
  if (bl > 0 || mg > 0) {
    legendHtml = '<div class="sp-zone-legend">';
    if (bl > 0) legendHtml += '<span class="sp-legend-chip"><i style="background:#ef4444"></i>Bleed Area ' + bl + ' mm</span>';
    if (mg > 0) legendHtml += '<span class="sp-legend-chip"><i style="background:#f59e0b"></i>Margin Kertas ' + mg + ' mm</span>';
    legendHtml += '</div>';
  }
  html += legendHtml;
  // [NEW] sp-tight: cell dempet (tanpa bleed) — sudut cell diratakan agar susunan rapat mulus
  // [PROPORTIONAL] kertas utuh (aspect-ratio Kertas Print) → grid sel absolut proporsional di tengah
  html += '<div class="sp-paper-wrap"><div class="sp-paper" style="aspect-ratio:' + ppDim.w + ' / ' + ppDim.h + ';max-width:' + maxW + 'px;">';
  html += marginZone;
  html += '<div class="sp-grid' + (gapPx === 0 ? ' sp-tight' : '') + '" style="left:' + gridLeftPct.toFixed(2) + '%;top:' + gridTopPct.toFixed(2) + '%;width:' + gridWPct.toFixed(2) + '%;height:' + gridHPct.toFixed(2) + '%;' + gapStyle + 'grid-template-columns:repeat(' + cols + ',1fr);grid-template-rows:repeat(' + rowsN + ',1fr);">';
  matrix.forEach(function(row) {
    row.forEach(function(cell) {
      if (!cell) {
        html += '<div class="sp-cell"><span class="sp-cell-empty">&ndash;</span></div>';
      } else {
        const rs = shuffleRotasiStatus[cell] || { left90: false, right90: false, rot180: false };
        // [ROTASI PREVIEW] nomor halaman diputar sesuai pilihan rotasi (↺90° / ↻90° / 180°)
        // [v3.7] ditambah rotasi dasar imposisi 2 Sisi (Head To Head / Head To Tail)
        const manualDeg = rs.left90 ? -90 : rs.right90 ? 90 : rs.rot180 ? 180 : 0;
        const rotDeg = ((baseRot + manualDeg) % 360 + 360) % 360;
        html += '<div class="sp-cell"' + (bleedCss ? ' style="' + bleedCss + '"' : '') + '><span class="sp-cell-num" style="transform:rotate(' + rotDeg + 'deg);font-size:' + numFont + 'px">' + cell + '</span><span class="sp-cell-rot">';
        html += '<label><input type="checkbox" class="rot-left" data-page="' + cell + '"' + (rs.left90 ? ' checked' : '') + '>↺90°</label>';
        html += '<label><input type="checkbox" class="rot-right" data-page="' + cell + '"' + (rs.right90 ? ' checked' : '') + '>↻90°</label>';
        html += '<label><input type="checkbox" class="rot-180" data-page="' + cell + '"' + (rs.rot180 ? ' checked' : '') + '>180°</label>';
        html += '</span></div>';
      }
    });
  });
  html += '</div></div></div>';
  html += '<div class="sp-slide-info">';
  html += '<div class="sp-slide-info-row"><span class="sp-slide-info-label">Kertas Print</span><span class="sp-slide-info-value">' + (s.printPaper === 'Custom' ? 'Custom' : s.printPaper) + ' — ' + fmtDimWxH(ppDim.w, ppDim.h) + '</span></div>';
  html += '<div class="sp-slide-info-row"><span class="sp-slide-info-label">Ukuran ISI</span><span class="sp-slide-info-value">' + fmtDimWxH(isi.w, isi.h) + '</span></div>';
  html += '<div class="sp-slide-info-row"><span class="sp-slide-info-label">Posisi Kertas</span><span class="sp-slide-info-value">' + s.paperPosition + (s.paperPositionAuto !== false ? ' (Auto)' : '') + '</span></div>';
  html += '<div class="sp-slide-info-row"><span class="sp-slide-info-label">Bleed Area</span><span class="sp-slide-info-value">' + (bl > 0 ? bl + ' mm' : 'Tanpa Bleed') + '</span></div>';
  html += '<div class="sp-slide-info-row"><span class="sp-slide-info-label">Margin Kertas</span><span class="sp-slide-info-value">' + (mg > 0 ? mg + ' mm' : 'Tanpa Margin') + '</span></div>';
  html += '<div class="sp-slide-info-row"><span class="sp-slide-info-label">Layout</span><span class="sp-slide-info-value">' + matrix[0].length + ' kolom × ' + matrix.length + ' baris</span></div>';
  html += '</div></div>';
  return html;
}

function renderShufflePages(skipLeftPanel = false) {
  const s = shufflePagesState;
  const notFit = _spFitDirty ? shuffleAutoFit() : shuffleFitCalc().notFit;
  const isi = shuffleIsiDim();
  const ppBase = shufflePaperBase();
  const ppDim = s.paperPosition === 'Landscape' ? { w: ppBase.w, h: ppBase.h } : { w: ppBase.h, h: ppBase.w };
  const duaSisi = s.slide === '2 Sisi';

  // ===== Menu Kiri =====
  if (!skipLeftPanel) {
    const left = document.getElementById('shufflePagesLeftPanel');
    left.innerHTML = '';

    createSectionTitle('shufflePagesLeftPanel', 'Halaman');
    createNumberInput('shufflePagesLeftPanel', 'Jumlah Halaman', s.jumlahHalaman, v => { s.jumlahHalaman = v; }, 1, ICONS.sheets, 99999);
    // [NEW] Toggle 2 Sisi (On/Off) — posisinya langsung di bawah Jumlah Halaman
    createToggle('shufflePagesLeftPanel', '2 Sisi (On/Off)', duaSisi, v => { s.slide = v ? '2 Sisi' : '1 Sisi'; }, ICONS.twoSides);
    // [NEW v3.7] Dropdown Imposisi 2 Sisi — tampil HANYA saat toggle 2 Sisi ON
    // [v3.8] 3 opsi: Normal (tanpa rotasi otomatis), Head To Head, Head To Tail
    if (duaSisi) {
      createDropdown('shufflePagesLeftPanel', 'Imposisi 2 Sisi',
        [{ value: 'Normal', label: 'Normal' }, { value: 'Head To Head', label: 'Head To Head' }, { value: 'Head To Tail', label: 'Head To Tail' }],
        s.imposisi || 'Normal', // [v4.1] fallback default 'Normal'
        v => { s.imposisi = v; }, ICONS.twoSides);
    }

    createSectionTitle('shufflePagesLeftPanel', 'Ukuran ISI');
    createDimensionInput('shufflePagesLeftPanel', 'Ukuran ISI (Custom)', s.isiW, s.isiH,
      v => { s.isiW = v; shuffleAutoFit(); renderAll(false); },
      v => { s.isiH = v; shuffleAutoFit(); renderAll(false); }, ICONS.size);
    createDropdown('shufflePagesLeftPanel', 'Posisi Desain', [{ value: 'Portrait', label: 'Portrait' }, { value: 'Landscape', label: 'Landscape' }], s.isiPosisi,
      v => { s.isiPosisi = v; shuffleAutoFit(); }, ICONS.portrait);

    createSectionTitle('shufflePagesLeftPanel', 'Kertas Print');
    createDropdown('shufflePagesLeftPanel', 'Kertas Print', PRINT_PAPER_OPTIONS, s.printPaper,
      v => { s.printPaper = v; shuffleAutoFit(); }, ICONS.printPaper);
    if (s.printPaper === 'Custom') {
      createDimensionInput('shufflePagesLeftPanel', '', s.customPrintW, s.customPrintH,
        v => { s.customPrintW = v; shuffleAutoFit(); renderAll(false); },
        v => { s.customPrintH = v; shuffleAutoFit(); renderAll(false); }, ICONS.printPaper);
    }
    createDropdown('shufflePagesLeftPanel', 'Posisi Kertas', [{ value: 'Auto', label: 'Auto' }, { value: 'Landscape', label: 'Landscape' }, { value: 'Portrait', label: 'Portrait' }], (s.paperPositionAuto !== false ? 'Auto' : s.paperPosition),
      v => { if (v === 'Auto') { s.paperPositionAuto = true; } else { s.paperPositionAuto = false; s.paperPosition = v; } shuffleAutoFit(); }, ICONS.landscape);
    // [NEW] Menu kiri: Bleed Area & Margin Kertas — semua dropdown mendukung Custom (isi manual)
    createDropdown('shufflePagesLeftPanel', 'Bleed Area', bleedOptionsFor(s), s.bleed,
      v => { s.bleed = v; shuffleAutoFit(); }, ICONS.bleed);
    if (s.bleed === 'custom') {
      createNumberInput('shufflePagesLeftPanel', 'Nilai Bleed (mm)', s.bleedCustom, v => { s.bleedCustom = v; shuffleAutoFit(); }, 0, ICONS.bleed, 50, 0.5);
    }
    createDropdown('shufflePagesLeftPanel', 'Margin Kertas', marginOptionsFor(s), s.margin,
      v => { s.margin = v; shuffleAutoFit(); }, ICONS.margin);
    if (s.margin === 'custom') {
      createNumberInput('shufflePagesLeftPanel', 'Nilai Margin (mm)', s.marginCustom, v => { s.marginCustom = v; shuffleAutoFit(); }, 0, ICONS.margin, 100, 0.5);
    }

    createSectionTitle('shufflePagesLeftPanel', 'Layout');
    createNumberInput('shufflePagesLeftPanel', 'Baris ⬇', s.baris, v => { s.baris = v; }, 1, ICONS.landscape, 99);
    createNumberInput('shufflePagesLeftPanel', 'Kolom ➡', s.kolom, v => { s.kolom = v; }, 1, ICONS.pcs, 99);
  }

  // ===== Perhitungan =====
  const totalPages = Number(s.jumlahHalaman) || 0;
  const totalHalaman = duaSisi ? totalPages * 2 : totalPages;
  const perSisi = s.baris * s.kolom;
  const perLembar = duaSisi ? perSisi * 2 : perSisi;
  const lembarCetak = perLembar > 0 ? Math.ceil(totalHalaman / perLembar) : 0;

  // Susun matriks per lembar cetak (berurutan sampai semua halaman terpakai)
  const sheets = [];
  if (perSisi > 0 && totalHalaman > 0) {
    if (!duaSisi) {
      const angkaList = Array.from({ length: totalHalaman }, (_, i) => i + 1);
      for (let i = 0; i < angkaList.length; i += perSisi) {
        sheets.push({ m1: shuffleBuatMatrix(angkaList.slice(i, i + perSisi), s.baris, s.kolom, s.paperPosition, false), m2: null });
      }
    } else {
      // 2 Sisi: halaman ganjil → Slide 1 (Depan), genap → Slide 2 (Belakang, kolom dibalik)
      const angkaList = Array.from({ length: totalHalaman }, (_, i) => i + 1);
      const ganjil = angkaList.filter(n => n % 2 === 1);
      const genap = angkaList.filter(n => n % 2 === 0);
      const nSheets = Math.max(Math.ceil(ganjil.length / perSisi), Math.ceil(genap.length / perSisi));
      for (let i = 0; i < nSheets; i++) {
        sheets.push({
          m1: shuffleBuatMatrix(ganjil.slice(i * perSisi, (i + 1) * perSisi), s.baris, s.kolom, s.paperPosition, false),
          m2: shuffleBuatMatrix(genap.slice(i * perSisi, (i + 1) * perSisi), s.baris, s.kolom, s.paperPosition, true)
        });
      }
    }
  }

  // ===== Panel Kanan =====
  const right = document.getElementById('shufflePagesRightPanel');
  right.innerHTML = '';
  let html = '<div class="studio-result-cards">';
  function spCard(label, value, sub, cls, unit) {
    return `<div class="studio-result-card ${cls} studio-result-card-anim" role="button" tabindex="0" onclick="copyText('${value} ${unit}');">`
      + `<div class="studio-result-card-top"><span class="studio-result-label">${label}</span></div>`
      + `<div class="studio-result-value">${value}</div>`
      + `<div class="studio-result-sub">${sub}</div><div class="studio-result-bar"></div></div>`;
  }
  html += spCard('Total Halaman', totalHalaman, duaSisi ? totalPages + ' isi × 2 sisi' : 'Cetak 1 sisi', 'card-blue', 'hal');
  html += spCard('Hal / Sisi', perSisi, s.kolom + ' kolom × ' + s.baris + ' baris', 'card-violet', 'hal');
  html += spCard('Hal / Lembar', perLembar, duaSisi ? 'Depan + Belakang' : '1 sisi kertas', 'card-sky', 'hal');
  html += spCard('Lembar Cetak', lembarCetak, (s.printPaper === 'Custom' ? 'Custom' : s.printPaper) + ' per lembar', 'card-emerald', 'lbr');
  html += '</div>';

  // Warning bila Ukuran ISI tidak muat di Kertas Print
  if (notFit) {
    html += '<div class="studio-info-card studio-info-warning" style="margin-bottom:14px"><div class="studio-info-card-header">'
      + '<span class="studio-info-card-title">Ukuran ISI tidak muat di Kertas Print</span></div><div class="studio-info-card-body">'
      + 'Ukuran ISI <b>' + fmtDimWxH(isi.w, isi.h) + '</b> tidak muat dalam kertas <b>' + (s.printPaper === 'Custom' ? 'Custom' : s.printPaper)
      + ' (' + fmtDimWxH(ppDim.w, ppDim.h) + ')</b> posisi ' + s.paperPosition
      + '. Perkecil Ukuran ISI, ganti Kertas Print yang lebih besar, atau ubah Posisi Kertas.</div></div>';
  }

  // Preview Kertas — STATIS: 1 Sisi → tampil Slide 1 (Depan) saja;
  // 2 Sisi → tampil Slide 1 (Depan) dan Slide 2 (Belakang) berdampingan
  if (sheets.length > 0) {
    html += '<div class="sp-preview-row">';
    const shFirst = sheets[0];
    const sheetNote = '';
    if (!duaSisi) {
      html += shuffleSlideCard(shFirst.m1, 'Slide 1 (Depan)', 'Depan', 'sp-badge-front', ppDim, isi, s, sheetNote);
    } else {
      html += shuffleSlideCard(shFirst.m1, 'Slide 1 (Depan)', 'Depan · Ganjil', 'sp-badge-front', ppDim, isi, s, sheetNote, spBaseRotFor(1));
      html += shuffleSlideCard(shFirst.m2, 'Slide 2 (Belakang)', 'Belakang · Genap', 'sp-badge-back', ppDim, isi, s, '', spBaseRotFor(2));
    }
    html += '</div>';
  }

  // Gabungan Halaman — urutan cetak semua lembar
  let hasilGabung = [];
  sheets.forEach(function(sh) {
    [sh.m1, sh.m2].forEach(function(m) {
      if (m) m.forEach(function(row) { hasilGabung = hasilGabung.concat(row); });
    });
  });
  hasilGabung = hasilGabung.filter(function(x) { return x !== '' && x !== null && typeof x !== 'undefined'; });
  const gabunganText = hasilGabung.length ? shuffleFormatGabungan(hasilGabung) : '&ndash;';

  html += '<div class="sp-gabungan-box"><div style="min-width:0;flex:1"><div class="sp-gabungan-title">Gabungan Halaman :</div>';
  const _spImpLabel = ['Normal', 'Head To Head', 'Head To Tail'].indexOf(s.imposisi) >= 0 ? s.imposisi : 'Normal'; // [v3.8: + Normal] [v4.1: fallback 'Normal']
  html += '<div class="sp-gabungan-sub">' + (duaSisi ? 'Depan (ganjil) lalu Belakang (genap) · ' + _spImpLabel : 'Urutan cetak 1 sisi') + (sheets.length > 1 ? ' — ' + sheets.length + ' lembar cetak' : '') + '</div>';
  html += '<div class="sp-gabungan-text" id="spHasilText">' + gabunganText + '</div></div>';
  html += '<button class="sp-copy-btn" onclick="shuffleCopyHasil()" title="Salin gabungan halaman">Copy</button></div>';

  // Detail Shuffle
  html += '<div class="studio-info-card studio-info-info" style="margin-top:16px"><div class="studio-info-card-header"><span class="studio-info-card-title">Detail Shuffle</span></div><div class="studio-info-card-body">';
  html += '<div class="studio-info-row"><span class="studio-info-row-label">Ukuran ISI</span><span class="studio-info-row-value">' + fmtDimWxH(isi.w, isi.h) + ' (' + s.isiPosisi + ')</span></div>';
  html += '<div class="studio-info-row"><span class="studio-info-row-label">Kertas Print</span><span class="studio-info-row-value">' + (s.printPaper === 'Custom' ? 'Custom — ' + fmtDimWxH(Number(s.customPrintW) || 0, Number(s.customPrintH) || 0) : s.printPaper + ' — ' + fmtDimWxH(ppDim.w, ppDim.h)) + '</span></div>';
  html += '<div class="studio-info-row"><span class="studio-info-row-label">Posisi Kertas</span><span class="studio-info-row-value">' + s.paperPosition + (s.paperPositionAuto !== false ? ' (Auto — mengikuti Ukuran ISI)' : ' (Manual)') + '</span></div>';
  html += '<div class="studio-info-row"><span class="studio-info-row-label">Bleed Area</span><span class="studio-info-row-value">' + (resolveBleed(s) > 0 ? resolveBleed(s) + ' mm' : 'Tanpa Bleed') + '</span></div>';
  html += '<div class="studio-info-row"><span class="studio-info-row-label">Margin Kertas</span><span class="studio-info-row-value">' + (resolveMargin(s) > 0 ? resolveMargin(s) + ' mm' : 'Tanpa Margin') + '</span></div>';
  html += '<div class="studio-info-row"><span class="studio-info-row-label">Urutan Isi Halaman</span><span class="studio-info-row-value">' + (s.paperPosition === 'Portrait' ? 'Per kolom — ke bawah dulu' : 'Per baris — ke kanan dulu') + '</span></div>';
  html += '<div class="studio-info-row"><span class="studio-info-row-label">Slide</span><span class="studio-info-row-value">' + s.slide + (duaSisi ? ' — Slide 2 kolom dibalik' : '') + '</span></div>';
  // [NEW v3.7] baris imposisi 2 Sisi (hanya saat 2 Sisi ON); [v3.8] + kasus Normal
  if (duaSisi) {
    const _spImpDetail = s.imposisi === 'Head To Tail' ? 'Head To Tail — Depan 0°, Belakang 180°'
      : s.imposisi === 'Normal' ? 'Normal — tanpa rotasi otomatis'
      : 'Head To Head — Depan 270°, Belakang 90°';
    html += '<div class="studio-info-row"><span class="studio-info-row-label">Imposisi 2 Sisi</span><span class="studio-info-row-value">' + _spImpDetail + '</span></div>';
  }
  html += '<div class="studio-info-row"><span class="studio-info-row-label">Tanda Rotasi</span><span class="studio-info-row-value">&lt; = kiri 90°, &gt; = kanan 90°, * = 180°</span></div>';
  html += '</div></div>';

  right.innerHTML = html;

  // [FIX LANDSCAPE] Auto-scale baris tombol rotasi yang lebih lebar dari cell-nya —
  // mencegah ↺90° ↻90° 180° terpotong pada grid padat / preview landscape.
  spApplyRotScale(right);

  // Re-scale saat window di-resize (lebar card berubah pada breakpoint)
  clearTimeout(spResizeTimer);
  spResizeTimer = setTimeout(function() { spApplyRotScale(document.getElementById('shufflePagesRightPanel')); }, 150);

  // Checkbox rotasi — saling eksklusif per halaman (↺90° / ↻90° / 180°)
  right.querySelectorAll('.rot-left, .rot-right, .rot-180').forEach(function(cb) {
    cb.addEventListener('change', function(e) {
      const page = e.target.getAttribute('data-page');
      if (!shuffleRotasiStatus[page]) shuffleRotasiStatus[page] = { left90: false, right90: false, rot180: false };
      const type = e.target.classList.contains('rot-left') ? 'left90' : e.target.classList.contains('rot-right') ? 'right90' : 'rot180';
      if (e.target.checked) {
        ['left90', 'right90', 'rot180'].filter(function(t) { return t !== type; }).forEach(function(ot) {
          shuffleRotasiStatus[page][ot] = false;
          const cls = ot === 'left90' ? 'rot-left' : ot === 'right90' ? 'rot-right' : 'rot-180';
          const otherCb = right.querySelector('.' + cls + '[data-page="' + page + '"]');
          if (otherCb) otherCb.checked = false;
        });
        shuffleRotasiStatus[page][type] = true;
      } else {
        shuffleRotasiStatus[page][type] = false;
      }
      // [ROTASI PREVIEW] putar nomor halaman di preview sesuai pilihan
      const cellEl = e.target.closest('.sp-cell');
      const numEl = cellEl ? cellEl.querySelector('.sp-cell-num') : null;
      if (numEl) {
        const st = shuffleRotasiStatus[page] || {};
        const manDeg = st.left90 ? -90 : st.right90 ? 90 : st.rot180 ? 180 : 0;
        numEl.style.transform = 'rotate(' + (((spBaseRotFor(page) + manDeg) % 360 + 360) % 360) + 'deg)';
      }
      const hasilEl = document.getElementById('spHasilText');
      if (hasilEl) hasilEl.textContent = shuffleFormatGabungan(hasilGabung);
    });
  });
}

function shuffleCopyHasil() {
  const el = document.getElementById('spHasilText');
  copyText(el ? el.textContent : '');
}

// ============================================================
// Render All
// ============================================================
function renderAll(skipLeftPanel=false) {
  // [FIX SCROLL] Simpan posisi scroll (window + SEMUA panel kiri/kanan tiap tab)
  // sebelum render ulang, lalu pulihkan setelahnya — memilih dropdown/toggle tidak
  // lagi melompat ke atas. Berlaku untuk semua tab.
  const _sy = window.scrollY, _sx = window.scrollX;
  const _lps = Array.from(document.querySelectorAll('.studio-left-panel'));
  const _rps = Array.from(document.querySelectorAll('.studio-right-panel'));
  const _syL = _lps.map(el => el.scrollTop);
  const _syR = _rps.map(el => el.scrollTop);
  // [FIX SCROLL] Lepas fokus dari tombol/checkbox yang akan terhapus saat render
  // ulang (fokus hilang saat elemen dihapus membuat Chrome scroll ke atas).
  // Input teks/angka dipertahankan agar tidak mengganggu sedang mengetik.
  const _ae = document.activeElement;
  if (_ae && !_ae.isContentEditable) {
    const isTextInput = (_ae.tagName === 'INPUT' && !['checkbox', 'radio', 'button', 'range'].includes(_ae.type)) || _ae.tagName === 'TEXTAREA';
    if (!isTextInput) _ae.blur();
  }
  if (activeTab === 'cover-layout') renderCoverLayout(skipLeftPanel);
  else if (activeTab === 'paper-cut') renderPaperCut(skipLeftPanel);
  else if (activeTab === 'kalkulator-isi') renderKalkulatorIsi(skipLeftPanel);
  else if (activeTab === 'shuffle-pages') renderShufflePages(skipLeftPanel);
  else if (activeTab === 'referensi-kertas') renderReferensiKertas();
  else if (activeTab === 'hitung-harga') renderHitungHarga(skipLeftPanel);
  // [NEW v4.4] Tools
  else if (activeTab === 'img2pdf') renderImg2Pdf(skipLeftPanel);
  else if (activeTab === 'pdfcomp') renderPdfComp(skipLeftPanel);
  else if (activeTab === 'qrgen') renderQrGen(skipLeftPanel);
  else if (activeTab === 'lubang') renderLubang(skipLeftPanel);
  saveState();
  // Pulihkan posisi scroll seperti sebelum render (per panel, sesuai urutan DOM)
  _lps.forEach((el, i) => { el.scrollTop = _syL[i]; });
  _rps.forEach((el, i) => { el.scrollTop = _syR[i]; });
  window.scrollTo(_sx, _sy);
}

// ============================================================
// Export PDF — Feature 5
// ============================================================
function exportPdf(elementId, filename, infoLines=[]) {
  // [Fix] Guard against jsPDF not loaded (CDN failure / ad blocker)
  if (!window.jspdf) {
    showToast('Library jsPDF belum dimuat — cek koneksi internet', 'warning');
    return;
  }
  try {
  renderSvgToCanvas(elementId, infoLines, function(canvas, { origW, origH, infoH, svgUrl }) {
    const imgData = canvas.toDataURL('image/png', 1.0);
    const { jsPDF } = window.jspdf;
    // Full A4 page — scale image+info to fill A4 with proper aspect ratio
    const A4_W = 210, A4_H = 297;
    const totalH = origH + infoH;
    const imgAspect = origW / totalH;
    const a4Aspect = A4_W / A4_H;
    let pdfW, pdfH, drawW, drawH, drawX, drawY;
    if (imgAspect > a4Aspect) {
      // Landscape content — use A4 landscape
      pdfW = A4_H; pdfH = A4_W;
      drawH = pdfH; drawW = pdfH * imgAspect;
      if (drawW > pdfW) { drawW = pdfW; drawH = pdfW / imgAspect; }
      drawX = (pdfW - drawW) / 2; drawY = (pdfH - drawH) / 2;
    } else {
      // Portrait content — use A4 portrait
      pdfW = A4_W; pdfH = A4_H;
      drawW = pdfW; drawH = pdfW / imgAspect;
      if (drawH > pdfH) { drawH = pdfH; drawW = pdfH * imgAspect; }
      drawX = (pdfW - drawW) / 2; drawY = (pdfH - drawH) / 2;
    }
    const pdf = new jsPDF({ orientation: imgAspect > a4Aspect ? 'landscape' : 'portrait', unit: 'mm', format: 'a4' });
    pdf.addImage(imgData, 'PNG', drawX, drawY, drawW, drawH);
    pdf.save(filename);
    URL.revokeObjectURL(svgUrl);
    showToast('PDF Ultra HD exported (Full A4)!');
  });
  } catch(e) {
    showToast('Gagal export PDF: ' + (e.message || 'Unknown error'), 'warning');
    console.error('BlueBee Studio: exportPdf error', e);
  }
}

// ============================================================
// Reset All — Feature 1
// ============================================================
function resetAll() {
  // [NEW] Trigger animasi spin & flash pada tombol reset
  const resetBtn = document.querySelector('.studio-reset-btn');
  if (resetBtn) {
    resetBtn.classList.remove('resetting');
    // Force reflow supaya animasi bisa restart
    void resetBtn.offsetWidth;
    resetBtn.classList.add('resetting');
    setTimeout(() => resetBtn.classList.remove('resetting'), 700);
  }
  Object.assign(coverState, {
    bookSize:'A4', position:'Portrait', customW:210, customH:297,
    paperIsi:'hvs75', jumlahHalaman:400, duaSisi:true, jilid:'spiral',
    printPaper:'A3+', customPrintW:480, customPrintH:320, paperPosition:'Landscape', paperPositionAuto:true, bleed:'0', margin:'0', bleedCustom:3, marginCustom:5,
    coverIsi:'carton260'
  });
  Object.assign(paperCutState, {
    customW:148, customH:210, position:'Portrait', chacaRel:false, jumlahPcs:200,
    printPaper:'A3+', customPrintW:480, customPrintH:320, paperPosition:'Landscape', paperPositionAuto:true,
    bleed:'0', margin:'0', bleedCustom:3, marginCustom:5
  });
  Object.assign(kalkulatorIsiState, {
    jumlahHalaman:20, bookSize:'A4', position:'Portrait', customW:210, customH:297,
    duaSisi:true,
    printPaper:'A3+', customPrintW:480, customPrintH:320, paperPosition:'Landscape', paperPositionAuto:true,
    bleed:'0', margin:'0', bleedCustom:3, marginCustom:5,
    // [BUG FIX] Reset paperIsi & jilid juga — sebelumnya tidak di-reset,
    // sehingga pilihan user sebelumnya tetap dipertahankan setelah reset.
    paperIsi:'hvs75', jilid:'spiral'
  });
  Object.assign(shufflePagesState, {
    jumlahHalaman: 12, isiW: 148, isiH: 210, isiPosisi: 'Portrait',
    printPaper: 'A3+', customPrintW: 480, customPrintH: 320,
    paperPosition: 'Portrait', paperPositionAuto: true,
    bleed: '0', margin: '0', bleedCustom: 3, marginCustom: 5,
    slide: '2 Sisi', imposisi: 'Normal', // [FIX v4.0] imposisi ikut di-reset [v4.1] nilai reset = 'Normal'
    baris: 2, kolom: 2
  });
  for (const sk in shuffleRotasiStatus) delete shuffleRotasiStatus[sk];
  _spFitDirty = false; // default sudah konsisten dengan auto-fit
  Object.assign(hitungHargaState, {
    ukuran:'A4', customW:210, customH:297,
    qty:100, qtyUnit:'pcs',
    hargaPcs:500, hargaUnit:'pcs',
    jenisKertas:'hvs75',
    cetakDuaSisi:false,
    laminasi:'none', laminasiHarga:0, laminasiDuaSisi:false,
    potongMode:'potong', potongHarga:50000,
    hargaJual:0,
    ppnMode:'persen', ppnValue:11,
    diskonMode:'persen', diskonValue:5
  });
  referensiSearchFilter = '';
  referensiCompareA = 'A4'; referensiCompareB = 'A3'; // [FIX v4.0] compare referensi ikut di-reset
  coverZoom = 0;
  paperCutZoom = 0;
  _previewState.cover.zoom = 1; _previewState.cover.panX = 0; _previewState.cover.panY = 0;
  _previewState.papercut.zoom = 1; _previewState.papercut.panX = 0; _previewState.papercut.panY = 0;
  coverSplitView = 'front';
  localStorage.removeItem('studio-cover-state');
  localStorage.removeItem('studio-papercut-state');
  localStorage.removeItem('studio-cover-zoom');
  localStorage.removeItem('studio-papercut-zoom');
  localStorage.removeItem('studio-preview-state');
  localStorage.removeItem('studio-cover-splitView');
  localStorage.removeItem('studio-active-tab');
  localStorage.removeItem('studio-kalkulator-isi-state');
  localStorage.removeItem('studio-shuffle-pages-state');
  localStorage.removeItem('studio-referensi-filter');
  localStorage.removeItem('studio-referensi-compare-a');
  localStorage.removeItem('studio-referensi-compare-b');
  localStorage.removeItem('studio-hitung-harga-state');
  localStorage.removeItem('studio-unit'); // [FIX v4.0] satuan ikut dihapus dari penyimpanan
  currentUnit = 'mm';
  document.querySelectorAll('.studio-dim-unit-btn').forEach(btn => btn.textContent = 'mm');
  if (typeof lubangReset === 'function') lubangReset(); // [NEW v4.4] reset 4 tool baru
  renderAll();
  showToast('Direset ke default');
}

// ============================================================
// Save / Load State — Feature 7
// ============================================================
function saveState() {
  try {
    localStorage.setItem('studio-cover-state', JSON.stringify(coverState));
    localStorage.setItem('studio-papercut-state', JSON.stringify(paperCutState));
    localStorage.setItem('studio-cover-zoom', coverZoom);
    localStorage.setItem('studio-papercut-zoom', paperCutZoom);
    localStorage.setItem('studio-cover-splitView', coverSplitView);
    localStorage.setItem('studio-active-tab', activeTab);
    localStorage.setItem('studio-unit', currentUnit);
    localStorage.setItem('studio-kalkulator-isi-state', JSON.stringify(kalkulatorIsiState));
    localStorage.setItem('studio-shuffle-pages-state', JSON.stringify(shufflePagesState));
    localStorage.setItem('studio-referensi-filter', referensiSearchFilter);
    localStorage.setItem('studio-referensi-compare-a', referensiCompareA);
    localStorage.setItem('studio-referensi-compare-b', referensiCompareB);
    localStorage.setItem('studio-hitung-harga-state', JSON.stringify(hitungHargaState));
    // Clean up old localStorage keys from removed features
    localStorage.removeItem('studio-harga-cetak-state');
    localStorage.removeItem('studio-batch-items');
    localStorage.removeItem('studio-history');
    // Persist actual zoom/pan state so it survives page reload
    localStorage.setItem('studio-preview-state', JSON.stringify({
      cover: { zoom: _previewState.cover.zoom, panX: _previewState.cover.panX, panY: _previewState.cover.panY },
      papercut: { zoom: _previewState.papercut.zoom, panX: _previewState.papercut.panX, panY: _previewState.papercut.panY }
    }));
  } catch(e) { console.warn('BlueBee Studio: gagal menyimpan state', e); }
}
function loadState() {
  try {
    const cs = localStorage.getItem('studio-cover-state');
    if (cs) {
      const parsed = JSON.parse(cs);
      // [BUG FIX] Validasi coverIsi — dropdown "Kertas Cover" menampilkan
      // opsi tipe Carton/Art Paper/Ivory. Jika localStorage lama berisi coverIsi yang
      // tidak valid (mis. 'hvs75' tipe HVS), reset ke default 'carton260'
      // supaya trigger menampilkan label yang benar, bukan "Pilih..." kosong.
      const validCoverIsi = ['carton210','carton230','carton260','carton310','carton400','art120','art150','matte120','matte150','ivory210','ivory230','ivory250','ivory270','ivory300','ivory350','ivory400'];
      if (parsed.coverIsi && !validCoverIsi.includes(parsed.coverIsi)) delete parsed.coverIsi;
      // [MIGRATION] 'Jumlah Lembaran' → 'Jumlah Halaman' + Toggle 2 Sisi
      // State lama hanya punya `lembaran` (jumlah lembar). Konversi ke model baru:
      // anggap buku lama dicetak 2 sisi → jumlahHalaman = lembaran × 2.
      if (parsed.lembaran !== undefined) {
        if (parsed.jumlahHalaman === undefined) {
          const oldLem = Math.max(1, Number(parsed.lembaran) || 1);
          parsed.duaSisi = true;
          parsed.jumlahHalaman = oldLem * 2;
        }
        delete parsed.lembaran;
      }
      if (parsed.jumlahHalaman !== undefined) {
        const h = Number(parsed.jumlahHalaman);
        if (!Number.isFinite(h) || h < 1) delete parsed.jumlahHalaman;
      }
      if (typeof parsed.duaSisi !== 'boolean') delete parsed.duaSisi;
      Object.assign(coverState, parsed);
    }
    const ps = localStorage.getItem('studio-papercut-state');
    if (ps) Object.assign(paperCutState, JSON.parse(ps));
    const cz = localStorage.getItem('studio-cover-zoom');
    if (cz !== null) coverZoom = Number(cz);
    const pz = localStorage.getItem('studio-papercut-zoom');
    if (pz !== null) paperCutZoom = Number(pz);
    const sv = localStorage.getItem('studio-cover-splitView');
    if (sv) coverSplitView = sv;
    const at = localStorage.getItem('studio-active-tab');
    // [FIX] Validasi activeTab — nilai korup dari localStorage lama bisa
    // membuat renderAll() tidak me-render apa pun (layar kosong saat load).
    // [FIX v2.0.1 / BUG M1] tambahkan 4 tool baru (Img to PDF, PDF Compressor,
    // QR Generator, Preview Lubang) agar reload kembali ke tab terakhir yang benar.
    const validTabKeys = ['cover-layout','paper-cut','kalkulator-isi','shuffle-pages','referensi-kertas','hitung-harga','img2pdf','pdfcomp','qrgen','lubang'];
    activeTab = (at && validTabKeys.includes(at)) ? at : 'cover-layout';
    const un = localStorage.getItem('studio-unit');
    if (un && ['mm','cm','inch'].includes(un)) currentUnit = un;
    const kis = localStorage.getItem('studio-kalkulator-isi-state');
    if (kis) {
      const parsed = JSON.parse(kis);
      // Migrate away from old signature model (no longer used)
      delete parsed.signatureSize;
      // [BUG FIX] Jangan hapus paperIsi — itu field baru yang valid untuk
      // kartu Tebal Punggung & Spiral Number di mode ISI. Sebelumnya hapus
      // karena dianggap legacy, sehingga pilihan user hilang setiap refresh.
      // Tetap validasi: jika value tidak ada di PAPER_ISI_MAP, hapus (fallback ke default).
      if (parsed.paperIsi && !PAPER_ISI_MAP[parsed.paperIsi]) delete parsed.paperIsi;
      // Validasi jilid: hanya 'soft' | 'hard' | 'spiral'
      if (parsed.jilid && !['soft','hard','spiral'].includes(parsed.jilid)) delete parsed.jilid;
      Object.assign(kalkulatorIsiState, parsed);
    }
    const sps = localStorage.getItem('studio-shuffle-pages-state');
    if (sps) {
      try {
        const parsed = JSON.parse(sps);
        // Validasi field Shuffle Pages — buang nilai invalid dari localStorage lama
        if (parsed.isiPosisi && !['Portrait','Landscape'].includes(parsed.isiPosisi)) delete parsed.isiPosisi;
        if (parsed.printPaper && !['A4','A3','A3+','LongCarton','Custom'].includes(parsed.printPaper)) delete parsed.printPaper;
        if (parsed.slide && !['1 Sisi','2 Sisi'].includes(parsed.slide)) delete parsed.slide;
        if (parsed.paperPosition && !['Portrait','Landscape'].includes(parsed.paperPosition)) delete parsed.paperPosition;
        if (typeof parsed.paperPositionAuto !== 'boolean') delete parsed.paperPositionAuto;
        // [NEW] Validasi Bleed Area & Margin Kertas (dukung Custom) — buang nilai invalid dari localStorage lama
        if (parsed.bleed !== undefined && !['0','2','3','5','custom'].includes(String(parsed.bleed))) delete parsed.bleed;
        if (parsed.margin !== undefined && !['0','5','10','15','20','custom'].includes(String(parsed.margin))) delete parsed.margin;
        delete parsed.showSlides; // [CLEANUP] properti lama sudah tidak dipakai (preview sekarang statis)
        Object.assign(shufflePagesState, parsed);
        _spFitDirty = false; // state tersimpan dipakai apa adanya (termasuk Baris/Kolom manual)
      } catch(e3) { console.warn('Gagal parse shuffle-pages state', e3); }
    }
    const rf = localStorage.getItem('studio-referensi-filter');
    if (rf !== null) referensiSearchFilter = rf;
    const rca = localStorage.getItem('studio-referensi-compare-a');
    if (rca) referensiCompareA = rca;
    const rcb = localStorage.getItem('studio-referensi-compare-b');
    if (rcb) referensiCompareB = rcb;
    const hhs = localStorage.getItem('studio-hitung-harga-state');
    if (hhs) {
      try {
        const parsed = JSON.parse(hhs);
        // Validasi mode: harus 'persen' | 'rp'
        if (parsed.ppnMode && !['persen','rp'].includes(parsed.ppnMode)) delete parsed.ppnMode;
        if (parsed.diskonMode && !['persen','rp'].includes(parsed.diskonMode)) delete parsed.diskonMode;
        // Validasi satuan: harus 'pcs' | 'lembaran'
        if (parsed.qtyUnit && !['pcs','lembaran'].includes(parsed.qtyUnit)) delete parsed.qtyUnit;
        if (parsed.hargaUnit && !['pcs','lembaran'].includes(parsed.hargaUnit)) delete parsed.hargaUnit;
        // Validasi jenisKertas: harus ada di PAPER_ISI_MAP
        if (parsed.jenisKertas && !PAPER_ISI_MAP[parsed.jenisKertas]) delete parsed.jenisKertas;
        // Validasi laminasi: harus salah satu dari LAMINASI_OPTIONS
        if (parsed.laminasi && !['none','glossy','doff','tebal'].includes(parsed.laminasi)) delete parsed.laminasi;
        // Validasi potongMode: harus salah satu dari POTONG_MODE_OPTIONS
        if (parsed.potongMode && !['potong','kisscut','diecut'].includes(parsed.potongMode)) delete parsed.potongMode;
        // Hapus field lama 'hargaPotong' yang sudah digantikan dengan potongMode+potongHarga
        delete parsed.hargaPotong;
        // Validasi ukuran: harus ada di BOOK_SIZE_MAP atau 'Custom'
        if (parsed.ukuran && parsed.ukuran !== 'Custom' && !BOOK_SIZE_MAP[parsed.ukuran]) delete parsed.ukuran;
        // Hapus field lama 'ukuran' yang sudah tidak dipakai
        delete parsed.ukuran_legacy;
        Object.assign(hitungHargaState, parsed);
      } catch(e) { console.warn('Gagal parse hitung-harga state', e); }
    }
    // Clean up old keys
    localStorage.removeItem('studio-harga-cetak-state');
    localStorage.removeItem('studio-batch-items');
    localStorage.removeItem('studio-history');
    // Restore actual zoom/pan state
    const pps = localStorage.getItem('studio-preview-state');
    if (pps) {
      try {
        const parsed = JSON.parse(pps);
        if (parsed.cover) {
          _previewState.cover.zoom = parsed.cover.zoom || 1;
          _previewState.cover.panX = parsed.cover.panX || 0;
          _previewState.cover.panY = parsed.cover.panY || 0;
        }
        if (parsed.papercut) {
          _previewState.papercut.zoom = parsed.papercut.zoom || 1;
          _previewState.papercut.panX = parsed.papercut.panX || 0;
          _previewState.papercut.panY = parsed.papercut.panY || 0;
        }
      } catch(e2) { console.warn('BlueBee Studio: gagal memuat preview state', e2); }
    }
  } catch(e) { console.warn('BlueBee Studio: gagal memuat state', e); }
}

// ============================================================
// Keyboard Shortcuts — Feature 6
// ============================================================
document.addEventListener('keydown', (e) => {
  /* [CLEAN v2.0.2] Semua shortcut nonaktif saat mengetik di input/textarea —
     sekaligus mencegah konflik AltGr (identik Ctrl+Alt) pada layout Eropa.
     Reset & Dark mode kini utama di Ctrl+Alt+R / Ctrl+Alt+D: Ctrl+Shift+R
     (hard reload) dan Ctrl+Shift+D milik browser yang kadang "menelan"
     aksi ini walau preventDefault dipanggil. Kombinasi lama = fallback. */
  const _ae = document.activeElement;
  const _tag = _ae && _ae.tagName;
  if (_tag === 'INPUT' || _tag === 'TEXTAREA' || _tag === 'SELECT' || (_ae && _ae.isContentEditable)) return;
  if (e.ctrlKey || e.metaKey) {
    if ((e.key === 'r' || e.key === 'R') && (e.altKey || e.shiftKey)) { e.preventDefault(); resetAll(); showToast('Reset berhasil (Ctrl+' + (e.altKey ? 'Alt' : 'Shift') + '+R)', 'info'); }
    if ((e.key === 'd' || e.key === 'D') && (e.altKey || e.shiftKey)) { e.preventDefault(); toggleTheme(); showToast('Dark mode toggled (Ctrl+' + (e.altKey ? 'Alt' : 'Shift') + '+D)', 'info'); }
    if (e.key === 'u' || e.key === 'U') { e.preventDefault(); toggleUnit(); }
    if (e.key === 'e' || e.key === 'E') {
      // [Bug fix] Export only valid in tabs that have a preview SVG (cover-layout, paper-cut)
      const exportTab = (activeTab === 'cover-layout' || activeTab === 'paper-cut');
      if (!exportTab) {
        e.preventDefault();
        showToast('Export PNG/PDF hanya tersedia di tab Cover Layout & Paper Cut', 'warning');
        return;
      }
      if (e.shiftKey) {
        e.preventDefault();
        const _info = activeTab === 'cover-layout' ? coverExportInfo : paperCutExportInfo;
        const _el = activeTab === 'cover-layout' ? 'coverPreviewBody' : 'paperCutPreviewBody';
        const _fn = activeTab === 'cover-layout' ? 'cover-layout.pdf' : 'paper-cut-layout.pdf';
        if (document.getElementById(_el)) { exportPdf(_el, _fn, _info); showToast('Export PDF (Ctrl+Shift+E)', 'info'); }
        else { showToast('Preview belum siap — coba lagi', 'warning'); }
      } else {
        e.preventDefault();
        const _info2 = activeTab === 'cover-layout' ? coverExportInfo : paperCutExportInfo;
        const _el2 = activeTab === 'cover-layout' ? 'coverPreviewBody' : 'paperCutPreviewBody';
        const _fn2 = activeTab === 'cover-layout' ? 'cover-layout.png' : 'paper-cut-layout.png';
        if (document.getElementById(_el2)) { exportPng(_el2, _fn2, _info2); showToast('Export PNG (Ctrl+E)', 'info'); }
        else { showToast('Preview belum siap — coba lagi', 'warning'); }
      }
    }
  }
  // ? key toggles shortcut help (but not when in an input)
  if (e.key === '?' && !['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) {
    e.preventDefault();
    toggleShortcutModal();
  }
});

// ============================================================
// Feature 3: Sidebar Toggle (mobile) — curtain handle
// ============================================================
// ============================================================
// [NEW] Draggable FAB (Floating Action Button) untuk sidebar toggle
// Tombol bulat kecil bisa digeser ke mana saja. Tap (tanpa drag) = toggle sidebar.
// [FIX] Drag threshold dinaikkan jadi 10px supaya tidak terlalu sensitif.
// [FIX] Tombol menghilang saat sidebar terbuka, muncul lagi saat tertutup.
// ============================================================
(function setupDraggableSidebarBtn() {
  const btn = document.getElementById('sidebarToggleBtn');
  if (!btn) return;

  let isPointerDown = false;      // pointer sedang ditekan (bisa jadi tap atau drag)
  let isDragging = false;         // sudah pasti drag (melewati threshold)
  let hasMoved = false;
  let startX = 0, startY = 0;     // posisi pointer awal (clientX/Y)
  let btnStartX = 0, btnStartY = 0; // posisi tombol awal (left/top)
  let btnX = 0, btnY = 0;         // posisi tombol saat ini
  let initialized = false;
  const DRAG_THRESHOLD = 10;      // px — harus gerak > 10px baru dianggap drag

  // Simpan posisi ke localStorage supaya survive reload
  function savePos(x, y) {
    try { localStorage.setItem('studio-sidebar-fab-pos', JSON.stringify({x, y})); } catch(e) {}
  }
  function loadPos() {
    try {
      const saved = localStorage.getItem('studio-sidebar-fab-pos');
      if (saved) return JSON.parse(saved);
    } catch(e) {}
    return null;
  }

  // Posisikan tombol. x, y = top-left corner.
  function setBtnPos(x, y) {
    const w = btn.offsetWidth || 40;
    const h = btn.offsetHeight || 40;
    const maxX = window.innerWidth - w - 4;
    const maxY = window.innerHeight - h - 4;
    x = Math.max(4, Math.min(x, maxX));
    y = Math.max(4, Math.min(y, maxY));
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
    btn.style.right = 'auto';
    btn.style.bottom = 'auto';
    btn.style.transform = '';
    btnX = x; btnY = y;
  }

  function initPos() {
    if (initialized) return;
    const saved = loadPos();
    if (saved && saved.x !== undefined) {
      setBtnPos(saved.x, saved.y);
    } else {
      // Default: kiri tengah
      setBtnPos(16, Math.round((window.innerHeight - (btn.offsetHeight||40)) / 2));
    }
    initialized = true;
  }

  function onPointerDown(e) {
    // Hanya aktif di mobile (saat tombol visible). Cek computed display.
    if (getComputedStyle(btn).display === 'none') return;
    // Jangan mulai drag kalau tombol lagi hidden (sidebar terbuka)
    if (btn.classList.contains('fab-hidden')) return;
    initPos();
    isPointerDown = true;
    isDragging = false;
    hasMoved = false;
    const pt = (e.touches && e.touches[0]) ? e.touches[0] : e;
    startX = pt.clientX;
    startY = pt.clientY;
    btnStartX = btnX;
    btnStartY = btnY;
    e.preventDefault();
  }

  function onPointerMove(e) {
    if (!isPointerDown) return;
    const pt = (e.touches && e.touches[0]) ? e.touches[0] : e;
    const dx = pt.clientX - startX;
    const dy = pt.clientY - startY;
    const dist = Math.sqrt(dx*dx + dy*dy);
    // [FIX] Cek threshold dulu sebelum mulai drag
    if (!isDragging) {
      if (dist > DRAG_THRESHOLD) {
        // Baru lewati threshold → mulai drag
        isDragging = true;
        btn.classList.add('dragging');
      } else {
        // Belum lewati threshold → jangan pindah tombol, tunggu
        return;
      }
    }
    // Sudah dragging → pindah tombol dari posisi awal
    hasMoved = true;
    setBtnPos(btnStartX + dx, btnStartY + dy);
    e.preventDefault();
  }

  function onPointerUp(e) {
    if (!isPointerDown) return;
    isPointerDown = false;
    btn.classList.remove('dragging');
    if (isDragging && hasMoved) {
      // Drag selesai — simpan posisi
      savePos(btnX, btnY);
    } else {
      // Tap (tanpa drag, atau gerakan < threshold) — toggle sidebar
      toggleSidebar();
    }
    isDragging = false;
    hasMoved = false;
  }

  // Mouse events
  btn.addEventListener('mousedown', onPointerDown);
  document.addEventListener('mousemove', onPointerMove);
  document.addEventListener('mouseup', onPointerUp);
  // Touch events
  btn.addEventListener('touchstart', onPointerDown, {passive: false});
  document.addEventListener('touchmove', onPointerMove, {passive: false});
  document.addEventListener('touchend', onPointerUp);

  // Reposition saat resize (mis. rotate device)
  window.addEventListener('resize', function() {
    if (getComputedStyle(btn).display === 'none') return;
    initPos();
    setBtnPos(btnX, btnY);
  });

  // Init posisi saat load (delay supaya layout sudah siap)
  setTimeout(function() {
    if (getComputedStyle(btn).display !== 'none') initPos();
  }, 300);

  // [ANIM] Setelah entrance animation selesai (500ms), tambah class fab-enter-done
  // supaya transition & pulse animation bisa aktif (entrance animation tidak lagi override)
  setTimeout(function() {
    if (getComputedStyle(btn).display !== 'none') {
      btn.classList.add('fab-enter-done');
    }
  }, 550);

  // [NEW] Override toggleSidebar untuk hide/show FAB
  // Kita wrap fungsi asli supaya bisa toggle .fab-hidden
  const _originalToggleSidebar = window.toggleSidebar;
  window.toggleSidebar = function() {
    _originalToggleSidebar.apply(this, arguments);
    // Setelah toggle, cek apakah sidebar sekarang terbuka
    const isOpen = !!document.querySelector('.studio-left-panel.sidebar-open');
    if (isOpen) {
      btn.classList.add('fab-hidden');
    } else {
      btn.classList.remove('fab-hidden');
    }
  };
})();

function toggleSidebar() {
  const panels = document.querySelectorAll('.studio-left-panel');
  const existingOverlay = document.querySelector('.studio-sidebar-overlay');
  const handle = document.getElementById('sidebarToggleBtn');
  if (existingOverlay) {
    // [ANIM] Tutup: tambah class 'closing' untuk fade-out, baru remove setelah animasi selesai
    panels.forEach(p => p.classList.remove('sidebar-open'));
    if (existingOverlay.parentNode) existingOverlay.remove();
    if (handle) { handle.classList.remove('sidebar-open-handle'); handle.title = 'Buka sidebar'; }
    return;
  }
  // Find the active left panel
  const panelMap = {
    'cover-layout': 'coverLeftPanel',
    'paper-cut': 'paperCutLeftPanel',
    'kalkulator-isi': 'kalkulatorIsiLeftPanel',
    'shuffle-pages': 'shufflePagesLeftPanel',
    'hitung-harga': 'hitungHargaLeftPanel',
    'img2pdf': 'img2pdfLeftPanel', // [NEW v4.4]
    'pdfcomp': 'pdfcompLeftPanel', // [NEW v4.4]
    'qrgen': 'qrgenLeftPanel', // [NEW v4.4]
    'lubang': 'lubangLeftPanel' // [NEW v4.4]
  };
  const activePanelId = panelMap[activeTab];
  const activePanel = activePanelId ? document.getElementById(activePanelId) : null;
  if (activePanel) {
    activePanel.classList.add('sidebar-open');
    const overlay = document.createElement('div');
    overlay.className = 'studio-sidebar-overlay';
    overlay.onclick = toggleSidebar;
    document.body.appendChild(overlay);
    if (handle) { handle.classList.add('sidebar-open-handle'); handle.title = 'Tutup sidebar'; }
  }
}

// [FIX v4.3] Tutup drawer paksa saat viewport melebar ke desktop (>=1024px)
window.addEventListener('resize', function() {
  if (window.innerWidth < 1024) return;
  var _spOpen = document.querySelector('.studio-left-panel.sidebar-open');
  if (!_spOpen) return;
  document.querySelectorAll('.studio-left-panel').forEach(function(p) { p.classList.remove('sidebar-open'); });
  var _spOv = document.querySelector('.studio-sidebar-overlay');
  if (_spOv) _spOv.remove();
  var _spH = document.getElementById('sidebarToggleBtn');
  if (_spH) { _spH.classList.remove('sidebar-open-handle'); _spH.classList.remove('fab-hidden'); _spH.title = 'Buka sidebar'; }
});

// ============================================================
// Feature 4: Keyboard Shortcuts Modal
// ============================================================
function toggleShortcutModal() {
  const modal = document.getElementById('shortcutModal');
  if (!modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    modal.innerHTML = '';
    document.removeEventListener('keydown', window._shortcutEscHandler);
    document.removeEventListener('keydown', window._shortcutTrapHandler);
    return;
  }
  modal.classList.remove('hidden');
  modal.innerHTML = `
    <div class="studio-shortcut-modal-overlay" id="shortcutOverlay">
      <div class="studio-shortcut-modal" onclick="event.stopPropagation()" role="dialog" aria-modal="true" aria-label="Keyboard Shortcuts">
        <div class="studio-shortcut-modal-title">Keyboard Shortcuts</div>
        <div class="studio-shortcut-modal-subtitle">Speed up your workflow</div>
        <div class="studio-shortcut-row"><span class="studio-shortcut-desc">Dark Mode</span><span class="studio-shortcut-key">Ctrl + Alt + D</span></div>
        <div class="studio-shortcut-row"><span class="studio-shortcut-desc">Reset</span><span class="studio-shortcut-key">Ctrl + Alt + R</span></div>
        <div class="studio-shortcut-row"><span class="studio-shortcut-desc">Export PNG</span><span class="studio-shortcut-key">Ctrl + E</span></div>
        <div class="studio-shortcut-row"><span class="studio-shortcut-desc">Export PDF</span><span class="studio-shortcut-key">Ctrl + Shift + E</span></div>
        <div class="studio-shortcut-row"><span class="studio-shortcut-desc">Toggle Unit (mm/cm/inch)</span><span class="studio-shortcut-key">Ctrl + U</span></div>
        <div class="studio-shortcut-row"><span class="studio-shortcut-desc">Zoom Preview</span><span class="studio-shortcut-key">Scroll</span></div>
        <div class="studio-shortcut-row"><span class="studio-shortcut-desc">Pan Preview</span><span class="studio-shortcut-key">Drag</span></div>
        <div class="studio-shortcut-row"><span class="studio-shortcut-desc">Shortcut Help</span><span class="studio-shortcut-key">?</span></div>
        <button class="studio-shortcut-modal-close" onclick="toggleShortcutModal()">Close</button>
      </div>
    </div>`;
  // Close on overlay click
  document.getElementById('shortcutOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'shortcutOverlay') toggleShortcutModal();
  });
  // [A11y] Escape key handler
  function _escHandler(e) {
    if (e.key === 'Escape') toggleShortcutModal();
  }
  window._shortcutEscHandler = _escHandler;
  document.addEventListener('keydown', _escHandler);
  // [A11y] Focus trap
  function _trapHandler(e) {
    if (e.key !== 'Tab') return;
    const dialog = modal.querySelector('.studio-shortcut-modal');
    if (!dialog) return;
    const focusable = Array.from(dialog.querySelectorAll('button, [tabindex]:not([tabindex="-1"])'));
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }
  window._shortcutTrapHandler = _trapHandler;
  document.addEventListener('keydown', _trapHandler);
  // Focus close button by default
  const closeBtn = modal.querySelector('.studio-shortcut-modal-close');
  if (closeBtn) closeBtn.focus();
}

// ============================================================
// Feature 1: Preview Drag & Zoom Interaction
// ============================================================

function setupPreviewInteraction(previewBodyId, tabType) {
  let previewBody = document.getElementById(previewBodyId);
  if (!previewBody) return;
  const svg = previewBody.querySelector('svg');
  if (!svg) return;

  const st = _previewState[tabType];
  if (!st) return;

  // Apply existing transform immediately
  svg.style.transform = `translate(${st.panX}px, ${st.panY}px) scale(${st.zoom})`;
  svg.style.transformOrigin = 'center center';

  // Cleanup old interaction listeners if re-setup
  if (previewBody._abortCtrl) {
    previewBody._abortCtrl.abort();
  }
  const ctrl = new AbortController();
  previewBody._abortCtrl = ctrl;

  // ── Add click hint overlay ──
  let hintEl = previewBody.querySelector('.studio-preview-click-hint');
  if (!hintEl) {
    hintEl = document.createElement('div');
    hintEl.className = 'studio-preview-click-hint';
    hintEl.innerHTML = '<span>Ketuk untuk aktifkan drag & zoom</span>';
    previewBody.appendChild(hintEl);
  }

  // ── Active badge ──
  let badgeEl = previewBody.querySelector('.studio-preview-active-badge');

  // ── Mini Map (declared early so setActive/setInactive can reference) ──
  let minimapEl = previewBody.querySelector('.studio-minimap');
  let minimapViewport = null;
  const MINIMAP_MAX_W = 100, MINIMAP_MAX_H = 70;

  const initMinimap = () => {
    if (minimapEl) minimapEl.remove();
    minimapEl = document.createElement('div');
    minimapEl.className = 'studio-minimap';

    // Clone SVG for minimap thumbnail
    const svgClone = svg.cloneNode(true);
    const mw = MINIMAP_MAX_W, mh = MINIMAP_MAX_H;
    const svgAspect = svg.width.baseVal.value / svg.height.baseVal.value;
    let finalW, finalH;
    if (svgAspect > mw / mh) { finalW = mw; finalH = mw / svgAspect; }
    else { finalH = mh; finalW = mh * svgAspect; }
    svgClone.style.transform = '';
    svgClone.style.width = finalW + 'px';
    svgClone.style.height = finalH + 'px';
    svgClone.style.display = 'block';
    svgClone.removeAttribute('id');

    minimapEl.style.width = finalW + 'px';
    minimapEl.style.height = finalH + 'px';
    minimapEl.appendChild(svgClone);

    minimapViewport = document.createElement('div');
    minimapViewport.className = 'studio-minimap-viewport';
    minimapEl.appendChild(minimapViewport);

    previewBody.appendChild(minimapEl);
  };

  const updateMinimap = () => {
    if (!minimapEl || !minimapViewport) return;
    const zoom = st.zoom;
    if (zoom <= 1.05) {
      minimapEl.style.opacity = '0';
      return;
    }
    const svgW = svg.width.baseVal.value;
    const svgH = svg.height.baseVal.value;
    const mmW = minimapEl.offsetWidth || MINIMAP_MAX_W;
    const mmH = minimapEl.offsetHeight || MINIMAP_MAX_H;

    const bodyRect = previewBody.getBoundingClientRect();
    const visW = bodyRect.width / zoom;
    const visH = bodyRect.height / zoom;
    const centerX = svgW / 2 - st.panX / zoom;
    const centerY = svgH / 2 - st.panY / zoom;

    const scaleMM = mmW / svgW;
    const vpLeft = Math.max(0, (centerX - visW / 2) * scaleMM);
    const vpTop = Math.max(0, (centerY - visH / 2) * scaleMM);
    const vpW = Math.min(mmW - vpLeft, visW * scaleMM);
    const vpH = Math.min(mmH - vpTop, visH * scaleMM);

    minimapViewport.style.left = vpLeft + 'px';
    minimapViewport.style.top = vpTop + 'px';
    minimapViewport.style.width = vpW + 'px';
    minimapViewport.style.height = vpH + 'px';
  };

  initMinimap();

  const setActive = () => {
    previewBody.classList.add('preview-active');
    if (hintEl) hintEl.style.display = 'none';
    if (!badgeEl) {
      badgeEl = document.createElement('div');
      badgeEl.className = 'studio-preview-active-badge';
      badgeEl.textContent = 'Aktif';
      previewBody.appendChild(badgeEl);
    } else {
      badgeEl.style.display = '';
    }
    updateMinimap();
  };

  const setInactive = () => {
    previewBody.classList.remove('preview-active');
    previewBody.classList.remove('dragging');
    st.isDragging = false;
    if (hintEl) hintEl.style.display = '';
    if (badgeEl) badgeEl.style.display = 'none';
    if (minimapEl) minimapEl.style.opacity = '0';
  };

  // ── Click to activate / deactivate ──
  let dragOccurred = false;
  previewBody.addEventListener('click', (e) => {
    if (previewBody.classList.contains('preview-active')) {
      // Only deactivate on a pure click (no meaningful drag happened)
      if (!dragOccurred) setInactive();
      dragOccurred = false;
    } else {
      setActive();
    }
  }, { signal: ctrl.signal });

  // ── Deactivate when clicking outside ──
  document.addEventListener('mousedown', (e) => {
    if (!previewBody.contains(e.target) && previewBody.classList.contains('preview-active')) {
      setInactive();
    }
  }, { signal: ctrl.signal });

  document.addEventListener('touchstart', (e) => {
    if (!previewBody.contains(e.target) && previewBody.classList.contains('preview-active')) {
      setInactive();
    }
  }, { signal: ctrl.signal });

  // Helper: apply transform to SVG
  const applyTransform = () => {
    const svgEl = previewBody.querySelector('svg');
    if (svgEl) {
      svgEl.style.transform = `translate(${st.panX}px, ${st.panY}px) scale(${st.zoom})`;
      svgEl.style.transformOrigin = 'center center';
    }
    updateMinimap();
  };

  // Helper: sync zoom variable (reset zoom bar tracking when user scroll/pinch zooms)
  const syncZoom = () => {
    // When user zooms via scroll/pinch, clear the zoom bar preset
    // so the zoom bar buttons deselect (since the zoom no longer matches any preset)
    if (tabType === 'cover') coverZoom = 0;
    else paperCutZoom = 0;
    updateZoomBarActive(tabType);
  };

  // ── Wheel zoom (desktop) — only when active ──
  previewBody.addEventListener('wheel', (e) => {
    if (!previewBody.classList.contains('preview-active')) return;
    e.preventDefault();
    e.stopPropagation();

    const oldZoom = st.zoom;
    const rawDelta = Math.abs(e.deltaY);
    // deltaMode: 0=pixel (trackpad), 1=line (mouse wheel), 2=page
    const multiplier = e.deltaMode === 1 ? 17 : e.deltaMode === 2 ? 400 : 1;
    const normalizedDelta = Math.max(0.3, rawDelta * multiplier * 0.004);
    const delta = e.deltaY > 0 ? -normalizedDelta : normalizedDelta;
    let newZoom = Math.round((oldZoom + delta) * 100) / 100;
    newZoom = Math.max(0.15, Math.min(5.0, newZoom));

    // Zoom toward cursor position
    const rect = previewBody.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    const scale = newZoom / oldZoom;
    st.panX = mouseX - scale * (mouseX - st.panX);
    st.panY = mouseY - scale * (mouseY - st.panY);
    st.zoom = newZoom;

    syncZoom();
    applyTransform();
  }, { passive: false, signal: ctrl.signal });

  // ── Mouse drag pan (desktop) — only when active ──
  previewBody.addEventListener('mousedown', (e) => {
    if (!previewBody.classList.contains('preview-active')) return;
    if (e.button !== 0) return;
    dragOccurred = false;
    st.isDragging = true;
    st.startX = e.clientX - st.panX;
    st.startY = e.clientY - st.panY;
    previewBody.classList.add('dragging');
    e.preventDefault();
  }, { signal: ctrl.signal });

  const onMouseMove = (e) => {
    if (!st.isDragging) return;
    dragOccurred = true;
    st.panX = e.clientX - st.startX;
    st.panY = e.clientY - st.startY;
    applyTransform();
  };

  const onMouseUp = () => {
    if (st.isDragging) {
      st.isDragging = false;
      previewBody.classList.remove('dragging');
    }
  };

  document.addEventListener('mousemove', onMouseMove, { signal: ctrl.signal });
  document.addEventListener('mouseup', onMouseUp, { signal: ctrl.signal });

  // ── Touch: drag (1 finger) & pinch zoom (2 fingers) — only when active ──
  let lastTouchDist = 0;
  let lastTouchCenter = { x: 0, y: 0 };
  let touchMode = ''; // 'drag' or 'pinch'

  previewBody.addEventListener('touchstart', (e) => {
    if (!previewBody.classList.contains('preview-active')) return;
    if (e.touches.length === 1) {
      // Single finger: drag
      touchMode = 'drag';
      dragOccurred = false;
      st.isDragging = true;
      st.startX = e.touches[0].clientX - st.panX;
      st.startY = e.touches[0].clientY - st.panY;
      previewBody.classList.add('dragging');
    } else if (e.touches.length === 2) {
      // Two fingers: pinch zoom
      touchMode = 'pinch';
      st.isDragging = false;
      previewBody.classList.remove('dragging');
      const dx = e.touches[1].clientX - e.touches[0].clientX;
      const dy = e.touches[1].clientY - e.touches[0].clientY;
      lastTouchDist = Math.sqrt(dx * dx + dy * dy);
      lastTouchCenter = {
        x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        y: (e.touches[0].clientY + e.touches[1].clientY) / 2
      };
    }
    e.preventDefault();
  }, { passive: false, signal: ctrl.signal });

  previewBody.addEventListener('touchmove', (e) => {
    if (!previewBody.classList.contains('preview-active')) return;
    if (touchMode === 'drag' && e.touches.length === 1) {
      dragOccurred = true;
      st.panX = e.touches[0].clientX - st.startX;
      st.panY = e.touches[0].clientY - st.startY;
      applyTransform();
      e.preventDefault();
    } else if (touchMode === 'pinch' && e.touches.length === 2) {
      const dx = e.touches[1].clientX - e.touches[0].clientX;
      const dy = e.touches[1].clientY - e.touches[0].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const center = {
        x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        y: (e.touches[0].clientY + e.touches[1].clientY) / 2
      };

      if (lastTouchDist > 0) {
        const oldZoom = st.zoom;
        const pinchScale = dist / lastTouchDist;
        let newZoom = Math.round(oldZoom * pinchScale * 100) / 100;
        newZoom = Math.max(0.15, Math.min(5.0, newZoom));

        // Zoom toward pinch center
        const rect = previewBody.getBoundingClientRect();
        const cx = center.x - rect.left - rect.width / 2;
        const cy = center.y - rect.top - rect.height / 2;

        const scale = newZoom / oldZoom;
        st.panX = cx - scale * (cx - st.panX);
        st.panY = cy - scale * (cy - st.panY);
        st.zoom = newZoom;

        // Also pan with finger movement
        st.panX += center.x - lastTouchCenter.x;
        st.panY += center.y - lastTouchCenter.y;

        syncZoom();
        applyTransform();
      }

      lastTouchDist = dist;
      lastTouchCenter = center;
      e.preventDefault();
    }
  }, { passive: false, signal: ctrl.signal });

  // ── Double-tap guard: track if a pinch gesture just ended ──
  let pinchJustEnded = false;
  let lastTap = 0;

  previewBody.addEventListener('touchend', (e) => {
    if (e.touches.length === 0) {
      touchMode = '';
      st.isDragging = false;
      previewBody.classList.remove('dragging');
      lastTouchDist = 0;
      // Double-tap detection (guarded against pinch release)
      if (!pinchJustEnded) {
        const now = Date.now();
        if (now - lastTap < 300) {
          // Double tap — reset to auto-fit
          st.panX = 0; st.panY = 0; st.zoom = 1;
          if (tabType === 'cover') coverZoom = 0;
          else paperCutZoom = 0;
          applyTransform();
          updateZoomBarActive(tabType);
        }
        lastTap = now;
      } else {
        lastTap = 0;
      }
    } else if (e.touches.length === 1 && touchMode === 'pinch') {
      // Switched from pinch to single finger — start drag from current position
      touchMode = 'drag';
      st.isDragging = true;
      st.startX = e.touches[0].clientX - st.panX;
      st.startY = e.touches[0].clientY - st.panY;
      lastTouchDist = 0;
      // Pinch just ended — set flag to block double-tap detection
      pinchJustEnded = true;
      setTimeout(() => { pinchJustEnded = false; }, 400);
    }
  }, { signal: ctrl.signal });

  // Reset pan & zoom
  previewBody._resetPan = () => {
    st.panX = 0; st.panY = 0; st.zoom = 1;
    if (tabType === 'cover') coverZoom = 0;
    else paperCutZoom = 0;
    const svgEl = previewBody.querySelector('svg');
    if (svgEl) {
      svgEl.style.transform = '';
    }
  };
}

function updateZoomBarActive(tabType) {
  const panelId = tabType === 'cover' ? 'coverRightPanel' : 'paperCutRightPanel';
  const panel = document.getElementById(panelId);
  if (!panel) return;
  const zoomBtns = panel.querySelectorAll('.studio-zoom-btn');
  const st = _previewState[tabType];
  // Check if current CSS transform zoom matches any zoom bar preset
  const currentZoomBarVal = tabType === 'cover' ? coverZoom : paperCutZoom;
  // Compute what CSS zoom should be for current zoom bar value
  // Fit (0) → CSS zoom 1, others → v / autoFitScale
  const autoFitScale = st.autoFitScale || 1;
  const expectedCssZoom = currentZoomBarVal === 0 ? 1 : currentZoomBarVal / autoFitScale;
  const matchesPreset = Math.abs(st.zoom - expectedCssZoom) < 0.02;

  zoomBtns.forEach(btn => {
    const onclick = btn.getAttribute('onclick') || '';
    const match = onclick.match(/=(\d+(?:\.\d+)?)/);
    if (match) {
      const v = parseFloat(match[1]);
      // Only highlight if the preset matches the current zoom
      if (matchesPreset) {
        btn.classList.toggle('active', Math.abs(v - currentZoomBarVal) < 0.01);
      } else {
        btn.classList.remove('active');
      }
    }
  });
}

// ============================================================
// Init [Bug #5] Fix theme icon from localStorage
// ============================================================
(function init() {
  loadState();
  const saved = localStorage.getItem('studio-theme');
  if (saved === 'dark') {
    isDark = true;
    document.documentElement.classList.add('dark');
    // [Bug #5] Update theme toggle icon to sun when dark mode is restored
    updateThemeIcon();
  }
  // Restore active tab from saved state
  // [FIX v2.0.1 / BUG M1] tambahkan 4 tool baru ke whitelist tab yang valid
  /* [FIX v2.0.1 / BUG M1b] fungsi render 4 tool baru (renderImg2Pdf/renderPdfComp/
     renderQrGen/renderLubang) + state-nya (let) ada di BLOK SCRIPT KEDUA yang belum
     siap saat init() ini berjalan — render langsung di sini melempar ReferenceError
     dan panel tool baru kosong saat reload langsung ke tab tersebut. setTimeout(0)
     pun TIDAK aman: timer dapat berjalan di antara dua tag <script> sebelum blok 2
     mulai dieksekusi. Solusi deterministik: simpan tab yang ditunda di
     window.__bbPendingTab, lalu blok 2 me-render-nya di AKHIR skripnya
     (lihat finalisasi di baris paling bawah blok kedua). */
  const newToolTabs = ['img2pdf','pdfcomp','qrgen','lubang'];
  const validTabs = ['cover-layout','paper-cut','kalkulator-isi','shuffle-pages','referensi-kertas','hitung-harga', 'img2pdf','pdfcomp','qrgen','lubang'];
  if (activeTab && validTabs.includes(activeTab)) {
    if (newToolTabs.includes(activeTab)) {
      window.__bbPendingTab = activeTab;
    } else {
      switchTab(activeTab);
    }
  } else {
    renderAll();
  }
})();

/* ---------- 3) Script aplikasi bagian kedua ---------- */
// ============================================================
// Landing ↔ App Bridge — BlueBee Studio (redesign v2.0)
// ============================================================
function toggleLpMenu() {
  const menu = document.getElementById('lpMobileMenu');
  const burger = document.getElementById('lpBurger');
  if (!menu) return;
  const open = menu.classList.toggle('open');
  if (burger) burger.setAttribute('aria-expanded', open ? 'true' : 'false');
}
function closeLpMenu() {
  const menu = document.getElementById('lpMobileMenu');
  const burger = document.getElementById('lpBurger');
  if (menu) menu.classList.remove('open');
  if (burger) burger.setAttribute('aria-expanded', 'false');
}
function enterApp(tab) {
  closeLpMenu();
  const lp = document.getElementById('landingPage');
  const app = document.getElementById('appRoot');
  if (lp) lp.classList.add('hidden');
  if (!app) return;
  app.classList.remove('hidden');
  // Re-trigger entrance animation
  app.style.animation = 'none'; void app.offsetWidth; app.style.animation = '';
  try { sessionStorage.setItem('bb-in-app', '1'); } catch (e) {}
  const target = tab || (typeof activeTab !== 'undefined' ? activeTab : 'cover-layout');
  if (typeof switchTab === 'function') switchTab(target);
  window.scrollTo(0, 0);
}
function backToLanding() {
  const lp = document.getElementById('landingPage');
  const app = document.getElementById('appRoot');
  if (app) app.classList.add('hidden');
  if (lp) lp.classList.remove('hidden');
  try { sessionStorage.removeItem('bb-in-app'); } catch (e) {}
  document.title = 'BlueBee Studio';
  window.scrollTo(0, 0);
}
// Close landing mobile menu on outside click
document.addEventListener('click', function (e) {
  const menu = document.getElementById('lpMobileMenu');
  const burger = document.getElementById('lpBurger');
  if (menu && menu.classList.contains('open') && !menu.contains(e.target) && !(burger && burger.contains(e.target))) closeLpMenu();
});
// Reveal-on-scroll for landing sections
(function setupReveal() {
  const els = document.querySelectorAll('.lp-reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(function (el) { el.classList.add('lp-in'); }); return; }
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('lp-in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });
  els.forEach(function (el) { io.observe(el); });
})();
// Restore session: skip landing if the user was already inside the app
(function restoreSession() {
  try { if (sessionStorage.getItem('bb-in-app') === '1') enterApp(); } catch (e) {}
})();

// ============================================================
// [NEW v4.4] TOOLS — Images to PDF, PDF Compressor, QR Generator,
// Preview Lubang. Semua diproses lokal di browser.
// ============================================================
function bbEsc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function bbFmtBytes(b) {
  if (!isFinite(b) || b < 0) return '-';
  if (b < 1024) return b + ' B';
  if (b < 1048576) return (Math.round(b / 1024 * 10) / 10).toString().replace('.', ',') + ' KB';
  return (Math.round(b / 1048576 * 100) / 100).toString().replace('.', ',') + ' MB';
}
function bbFmtNum(v) { const r = Math.round(v * 100) / 100; return r.toLocaleString('id-ID', { maximumFractionDigits: 2 }); }
function bbLoadScript(src) {
  return new Promise(function (res, rej) {
    const s = document.createElement('script');
    s.src = src;
    s.onload = function () { res(); };
    s.onerror = function () { rej(new Error('Gagal memuat script: ' + src)); };
    document.head.appendChild(s);
  });
}
let _pdfjsPromise = null;
function bbEnsurePdfJs() {
  if (window.pdfjsLib) return Promise.resolve();
  if (!_pdfjsPromise) {
    _pdfjsPromise = bbLoadScript('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js').then(function () {
      if (window.pdfjsLib) pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    });
    _pdfjsPromise.catch(function () { _pdfjsPromise = null; });
  }
  return _pdfjsPromise;
}
function bbDownload(blob, name) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 800);
}
/* [FIX v2.8] Blob canvas SINKRON. canvas.toBlob() di tab background / headless
   di-throttle browser ~1 detik per panggilan, sehingga unduhan multi-file
   (ZIP ratusan QR, PDF banyak halaman) menggantung sangat lama.
   toDataURL() sinkron dan tidak kena throttle -> selalu selesai cepat. */
function bbCanvasBlob(cv, type, q) {
  const durl = cv.toDataURL(type || 'image/png', q);
  const b64 = durl.split(',')[1] || '';
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
  return new Blob([arr], { type: type || 'image/png' });
}
function bbLoadImage(url) {
  return new Promise(function (res, rej) {
    const im = new Image();
    im.onload = function () { res(im); };
    im.onerror = function () { rej(new Error('Gambar gagal dimuat')); };
    im.src = url;
  });
}

// ------------------------------------------------------------
// [NEW v4.4] PREVIEW LUBANG — lubang mata layang banner.
// Aturan: lubang di sudut milik bersama dua sisi & dihitung SEKALI
// (contoh user: 200x100 cm, atas 4 bawah 4 kanan 3 kiri 3 = 10 pcs).
// Mode 2: jarak antar lubang -> jumlah per sisi dihitung otomatis
// (sudut selalu berlubang, spasi antar lubang <= jarak input).
// ------------------------------------------------------------
let lubangState = { w: 200, h: 100, unit: 'cm', mode: 'count', spacing: 100, nTop: 4, nRight: 3, nBottom: 4, nLeft: 3, dia: 12, img: null, imgName: '', imgW: 0, imgH: 0 };

function _lbUnitMul(u) { return u === 'mm' ? 1 : (u === 'm' ? 1000 : 10); }
function _lbEdgeFracs(n) {
  if (!n || n <= 0) return [];
  if (n === 1) return [0.5];
  const a = [];
  for (let i = 0; i < n; i++) a.push(i / (n - 1));
  return a;
}
function _lbCountFor(lenMm, spMm) {
  if (!(lenMm > 0) || !(spMm > 0)) return 2;
  return Math.min(120, Math.max(2, Math.ceil(lenMm / spMm - 1e-9) + 1));
}
function _lbCompute(st) {
  const m = _lbUnitMul(st.unit);
  const W = Math.max(0, Number(st.w) || 0) * m;
  const H = Math.max(0, Number(st.h) || 0) * m;
  const sp = Math.max(1e-6, Number(st.spacing) || 0) * m;
  let n = {
    top: Math.max(0, Math.min(120, Math.round(Number(st.nTop)) || 0)),
    right: Math.max(0, Math.min(120, Math.round(Number(st.nRight)) || 0)),
    bottom: Math.max(0, Math.min(120, Math.round(Number(st.nBottom)) || 0)),
    left: Math.max(0, Math.min(120, Math.round(Number(st.nLeft)) || 0))
  };
  if (st.mode === 'spacing') {
    n = { top: _lbCountFor(W, sp), right: _lbCountFor(H, sp), bottom: _lbCountFor(W, sp), left: _lbCountFor(H, sp) };
  }
  const seen = {}; const pts = [];
  function add(x, y) {
    const k = Math.round(x * 10) + '_' + Math.round(y * 10);
    if (seen[k]) return;
    seen[k] = 1;
    pts.push({ x: x, y: y });
  }
  _lbEdgeFracs(n.top).forEach(f => add(f * W, 0));
  _lbEdgeFracs(n.bottom).forEach(f => add(f * W, H));
  _lbEdgeFracs(n.left).forEach(f => add(0, f * H));
  _lbEdgeFracs(n.right).forEach(f => add(W, f * H));
  const gaps = {
    top: n.top > 1 ? W / (n.top - 1) : null,
    bottom: n.bottom > 1 ? W / (n.bottom - 1) : null,
    left: n.left > 1 ? H / (n.left - 1) : null,
    right: n.right > 1 ? H / (n.right - 1) : null
  };
  return { W: W, H: H, n: n, total: pts.length, pts: pts, gaps: gaps };
}

// ------------------------------------------------------------
// [NEW v4.4] IMAGES TO PDF — gabung gambar jadi satu PDF (jsPDF)
// ------------------------------------------------------------
let img2pdfItems = [];
let img2pdfSeq = 0;
let img2pdfState = { pageSize: 'auto', orient: 'auto', margin: 0, quality: 85, result: null, previewIdx: 0 }; /* [NEW v2.3] previewIdx: indeks gambar utk panah < > */
let _bbDragIdx = -1;

function bbPickImages() {
  const inp = document.createElement('input');
  inp.type = 'file';
  inp.accept = 'image/*';
  inp.multiple = true;
  inp.onchange = () => bbAddFiles(inp.files);
  inp.click();
}
function bbAddFiles(list) {
  const files = Array.from(list || []).filter(f => /^image\//.test(f.type));
  if (!files.length) return;
  let pending = files.length;
  files.forEach(f => {
    /* [CLEAN v2.0.2] seq ditetapkan saat file DIPILIH (bukan saat load selesai)
       agar urutan img2pdfItems — dan urutan halaman PDF — selalu mengikuti
       urutan pemilihan. Item disisipkan terurut naik berdasarkan id. */
    const seq = ++img2pdfSeq;
    const url = URL.createObjectURL(f);
    const im = new Image();
    im.onload = () => {
      const it = { id: seq, name: f.name, size: f.size, url: url, w: im.naturalWidth, h: im.naturalHeight };
      let k = img2pdfItems.length;
      while (k > 0 && img2pdfItems[k - 1].id > seq) k--;
      img2pdfItems.splice(k, 0, it);
      img2pdfState.result = null;
      if (--pending === 0) renderImg2Pdf(true);
    };
    im.onerror = () => { URL.revokeObjectURL(url); if (--pending === 0) renderImg2Pdf(true); };
    im.src = url;
  });
}

// ------------------------------------------------------------
// [NEW v4.4] PDF COMPRESSOR — render ulang tiap halaman via pdf.js
// lalu rakit ulang jadi PDF (jsPDF). Lazy-load pdf.js dari CDN.
// ------------------------------------------------------------
let pdfcompState = { name: '', buf: null, origSize: 0, pages: 0, quality: 60, dpi: 96, busy: false, result: null };

function bbPcName() { return (pdfcompState.name || 'dokumen').replace(/\.pdf$/i, '') + '-kompres.pdf'; }
function bbPcPick() {
  const inp = document.createElement('input');
  inp.type = 'file';
  inp.accept = 'application/pdf,.pdf';
  inp.onchange = () => bbPcFiles(inp.files);
  inp.click();
}

// ------------------------------------------------------------
// [NEW v4.4] QR GENERATOR — qrcode-generator (embedded, MIT)
// Canvas digambar manual supaya warna & ukuran ekspor bebas.
// ------------------------------------------------------------
let qrgenState = { text: '', size: 512, fg: '#111827', bg: '#FFFFFF', level: 'M', quiet: 4 };

function bbQrSlug() {
  const s = (qrgenState.text || '').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 18);
  return s || 'kode';
}
function bbQrDownload() {
  const cv = document.getElementById('bbQrCanvas');
  if (!cv || !(qrgenState.text || '').trim()) { showToast('Masukkan teks/link dulu', 'warning'); return; }
  bbDownload(bbCanvasBlob(cv, 'image/png'), 'qr-' + bbQrSlug() + '.png');
}
async function bbQrCopyImage() {
  try {
    const cv = document.getElementById('bbQrCanvas');
    if (!cv) return;
    const blob = bbCanvasBlob(cv, 'image/png');
    await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
    showToast('QR disalin ke clipboard');
  } catch (e) {
    showToast('Browser tidak mendukung salin gambar — gunakan Unduh PNG', 'warning');
  }
}

// ============================================================
// [NEW v4.5] CONVERT FILE (Images to PDF + PDF to Images),
// PDF Compressor (slider 40-100, resolusi 150/300/600/Max),
// tombol Clear/Compress/Download, preview PDF di kartu kanan.
// ============================================================

/* ---------- Kertas & DPI ---------- */
var BB_PAPERS = { a7: [74, 105], a6: [105, 148], a5: [148, 210], a4: [210, 297], a3: [297, 420], a2: [420, 594], a1: [594, 841], a0: [841, 1189], letter: [215.9, 279.4], legal: [215.9, 355.6] };
function bbPaperOptions() {
  return [
    { value: 'a7', label: 'A7 (74 x 105 mm)' },
    { value: 'a6', label: 'A6 (105 x 148 mm)' },
    { value: 'a5', label: 'A5 (148 x 210 mm)' },
    { value: 'a4', label: 'A4 (210 x 297 mm)' },
    { value: 'a3', label: 'A3 (297 x 420 mm)' },
    { value: 'a2', label: 'A2 (420 x 594 mm)' },
    { value: 'a1', label: 'A1 (594 x 841 mm)' },
    { value: 'a0', label: 'A0 (841 x 1189 mm)' },
    { value: 'letter', label: 'Letter (8.5 x 11 in)' },
    { value: 'legal', label: 'Legal (8.5 x 14 in)' }
  ];
}
function bbPaperPt(code) {
  const p = BB_PAPERS[code] || BB_PAPERS.a4;
  return [p[0] * 72 / 25.4, p[1] * 72 / 25.4];
}
var BB_DPI_OPTS = [
  { value: '150', label: '150 DPI' },
  { value: '300', label: '300 DPI' },
  { value: '600', label: '600 DPI' },
  { value: 'max', label: 'Max DPI (Paling HD)' }
];
function bbClampPx(w, h) {
  const MAXS = 8192, MAXA = 45e6;
  let k = 1;
  if (w * k > MAXS) k = MAXS / w;
  if (h * k > MAXS) k = Math.min(k, MAXS / h);
  if (w * h * k * k > MAXA) k = Math.min(k, Math.sqrt(MAXA / (w * h)));
  return k;
}

/* ---------- ZIP writer (STORE + CRC32, tanpa library) ---------- */
let _bbCrcTable = null;
function bbCrc32(u8) {
  if (!_bbCrcTable) {
    _bbCrcTable = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
      _bbCrcTable[n] = c >>> 0;
    }
  }
  let c = 0xFFFFFFFF;
  for (let i = 0; i < u8.length; i++) c = _bbCrcTable[(c ^ u8[i]) & 0xFF] ^ (c >>> 8);
  return (c ^ 0xFFFFFFFF) >>> 0;
}
function bbZipStore(entries) {
  /* [CLEAN v2.0.2] Guard format ZIP standar: jumlah entri ditulis pada field
     16-bit di EOCD (maks 65.535) dan writer ini tidak mendukung ZIP64 —
     lebih dari itu menghasilkan ZIP korup diam-diam. Lempar error jelas;
     pemanggil (convPdfBuild) sudah menampilkan toast "Gagal membuat ZIP". */
  if (entries.length > 65000) throw new Error('Terlalu banyak halaman (' + entries.length + ') — ZIP standar maksimal 65.535 entri tanpa ZIP64');
  const enc = new TextEncoder();
  const list = entries.slice();
  const dirs = {};
  list.forEach(e => {
    const parts = e.name.split('/');
    parts.pop();
    let cur = '';
    parts.forEach(p => { cur += p + '/'; dirs[cur] = 1; });
  });
  Object.keys(dirs).forEach(d => list.push({ name: d, data: new Uint8Array(0), dir: true }));
  const chunks = []; const central = []; let offset = 0;
  function u16(v) { return [v & 255, (v >> 8) & 255]; }
  function u32(v) { return [v & 255, (v >>> 8) & 255, (v >>> 16) & 255, (v >>> 24) & 255]; }
  list.forEach(e => {
    const nb = enc.encode(e.name);
    const crc = e.dir ? 0 : bbCrc32(e.data);
    const lh = [].concat(u32(0x04034b50), u16(20), u16(0x0800), u16(0), u16(0), u16(0x21), u32(crc), u32(e.data.length), u32(e.data.length), u16(nb.length), u16(0));
    chunks.push(new Uint8Array(lh), nb, e.data);
    central.push({ nb: nb, crc: crc, size: e.data.length, off: offset, dir: e.dir });
    offset += lh.length + nb.length + e.data.length;
  });
  const cdStart = offset;
  let cdSize = 0;
  central.forEach(c => {
    const ch = [].concat(u32(0x02014b50), u16(20), u16(20), u16(0x0800), u16(0), u16(0), u16(0x21), u32(c.crc), u32(c.size), u32(c.size), u16(c.nb.length), u16(0), u16(0), u16(0), u16(0), u32(c.dir ? 0x10 : 0), u32(c.off));
    chunks.push(new Uint8Array(ch), c.nb);
    cdSize += ch.length + c.nb.length;
  });
  chunks.push(new Uint8Array([].concat(u32(0x06054b50), u16(0), u16(0), u16(central.length), u16(central.length), u32(cdSize), u32(cdStart), u16(0))));
  return new Blob(chunks, { type: 'application/zip' });
}

/* ---------- State Convert File ---------- */
Object.assign(img2pdfState, { mode: 'img', pageSize: 'a4', orient: 'auto', handling: 'fit', margin: '10', dpi: '300', quality: 92 });
var convPdfState = { name: '', buf: null, origSize: 0, pages: 0, pageSize: 'a4', orient: 'auto', dpi: '300', busy: false, result: null, preview: null };

function bbImg2PdfPaste(e) {
  if (activeTab !== 'img2pdf' || img2pdfState.mode !== 'img') return;
  const files = e.clipboardData && e.clipboardData.files;
  if (files && files.length) {
    bbAddFiles(files);
    showToast('Gambar ditempel dari clipboard');
  }
}
function bbConvPickPdf() {
  const inp = document.createElement('input');
  inp.type = 'file';
  inp.accept = 'application/pdf,.pdf';
  inp.onchange = () => bbConvFiles(inp.files);
  inp.click();
}
/* [FIX v4.9] Error khusus "dibatalkan karena Clear" — ditandai
   e.abort = true supaya toast tidak tampil sebagai "Gagal". */
function bbAbortErr(msg) {
  const e = new Error(msg || 'Proses dihentikan — file sudah di-clear');
  e.abort = true;
  return e;
}
function bbConvClearPdf() {
  Object.assign(convPdfState, { name: '', buf: null, origSize: 0, pages: 0, result: null, preview: null });
  renderImg2Pdf(true);
  /* [FIX v2.2] kembalikan label tombol proses yang bisa tertinggal "Memproses..." */
  const zb = document.getElementById('bbConvZipBtn');
  if (zb) zb.textContent = 'Build Images';
}
async function bbConvFiles(list) {
  const f = list && list[0];
  if (!f) return;
  if (!/\.pdf$/i.test(f.name) && f.type !== 'application/pdf') { showToast('Pilih file PDF', 'warning'); return; }
  try {
    convPdfState.buf = await f.arrayBuffer();
    convPdfState.name = f.name;
    convPdfState.origSize = f.size;
    convPdfState.pages = 0;
    convPdfState.result = null;
    convPdfState.preview = null;
    renderImg2Pdf(true);
    const bbConvMyBuf = convPdfState.buf; /* [FIX v2.0.1 / BUG B2] pegang identitas buffer */
    bbPdfPreview(bbConvMyBuf, 460).then(d => {
      /* [FIX v4.9] abaikan preview jika file sudah di-clear sebelum preview selesai */
      /* [FIX v2.0.1 / BUG B2] cek identitas buffer (bukan hanya truthiness) agar
         ganti file cepat berturut-turut tidak menampilkan preview salah */
      if (convPdfState.buf !== bbConvMyBuf) return;
      convPdfState.preview = d;
      if (activeTab === 'img2pdf' && img2pdfState.mode === 'pdf') renderImg2Pdf(true);
    }).catch(() => {});
  } catch (e) {
    showToast('Gagal membaca file', 'warning');
  }
}
async function bbPdfPreview(buf, maxPx) {
  await bbEnsurePdfJs();
  const pdf = await pdfjsLib.getDocument({ data: new Uint8Array(buf.slice(0)) }).promise;
  const page = await pdf.getPage(1);
  const vp1 = page.getViewport({ scale: 1 });
  const k = Math.min(2, maxPx / Math.max(vp1.width, vp1.height));
  const vp = page.getViewport({ scale: k });
  const cv = document.createElement('canvas');
  cv.width = Math.max(1, Math.floor(vp.width));
  cv.height = Math.max(1, Math.floor(vp.height));
  await page.render({ canvasContext: cv.getContext('2d'), viewport: vp }).promise;
  const d = cv.toDataURL('image/jpeg', 0.85);
  page.cleanup();
  return d;
}

/* ============================================================
   [NEW v4.5] PDF COMPRESSOR — slider 40-100%, resolusi
   150/300/600/Max, tombol Pilih PDF / Clear / Compress /
   Download, preview halaman 1 di kartu kanan.
   ============================================================ */
pdfcompState.dpi = '150';
pdfcompState.preview = null;
function _pcResultHtml(st) {
  const saved = st.origSize - st.result.size;
  const pct = st.origSize > 0 ? Math.round(saved / st.origSize * 1000) / 10 : 0;
  const note = saved > 0
    ? ('Hemat ' + bbFmtBytes(saved) + ' (' + bbFmtNum(pct) + '%)')
    : 'Hasil belum lebih kecil — PDF asli kemungkinan sudah teroptimalisasi. Turunkan kualitas/resolusi lalu Flatten ulang.';
  return '<div style="margin-top:12px;padding:12px 14px;border:1px solid var(--studio-border);border-radius:12px;background:var(--studio-primary-softer)">' +
    '<div style="font-size:12.5px;color:var(--studio-text-secondary)">Asli ' + bbFmtBytes(st.origSize) + ' → Hasil <b style="color:var(--studio-text)">' + bbFmtBytes(st.result.size) + '</b></div>' +
    '<div style="font-size:11.5px;color:var(--studio-text-secondary);margin-top:2px">' + note + '</div></div>';
}
async function bbPcFiles(list) {
  const f = list && list[0];
  if (!f) return;
  if (!/\.pdf$/i.test(f.name) && f.type !== 'application/pdf') { showToast('Pilih file PDF', 'warning'); return; }
  try {
    pdfcompState.buf = await f.arrayBuffer();
    pdfcompState.name = f.name;
    pdfcompState.origSize = f.size;
    pdfcompState.pages = 0;
    pdfcompState.result = null;
    pdfcompState.preview = null;
    renderPdfComp(true);
    const bbPcMyBuf = pdfcompState.buf; /* [FIX v2.0.1 / BUG B2] pegang identitas buffer */
    bbPdfPreview(bbPcMyBuf, 440).then(d => {
      /* [FIX v2.0.1 / BUG B2] abaikan hasil preview file LAMA jika buffer sudah
         diganti/di-clear saat preview besar masih berjalan — sebelumnya halaman 1
         file lama bisa tampil di bawah nama file baru (race condition) */
      if (pdfcompState.buf !== bbPcMyBuf) return;
      pdfcompState.preview = d;
      if (activeTab === 'pdfcomp') renderPdfComp(true);
    }).catch(() => {});
  } catch (e) {
    showToast('Gagal membaca file', 'warning');
  }
}

// ============================================================
// [NEW v4.5] QR GENERATOR — mode Single & Multiple,
// Quick Styles (9 preset), padding 1-10, PNG/SVG/Copy.
// ============================================================
Object.assign(qrgenState, { size: 400, quiet: 4, shape: 'square', mode: 'single' });
var qrgenMulti = { files: [], busy: false };

function bbQrMake(text, level) {
  if (typeof qrcode !== 'function') throw new Error('Library QR belum termuat');
  if (qrcode.stringToBytesFuncs && qrcode.stringToBytesFuncs['UTF-8']) qrcode.stringToBytes = qrcode.stringToBytesFuncs['UTF-8'];
  let t = String(text || '');
  if (!t.trim()) throw new Error('Teks kosong');
  for (let tries = 0; tries < 40; tries++) {
    try {
      const qr = qrcode(0, level || 'M');
      qr.addData(t);
      qr.make();
      return { qr: qr, count: qr.getModuleCount(), truncated: tries > 0, text: t };
    } catch (e) {
      if (t.length <= 60) throw new Error('Teks terlalu panjang untuk QR');
      t = t.slice(0, Math.floor(t.length * 0.8));
    }
  }
  throw new Error('Teks terlalu panjang untuk QR');
}
function bbQrRr(ctx, x, y, w, h, r) {
  r = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
function bbQrIsFinder(r, c, count) {
  return (r < 7 && c < 7) || (r < 7 && c >= count - 7) || (r >= count - 7 && c < 7);
}
function bbQrShapeOn(ctx, shape, x, y, s) {
  if (shape === 'dots') { ctx.beginPath(); ctx.arc(x + s / 2, y + s / 2, s / 2 * 0.92, 0, Math.PI * 2); ctx.fill(); }
  else if (shape === 'rounded') { bbQrRr(ctx, x, y, s, s, s * 0.32); ctx.fill(); }
  else if (shape === 'classy') { bbQrRr(ctx, x, y, s, s, s * 0.48); ctx.fill(); }
  else ctx.fillRect(x, y, s, s);
}
function bbQrDrawOn(cv, qr, count, opt) {
  const q = Math.max(1, Math.min(10, Math.round(opt.quiet) || 1));
  const total = count + q * 2;
  const px = Math.max(2, Math.floor((Number(opt.size) || 400) / total));
  const dim = px * total;
  cv.width = dim; cv.height = dim;
  const ctx = cv.getContext('2d');
  ctx.fillStyle = opt.bg || '#FFFFFF';
  ctx.fillRect(0, 0, dim, dim);
  const fg = opt.fg || '#111827';
  ctx.fillStyle = fg;
  const off = q * px;
  const shape = opt.shape || 'square';
  if (shape === 'square') {
    for (let r = 0; r < count; r++) {
      for (let c = 0; c < count; c++) {
        if (qr.isDark(r, c)) ctx.fillRect(off + c * px, off + r * px, px, px);
      }
    }
    return dim;
  }
  for (let r = 0; r < count; r++) {
    for (let c = 0; c < count; c++) {
      if (!qr.isDark(r, c) || bbQrIsFinder(r, c, count)) continue;
      bbQrShapeOn(ctx, shape, off + c * px, off + r * px, px);
    }
  }
  [[0, 0], [count - 7, 0], [0, count - 7]].forEach(pos => {
    const gx = off + pos[1] * px, gy = off + pos[0] * px, S = px * 7;
    if (shape === 'dots') {
      ctx.beginPath(); ctx.arc(gx + S / 2, gy + S / 2, S / 2 - px * 0.5, 0, Math.PI * 2);
      ctx.lineWidth = px; ctx.strokeStyle = fg; ctx.stroke();
      ctx.beginPath(); ctx.arc(gx + S / 2, gy + S / 2, px * 1.5, 0, Math.PI * 2); ctx.fill();
    } else {
      const rr = shape === 'classy' ? S * 0.42 : S * 0.3;
      bbQrRr(ctx, gx + px * 0.5, gy + px * 0.5, S - px, S - px, rr);
      ctx.lineWidth = px; ctx.strokeStyle = fg; ctx.stroke();
      bbQrRr(ctx, gx + px * 2, gy + px * 2, px * 3, px * 3, px * (shape === 'classy' ? 1.5 : 1)); ctx.fill();
    }
  });
  return dim;
}
function bbQrToSvg(qr, count, opt) {
  const q = Math.max(1, Math.min(10, Math.round(opt.quiet) || 1));
  const total = count + q * 2;
  const px = Math.max(2, Math.floor((Number(opt.size) || 400) / total));
  const dim = px * total;
  const fg = opt.fg || '#111827', bg = opt.bg || '#FFFFFF';
  const shape = opt.shape || 'square';
  const off = q * px;
  function mod(x, y, s) {
    if (shape === 'dots') return '<circle cx="' + (x + s / 2).toFixed(2) + '" cy="' + (y + s / 2).toFixed(2) + '" r="' + (s * 0.46).toFixed(2) + '" fill="' + fg + '"/>';
    if (shape === 'rounded') return '<rect x="' + x + '" y="' + y + '" width="' + s + '" height="' + s + '" rx="' + (s * 0.32).toFixed(2) + '" fill="' + fg + '"/>';
    if (shape === 'classy') return '<rect x="' + x + '" y="' + y + '" width="' + s + '" height="' + s + '" rx="' + (s * 0.48).toFixed(2) + '" fill="' + fg + '"/>';
    return '<rect x="' + x + '" y="' + y + '" width="' + s + '" height="' + s + '" fill="' + fg + '"/>';
  }
  let body = '';
  for (let r = 0; r < count; r++) {
    for (let c = 0; c < count; c++) {
      if (!qr.isDark(r, c)) continue;
      if (shape !== 'square' && bbQrIsFinder(r, c, count)) continue;
      body += mod(off + c * px, off + r * px, px);
    }
  }
  if (shape !== 'square') {
    [[0, 0], [count - 7, 0], [0, count - 7]].forEach(pos => {
      const gx = off + pos[1] * px, gy = off + pos[0] * px, S = px * 7;
      if (shape === 'dots') {
        body += '<circle cx="' + (gx + S / 2).toFixed(2) + '" cy="' + (gy + S / 2).toFixed(2) + '" r="' + (S / 2 - px * 0.5).toFixed(2) + '" fill="none" stroke="' + fg + '" stroke-width="' + px + '"/>';
        body += '<circle cx="' + (gx + S / 2).toFixed(2) + '" cy="' + (gy + S / 2).toFixed(2) + '" r="' + (px * 1.5).toFixed(2) + '" fill="' + fg + '"/>';
      } else {
        const rr = shape === 'classy' ? S * 0.42 : S * 0.3;
        body += '<rect x="' + (gx + px * 0.5).toFixed(2) + '" y="' + (gy + px * 0.5).toFixed(2) + '" width="' + (S - px).toFixed(2) + '" height="' + (S - px).toFixed(2) + '" rx="' + rr.toFixed(2) + '" fill="none" stroke="' + fg + '" stroke-width="' + px + '"/>';
        body += '<rect x="' + (gx + px * 2).toFixed(2) + '" y="' + (gy + px * 2).toFixed(2) + '" width="' + (px * 3).toFixed(2) + '" height="' + (px * 3).toFixed(2) + '" rx="' + (px * (shape === 'classy' ? 1.5 : 1)).toFixed(2) + '" fill="' + fg + '"/>';
      }
    });
  }
  return '<svg xmlns="http://www.w3.org/2000/svg" width="' + dim + '" height="' + dim + '" viewBox="0 0 ' + dim + ' ' + dim + '"><rect width="' + dim + '" height="' + dim + '" fill="' + bg + '"/>' + body + '</svg>';
}
function drawQrCanvas() {
  const cv = document.getElementById('bbQrCanvas');
  const err = document.getElementById('bbQrErr');
  if (!cv) return;
  const st = qrgenState;
  const text = (st.text || '').trim();
  if (!text) {
    cv.width = 10; cv.height = 10;
    if (err) err.textContent = 'Masukkan teks atau link untuk membuat QR.';
    return;
  }
  try {
    const m = bbQrMake(text, st.level);
    bbQrDrawOn(cv, m.qr, m.count, { size: st.size, quiet: st.quiet, fg: st.fg, bg: st.bg, shape: st.shape });
    if (err) err.textContent = '';
  } catch (e) {
    if (err) err.textContent = 'Gagal membuat QR: ' + (e.message || 'kesalahan tidak diketahui');
  }
}
function bbQrDownloadSvg() {
  const st = qrgenState;
  if (!(st.text || '').trim()) { showToast('Masukkan teks/link dulu', 'warning'); return; }
  try {
    const m = bbQrMake(st.text.trim(), st.level);
    const svg = bbQrToSvg(m.qr, m.count, { size: st.size, quiet: st.quiet, fg: st.fg, bg: st.bg, shape: st.shape });
    bbDownload(new Blob([svg], { type: 'image/svg+xml' }), 'qr-' + bbQrSlug() + '.svg');
    showToast('SVG diunduh');
  } catch (e) {
    showToast('Gagal membuat SVG: ' + (e.message || ''), 'warning');
  }
}

function bbQrMultiBase(s) {
  return (s || 'file').replace(/\.[^.]+$/, '').replace(/[^\w\- ]+/g, '_').trim().slice(0, 40) || 'file';
}
/* [NEW v2.5] nama file hasil unduhan = nomor QR saja ("001.png") —
   tanpa prefix urutan "01-" di depan */
function bbQrMultiSafeName(s, ext) {
  return bbQrMultiBase(s) + (ext ? '.' + ext : '');
}
function bbQrMultiCsv(rows) {
  return rows.map(r => r.map(v => {
    v = String(v == null ? '' : v);
    return /[;"\r\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v;
  }).join(';')).join('\r\n');
}
/* [FIX v2.2] Unduhan QR Bulk kini bersumber dari daftar nomor hasil
   Create (qrgenBulk.items) — bukan lagi dari file upload. Dulu selalu
   muncul "Belum ada file yang berhasil dibaca" karena sumber file
   sudah dihapus dari panel Bulk. Jika belum klik Create, daftar nomor
   diambil otomatis dari Start/End (maks 500, sama seperti tombol Create). */
async function bbQrMultiDownload(kind) {
  const st = qrgenState;
  const list = (qrgenBulk.items && qrgenBulk.items.length) ? qrgenBulk.items.slice() : bbBulkStrings().slice(0, 500);
  if (!list.length) { showToast('Belum ada QR — isi Start / End lalu klik Create', 'warning'); return; }
  const items = [];
  for (const s of list) {
    try { items.push({ name: s, m: bbQrMake(s, st.level) }); }
    catch (e) { /* lewati nomor yang gagal dibuat */ }
  }
  if (!items.length) { showToast('Belum ada QR yang berhasil dibuat', 'warning'); return; }
  try {
    if (kind === 'png' || kind === 'svg') {
      const entries = [];
      const ext = kind === 'png' ? 'png' : 'svg';
      /* [NEW v2.5] metadata.csv hanya kolom isi_qr (tanpa "no") —
         isinya nama file tiap QR ("1.png" / "01.png" / "001.png") */
      const meta = [['isi_qr']];
      for (let i = 0; i < items.length; i++) {
        const it = items[i], m = it.m;
        if (kind === 'png') {
          const cv = document.createElement('canvas');
          bbQrDrawOn(cv, m.qr, m.count, { size: st.size, quiet: st.quiet, fg: st.fg, bg: st.bg, shape: st.shape });
          const blob = bbCanvasBlob(cv, 'image/png');
          entries.push({ name: 'QR-PNG/' + bbQrMultiSafeName(it.name, ext), data: new Uint8Array(await blob.arrayBuffer()) });
        } else {
          const svg = bbQrToSvg(m.qr, m.count, { size: st.size, quiet: st.quiet, fg: st.fg, bg: st.bg, shape: st.shape });
          entries.push({ name: 'QR-SVG/' + bbQrMultiSafeName(it.name, ext), data: new TextEncoder().encode(svg) });
        }
        meta.push([bbQrMultiSafeName(it.name, ext)]);
      }
      entries.push({ name: (kind === 'png' ? 'QR-PNG' : 'QR-SVG') + '/metadata.csv', data: new TextEncoder().encode('\uFEFF' + bbQrMultiCsv(meta)) });
      bbDownload(bbZipStore(entries), kind === 'png' ? 'qr-png.zip' : 'qr-svg.zip');
      showToast('ZIP berisi ' + items.length + ' QR ' + kind.toUpperCase() + ' + metadata.csv diunduh');
    } else if (kind === 'pdf') {
      if (!window.jspdf) throw new Error('jsPDF belum termuat — muat ulang halaman dengan koneksi internet');
      const { jsPDF } = window.jspdf;
      /* [v2.9] Halaman PDF berbentuk KOTAK mengikuti ukuran QR — bukan A4 lagi.
         Sisi halaman = gambar QR (900 pt) + margin 60 pt di tiap sisi = 1020 pt. */
      const QRPT = 900, MGPT = 60;
      const side = QRPT + MGPT * 2;
      let doc = null;
      for (let i = 0; i < items.length; i++) {
        const it = items[i], m = it.m;
        const cv = document.createElement('canvas');
        bbQrDrawOn(cv, m.qr, m.count, { size: QRPT, quiet: st.quiet, fg: st.fg, bg: st.bg, shape: st.shape });
        if (!doc) doc = new jsPDF({ unit: 'pt', format: [side, side], orientation: 'portrait', compress: true });
        else doc.addPage([side, side], 'portrait');
        doc.addImage(cv.toDataURL('image/png'), 'PNG', MGPT, MGPT, QRPT, QRPT);
        doc.setFontSize(11);
        doc.setTextColor(110);
        doc.text(bbQrMultiSafeName(it.name, ''), side / 2, MGPT + QRPT + 32, { align: 'center' }); /* [v2.5] caption = nomor saja */
      }
      const blob = doc.output('blob');
      bbDownload(blob, 'qr-generator.pdf');
      showToast('PDF berisi ' + items.length + ' halaman kotak ' + side + '×' + side + ' pt (ukuran mengikuti QR) diunduh');
    } else if (kind === 'csv') {
      /* [NEW v2.5] hanya kolom isi_qr (tanpa "no") — berisi nama file PNG ("001.png") */
      const meta = [['isi_qr']];
      items.forEach(x => meta.push([bbQrMultiSafeName(x.name, 'png')]));
      bbDownload(new Blob(['\uFEFF' + bbQrMultiCsv(meta)], { type: 'text/csv;charset=utf-8' }), 'qr-metadata.csv');
      showToast('Metadata CSV diunduh');
    }
  } catch (e) {
    console.error('BlueBee qrgen-bulk:', e);
    showToast('Gagal: ' + (e && e.message ? e.message : 'kesalahan tidak diketahui'), 'warning');
  }
}

/* ============================================================
   [NEW v4.5] PREVIEW LUBANG — panel kiri tanpa preview strip,
   diameter otomatis proporsional, kartu preview fit (tanpa
   scroll bar; SVG preserveAspectRatio="xMidYMid meet").
   ============================================================ */
function _lbAutoDia(W, H) {
  return Math.round(Math.max(8, Math.min(25, Math.min(W, H) * 0.02)) * 2) / 2;
}

// ============================================================
// [NEW v4.6] CONVERT FILE — opsi diringkas sesuai masukan user:
// Handling (Fit Proporsi / Fill Proporsi / Stretch To Fill),
// Margin (Tanpa Margin..20mm, default Tanpa Margin), Resolusi
// 300/600/900/1.200/Max DPI, tombol Clear merah + Build biru
// sama ukuran, panel kanan: Preview Upload (strip horizontal
// dgn tombol X) + Card Preview kanvas live.
// ============================================================

/* ---------- Resolusi baru (override v4.5) ---------- */
BB_DPI_OPTS = [
  { value: '300', label: '300DPI' },
  { value: '600', label: '600DPI' },
  { value: '900', label: '900DPI' },
  { value: '1200', label: '1.200DPI' },
  { value: 'max', label: 'Max DPI' }
];
function bbDpiLabel(v) { return v === 'max' ? 'Max DPI' : v + 'DPI'; }

/* Default baru */
Object.assign(img2pdfState, { margin: '0', dpi: '300', handling: 'fit' });
Object.assign(convPdfState, { orient: 'auto', dpi: '300' });
pdfcompState.dpi = '300';

var BB_MARGIN_OPTS = [
  { value: '0', label: 'Tanpa Margin' },
  { value: '2', label: '2 mm' },
  { value: '3', label: '3 mm' },
  { value: '4', label: '4 mm' },
  { value: '5', label: '5 mm' },
  { value: '10', label: '10 mm' },
  { value: '20', label: '20 mm' }
];
var BB_ORIENT_OPTS = [
  { value: 'auto', label: 'Auto' },
  { value: 'p', label: 'Potrait' },
  { value: 'l', label: 'Landscape' }
];

function bbI2pSettingLabel() {
  const st = img2pdfState;
  const paper = (bbPaperOptions().find(o => o.value === st.pageSize) || { label: String(st.pageSize).toUpperCase() }).label.split(' (')[0];
  const pos = st.orient === 'auto' ? 'Auto' : (st.orient === 'p' ? 'Potrait' : 'Landscape');
  const hand = st.handling === 'fit' ? 'Fit Proporsi' : (st.handling === 'fill' ? 'Fill Proporsi' : 'Stretch To Fill');
  const mg = (Number(st.margin) || 0) > 0 ? st.margin + ' mm' : 'Tanpa Margin';
  return paper + ' · ' + pos + ' · ' + hand + ' · ' + mg + ' · ' + bbDpiLabel(st.dpi);
}

/* Card Preview kanvas: kertas + margin + gambar pertama sesuai
   Handling — digambar ulang setiap render (ikut panel kiri).
   Dimensi gambar dimuat dulu agar Posisi "Auto" akurat. */
function bbI2pDrawPreview() {
  const cv = document.getElementById('bbI2pCv');
  if (!cv) return;
  const st = img2pdfState;
  const tok = (cv._tok = (cv._tok || 0) + 1);
  const BW = 640, BH = 440, DS = 2;
  cv.width = BW * DS; cv.height = BH * DS;
  const ctx = cv.getContext('2d');
  ctx.setTransform(DS, 0, 0, DS, 0, 0);
  ctx.clearRect(0, 0, BW, BH);
  /* [NEW v2.3] indeks preview aktif (panah < >), di-clamp ke jumlah gambar */
  const n = img2pdfItems.length;
  const idx = n ? Math.min(Math.max(st.previewIdx || 0, 0), n - 1) : 0;
  st.previewIdx = idx;
  const it = img2pdfItems[idx];
  function drawPaper(land) {
    const pp = bbPaperPt(st.pageSize);
    let pw = pp[0], ph = pp[1];
    if (land) { const t = pw; pw = ph; ph = t; }
    const pad = 16;
    const k = Math.min((BW - pad * 2) / pw, (BH - pad * 2) / ph);
    const w = pw * k, h = ph * k;
    const x = (BW - w) / 2, y = (BH - h) / 2;
    ctx.save();
    ctx.shadowColor = 'rgba(15,23,42,.14)'; ctx.shadowBlur = 16; ctx.shadowOffsetY = 5;
    ctx.fillStyle = '#FFFFFF'; ctx.fillRect(x, y, w, h);
    ctx.restore();
    ctx.strokeStyle = '#CBD5E1'; ctx.lineWidth = 1;
    ctx.strokeRect(x + .5, y + .5, w - 1, h - 1);
    const mPt = (Number(st.margin) || 0) * 72 / 25.4;
    const mx = mPt * k;
    if (mx > 0.5) {
      ctx.setLineDash([5, 4]); ctx.strokeStyle = '#93C5FD';
      ctx.strokeRect(x + mx + .5, y + mx + .5, Math.max(1, w - 2 * mx - 1), Math.max(1, h - 2 * mx - 1));
      ctx.setLineDash([]);
    }
    return { x: x, y: y, w: w, h: h, mx: mx };
  }
  if (!it) {
    /* [NEW v2.3] tulisan "Belum ada gambar — preview mengikuti pengaturan di kiri" dihapus */
    drawPaper(false);
  } else {
    bbLoadImage(it.url).then(img => {
    if (cv._tok !== tok) return;
    const iw = img.naturalWidth || 800, ih = img.naturalHeight || 600;
    let land = st.orient === 'l';
    if (st.orient === 'auto') land = iw > ih;
    const f = drawPaper(land);
    const ax = f.x + f.mx, ay = f.y + f.mx, aw = Math.max(2, f.w - 2 * f.mx), ah = Math.max(2, f.h - 2 * f.mx);
    ctx.save();
    ctx.beginPath(); ctx.rect(ax, ay, aw, ah); ctx.clip();
    ctx.fillStyle = '#FFFFFF'; ctx.fillRect(ax, ay, aw, ah);
    if (st.handling === 'fit') {
      const kk = Math.min(aw / iw, ah / ih), dw = iw * kk, dh = ih * kk;
      ctx.drawImage(img, ax + (aw - dw) / 2, ay + (ah - dh) / 2, dw, dh);
    } else if (st.handling === 'fill') {
      const kk = Math.max(aw / iw, ah / ih), dw = iw * kk, dh = ih * kk;
      ctx.drawImage(img, ax + (aw - dw) / 2, ay + (ah - dh) / 2, dw, dh);
    } else {
      ctx.drawImage(img, ax, ay, aw, ah);
    }
    ctx.restore();
  }).catch(() => {});
  }
  /* [NEW v2.3] status tombol panah & label halaman (1 / N) — pengganti badge di kanvas */
  var _pvPrev = document.getElementById('bbI2pPrev');
  var _pvNext = document.getElementById('bbI2pNext');
  var _pvPage = document.getElementById('bbI2pPage');
  if (_pvPrev) _pvPrev.disabled = n <= 1 || idx <= 0;
  if (_pvNext) _pvNext.disabled = n <= 1 || idx >= n - 1;
  if (_pvPage) {
    if (n > 1) { _pvPage.textContent = (idx + 1) + ' / ' + n; _pvPage.style.display = ''; }
    else { _pvPage.style.display = 'none'; }
  }
}

async function img2pdfGenerate() {
  const st = img2pdfState;
  if (!img2pdfItems.length) { showToast('Belum ada gambar — unggah lewat kotak Preview Upload dulu', 'warning'); return; }
  const myItems = img2pdfItems; /* [FIX v4.9] referensi awal untuk deteksi Clear di tengah proses */
  const btn = document.getElementById('bbI2pBuildBtn');
  const setStatus = m => { const el = document.getElementById('bbI2pStatus'); if (el) el.textContent = m || ''; };
  if (btn) { btn.disabled = true; btn.textContent = 'Memproses...'; }
  try {
    if (!window.jspdf) throw new Error('jsPDF belum termuat — muat ulang halaman dengan koneksi internet');
    const { jsPDF } = window.jspdf;
    let doc = null;
    for (let i = 0; i < myItems.length; i++) {
      if (img2pdfItems !== myItems) throw bbAbortErr('Proses dihentikan — gambar sudah di-clear'); /* [FIX v4.9] */
      setStatus('Memproses gambar ' + (i + 1) + ' dari ' + myItems.length + '...');
      const it = myItems[i];
      const img = await bbLoadImage(it.url);
      const w = img.naturalWidth || it.w || 800;
      const h = img.naturalHeight || it.h || 600;
      const pp = bbPaperPt(st.pageSize);
      let pw = pp[0], ph = pp[1];
      const land = st.orient === 'auto' ? (w > h) : (st.orient === 'l');
      if (land) { const t = pw; pw = ph; ph = t; }
      const m = (Number(st.margin) || 0) * 72 / 25.4;
      const availW = Math.max(10, pw - 2 * m), availH = Math.max(10, ph - 2 * m);
      let sx = 0, sy = 0, sw = w, sh = h;
      let rw = availW, rh = availH;
      if (st.handling === 'fit') {
        const k = Math.min(availW / w, availH / h);
        rw = w * k; rh = h * k;
      } else if (st.handling === 'fill') {
        const ar = availW / availH;
        if (w / h > ar) { sw = h * ar; sx = (w - sw) / 2; }
        else { sh = w / ar; sy = (h - sh) / 2; }
      }
      const dpiT = st.dpi === 'max' ? Infinity : Number(st.dpi);
      const dpiSrc = sw / (rw / 72);
      const dpiEff = Math.min(dpiT, dpiSrc, 1200);
      const kc = bbClampPx(rw / 72 * dpiEff, rh / 72 * dpiEff);
      const cw = Math.max(1, Math.round(rw / 72 * dpiEff * kc));
      const chh = Math.max(1, Math.round(rh / 72 * dpiEff * kc));
      const cv = document.createElement('canvas');
      cv.width = cw; cv.height = chh;
      const ctx = cv.getContext('2d');
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, cw, chh);
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, chh);
      const dataUrl = cv.toDataURL('image/jpeg', 0.92);
      if (!doc) doc = new jsPDF({ unit: 'pt', format: [pw, ph], orientation: pw > ph ? 'landscape' : 'portrait', compress: true });
      else doc.addPage([pw, ph], pw > ph ? 'landscape' : 'portrait');
      doc.addImage(dataUrl, 'JPEG', (pw - rw) / 2, (ph - rh) / 2, rw, rh);
    }
    if (img2pdfItems !== myItems) throw bbAbortErr('Proses dihentikan — gambar sudah di-clear'); /* [FIX v4.9] jangan set hasil jika sudah di-clear */
    const blob = doc.output('blob');
    st.result = { blob: blob, pages: myItems.length, size: blob.size };
    showToast('PDF dibuat: ' + myItems.length + ' halaman (' + bbFmtBytes(blob.size) + ')');
    renderImg2Pdf(true);
  } catch (e) {
    console.error('BlueBee img2pdf:', e);
    setStatus('');
    showToast(e && e.abort ? e.message : ('Gagal membuat PDF: ' + (e && e.message ? e.message : 'kesalahan tidak diketahui')), 'warning');
  } finally {
    const b = document.getElementById('bbI2pBuildBtn');
    if (b) { b.disabled = false; b.textContent = 'Build PDF'; }
  }
}

/* PDF to Images: Posisi Auto/Potrait/Landscape — kanvas output
   dipaksa mengikuti orientasi pilihan (letterbox tanpa rotasi). */

/* ============================================================
   [NEW v4.6] PDF COMPRESSOR — tanpa tombol "Pilih PDF"
   (unggah lewat drop zone kanan); baris bawah:
   Clear - Compress - Download (sama ukuran).
   ============================================================ */

async function pdfcompStart() {
  const st = pdfcompState;
  if (!st.buf || st.busy) return;
  const myBuf = st.buf; /* [FIX v4.9] referensi awal untuk deteksi Clear di tengah proses */
  const btn = document.getElementById('bbPcBtn');
  if (btn) btn.disabled = true;
  st.busy = true;
  const setStatus = m => { const el = document.getElementById('bbPcStatus'); if (el) el.textContent = m || ''; };
  const prog = p => {
    const w = document.getElementById('bbPcProg');
    const b = document.getElementById('bbPcProgBar');
    if (w) w.style.display = 'block';
    if (b) b.style.width = Math.max(2, Math.min(100, p)) + '%';
  };
  setStatus('Memuat mesin PDF...');
  prog(3);
  let doc = null;
  try {
    await bbEnsurePdfJs();
    if (!st.buf || st.buf !== myBuf) throw bbAbortErr(); /* [FIX v4.9] file sudah di-clear saat mesin dimuat */
    if (!window.jspdf) throw new Error('jsPDF belum termuat — muat ulang halaman dengan koneksi internet');
    setStatus('Membaca PDF...');
    const pdf = await pdfjsLib.getDocument({ data: new Uint8Array(st.buf.slice(0)) }).promise;
    st.pages = pdf.numPages;
    const { jsPDF } = window.jspdf;
    const dpi = st.dpi === 'max' ? 1200 : Number(st.dpi);
    for (let i = 1; i <= pdf.numPages; i++) {
      if (st.buf !== myBuf) throw bbAbortErr(); /* [FIX v4.9] berhenti jika sudah di-clear */
      setStatus('Memproses halaman ' + i + ' dari ' + pdf.numPages + '...');
      prog(i / pdf.numPages * 92);
      const page = await pdf.getPage(i);
      const vp1 = page.getViewport({ scale: 1 });
      const k = bbClampPx(vp1.width / 72 * dpi, vp1.height / 72 * dpi);
      const vp = page.getViewport({ scale: dpi / 72 * k });
      const cv = document.createElement('canvas');
      cv.width = Math.max(1, Math.floor(vp.width));
      cv.height = Math.max(1, Math.floor(vp.height));
      await page.render({ canvasContext: cv.getContext('2d'), viewport: vp }).promise;
      const dataUrl = cv.toDataURL('image/jpeg', st.quality / 100);
      if (!doc) doc = new jsPDF({ unit: 'pt', format: [vp1.width, vp1.height], orientation: vp1.width > vp1.height ? 'landscape' : 'portrait', compress: true });
      else doc.addPage([vp1.width, vp1.height], vp1.width > vp1.height ? 'landscape' : 'portrait');
      doc.addImage(dataUrl, 'JPEG', 0, 0, vp1.width, vp1.height);
      page.cleanup();
    }
    if (st.buf !== myBuf) throw bbAbortErr(); /* [FIX v4.9] jangan set hasil jika sudah di-clear */
    const blob = doc.output('blob');
    st.result = { blob: blob, size: blob.size };
    prog(100);
    showToast('Kompres selesai: ' + bbFmtBytes(st.origSize) + ' → ' + bbFmtBytes(blob.size));
  } catch (e) {
    console.error('BlueBee pdfcomp:', e);
    setStatus('');
    showToast(e && e.abort ? e.message : ('Gagal mengompres: ' + (e && e.message ? e.message : 'kesalahan tidak diketahui')), 'warning');
  } finally {
    st.busy = false;
    renderPdfComp(true);
  }
}

// ============================================================
// [NEW v4.6] QR GENERATOR — Quick Styles dihapus; Warna:
// QR (Color) + Background (Color) dgn kode hex; tombol
// PNG/SVG/Copy sama ukuran, semua biru; hint padding dihapus.
// ============================================================
Object.assign(qrgenState, { shape: 'square' });

// ============================================================
// [NEW v4.6] PREVIEW LUBANG — Ukuran Banner inline (Lebar x
// Tinggi + satuan MM/CM/M seperti referensi user), statistik
// jadi kartu hasil gaya "Pcs Per Lembar", label bawah SVG
// diberi jarak dari garis dimensi, teks penjelasan dihapus.
// ============================================================

function renderLubang(skipLeftPanel) {
  const lp = document.getElementById('lubangLeftPanel');
  const st = lubangState;
  if (!lp) return;
  if (!skipLeftPanel) {
    lp.innerHTML = '';
    createSectionTitle('lubangLeftPanel', 'Ukuran Banner');
    bbLubangDimRow(lp);
    createSectionTitle('lubangLeftPanel', 'Pola Lubang');
    createDropdown('lubangLeftPanel', 'Mode', [{ value: 'count', label: 'Jumlah lubang per sisi' }, { value: 'spacing', label: 'Jarak antar lubang (otomatis)' }], st.mode, v => { st.mode = v; }, ICONS.twoSides);
    if (st.mode === 'spacing') {
      createNumberInput('lubangLeftPanel', 'Jarak Maks Antar Lubang', st.spacing, v => { st.spacing = v; }, 0.1, ICONS.margin, 1000000, 0.5);
    } else {
      createNumberInput('lubangLeftPanel', 'Lubang Sisi Atas', st.nTop, v => { st.nTop = v; }, 0, ICONS.pcs, 120);
      createNumberInput('lubangLeftPanel', 'Lubang Sisi Kanan', st.nRight, v => { st.nRight = v; }, 0, ICONS.pcs, 120);
      createNumberInput('lubangLeftPanel', 'Lubang Sisi Bawah', st.nBottom, v => { st.nBottom = v; }, 0, ICONS.pcs, 120);
      createNumberInput('lubangLeftPanel', 'Lubang Sisi Kiri', st.nLeft, v => { st.nLeft = v; }, 0, ICONS.pcs, 120);
      /* [v2.9] 4 input sisi dirapatkan jadi grid 2x2 supaya panel kiri muat tanpa scroll */
      const sideGroups = lp.querySelectorAll('.studio-form-group');
      const grid2 = document.createElement('div');
      grid2.className = 'bb-lb-grid2';
      for (let gi = sideGroups.length - 4; gi < sideGroups.length; gi++) grid2.appendChild(sideGroups[gi]);
      lp.appendChild(grid2);
    }
    createSectionTitle('lubangLeftPanel', 'Aksi');
    const lbRow = document.createElement('div');
    lbRow.className = 'bb-btnrow';
    lbRow.innerHTML = '<button class="bb-btn" id="bbLbUpBtn" style="flex:1.35">Upload Image</button>' +
      '<button class="bb-btn" id="bbLbDlBtn">Download</button>' +
      '<button class="bb-btn bb-btn-danger" id="bbLbClearBtn">Clear</button>';
    lp.appendChild(lbRow);
    const lbNote = document.createElement('div');
    lbNote.className = 'bb-lb-note';
    lbNote.innerHTML = '<b>Note :<br>Preview Ini Hanya Untuk Melihat Posisi Lubang - Bukan Patokan Untuk Print</b>';
    lp.appendChild(lbNote);
    const lbFile = document.createElement('input');
    lbFile.type = 'file'; lbFile.accept = 'image/*'; lbFile.style.display = 'none';
    lp.appendChild(lbFile);
    lbRow.querySelector('#bbLbUpBtn').addEventListener('click', function () { lbFile.click(); });
    lbFile.addEventListener('change', function (e) {
      const f = e.target.files && e.target.files[0];
      lbFile.value = '';
      if (!f) return;
      if (!/^image\//.test(f.type)) { showToast('File bukan gambar — pilih JPG / PNG / WebP', 'warning'); return; }
      const MAXD = 1600;
      function applyImg(dataUrl, w, h) {
        lubangState.img = dataUrl;
        lubangState.imgName = f.name;
        lubangState.imgW = w; lubangState.imgH = h;
        renderLubangPreview();
      }
      const url = URL.createObjectURL(f);
      const im = new Image();
      im.onload = function () {
        const ow = im.naturalWidth || im.width, oh = im.naturalHeight || im.height;
        const longest = Math.max(ow, oh);
        if (longest > MAXD) {
          const sc = MAXD / longest;
          const tw = Math.max(1, Math.round(ow * sc)), th = Math.max(1, Math.round(oh * sc));
          try {
            const cv = document.createElement('canvas');
            cv.width = tw; cv.height = th;
            const cx = cv.getContext('2d');
            cx.fillStyle = '#FFFFFF'; cx.fillRect(0, 0, tw, th);
            cx.drawImage(im, 0, 0, tw, th);
            const out = cv.toDataURL('image/jpeg', 0.85);
            URL.revokeObjectURL(url);
            applyImg(out, ow, oh);
            showToast('Gambar besar otomatis diperkecil ' + ow + '×' + oh + ' → ' + tw + '×' + th + ' px agar aplikasi tetap ringan', 'success');
          } catch (err) {
            const rd = new FileReader();
            rd.onload = function () { URL.revokeObjectURL(url); applyImg(rd.result, ow, oh); showToast('Gambar dimuat — posisi lubang dipreview di atas gambar', 'success'); };
            rd.onerror = function () { URL.revokeObjectURL(url); showToast('Gagal membaca file gambar', 'warning'); };
            rd.readAsDataURL(f);
          }
        } else {
          const rd = new FileReader();
          rd.onload = function () { URL.revokeObjectURL(url); applyImg(rd.result, ow, oh); showToast('Gambar dimuat — posisi lubang dipreview di atas gambar', 'success'); };
          rd.onerror = function () { URL.revokeObjectURL(url); showToast('Gagal membaca file gambar', 'warning'); };
          rd.readAsDataURL(f);
        }
      };
      im.onerror = function () { URL.revokeObjectURL(url); showToast('Gagal membaca file gambar', 'warning'); };
      im.src = url;
    });
    lbRow.querySelector('#bbLbDlBtn').addEventListener('click', function () {
      if (!document.querySelector('#lubangRightPanel svg')) { showToast('Isi ukuran banner terlebih dulu untuk melihat preview', 'warning'); return; }
      lubangExportPng();
    });
    lbRow.querySelector('#bbLbClearBtn').addEventListener('click', function () {
      if (!lubangState.img) { showToast('Belum ada gambar yang diunggah', 'info'); return; }
      lubangState.img = null; lubangState.imgName = '';
      renderLubangPreview();
      showToast('Gambar dihapus dari preview', 'success');
    });
  }
  renderLubangPreview();
}

function renderLubangPreview() {
  const rp = document.getElementById('lubangRightPanel');
  const st = lubangState;
  if (!rp) return;
  const c = _lbCompute(st);
  const u = st.unit;
  const um = _lbUnitMul(u);
  if (!(c.W > 0) || !(c.H > 0)) {
    rp.innerHTML = '<div class="bb-toolbar"><h2>Preview Lubang</h2></div>' +
      '<div class="bb-preview-card" style="text-align:center;color:var(--studio-text-muted);padding:44px 16px">Masukkan ukuran banner di panel kiri untuk melihat preview lubang.</div>';
    return;
  }
  const dia = _lbAutoDia(c.W, c.H);
  const VBW = 780, VBH = 505;
  const padL = 66, padT = 36, padR = 40, padB = 104;
  const availW = VBW - padL - padR, availH = VBH - padT - padB;
  const scale = Math.min(availW / c.W, availH / c.H);
  const bw = c.W * scale, bh = c.H * scale;
  const x0 = padL + (availW - bw) / 2, y0 = padT + (availH - bh) / 2;
  const rVis = Math.min(26, Math.max(3, dia / 2 * scale));
  let holes = '';
  c.pts.forEach(p => {
    const cx = x0 + p.x * scale, cy = y0 + p.y * scale;
    const corner = (p.x === 0 || p.x === c.W) && (p.y === 0 || p.y === c.H);
    holes += '<circle cx="' + cx.toFixed(1) + '" cy="' + cy.toFixed(1) + '" r="' + rVis.toFixed(1) + '" fill="' + (corner ? '#1D4ED8' : '#3B82F6') + '"' + (corner ? ' stroke="#93C5FD" stroke-width="1"' : '') + '/>';
  });
  const lbl = 'font-size:11.5px;font-weight:700;fill:#5B6B84';
  const lblTop = '<text x="' + (x0 + bw / 2).toFixed(1) + '" y="' + (y0 - 12).toFixed(1) + '" text-anchor="middle" style="' + lbl + '">Atas: ' + c.n.top + ' lubang</text>';
  const lblBottom = '<text x="' + (x0 + bw / 2).toFixed(1) + '" y="' + (y0 + bh + 28).toFixed(1) + '" text-anchor="middle" style="' + lbl + '">Bawah: ' + c.n.bottom + ' lubang</text>';
  const lblLeft = '<text transform="translate(' + (x0 - 14).toFixed(1) + ',' + (y0 + bh / 2).toFixed(1) + ') rotate(-90)" text-anchor="middle" style="' + lbl + '">Kiri: ' + c.n.left + '</text>';
  const lblRight = '<text transform="translate(' + (x0 + bw + 18).toFixed(1) + ',' + (y0 + bh / 2).toFixed(1) + ') rotate(90)" text-anchor="middle" style="' + lbl + '">Kanan: ' + c.n.right + '</text>';
  const dimY = y0 + bh + 64;
  const dimH = '<line x1="' + x0.toFixed(1) + '" y1="' + dimY.toFixed(1) + '" x2="' + (x0 + bw).toFixed(1) + '" y2="' + dimY.toFixed(1) + '" stroke="#94A3B8"/>' +
    '<line x1="' + x0.toFixed(1) + '" y1="' + (dimY - 5).toFixed(1) + '" x2="' + x0.toFixed(1) + '" y2="' + (dimY + 5).toFixed(1) + '" stroke="#94A3B8"/>' +
    '<line x1="' + (x0 + bw).toFixed(1) + '" y1="' + (dimY - 5).toFixed(1) + '" x2="' + (x0 + bw).toFixed(1) + '" y2="' + (dimY + 5).toFixed(1) + '" stroke="#94A3B8"/>' +
    '<text x="' + (x0 + bw / 2).toFixed(1) + '" y="' + (dimY + 19).toFixed(1) + '" text-anchor="middle" style="font-size:12.5px;font-weight:800;fill:#334155">' + bbFmtNum(c.W / um) + ' ' + u + '</text>';
  const dimX = x0 - 44;
  const dimV = '<line x1="' + dimX.toFixed(1) + '" y1="' + y0.toFixed(1) + '" x2="' + dimX.toFixed(1) + '" y2="' + (y0 + bh).toFixed(1) + '" stroke="#94A3B8"/>' +
    '<line x1="' + (dimX - 5).toFixed(1) + '" y1="' + y0.toFixed(1) + '" x2="' + (dimX + 5).toFixed(1) + '" y2="' + y0.toFixed(1) + '" stroke="#94A3B8"/>' +
    '<line x1="' + (dimX - 5).toFixed(1) + '" y1="' + (y0 + bh).toFixed(1) + '" x2="' + (dimX + 5).toFixed(1) + '" y2="' + (y0 + bh).toFixed(1) + '" stroke="#94A3B8"/>' +
    '<text transform="translate(' + (dimX - 11).toFixed(1) + ',' + (y0 + bh / 2).toFixed(1) + ') rotate(-90)" text-anchor="middle" style="font-size:12.5px;font-weight:800;fill:#334155">' + bbFmtNum(c.H / um) + ' ' + u + '</text>';
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 ' + VBW + ' ' + VBH + '" width="' + VBW + '" height="' + VBH + '">' +
    '<rect x="' + x0.toFixed(1) + '" y="' + y0.toFixed(1) + '" width="' + bw.toFixed(1) + '" height="' + bh.toFixed(1) + '" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>' +
    (st.img ? '<clipPath id="bbLbClip"><rect x="' + x0.toFixed(1) + '" y="' + y0.toFixed(1) + '" width="' + bw.toFixed(1) + '" height="' + bh.toFixed(1) + '" rx="4"/></clipPath>' +
      '<image href="' + st.img + '" x="' + x0.toFixed(1) + '" y="' + y0.toFixed(1) + '" width="' + bw.toFixed(1) + '" height="' + bh.toFixed(1) + '" preserveAspectRatio="none" clip-path="url(#bbLbClip)"/>' : '') +
    '<rect x="' + (x0 + 7).toFixed(1) + '" y="' + (y0 + 7).toFixed(1) + '" width="' + Math.max(0, bw - 14).toFixed(1) + '" height="' + Math.max(0, bh - 14).toFixed(1) + '" rx="3" fill="none" stroke="#E2E8F0" stroke-dasharray="5 4"/>' +
    holes + lblTop + lblBottom + lblLeft + lblRight + dimH + dimV + '</svg>';
  function gapTxt(g) { return g != null ? '± ' + bbFmtNum(g / um) + ' ' + u : 'lubang tengah sisi'; }
  function tile(cls, label, value, sub, copyVal) {
    return '<div class="studio-result-card ' + cls + '" role="button" tabindex="0" onclick="copyText(\'' + copyVal + '\')">' +
      '<div class="studio-result-card-top"><span class="studio-result-label">' + label + '</span></div>' +
      '<div class="studio-result-value">' + value + '</div>' +
      '<div class="studio-result-sub">' + sub + '</div>' +
      '<div class="studio-result-bar"></div></div>';
  }
  const kel = 2 * (c.W + c.H) / um;
  const cards =
    tile('card-blue', 'Total Lubang', c.total + ' pcs', 'Atas ' + c.n.top + ' · Kanan ' + c.n.right + ' · Bawah ' + c.n.bottom + ' · Kiri ' + c.n.left, c.total + ' pcs') +
    tile('card-sky', 'Sisi Atas', c.n.top + ' lubang', 'Jarak antar lubang ' + gapTxt(c.gaps.top), gapTxt(c.gaps.top)) +
    tile('card-emerald', 'Sisi Kanan', c.n.right + ' lubang', 'Jarak antar lubang ' + gapTxt(c.gaps.right), gapTxt(c.gaps.right)) +
    tile('card-amber', 'Sisi Bawah', c.n.bottom + ' lubang', 'Jarak antar lubang ' + gapTxt(c.gaps.bottom), gapTxt(c.gaps.bottom)) +
    tile('card-rose', 'Sisi Kiri', c.n.left + ' lubang', 'Jarak antar lubang ' + gapTxt(c.gaps.left), gapTxt(c.gaps.left)) +
    tile('card-violet', 'Diameter Lubang', '± ' + bbFmtNum(dia) + ' mm', 'Otomatis proporsional', '± ' + bbFmtNum(dia) + ' mm') +
    tile('card-warning', 'Keliling Banner', bbFmtNum(kel) + ' ' + u, '2 × (' + bbFmtNum(c.W / um) + ' + ' + bbFmtNum(c.H / um) + ') ' + u, bbFmtNum(kel) + ' ' + u);
  rp.innerHTML =
    '<div class="bb-toolbar"><h2>Preview Lubang Banner</h2>' +
    (st.imgName ? '<span class="bb-fileinfo">' + bbEsc(st.imgName) + (st.imgW ? ' · ' + st.imgW + '×' + st.imgH + ' px' : '') + '</span>' : '') +
    '</div>' +
    '<div class="studio-result-cards bb-lubang-cards">' + cards + '</div>' +
    '<div class="bb-preview-card bb-preview-fit">' + svg + '</div>' +
    '<div class="bb-hint">Lubang biru gelap = lubang sudut (dihitung sekali). Mode "Jarak antar lubang": jumlah per sisi dihitung otomatis — spasi antar lubang tidak melebihi jarak input &amp; sudut selalu berlubang.</div>';
}

function lubangExportPng() {
  const svg = document.querySelector('#lubangRightPanel svg');
  if (!svg) return;
  const xml = new XMLSerializer().serializeToString(svg);
  const vb = (svg.getAttribute('viewBox') || '0 0 780 505').split(/\s+/);
  const W = Number(vb[2]) || 780, H = Number(vb[3]) || 505;
  const img = new Image();
  img.onload = function () {
    const cv = document.createElement('canvas');
    cv.width = W * 2; cv.height = H * 2;
    const ctx = cv.getContext('2d');
    ctx.fillStyle = '#F6F8FB';
    ctx.fillRect(0, 0, cv.width, cv.height);
    ctx.drawImage(img, 0, 0, cv.width, cv.height);
    bbDownload(bbCanvasBlob(cv, 'image/png'), 'preview-lubang-' + bbFmtNum(lubangState.w) + 'x' + bbFmtNum(lubangState.h) + lubangState.unit + '.png');
  };
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(xml);
}

// ============================================================
// [NEW v4.8] CONVERT FILE — kartu "Upload Image"/"Upload PDF"
// di kiri strip upload; unduh pindah ke baris tombol kiri
// (Clear | Build PDF | Download / Clear | Build ZIP |
// Download); ZIP pdf-to-images TANPA folder & TIDAK otomatis
// diunduh. PDF COMPRESSOR -> judul "PDF Flatten" + kursor
// disabled tidak lagi "wait".
// ============================================================
function renderImg2Pdf(skipLeftPanel) {
  const lp = document.getElementById('img2pdfLeftPanel');
  const rp = document.getElementById('img2pdfRightPanel');
  const st = img2pdfState;
  if (!lp || !rp) return;
  if (!skipLeftPanel) {
    lp.innerHTML = '';
    const seg = document.createElement('div');
    seg.className = 'bb-seg';
    seg.innerHTML = '<button type="button" data-m="img" class="' + (st.mode === 'img' ? 'active' : '') + '">Images to PDF</button>' +
      '<button type="button" data-m="pdf" class="' + (st.mode === 'pdf' ? 'active' : '') + '">PDF to Images</button>';
    seg.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
      if (st.mode !== b.dataset.m) { st.mode = b.dataset.m; renderImg2Pdf(false); }
    }));
    lp.appendChild(seg);
    if (st.mode === 'img') {
      createSectionTitle('img2pdfLeftPanel', 'Pengaturan PDF');
      createDropdown('img2pdfLeftPanel', 'Ukuran Kertas', bbPaperOptions(), st.pageSize, v => { st.pageSize = v; }, ICONS.sheets);
      createDropdown('img2pdfLeftPanel', 'Posisi', BB_ORIENT_OPTS, st.orient, v => { st.orient = v; }, ICONS.landscape);
      createDropdown('img2pdfLeftPanel', 'Handling', [
        { value: 'fit', label: 'Fit Proporsi' },
        { value: 'fill', label: 'Fill Proporsi' },
        { value: 'stretch', label: 'Stretch To Fill' }
      ], st.handling, v => { st.handling = v; }, ICONS.paper);
      createDropdown('img2pdfLeftPanel', 'Margin', BB_MARGIN_OPTS, st.margin, v => { st.margin = v; }, ICONS.margin);
      createDropdown('img2pdfLeftPanel', 'Resolusi', BB_DPI_OPTS, st.dpi, v => { st.dpi = v; }, ICONS.printPaper);
      const row = document.createElement('div');
      row.className = 'bb-btnrow';
      row.innerHTML = '<button class="bb-btn bb-btn-danger" id="bbI2pClearBtn">Clear</button>' +
        '<button class="bb-btn" id="bbI2pBuildBtn">Build PDF</button>' +
        '<button class="bb-btn" id="bbI2pDlBtn" disabled>Download</button>';
      lp.appendChild(row);
      row.querySelector('#bbI2pClearBtn').addEventListener('click', () => {
        img2pdfItems.forEach(it => { try { URL.revokeObjectURL(it.url); } catch (e) {} });
        img2pdfItems = [];
        img2pdfState.result = null;
        renderImg2Pdf(true);
      });
      row.querySelector('#bbI2pBuildBtn').addEventListener('click', img2pdfGenerate);
      row.querySelector('#bbI2pDlBtn').addEventListener('click', () => {
        const r = img2pdfState.result;
        if (r) bbDownload(r.blob, 'images-to-pdf.pdf');
      });
      const dl0 = row.querySelector('#bbI2pDlBtn');
      if (dl0) dl0.disabled = !img2pdfState.result;

    } else {
      createSectionTitle('img2pdfLeftPanel', 'Pengaturan Gambar Output');
      createDropdown('img2pdfLeftPanel', 'Posisi', BB_ORIENT_OPTS, convPdfState.orient, v => { convPdfState.orient = v; }, ICONS.landscape);
      createDropdown('img2pdfLeftPanel', 'Resolusi', BB_DPI_OPTS, convPdfState.dpi, v => { convPdfState.dpi = v; }, ICONS.printPaper);
      const row = document.createElement('div');
      row.className = 'bb-btnrow';
      row.innerHTML = '<button class="bb-btn bb-btn-danger" id="bbCvClearBtn2">Clear</button>' +
        '<button class="bb-btn" id="bbConvZipBtn">Build Images</button>' +
        '<button class="bb-btn" id="bbCvDlBtn" disabled>Download</button>';
      lp.appendChild(row);
      row.querySelector('#bbCvClearBtn2').addEventListener('click', bbConvClearPdf);
      row.querySelector('#bbConvZipBtn').addEventListener('click', convPdfBuild);
      row.querySelector('#bbCvDlBtn').addEventListener('click', () => {
        if (convPdfState.result) bbDownload(convPdfState.result.blob, 'pdf-to-images.zip');
      });
      const zd0 = row.querySelector('#bbConvZipBtn');
      if (zd0) zd0.disabled = !convPdfState.buf || convPdfState.busy;
      const cd0 = row.querySelector('#bbCvDlBtn');
      if (cd0) cd0.disabled = !convPdfState.result;

    }
  } else {
    const zb = document.getElementById('bbConvZipBtn');
    if (zb && st.mode === 'pdf') zb.disabled = !convPdfState.buf || convPdfState.busy;
    const cd = document.getElementById('bbCvDlBtn');
    if (cd && st.mode === 'pdf') cd.disabled = !convPdfState.result;
    const dl = document.getElementById('bbI2pDlBtn');
    if (dl && st.mode === 'img') dl.disabled = !img2pdfState.result;
  }
  if (st.mode === 'img') {
    rp.innerHTML = bbImg2PdfRightHtml();
    bbBindImg2PdfRight(rp);
    bbI2pDrawPreview();
  } else {
    rp.innerHTML = bbConvPdfRightHtml();
    bbBindConvPdfRight(rp);
  }
  if (!window._bbPasteBound) {
    window._bbPasteBound = true;
    document.addEventListener('paste', bbImg2PdfPaste);
  }
}

function bbImg2PdfRightHtml() {
  const addCard = '<div class="bb-upl-add" id="bbUpAdd" title="Tambah gambar (klik / seret / tempel Ctrl+V)">' +
    '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/><line x1="17" y1="3" x2="17" y2="7"/><line x1="15" y1="5" x2="19" y2="5"/></svg>' +
    '<span>Upload Image</span></div>';
  let thumbs = '';
  img2pdfItems.forEach((it, i) => {
    thumbs += '<div class="bb-upl" draggable="true" data-idx="' + i + '">' +
      '<img src="' + it.url + '" alt="">' +
      '<button class="bb-upl-x" data-x="' + i + '" title="Hapus gambar ini">×</button>' +
      '<span class="bb-upl-idx">' + (i + 1) + '</span></div>';
  });
  const drop = img2pdfItems.length ? '' :
    '<div class="bb-drop" id="bbDrop"><b>Klik / seret gambar ke sini</b><small>JPG, PNG, WebP — bisa banyak sekaligus, atau tempel Ctrl+V</small></div>';
  let res = '';
  if (img2pdfState.result) {
    const r = img2pdfState.result;
    res = '<div class="bb-preview-card"><div class="bb-toolbar"><h2>PDF Siap Diunduh</h2><span class="bb-fileinfo">' + r.pages + ' halaman · ' + bbFmtBytes(r.size) + '</span></div></div>';
  }
  return '<div class="bb-toolbar"><h2>Preview Upload</h2><span class="bb-fileinfo">' + img2pdfItems.length + ' gambar dipilih</span></div>' + drop +
    (thumbs ? '<div class="bb-upload-strip" id="bbUpStrip">' + addCard + thumbs + '</div>' : '') +
    '<div class="bb-toolbar" style="margin-top:18px"><h2>Card Preview</h2><span class="bb-fileinfo">' + bbI2pSettingLabel() + '</span></div>' +
    /* [NEW v2.3] Card Preview fit (tanpa scroll atas-bawah) + tombol panah < > */
    '<div class="bb-preview-card" style="padding:12px"><div class="bb-cv-nav-wrap"><canvas id="bbI2pCv" class="bb-cv-fit"></canvas>' +
      '<button class="bb-nav-arrow left" id="bbI2pPrev" title="Preview sebelumnya" aria-label="Preview sebelumnya">&#8249;</button>' +
      '<button class="bb-nav-arrow right" id="bbI2pNext" title="Preview berikutnya" aria-label="Preview berikutnya">&#8250;</button>' +
      '<span class="bb-cv-page" id="bbI2pPage" style="display:none"></span></div></div>' +
    '<div class="bb-status" id="bbI2pStatus"></div>' + res;
}

function bbBindImg2PdfRight(rp) {
  const addEl = rp.querySelector('#bbUpAdd');
  if (addEl) {
    addEl.addEventListener('click', bbPickImages);
    addEl.addEventListener('dragover', e => { e.preventDefault(); addEl.classList.add('drag'); });
    addEl.addEventListener('dragleave', () => addEl.classList.remove('drag'));
    addEl.addEventListener('drop', e => { e.preventDefault(); e.stopPropagation(); addEl.classList.remove('drag'); bbAddFiles(e.dataTransfer.files); });
  }
  const dropEl = rp.querySelector('#bbDrop');
  if (dropEl) {
    dropEl.addEventListener('click', bbPickImages);
    dropEl.addEventListener('dragover', e => { e.preventDefault(); dropEl.classList.add('drag'); });
    dropEl.addEventListener('dragleave', () => dropEl.classList.remove('drag'));
    dropEl.addEventListener('drop', e => { e.preventDefault(); e.stopPropagation(); dropEl.classList.remove('drag'); bbAddFiles(e.dataTransfer.files); });
  }
  const strip = rp.querySelector('#bbUpStrip');
  if (strip) {
    let dragIdx = -1;
    strip.querySelectorAll('.bb-upl-x').forEach(x => x.addEventListener('click', e => {
      e.stopPropagation();
      const i = Number(x.dataset.x);
      if (img2pdfItems[i]) { try { URL.revokeObjectURL(img2pdfItems[i].url); } catch (err) {} }
      img2pdfItems.splice(i, 1);
      img2pdfState.result = null;
      renderImg2Pdf(true);
    }));
    strip.querySelectorAll('.bb-upl').forEach(el => {
      el.addEventListener('dragstart', e => {
        dragIdx = Number(el.dataset.idx);
        el.classList.add('drag-target');
        try { e.dataTransfer.setData('text/plain', String(dragIdx)); } catch (err) {}
        e.dataTransfer.effectAllowed = 'move';
      });
      el.addEventListener('dragend', () => el.classList.remove('drag-target'));
      el.addEventListener('dragover', e => { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; });
      el.addEventListener('drop', e => {
        e.preventDefault(); e.stopPropagation();
        const to = Number(el.dataset.idx);
        if (dragIdx < 0 || isNaN(to) || dragIdx === to) return;
        const mv = img2pdfItems.splice(dragIdx, 1)[0];
        img2pdfItems.splice(to, 0, mv);
        dragIdx = -1;
        renderImg2Pdf(true);
      });
    });
    strip.addEventListener('dragover', e => e.preventDefault());
    strip.addEventListener('drop', e => {
      e.preventDefault();
      if (dragIdx >= 0) {
        const mv = img2pdfItems.splice(dragIdx, 1)[0];
        img2pdfItems.push(mv);
        dragIdx = -1;
        renderImg2Pdf(true);
      }
    });
  }
  /* [NEW v2.3] panah < > — lihat preview gambar sebelah kiri/kanan */
  const prevB = rp.querySelector('#bbI2pPrev');
  const nextB = rp.querySelector('#bbI2pNext');
  if (prevB) prevB.addEventListener('click', () => {
    if (img2pdfState.previewIdx > 0) { img2pdfState.previewIdx--; bbI2pDrawPreview(); }
  });
  if (nextB) nextB.addEventListener('click', () => {
    if (img2pdfState.previewIdx < img2pdfItems.length - 1) { img2pdfState.previewIdx++; bbI2pDrawPreview(); }
  });
}

function bbConvPdfRightHtml() {
  const st = convPdfState;
  const addCard = '<div class="bb-upl-add" id="bbCvAdd" title="Tambah / ganti file PDF">' +
    '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>' +
    '<span>Upload PDF</span></div>';
  if (!st.buf) {
    return '<div class="bb-toolbar"><h2>Preview Upload</h2></div>' +
      '<div class="bb-drop" id="bbCvDrop"><b>Klik / seret file PDF ke sini</b><small>Halaman PDF diekstrak jadi JPG sesuai pengaturan</small></div>' +
      '<div class="bb-status" id="bbCvStatus"></div>';
  }
  let res = '';
  if (st.result) {
    res = '<div class="bb-preview-card"><div class="bb-toolbar"><h2>ZIP Siap Diunduh</h2><span class="bb-fileinfo">' + st.result.pages + ' JPG · ' + bbFmtBytes(st.result.size) + ' · tanpa folder</span></div></div>';
  }
  const pdfInner = st.preview ? '<img src="' + st.preview + '" alt="">' : '<div class="bb-upl-loading">PDF</div>';
  /* [FIX v2.2] tombol × untuk hapus/ganti file PDF pada kartu upload */
  const pdfCard = '<div class="bb-upl">' + pdfInner + '<span class="bb-upl-pdf-tag">PDF</span>' +
    '<button class="bb-upl-x" id="bbCvPdfX" title="Hapus file PDF">×</button></div>';
  return '<div class="bb-toolbar"><h2>Preview Upload</h2><span class="bb-fileinfo">' + bbEsc(st.name) + ' · ' + bbFmtBytes(st.origSize) + (st.pages ? ' · ' + st.pages + ' halaman' : '') + '</span></div>' +
    '<div class="bb-upload-strip" id="bbCvStrip">' + addCard + pdfCard + '</div>' +
    '<div class="bb-toolbar" style="margin-top:18px"><h2>Card Preview</h2></div>' +
    (st.preview ? '<div class="bb-pdf-prev"><img src="' + st.preview + '" alt="Preview halaman 1"></div>' : '<div class="bb-status">Menyiapkan preview halaman pertama...</div>') +
    '<div class="bb-prog" id="bbCvProg" style="display:none"><i id="bbCvProgBar"></i></div>' +
    '<div class="bb-status" id="bbCvStatus"></div>' + res;
}

function bbBindConvPdfRight(rp) {
  const addEl = rp.querySelector('#bbCvAdd');
  if (addEl) {
    addEl.addEventListener('click', bbConvPickPdf);
    addEl.addEventListener('dragover', e => { e.preventDefault(); addEl.classList.add('drag'); });
    addEl.addEventListener('dragleave', () => addEl.classList.remove('drag'));
    addEl.addEventListener('drop', e => { e.preventDefault(); e.stopPropagation(); addEl.classList.remove('drag'); bbConvFiles(e.dataTransfer.files); });
  }
  const dropEl = rp.querySelector('#bbCvDrop');
  if (dropEl) {
    dropEl.addEventListener('click', bbConvPickPdf);
    dropEl.addEventListener('dragover', e => { e.preventDefault(); dropEl.classList.add('drag'); });
    dropEl.addEventListener('dragleave', () => dropEl.classList.remove('drag'));
    dropEl.addEventListener('drop', e => { e.preventDefault(); e.stopPropagation(); dropEl.classList.remove('drag'); bbConvFiles(e.dataTransfer.files); });
  }
  /* [FIX v2.2] tombol × pada kartu PDF — hapus file & kembali ke kotak unggah */
  const xEl = rp.querySelector('#bbCvPdfX');
  if (xEl) xEl.addEventListener('click', e => {
    e.stopPropagation();
    bbConvClearPdf();
    showToast('File PDF dihapus');
  });
}

/* PDF to Images: ZIP TANPA folder (JPG di root ZIP) dan TIDAK
   otomatis diunduh — unduh lewat tombol Download di panel kiri. */
async function convPdfBuild() {
  const st = convPdfState;
  if (!st.buf || st.busy) return;
  const myBuf = st.buf; /* [FIX v4.9] referensi awal untuk deteksi Clear di tengah proses */
  const btn = document.getElementById('bbConvZipBtn');
  if (btn) { btn.disabled = true; btn.textContent = 'Memproses...'; }
  st.busy = true;
  const setStatus = m => { const el = document.getElementById('bbCvStatus'); if (el) el.textContent = m || ''; };
  const prog = p => {
    const w = document.getElementById('bbCvProg'), b = document.getElementById('bbCvProgBar');
    if (w) w.style.display = 'block';
    if (b) b.style.width = Math.max(2, Math.min(100, p)) + '%';
  };
  try {
    await bbEnsurePdfJs();
    if (!st.buf || st.buf !== myBuf) throw bbAbortErr(); /* [FIX v4.9] file sudah di-clear saat mesin dimuat */
    setStatus('Membaca PDF...');
    const pdf = await pdfjsLib.getDocument({ data: new Uint8Array(st.buf.slice(0)) }).promise;
    st.pages = pdf.numPages;
    const dpi = st.dpi === 'max' ? 1200 : Number(st.dpi);
    const entries = [];
    for (let i = 1; i <= pdf.numPages; i++) {
      if (st.buf !== myBuf) throw bbAbortErr(); /* [FIX v4.9] berhenti jika sudah di-clear */
      setStatus('Mengonversi halaman ' + i + ' dari ' + pdf.numPages + '...');
      prog(i / pdf.numPages * 92);
      const page = await pdf.getPage(i);
      const vp1 = page.getViewport({ scale: 1 });
      const cv = document.createElement('canvas');
      if (st.orient === 'auto') {
        const k = bbClampPx(vp1.width / 72 * dpi, vp1.height / 72 * dpi);
        const vp = page.getViewport({ scale: dpi / 72 * k });
        cv.width = Math.max(1, Math.floor(vp.width));
        cv.height = Math.max(1, Math.floor(vp.height));
        await page.render({ canvasContext: cv.getContext('2d'), viewport: vp }).promise;
      } else {
        const wantP = st.orient === 'p';
        const cw = wantP ? Math.min(vp1.width, vp1.height) : Math.max(vp1.width, vp1.height);
        const ch = wantP ? Math.max(vp1.width, vp1.height) : Math.min(vp1.width, vp1.height);
        const k = bbClampPx(cw / 72 * dpi, ch / 72 * dpi);
        cv.width = Math.max(1, Math.round(cw / 72 * dpi * k));
        cv.height = Math.max(1, Math.round(ch / 72 * dpi * k));
        const ctx = cv.getContext('2d');
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, cv.width, cv.height);
        const fit = Math.min(cv.width / vp1.width, cv.height / vp1.height);
        const vp = page.getViewport({ scale: fit });
        const tmp = document.createElement('canvas');
        tmp.width = Math.max(1, Math.floor(vp.width));
        tmp.height = Math.max(1, Math.floor(vp.height));
        await page.render({ canvasContext: tmp.getContext('2d'), viewport: vp }).promise;
        ctx.drawImage(tmp, (cv.width - vp.width) / 2, (cv.height - vp.height) / 2);
      }
      const blob = bbCanvasBlob(cv, 'image/jpeg', 0.92);
      entries.push({ name: 'page-' + String(i).padStart(3, '0') + '.jpg', data: new Uint8Array(await blob.arrayBuffer()) });
      page.cleanup();
    }
    if (st.buf !== myBuf) throw bbAbortErr(); /* [FIX v4.9] jangan set hasil jika sudah di-clear */
    const zip = bbZipStore(entries);
    st.result = { blob: zip, size: zip.size, pages: entries.length };
    prog(100);
    showToast('ZIP dibuat: ' + entries.length + ' JPG (tanpa folder) — klik Download untuk mengunduh');
  } catch (e) {
    console.error('BlueBee pdf2img:', e);
    setStatus('');
    showToast(e && e.abort ? e.message : ('Gagal membuat ZIP: ' + (e && e.message ? e.message : 'kesalahan tidak diketahui')), 'warning');
  } finally {
    st.busy = false;
    renderImg2Pdf(true);
    /* [FIX v4.9] pulihkan label & status disabled tombol proses (dulu mentok "Memproses...") */
    const b0 = document.getElementById('bbConvZipBtn');
    if (b0) { b0.textContent = 'Build Images'; b0.disabled = !convPdfState.buf || convPdfState.busy; }
  }
}

/* PDF Flatten (ex PDF Compressor): judul baru + tombol
   Compress/Download langsung di-disable sesuai state saat panel
   kiri dirender ulang (kursor disabled kini not-allowed). */
function renderPdfComp(skipLeftPanel) {
  const lp = document.getElementById('pdfcompLeftPanel');
  const rp = document.getElementById('pdfcompRightPanel');
  const st = pdfcompState;
  if (!lp || !rp) return;
  if (!skipLeftPanel) {
    lp.innerHTML = '';
    createSectionTitle('pdfcompLeftPanel', 'Pengaturan Flatten');
    const gq = document.createElement('div');
    gq.className = 'studio-form-group';
    gq.innerHTML = '<label class="studio-form-label">Kualitas JPEG (<span id="bbPcQVal">' + st.quality + '</span>%)</label><input type="range" min="40" max="100" step="5" value="' + st.quality + '" class="bb-range" id="bbPcQ">';
    lp.appendChild(gq);
    gq.querySelector('#bbPcQ').addEventListener('input', e => {
      st.quality = Number(e.target.value);
      const qv = document.getElementById('bbPcQVal');
      if (qv) qv.textContent = e.target.value;
    });
    createDropdown('pdfcompLeftPanel', 'Resolusi', BB_DPI_OPTS, String(st.dpi), v => { st.dpi = v; }, ICONS.printPaper);
    const row = document.createElement('div');
    row.className = 'bb-btnrow';
    row.innerHTML = '<button class="bb-btn bb-btn-danger" id="bbPcClearB2">Clear</button>' +
      '<button class="bb-btn" id="bbPcBtn">Flatten</button>' +
      '<button class="bb-btn" id="bbPcDlBtn">Download</button>';
    lp.appendChild(row);
    row.querySelector('#bbPcClearB2').addEventListener('click', () => {
      /* [FIX v4.9] busy TIDAK direset di sini — dibiarkan ditutup oleh finally proses
         yang sedang berjalan supaya tidak terjadi double-run; hasil lama dibuang. */
      Object.assign(st, { buf: null, name: '', origSize: 0, pages: 0, result: null, preview: null });
      renderPdfComp(true);
    });
    row.querySelector('#bbPcBtn').addEventListener('click', pdfcompStart);
    row.querySelector('#bbPcDlBtn').addEventListener('click', () => { if (st.result) bbDownload(st.result.blob, bbPcName()); });
    const bc0 = row.querySelector('#bbPcBtn');
    if (bc0) bc0.disabled = !st.buf || st.busy;
    const bd0 = row.querySelector('#bbPcDlBtn');
    if (bd0) bd0.disabled = !st.result;

  } else {
    const bc = document.getElementById('bbPcBtn');
    if (bc) bc.disabled = !st.buf || st.busy;
    const bd = document.getElementById('bbPcDlBtn');
    if (bd) bd.disabled = !st.result;
  }
  let body = '';
  if (!st.buf) {
    body = '<div class="bb-drop" id="bbPcDrop"><b>Klik / seret file PDF ke sini</b><small>Satu file PDF — diproses lokal di browser</small></div>';
  } else {
    body = '<div class="bb-preview-card"><div class="bb-toolbar"><h2 style="word-break:break-all">' + bbEsc(st.name) + '</h2><span class="bb-fileinfo">' + bbFmtBytes(st.origSize) + (st.pages ? ' · ' + st.pages + ' halaman' : '') + '</span></div>' +
      (st.preview ? '<div class="bb-pdf-prev"><img src="' + st.preview + '" alt="Preview halaman 1"></div>' : '') +
      '<div class="bb-prog" id="bbPcProg" style="display:none"><i id="bbPcProgBar"></i></div>' +
      '<div class="bb-status" id="bbPcStatus"></div>' +
      (st.result ? _pcResultHtml(st) : '') +
      '</div>' +
      '<div class="bb-hint">Hasil belum cukup kecil? Turunkan "Kualitas JPEG" atau "Resolusi" lalu Flatten ulang.</div>';
  }
  rp.innerHTML = '<div class="bb-toolbar"><h2>PDF Flatten</h2></div>' + body;
  const dropEl = rp.querySelector('#bbPcDrop');
  if (dropEl) {
    dropEl.addEventListener('click', bbPcPick);
    dropEl.addEventListener('dragover', e => { e.preventDefault(); dropEl.classList.add('drag'); });
    dropEl.addEventListener('dragleave', () => dropEl.classList.remove('drag'));
    dropEl.addEventListener('drop', e => { e.preventDefault(); e.stopPropagation(); dropEl.classList.remove('drag'); bbPcFiles(e.dataTransfer.files); });
  }
}

// ============================================================
// [FIX v2.2] QR GENERATOR (Bulk) — section "File Sumber" (Pilih
// File/Clear), preview file "Preview QR / Tambah File" di panel
// kanan, dan tombol "Download Csv" di baris Aksi dihapus.
// Baris Aksi tinggal Create & Clear. Unduhan PNG/SVG/PDF/
// Metadata CSV kini memakai daftar nomor hasil Create
// (qrgenBulk.items) — memperbaiki error
// "Belum ada file yang berhasil dibaca".
// ============================================================
/* [NEW v2.4] showAll: false = kartu Preview QR tampil 10 ke kanan x 3 ke bawah (maks 30);
   klik tombol More -> true = tampilkan semua kartu QR */
let qrgenBulk = { start: 1, end: 10, prefix: '', suffix: '', pad: true, items: null, showAll: false };

/* [FIX v2.0.1 / BUG B1] Cap keras jumlah nomor Bulk.
   Sebelumnya loop membangun array penuh (input max = 1 miliar) -> 1 langkah ketik
   salah (End 9 digit) membuat tab QR beku total / OOM. Semua pemakai di hilir
   (chips 200, Download slice 500, Create slice 500) memang tidak pernah pakai
   lebih dari 500, jadi cap 501 aman: Create tetap bisa mendeteksi ">500"
   untuk menampilkan peringatan "dipakai 500 nomor pertama". */
const BB_BULK_CAP = 501;
function bbBulkStrings() {
  const b = qrgenBulk;
  const s = Math.max(0, Math.floor(Number(b.start) || 0));
  const e = Math.max(0, Math.floor(Number(b.end) || 0));
  const out = [];
  if (e < s) return out;
  const digits = String(e).length;
  const eCapped = Math.min(e, s + BB_BULK_CAP - 1);
  for (let i = s; i <= eCapped; i++) {
    const num = b.pad ? String(i).padStart(digits, '0') : String(i);
    out.push((b.prefix || '') + num + (b.suffix || ''));
  }
  return out;
}

function bbBulkReset() {
  Object.assign(qrgenBulk, { start: 1, end: 10, prefix: '', suffix: '', pad: true, items: null, showAll: false }); /* [NEW v2.4] showAll ikut direset */
}

function bbQrColorRow(st, onChange) {
  const gc = document.createElement('div');
  gc.className = 'studio-form-group';
  gc.innerHTML = '<label class="studio-form-label">Warna</label><div class="bb-color-grid">' +
    '<div class="bb-color-field"><span class="bb-color-lbl">QR</span>' +
    '<input type="color" data-k="fg" value="' + st.fg + '" title="Pilih warna QR">' +
    '<input type="text" class="bb-hex" data-k="fg" value="' + st.fg + '" maxlength="7" spellcheck="false" title="Kode hex QR"></div>' +
    '<div class="bb-color-field"><span class="bb-color-lbl">Background</span>' +
    '<input type="color" data-k="bg" value="' + st.bg + '" title="Pilih warna background">' +
    '<input type="text" class="bb-hex" data-k="bg" value="' + st.bg + '" maxlength="7" spellcheck="false" title="Kode hex background"></div>' +
    '</div>';
  gc.querySelectorAll('input[type="color"]').forEach(inp => inp.addEventListener('input', e => {
    st[e.target.dataset.k] = e.target.value;
    const hex = gc.querySelector('.bb-hex[data-k="' + e.target.dataset.k + '"]');
    if (hex) hex.value = e.target.value;
    onChange();
  }));
  gc.querySelectorAll('.bb-hex').forEach(inp => inp.addEventListener('change', () => {
    let v = inp.value.trim();
    if (v && v.charAt(0) !== '#') v = '#' + v;
    if (/^#[0-9a-fA-F]{6}$/.test(v)) {
      v = v.toUpperCase();
      st[inp.dataset.k] = v;
      inp.value = v;
      const cp = gc.querySelector('input[type="color"][data-k="' + inp.dataset.k + '"]');
      if (cp) cp.value = v;
      onChange();
    } else {
      inp.value = st[inp.dataset.k];
      showToast('Kode hex tidak valid — contoh: #2563EB', 'warning');
    }
  }));
  return gc;
}

function bbBulkRightHtml() {
  const list = bbBulkStrings();
  /* [NEW v2.3] chip dipangkas dinamis maks 3 baris oleh bbCapNumChips() — lebar chip mengikuti teks nomor */
  const chips = list.slice(0, 200).map(s => '<span class="bb-num-chip">' + bbEsc(s) + '</span>').join('');
  /* [FIX v2.2] preview file (eks Multiple) dihapus — panel kanan Bulk
     hanya menampilkan Preview Number + QR Preview (nomor). */
  let qrPart = '';
  if (qrgenBulk.items && qrgenBulk.items.length) {
    /* [NEW v2.4] judul "QR Preview" -> "Preview QR"; grid 10 ke kanan x 3 ke bawah (maks 30 kartu);
       label kartu tanpa nomor urut ("1. 01" -> "01"); sisanya tampil setelah klik tombol More */
    const MAX_SEEN = 30;
    const total = qrgenBulk.items.length;
    const shown = (qrgenBulk.showAll || total <= MAX_SEEN) ? total : MAX_SEEN;
    let cells = '';
    qrgenBulk.items.slice(0, shown).forEach((s, i) => {
      cells += '<div class="bb-qr-cell" data-bi="' + i + '"><canvas width="10" height="10"></canvas><small>' + bbEsc(s) + '</small></div>';
    });
    qrPart = '<div class="bb-toolbar" style="margin-top:18px"><h2>Preview QR</h2><span class="bb-fileinfo">' + bbFmtNum(total) + ' QR dibuat' + (shown < total ? ' · ' + bbFmtNum(shown) + ' pertama ditampilkan' : '') + '</span></div>' +
      '<div class="bb-qr-grid bb-qr-grid-10">' + cells + '</div>' +
      (total > MAX_SEEN ? '<div class="bb-more-wrap"><button type="button" class="bb-btn bb-btn-more" id="bbBulkMore">' + (qrgenBulk.showAll ? 'Less' : 'More') + '</button></div>' : '');
  }
  /* [FIX v2.0.1 / BUG B1] Tampilkan jumlah nomor rentang ASLI di header bila
     preview dipotong oleh cap (maks 501) supaya user tahu Create/Download hanya
     memakai 500 nomor pertama. */
  const bbBulkStart = Math.max(0, Math.floor(Number(qrgenBulk.start) || 0));
  const bbBulkEnd = Math.max(0, Math.floor(Number(qrgenBulk.end) || 0));
  const bbBulkRealTotal = (bbBulkEnd < bbBulkStart) ? 0 : (bbBulkEnd - bbBulkStart + 1);
  const bbBulkInfo = (bbBulkRealTotal > list.length)
    ? ' · rentang asli ' + bbFmtNum(bbBulkRealTotal) + ' — dipakai 500 pertama'
    : '';
  return '<div class="bb-toolbar"><h2>Preview Number</h2><span class="bb-fileinfo">' + bbFmtNum(list.length) + ' nomor' + bbBulkInfo + '</span></div>' +
    (list.length ? '<div class="bb-num-chips" id="bbNumChips" data-total="' + list.length + '">' + chips + '</div>' : '<div class="bb-status">Isi Start / End di panel kiri untuk melihat preview nomor.</div>') +
    qrPart;
}

function bbBulkBindRight(rp) {
  rp.querySelectorAll('.bb-qr-cell[data-bi]').forEach(cell => {
    const s = qrgenBulk.items[Number(cell.dataset.bi)];
    const cv = cell.querySelector('canvas');
    if (!s || !cv) return;
    try {
      const m = bbQrMake(s, qrgenState.level);
      bbQrDrawOn(cv, m.qr, m.count, { size: 240, quiet: qrgenState.quiet, fg: qrgenState.fg, bg: qrgenState.bg, shape: qrgenState.shape });
    } catch (e) { cell.style.display = 'none'; }
  });
  /* [NEW v2.4] tombol More: tampilkan semua kartu Preview QR (klik lagi = Less, lipat ke 30) */
  const moreBtn = rp.querySelector('#bbBulkMore');
  if (moreBtn) moreBtn.addEventListener('click', () => {
    qrgenBulk.showAll = !qrgenBulk.showAll;
    renderQrGen(true);
  });
  bbCapNumChips(); /* [NEW v2.3] batasi Preview Number maks 3 baris */
}

/* [NEW v2.3, v2.4] Pangkas chip Preview Number agar tinggal maks 3 baris ke bawah;
   sisanya diringkas jadi "+N Lagi". Lebar tiap chip mengikuti panjang
   teks nomornya (wrap alami ke kanan, seperti contoh 01..11 lalu 12, 13, ...). */
function bbCapNumChips() {
  const box = document.getElementById('bbNumChips');
  if (!box) return;
  const total = Number(box.dataset.total) || 0;
  const chips = Array.prototype.slice.call(box.querySelectorAll('.bb-num-chip'));
  if (!chips.length) return;
  if (!box.offsetHeight) { /* panel belum terlihat — coba lagi di frame berikutnya */
    if (!box._capRetried) { box._capRetried = true; requestAnimationFrame(() => bbCapNumChips()); }
    return;
  }
  const MAX_ROWS = 3, gap = 6;
  const rowH = (chips[0].offsetHeight || 24) + gap;
  const top0 = chips[0].offsetTop;
  let keep = chips.length;
  for (let i = 1; i < chips.length; i++) {
    const row = Math.round((chips[i].offsetTop - top0) / rowH);
    if (row >= MAX_ROWS) { keep = i; break; }
  }
  for (let i = keep; i < chips.length; i++) chips[i].remove();
  let more = box.querySelector('.bb-num-more');
  const hidden = total - keep;
  if (hidden > 0) {
    if (!more) { more = document.createElement('span'); more.className = 'bb-num-more'; box.appendChild(more); }
    more.textContent = '+' + bbFmtNum(hidden) + ' Lagi'; /* [v2.4] teks ringkas sesuai contoh: +30 Lagi */
  } else if (more) {
    more.remove();
  }
}

function renderQrGen(skipLeftPanel) {
  const lp = document.getElementById('qrgenLeftPanel');
  const rp = document.getElementById('qrgenRightPanel');
  const st = qrgenState;
  if (!lp || !rp) return;
  /* [FIX v4.9] mode 'multiple' dihapus — normalisasi state lama ke 'single' */
  if (st.mode !== 'single' && st.mode !== 'bulk') st.mode = 'single';
  const sizeOpts = [{ value: '200', label: '200 px' }, { value: '400', label: '400 px' }, { value: '600', label: '600 px' }, { value: '800', label: '800 px' }, { value: '1000', label: '1.000 px' }];
  const lvlOpts = [{ value: 'L', label: 'L — 7%' }, { value: 'M', label: 'M — 15%' }, { value: 'Q', label: 'Q — 25%' }, { value: 'H', label: 'H — 30%' }];
  if (!skipLeftPanel) {
    lp.innerHTML = '';
    const seg = document.createElement('div');
    seg.className = 'bb-seg';
    /* [FIX v4.9] hanya Single & Bulk */
    seg.innerHTML = '<button type="button" data-m="single" class="' + (st.mode === 'single' ? 'active' : '') + '">Single</button>' +
      '<button type="button" data-m="bulk" class="' + (st.mode === 'bulk' ? 'active' : '') + '">Bulk</button>';
    seg.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
      if (st.mode !== b.dataset.m) { st.mode = b.dataset.m; renderQrGen(false); }
    }));
    lp.appendChild(seg);
    if (st.mode === 'single') {
      createSectionTitle('qrgenLeftPanel', 'Konten QR');
      const g = document.createElement('div');
      g.className = 'studio-form-group';
      g.innerHTML = '<label class="studio-form-label" for="bbQrText">Text Or URL</label>' +
        '<textarea id="bbQrText" class="bb-textarea" placeholder="Contoh: https://tokoanda.com atau teks bebas">' + bbEsc(st.text) + '</textarea>';
      lp.appendChild(g);
      const ta = g.querySelector('#bbQrText');
      let deb = null;
      ta.addEventListener('input', () => {
        st.text = ta.value;
        clearTimeout(deb);
        deb = setTimeout(drawQrCanvas, 250);
      });
      createSectionTitle('qrgenLeftPanel', 'Pengaturan');
      createDropdown('qrgenLeftPanel', 'Ukuran', sizeOpts, String(st.size), v => { st.size = Number(v); }, ICONS.size);
      createNumberInput('qrgenLeftPanel', 'Padding', st.quiet, v => { st.quiet = v; }, 1, ICONS.margin, 10, 1);
      createDropdown('qrgenLeftPanel', 'Koreksi Error', lvlOpts, st.level, v => { st.level = v; }, ICONS.bleed);
      lp.appendChild(bbQrColorRow(st, () => drawQrCanvas()));
      const row = document.createElement('div');
      row.className = 'bb-btnrow';
      row.innerHTML = '<button class="bb-btn" id="bbQrDl">PNG</button>' +
        '<button class="bb-btn" id="bbQrSvgDl">SVG</button>' +
        '<button class="bb-btn" id="bbQrCopy">Copy</button>';
      lp.appendChild(row);
      row.querySelector('#bbQrDl').addEventListener('click', bbQrDownload);
      row.querySelector('#bbQrSvgDl').addEventListener('click', bbQrDownloadSvg);
      row.querySelector('#bbQrCopy').addEventListener('click', bbQrCopyImage);
    } else {
      createSectionTitle('qrgenLeftPanel', 'Nomor');
      createNumberInput('qrgenLeftPanel', 'Start', qrgenBulk.start, v => { qrgenBulk.start = v; renderQrGen(true); }, 0, ICONS.pcs, 1000000000, 1);
      createNumberInput('qrgenLeftPanel', 'End', qrgenBulk.end, v => { qrgenBulk.end = v; renderQrGen(true); }, 0, ICONS.pcs, 1000000000, 1);
      const gp = document.createElement('div');
      gp.className = 'studio-form-group';
      gp.innerHTML = '<label class="studio-form-label" for="bbBulkPrefix">Prefix</label>' +
        '<input id="bbBulkPrefix" type="text" class="studio-number-input" style="height:42px;padding:0 12px" value="' + bbEsc(qrgenBulk.prefix) + '" placeholder="Contoh: SKU-">';
      gp.querySelector('#bbBulkPrefix').addEventListener('change', e => { qrgenBulk.prefix = e.target.value; renderQrGen(true); });
      lp.appendChild(gp);
      const gs = document.createElement('div');
      gs.className = 'studio-form-group';
      gs.innerHTML = '<label class="studio-form-label" for="bbBulkSuffix">Suffix</label>' +
        '<input id="bbBulkSuffix" type="text" class="studio-number-input" style="height:42px;padding:0 12px" value="' + bbEsc(qrgenBulk.suffix) + '" placeholder="Contoh: -A">';
      gs.querySelector('#bbBulkSuffix').addEventListener('change', e => { qrgenBulk.suffix = e.target.value; renderQrGen(true); });
      lp.appendChild(gs);
      createToggle('qrgenLeftPanel', 'Pad with zeros (On/Off)', qrgenBulk.pad, v => { qrgenBulk.pad = v; renderQrGen(true); }, ICONS.margin);
      /* ---- [FIX v2.2] section "File Sumber" (Pilih File/Clear) dihapus dari Bulk ---- */
      /* ---- [FIX v4.9] Pengaturan — dipindah dari mode Multiple ---- */
      createSectionTitle('qrgenLeftPanel', 'Pengaturan');
      createDropdown('qrgenLeftPanel', 'Ukuran', sizeOpts, String(st.size), v => { st.size = Number(v); renderQrGen(true); }, ICONS.size);
      createNumberInput('qrgenLeftPanel', 'Padding', st.quiet, v => { st.quiet = v; }, 1, ICONS.margin, 10, 1);
      createDropdown('qrgenLeftPanel', 'Koreksi Error', lvlOpts, st.level, v => { st.level = v; qrgenMultiCacheClear(); renderQrGen(true); }, ICONS.bleed);
      lp.appendChild(bbQrColorRow(st, () => renderQrGen(true)));
      createSectionTitle('qrgenLeftPanel', 'Aksi');
      const row = document.createElement('div');
      row.className = 'bb-btnrow';
      /* [FIX v2.2] baris Aksi hanya Create & Clear (Download Csv dihapus) */
      row.innerHTML = '<button class="bb-btn" id="bbBulkCreate">Create</button>' +
        '<button class="bb-btn bb-btn-danger" id="bbBulkClear">Clear</button>';
      lp.appendChild(row);
      row.querySelector('#bbBulkCreate').addEventListener('click', () => {
        let list = bbBulkStrings();
        if (!list.length) { showToast('End harus lebih besar atau sama dengan Start', 'warning'); return; }
        if (list.length > 500) { showToast('Maksimal 500 QR sekali buat — dipakai 500 nomor pertama', 'warning'); list = list.slice(0, 500); }
        qrgenBulk.items = list;
        qrgenBulk.showAll = false; /* [NEW v2.4] Create baru -> lipat kembali ke 30 kartu pertama */
        renderQrGen(true);
        showToast(list.length + ' QR dibuat dari preview nomor');
      });
      row.querySelector('#bbBulkClear').addEventListener('click', () => { bbBulkReset(); renderQrGen(false); });
      /* ---- [FIX v2.2] Download — PNG/SVG/PDF/Metadata CSV memakai nomor Bulk ---- */
      createSectionTitle('qrgenLeftPanel', 'Download');
      /* [v2.9] Tombol "Metadata CSV" dihapus — Download tinggal PNG / SVG / PDF dalam satu baris */
      const r1 = document.createElement('div');
      r1.className = 'bb-btnrow';
      r1.innerHTML = '<button class="bb-btn" id="bbQmPng">PNG</button><button class="bb-btn" id="bbQmSvg">SVG</button><button class="bb-btn" id="bbQmPdf">PDF</button>';
      lp.appendChild(r1);
      r1.querySelector('#bbQmPng').addEventListener('click', () => bbQrMultiDownload('png'));
      r1.querySelector('#bbQmSvg').addEventListener('click', () => bbQrMultiDownload('svg'));
      r1.querySelector('#bbQmPdf').addEventListener('click', () => bbQrMultiDownload('pdf'));

    }
  }
  if (st.mode === 'single') {
    rp.innerHTML = '<div class="bb-toolbar"><h2>QR Generator</h2><span class="bb-fileinfo">' + (Number(st.size) || 400) + ' px</span></div>' +
      '<div class="bb-preview-card"><div class="bb-qr-wrap"><div class="bb-qr-frame"><canvas id="bbQrCanvas" width="10" height="10"></canvas></div>' +
      '<div class="bb-status" id="bbQrErr"></div></div></div>' +
      '<div class="bb-hint">Gunakan PNG/SVG untuk mencetak QR pada label, banner, atau materi promosi. Warna QR &amp; background bisa diisi kode hex.</div>';
    drawQrCanvas();
  } else {
    rp.innerHTML = bbBulkRightHtml();
    bbBulkBindRight(rp);
  }
}

// ============================================================
// [NEW v4.8] PREVIEW LUBANG — Ukuran Banner memakai tombol
// satuan dashed gaya Paper Cut (MM -> CM -> M, nilai Lebar &
// Tinggi dikonversi otomatis) TANPA dropdown.
// ============================================================
function bbLubangDimRow(lp) {
  const st = lubangState;
  const g = document.createElement('div');
  g.className = 'studio-form-group';
  const dim = document.createElement('div');
  dim.className = 'studio-custom-dim';
  function field(lblTxt, val, onch) {
    const f = document.createElement('div');
    f.className = 'studio-custom-dim-field';
    const id = 'lbDim_' + Math.random().toString(36).slice(2, 8);
    const l = document.createElement('label');
    l.className = 'studio-form-label-sm';
    l.htmlFor = id;
    l.textContent = lblTxt;
    const i = document.createElement('input');
    i.id = id;
    i.type = 'number';
    i.className = 'studio-number-input sm';
    i.value = val;
    i.min = 0.1;
    i.step = 'any';
    i.addEventListener('change', () => {
      let v = Number(i.value);
      if (!(v > 0)) { v = 1; i.value = v; showToast('Ukuran minimal 1', 'warning'); }
      onch(v);
    });
    f.appendChild(l);
    f.appendChild(i);
    return f;
  }
  dim.appendChild(field('Lebar', st.w, v => { st.w = v; renderLubangPreview(); }));
  const sep = document.createElement('span');
  sep.className = 'studio-dim-separator';
  sep.textContent = '×';
  dim.appendChild(sep);
  dim.appendChild(field('Tinggi', st.h, v => { st.h = v; renderLubangPreview(); }));
  const unit = document.createElement('button');
  unit.type = 'button';
  unit.className = 'studio-dim-unit-btn bb-unit-cycle';
  unit.title = 'Ganti satuan (MM / CM / M)';
  unit.textContent = String(st.unit || 'mm').toUpperCase();
  unit.addEventListener('click', () => {
    const order = ['mm', 'cm', 'm'];
    const oldMul = _lbUnitMul(st.unit);
    st.unit = order[(order.indexOf(st.unit) + 1) % order.length];
    const newMul = _lbUnitMul(st.unit);
    if (oldMul !== newMul) {
      const r3 = Math.round((st.w * oldMul / newMul) * 1000) / 1000;
      const r4 = Math.round((st.h * oldMul / newMul) * 1000) / 1000;
      st.w = r3 > 0 ? r3 : st.w;
      st.h = r4 > 0 ? r4 : st.h;
      /* [FIX v2.0.1 / BUG B3] konversi juga "Jarak Maks Antar Lubang" (mode Jarak)
         — sebelumnya spacing tidak diubah saat ganti satuan, sehingga jarak
         efektif melompat 10x (MM->CM) / 1000x (CM->M) dan jumlah lubang salah */
      const r5 = Math.round((st.spacing * oldMul / newMul) * 1000) / 1000;
      if (r5 > 0) st.spacing = r5;
    }
    renderLubang(false);
  });
  dim.appendChild(unit);
  g.appendChild(dim);
  lp.appendChild(g);
}

function lubangReset() {
  Object.assign(lubangState, { w: 200, h: 100, unit: 'cm', mode: 'count', spacing: 100, nTop: 4, nRight: 3, nBottom: 4, nLeft: 3, dia: 12, img: null, imgName: '', imgW: 0, imgH: 0 });
  try {
    img2pdfItems.forEach(it => URL.revokeObjectURL(it.url));
  } catch (e) {}
  img2pdfItems = [];
  Object.assign(img2pdfState, { mode: 'img', pageSize: 'a4', orient: 'auto', handling: 'fit', margin: '0', dpi: '300', quality: 92, result: null });
  Object.assign(convPdfState, { name: '', buf: null, origSize: 0, pages: 0, orient: 'auto', dpi: '300', busy: false, result: null, preview: null });
  Object.assign(pdfcompState, { buf: null, name: '', origSize: 0, pages: 0, quality: 60, dpi: '300', busy: false, result: null, preview: null });
  Object.assign(qrgenState, { text: '', size: 400, fg: '#111827', bg: '#FFFFFF', level: 'M', quiet: 4, shape: 'square', mode: 'single' });
  qrgenMulti.files = [];
  qrgenMulti.busy = false;
  bbBulkReset();
}
// ============================================================
// v2.1 — Pop Up Donasi + Tombol Scroll ke Atas
// ============================================================
(function setupDonasi() {
  const overlay = document.getElementById('donasiOverlay');
  if (!overlay) return;
  window.openDonasi = function (e) {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    if (typeof closeLpMenu === 'function') closeLpMenu();
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('donasi-lock');
  };
  window.closeDonasi = function () {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('donasi-lock');
  };
  overlay.addEventListener('click', function (e) { if (e.target === overlay) window.closeDonasi(); });
  document.addEventListener('keydown', function (e) {
    if ((e.key === 'Escape' || e.key === 'Esc') && overlay.classList.contains('open')) window.closeDonasi();
  });
})();

(function setupSidebarA11y() {
  // Teks sidebar disembunyikan (mode ikon) -> pastikan nama aksesibel dari atribut title
  document.querySelectorAll('.app-sidebar .studio-tab').forEach(function (b) {
    if (!b.getAttribute('aria-label')) b.setAttribute('aria-label', b.getAttribute('title') || b.dataset.tab || '');
  });
})();

(function setupToTop() {
  const btn = document.getElementById('toTopBtn');
  if (!btn) return;
  let rafId = null, ticking = false;

  function scrolledDown() {
    const doc = document.documentElement;
    const y = window.scrollY || doc.scrollTop || 0;
    return y > 300; // tampil begitu halaman sudah discroll ke bawah
  }
  function update() {
    ticking = false;
    const lp = document.getElementById('landingPage');
    const landingVisible = !!(lp && !lp.classList.contains('hidden'));
    btn.classList.toggle('show', landingVisible && scrolledDown());
  }
  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }

  function stopAnim() {
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    btn.classList.remove('launching');
  }
  // Animasi meluncur ke atas (ease in-out cubic)
  function animateToTop() {
    stopAnim();
    const start = window.scrollY || document.documentElement.scrollTop || 0;
    if (start <= 0) { update(); return; }
    // (rev.2) tetap pakai animasi ease-in-out meski tombol kini muncul lebih awal
    const dur = Math.min(1400, Math.max(650, start * 0.45));
    const t0 = performance.now();
    btn.classList.add('launching');
    const ease = function (t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
    const step = function (now) {
      const p = Math.min(1, (now - t0) / dur);
      window.scrollTo(0, Math.round(start * (1 - ease(p))));
      if (p < 1) { rafId = requestAnimationFrame(step); }
      else { rafId = null; btn.classList.remove('launching'); update(); }
    };
    rafId = requestAnimationFrame(step);
  }

  btn.addEventListener('click', animateToTop);
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  window.addEventListener('wheel', stopAnim, { passive: true });
  window.addEventListener('touchstart', stopAnim, { passive: true });

  // Sembunyikan tombol saat berpindah ke aplikasi studio
  const _enterApp = window.enterApp;
  window.enterApp = function (tab) {
    if (typeof _enterApp === 'function') _enterApp(tab);
    stopAnim();
    btn.classList.remove('show');
  };
  update();
})();

(function setupLpSmoothNav() {
  // Nav landing (desktop, menu mobile, footer) -> scroll halus dengan easing
  // yang sama seperti tombol ke-atas, plus offset tinggi header sticky.
  var nav = document.querySelector('.lp-nav');
  function headerH() { return nav ? nav.getBoundingClientRect().height : 66; }
  function smoothTo(targetY) {
    var start = window.scrollY || document.documentElement.scrollTop || 0;
    var delta = targetY - start;
    if (Math.abs(delta) < 2) return;
    var dur = Math.min(900, Math.max(380, Math.abs(delta) * 0.45));
    var t0 = performance.now();
    var ease = function (t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
    function step(now) {
      var p = Math.min(1, (now - t0) / dur);
      var yv = Math.round(start + delta * ease(p));
      // behavior:'instant' -> easing rAF kita yang mengontrol penuh (tak dilapisi
      // scroll-behavior:smooth milik CSS yang membuat awal gerak lembab)
      try { window.scrollTo({ top: yv, behavior: 'instant' }); }
      catch (err) { window.scrollTo(0, yv); }
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  function bind(sel) {
    document.querySelectorAll(sel).forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = (a.getAttribute('href') || '').slice(1);
        var el = id ? document.getElementById(id) : null;
        if (!el || document.getElementById('landingPage').classList.contains('hidden')) return;
        e.preventDefault();
        var y = Math.max(0, el.getBoundingClientRect().top + (window.scrollY || 0) - headerH() - 10);
        smoothTo(y);
        try { history.replaceState(null, '', '#' + id); } catch (err) {}
      });
    });
  }
  // Global: SEMUA anchor di landing (nav, logo, menu mobile, footer, hero
  // "Jelajahi Tools", CTA band "Lihat Semua Tools", dst). Link yang targetnya
  // tidak ada (#donasi) otomatis lolos -> onclick popup donasi tetap berfungsi.
  bind('#landingPage a[href^="#"]');
})();

/* [FIX v2.0.1 / BUG M1b] FINALISASI RENDER TAB TOOL BARU.
   init() di blok 1 menunda render tab img2pdf/pdfcomp/qrgen/lubang via
   window.__bbPendingTab (lihat komentar di init). Baris ini dijamin berjalan
   SETELAH seluruh fungsi & state (let) blok 2 siap, sehingga switchTab ->
   renderAll -> renderXxx berjalan tanpa ReferenceError/TDZ. Ini juga menutup
   kasus restoreSession() (di atas) yang gagal senyap karena memanggil
   enterApp() saat lubangState/qrgenState dll. belum terinisialisasi. */
if (window.__bbPendingTab) {
  const _bbPending = window.__bbPendingTab;
  window.__bbPendingTab = null;
  try { switchTab(_bbPending); } catch (e) { console.error('BlueBee: render tab tertunda gagal', e); }
}
