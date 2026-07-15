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
          data-src="https://wedding-fajri.s3.nevaobjects.id/nrimursjqvbyvbuzvsji.webp"
          data-sub-html="<h4>Photo by - <a href=nrimursjqvbyvbuzvsji.webp' >Wedding </a></h4>"
        >
          <img
            className="img-responsive"
            src="https://wedding-fajri.s3.nevaobjects.id/nrimursjqvbyvbuzvsji.webp"
          />
        </a>
        <a
          data-lg-size="1600-2400"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://wedding-fajri.s3.nevaobjects.id/b6hgvbszjfghbwybfwpg.webp"
        >
          <img
            className="img-responsive"
            src="https://wedding-fajri.s3.nevaobjects.id/b6hgvbszjfghbwybfwpg.webp"
          />
        </a>
        <a
          data-lg-size="1600-2398"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://wedding-fajri.s3.nevaobjects.id/q0oezvlxhthdlgpyhzpy.webp"
        >
          <img
            className="img-responsive"
            src="https://wedding-fajri.s3.nevaobjects.id/q0oezvlxhthdlgpyhzpy.webp"
          />
        </a>
        <a
          data-lg-size="1600-1067"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://wedding-fajri.s3.nevaobjects.id/z16oluuzkmc3mwtqshco.webp"
        >
          <img
            className="img-responsive"
            src="https://wedding-fajri.s3.nevaobjects.id/z16oluuzkmc3mwtqshco.webp"
          />
        </a>
        <a
          data-lg-size="1600-1067"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://wedding-fajri.s3.nevaobjects.id/c1uv7cddikrv96eykn1v.webp"
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Florian van Duyn</a></h4><p>Location - <a href='Bled, Slovenia'>Bled, Slovenia</a> </p>"
        >
          <img
            className="img-responsive"
            src="https://wedding-fajri.s3.nevaobjects.id/c1uv7cddikrv96eykn1v.webp"
          />
        </a>
        <a
          data-lg-size="1600-2400"
          data-pinterest-text="Pin it2"
          data-tweet-text="lightGallery slide  2"
          className="gallery__item"
          data-src="https://wedding-fajri.s3.nevaobjects.id/eisztlp8fjvyxtzgpnyu.webp"
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@therawhunter' >Massimiliano Morosinotto </a></h4><p> Location - <a href='https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia'>Tre Cime di Lavaredo, Italia</a>This is the Way</p>"
        >
          <img
            className="img-responsive"
            src="https://wedding-fajri.s3.nevaobjects.id/eisztlp8fjvyxtzgpnyu.webp"
          />
        </a>
        <a
          data-lg-size="1600-2400"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://wedding-fajri.s3.nevaobjects.id/b6hgvbszjfghbwybfwpg.webp"
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@thesaboo' >Sascha Bosshard </a></h4><p> Location - <a href='https://unsplash.com/s/photos/pizol%2C-mels%2C-schweiz'>Pizol, Mels, Schweiz</a></p>"
        >
          <img
            className="img-responsive"
            src="https://wedding-fajri.s3.nevaobjects.id/b6hgvbszjfghbwybfwpg.webp"
          />
        </a>
        <a
          data-lg-size="1600-2398"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://wedding-fajri.s3.nevaobjects.id/hnjyhriidm2tx4rlga5s.webp"
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@yusufevli' >Yusuf Evli </a></h4><p> Foggy Road</p>"
        >
          <img
            className="img-responsive"
            src="https://wedding-fajri.s3.nevaobjects.id/hnjyhriidm2tx4rlga5s.webp"
          />
        </a>
        <a
          data-lg-size="1600-2398"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://wedding-fajri.s3.nevaobjects.id/n3zfkaee9tlbcva0pchh.webp"
          // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@yusufevli' >Yusuf Evli </a></h4><p> Foggy Road</p>"
        >
          <img
            className="img-responsive"
            src="https://wedding-fajri.s3.nevaobjects.id/n3zfkaee9tlbcva0pchh.webp"
          />
        </a>
      </LightGallery>
    </div>
  );
};


