import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CarouselParagraph from './carousel-paragraph'
import CarouselTitle from './carousel-title'
import CarouselSlide from './carousel-slide'

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  }
  return (
    <section className="relative mb-5  max-lg:h-72 max-lg:w-72 lg:h-96 lg:w-96 ">
      <Slider {...settings}>
        <CarouselSlide
          title="Développement Full-Stack"
          paragraph="Créer des applications côté serveur robustes avec la pile MERN"
        />
        <CarouselSlide
          title="Conception Frontend réactive"
          paragraph="Créer des interfaces visuellement attrayantes et conviviales sur
            tous les appareils"
        />
        <CarouselSlide
          title="Applications Web personnalisées"
          paragraph="Construire des solutions sur mesure pour les exigences commerciales
            uniques"
        />
        <CarouselSlide
          title="Développement et intégration d'API"
          paragraph="Créez et intégrez des API RESTful pour une communication de données
            transparente"
        />
      </Slider>
    </section>
  )
}
