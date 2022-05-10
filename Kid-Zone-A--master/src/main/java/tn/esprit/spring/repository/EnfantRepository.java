package tn.esprit.spring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import tn.esprit.spring.entity.Enfants;
@Repository
public interface EnfantRepository extends JpaRepository<Enfants, Long> {
	@Query("Select a FROM Enfants a ORDER BY a.age ASC")
	public List<Enfants> getByNomAsc();
	
	@Query("Select a FROM Enfants a ORDER BY a.age DESC")
	public List<Enfants> getByNomDesc();
	
	@Query("SELECT t FROM Enfants t WHERE t.nom LIKE %:nom%")
    List<Enfants> SearchByNom(@Param("nom") String nom);

}
