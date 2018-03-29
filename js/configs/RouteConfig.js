/**
 * 화면 라우팅 설정
 */
app.config(function($routeProvider, $locationProvider) {
	
	$routeProvider
	
	.when('/Book/:bookId', {
		templateUrl: 'book.html',
		controller: 'BookController',
		resolve: {
			delay: function($q, $timeout) {
				var delay = $q.defer();
				$timeout(delay.resolve, 1000);
				return delay.promise;
			}
		}
	})
	.when('/Book/:bookId/ch/:chapterId', {
		templateUrl: 'chapter.html',
		controller: 'ChapterController'
	});

	$locationProvider.html5Mode(true);
});