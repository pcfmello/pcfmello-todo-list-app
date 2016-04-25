angular.module('todoListApp').directive('alertMsg', function() {
	
	return {
		templateUrl: 'view/diretivas/alert-msg.html',
		replace: true,
		restrict: 'AE',
		link: function($scope, element, attrs) {
			/*console.log($scope.$parent.itemSelecionado);*/
			/*console.log($scope)*/
		},
		/*scope: {
			nome: '@',
			titulo: "@",
			conteudo: '@',
			param: '@',
		}*/
	}
});