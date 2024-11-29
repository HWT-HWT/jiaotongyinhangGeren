<template>
	<view class="bannerSwiper">
		<uni-swiper-dot class="uni-swiper-dot-box" :info="list" :current="current" :mode="mode" :dotsStyles='dianStyles'
			:dots-styles="dotsStyles" field="content">
			<swiper class="swiper-box" @change="change" :current="swiperDotIndex" autoplay="true" circular="true">
				<swiper-item v-for="(item, index) in list" :key="index">
					<view class="swiper-item" :class="'swiper-item' + index">
						<image style="" :src="item.url" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
	</view>
</template>

<script>
	export default {
		name:"bannerSwiper",
		data() {
			return {
				modeIndex: -1,
				styleIndex: -1,
				current: 0,
				mode: 'default',
				dotsStyles: {},
				swiperDotIndex: 0,
				info: [
					{
						url: '../../static/bg-1.png',
					},
					{
						url: '../../static/bg-3.png',
					},
					{
						url: '../../static/bg-1.png',
					}
				],
			};
		},
		methods:{
			change(e) {
					this.current = e.detail.current
				},
				selectStyle(index) {
					this.dotsStyles = this.dotStyle[index]
					this.styleIndex = index
				},
				selectMode(mode, index) {
					this.mode = mode
					this.modeIndex = index
					this.styleIndex = -1
					this.dotsStyles = this.dotStyle[0]
				},
				clickItem(e) {
					this.swiperDotIndex = e
				},
				onBanner(index) {
					console.log(22222, index);
				}
		},
		props:{
			list:{
				type:[Array,Object]
			},
			dianStyles:{
				type:Object
			}
		}
	}
</script>

<style lang="scss">
	.bannerSwiper{
		width: 100%;
		height: 100%;
		.uni-swiper-dot-box{
			width: 100%;
			height: 100%;
			.swiper-box{
				width: 100%;
				height: 100%;
				.swiper-item{
					width: 100%;
					height: 100%;					
					image{
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
					}
				}
				
			}
		}
	}
	
</style>