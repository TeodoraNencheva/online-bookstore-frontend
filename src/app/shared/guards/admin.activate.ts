import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";
import { Location } from "@angular/common";

@Injectable({
    providedIn: 'root'
})
export class AdminActivate implements CanActivate {

    constructor(private authService: AuthService,
        private router: Router,
        private location: Location) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.authService.isAdmin) {
            return true;
        }

        if (this.authService.isLogged) {
            this.location.back();
            return this.router.createUrlTree(['/']);
        }

        const returnUrl = state.url;
        return this.router.createUrlTree(['/auth/login'], { queryParams: { returnUrl } });
    }

}