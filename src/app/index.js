var ng = require('@angular/core');
var ngPlatformBrowser = require('@angular/platform-browser');
var uiRouter = require('ui-router-ng2');
var myRoutes = require('./routes');

var HelloComponent = require('./hello');

module.exports = uiRouter.UIRouterModule({
  imports: [
    ngPlatformBrowser.BrowserModule
  ],
  declarations: [
    HelloComponent
  ],
  providers: [
    uiRouter.provideUIRouter({configClass: myRoutes.MyUIRouterConfig})
  ],
  states: myRoutes.STATES,
  bootstrap: [uiRouter.UIView]
})(
  ng.Class({
    constructor: function () {}
  })
);
