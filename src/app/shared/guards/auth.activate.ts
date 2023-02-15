import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";
import { Location } from "@angular/common";

@Injectable({
    providedIn: 'root'
})
export class AuthActivate implements CanActivate {

    constructor(private authServce: AuthService,
        private router: Router,
        private location: Location) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const loginRequired = route.data['loginRequired'];
        if (loginRequired === undefined || this.authServce.isLogged === loginRequired) { return true; }

        if (loginRequired) {
            const returnUrl = state.url;
            return this.router.createUrlTree(['/auth/login'], { queryParams: { returnUrl } });
        }

        this.location.back();
        return this.router.createUrlTree(['/']);
    }

}