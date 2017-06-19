import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
let apiUrl = 'http://localhost:8000/fournisseurs/';
let apiUrl2 = 'http://localhost:8000/offres/';
  @Injectable()
  export class WebService {
    constructor(
    public http: Http){}
    fournisseurs(){

                return new Promise((resolve, reject) => {
                  let headers = new Headers();
                  headers.append('Content-Type', 'application/json');
                  headers.append('Accept','*/*');
                  headers.append('User-Agent','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit (KHTML, like Gecko) Chrome Safari');
                  headers.append('Access-Control-Allow-Origin','*');
                  headers.append('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE, OPTIONS');
                  headers.append('Access-Control-Max-Age','3600');
                  headers.append('Access-Control-Allow-Headers','x-requested-with,origin,content-type,accept,X-XSRF-TOKEN');
                  headers.append('Access-Control-Allow-Credentials','true');
                  this.http.get(apiUrl, headers)
                  .map( res => res.json())
                  .subscribe(data => {
                  resolve(data);
                            },
                              err => {
                              reject(err);
                              console.log("une erreur s'est produite "+err);
                              });
                });
    }
    offres(){
                return new Promise((resolve, reject) => {
                  let headers = new Headers();
                  headers.append('Content-Type', 'application/json');
                  headers.append('Accept','*/*');
                  headers.append('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit (KHTML, like Gecko) Chrome Safari');
                  headers.append('Access-Control-Allow-Origin','*');
                  headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
                  headers.append('Access-Control-Max-Age','3600');
                  headers.append('Access-Control-Allow-Headers', 'x-requested-with,origin,content-type,accept,X-XSRF-TOKEN');
                  headers.append('Access-Control-Allow-Credentials' , 'true');

                  this.http.get(apiUrl2, headers)
                  .map( res => res.json())
                  .subscribe(data => {
                  resolve(data);
                            },
                              err => {
                              reject(err);
                              console.log("une erreur s'est produite"+err);
                              }
                              );
                });
    }
    faq(){

                return new Promise((resolve, reject) => {
                  let headers = new Headers();
                  headers.append('Content-Type', 'application/json');
                  headers.append('Accept','*/*');
                  headers.append('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit (KHTML, like Gecko) Chrome Safari');
                  headers.append('Access-Control-Allow-Origin', '*');
                  headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
                  headers.append('Access-Control-Max-Age', '3600');
                  headers.append('Access-Control-Allow-Headers', 'x-requested-with,origin,content-type,accept,X-XSRF-TOKEN');
                  headers.append('Access-Control-Allow-Credentials' , 'true');

                  this.http.get('http://localhost:8000/faq/', headers)
                  .map( res => res.json())
                  .subscribe(data => {
                  resolve(data);
                            },
                              err => {
                              reject(err);
                              console.log("une erreur s'est produite"+err);
                              }
                              );
                });
    }
    commandes(){

                return new Promise((resolve, reject) => {
                  let headers = new Headers();
                  headers.append('Content-Type', 'application/json');
                  headers.append('Accept','*/*');
                  headers.append('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit (KHTML, like Gecko) Chrome Safari');
                  headers.append('Access-Control-Allow-Origin', '*');
                  headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
                  headers.append('Access-Control-Max-Age', '3600');
                  headers.append('Access-Control-Allow-Headers', 'x-requested-with,origin,content-type,accept,X-XSRF-TOKEN');
                  headers.append('Access-Control-Allow-Credentials' , 'true');

                  this.http.get('http://localhost:8000/commandes/', headers)
                  .map( res => res.json())
                  .subscribe(data => {
                  resolve(data);
                            },
                              err => {
                              reject(err);
                              console.log("une erreur s'est produite"+err);
                              }
                              );
                });
    }
    login(credentials) {
      return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post(apiUrl, JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, err => {
            reject(err);
          });
      });

    }
    register(data) {
      return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        this.http.post(apiUrl, JSON.stringify(data), {headers:headers})
          .subscribe((res)=> {
          resolve(res.json());
          },(err) => {
            reject(err);
          });
      });
    }
    logout(){
      return new Promise((resolve, reject)=> {
        let headers = new Headers();
        headers.append('X-Auth-Token', localStorage.getItem('token'));

        this.http.post(apiUrl+'logout',{}, {headers:headers})
          .subscribe((res)=> {
            localStorage.clear();
          }, (err) =>{
            reject(err);
          });
      });
    }
    message(message) {
      return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post('http://localhost:8888/remote/index.php', JSON.stringify(message), {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, err => {
            reject(err);
          });
      });

    }
    modify_info(info) {
      return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post('http://localhost:8888/remote/index.php', JSON.stringify(info), {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, err => {
            reject(err);
          });
      });

    }
    commander(commande) {
      return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post('http://localhost:8888/remote/index.php', JSON.stringify(commande), {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, err => {
            reject(err);
          });
      });

    }
  }
