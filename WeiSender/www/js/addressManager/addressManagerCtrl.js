userInfoModule
.controller('AddressManagerCtrl',['$scope','$ionicModal',function($scope,$ionicModal){
	$scope.Exit=Exit;
	$scope.Shared=Shared;
	$scope.addresses=[{
		people:'王小凡',
		telephoneNum:'1581234567',
		city:'重庆市歇台子',
		detailAddress:'歇台子小学'
	},{
		people:'王小凡',
		telephoneNum:'1581234567',
		city:'重庆市歇台子',
		detailAddress:'歇台子小学'
	}];
	$scope.GoAddAddress=GoAddAddress;
	$scope.CloseAddNewAddress=CloseAddNewAddress;
	$scope.SuccessAddAddress=SuccessAddAddress;
	function Exit(){
		
	};
	function Shared(){
		
	};
	function GoAddAddress(){
		$ionicModal.fromTemplateUrl('templates/addNewAddress.html',{
			scope:$scope,
			animation:'slide-in-up'
		}).then(function(modal){
			$scope.addNewAddress=modal;
			$scope.addNewAddress.show();
		})
	}
	function CloseAddNewAddress(){
		$scope.addNewAddress.hide();
	}
	function SuccessAddAddress() {
			//$scope.CloseAddNewAddress();
		$scope.addNewAddress.hide();
	}
}])