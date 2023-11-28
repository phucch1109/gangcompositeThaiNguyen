import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsServiceService {
  constructor() {}
  products = [
    {
      name: 'Nắp hố ga',
      materials: 'Composite hoặc gang',
      load: '12.5 tấn,25 tấn,40 tấn',
      size: '100x300,100x400,1000x500',
      image: 
      ['/assets/product/napHoGa/84f1f4198252aebf30d5d8579e72b74a7f1c674cc30991558e500097.webp',
       '/assets/product/napHoGa/0991b9476664ded8c46ca46395f1f8924d0bcb019a470642346292c9.webp',
       '/assets/product/napHoGa/4582d6fa6b87040f63455814bc1fc5f28deb716c3cc4fae65a9acad7.webp',
       '/assets/product/napHoGa/33779328eadc06514a760a55522ffef84ed3d525ccc531bf6611b289.webp'],
    },
    {
      name: 'Tấm sàn grating',
      materials: 'Gang',
      load: '12.5 tấn, 25 tấn, 40 tấn',
      size: '100x300,100x400,1000x500',
      image: ['/assets/z3871730215495_7f30a1c36bc52618fda1121cfda982c1.jpg'],
    },
    {
      name: 'Song chắn rác',
      materials: 'Composite (bao gồm cả khung)',
      load: '12.5 tấn, 25 tấn, 40 tấn',
      size: '100x300, 100x400, 1000x500',
      image: ['/assets/z3871730215495_7f30a1c36bc52618fda1121cfda982c1.jpg'],
    },
    {
      name: 'Bộ Ganivo',
      materials: 'Composite',
      load: '',
      size: '',
      image: ['/assets/z3871730215495_7f30a1c36bc52618fda1121cfda982c1.jpg'],
    },
    {
      name: 'Nắp bể cáp 4 cánh',
      materials: 'Composite',
      load: '12.5 tấn, 25 tấn, 40 tấn',
      size: '1500x750',
      image: ['/assets/z3871730215495_7f30a1c36bc52618fda1121cfda982c1.jpg'],
    },
    {
      name: 'Nắp hố điện',
      materials: 'Composite',
      load: '12.5 tấn, 40 tấn',
      size: '',
      image: ['/assets/z3871730215495_7f30a1c36bc52618fda1121cfda982c1.jpg'],
    },
    {
      name: 'Nắp bể cáp 2 cánh',
      materials: 'Gang cầu',
      load: '12.5 tấn, 40 tấn',
      size: '',
      image: ['/assets/z3871730215495_7f30a1c36bc52618fda1121cfda982c1.jpg'],
    },
    {
      name: 'Song thoát nước bể bơi',
      materials: 'Composite',
      load: '12.5 tấn, 25 tấn, 40 tấn',
      size: '100x300, 100x400, 1000x500',
      image: ['/assets/z3871730215495_7f30a1c36bc52618fda1121cfda982c1.jpg'],
    },
    {
      name: 'Bộ vỉa',
      materials: 'Composite',
      load: '12.5 tấn, 25 tấn, 40 tấn',
      size: '100x300, 100x400, 1000x500',
      image: ['/assets/z3871730215495_7f30a1c36bc52618fda1121cfda982c1.jpg'],
    },
    {
      name: 'Gạch dẫn hướng bờ dọc',
      materials: 'Căn cứ theo bản vẽ',
      load: 'Căn cứ theo bản vẽ',
      size: 'Căn cứ theo bản vẽ',
      image: ['/assets/z3871730215495_7f30a1c36bc52618fda1121cfda982c1.jpg'],
    },
    {
      name: 'Nắp ga điện',
      materials: 'Căn cứ theo bản vẽ',
      load: 'Căn cứ theo bản vẽ',
      size: 'Căn cứ theo bản vẽ',
      image: ['/assets/z3871730215495_7f30a1c36bc52618fda1121cfda982c1.jpg'],
    },
    {
      name: 'Khung gốc cây',
      materials: 'Căn cứ theo bản vẽ',
      load: 'Căn cứ theo bản vẽ',
      size: 'Căn cứ theo bản vẽ',
      image: ['/assets/z3871730215495_7f30a1c36bc52618fda1121cfda982c1.jpg'],
    },
    {
      name: 'Bộ thăm thu',
      materials: 'Composite hoặc gang',
      load: '12.5 tấn , 25 tấn, 40 tấn ',
      size: '100x300 , 100x400, 1000x500',
      image: ['/assets/z3871730215495_7f30a1c36bc52618fda1121cfda982c1.jpg'],
    },
    {
      name: 'Bộ thăm thu có gờ',
      materials: 'Composite hoặc gang',
      load: '12.5 tấn , 25 tấn, 40 tấn ',
      size: '100x300 , 100x400, 1000x500',
      image: ['/assets/z3871730215495_7f30a1c36bc52618fda1121cfda982c1.jpg'],
    },
    {
      name: 'Cánh văn ngăn mùi',
      materials: 'Căn cứ theo bản vẽ',
      load: 'Căn cứ theo bản vẽ',
      size: 'Căn cứ theo bản vẽ',
      image: ['/assets/z3871730215495_7f30a1c36bc52618fda1121cfda982c1.jpg'],
    },
  ];
}
