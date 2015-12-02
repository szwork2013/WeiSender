loginModule
.controller('LoginCtrl',['$scope','$ionicModal',function($scope,$ionicModal){
	$scope.Login=Login;
	$scope.Regist=Regist;
	$scope.ReSetPassword=ReSetPassword;
	$scope.Goback=Goback;
	$scope.GoLoginback=GoLoginback;
	
	function Login(user){
		
	};
	function Regist(){
		$ionicModal.fromTemplateUrl('templates/regist.html',{
			scope:$scope,
			 animation:'slide-in-up'
		}).then(function(modal){
			$scope.regist=modal;
			$scope.regist.show();
		})
	};
	function ReSetPassword(){
		$ionicModal.fromTemplateUrl('templates/findPassword.html',{
			scope:$scope,
			animation:'slide-in-up'
		}).then(function(modal){
			$scope.findPass=modal;
			$scope.findPass.show();
		})
	};
	function Goback(){
		$scope.regist.hide();
	};
	function GoLoginback(){
		$scope.findPass.hide();
	}
}])