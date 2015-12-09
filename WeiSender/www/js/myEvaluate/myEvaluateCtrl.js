userInfoModule
.controller('MyEvaluateCtrl',['$scope','$state',function($scope,$state){
	$scope.Exit=Exit;
	$scope.Shared=Shared;
	$scope.GoUseInfo=GoUseInfo;
	$scope.evaluates=[{
		name:'王小凡',
		Imgs:[1,2,3,4,5],
		content:'速度很快，很帅，很漂亮，很及时，非常干系额，也很认真，还帮忙把快递拆开了',
		time:'2015-11-3 10:23:43',
		scode:'5'
	},{
		name:'王小凡',
		Imgs:[1,2,3,4,5],
		content:'速度很快，很帅，很漂亮，很及时，非常干系额，也很认真，还帮忙把快递拆开了',
		time:'2015-11-3 10:23:43',
		scode:'5'
	},{
		name:'王小凡',
		Imgs:[1,2,3,4,5],
		content:'速度很快，很帅，很漂亮，很及时，非常干系额，也很认真，还帮忙把快递拆开了',
		time:'2015-11-3 10:23:43',
		scode:'5'
	}]
	function Exit(){
		
	};
	function Shared(){
		
	};
	function GoUseInfo(){
		$state.go('userInfo');
	};
}])