package com.example.demo.model;

import java.util.List;
import java.util.stream.Collectors;

public class ProteinFullDto extends ProteinDto {
    public List<OrganismDto> setOrganisms;

    public ProteinFullDto() { }

    public ProteinFullDto(Protein protein) {
        super(protein);

        this.setOrganisms = protein.getSetOrganisms()
                .stream()
                .map(OrganismDto::new)
                .collect(Collectors.toList());
    }
}
