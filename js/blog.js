var apiURL = 'https://poststatus.com/wp-json/wp/v2/posts/?_embed&per_page=3&author='

/**
 * Posts demo with ability to change author
 */

var posts = new Vue({

	el: '#app',

	data: {
		authors: ['1', '590'],
		currentAuthor: '1',
		posts: null
	},

	created: function() {
		this.fetchData()
	},

	watch: {
		currentAuthor: 'fetchData'
	},

	methods: {
		fetchData: function() {
			var xhr = new XMLHttpRequest()
			var self = this
			xhr.open('GET', apiURL + self.currentAuthor)
			xhr.onload = function() {
				self.posts = JSON.parse(xhr.responseText)
				console.log(self.posts[0].link)
			}
			xhr.send()
		}
	}
})
