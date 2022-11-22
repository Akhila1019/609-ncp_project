var milk_workers;
fetch('milk_workers.json')
            .then(function (response) {
				milk_workers = response.json()
                return response.json();
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
	
// const milk_workers = require("./jsondata");

var app = angular.module("instantSearch", []);
// The controller

app.controller("InstantSearchController", function($scope){


	$scope.users = milk_workers

});
