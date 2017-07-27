module.exports = {
  'Demo test Google' : function (client) {
    client
      .url('https://weather.com')
      .waitForElementVisible('body', 1000).pause(10000)
     // .assert.containsText('Weather')
     // .assert.visible('input[type=text]')
      .setValue('input.input-gvUyyzTM__inputElement__l7M9C', '95117')
      .pause(10000)
      .assert.containsText('ul li a','95117')
      .end();
  }
};