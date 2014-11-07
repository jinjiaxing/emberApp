/**
*当你的应用程序启动时，Ember会查找下面几个对象:
 App.ApplicationRoute
 App.ApplicationController
 application模板
*/
App.ApplicationController = Ember.ArrayController.extend({
	init:function(){
		this.transitionToRoute('test');
	}
});
