registModule
.controller('RegistCtrl',['$scope',function($scope){
	$scope.register={
		reg:true,
		con:false,
		sel:false,
	}
	$scope.ChangePage=ChangePage;
	function ChangePage(){
		if($scope.register.reg){
			$scope.register.reg=false;
			$scope.register.con=true;
			$scope.register.sel=false;
		}else if($scope.register.con){
			$scope.register.reg=false;
			$scope.register.con=false;
			$scope.register.sel=true;
		}else if($scope.register.sel){
			
		}
		
		
	}
}])