(function() {
  'use strict';

  angular.module('treeApp', ['ui.tree','xeditable','ui.bootstrap.datetimepicker'])
  .controller('treeCtrl', function($scope) {
    $scope.remove = function(scope) {
      scope.remove();
    };

    $scope.toggle = function(scope) {
      scope.toggle();
    };
	
	$scope.editSubItem = function(scope) {
      //var nodeData = scope.$modelValue;
	  node.editing =true;
    };

    $scope.newSubItem = function(scope) {
      var nodeData = scope.$modelValue;
      nodeData.nodes.push({
        id: nodeData.id * 10 + nodeData.nodes.length,
        title: nodeData.title + '.' + (nodeData.nodes.length + 1),
        nodes: []
      });
    };

  
    $scope.data = [{
      "id": 1,
      "title": "NVI Check -1/0",
      "nodes": [
        {
          "id": 11,
          "title": "Short Check",
          "nodes": [
            {
              "id": 111,
              "title": "Check US Dispatch Queue/Check Lanegateway",
              "nodes": []
            }
          ]
        },
        {
          "id": 12,
          "title": "Manual unverified -2/-1& reversed",
          "nodes": []
        }
      ],
    }, {
      "id": 2,
      "title": "NVI Check",
      "nodes": [
        {
          "id": 21,
          "title": "G290 cancellation BRU-LUB-LUX-DUB",
          "nodes": []
        },
        {
          "id": 22,
          "title": "G290 modification -2/-1/0 Non location",
          "nodes": []
        }
      ],
    }, {
      "id": 3,
      "title": "Check Bridges",
      "nodes": [
        {
          "id": 31,
          "title": "Check LN/QT and CI",
          "nodes": []
        }
      ],
    }];
  });

})();

