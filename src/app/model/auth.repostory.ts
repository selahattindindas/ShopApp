import { Injectable, OnInit } from "@angular/core";
import { Auth } from "./auth.model";

@Injectable()
export class AuthRepostory implements OnInit{
    private auth: Auth[] = [];
    ngOnInit(): void {
    }
    getAuth(id:number){
        return this.auth.find(i => i.id === id);
     }
     getAuths():Auth[]{
        return this.auth;
     }
}