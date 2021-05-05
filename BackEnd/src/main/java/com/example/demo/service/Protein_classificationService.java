package com.example.demo.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.example.demo.model.Protein_classification;
import com.example.demo.repository.Protein_classificationRepository;

import java.util.List;

@Service
@Transactional
public class Protein_classificationService {
	@Autowired
	private Protein_classificationRepository protein_classificationRepository;
	public List<Protein_classification> listAllProtein_classification() {
		
		return protein_classificationRepository.findAll();
		
	}
	public void saveProtein_classification(Protein_classification protein_classification) {
		if (!protein_classificationRepository.existsById(protein_classification.getProsite_ID())) {
			protein_classificationRepository.save(protein_classification);
		}
	}

	public void updateProtein_classification(Protein_classification protein_classification) {
		protein_classificationRepository.save(protein_classification);
	}
	public Protein_classification getProtein_classification(String Prosite_ID) {
		return protein_classificationRepository.findById(Prosite_ID).get();
	}
	public void deleteProtein_classification(String Prosite_ID) {
	        protein_classificationRepository.deleteById(Prosite_ID);
	}
}
