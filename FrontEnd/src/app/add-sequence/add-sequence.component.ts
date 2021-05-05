import { Component, OnInit } from '@angular/core';
import {SequenceService} from '../service/sequence.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-sequence',
  templateUrl: './add-sequence.component.html',
  styleUrls: ['./add-sequence.component.css']
})
export class AddSequenceComponent implements OnInit {

  constructor(private sequenceService: SequenceService,
              private router: Router) { }

  ngOnInit() {
  }
  createSequence(form) {
    console.log(form.value.seq_id);
    console.log(form.value.length);
    console.log(form.value.mass);
    console.log(form.value.last_date);
    console.log(form.value.checksum);
    console.log(form.value.sequence);
    const newFormData = {seq_id: form.value.seq_id, length: form.value.length, mass: form.value.mass,
      last_date: form.value.last_date, checksum: form.value.checksum, sequence: form.value.sequence};
    this.sequenceService.createSequence(newFormData).subscribe(data => {
      console.log(data);
      this.router.navigate(['/sequences']);
    });
  }

}
