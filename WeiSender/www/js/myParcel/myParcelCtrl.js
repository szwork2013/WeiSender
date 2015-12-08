myParcelModule
.controller('MyParcelCtrl',['$scope','$state',function($scope,$state){
	$scope.GoHomePage=GoHomePage;
	$scope.selectIndex=0;
	$scope.ChangeShow=ChangeShow;
	function GoHomePage(){
		$state.go('home')
	}
	function ChangeShow(index){
		$scope.selectIndex=index;
	}
}])
