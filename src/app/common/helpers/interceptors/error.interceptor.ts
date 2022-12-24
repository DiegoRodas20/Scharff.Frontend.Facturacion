import { HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ErrorInterceptorService {

    constructor(
        private _messageService: MessageService,
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        return next.handle(req)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    // Catching Error Stage
                    if (error && error.error && error.error.error) {
                        let mensajeError = "";

                        for (let i of error.error.error) {
                            mensajeError += `${i}\n`
                        }

                        this._messageService.add(
                            {
                                severity: 'error',
                                summary: 'Error',
                                detail: mensajeError
                            })
                    }
                    return throwError(error); // any further errors are returned to frontend                    
                })
            );
    }
}
