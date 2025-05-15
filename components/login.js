export function gologin (url){
	const hasAccount = uni.getStorageSync('account');
	if(hasAccount){
		uni.navigateTo({
			url
		})
	}else{
		uni.showToast({
			title:'登录过期或未登录',
			icon:'none'
		})
		setTimeout(()=>{
			uni.navigateTo({
				url:'/pages/login/login'
			})
		},1000)
		
	}
	
}