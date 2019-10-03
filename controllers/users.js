const Instagram = require('instagram-web-api');
const instagramClient = new Instagram({username: '', password: ''});

module.exports = async (req, res) => {
	try {
    	const user = await instagramClient.getUserByUsername({ username: req.params.username });
    	const posts = [];
    	for (let i = 0; i < user.edge_owner_to_timeline_media.edges.length && i < 6; i++) {
    		posts.push({
    			url: user.edge_owner_to_timeline_media.edges[i].node.display_url,
    			id: user.edge_owner_to_timeline_media.edges[i].node.id
    		});
    	}

	    res.json({
    		name: user.full_name,
    		description: user.biography,
    		followers: user.edge_followed_by.count,
    		following: user.edge_follow.count,
    		posts,
    	});
	} catch(err) {
		console.error('Error occured while fetching data from instagram. request parameters: ', JSON.stringify(req.params));
		console.error('error: ', err.message);
		res.status(500).end('Internal server error');
	}
};
