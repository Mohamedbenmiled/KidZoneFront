package tn.esprit.spring.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.esprit.spring.entity.CategorieEvent;

public interface CategorieEventRepository extends JpaRepository<CategorieEvent, Long>{
	//Optional<CategorieEvent>findByLabel(String label);
}
