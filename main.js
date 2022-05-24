"ui";
ui.statusBarColor("#ff5050")
ui.layout(
        <vertical>
            <appbar>
                <toolbar id="toolbar" title="喵惠助手"  bg="#ff5050"/>
                <tabs id="tabs" bg="#ff5050"/>
            </appbar>
            <viewpager id="viewpager">
                <frame>
			    <ScrollView>
                <vertical>

				    <Switch id="autoService" checked="{{auto.service != null}}" text="无障碍服务"  margin="10 5" textSize="16sp"/>
					
					<frame w="*" margin="10" h="1" bg="#ff8080" />
					
				    <button id="tmhb" text="每天最高领取天猫22888元红包（5月29日开始）" margin="10 3" textColor="#ffffff" bg="#ff5050"/>
					<button id="jdhb" text="每天最高领取京东19618元红包（5月30日开始）" margin="10 3" textColor="#ffffff" bg="#ff5050"/>
					<button id="youhuiquan" text="话费/电费充值91折（91元充值100元）" margin="10 3" textColor="#111111"/>
					
					<frame w="*" margin="10" h="1" bg="#ff8080" />
					
					<card id="start_ui" w="*" h="70" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                        <vertical padding="18 8" h="auto">
                            <text text="某猫/某东618任务助手" textColor="#222222" textSize="16sp"/>
                            <text text="支持自动完成某猫/某东618任务，领取奖励" textColor="#999999" textSize="14sp"/>
                        </vertical>
                    <View bg="#ce0000" h="*" w="10"/>
                    </card>
					
				    <card id="qg_main" w="*" h="70" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                        <vertical padding="18 8" h="auto">
                            <text text="抢购功能" textColor="#222222" textSize="16sp"/>
                            <text text="支持淘宝/某猫、某东、某多多和某音等平台" textColor="#999999" textSize="14sp"/>
                        </vertical>
                    <View bg="#ff00ff" h="*" w="10"/>
                    </card>

					<button id="syjc" text="抢购功能使用教程" margin="10 1" />
					
					<card id="old_main" w="*" h="70" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                        <vertical padding="18 8" h="auto">
                            <text text="旧版本抢购功能" textColor="#222222" textSize="16sp"/>
                            <text text="支持某宝/某猫、某东和某宁易购等平台" textColor="#999999" textSize="14sp"/>
                        </vertical>
                    <View bg="#999999" h="*" w="10"/>
                    </card>
					
					<card id="tjb_main" w="*" h="70" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                        <vertical padding="18 8" h="auto">
                            <text text="某金币功能" textColor="#222222" textSize="16sp"/>
                            <text text="支持自动完成某宝某金币页面任务" textColor="#999999" textSize="14sp"/>
                        </vertical>
                    <View bg="#ff7500" h="*" w="10"/>
                    </card>
					
					<frame w="*" margin="10 10 10 20" h="1" />
					
                </vertical>
                </ScrollView>

                </frame>
                <frame>
				    <vertical>
                     <text margin="10 5" w="*" gravity="center" textSize="18sp">喵惠助手V1.2.4</text>
					 <text margin="10 5">喵惠助手是一款基于安卓系统的辅助脚本工具，模拟人工在手机屏幕上点击，实现自动化操作，方便、快捷、安全，没有任何病毒。</text>
					 <text margin="10 5">部分功能是整合互联网已有开源包和工具。长期优化更新，更多功能陆续增加中……获取源码请联系我们。</text>

                     <text margin="10 5">先开启无障碍和悬浮窗权限，再运行软件！否则会闪退！按音量“+”键，可以结束所有正在运行的任务。</text>
					 
					 <text margin="10 5" textColor="#ff0000">完全免费！仅供测试和学习交流，严禁用于任何违法行为！</text>
					 
					 <card id="miaohui" w="*" h="70" margin="10 20 10 10" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                        <vertical padding="18 8" h="auto">
                            <text text="点击下载更新喵惠助手" gravity="center" textColor="#000000" textSize="16sp"/>
                            <text text="喵惠APP—我的页面—喵惠助手更新下载" gravity="center" textColor="#ff5050" textSize="14sp"/>
                        </vertical>
                    <View h="*" w="10"/>
                    </card>
					
					<vertical margin="10 0" gravity="center">                                
                        <img src="https://s2.loli.net/2022/01/06/YWMuFTzB2merkal.png" w="418" h="228"/>
				    </vertical>
								
                    </vertical>
                </frame>
            </viewpager>
        </vertical>
);


//设置滑动页面的标题
ui.viewpager.setTitles(["功能页面", "更新说明"]);
//让滑动页面和标签栏联动
ui.tabs.setupWithViewPager(ui.viewpager);

//这里是无障碍触发方式
ui.autoService.on("check", function(checked) {
//用户勾选无障碍服务的选项时，跳转到页面让用户去开启 
if(checked && auto.service == null) { 
 app.startActivity({
 action: "android.settings.ACCESSIBILITY_SETTINGS"  }); } 
  if(!checked && auto.service != null){ 
   auto.service.disableSelf();    }    }); 

//当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function() {
//此时根据无障碍服务的开启情况，同步开关的状态 
ui.autoService.checked = auto.service != null;    }); 

//红包//////////
ui.tmhb.click(function(){
app.openUrl("https://resoumen.com/u/")
});

ui.jdhb.click(function(){
app.openUrl("https://u.jd.com/JMgvgNd")
});


ui.youhuiquan.click(function(){
app.openUrl("https://a.app.qq.com/o/simple.jsp?pkgname=com.miaohui.xin")
});


//喵惠下载
ui.miaohui.click(function(){
app.openUrl("https://a.app.qq.com/o/simple.jsp?pkgname=com.miaohui.xin")
});

//使用教程
ui.syjc.click(function(){
app.openUrl("https://docs.qq.com/doc/DU0FTQ1NKV0VKU2tN")
});


//618任务
ui.start_ui.on("click", () => {
    engines.execScriptFile("start_ui.js");
});

//抢购功能
ui.qg_main.on("click", () => {
    engines.execScriptFile("qg_main.js");
});

//旧版本抢购功能
ui.old_main.on("click", () => {
    engines.execScriptFile("old_main.js");
});

//淘金币功能
ui.tjb_main.on("click", () => {
    engines.execScriptFile("tjb_main.js");
});