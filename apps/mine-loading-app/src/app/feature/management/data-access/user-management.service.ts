import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { ResponseInterface } from "../../../shared/interface/response.interface";
import { UserInterface } from "../interface/user.interface";
import { Observable, map, shareReplay } from "rxjs";
import { GET_USER_API } from "../../../shared/api/api";

@Injectable({
    providedIn: 'root'
})
export class UserManagementService {

    private httpClient = inject(HttpClient)

    getUsers(): Observable<UserInterface[]> {
        return this.httpClient.get<ResponseInterface<UserInterface[]>>(GET_USER_API).pipe(map( result => result.data || []))
    }

    getRoles(): Observable<any[]> {
        return this.httpClient.get<ResponseInterface<any[]>>('api/roles/getRoles')
        .pipe(
            map( result => {
                const newResult = result.data.map( item => {
                    return { 
                        name: item.role_name,
                        code: item.id_role,
                        ...item 
                    }
                })
                return newResult || []
            })
        )
    }

    getMines(): Observable<any[]> {
        return this.httpClient.get<ResponseInterface<any[]>>('api/mines/getMines')
        .pipe(
            map( result => {
                const newResult = result.data.map( item => {
                    return { 
                        name: item.mine_name,
                        code: item.id_mine,
                        ...item 
                    }
                })
                return newResult || []
            })
        )
    }
}