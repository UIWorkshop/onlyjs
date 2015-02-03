A workflow for Workshop Only JavaScript
---

#### Required Preparation

install some node packages for build in the global.

```
npm install -g grunt-cli
```


```
cd onlyjs
npm install
```

#### Workshop Plan

1. Write HTML(DOM) by library [Cheerio](http://cheeriojs.github.io/cheerio/) 
1. Write CSS by library [AbsurdJS](http://absurdjs.com/)
1. Write JavaScript by library [VanillaJS](http://vanilla-js.com/)
1. Write Unit Testing by library [Jasmine](http://jasmine.github.io/)
1. Write Function Testing by library [PioneerJS](http://pioneerjs.com/)
1. Write Build by library [GruntJS](http://gruntjs.com/)

#### Outcome Goal

A static file page that contains structure, skin, logic, unit testing and function testing.

#### Get Start

You can run following command to watch your JavaScript files, and then check them by jshint when you changing them.

```
grunt default
```

or

```
grunt
```


You can run following command to start a server and open the page in a browser.

```
grunt server
```

###### Write HTML

To run `grunt html` to generate HTML file by html.js.

