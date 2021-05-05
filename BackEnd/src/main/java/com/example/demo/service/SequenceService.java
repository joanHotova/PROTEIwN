package com.example.demo.service;


import com.example.demo.model.Sequence;
import com.example.demo.repository.SequenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class SequenceService {

    @Autowired
    private SequenceRepository sequenceRepository;
    public List<Sequence> listAllSequence(){
        return sequenceRepository.findAll();
    }
    public void saveSequence(Sequence sequence) {
        if (!sequenceRepository.existsById(sequence.getSeq_id())) {
            sequenceRepository.save(sequence);
        }
    }
    public void updateSequence(Sequence sequence) {
        sequenceRepository.save(sequence);
    }
    public Sequence getSequence(String seq_id) {
        return sequenceRepository.findById(seq_id).get();
    }

    public void deleteSequence(String seq_id) {
        sequenceRepository.deleteById(seq_id);
    }
}
