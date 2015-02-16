module.exports = function(api) {
	api.add({
		body : {
			margin: 0,
			padding: 0
		},
		'.banner': {
			marginTop: 0,
			padding: 0,
			// 'background-color': '#000',
			'height': '80px',
			'.menu-top-nav': {
				'float': 'right',
				li:{
					'float': 'left',
					padding: 10,
					margin: 10,
					'list-style-type': 'none',
				}
			},
		},
		'.head_title': {
			 'position': 'absolute',
		},
		'.menu-main-nav': {
			'list-style-type': 'none',
			'float': 'right',
			li:{
					'float': 'inherit',
					padding: 10,
					margin: 10,
					'list-style-type': 'none',
				}
		},
		'footer': {
			'width': 'inherit',
			'display': 'inline-block'
		}
	});
};