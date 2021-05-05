import { Component, OnInit } from '@angular/core';
import {SequenceService} from '../service/sequence.service';
import {Sequence} from '../sequence';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.css']
})
export class SequenceComponent implements OnInit {

  sequences: Sequence[];
  p: number = 1;
  seq_id;
  public popoverTitle: string = 'Warning';
  public popoverMessage: string = 'Are you sure you want to delete this sequence?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  constructor(private sequenceService: SequenceService,
              private hardcodedAuthenticationService: HardcodedAuthenticationService,
              private route: ActivatedRoute) {
  }
  searchText;
  ngOnInit() {
    this.hardcodedAuthenticationService.isUserLoggedIn();
    const routeParams = this.route.snapshot.paramMap;
    const seqIDFromRoute = routeParams.get('seq_id');

    this.sequenceService.getAllSequences().subscribe((data: Sequence[]) => {
      console.log(data);
      console.log(`Seq ID: ${seqIDFromRoute}`);
      if (seqIDFromRoute != null) {
        this.sequences = data.filter((sequence: Sequence) =>
          sequence.seq_id === seqIDFromRoute);
      } else {
        this.sequences = data;
      }
    });
  }
  deleteSequence(seq_id) {
    this.sequenceService.deleteSequence(seq_id).subscribe(data => {
      console.log(data);
      location.reload();
    });
  }
}
