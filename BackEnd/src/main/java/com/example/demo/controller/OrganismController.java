package com.example.demo.controller;


import com.example.demo.model.Organism;
import com.example.demo.model.OrganismDto;
import com.example.demo.model.OrganismFullDto;
import com.example.demo.model.Protein;
import com.example.demo.service.OrganismService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/organisms")
public class OrganismController {
    @Autowired
    OrganismService organismService;

    @GetMapping("/all_organisms")
    public List<OrganismFullDto> list() {
        return organismService.listAllOrganism()
                .stream()
                .map(OrganismFullDto::new)
                .collect(Collectors.toList());
    }

    @GetMapping("/{taxID}")
    public ResponseEntity<OrganismFullDto> get(@PathVariable int taxID) {
        try {
            Organism organism = organismService.getOrganism(taxID);
            return new ResponseEntity<>(new OrganismFullDto(organism), HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/")
    public void add(@RequestBody OrganismFullDto organismDto) {
        Organism organism = new Organism(
                organismDto.taxID,
                organismDto.scientific_name,
                organismDto.mnemonic,
                organismDto.taxonomy_navigation);

        Set<Protein> proteins = organismDto.setProteins
                .stream()
                .map(proteinDto -> new Protein(proteinDto.accession_number,
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
                        proteinDto.proteomes))
                .collect(Collectors.toSet());

        organism.setSetProtein(proteins);

        organismService.saveOrganism(organism);
    }

    @PutMapping("/{taxID}")
    public ResponseEntity<?> update(@RequestBody OrganismFullDto organism, @PathVariable int taxID) {
        try {
            Organism existOrganism = organismService.getOrganism(taxID);
            existOrganism.setMnemonic(organism.mnemonic);
            existOrganism.setScientific_name(organism.scientific_name);
            existOrganism.setTaxonomy_navigation(organism.taxonomy_navigation);

            Set<Protein> proteins = organism.setProteins
                    .stream()
                    .map(proteinDto -> new Protein(proteinDto.accession_number,
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
                            proteinDto.proteomes))
                    .collect(Collectors.toSet());

            existOrganism.setSetProtein(proteins);

            organismService.updateOrganism(existOrganism);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{taxID}")
    public void delete(@PathVariable int taxID) {

        organismService.deleteOrganism(taxID);
    }
}
