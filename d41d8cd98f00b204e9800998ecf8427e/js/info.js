
/***** 侧边栏样式2016-8-2 *****/
#fixed{position:fixed;bottom:0;right:0;z-index:9999;}
*{margin:0;padding:0;font-style:normal;word-break:break-all;word-wrap:break-word;}
ul,li{list-style: none;}

.side-barBox{
	position:fixed;
	right:0;
	bottom:0;
	height:100%!important;
	top:0;
	width: 70px;
	/* background:#fff; */
	z-index:100;
	filter: progid:DXImageTransform.Microsoft.Shadow(color='#efeeee', Direction=220, Strength=2);
}
.side-barBox .side-bar{
	position:absolute;
	right:0;
	top:0;
	bottom:0;
	width: 70px;
	/* background:#fff; */
	/* -webkit-box-shadow: -1px 0 2px 0 rgba(0, 0, 0, 0.1); */
	-moz-box-shadow: -1px 0 2px 0 rgba(0, 0, 0, 0.1);
	/* box-shadow: -1px 0 2px 0 rgba(0, 0, 0, 0.1); */
}
.side-bar > ul{
	position:absolute;
	left:0;
	right:0;
	text-align:center;
}
.side-bar > ul > li{
	position:relative;
	width:100%;
	-webkit-transition: all 0.2s ease;
	-moz-transition: all 0.2s ease;
	-o-transition: all 0.2s ease;
	transition: all 0.2s ease;
	/* border-bottom:1px solid #e9e9e9; */
	/* cursor:pointer;*/
	border-radius: 0px;
	margin: 0 0 5px 0;
}
.side-bar > ul > li > a{cursor:default;}
.side-bar > ul > li .introduce{display:none;}
.side-bar > ul > li:hover{background:#0082df;}
.side-bar > ul > li:hover .introduce{display:block;}
.bar-menu-top > li > a > span{
	color: #FFFFFF;
	display:block;
	width: 50px;
	margin: 0 auto;
}
.side-bar > ul > li:hover > a span{color:#fff;}


.bar-menu-top .vip em {
    width: 50px;
    height: 50px;
	background-color:#00AF04;
    display: block;
}

.bar-menu-top .phone em {
    width: 50px;
    height: 50px;
    background-color:#00AF04;
	display: block;
}
.side-bar ul li em{
	display:block;
}
.bar-menu-top li em{margin:0 auto 6px;}
.bar-menu-contact li{padding-top:20px;height:30px;}
.bar-menu-contact li.last-child{border-bottom:none;}
.bar-menu-contact li em{margin:0 auto 6px;}


.side-bar .bar-menu-top {
    bottom: 43%;
    z-index: 8;
    /* background: #fff; */
    /* min-height: 352px; */
}

.side-bar .bar-menu-top .vip {
    /* border-top: 1px solid #e9e9e9; */
    padding: 10px 0;
    line-height: 17px;
}

.bar-menu-top .vip .introduce {
    /* width: 448px; */
    background: #fff;
    top: 0px;
}

.bar-menu-top li .introduce {
    position: absolute;
    background: #fff;
    z-index: 7;
    -moz-box-shadow: -1px 0px 4px 2px #d9d9d9;
    -ms-box-shadow: -1px 0px 4px 2px #d9d9d9;
    -webkit-box-shadow: -1px 0px 4px 2px #d9d9d9;
    box-shadow: -1px 0px 4px 2px #d9d9d9;
    filter: progid:DXImageTransform.Microsoft.Shadow(color='#d9d9d9', Direction=220, Strength=5);
    right: 70px;
    top: -73px;
}

.vip .introduce i {
    display: block;
    margin: 20px auto 15px;
    width: 62px;
    height: 180px;
    background:none;
}

.qq .introduce i {
    display: block;
    margin: 20px auto 15px;
    width: 62px;
    height: 180px;
    background:none;
}

.qq .introduce p {
    border-bottom: 1px solid #e2e2e2;
    color: #616161;
    font-size: 14px;
}

.bar-menu-top .introduce i {
    display: block;
}
.bar-menu-top .introduce span {
    display: block;
    font-weight: bold;
    font-size: 15px;
    color: #2b2b2b;
    padding-bottom: 8px;
}


.side-bar > ul > li:hover {
    background: #0082df;
}

.bar-menu-top .auction {
    height: 65px;
    padding-top: 25px;
}

.bar-menu-top .phone {
    padding: 10px 0;
	background-color:#00AF04;
}





.phone .introduce p {
    border-bottom: 1px solid #e2e2e2;
    color: #616161;
    font-size: 14px;
}

.bar-menu-top .phone .introduce {
    width: 140px;
    top: 0px;

    right: 70px;
}





/*客服信息*/
.phone .introduce .service-title{
	height:40px;
	line-height:40px;
	background-color:#f7f7f7;
	text-align:center;
}
.phone .introduce .service-info{padding:0 5px;}
.introduce .service-info p{padding-top:6px; padding-bottom:6px;font-family:Arial, Helvetica, sans-serif; font-size:15px; color:#FF0000;}
.phone .introduce .qq-17{
    display: inline-block;
    height: 120px;
    width: 96px;
	padding-top:2px;
	padding-bottom:0px;
}
.introduce .qq-17 p{padding-top:1px; padding-bottom:1px;}
/*客服信息*/
/*联系方式等*/
.bar-menu-contact li .introduce{
	position:absolute;
	background:#fff;
	z-index:6;
	filter: progid:DXImageTransform.Microsoft.Shadow(color='#c0bebf', Direction=220, Strength=5);
}
.side-bar .bar-menu-contact{bottom:0;z-index:7;background:#fff;}







