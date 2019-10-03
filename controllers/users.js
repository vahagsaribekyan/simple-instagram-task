const Instagram = require('instagram-web-api');
const instagramClient = new Instagram({username: '', password: ''});

module.exports = async (req, res) => {
	try {
    	const user = await instagramClient.getUserByUsername({ username: req.params.username });
	    res.json(user);
	} catch(err) {
		console.error('Error occured while fetching data from instagram. request parameters: ', JSON.stringify(req.params));
		console.error('error: ', err.message);
		res.status(500).end('Internal server error');
	}
};
