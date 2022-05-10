package tn.esprit.spring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import tn.esprit.spring.entity.Event;
@Repository
public interface EventRepository extends JpaRepository<Event, Long>	 {
	@Query("SELECT t FROM Event t WHERE t.nom LIKE %:nom%")
    List<Event> findEventByName(@Param("nom") String nom);
	@Query("Select t FROM Event t ORDER BY t.nbrInscri DESC")
	public List<Event> tri();
}
