angular.module('todoListApp').config(function($routeProvider) {
    
	 $routeProvider.when('/tarefas', {
          templateUrl: 'view/tarefas/tarefas-list.html', 
          controller: 'ListarTarefasCtrl',
          resolve: {
        	  tarefas: function(TarefasAPI) {
        		  return TarefasAPI.getTarefasList();
        	  }        	 
          }
      })
      .when('/tarefas/new', {
          templateUrl: 'view/tarefas/tarefas-edit.html', 
          controller: 'NovaTarefaCtrl',
          resolve: {
        	  status: function(TarefasAPI) {
        		  return TarefasAPI.getStatusList();
        	  }
          }
      })
      .when('/tarefas/edit/:id', {
          templateUrl: 'view/tarefas/tarefas-edit.html', 
          controller: 'EditarTarefaCtrl',
          resolve: {
        	  status: function(TarefasAPI) {
        		  return TarefasAPI.getStatusList();
        	  },
        	  tarefa: function(TarefasAPI, $route) {
        		  return TarefasAPI.getTarefa($route.current.params.id);
        	  }
          }
      })
      .when('/tarefas/show/:id', {
          templateUrl: 'view/tarefas/tarefas-show.html', 
          controller: 'ShowTarefaCtrl',
          resolve: {
        	  tarefa: function(TarefasAPI, $route) {
        		  return TarefasAPI.getTarefa($route.current.params.id);
        	  }
          }
      })
      .otherwise({
    	  redirectTo: '/tarefas'
      });      
});