import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ObservationFeedDto } from '@app/_models/ObservationFeedDto';
import { UserViewModel } from '@app/_models/UserViewModel';

@Component({
  selector: 'app-observation-feed-item',
  templateUrl: './observation-feed-item.component.html',
  styleUrls: ['./observation-feed-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ObservationFeedItemComponent {
  @Input() observation: ObservationFeedDto;
  @Input() user: UserViewModel;
  // really need to access the user from the parent
  // or check if owner and pass boolean to this child component

  constructor() { }
}
