/* global angular */

var servicesModule = angular.module('app.services', []);

var MOCK_TASKS = {
	'asdf': {
		name: 'cs hw 5',
		due:1000 * 3600 * 24 + Date.now(),
		workRemaining: 1000 * 3600 * 3,
		importance: 1
	},
	'asdf;lkj': {
		name: 'register for classes',
		due: 1000 * 3600 * 24 * 6 + Date.now(),
		workRemaining:1000 * 3600 * 3,
		importance: 2
	},
	'asdjklfsdjo': {
		name: 'email Alyshia',
		due: 1000 * 3600 * 24 + Date.now(),
		workRemaining: 1000 * 60 * 20,
		importance: 1
	},
	'asdfsddlk': {
		name: 'plan meeting',
		due: 1000 * 3600 * 24 * 6 + Date.now(),
		workRemaining: 1000 * 3600,
		importance: 1.5
	},
	'kfdksla;lkd': {
		name: 'document ticket',
		due: 1000 * 3600 * 24 + Date.now(),
		workRemaining: 1000 * 60 * 30,
		importance: 1
	}
};

servicesModule.factory('MockDataService', [function () {
	var createMockDataSnapshotForTask = function (key) {
		return {
			key: function () { return key; },
			val: function () { return MOCK_TASKS[key]; }
		}
	}
	
	var mockDataService = function (eventName, callback) {
		for (var key in MOCK_TASKS) {
			if (MOCK_TASKS.hasOwnProperty(key)) {
				callback(createMockDataSnapshotForTask(key));
			}
		}
	};
	
	return mockDataService;
}])

.factory('CalculatePriority', [function () {
	var getMillisUntilTaskDue = function (task) {
		return task.due - Date.now();
	}
	
	var calculatePriority = function (task) {
		return task.importance / Math.log(getMillisUntilTaskDue(task) / task.workRemaining);
	};
	
	return calculatePriority;
}])

.service('BlankService', [function(){

}]);
