package net.javaguides.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import net.javaguides.springboot.model.Note;

@Repository
public interface NoteRepository extends JpaRepository<Note, Long>{
	@Query("SELECT u FROM Note u WHERE u.etudiant = ?1")
	List<Note> findByStudent(Integer student);
}
