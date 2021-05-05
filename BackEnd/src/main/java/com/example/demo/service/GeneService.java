package com.example.demo.service;

import com.example.demo.model.Gene;
import com.example.demo.repository.GeneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
@Transactional
public class GeneService {

    @Autowired
    private GeneRepository geneRepository;
    public List<Gene> listAllGene(){ return geneRepository.findAll(); }
    public void saveGene(Gene gene) {
        if (!geneRepository.existsById(gene.getGene_name())) {
            geneRepository.save(gene);
        }
    }

    public void updateGene(Gene gene) {
        geneRepository.save(gene);
    }
    public Gene getGene(String gene_name) {
        return geneRepository.findById(gene_name).get();
    }
    public void deleteGene(String gene_name) {
        geneRepository.deleteById(gene_name);
    }
}
