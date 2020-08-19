const ghpages = require('gh-pages');

// replace with your repo url
ghpages.publish(
	'public',
	{
		branch: 'release',
		repo: 'https://github.com/SonOfSafwat/blog.git',
	},
	() => {
		console.log('Deploy Complete!');
	}
);
