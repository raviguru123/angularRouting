var app=angular.module("myapp",["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/state1");
var state1={
		url:"/state1",
		views:{
			"viewA":{templateUrl:"state1.html"},
			"viewB":{templateUrl:"state2.html"}
		}
	}
	$stateProvider.state("state1",state1).state("state1.list1",{
		url:".list1",
		views:{"list1View":{templateUrl:"state1.list.html"}}
	}).state("state1.list2",{
		url:".list2",
		views:{"list2View":{templateUrl:"state2.list.html"}}
	}).
	state("state2",{
		url:"/state2",
		views:{
			"viewB":{templateUrl:"state1.html"},
			"viewA":{templateUrl:"state2.html"}
		}
	}).
	state("state2.list1",{
		url:".list1",
		views:{"list1View":{templateUrl:"state1.list.html"}}
	}).
	state("state2.list2",{
		url:".list2",
		views:{"list2View":{templateUrl:"state2.list.html"},
	}
	});
});;

