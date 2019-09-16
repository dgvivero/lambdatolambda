# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* This is a demo for Lambda with SQS 

### How do I get set up? ###

* Summary of set up
After cloning this repo, you need to setup some usefull tools
First install Serveless FrameWork, we are going to use it to test and deploy 
ours app.
`npm install -g serverless`
Then we also need serverless-offline plugin, and all it dependencies

`npm install`
* Configuration
* Dependencies
* Database configuration
* How to run tests
`sls invoke local test`
* Deployment instructions
`sls deploy -s dev`
Now we can invoke the “putsqs” function by running the following commands:
`sls invoke -f putsqs`
`sls logs -f putsqs`
`sls logs -f getsqs`
### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact