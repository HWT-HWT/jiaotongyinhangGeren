<template>
	<view class="community">
		<view class="community-title">
			<occupy></occupy>
			<TaberTitle :TaberTitle='TaberTitle' :isTrue='true'>
				<image src="../../static/user.png" mode=""></image>
				主页
			</TaberTitle>
			<z-tabs :list="communityList" scroll-count='6' :barStyle='{"background":"#006ae9"}' active-color='#000' bg-color='none'></z-tabs>
		</view>
		
		<view class="community-occupy"></view>
		
		<view class="TitleBox-image-money">
			<view class="Maximage">
				<image src="@/static/live-recommend-6.png" mode=""></image>
			</view>
		</view>
		
		<view class="quotation">
			<view class="quotation-title">
				<text class="quotation-title-left">热门行情</text>
				<text class="quotation-title-rigth">更多</text>
			</view>
			<view class="quotation-text">
				<view class="quotation-text-left">
					<p class="top">上升指数</p>
					<p class="footer">3348.20</p>
					<p class="footer">+6.60 +0.23%</p>
				</view>
				<view class="quotation-text-left">
					<p class="top">深证成指</p>
					<p class="footer">10670.79</p>
					<p class="footer">+62.47 +0.58%</p>
				</view>
				<view class="quotation-text-left">
					<p class="top">创业板指</p>
					<p class="footer">2233.33</p>
					<p class="footer">+9.45 +0.45%</p>
				</view>
			</view>
		</view>
	
		<view class="vote">
			<view class="title">
				年末投资选什么?
			</view>
			<view class="miniTitle">
				<p><uni-tag text="单选" type="primary" size="mini" custom-style="background-color: #fff; border-color: #fff; color: #55ff00; font-weight:bold;margin-left:10rpx"/>1804人参与</p>
				<p>12-31截止</p>
			</view>
			
			<view class="vote-list">
				股票
			</view>
			<view class="vote-list">
				债券
			</view>
			<view class="vote-list">
				全都要
			</view>
		</view>
		
		<view class="uni-padding-wrap">
		    <!-- 评论区 start -->
		    <view class="uni-comment">
		        <view class="uni-comment-list">
		            <view class="uni-comment-body">
		                <view class="uni-comment-top">
							<view class="uni-comment-face">
							    <image src="@/static/log.png" mode="widthFix"></image>
							</view>
		                    <text>平安基金 <br> <text style="color: #999;">1小时前·股债双优，迅速崛起的新势力</text></text>
		                </view>
		                 <view class="uni-comment-content" style="font-size: 35rpx;">平安基金财经早餐(20241202)</view>
		                <view class="uni-comment-content">【行情】上周市场主流指数呈震荡走势。上证指数周涨幅1.81%，深证成指周涨幅1.66%，创业板指周涨幅2.23%，中证A500指....</view>
						
						<view class="uni-comment-btn">
							<view class="">
								<image src="@/static/nav_share.png" mode=""></image>
								<image src="@/static/notice_message_top.png" mode=""></image>
								<image src="@/static/z.png" mode=""></image>
							</view>
							
							<view class="">
								<image src="../../static/gd.png" mode=""></image>
							</view>
						</view>
						
		            </view>
		        </view>
		    </view>
		</view>
	</view>
</template>

<script>
	import occupy from "../../components/occupy.vue";
	import TaberTitle from "@/components/TaberTitle.vue"
	export default {
		data() {
			return {
				TaberTitle:['../../static/nav_service.png'],
				communityList:['关注','推荐','讨论','视频','质询','财富'],
			};
		},
		components:{
			TaberTitle,
			occupy
		}
	}
</script>

<style lang="scss" scoped>
	.community{
		width: 100%;
		// height: 100vh;
		background-color: #f7f7f7;
		.community-title{
			position: fixed;
			top: 0;
			width: 100%;
			z-index: 999;
			background-color: #fff;
			image{
				margin-right: 10rpx;
				width: 45rpx;
				height: 45rpx;
			}
		}
		.community-occupy{
			height: 251rpx;
		}
		.TitleBox-image-money{
			width: 95%;
			padding-bottom: 20rpx;
			margin:  30rpx auto;
			.Maximage{
				display: flex;
				justify-content: center;
				align-items: center;
				image{
					width: 100%;
					padding: 0rpx 10rpx;
					height: 170rpx;
				}
			}
		}
		.quotation{
			width: 90%;
			padding:20rpx;
			background-color: #fff;
			border-radius: 10px;;
			padding-bottom: 60rpx;
			margin:  0 auto;
			.quotation-title{
				padding: 0rpx 15rpx;
				font-size: 35rpx;
				display: flex;
				justify-content: space-between;
				.quotation-title-left{
					font-weight: bold;
				}
				.quotation-title-rigth{
					font-size: 23rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #888;
				}
			}
			.quotation-text{
				width: 100%;
				height: 140rpx;
				// margin-top: 20rpx;
				display: flex;
				justify-content: space-between;
				border-radius:10rpx;
				margin-top: 5rpx;
				.quotation-text-left{
					// width: 48%;
					height: 100%;
					font-size: 25rpx;
					display: flex;
					margin-top: 10rpx;
					flex-wrap: wrap;
					justify-content: center;
					background-color: #fff5f4;
					border: 5rpx solid #fff; 
					padding: 10rpx 20rpx;
					.top{
						display: flex;
						align-items: center;
						width: 100%;
						font-weight: bold;
						font-size: 28rpx;
					}
					.footer{
						width: 100%;
						display: flex;
						align-items: center;
						color:red;
					}
				}
				.quotation-text-rigth{
					border: 5rpx solid #fff; 
					// width: 48%;
					height: 100%;
					font-size: 25rpx;
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					background-color: #fff5f4;
					padding: 10rpx 0;
					.footer{
						color:red;
					}
				}
			}
		}
		.vote{
			width: 95%;
			height: 400rpx;
			// border: 1px solid;
			background-color: #fff;
			border-radius: 10rpx;
			margin:  0 auto;
			margin-top: 20rpx;
			.title{
				font-size: 35rpx;
				padding: 20rpx 30rpx;
				font-weight: bold;
			}
			.miniTitle{
				font-size: 25rpx;
				width: 95%;
				color: #888;
				display: flex;
				justify-content: space-between;
			}
			.vote-list{
				width: 90%;
				background-color: #ececec;
				margin: 20rpx auto;
				padding: 20rpx;
				border-radius: 10rpx;
				font-size: 25rpx;
				color: #222;
			}
		}
		
		.uni-padding-wrap {
			width: 90%;
		    padding: 10upx;
			margin: 0 auto;
			margin-top: 20rpx;
			background-color: #fff;
			border-radius: 10rpx;
		}
		
		view {
		    font-size: 28upx;
		}
		
		.uni-comment {
		    padding: 5rpx 0;
		    display: flex;
		    flex-grow: 1;
		    flex-direction: column;
		}
		
		.uni-comment-list {
		    flex-wrap: nowrap;
		    padding: 10rpx 0;
		    margin: 10rpx 0;
		    width: 100%;
		    display: flex;
		}
		
		.uni-comment-face {
		    width: 70upx;
		    height: 70upx;
		    border-radius: 100%;
		    margin-right: 20upx;
		    flex-shrink: 0;
		    overflow: hidden;
		}
		
		.uni-comment-face image {
		    width: 100%;
		    border-radius: 100%;
		}
		
		.uni-comment-body {
		    width: 100%;
			.uni-comment-btn{
				width: 100%;
				align-items: center;
				display: flex;
				justify-content: space-between;
				margin-top: 20rpx;
				image{
					width: 40rpx;
					height: 40rpx;
					padding: 0 40rpx;
				}
			}
		}
		
		.uni-comment-top {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
		    line-height: 1.5em;
		    // justify-content: space-between;
		}
		
		.uni-comment-top text {
		    color: #222;
		    font-size: 28rpx;
		}
		
		.uni-comment-date {
			width: 100%;
		    line-height: 38upx;
		    flex-direction: row;
		    justify-content: space-between;
		    display: flex !important;
		    flex-grow: 1;
			color: #999;
			font-size: 25rpx;
		}
		
		.uni-comment-date view {
		    color: #999;
		    font-size: 20rpx;
		    line-height: 38upx;
		}
		
		.uni-comment-content {
		    line-height: 1.6em;
		    font-size: 30rpx;
		    padding: 8rpx 20rpx;
		}
		
		.uni-comment-replay-btn {
		    background: #FFF;
		    font-size: 24upx;
		    line-height: 28upx;
		    padding: 5rpx 20upx;
		    border-radius: 30upx;
		    color: #333 !important;
		    margin: 0 10upx;
		}
	}
</style>
