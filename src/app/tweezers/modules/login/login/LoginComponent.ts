import { Component } from "@angular/core";
import { BaseComponent } from "../../base-component/BaseComponent";
import { TweezersButton } from "src/app/tweezers/interfaces/tweezers-button";

@Component({
    selector: "login",
    templateUrl: "login.component.html",
    styleUrls: ["login.component.css"],
})
export class LoginComponent extends BaseComponent {
    title: string;

    username: string;
    password: string;

    buttons: TweezersButton[] = [
        {
            label: "login",
            icon: "fingerprint",
            clickFunction: this.onLogin.bind(this),
        },
        {
            label: "clear",
            icon: "healing",
            clickFunction: this.onClear.bind(this),
        }
    ];

    ngOnInit(): void {
        this.titleModule.setTitle("Login - Tweezers");
    }

    onLogin() {
        this.authService.login(this.username, this.password).then(res => {
            this.router.navigate([""]).then(() => {
                window.location.href = "";
            });

        });
    }

    onClear() {
        this.username = "";
        this.password = "";
    }
}
