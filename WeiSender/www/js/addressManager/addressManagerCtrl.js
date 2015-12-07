addressManagerModule
.controller('AddressManagerCtrl',['$scope',function($scope){
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
	function Exit(){
		
	};
	function Shared(){
		
	};
}])