# nightWatch-automation

Run the driver manually for fatser test script execution, need to be downloaded an dput in same directory. 

Also browser specific drivers needs to be downloaded, 
#chromedriver http://nightwatchjs.org/gettingstarted#browser-drivers-setup

java -jar selenium-server-standalone-2.39.0.jar

then strat the nightwatch with test scripts indivisually or pass the folder. 

Ex: nightwatch tests/googletest.js

All the elemet can be accesss similar to we add styles, #idname, .classname, div.g:first-child