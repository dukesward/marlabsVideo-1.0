define(['angular'], function(angular) {
	return angular.module("videoApp.Filters", [])
	.filter("extractItem", function() {
		//according to input from view, data is formatted;
		return function(input) {
			var temp = [];
			input.items.forEach(function(item, i) {
				temp.push(item);
			})
			return temp;
		}
	});
});
