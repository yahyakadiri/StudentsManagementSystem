package net.javaguides.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import net.javaguides.springboot.model.Presence;
import net.javaguides.springboot.model.PresenceU;


@Repository
public interface PresenceRepository extends JpaRepository<Presence, Long>{
	
	/*@Query("select etudiant, date, presence from Presence where etudiant = ?1")
	List<Presence> findByStudent(int etudiant);*/
	
	@Query(value = "SELECT u FROM Presence u WHERE u.etudiant = ?1")
	List<Presence> findByStudent(Integer etudiant);
	
	/*@Query(value = "SELECT (et.first_name, u.date, u.presence) FROM Presence u inner join Etudiant et on u.etudiant = et.id WHERE u.etudiant = ?1")
	List<PresenceU> findByStudent(Integer etudiant);*/
}
