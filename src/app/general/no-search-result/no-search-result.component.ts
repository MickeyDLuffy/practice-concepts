import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-no-search-result',
  templateUrl: './no-search-result.component.html',
  styleUrls: ['./no-search-result.component.scss']
})
export class NoSearchResultComponent implements OnInit {
  @Input() messageHeader = 'You seem to be doing an excellent job.';
  @Input() messageContent = 'There are no Tickets for you to work on.';

  constructor() { }

  ngOnInit(): void {
  }

}
