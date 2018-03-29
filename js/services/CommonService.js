/**
 * 공통서비스
 * 이것 저것 잡일을 한다.
 */
app.service('CommonService', function($log) {
	
	/**
	 * 랩퍼 문자열과 문자열을 받아서 랩퍼 문자열을 양쪽에 붙여서 리턴
	 */
	this.wrapping = function (str, wrapper) {
		if(wrapper == null) {
			wrapper = '';
		}
		return wrapper + str + wrapper;
	};
	
	/**
	 * 구분자, 원본 문자열, 추가 문자열 3개를 받아서 구분자를 추가해야 하는 상황이면 추가를 하고 추가 문자열을 원본 문자열에 붙인다.
	 */
	this.seperating = function (basestring, appending, seperator) {
		if(seperator == null) {
			seperator = '';
		}
		if(appending == null) {
			appending = '';
		}
		return basestring == null || basestring == '' ? appending : basestring + seperator + appending;
	};
});