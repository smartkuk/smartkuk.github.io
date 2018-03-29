/**
 * 화면 라우팅 설정
 */
app.config(function($routeProvider, $locationProvider) {
	
	$routeProvider.when('/routeTest', {
		templateUrl: 'views/routeTest.html'
	});
	
	$routeProvider.when('/generators', {
		templateUrl: 'views/generators/generators.html'
	});
	
});