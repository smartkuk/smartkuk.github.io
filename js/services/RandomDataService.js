/**
 * 랜덤 데이터 서비스
 */
app.service('RandomDataService', function($log) {
	
	/**
	 * uuid 생성 stackoverflow 참조
	 * https://stackoverflow.com/a/105074
	 */
	this.uuid = function () {
		
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}
		
		var createdUuid = s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
		$log.debug('uuid:', createdUuid);
		return createdUuid;
	};
});