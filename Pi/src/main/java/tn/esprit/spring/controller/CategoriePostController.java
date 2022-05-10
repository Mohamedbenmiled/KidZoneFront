package tn.esprit.spring.controller;


import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.lowagie.text.DocumentException;

import tn.esprit.spring.Iservice.ICategoriePostService;
import tn.esprit.spring.entity.CategoriePost;
import tn.esprit.spring.entity.Publication;
import tn.esprit.spring.repository.CategoriePostRepository;
import tn.esprit.spring.service.CategoriePostpdf;
import tn.esprit.spring.service.PublicationService;
//@CrossOrigin(origins = "*", allowedHeaders = "*")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/CategoriePost")
public class CategoriePostController {

	@Autowired
	ICategoriePostService categoriePostService;
	CategoriePostRepository categoriePostRepository;

	// http://localhost:8068/CategoriePost/affiche
	@GetMapping(value = "/affiche"  , produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<CategoriePost> getPosts() {
		List<CategoriePost> list = categoriePostService.retreiveAllCategoriePost();
		return list;
	}



	// http://localhost:8068/CategoriePost/add-categ
	@PostMapping("/add-categ")
	@ResponseBody
	public CategoriePost addPublication(@RequestBody CategoriePost p) {
		CategoriePost categoriePost = categoriePostService.addCategoriePost(p);
		System.out.println("add");
	   // sendEmail("mohamed.benmiled@esprit.tn", "Publication ", "Publication ");
		return categoriePost;
	}

	// http://localhost:8068/CategoriePost/remove-CategoriePost/{idCategoriePost}
	@DeleteMapping("/remove-CategoriePost/{idCategoriePost}")
	@ResponseBody
	public void removePost(@PathVariable("idCategoriePost") Long idCategoriePost) {
		categoriePostService.deleteCategoriePost(idCategoriePost);
	}

	// http://localhost:8068/CategoriePost/modify-CategoriePost
	@PutMapping("/modify-CategoriePost/{idCategoriePost}")
	@ResponseBody
	public CategoriePost modifyPublication(@RequestBody CategoriePost c , @PathVariable long idCategoriePost) {
		return categoriePostService.updateCategoriePost(c);
	}
	
	
	// http://localhost:8068/CategoriePost/pdf
	 @GetMapping("/pdf/{idCategoriePost}")
	 
	    public void exportToPDF(HttpServletResponse response) throws DocumentException, IOException {
		 
	        response.setContentType("application/pdf");
	        System.out.print("aaaaa");
	        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
	        String currentDateTime = dateFormatter.format(new Date());
	         
	        String headerKey = "Content-Disposition";
	        String headerValue = "attachment; filename=users_" + currentDateTime + ".pdf";
	        response.setHeader(headerKey, headerValue);
	         
	        List<CategoriePost> listCateg = categoriePostService.retreiveAllCategoriePost();
	         
	        CategoriePostpdf exporter = new CategoriePostpdf(listCateg);
	        exporter.export(response);
	        System.out.print("aaaaa");
	    }

}