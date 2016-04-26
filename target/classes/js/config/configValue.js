angular.module('todoListApp').value('Config', {
	
	appTitle: 'Tarefas',
	appListar: 'listar',
	appInserir: 'inserir',
	appEditar: 'editar',
	appMostrar: 'detalhes',
	
	/* Desenvolvimento */
	//baseUrl: 'http://localhost:8080/todo-list-app/rest/tarefas'
	
	/* Produção */
	baseUrl: 'https://pcfmello-todo-list-app.herokuapp.com/rest/tarefas'

});