// 将所有选择器上添加指示不翻译的属性 translate="no"

const selectors = ['svg', '#landing']

selectors.forEach((selector) => {
	document.querySelectorAll(selector).forEach((el) => {
		// 添加 translate="no" 属性
		el.setAttribute('translate', 'no')
		// 添加 notranslate 类名
		el.classList.add('notranslate')
	})
})
