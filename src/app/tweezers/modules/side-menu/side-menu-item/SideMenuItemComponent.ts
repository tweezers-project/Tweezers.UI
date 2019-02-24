import { Component, ViewChild, Input } from '@angular/core';
import { BaseComponent } from '../../base-component/BaseComponent';
import { TweezersColorPicker } from 'src/app/tweezers/utils/tweezers-color-picker';
import { MatListItem } from '@angular/material';

@Component({
    selector: 'tweezers-side-menu-item',
    templateUrl: 'side-menu-item.component.html',
    styleUrls: ['side-menu-item.component.css'],
})
export class SideMenuItemComponent extends BaseComponent {
    @Input() link: any;
    @ViewChild('side_menu_item') private sideMenuItem: MatListItem;
    
    ngAfterContentInit(): void {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        TweezersColorPicker.changeColor(this.sideMenuItem);
    }
}