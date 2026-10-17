import { ajax } from "rxjs/ajax";
import { Tour } from "../shared/models/tour";
import { map, Observable } from "rxjs";

const baseUrl = "https://localhost:44364";

export function getTours(): Observable<Tour[]> {
    return ajax.getJSON<Tour[]>(`${baseUrl}/api/tours/get-tours`).pipe();
}

export function addTour(tour: Tour): Observable<number> {
    return ajax.post<number>(`${baseUrl}/api/tours/add-tour`, tour, {
        'Content-Type': 'application/json'
    }).pipe(
        map(ajaxResponse => ajaxResponse.response)
    );
}