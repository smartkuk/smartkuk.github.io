/**
 * 화면 라우팅 설정
 */
app.config(function($routeProvider, $locationProvider) {
	
	$routeProvider.when('/', {
		templateUrl: 'views/notice.html'
	});
	
	$routeProvider.when('/generators/uuid', {
		templateUrl: 'views/generators/uuid.html'
	});
	
	$routeProvider.when('/converters/prettyjson', {
		templateUrl: 'views/converters/convertPrettyJson.html'
	});
	
});