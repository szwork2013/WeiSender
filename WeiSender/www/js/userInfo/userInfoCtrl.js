userInfoModule.controller('UserInfoCtrl',['$scope','$state','$ionicModal',function($scope,$state,$ionicModal){
	$scope.Exit=Exit;
	$scope.Shared=Shared;
	$scope.GoHomePage=GoHomePage;
	$scope.GoMyEvaluate=GoMyEvaluate;
	$scope.GoAddressManager=GoAddressManager;
	$scope.GoMore=GoMore;
	$scope.GoSetting=GoSetting;
	$scope.CloseMyEvluate=CloseMyEvluate;
	$scope.CloseAddressManager=CloseAddressManager;
	$scope.userInfo={
		name:'王红军',
		telephoneNum:'1581234567',
		balance:345.0,
		Integral:20,
		friendCount:5
	}
	function Exit(){
		
	};
	function Shared(){
		
	};
	function GoHomePage(){
		$state.go('home');
	};
	function GoMyEvaluate(){
		$ionicModal.fromTemplateUrl('templates/myEvaluate.html',{
			scope:$scope,
			animation:'slide-in-up'
		}).then(function(modal){
			$scope.myEvaluate=modal;
			$scope.myEvaluate.show();
		})
	};
	function CloseMyEvluate(){
		$scope.myEvaluate.hide();
	}
	function GoAddressManager(){
		$ionicModal.fromTemplateUrl('templates/addressManager.html',{
			scope:$scope,
			animation:'slide-in-up'
		}).then(function(modal){
			$scope.addressManage=modal;
			$scope.addressManage.show();
		})
	};
	function CloseAddressManager(){
		$scope.addressManage.hide();
	}
	function GoMore(){
		
	};
	function GoSetting(){
		
	};
}])