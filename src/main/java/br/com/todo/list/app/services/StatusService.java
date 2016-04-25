package br.com.todo.list.app.services;

import java.util.List;

import br.com.todo.list.app.entities.Status;

public interface StatusService {

	/**
	 * RETORNA A LISTA DE STATUS 
	 * @author Paulo Cesar Ferreira de Mello [pcfmello@gmail.com]
	 * @return Lista de status
	 * @since  23/04/2016
	 * 
	 * */
	List<Status> getStatus();
}
