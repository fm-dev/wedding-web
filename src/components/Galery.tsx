import { useEffect } from 'react';
import '../index.css';

import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-video.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
// import lgThumbnail from 'lightgallery/plugins/thumbnail';

import fjGallery from 'flickr-justified-gallery';

import image1 from '../assets/gallery/7R405836.jpg';
import image2 from '../assets/gallery/7R405850.jpg';
import image3 from '../assets/gallery/7R405781.jpg';
import image4 from '../assets/gallery/7R405831.jpg';
import image5 from '../assets/gallery/7R405975.jpg';
import image6 from '../assets/gallery/7R405848.jpg';
import image7 from '../assets/gallery/7R405849.jpg';
import image8 from '../assets/gallery/7R405850.jpg';
import image9 from '../assets/gallery/7R405940.jpg';
// import image10 from '../assets/gallery/7R405945.jpg';
// import image11 from '../assets/gallery/7R405966.jpg';
export const Gallery = () => {
  useEffect(() => {
    fjGallery(document.querySelectorAll('.gallery'), {
      itemSelector: '.gallery__item',
      rowHeight: 180,
      lastRow: 'start',
      gutter: 2,
      rowHeightTolerance: 0.1,
      calculateItemsHeight: false,
    });
  }, []);

  return (
    <div>

      <LightGallery
        plugins={[lgZoom, lgVideo]}
        mode="lg-fade"
        pager={false}
        thumbnail={true}
        galleryId={'nature'}
        autoplayFirstVideo={false}
        elementClassNames={'gallery'}
        mobileSettings={{
          controls: false,
          showCloseIcon: false,
          download: false,
          rotate: false,
        }}
      >
        <a
          data-lg-size="1600-2400"
          data-pinterest-text="Pin it2"
          data-tweet-text="lightGallery slide  2"
          className="gallery__item"
          data-src={image1}
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@therawhunter' >Massimiliano Morosinotto </a></h4><p> Location - <a href='https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia'>Tre Cime di Lavaredo, Italia</a>This is the Way</p>"
        >
          <img
            className="img-responsive"
            src={image1}
          />
        </a>
        <a
          data-lg-size="1600-2400"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src={image2}
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@thesaboo' >Sascha Bosshard </a></h4><p> Location - <a href='https://unsplash.com/s/photos/pizol%2C-mels%2C-schweiz'>Pizol, Mels, Schweiz</a></p>"
        >
          <img
            className="img-responsive"
            src={image2}
          />
        </a>
        <a
          data-lg-size="1600-2398"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src={image3}
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@yusufevli' >Yusuf Evli </a></h4><p> Foggy Road</p>"
        >
          <img
            className="img-responsive"
            src={image3}
          />
        </a>
        <a
          data-lg-size="1600-1067"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src={image4}
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Jay Mantri</a></h4><p>  Misty shroud over a forest</p>"
        >
          <img
            className="img-responsive"
            src={image4}
          />
        </a>
        <a
          data-lg-size="1600-1067"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src={image5}
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Florian van Duyn</a></h4><p>Location - <a href='Bled, Slovenia'>Bled, Slovenia</a> </p>"
        >
          <img
            className="img-responsive"
            src={image5}
          />
        </a>
        <a
          data-lg-size="1600-2400"
          data-pinterest-text="Pin it2"
          data-tweet-text="lightGallery slide  2"
          className="gallery__item"
          data-src={image9}
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@therawhunter' >Massimiliano Morosinotto </a></h4><p> Location - <a href='https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia'>Tre Cime di Lavaredo, Italia</a>This is the Way</p>"
        >
          <img
            className="img-responsive"
            src={image9}
          />
        </a>
        <a
          data-lg-size="1600-2400"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src={image8}
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@thesaboo' >Sascha Bosshard </a></h4><p> Location - <a href='https://unsplash.com/s/photos/pizol%2C-mels%2C-schweiz'>Pizol, Mels, Schweiz</a></p>"
        >
          <img
            className="img-responsive"
            src={image8}
          />
        </a>
        <a
          data-lg-size="1600-2398"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src={image7}
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@yusufevli' >Yusuf Evli </a></h4><p> Foggy Road</p>"
        >
          <img
            className="img-responsive"
            src={image7}
          />
        </a>
        <a
          data-lg-size="1600-2398"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src={image6}
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@yusufevli' >Yusuf Evli </a></h4><p> Foggy Road</p>"
        >
          <img
            className="img-responsive"
            src={image6}
          />
        </a>
      </LightGallery>
    </div>
  );
};


