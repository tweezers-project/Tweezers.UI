import { BaseComponent } from "../../base-component/BaseComponent";
import { Component, Input } from "@angular/core";

@Component({
    selector: "tweezers-slider",
    templateUrl: "slider.component.html",
    styleUrls: ["slider.component.css"]
})
export class SliderComponent extends BaseComponent {
    @Input() prop: string;
    @Input() header: string;
    @Input() item: any;
    @Input() required = false;

    ngOnInit(): void {
        if (this.item[this.prop] === undefined || this.item[this.prop] === null) {
            this.item[this.prop] = false;
        }
    }

    onChange(e) {
        const newValue = e.checked;
        this.item[this.prop] = newValue;
    }
}
