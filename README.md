# This repository contains simple NodeJS ervice which returns some information(followers, likes, etc...) about specified user of Instagram

## Run commands

1. To start the app locally you need to install have NodeJS installed on your machine

	. First run 'npm install'
	. Second run 'npm start'

2. Second approach is to run the application with docker container

	# Build docker image with application
		docker build -t instagram-getter:0.0.1
	# Run docker image
		docker run instagram-getter:0.0.1

