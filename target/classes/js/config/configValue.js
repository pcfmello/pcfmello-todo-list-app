angular.module('todoListApp').value('Config', {
	
	appTitle: 'Tarefas',
	appListar: 'listar',
	appInserir: 'inserir',
	appEditar: 'editar',
	appMostrar: 'detalhes',
	
	/* Development */
	/*baseUrl: 'http://localhost:8080/todo-list-app/rest/tarefas'*/
	
	/* Production */
	baseUrl: 'https://pcfmello-todo-list-app.herokuapp.com'

});