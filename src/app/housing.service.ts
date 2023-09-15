import { Injectable } from '@angular/core';// đây là dòng định nghĩa về một service
import { Housinglocation } from './housinglocation';// lấy interface
@Injectable({
  providedIn: 'root' // đảm bảo tính đồng nhất của dữ liệu
  // và trạng thái trên toàn bộ ứng dụng
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<Housinglocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<Housinglocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
  //method giúp nhận các thông tin người dùng khi submit và in ra log
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
