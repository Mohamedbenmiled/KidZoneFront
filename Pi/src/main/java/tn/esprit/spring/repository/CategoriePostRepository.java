package tn.esprit.spring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import tn.esprit.spring.entity.CategoriePost;
import tn.esprit.spring.entity.Publication;

@Repository
public interface CategoriePostRepository extends JpaRepository<CategoriePost, Long>{

	List<tn.esprit.spring.entity.CategoriePost> findByPublication(Publication u);
	//@Query("SELECT t FROM CategoriePost t WHERE t.label LIKE %:label%")
	
    //List<CategoriePost> CategByName(@Param("label") String label) {
		// TODO Auto-generated method stub
	//	return null;
//	}


}
