import { HttpErrorResponse } from "@angular/common/http"

export const errorMessage = (error: HttpErrorResponse): string => {
    return error?.error?.message ? `${error.status} - ${error?.error?.message}` : `${error.status} - ${error.statusText}`
}