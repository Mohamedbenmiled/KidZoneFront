package tn.esprit.spring.Iservice;

import java.util.List;

import tn.esprit.spring.entity.CategoriePost;

public interface ICategoriePostService {
	
	 CategoriePost addCategoriePost(CategoriePost c);
	 List<CategoriePost> retreiveAllCategoriePost();
	 void deleteCategoriePost(long id);
	 CategoriePost updateCategoriePost (CategoriePost c);
	 CategoriePost getCategoriePostById( long id);
	 void sendEmail(String toEmail , String Subject , String Body);
	List<CategoriePost> retrieveCategbyid(Long id);
	List<CategoriePost> listAll();
	List<CategoriePost>retrieveByName(String label);


}
