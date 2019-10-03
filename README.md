# This repository contains simple NodeJS service which returns some information(followers, likes, etc...) about specified user of Instagram

## Run commands

1. To start the app locally you need to have NodeJS installed on your machine

	# Install dependencies
		npm install
	# Run the application
		npm start

2. Second approach is to run the application with docker container

	# Build docker image with application
		docker build -t instagram-getter:0.0.1 .
	# Run docker image
		docker run -p 8080:8080 instagram-getter:0.0.1

