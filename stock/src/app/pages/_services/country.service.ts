import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor(private http: HttpClient) {}

  async listcountry(params) {
    return await this.http.post("/geo/getcountry", params).toPromise();
  }
  async editcountrygeo(params) {
    return await this.http.post("/geo/editcountry", params).toPromise();
  }
  async listcountrygeo(params) {
    return await this.http.post("/geo/listcountry", params).toPromise();
  }
  async addcountrygeo(params) {
    return await this.http.post("/geo/addCountry", params).toPromise();
  }
  async liststate(params) {
    return await this.http.post("/geo/getstate", params).toPromise();
  }

  async listdictgeo(params) {
    return await this.http.post("/geo/listdistrict", params).toPromise();
  }

  async addgeo(params) {
    return await this.http.post("/geo/addCity", params).toPromise();
  }

  async liststategeo(params) {
    return await this.http.post("/geo/liststate", params).toPromise();
  }

  async listdistrict(param) {
    console.log("dest");
    return await this.http.post("/geo/getdistrict", param).toPromise();
  }

  async listcity(param) {
    console.log("city");
    return await this.http.post("/geo/getcity", param).toPromise();
  }

  async listcitygeo(param) {
    return await this.http.post("/geo/listCity", param).toPromise();
  }

  async listpincodegeo(params) {
    console.log("list pincode");
    return await this.http.post("/geo/listpincode", params).toPromise();
  }

  async editDistrictgeo(params) {
    return await this.http.post("/geo/editDistrict", params).toPromise();
  }

  async addDistrictgeo(params) {
    return await this.http.post("/geo/addDistrict", params).toPromise();
  }

  async listareageo(params) {
    return await this.http.post("/geo/listArea", params).toPromise();
  }
  async editcitygeo(params) {
    return await this.http.post("/geo/editCity", params).toPromise();
  }

  async addcitygeo(params) {
    console.log("addcity api");
    return await this.http.post("/geo/addCity", params).toPromise();
  }
  async listarea(param) {
    console.log("city");
    return await this.http.post("/geo/getarea", param).toPromise();
  }

  async editPincodegeo(params) {
    return await this.http.post("/geo/editPincode", params).toPromise();
  }

  async addPincodegeo(params) {
    return await this.http.post("/geo/addpincode", params).toPromise();
  }

  async addstategeo(params) {
    return await this.http.post("/geo/addState", params).toPromise();
  }

  async editstategeo(params) {
    return await this.http.post("/geo/editState", params).toPromise();
  }

  async addareageo(params) {
    return await this.http.post("/geo/addArea", params).toPromise();
  }

  async editareageo(params) {
    return await this.http.post("/geo/editArea", params).toPromise();
  }

  async getcountry(params) {
    return await this.http.post("/geo/getcountryedit", params).toPromise();
  }

  async getstateedit(params) {
    return await this.http.post("/geo/getstateedit", params).toPromise();
  }

  async getdistrictedit(params) {
    return await this.http.post("/geo/getdistrictedit", params).toPromise();
  }

  async getareaedit(params) {
    return await this.http.post("/geo/getareaedit", params).toPromise();
  }

  async getcityedit(params) {
    return await this.http.post("/geo/getcityedit", params).toPromise();
  }

  async getpincodeedit(params) {
    return await this.http.post("/geo/getpincodeedit", params).toPromise();
  }
}