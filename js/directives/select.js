/**
 * input type="text" 태그에 달아놓으면 클릭시 안에 문자열을 모두 드레그한 상태로 포커싱
 */
app.directive('select', ['$window', function ($window) {
	return function (scope, element, attrs) {
		element.bind('click', function () {
			if (!$window.getSelection().toString()) {
				this.setSelectionRange(0, this.value.length);
			}
		});
	};
}]);