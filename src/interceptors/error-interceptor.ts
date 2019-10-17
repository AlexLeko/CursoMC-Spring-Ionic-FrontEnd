import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log("passou interceptor");

        return next.handle(req)
        .catch((error, caught) => {

            // recupera somente o errors da Response.
            let errorObj = error;
            if (errorObj.error) {
                errorObj = errorObj.error;
            }

            // converter para JSON
            if (!errorObj.status){
                errorObj = JSON.parse(errorObj);
            }

            // imprime o erro.
            console.log("Erro detectado pelo Interceptor");
            console.log(errorObj);

            return Observable.throw(errorObj);
        }) as any;
    }
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};