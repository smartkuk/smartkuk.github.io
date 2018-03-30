/**
 * 랜덤 데이터 서비스
 */
app.service('RandomDataService', function($http, $log) {
	
	var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
	var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
	var alphabets = [];
	
	Array.prototype.push.apply(alphabets, lowercase);
	Array.prototype.push.apply(alphabets, uppercase);
	
	var digits = ['0','1','2','3','4','5','6','7','8','9'];
	var alphnumerics = [];
	
	Array.prototype.push.apply(alphnumerics, alphabets);
	Array.prototype.push.apply(alphnumerics, digits);
	
	var gtldArray = ['.com', '.org', '.net', '.io'];
	
	/**
	 * uuid 생성 stackoverflow 참조
	 * https://stackoverflow.com/a/105074
	 */
	this.uuid = function () {
		
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}
		
		var createdUuid = s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
		return createdUuid;
	};
	
	/**
	 * 온라인 UUID 생성 사이트 이용
	 */
	this.useGenerator = function (count) {
		if(count == null || count < 1 || !angular.isNumber(count)) {
			count = 1
		}
		return $http({
			method : 'GET',
			url : 'https://www.uuidgenerator.net/api/version4/' + count
		});
	};
	
	this.randomEmail = function (count) {
		
		var emailIdSize = 5;
		var domainSize = 5;
		var emails = [];
		
		for(var i = 0; i < count; i++) {
			emails.push(randomId(emailIdSize) + '@' + randomDomain(domainSize));
		}
		
		return emails;
	};
	
	this.randomId = function (size) {
		
		if(size == null || size < 1 || !angular.isNumber(size)) {
			size = 5;
		}
		
		var emailId = '';
		for(var i = 0; i < size; i++) {
			var idx = -1;
			if(i == 0) {
				idx = Math.floor(Math.random() * alphabets.length) + 1;
				emailId += alphabets[idx];
			} else {
				idx = Math.floor(Math.random() * alphnumerics.length) + 1;
				emailId += alphnumerics[idx];
			}
		}
		
		return emailId;
	};
	
	/**
	 * 무작위 도메인을 생성
	 * 최소 3자리의 문자열을 생성하며, 최상위 도메인은 '.com', '.org', '.net', '.io' 랜덤하게 돌린다.
	 */
	this.randomDomain = function (size) {
		
		if(size == null || size < 3 || !angular.isNumber(size)) {
			size = 3;
		}
		
		var domainstr = '';
		for(var i = 0; i < size; i++) {
			var idx = -1;
			if(i == 0) {
				idx = Math.floor(Math.random() * alphabets.length) + 1;
				domainstr += alphabets[idx];
			} else {
				idx = Math.floor(Math.random() * alphnumerics.length) + 1;
				domainstr += alphnumerics[idx];
			}
		}
		
		domainstr += gtldArray[Math.floor(Math.random() * gtldArray.length) + 1]
		return domainstr;
	};
});