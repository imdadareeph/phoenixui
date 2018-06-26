# Demo
[DEMO-URL](http://www.imdadareeph.com/phoenixui/)

# Screenshot
![alt text](http://i66.tinypic.com/k14c52.jpg "preview1")
![alt text](http://i63.tinypic.com/291243m.jpg "preview1")

## [Demo](http://www.imdadareeph.com/phoenixui/login)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.0.

# How to use?

Simply build the image using `$docker build -t imdadareeph/phoenixui:v1.0.0 .`

and run it with all needed parameter:

```console
$ docker run -d -p 8081:8081 imdadareeph/phoenixui:v1.0.0 
```

That's it.

## Templates and others

This image uses templates modified from free site.If known, credit can be given.Please contact @imdadareeph2016@gmail.com

## Environment variables

This image uses following commands for configuration.

|docker commands     |Default value        |Description                                         |
|------------------------|---------------------|----------------------------------------------------|
|`Docker build`    |no default           |$docker build -t imdadareeph/phoenixui:v1.0.0 .|
|`Docker run`    |no default           |docker run -d -p 8081:8081 imdadareeph/phoenixui:v1.0.0            |



# Updates and updating

To update your setup simply pull the newest image version from docker hub and run it.


## Deprecated features

Instead of using imdadareeph/rhel7nodejs9 image, any light nodejs image can be used (e.g. node:alpine)

# License

Everything in [this repository](https://github.com/imdadareeph/phoenixui) is published under [GPL-3](https://spdx.org/licenses/GPL-3.0).

### How to start
**Note** that this seed project requires  **node >=v6.9.0 and npm >=3**.

In order to start the project use:
```bash
$ git clone https://github.com/imdadareeph/phoenixui
$ cd phoenixui
# install the project's dependencies
$ npm install
# watches your files and uses livereload by default run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
$ npm start
# prod build, will output the production application in `dist`
# the produced code can be deployed (rsynced) to a remote server
$ npm run build
```
