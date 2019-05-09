// 获取当前网页宽度判断平台
export const device = () => {
	let bodyWidth = document.getElementsByTagName('body')[0].clientWidth
	if (bodyWidth > 767) {
		return 'web'
	} else {
		return 'wap'
	}
}

// 添加动画往上显示
export const animation = (scrollTop) => {
	let boxTions = document.getElementsByClassName('animation-show')
	for (let i = 0; i < boxTions.length; i++) {
		if (scrollTop + window.innerHeight >= boxTions[i].offsetTop + 170) {
			boxTions[i].classList.add('show')
		} else {
			boxTions[i].classList.remove('show')
		}
	}
}
export const windowScroll = () => {
	window.addEventListener('scroll', function () {
		let scroll = document.documentElement.scrollTop || document.body.scrollTop
		animation(scroll)
	})
}
