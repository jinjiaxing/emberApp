/**
*当你的应用程序启动时，Ember会查找下面几个对象:
 App.ApplicationRoute
 App.ApplicationController
 application模板
*/
var App = window.App = Ember.Application.create();

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');
