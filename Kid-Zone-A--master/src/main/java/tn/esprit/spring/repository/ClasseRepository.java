package tn.esprit.spring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import tn.esprit.spring.entity.Classe;
@Repository
public interface ClasseRepository extends JpaRepository<Classe, Long> {
	@Query("Select a FROM Classe a ORDER BY a.label ASC")
	public List<Classe> getByLabelAsc();
	
	@Query("Select a FROM Classe a ORDER BY a.label DESC")
	public List<Classe> getByLabelDesc();
	
	@Query("SELECT t FROM Classe t WHERE t.label LIKE %:label%")
    List<Classe> SearchByLabel(@Param("label") String label);

}
