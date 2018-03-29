/**
 * 화면 라우팅 설정
 */
app.config(function($routeProvider, $locationProvider) {
	
	$routeProvider.when('/routeTest', {
		templateUrl: 'views/routeTest.html'
	});
	
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
});