package com.example.demo.service;

import com.example.demo.model.Protein;
import com.example.demo.repository.ProteinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
@Transactional
public class ProteinService {

    @Autowired
    private ProteinRepository proteinRepository;
    public List<Protein> listAllProtein(){
        try{
            List<Protein> proteins = proteinRepository.findAll();
            return proteins;
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
    public void saveProtein(Protein protein) {
        if (!proteinRepository.existsById(protein.getAccession_number())) {
            proteinRepository.save(protein);
        }
    }
    public void updateProtein(Protein protein) {
        proteinRepository.save(protein);
    }
    public Protein getProtein(String accession_number) {
        return proteinRepository.findById(accession_number).get();
    }
    public void deleteProtein(String accession_number) {
        proteinRepository.deleteById(accession_number);
    }
}
