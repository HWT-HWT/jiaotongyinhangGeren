<template>
	<view class="datalis">
		<view class="datalis-title">
			<span>还款计划</span>
			<span>还款金额</span>
			<span class="all" @click="zzcIsTrue">{{titleName}} <image :style="{'transform':istrue ? 'scaleY(1)':'scaleY(-1)'}" src="@/static/sogou_up_icon_normal.png" mode=""></image></span>
		</view>
		
		<view class="zzc" v-if="istrue">
			<view class="zzc-list-bg" style="background-color: #fff;">
				<view class="zzc-list" v-for="(item,index) in Zzclist" :key="item.id" @click="zzcBtn(item.id,item.name)">
					<view class="text">
						{{item.name}}
					</view>
					<view class="icon" v-if="item.active">
						<uni-icons type="checkmarkempty" size="15" color='#4a79e0'></uni-icons>
					</view>
				</view>
			</view>
		</view>
		
		<view v-if="zzcId > 0">
			<YSteps lineNum='0' color='#fff' backgroundColor='#1279ef' :infoList='list'></YSteps>
		</view>
	</view>
</template>

<script>
	import YSteps from '@/components/Y-Steps/Y-Steps.vue'
	export default {
		data() {
			return {
				list: [
                        {
							time: '2024.07.21',
                            date: '2,925.33',
                            info: '含本金0.00+利息2,925.33',
							over: '已结清'
                        },
						{
							time: '2024.08.21',
						    date: '3,375.00',
						    info: '含本金0.00+利息3,375.00',
							over: '已结清'
						},
						{
							time: '2024.09.21',
						    date: '3,375.00',
						    info: '含本金0.00+利息3,375.00',
							over: '已结清'
						},
						{
							time: '2024.10.21',
						    date: '3,375.00',
						    info: '含本金0.00+利息3,375.00',
							over: '已结清'
						},
						{
							time: '2024.11.21',
						    date: '3,375.00',
						    info: '含本金0.00+利息3,375.00',
							over: '已结清'
						},
						{
							time: '2024.12.21',
						    date: '3,375.00',
						    info: '含本金0.00+利息3,375.00',
							over: '已结清'
						},
						{
							time: '2025.01.21',
						    date: '3,375.00',
						    info: '含本金0.00+利息3,375.00',
							over: '待还'
						},
						{
							time: '2025.02.21',
						    date: '3,375.00',
						    info: '含本金0.00+利息3,375.00',
							over: '待还'
						},
						{
							time: '2025.03.21',
						    date: '3,375.00',
						    info: '含本金0.00+利息3,375.00',
							over: '待还 '
						},
						{
							time: '2025.04.21',
						    date: '3,375.00',
						    info: '含本金0.00+利息3,375.00',
							over: '待还'
						},
						{
							time: '2025.05.21',
						    date: '3,375.00',
						    info: '含本金0.00+利息3,375.00',
							over: '待还'
						},
						{
							time: '2025.06.21',
						    date: '1,353,854.25',
						    info: '含本金1,350,000.00+利息3,854.25',
							over: '待还'
						},
                    ],
					Zzclist:[
						{id:1,name:'全部',active:false},
						{id:2,name:'代还款',active:false},
						{id:3,name:'已还款',active:false},
						{id:4,name:'欠款',active:false}
					],
					istrue:false,
					titleName:'全部',
					zzcId:''
			};
				
		},
		components:{
			YSteps
		},
		methods:{
			zzcBtn(id,name){
				this.Zzclist.map(item=>item.active=false)
				this.Zzclist.find(item=>item.id === id).active = !this.Zzclist.find(item=>item.id === id).active
				setTimeout(()=>{
					this.istrue = false
				},200)
				this.titleName = name 
				this.zzcId = id
			},
			zzcIsTrue(){
				this.istrue = !this.istrue
			},
		},
	}
</script>

<style lang="scss" scoped>
	.datalis{
		width: 100%;
		// height: 100vh;
		background-color: #f5f6f8;
		.datalis-title{
			width: 90%;
			display: flex;
			justify-content: space-between;
			margin: 0 auto;
			font-size: 30rpx;
			span{
				margin-top: 28rpx;
				margin-bottom: 15rpx;
				color: #868686;
			}
			image{
				width: 25rpx;
				height: 20rpx;
				margin-left: 10rpx;
				transform: scaleY(-1);
			}
			
		}
		.zzc{
			 width: 100%;
			 height: 0%;
			 position: absolute;
			 background: rgba(0, 0, 0, 0.3);
			 z-index: 999;
			 transition: all 1s;
			 .zzc-list{
				 width: 90%;
				 margin: 0 auto;
				 display: flex;
				 justify-content: space-between;
				 color: #000;
				 font-size: 28rpx;
				 padding:25rpx 0;
				 background-color: #fff;
				 transition: all 1s;
			 }
		}
	}
</style>
