const Instagram = require('instagram-web-api');
const instagramClient = new Instagram({username: '', password: ''});

module.exports = async (req, res) => {
	try {
		console.log('Request received on users endpoint with parameters: ', JSON.stringify(req.params))

    	const user = await instagramClient.getUserByUsername({ username: req.params.username });
    	const posts = [];
    	// We have to return image url and id for the first 6 posts of user if they are exist
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
		console.error('Error occured while fetching data from instagram: ', err.message);
		res.status(500).end('Internal server error');
	}
};
