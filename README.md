# ampuis-tennis-club
Ampuis Tennis Club - http://www.ampuistennisclub.fr

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

Made with angularJS-1.x
Source file in app/ directory


## Dev env
```
#npm install -g grunt-cli bower yo generator-karma generator-angular
sudo docker run --label yo-angular \
    -it --publish 4000:4000 \
    --volume /vagrant/ampuis-tennis-club:/src \
    munjalpatel/yo-angular bash

# Test dist
sudo docker run --rm --name nginx --publish 9000:80 --volume /vagrant/ampuis-tennis-club/dist:/usr/share/nginx/html:ro nginx

```
## Vagrant tip for links on windows host inside docker
```
npm config set bin-links false
```

## Make a new route
```
yo angular:route myroute
```

## Build & development

Run `grunt --force` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.


### Fixe font-awesome 
Add the css file in bower_components/font-awesome/bower.json
```
  "main": [
    "less/font-awesome.less",
    "scss/font-awesome.scss",
    "css/font-awesome.css"
  ],

```

