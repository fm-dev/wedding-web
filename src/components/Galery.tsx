import { useEffect } from 'react';
import '../index.css';

import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-video.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

import fjGallery from 'flickr-justified-gallery';

import image1 from '../assets/gallery/7R405836.jpg';
import image2 from '../assets/gallery/7R405850.jpg';
import image3 from '../assets/gallery/7R405781.jpg';
import image4 from '../assets/gallery/7R405831.jpg';
import image5 from '../assets/gallery/7R405975.jpg';
// import image6 from '../assets/gallery/7R405848.jpg';
// import image7 from '../assets/gallery/7R405849.jpg';
// import image8 from '../assets/gallery/7R405850.jpg';
// import image9 from '../assets/gallery/7R405940.jpg';
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
          data-lg-size="1600-1126"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@juanster' >Juan Davila</a></h4><p>Location - <a href='Bled, Slovenia'>Bled, Slovenia</a> Wooded lake island </p>"
        >
          <img
            className="img-responsive"
            src="https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
          />
        </a>
        <a
          data-lg-size="1600-1063"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@davidmarcu' >David Marcu</a></h4><p>Location - <a href='https://unsplash.com/s/photos/ciuca%C8%99-peak%2C-romania'>Ciucaș Peak, Romania</a> Alone in the unspoilt wilderness </p>"
        >
          <img
            className="img-responsive"
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
          />
        </a>
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
      </LightGallery>
    </div>
  );
};


