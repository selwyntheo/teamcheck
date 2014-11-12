'use strict';

teamcheck.controller('EditableRowCtrl', function($scope, $filter, $http) {
  $scope.tasks = [
    {id: 1, name: 'Cancellation', status: 2, group: 4, groupName: 'admin', start: '10:30', goal: '11:00', sla: '30'},
    {id: 2, name: 'G290 Modification', status: undefined, group: 3, groupName: 'IPG', start: '10:30', goal: '11:00', sla: '30'},
    {id: 3, name: 'G290 Block Trades', status: 2, group: null, start: '10:30', goal: '11:00', sla: '30'}
  ]; 

  $scope.statuses = [
    {value: 1, text: 'Category1'},
    {value: 2, text: 'Category2'},
    {value: 3, text: 'Category3'},
    {value: 4, text: 'Category4'}
  ]; 

  $scope.groups = [];
  $scope.loadGroups = function() {
    return $scope.groups.length ? null : $http.get('/groups').success(function(data) {
      $scope.groups = data;
    });
  };

  $scope.showGroup = function(task) {
    if(task.group && $scope.groups.length) {
      var selected = $filter('filter')($scope.groups, {id: task.group});
      return selected.length ? selected[0].text : 'Not set';
    } else {
      return task.groupName || 'Not set';
    }
  };

  $scope.showStatus = function(task) {
    var selected = [];
    if(task.status) {
      selected = $filter('filter')($scope.statuses, {value: task.status});
    }
    return selected.length ? selected[0].text : 'Not set';
  };

  $scope.checkName = function(data, id) {
    if (id === 2 && data !== 'G290 Modification') {
      return "Username 2 should be `G290 Modification`";
    }
  };

  $scope.saveUser = function(data, id) {
    //$scope.user not updated yet
    angular.extend(data, {id: id});
    return $http.post('/saveUser', data);
  };

  // remove user
  $scope.removeUser = function(index) {
    $scope.tasks.splice(index, 1);
  };

  // add user
  $scope.addUser = function() {
    $scope.inserted = {
      id: $scope.tasks.length+1,
      name: '',
      status: null,
      group: null 
    };
    $scope.tasks.push($scope.inserted);
  };
});
