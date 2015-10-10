var createTask;

 createTask = function (name, dueDate, workRem, importance, description) {
    return {
        id:nextTaskId++,
        name:name ? name : '',
        due_date:dueDate ? dueDate : -1,
        work_rem:workRem ? workRem : -1,
        importance:importance ? importance : -1,
        desc:description ? description : ''
    };
};


angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $rootScope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $rootScope.taskList = [];
    $rootScope.taskList.push(createTask("task1", "oct11", 15, 50, "sample_task"));
    $rootScope.taskList.push(createTask("task2", "oct11", 10, 45, "samplasdfasdfasdf"));
    $rootScope.taskList.push(createTask("task3", "oct11", 5, 40, "sample_tasasdffdasfsadfasdfk"));


    // Form data for the login modal
    //$scope.taskData = {};

    //task that models the data in the taskAddModal//
    $scope.taskData = createTask();

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/taskAddModal.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.taskAddModal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeTaskAddModal = function() {
        $scope.taskAddModal.hide();
    };

    // Open the login modal
    $scope.addTask = function() {
        console.log('taskData in addTask: ', $scope.taskData);
        $scope.taskAddModal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doTaskAdd = function() {
        var isNewItem = true;
        console.log('adding task', $scope.taskData);

        //add task data to task list//
        $rootScope.forEach(function (ele, i) {
            if (ele.id === taskData.id) {
                taskList.splice(i, 1, $scope.taskData);
                isNewItem = false;
            }
        });

        if (isNewItem) {
            $rootScope.push($scope.taskData);
        }

        //reset data in add task form//
        $scope.taskData = createTask();

        $scope.closeTaskAddModal();
    };

    $scope.reorderTaskList = function () {

    };
})

.controller('TaskListCtrl', function($scope, $rootScope) {
    $scope.moveItem = function(item, fromIndex, toIndex) {
        $rootScope.taskList.splice(fromIndex, 1);
        $rootScope.taskList.splice(toIndex, 0, item);
    };
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
