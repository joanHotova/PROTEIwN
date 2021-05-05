package com.example.demo.controller;


import com.example.demo.model.Protein_classification;
import com.example.demo.service.Protein_classificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/protein_classifications")
public class Protein_classificationController {
    @Autowired
    Protein_classificationService protein_classificationService;

    @GetMapping("/all_protein_classifications")
    public List<Protein_classification> list() {
        return protein_classificationService.listAllProtein_classification();
    }

    @GetMapping("/{Prosite_ID}")
    public ResponseEntity<Protein_classification> get(@PathVariable String Prosite_ID) {
        try {
            Protein_classification protein_classification = protein_classificationService.getProtein_classification(Prosite_ID);
            return new ResponseEntity<>(protein_classification, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/")
    public void add(@RequestBody Protein_classification protein_classification) {
        protein_classificationService.saveProtein_classification(protein_classification);
    }

    @PutMapping("/{Prosite_ID}")
    public ResponseEntity<?> update(@RequestBody Protein_classification protein_classification, @PathVariable String Prosite_ID) {
        try {
            Protein_classification existProtein_classification = protein_classificationService.getProtein_classification(Prosite_ID);
            existProtein_classification.setFamily(protein_classification.getFamily());
            existProtein_classification.setSubfamily(protein_classification.getSubfamily());
            protein_classificationService.updateProtein_classification(protein_classification);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{Prosite_ID}")
    public void delete(@PathVariable String Prosite_ID) {

        protein_classificationService.deleteProtein_classification(Prosite_ID);
    }
}
