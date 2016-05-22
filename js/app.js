var app=angular.module("myapp",["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/state1");

	$stateProvider.state("state1",{
		url:"/state1",
		views:{
			"viewA":{templateUrl:"state1.html"},
			"viewB":{templateUrl:"state2.html"}
		}
		
	}).state("state1.list",{
		url:"state1.list",
		templateUrl:"state1.list.html"
	}).
	state("state2",{
		url:"/state2",
		views:{
			"viewB":{templateUrl:"state1.html"},
			"viewA":{templateUrl:"state2.html"}
		}
	}).
	state("state2.list",{
		url:"/stat2.list",
		templateUrl:"state2.list.html"
	});
});
