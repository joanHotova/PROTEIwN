package com.example.demo.model;

import java.util.List;
import java.util.stream.Collectors;

public class OrganismFullDto extends OrganismDto {

    public List<ProteinDto> setProteins;

    public OrganismFullDto() { }

    public OrganismFullDto(Organism organism) {
        super(organism);

        this.setProteins = organism.setProtein
                .stream()
                .map(ProteinDto::new)
                .collect(Collectors.toList());
    }
}
