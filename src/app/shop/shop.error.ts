import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";

export class ErrorInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((response: HttpErrorResponse) => {
                let message = "geçersiz e-posta ve geçersiz şifre.";
                if (response.error.error) {
                    if (response.status === 401) {
                        message = "Giriş izniniz yok";
                        console.log(message);
                        return throwError(message);
                    } else {
                        switch (response.error.error.message) {
                            case "EMAIL_EXISTS":
                                message = "e-posta adresi kullanılmaktadır.";
                                break;
                            case "EMAIL_NOT_FOUND":
                                message = "hatalı e-posta adresi.";
                                break;
                            case "INVALID_PASSWORD":
                                message = "hatalı parola.";
                                break;
                        }}
                }
                return throwError(message);
            })
        )
    }
}