registModule
.controller('RegistCtrl',['$scope',function($scope){
	$scope.register={
		reg:true,
		ass:false,
		pre:false,
	}
	$scope.ChangePage=ChangePage;
	function ChangePage(){
		if($scope.register.reg){
			$scope.register.reg=false;
			$scope.register.ass=true;
			$scope.register.pre=false;
		}else if($scope.register.ass){
			$scope.register.reg=false;
			$scope.register.ass=false;
			$scope.register.pre=true;
		}else if($scope.register.pre){
			$scope.register.reg=true;
			$scope.register.ass=false;
			$scope.register.pre=false;
			$scope.Goback();
		}
	}
}])