"ui";
var color = "#ff5050";
var workId = "";
//时间工具类
var timeUtils = require('TimeUtils.js');

var userData = storages.create("user_data");

var showNotice, noticeMsg, showRecommend, recommendMsg, recommendType, recommendButtonMsg, recommendButtonSc;


importClass(android.view.View);

homeMain();

//主页面
function homeMain() {
	ui.statusBarColor("#ff5050")
    ui.layout(
        <drawer id="drawer">
            <vertical>
                <appbar>
                    <toolbar id="toolbar" title="宝惠助手（抢购+淘金币）" bg="#ff5050"/>
                    <tabs id="tabs" bg="#ff5050"/>
                </appbar>
                <viewpager id="viewpager">
                    
                    <frame>
                        <ScrollView>
                            <vertical w="*" h="*" margin="6" >
							    <text margin="8" color="#ff1010">仅供测试和学习交流，严禁用于商业和违法行为！</text>
                                <Switch h="30" id="autoService" text="无障碍服务" checked="{{auto.service != null}}" textSize="16" />
                                <frame w="*" margin="12" h="1" bg="#ff8080" />
                                <horizontal >
                                    <checkbox id="baseTime" text="本机时间悬浮坐标：" textColor="black" textSize="16" />
                                    <text h="30" text="X" gravity="top|left" textColor="black" textSize="16" />
                                    <input id="xp" text="360" hint="x" marginBottom="-6" textSize="16" />
                                    <text h="30" text="   Y" gravity="top|left" textColor="black" textSize="16" />
                                    <input id="yp" text="250" hint="y" marginBottom="-6" textSize="16" />
                                </horizontal>
								
                            <button id="tmhb" text="最高领天猫618元红包" bg="#ff5050" color="#ffffff" margin="8 5" />
							<button id="jdhb" text="最高领京东18618元红包" bg="#ff5050" color="#ffffff" margin="8 5" />
							
                                <frame w="*" margin="12" h="1" bg="#ff8080" />
								
                                <text h="30" text="淘宝：" gravity="top|left" textColor="black" textSize="16" />
                                
                                <horizontal >
                                    <button id="tqgModel" style="Widget.AppCompat.Button.Colored" text="页面模式" w="auto" h="*" />
                                    <button id="tbModel" style="Widget.AppCompat.Button.Colored" text="收藏模式" w="auto" h="*" />
									<button id="tbFastUrlModel" style="Widget.AppCompat.Button.Colored" text="BP模式" w="auto" h="*" />
                                </horizontal>
                                <horizontal >
                                    <button id="tbCartModel" style="Widget.AppCompat.Button.Colored" text="购物车1" w="auto" h="*" />
                                    <button id="tbCartModel2" style="Widget.AppCompat.Button.Colored" text="购物车2" w="auto" h="*" />
                                    <button id="tbCartModel3" style="Widget.AppCompat.Button.Colored" text="购物车3" w="auto" h="*" />
                                </horizontal>
                                <horizontal >
                                    <button id="tbLiveModel" style="Widget.AppCompat.Button.Colored" text="直播" w="auto" h="*" />
                                    <button id="tbLiveReplyModel" style="Widget.AppCompat.Button.Colored" text="刷屏" w="auto" h="*" />
                                </horizontal>
								
								<frame w="*" margin="12" h="1" bg="#ff8080" />
                                <text h="30" text="京东：" gravity="top|left" textColor="black" textSize="16" />
								
                                <horizontal >
                                    <button id="jdModel" style="Widget.AppCompat.Button.Colored" text="页面模式" w="auto" h="*" />
                                    <button id="jdScModel" style="Widget.AppCompat.Button.Colored" text="收藏模式" w="auto" h="*" />
                                    <button id="jdListenModel" style="Widget.AppCompat.Button.Colored" text="捡漏模式" w="auto" h="*" />
                                </horizontal>
								
								<frame w="*" margin="12" h="1" bg="#ff8080" />
                                <text h="30" text="拼多多：" gravity="top|left" textColor="black" textSize="16" />
								
                                <horizontal >
                                    <button id="pddModel" style="Widget.AppCompat.Button.Colored" text="页面模式" w="auto" h="*" />
                                </horizontal>
								
                                <frame w="*" margin="12" h="1" bg="#ff8080" />
                                <text h="30" text="苏宁：" gravity="top|left" textColor="black" textSize="16" />
                                <horizontal >
                                    <button id="snModel" style="Widget.AppCompat.Button.Colored" text="页面模式" w="auto" h="*" />
                                    <button id="snCartModel" style="Widget.AppCompat.Button.Colored" text="购物车" w="auto" h="*" />
                                </horizontal>
								
                                <frame w="*" margin="12" h="1" bg="#ff8080" />
                                <text h="30" text="抖音：" gravity="top|left" textColor="black" textSize="16" />
                                <horizontal >
                                    <button id="dyModel" style="Widget.AppCompat.Button.Colored" text="直播" w="auto" h="*" />
                                    <button id="dyReplyModel" style="Widget.AppCompat.Button.Colored" text="刷屏" w="auto" h="*" />
                                </horizontal>
                                <frame w="*" margin="12" h="1" bg="#ff8080" />
                                <text h="30" text="其他平台：" gravity="top|left" textColor="black" textSize="16" />
                                <horizontal >
								    <button id="hwModel" style="Widget.AppCompat.Button.Colored" text="华为" w="auto" h="*" />
									<button id="miModel" style="Widget.AppCompat.Button.Colored" text="小米" w="auto" h="*" />
                                </horizontal >
                                <horizontal >
								    <button id="klModel" style="Widget.AppCompat.Button.Colored" text="考拉" w="auto" h="*" />
                                    <button id="crvModel" style="Widget.AppCompat.Button.Colored" text="华润" w="auto" h="*" />
                                    <button id="vmModel" style="Widget.AppCompat.Button.Colored" text="多点" w="auto" h="*" />
                                </horizontal >
                                <frame w="*" margin="12" h="1" bg="#ff8080" />
                            </vertical>
                        </ScrollView>
                    </frame>
					
                    <frame>
                        <ScrollView>
                            <vertical padding="16" gravity="center">
							
                                <text textColor="black" textSize="16">淘宝BP链接</text>
                                <horizontal >
                                    <text textColor="black" textSize="16">ITEM ID：</text>
                                    <input id="fastTbItemId" text="634159600773" hint="634159600773" marginBottom="-6" textSize="16" />
                                </horizontal>
                                <horizontal >
                                    <text textColor="black" textSize="16">SKUID：</text>
                                    <input id="fastTbSkuId" text="4721329482701" hint="4721329482701" marginBottom="-6" textSize="16" />
                                </horizontal>
                                <horizontal >
                                    <text textColor="black" textSize="16">数量：</text>
                                    <input id="fastTbNum" text="1" hint="1" marginBottom="-6" textSize="16" />
                                </horizontal>
                                <horizontal >
                                    <button id="fastTbDetail" style="Widget.AppCompat.Button.Colored" text="详情访问" w="auto" />
									<button id="fastTbUrlOpen" style="Widget.AppCompat.Button.Colored" text="一键抢购" w="auto" />
                                    <button id="fastTbUrlCopy" style="Widget.AppCompat.Button.Colored" text="复制直链" w="auto" />
                                </horizontal>
								
                                <frame w="*" margin="12" h="1" bg="#ff8080" />
                                <text textColor="black" textSize="16">京东BP链接</text>
                                <horizontal >
                                    <text textColor="black" textSize="16">ITEM ID：</text>
                                    <input id="fastJdSkuId" text="100012043978" hint="100012043978" marginBottom="-6" textSize="16" />
                                </horizontal>
                                <horizontal >
                                    <button id="fastJdDetail" style="Widget.AppCompat.Button.Colored" text="详情访问" w="auto" />
                                    <text textColor="black">   </text>
                                    <button id="fastJdUrl" style="Widget.AppCompat.Button.Colored" text="复制直链1" w="auto" />
                                    <button id="fastJd2Url" style="Widget.AppCompat.Button.Colored" text="复制直链2" w="auto" />
                                </horizontal>
								
								<frame w="*" margin="12" h="1" bg="#ff8080" />
                                <text textColor="red" textSize="16">茅台</text>
								<horizontal >
                                    <button id="tmhydmt" style="Widget.AppCompat.Button.Colored" text="天猫会员店（19点）" w="auto" />
									<button id="tmcsmt" style="Widget.AppCompat.Button.Colored" text="天猫超市（20点）" w="auto" />
                                </horizontal>
								<horizontal >
                                    <button id="jdplusmt" style="Widget.AppCompat.Button.Colored" text="京东（10点）" w="auto" />
                                </horizontal>
								<horizontal >
                                    <button id="snygmt" style="Widget.AppCompat.Button.Colored" text="苏宁易购（9点30分）" w="auto" />
                                </horizontal>
                            </vertical>
                        </ScrollView>
                    </frame>
					
					<frame>
                        <ScrollView>
                            <vertical padding="16">
                                <horizontal >
                                    <text padding="11 10" w="*" color="red" bg="#ff8080" textSize="20sp" gravity="top|center" id="notice">公告</text>
                                </horizontal >
                                
								<button id="taojinbi" style="Widget.AppCompat.Button.Colored" text="淘金币功能"  h="*" />

								<button id="jiubanben" style="Widget.AppCompat.Button.Colored" text="旧版本抢购功能" h="*" />
								<button id="taobaolyb" style="Widget.AppCompat.Button.Colored" text="淘宝618活动自动任务功能" h="*" />
								<button id="jingdonglyb" style="Widget.AppCompat.Button.Colored" text="京东618活动自动任务功能" h="*" />
								
								
                                <text margin="8">宝惠助手是一款基于安卓系统的辅助脚本工具，模拟人工在手机屏幕上点击，实现自动化操作，方便、快捷、安全。部分功能是整合互联网已有工具和开源包，著作权归属原作者。</text>
                               
                                <text margin="8 5" color="#ff5050">点开左上角，可以查看使用教程。按音量“+”键可以结束所有正在运行的任务。</text>

                                 
                                <frame w="*" margin="12" h="1" bg="#ff8080" />
								<text margin="8" color="#ff5050">宝惠助手更新地址：宝惠APP—我的页面—宝惠助手更新下载</text>
								<button id="baohui" text="点击下载宝惠APP更新宝惠助手" bg="#ff5050" color="#ffffff"/>
								
								<vertical margin="8" gravity="center">                                
                                <img src="https://i.loli.net/2021/05/28/Nwge5ErACDkf2Xj.png" w="310" h="195"/>
							    </vertical>

								
                                <frame w="*" margin="12" h="1" bg="#ff8080" />
                               
                                <text textSize="20sp" gravity="top|center" id="recommendShow" >推荐</text>

                                <text h="30" id="recommend" text="资讯" gravity="top|left" textColor="black" textSize="16" />
                                <horizontal >
                                    <button id="recommendButton" style="Widget.AppCompat.Button.Colored" text="" w="auto" h="*" />
                                </horizontal>

                            </vertical>
                        </ScrollView>
                    </frame>
					
                </viewpager>
            </vertical>
            <vertical layout_gravity="left" bg="#ffffff" w="280" h="*">
	        <img w="280" h="200" marginBottom="30" scaleType="fitCenter" src="https://i.loli.net/2021/03/01/GpwPy2IeD1WlAuO.png" />
                <list id="menu">
                    <horizontal>
                        <img w="50" h="50" padding="15" src="{{this.icon}}" tint="{{color}}" />
                        <text textColor="black" textSize="15sp" text="{{this.title}}" layout_gravity="center" />
                    </horizontal>
                </list>
        </vertical>
        </drawer>
    );


ui.tmhb.click(function(){
app.openUrl("https://s.click.taobao.com/wXISSnu")
});

ui.jdhb.click(function(){
app.openUrl("https://u.jd.com/zAAq1lG")
});



ui.baohui.click(function(){
app.openUrl("https://app.mi.com/details?id=com.baohui.xin")
});


ui.tmhydmt.click(function(){
app.openUrl("https://detail.tmall.com/item.htm?id=606763787235")
});

ui.tmcsmt.click(function(){
app.openUrl("https://chaoshi.detail.tmall.com/item.htm?id=20739895092")
});

ui.jdplusmt.click(function(){
app.openUrl("https://item.m.jd.com/product/100012043978.html")
});

ui.snygmt.click(function(){
app.openUrl("https://m.suning.com/product/0000000000/000000011001203841.html")
});


    ui.autoService.on("check", function (checked) {
        // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
        if (checked && auto.service == null) {
            app.startActivity({
                action: "android.settings.ACCESSIBILITY_SETTINGS"
            });
        }
        if (!checked && auto.service != null) {
            auto.service.disableSelf();
        }
    });

    var window;
    ui.baseTime.on("check", function (checked) {
        // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
        if (checked) {
            // exectuion = engines.execScriptFile("time.js");
            timeThread = threads.start(function () {
                window = timeUtils.timeShow(ui.xp.text(), ui.yp.text());
            });
        } else if (window) {
            window.close();
            // floaty.closeAll()
            timeThread.interrupt();
        }
    });


    // 当用户回到本界面时，resume事件会被触发
    ui.emitter.on("resume", function () {
        // 此时根据无障碍服务的开启情况，同步开关的状态
        ui.autoService.checked = auto.service != null;
    });



    activity.setSupportActionBar(ui.toolbar);
    //设置滑动页面的标题
    ui.viewpager.setTitles(["抢购功能", "快捷操作", "其他功能+更新"]);
    //让滑动页面和标签栏联动
    ui.tabs.setupWithViewPager(ui.viewpager);
    //让工具栏左上角可以打开侧拉菜单
    ui.toolbar.setupWithDrawer(ui.drawer);
    ui.menu.setDataSource([
        // {
        //     title: "恢复默认值",
        //     icon: "@drawable/ic_android_black_48dp"
        // },

        {title: "使用教程",icon: "@drawable/ic_live_help_black_48dp"},
        {title: "日志",icon: "@drawable/ic_receipt_black_48dp"},
		{title: "关于",icon: "@drawable/ic_info_outline_black_48dp"},
    ]);

    // ui.emitter.on("back_pressed", e => {
    //     if (!kg) {
    //         kg = true;
    //         toastLog("再按一次退出");
    //         setTimeout(() => {
    //             kg = false;
    //         }, 250);
    //         e.consumed = true;
    //         homeMain();
    //     } else {
    //         e.consumed = false;
    //     };
    // });

    ui.menu.on("item_click", item => {
        switch (item.title) {
            // case "恢复默认值":
            //     // alert("恢复默认值");
            //     initData();
            //     toastLog("恢复默认值");
            //     break;

            case "使用教程":
                app.openUrl("https://docs.qq.com/doc/DU2VEZllYVGJ4bkhM");
                break;
            case "日志":
                app.startActivity("console");
                break;       
            case "关于":
                alert("关于", "宝惠助手V0.5.7 \n抢购功能+淘金币功能 \n618/1111/1212活动自动任务功能 \n获取源码，软件定制请联系客服");
                break;	
        }
    })
	
	//淘金币助手
    ui.taojinbi.on("click", () => {
        engines.execScriptFile("taojinbi.js");
    });
	
	//旧版本抢购助手
    ui.jiubanben.on("click", () => {
        engines.execScriptFile("jiubanben.js");
    });
	
	//京东618任务
    ui.jingdonglyb.on("click", () => {
        engines.execScriptFile("jingdonglyb.js");
    });
	
	//淘宝618任务
    ui.taobaolyb.on("click", () => {
        engines.execScriptFile("taobaolyb.js");
    });
	
	
	
    //淘宝直链
    ui.tbFastUrlModel.on("click", () => {
        engines.execScriptFile("tb_bp.js");
    });

    //淘宝直播
    ui.tbLiveModel.on("click", () => {
        engines.execScriptFile("tb_live_qg.js");
    });

    //淘宝直播
    ui.tbLiveReplyModel.on("click", () => {
        engines.execScriptFile("tb_live_reply.js");
    });

    //淘宝橱窗
    ui.tbModel.on("click", () => {
        engines.execScriptFile("tb.js");
    });

    //淘宝购物车
    ui.tbCartModel.on("click", () => {
        engines.execScriptFile("tb_cart.js");
    });

    //淘宝购物车
    ui.tbCartModel2.on("click", () => {
        engines.execScriptFile("tb_cart_t.js");
    });

    //diy购物车
    ui.tbCartModel3.on("click", () => {
        engines.execScriptFile("diy_cart.js");
    });

    //淘宝详情页面倒计时
    ui.tqgModel.on("click", () => {
        engines.execScriptFile("tb_qg.js");
    });

    //京东
    ui.jdModel.on("click", () => {
        engines.execScriptFile("jd.js");
    });

    //京东收藏
    ui.jdScModel.on("click", () => {
        engines.execScriptFile("jd_sc.js");
    });
    //京东捡漏
    ui.jdListenModel.on("click", () => {
        engines.execScriptFile("jd_listen.js");
    });


    //华为
    ui.hwModel.on("click", () => {
        engines.execScriptFile("hw.js");
    });


    //华润
    ui.crvModel.on("click", () => {
        engines.execScriptFile("crv.js");
    });

    //苏宁
    ui.snModel.on("click", () => {
        engines.execScriptFile("sn.js");
    });
    //苏宁
    ui.snCartModel.on("click", () => {
        engines.execScriptFile("sn_cart.js");
    });


    //拼多多
    ui.pddModel.on("click", () => {

        engines.execScriptFile("pdd.js");
    });


    //考拉海购
    ui.klModel.on("click", () => {
        engines.execScriptFile("kl.js");
    });


    //多点
    ui.vmModel.on("click", () => {
        // if (userData.get("isLogin", false)) {
        //     engines.execScriptFile("wm.js");
        // } else {
        //     dialogs.confirm(null, "抱歉，该模块需要激活后使用，立即激活?", (a) => {
        //         if (a) {
        //             // login();
        //             engines.execScriptFile("activate.js");
        //         }
        //     })
        // }
        engines.execScriptFile("wm.js");
    });

    //小米
    ui.miModel.on("click", () => {
        engines.execScriptFile("mi_ms.js");
    });

    //抖音
    ui.dyModel.on("click", () => {
        engines.execScriptFile("dy_live_qg.js");
    });

    //抖音
    ui.dyReplyModel.on("click", () => {
        engines.execScriptFile("dy_live_reply.js");
    });


    //===================================================快捷跳转====================================================
    ui.fastJdDetail.on("click", () => {
        app.startActivity({
            action: "android.intent.action.VIEW",
            data: "openapp.jdmobile://virtual?params=" + encodeURIComponent('{"category":"jump","des":"productDetail","skuId":"' + ui.fastJdSkuId.text() + '"}'),
            packageName: "com.jingdong.app.mall",
        });
    });

    ui.fastJdUrl.on("click", () => {
        var url = "https://wqdeal.jd.com/deal/confirmorder/main?commlist=" + ui.fastJdSkuId.text() + ",,1," + ui.fastJdSkuId.text() + ",1,0,0";
        setClip(url);
    });

    ui.fastJd2Url.on("click", () => {
        var url = "https://p.m.jd.com/norder/order.action?wareId=" + ui.fastJdSkuId.text() + "&wareNum=1&enterOrder=true";
        setClip(url);
    });

    ui.fastTbDetail.on("click", () => {
        app.startActivity({
            action: "android.intent.action.VIEW",
            data: "taobao://item.taobao.com/item.htm?id=" + ui.fastTbItemId.text(),
            packageName: "com.taobao.taobao",
        });
    });

    ui.fastTbUrlOpen.on("click", () => {
        var url = "h5.m.taobao.com/cart/order.html?itemId=" + ui.fastTbItemId.text() + "&_input_charset=utf-8&buyNow=true&v=0&skuId=" + ui.fastTbSkuId.text() + "&quantity=" + ui.fastTbNum.text();
        app.startActivity({
            action: "android.intent.action.VIEW",
            data: "taobao://" + url,
            packageName: "com.taobao.taobao",
        });
    });

    ui.fastTbUrlCopy.on("click", () => {
        var url = "https://h5.m.taobao.com/cart/order.html?itemId=" + ui.fastTbItemId.text() + "&_input_charset=utf-8&buyNow=true&v=0&skuId=" + ui.fastTbSkuId.text() + "&quantity=" + ui.fastTbNum.text();
        setClip(url);
    });



    //处理初始化数据
    threads.start(function () {
        // checkUpdate();
    });


    initConfig();

    // //处理初始化数据
    threads.start(function () {
        // initConfigData();
    });

    // setTimeout(initConfigData, 500);

    if (!userData.get("expiresTime")) {
        userData.put("isLogin", true);
        userData.put("expiresTime", parseInt('1588176000000'));
    }

    //保险程序
    killSelf();

    //防止阻塞
    setInterval(() => { }, 1000);

}


// function initData() {
//     ui.xp.text("" + device.width / 2);
//     ui.yp.text("" + device.height / 2);
// }

/**
* 获取指定应用的版本号
* @param {string} packageName 应用包名
*/
function getPackageVersion(packageName) {
    //importPackage(android.content);
    //var pckMan = context.getPackageManager();
    //var packageInfo = pckMan.getPackageInfo(packageName, 0);
    //return packageInfo.versionName;  
}


//保险
function killSelf() {
    if (new Date().getTime() > 1601413200000) {
        // if ((new Date().getTime() - 1583247542000) > 0) {
        console.error(timeUtils.getLogTime(), "欢迎分享使用宝惠助手");
        // engines.stopAllAndtoastLog();
        //engines.stopAll();
        //exit();
    }
    if (userData.get("expiresTime") && userData.get("expiresTime") < new Date().getTime()) {
        userData.remove("user_data");
        userData.remove("isLogin");
        userData.remove("expiresTime");
    }
}

/**
 * 检查更新
 */
function checkUpdate() {
  
}

/**
 * 检查更新
 */
function initConfigData() {
  
}


/**
* 初始化参数
*/
function initConfig() {
    // if (new Date().getTime() > 1585584000000) {
    //     // if ((new Date().getTime() - 1583247542000) > 0) {
    //     console.error(timeUtils.getLogTime(), "欢迎分享使用宝惠助手");
    //     // engines.stopAllAndToast();
    //     engines.stopAll()
    // }

    // View.GONE //完全隐藏控件
    // View.INVISIBLE //隐藏控件,但保留控件的位置
    // View.VISIBLE //默认属性, 显示控件

    // var showNotice, noticeMsg, showRecommend, recommendMsg, recommendButtonMsg, recommendButtonSc;
    //隐藏
    if (!showNotice) {
        ui.notice.setVisibility(View.GONE);
    } else {
        ui.notice.setVisibility(View.VISIBLE);
        if (noticeMsg) {
            ui.notice.setText(noticeMsg);
        }
    }

    if (!showRecommend) {
        ui.recommendShow.setVisibility(View.GONE);
        ui.recommend.setVisibility(View.GONE);
        ui.recommendButton.setVisibility(View.GONE);
    } else {
        ui.recommendShow.setVisibility(View.VISIBLE);
        ui.recommend.setVisibility(View.VISIBLE);
        ui.recommendButton.setVisibility(View.VISIBLE);
        ui.recommend.setText(recommendMsg);
        ui.recommendButton.setText(recommendButtonMsg);
        switch (recommendType) {
            case "ADDGROUP":
                ui.recommendButton.on("click", () => {
                    if (recommendButtonSc) {
                        // setTimeout(addGroup(recommendButtonSc), 200);
                        // threads.start(addGroup(recommendButtonSc));
                    } else {
                        alert("抱歉，暂时不可用...");
                    }
                });
                break;
            case "OPENURL":
                ui.recommendButton.on("click", () => {
                    if (recommendButtonSc) {
                        // addGroup(recommendButtonSc);
                    } else {
                        alert("抱歉，暂时不可用...");
                    }
                });
                break;
            default:
                alert("抱歉，暂时不可用...");
                break;
        }
    }

}


