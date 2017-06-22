<template>
	<f7-page navbar-fixed  no-tabbar no-page-content id="Mail_list_chat" data-page="Mail_list_chat">
				<!--导航-->
				<f7-navbar v-if="$theme.ios">
					<div class="navbar-inner">
						<f7-nav-left sliding>
						<a class="back" href="#">
				        	<i class="iconfont icon-zuo"></i>		        		
				        </a>
						</f7-nav-left>
				       <f7-nav-center sliding>陈村丽</f7-nav-center> 
				       <f7-nav-right>
							<i class="iconfont icon-plus"></i>
				       </f7-nav-right>
				    </div>
				</f7-navbar>

				<!--内容-->
				<div class="page-content messages-content">
	              	<div class="messages messages-auto-layout">
		                <div class="messages-date">Sunday, Feb 9 <span>12:58</span></div>
		                <div class="message message-sent message-first">
		                  <div class="message-text">Hello</div>
		                </div>
		                <div class="message message-sent message-last message-with-tail">
		                  <div class="message-text">How are you?</div>
		                </div>
		                <div class="message message-received message-with-avatar message-last message-with-tail message-first">
		                  <div class="message-name">Kate</div>
		                  <div class="message-text">I am fine, thanks</div>
		                  <div style="background-image:url(http://lorempixel.com/output/people-q-c-100-100-9.jpg)" class="message-avatar"></div>
		                </div>
		                <div class="messages-date">Sunday, Feb 3 <span>11:58</span></div>
		                <div class="message message-sent message-first">
		                  <div class="message-text">Nice photo?</div>
		                </div>
		                <div class="message message-received message-with-avatar message-last message-with-tail message-first">
		                  <div class="message-name">Kate</div>
		                  <div class="message-text">Wow, awesome!</div>
		                  <div style="background-image:url(http://lorempixel.com/output/people-q-c-100-100-9.jpg)" class="message-avatar"></div>
		            	</div>
	              	</div>
            	</div>
				
				<div class="toolbar messagebar">
		            <div class="toolbar-inner edit">
		            	<textarea placeholder="Message" class="textInput"></textarea>
		            	<a href="#" class="link button">发送</a>
		            </div>
	            </div>
				
				<!--结束-->
	</f7-page>
</template>
<script>
	export default {}
</script>