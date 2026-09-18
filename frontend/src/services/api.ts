import { ajax } from "rxjs/ajax";
import { Tour } from "../shared/models/tour";
import { Observable } from "rxjs";

const baseUrl = "https://localhost:44364";

export function getTours(): Observable<Tour[]> {
    return ajax.getJSON<Tour[]>(`${baseUrl}/api/tours/get-tours`).pipe();
}