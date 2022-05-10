package tn.esprit.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import tn.esprit.spring.Iservice.ICategoriePostService;
import tn.esprit.spring.Iservice.IPublicationService;
import tn.esprit.spring.entity.CategoriePost;
import tn.esprit.spring.entity.Publication;
import tn.esprit.spring.repository.CategoriePostRepository;
import tn.esprit.spring.repository.PublicationRepository;

import org.springframework.data.domain.Sort;


@Service

public class CategoriePostService implements ICategoriePostService {
	@Autowired
	CategoriePostRepository categoriePostRepository;
	PublicationRepository Pub ;
	@Override
	public CategoriePost addCategoriePost(CategoriePost c) {
		categoriePostRepository.save(c);
		// sendEmail("pouta2005@gmail.com", "a", "a");
		return null;
	}

	@Override
	public List<CategoriePost> retreiveAllCategoriePost() {
		List<CategoriePost> listCateg = (List<CategoriePost>) categoriePostRepository.findAll();	

		return listCateg;
	}

	@Override
	public void deleteCategoriePost(long id) {
		categoriePostRepository.deleteById(id);

	}

	@Override
	public CategoriePost updateCategoriePost(CategoriePost c) {
		return categoriePostRepository.save(c);
	}

	@Override
	public CategoriePost getCategoriePostById(long id) {
		// TODO Auto-generated method stub
		return null;
	}
	@Autowired
	private JavaMailSender mailSender;
	@Override
	public void sendEmail(String toEmail, String Subject, String Body) {

		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("mohamed.benmiled@esprit.tn");
		message.setTo(toEmail);
		message.setText(Body);
		message.setSubject(Subject);
		mailSender.send(message);	
	}
@Autowired
public List<CategoriePost> listAll(){
	return categoriePostRepository.findAll(Sort.by("idCategoriePost").ascending());
}

@Override
public List<CategoriePost> retrieveCategbyid(Long id) {
	// TODO Auto-generated method stub
	return null;
}

@Override
public List<CategoriePost> retrieveByName(String label) {
	// TODO Auto-generated method stub
	return null;
}


/*public List<CategoriePost> retrieveCategbyid(Long idPost) {
	Publication u = Pub.findById(idPost).orElse(null);
	List<CategoriePost> CategoriePost = categoriePostRepository.findByPublication(u);
	return CategoriePost ;
}*/
//@Override
//public List<CategoriePost> retrieveByName(String label) {
	
	//return CategoriePostRepository.CategByName(label);
//}




}
