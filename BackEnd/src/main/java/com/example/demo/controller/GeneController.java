package com.example.demo.controller;

import com.example.demo.model.Gene;
import com.example.demo.service.GeneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/genes")
public class GeneController {
    @Autowired
    GeneService geneService;

    @GetMapping("/all_genes")
    public List<Gene> list() {
        return geneService.listAllGene();
    }

    @GetMapping("/{gene_name}")
    public ResponseEntity<Gene> get(@PathVariable String gene_name) {
        try {
            Gene gene = geneService.getGene(gene_name);
            return new ResponseEntity<>(gene, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/add")
    public void add(@RequestBody Gene gene) {
        geneService.saveGene(gene);
    }

    @PutMapping("/{gene_name}")
    public ResponseEntity<?> update(@RequestBody Gene gene, @PathVariable String gene_name) {
        try {
            Gene existGene = geneService.getGene(gene_name);
            existGene.setTaxID(gene.getTaxID());
            existGene.setAccession_number(gene.getAccession_number());
            existGene.setSynonym(gene.getSynonym());
            existGene.setORF_name(gene.getORF_name());
            geneService.updateGene(gene);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{gene_name}")
    public void delete(@PathVariable String gene_name) {

        geneService.deleteGene(gene_name);
    }
}
