package br.com.todo.list.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.todo.list.app.entities.Tarefa;

public interface TarefaRepository extends JpaRepository<Tarefa, Long> {
	

}
