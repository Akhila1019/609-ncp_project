
// Define a new module for our app

var app = angular.module("instantSearch", []);
// The controller

app.controller("InstantSearchController", function($scope){


	$scope.users = [
		{
			name: 'Alisha'	,
			age: '20'	,
			address: 'Kerala' ,	
			gender:	'Female' ,
			phoneNumber: '9515409242'	,
			type: 'Individual Worker' ,
			about: "info.html"
		},
		{
			name: 'Amar'	,
			age: '24'	,
			address: 'Chennai' ,	
			gender:	'Male' ,
			phoneNumber: '9515443242'	,
			type: 'Company Worker' ,
			about: "info.html"
		},
		{
			name: 'Ali'	,
			age: '45'	,
			address: 'Kerala' ,	
			gender:	'Male' ,
			phoneNumber: '7615409242'	,
			type: 'Individual Worker' ,
			about: "info.html"
		},
		{
			name: 'Isha'	,
			age: '30'	,
			address: 'Hyderabad' ,	
			gender:	'Female' ,
			phoneNumber: '7685409242'	,
			type: 'Company Worker' ,
			about: "info.html"
		},
		{
			name: 'Nisha'	,
			age: '25'	,
			address: 'Vizag' ,	
			gender:	'Female' ,
			phoneNumber: '9532149242'	,
			type: 'Individual Worker' ,
			about: "info.html"
		},
		{
			name: 'Riya'	,
			age: '19'	,
			address: 'Kerala' ,	
			gender:	'Female' ,
			phoneNumber: '9805409242'	,
			type: 'Individual Worker' ,
			about: "info.html"
		},
		{
			name: 'Ram'	,
			age: '22'	,
			address: 'Vizag' ,	
			gender:	'Male' ,
			phoneNumber: '9515409222'	,
			type: 'Company Worker' ,
			about: "info.html"
		}
	];


});
