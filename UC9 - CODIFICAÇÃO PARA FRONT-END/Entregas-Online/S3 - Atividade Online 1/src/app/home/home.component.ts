import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

// let imageSrc: string[] = [];
// let imageAlt: string[] = [];

// let indexCarousel: number;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})




export class HomeComponent implements OnInit {

  // carouselAdd(a: string, b: string): void {
  //   imageSrc.push(a);
  //   imageAlt.push(b);
  //   indexCarousel = indexCarousel + 1;
  // }

  // carouselExibir(): string {

  //   console.log(indexCarousel + "<" + imageSrc.length);

  //   if (indexCarousel < imageSrc.length && indexCarousel >= 0) {
  //     return "<img src='" + imageSrc[indexCarousel] + "' alt='" + imageAlt[indexCarousel] + "' class='carrouselitem'>";
  //   } else {
  //     indexCarousel = 0;
  //     return "<img src='" + imageSrc[indexCarousel] + "' alt='" + imageAlt[indexCarousel] + "' class='carrouselitem'>";
  //   }

  // }

  // carouselInc(): void {
  //   indexCarousel = indexCarousel + 1;
  //   this.carouselExibir();
  // }

  constructor() { }


  ngOnInit(): void {
    // indexCarousel = 0;
    // let resposta: string = this.carouselExibir();
    // const obs$ = interval(5000);
    // // obs$.subscribe(() => {
    //   indexCarousel = indexCarousel + 1;
    //   let resposta: string = this.carouselExibir();
    // });


  }



}