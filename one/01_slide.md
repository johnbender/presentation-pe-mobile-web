!SLIDE link
<h1 style="font-size: 7em">
  Progressive Enhancement
  <!-- oh noes div inside h1 :P -->
  <div style="font-size: 0.6em; margin: 18px 0;">on the</div>
  Mobile Web
</h1>
johnbender.github.com/presentation-pe-mobile-web

!SLIDE bullets mono-bullets
## me
* @johnbender
* johnbender.us
* github.com/johnbender

!SLIDE center adobe-background background-image
## jque<span class="ry-kern">ry</span> mobile

!SLIDE center adobe-background background-image
## rubyists
#### kstewart.me/2012/04/21/ruby-at-adobe.html

!SLIDE center good-background background-image
## good

!SLIDE center bad-background background-image
## bad

!SLIDE center sad-background background-image
## ridiculous

!SLIDE center examine-background background-image
## pe approach

!SLIDE center super-background background-image
## jquery mobile

!SLIDE center ice-cream-background background-image
# Good

!SLIDE
### growth
doubling year/year

!SLIDE
### xplatform
fairly consistent

!SLIDE
### familiar
web dev • app dev

!SLIDE
### single source
media queries • responsive

!SLIDE center mj-background background-image
# Bad

!SLIDE
### history
(push|pop|replace)State

!SLIDE
### orientation
180&#176;? 90&#176;? 0&#176;? 270&#176;?

!SLIDE
### web views
2 x each browser

!SLIDE
## tap vs click
delay • scrolling • both inputs

!SLIDE
### standards
lack thereof

!SLIDE
### heuristics
what you tap may not get a click

!SLIDE center video
<div class="rotate-left" style="left: 82px; top: 257px;">Tap/Delay</div>
<video height="576" width="384" src="file/one/tap-then-click.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
<div class="video-link-container">
<a href="https://vimeo.com/45721427">view on vimeo</a>
</div>

!SLIDE center video
<div class="rotate-left" style="left: 25px; top: 315px;">Content Shift</div>
<video height="576" width="384" src="file/one/tap-into-click.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
<div class="video-link-container">
<a href="https://vimeo.com/45718716">view on vimeo</a>
</div>

!SLIDE high-image center
<img src="droidincredible.jpg" style="height: 500px; float: left; margin-left: 150px;"></img>
<img src="blackberry-bold.jpg" style="height: 480px; float: left; margin-top: 10px;"></img>

!SLIDE center facepalm-background background-image
# Ridiculous

!SLIDE center webkit-background background-image
## webkit
It's all the same right?

!SLIDE center ugly-background background-image
## android

!SLIDE
### <img src="android-icon.png"></img> is the new <img src="ie-icon.png"></img>

!SLIDE
### 2.2.x • 2.3.x
80+% percent of androids

!SLIDE
### rendering
yes, even rendering

!SLIDE
### position fixed
we use &amp;nbsp; to fix bugs

!SLIDE
### animations
toy examples work great

!SLIDE center
# PE Approach

!SLIDE
### build up
start with what always works

!SLIDE
### animations
none ⟶ simple ⟶ all

!SLIDE
### orientation
poll width/height ⟶ event

!SLIDE
### navigation
reload ⟶ hash ⟶ state

!SLIDE image
<pre class="medium" style="margin-top: 200px">
&lt;<span class="function-name">a</span> <span class="variable-name">href</span>=<span class="string">"/foo/bar"</span> <span class="variable-name">data-role</span>=<span class="string">"button"</span>&gt;
  Next Page!
&lt;/<span class="function-name">a</span>&gt;</pre>
<img src="button.png" style="width: 100%; border: 10px solid white; box-sizing: border-box;"></img>

!SLIDE image
<pre class="medium" style="margin-top: 200px">
&lt;<span class="function-name">a</span> <b><span class="variable-name">href</span>=<span class="string">"/foo/bar"</span></b> <span class="variable-name">data-role</span>=<span class="string">"button"</span>&gt;
  Next Page!
&lt;/<span class="function-name">a</span>&gt;</pre>
<img src="button.png" style="width: 100%; border: 10px solid white; box-sizing: border-box;"></img>

!SLIDE image
<pre class="medium" style="margin-top: 200px">
&lt;<span class="function-name">a</span> <span class="variable-name">href</span>=<span class="string">"/foo/bar"</span> <span class="variable-name">data-role</span>=<span class="string">"button"</span>&gt;
  Next Page!
&lt;/<span class="function-name">a</span>&gt;</pre>
<img src="button.png" style="width: 100%; border: 10px solid #D65600; box-sizing: border-box;"></img>

!SLIDE image
<pre class="medium" style="margin-top: 200px">
&lt;<span class="function-name">a</span> <b><span class="variable-name">href</span>=<span class="string">"#destination"</span></b> <span class="variable-name">data-role</span>=<span class="string">"button"</span>&gt;
  Next Page!
&lt;/<span class="function-name">a</span>&gt;</pre>
<img src="button.png" style="width: 100%; border: 10px solid white; box-sizing: border-box;"></img>

!SLIDE video
<div class="rotate-left" style="left: 68px; top: 263px;">Without JS</div>
<video height="576" width="384" src="file/one/without-js.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
<div class="video-link-container">
<a href="https://vimeo.com/45851036">view on vimeo</a>
</div>

!SLIDE center f-yeah-background background-image
# jQuery Mobile

!SLIDE
### users
no one uses this crap

!SLIDE bullets grid users
<div style="float: left; margin-left: 100px">
<ul>
  <li> Sears </li>
  <li> Chase </li>
  <li> Ikea </li>
  <li> Life </li>
  <li> Stanford </li>
</ul>
</div>

<div style="float: left">
<ul>
  <li> m.sears.com </li>
  <li> m.chase.com </li>
  <li> m.ikea.com </li>
  <li> m.life.com </li>
  <li> m.stanford.edu </li>
</ul>
</div>

!SLIDE
### support

!SLIDE bullets grid
<div style="float: left;  margin-top: 200px">
<ul>
  <li> Apple iOS 3.2-5.0 </li>
  <li> Android 2.1-4.0 </li>
  <li> Windows Phone 7-7.5 </li>
  <li> Blackberry 6-7, QNX </li>
  <li> Palm WebOS 1.4-3.0 </li>
</ul>
</div>

<div style="float: left; margin-bottom: 100px; margin-top: 200px">
<ul>
  <li> Firebox Mobile </li>
  <li> Opera Mobile 11.0 </li>
  <li> Meego 1.2 </li>
  <li> Chrome, Firefox </li>
  <li> IE 7+, Opera 10+ </li>
</ul>
</div>
jquerymobile.com/gbs/

!SLIDE
### github
6800+ watchers • 1200+ forks

!SLIDE
### books
10 books • 7 publishers

!SLIDE center background-image mouse-background
## vmouse

!SLIDE
### normalized
standars • one event

!SLIDE
<pre>
<span class="comment">// fastest &amp; broken on desktop
</span>$btn.on( <span class="string"><b>"touchstart"</b></span>, doSomething );

<span class="comment">// slowest
</span>$btn.on( <span class="string">"click"</span>, doSomething );

<span class="comment">// fast enough &amp; safe
</span>$btn.on( <span class="string">"vclick"</span>, doSomething );
</pre>

!SLIDE
<pre>
<span class="comment">// fastest &amp; broken on desktop
</span>$btn.on( <span class="string">"touchstart"</span>, doSomething );

<span class="comment">// slowest
</span>$btn.on( <span class="string"><b>"click"</b></span>, doSomething );

<span class="comment">// fast enough &amp; safe
</span>$btn.on( <span class="string">"vclick"</span>, doSomething );
</pre>

!SLIDE
<pre>
<span class="comment">// fastest &amp; broken on desktop
</span>$btn.on( <span class="string">"touchstart"</span>, doSomething );

<span class="comment">// slowest
</span>$btn.on( <span class="string">"click"</span>, doSomething );

<span class="comment">// fast enough &amp; safe
</span>$btn.on( <span class="string"><b>"vclick"</b></span>, doSomething );
</pre>

!SLIDE center video
<div class="rotate-left" style="left: 100px; top: 238px;">Tap/Click</div>
<video height="576" width="384" src="file/one/vmouse-speedup.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
<div class="video-link-container">
<a href="https://vimeo.com/45851036">view on vimeo</a>
</div>

!SLIDE center background-image return-background
## navigation
reload ⟶ hash ⟶ state

!SLIDE image center android
![back button](android.jpg)

!SLIDE
<pre class="small">
<span class="comment">// no hash, no ajax
</span><span class="js2-warning">foo.com/bar</span>

<span class="comment">// hash support
</span><span class="js2-warning">foo.com/#/bar</span>

<span class="comment">// replaceState support
</span><span class="js2-warning">foo.com/#/bar ⟶ foo.com/bar</span></pre>

!SLIDE
<pre class="small">
<span class="comment">// no hash, no ajax
</span><b><span class="js2-warning">foo.com/bar</span></b>

<span class="comment">// hash support
</span><span class="js2-warning">foo.com/#/bar</span>

<span class="comment">// replaceState support
</span><span class="js2-warning">foo.com/#/bar ⟶ foo.com/bar</span></pre>

!SLIDE
<pre class="small">
<span class="comment">// no hash, no ajax
</span><span class="js2-warning">foo.com/bar</span>

<span class="comment">// hash support
</span><b><span class="js2-warning">foo.com/#/bar</span></b>

<span class="comment">// replaceState support
</span><span class="js2-warning">foo.com/#/bar ⟶ foo.com/bar</span></pre>

!SLIDE
<pre class="small">
<span class="comment">// no hash, no ajax
</span><span class="js2-warning">foo.com/bar</span>

<span class="comment">// hash support
</span><span class="js2-warning">foo.com/#/bar</span>

<span class="comment">// replaceState support
</span><b><span class="js2-warning">foo.com/#/bar ⟶ foo.com/bar</span></b></pre>

!SLIDE center video
<div class="rotate-left" style="left: 32px; top: 305px;">Hashchange</div>
<video height="576" width="384" src="file/one/nav-hashchange.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
<div class="video-link-container">
<a href="https://vimeo.com/45854912">view on vimeo</a>
</div>

!SLIDE center video
<div class="rotate-left" style="left: 87px; top: 252px;">Pushstate</div>
<video height="576" width="384" src="file/one/nav-replacestate.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
<div class="video-link-container">
<a href="https://vimeo.com/45854913">view on vimeo</a>
</div>

!SLIDE center builder-background background-image
## builder
jquerymobile.com/download-builder/

!SLIDE center pleading-background background-image
<h1 style="margin-top: 100px">Use Something</h1>
for the seals

!SLIDE bullets mono-bullets
## thanks
* @johnbender
* johnbender.us
* github.com/johnbender
