app.controller('characterDetailCtrl',function($scope,$http,$stateParams) {
    var url = "http://dcdatabase.me/characters/"+$stateParams.name.replace(/ /g,'_')+".json";
	// // $scope.test = url;
    $http.get(url)
    	.then(function (response) {
		   	$scope.name = response.data.title;
			$scope.reallyName = response.data.name;
			$scope.allignment = response.data.allignment;
			$scope.image = response.data.image;
			$scope.gennder = response.data.gender;
			$scope.aliases = response.data.aliases;
			$scope.affiliation = response.data.affiliation;
			$scope.creators = response.data.creators;

   });

});

