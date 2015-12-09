myParcelModule
.controller('MyParcelCtrl',['$scope','$state',function($scope,$state){
	$scope.GoHomePage=GoHomePage;
	$scope.selectIndex=0;
	$scope.ChangeShow=ChangeShow;
	$scope.notparcels=[{
		getNum:'A-12',
		company:'申通快递',
		parcelNum:'12546546586',
		time:'2015-11-23 09:51:07'
	},{
		getNum:'A-12',
		company:'申通快递',
		parcelNum:'12546546586',
		time:'2015-11-23 09:51:07'
	},{
		getNum:'A-12',
		company:'申通快递',
		parcelNum:'12546546586',
		time:'2015-11-23 09:51:07'
	}];
	$scope.parcels=[{
		getNum:'A-12',
		company:'申通快递',
		parcelNum:'12546546586',
		getTime:'2015-11-23 09:51:07'
	},{
		getNum:'A-12',
		company:'申通快递',
		parcelNum:'12546546586',
		getTime:'2015-11-23 09:51:07'
	},{
		getNum:'A-12',
		company:'申通快递',
		parcelNum:'12546546586',
		getTime:'2015-11-23 09:51:07'
	}]
	$scope.statusparcels=[{
		status:'未揽件',
		company:'申通快递',
		parcelNum:'12546546586',
		updateTime:'2015-11-23 09:51:07'
	},{
		status:'未揽件',
		company:'申通快递',
		parcelNum:'12546546586',
		updateTime:'2015-11-23 09:51:07'
	},{
		status:'未揽件',
		company:'申通快递',
		parcelNum:'12546546586',
		updateTime:'2015-11-23 09:51:07'
	}]
	function GoHomePage(){
		$state.go('home')
	}
	function ChangeShow(index){
		$scope.selectIndex=index;
	}
}])
