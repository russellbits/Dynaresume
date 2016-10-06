var ng = require('@angular/core');

var HelloComponent = require('./hello');

exports.STATES = [
  {
    name: 'App',
    url: '/',
    component: HelloComponent
  }
];

exports.MyUIRouterConfig = ng.Class({
  constructor: function () {},

  configure: function (uiRouter) {
    uiRouter.urlRouterProvider.otherwise(function () {
      return uiRouter.stateService.go('App');
    });
  }
});
