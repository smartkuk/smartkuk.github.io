/**
 * 메인 화면 컨트롤러
 */
app.controller('GeneratorCtrl', function($scope, $log, RandomDataService) {

	/**
	 * 화면에서 사용되는 변수
	 */
	$scope.views = {
			generateUuid: {
				count: null,
				wrapCharacter: null,
				separator: null
			}
	};
	
	$scope.createExamples = function () {
		
		var wrapCharacter = $scope.views.generateUuid.wrapCharacter;
		var separator = $scope.views.generateUuid.separator;
		
		if(wrapCharacter == null) {
			wrapCharacter = '';
		}
		
		if(separator == null && $scope.views.generateUuid.count > 1) {
			separator = ',';
		} else if(separator == null) {
			separator = '';
		}
		
		$log.debug('wrapCharacter:', wrapCharacter);
		$log.debug('separator: [' + separator + ']');
		
		if($scope.views.generateUuid.count > 1) {
			return wrapCharacter + 'Generated UUID 1' + wrapCharacter + separator + wrapCharacter + 'Generated UUID 2' + wrapCharacter + ' ...';
		} else {
			return wrapCharacter + 'Generated UUID' + wrapCharacter;
		}
	};
});