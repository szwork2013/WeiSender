myOrderModule
.controller('MyOrderCtrl',['$scope','$state',function($scope,$state){
	$scope.GoHomePage=GoHomePage;
	$scope.ChangeShow=ChangeShow;
	$scope.selectIndex=0;
	function GoHomePage(){
		$state.go('home');
	}
	function ChangeShow(index){
		$scope.selectIndex=index;
	}
}])