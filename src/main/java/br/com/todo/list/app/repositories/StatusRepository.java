package br.com.todo.list.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.todo.list.app.entities.Status;

public interface StatusRepository extends JpaRepository<Status, Long> {

}
