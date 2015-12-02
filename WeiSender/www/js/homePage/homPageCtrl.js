homePageModule
	.controller('HomePageCtrl', ['$scope','$ionicModal','$state',function($scope,$ionicModal,$state) {
		$scope.Exit = Exit;
		$scope.Shared = Shared;
		$scope.GoSerchExpress = GoSerchExpress;
		$scope.GoUserInfo = GoUserInfo;
		$scope.GoMyParcel = GoMyParcel;
		$scope.GoMyOrder = GoMyOrder;
		$scope.GoInstead = GoInstead;
		$scope.GoMySelfGet = GoMySelfGet;
		$scope.GoMySelfSend = GoMySelfSend;
		$scope.ScanCode = ScanCode;
		
		$scope.CloseSerchExpress=CloseSerchExpress;
		//退出
		function Exit() {

		};
		//分享
		function Shared() {

		};
		//查快递
		function GoSerchExpress() {
			$ionicModal.fromTemplateUrl('templates/serchExpress.html',{
				scope:$scope,
				animation:'slide-in-up'
			}).then(function(modal){
				$scope.serchExpress=modal;
				$scope.serchExpress.show();
			})
		};
		//个人中心
		function GoUserInfo() {
			$state.go('userInfo');
		};
		//我的包裹
		function GoMyParcel() {

		};
		//我的订单
		function GoMyOrder() {

		};
		//代取
		function GoInstead() {

		};
		//自己取
		function GoMySelfGet() {

		};
		//自己寄
		function GoMySelfSend() {

		};
		//扫码
		function ScanCode() {

		};
		function CloseSerchExpress(){
			$scope.serchExpress.hide();
		}
	}])