insteadModule
.controller('InsteadCtrl',['$scope','$state',function($scope,$state){
	$scope.GoHomePage=GoHomePage;
	$scope.userinfo={
		name:'王小凡',
		telephoneNum:'15211111111',
		address:'浙江省杭州市余杭区金手指大厦'
	}
	function GoHomePage(){
		$state.go('home');
	}
}])