package tn.esprit.spring.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@Table(name="Event")
public class Event implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Column(name="idEvent")

	private long idEvent ;
	@Column(name="nom")

	private String nom ; 
	@Column(name="date")

	private Date dateEvent ; 
	@Column(name="nbrInscri")

	private int nbrInscri ; 
	//@Column(name="CategorieEvent")
    @JsonIgnore
	@ManyToOne(cascade = CascadeType.ALL)
	private CategorieEvent categorieEvent ;
    @Enumerated(EnumType.STRING)
	 private CategorieEv catt;
}
