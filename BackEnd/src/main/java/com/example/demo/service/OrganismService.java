package com.example.demo.service;


import com.example.demo.model.Organism;
import com.example.demo.repository.OrganismRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
@Transactional
public class OrganismService {

    @Autowired
    private OrganismRepository organismRepository;
    public List<Organism> listAllOrganism(){
        try{
            List<Organism> organisms = organismRepository.findAll();
            return organisms;
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
    public void saveOrganism(Organism organism) {
        if (!organismRepository.existsById(organism.getTaxID())) {
            organismRepository.save(organism);
        }
    }
    public void updateOrganism(Organism organism) {
        organismRepository.save(organism);
    }
    public Organism getOrganism(int taxID) {
        return organismRepository.findById(taxID).get();
    }

    public void deleteOrganism(int taxID) {
        organismRepository.deleteById(taxID);
    }
}

