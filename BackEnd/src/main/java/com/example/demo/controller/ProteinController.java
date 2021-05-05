package com.example.demo.controller;


import com.example.demo.model.Organism;
import com.example.demo.model.Protein;
import com.example.demo.model.ProteinDto;
import com.example.demo.model.ProteinFullDto;
import com.example.demo.repository.ProteinRepository;
import com.example.demo.service.ProteinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/proteins")
public class ProteinController {
    @Autowired
    ProteinService proteinService;

    //find all proteins
    @GetMapping("/all_proteins")
    public List<ProteinFullDto> list() {
        return proteinService.listAllProtein()
                .stream()
                .map(ProteinFullDto::new)
                .collect(Collectors.toList());
    }

    //find protein by id
    @GetMapping("/{accession_number}")
    public ResponseEntity<ProteinFullDto> get(@PathVariable String accession_number) {
        try {
            Protein protein = proteinService.getProtein(accession_number);
            return new ResponseEntity<>(new ProteinFullDto(protein), HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //add a new protein
    @PostMapping(value = "/")
    public void add(@RequestBody ProteinFullDto proteinDto) {
        Protein protein = new Protein(
                proteinDto.accession_number,
                proteinDto.seq_id,
                proteinDto.Prosite_ID,
                proteinDto.prev_acc_numbers,
                proteinDto.entry_name,
                proteinDto.full_name,
                proteinDto.short_name,
                proteinDto.reviewed,
                proteinDto.integrated,
                proteinDto.first_date,
                proteinDto.last_date,
                proteinDto.pfunction,
                proteinDto.proteomes);

        Set<Organism> organisms = proteinDto.setOrganisms
                .stream()
                .map(o -> new Organism(o.taxID, o.scientific_name, o.mnemonic, o.taxonomy_navigation))
                .collect(Collectors.toSet());

        protein.setSetOrganisms(organisms);

        proteinService.saveProtein(protein);
    }

    //update an existing protein
    @PutMapping("/{accession_number}")
        public ResponseEntity<?> update(@RequestBody ProteinFullDto protein, @PathVariable String accession_number) {
        try {
            Protein existProtein = proteinService.getProtein(accession_number);
            existProtein.setPrev_acc_numbers(protein.prev_acc_numbers);
            existProtein.setEntry_name(protein.entry_name);
            existProtein.setFull_name(protein.full_name);
            existProtein.setShort_name(protein.short_name);
            existProtein.setIntegrated(protein.integrated);
            existProtein.setFirst_date(protein.first_date);
            existProtein.setLast_date(protein.last_date);
            existProtein.setPfunction(protein.pfunction);
            existProtein.setProteomes(protein.proteomes);
            existProtein.setReviewed(protein.reviewed);

            Set<Organism> organisms = protein.setOrganisms
                    .stream()
                    .map(o -> new Organism(o.taxID, o.scientific_name, o.mnemonic, o.taxonomy_navigation))
                    .collect(Collectors.toSet());

            existProtein.setSetOrganisms(organisms);

            proteinService.updateProtein(existProtein);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //delete protein
    @DeleteMapping("/{accession_number}")
    public void delete(@PathVariable String accession_number) {

        proteinService.deleteProtein(accession_number);
    }
}
