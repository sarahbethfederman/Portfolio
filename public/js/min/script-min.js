!function(){function t(t,e){console.log("blog"),$.ajax({url:t,dataType:"json",success:function(t){e.find("h2").html('<a href="'+t.posts[0].URL+'">'+t.posts[0].title+"</a>"),e.find("p").html(t.posts[0].excerpt),console.log(t)},error:function(t){console.log(t)}})}var e=function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top},1e3),!1}})},s={init:function(t,e,s){this.twitter("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=sarah_federman&count=1"),this.blog("http://sarahbethfederman.com/blog/feed/"),this.treehouse("http://teamtreehouse.com/sarahfederman.json")},twitter:function(t){$.ajax({url:t,dataType:"json",success:function(t){console.log(t)}})},blog:function(t){$.ajax({url:t,dataType:"json",success:function(t){console.log(t.responseData.feed)}})},treehouse:function(t){$.ajax({url:t,dataType:"json",success:function(t){console.log(t)}})}},o=function(t){function e(t,e){this.$ul=e,this.$slideList=$(".slide",e),this.$slides=$(this.$slideList),this.currentSlide=0,this.slide()}return e.prototype.slide=function(){0===this.currentSlide?(this.$ul.css("top","0px"),console.log(this.$ul.css("top"))):(console.log("actual: "+-200*this.currentSlide+"px",this.currentSlide),this.$ul.animate({top:-200*this.currentSlide+"px"}),console.log("what its set to: "+this.$ul.css("top"),this.currentSlide)),this.currentSlide++,this.currentSlide<this.$slides.length?setTimeout(this.slide.bind(this),1e3):(this.currentSlide=0,console.log("finished loop"),this.slide())},e}();$(document).ready(function(){var s=$('a[class="js-lightbox"]'),o=$(".treehouse-box"),i=$(".twitter-box"),n=$(".blog-box");$("[data-href]").click(function(){var t=$(this).attr("data-href");location.href=t}),e(),$(window).width()>1e3&&skrollr.init({forceHeight:!1}),t("https://public-api.wordpress.com/rest/v1.1/sites/sarahbethfederman.com%2Fblog/posts/?number=1",n),$lightBox=$(".lightbox"),$lightBox.length&&$lightBox.fancybox({fitToView:!1,maxWidth:"90%"})}),$(document).on("post-load",function(){$(".infinite-loader").remove()})}();