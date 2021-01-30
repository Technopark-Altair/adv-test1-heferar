import { Injectable } from '@angular/core';
import { Car } from "src/car.models";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars: Array<Car> = [
    {id: 1, brandName: "ВАЗ", modelName: "Патриот", priceRub: 120120},
    {id: 2, brandName: "Лада", modelName: "Калина", priceRub: 130130},
     {id: 3, brandName: "Жигуль", modelName: "2100", priceRub: 140140},
]}
