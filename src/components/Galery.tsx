import { useEffect, useState } from 'react';
import '../index.css';

import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-video.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import fjGallery from 'flickr-justified-gallery';

// 1. Definisikan list gambar di luar komponen agar tidak di-render ulang
const IMAGES = [
  "https://wedding-fajri.s3.nevaobjects.id/nrimursjqvbyvbuzvsji.webp",
  "https://wedding-fajri.s3.nevaobjects.id/b6hgvbszjfghbwybfwpg.webp",
  "https://wedding-fajri.s3.nevaobjects.id/q0oezvlxhthdlgpyhzpy.webp",
  "https://wedding-fajri.s3.nevaobjects.id/z16oluuzkmc3mwtqshco.webp",
  "https://wedding-fajri.s3.nevaobjects.id/c1uv7cddikrv96eykn1v.webp",
  "https://wedding-fajri.s3.nevaobjects.id/eisztlp8fjvyxtzgpnyu.webp",
  "https://wedding-fajri.s3.nevaobjects.id/hnjyhriidm2tx4rlga5s.webp",
  "https://wedding-fajri.s3.nevaobjects.id/n3zfkaee9tlbcva0pchh.webp"
];

export const Gallery = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // 2. Preload semua gambar menggunakan Promise.all
    const loadImage = (src:any) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(src);
        img.onerror = (err) => reject(err);
      });
    };

    Promise.all(IMAGES.map((image) => loadImage(image)))
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((err) => {
        console.error("Gagal memuat beberapa gambar", err);
        // Tetap set true agar gallery tidak stuck loading jika ada 1 gambar rusak
        setImagesLoaded(true); 
      });
  }, []);

  // 3. Inisialisasi Justified Gallery hanya setelah gambar selesai di-preload & di-render
  useEffect(() => {
    if (imagesLoaded) {
      fjGallery(document.querySelectorAll('.gallery'), {
        itemSelector: '.gallery__item',
        rowHeight: 180,
        gutter: 2,
        rowHeightTolerance: 0.1,
        calculateItemsHeight: false,
      });
    }
  }, [imagesLoaded]);

  // Tampilkan loading screen sementara gambar diunduh di background
  if (!imagesLoaded) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
        <p>Memuat Galeri...</p> 
        {/* Kamu bisa ganti ini dengan spinner CSS buatanmu */}
      </div>
    );
  }

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
          className="gallery__item"
          data-src={IMAGES[0]}
          data-sub-html="<h4>Photo by - <a href='#' >Wedding </a></h4>"
        >
          <img className="img-responsive" src={IMAGES[0]} loading="eager" decoding="sync" />
        </a>

        <a data-lg-size="1600-2400" className="gallery__item" data-src={IMAGES[1]}>
          <img className="img-responsive" src={IMAGES[1]} loading="eager" decoding="sync" />
        </a>

        <a data-lg-size="1600-2398" className="gallery__item" data-src={IMAGES[2]}>
          <img className="img-responsive" src={IMAGES[2]} loading="eager" decoding="sync" />
        </a>

        <a data-lg-size="1600-1067" className="gallery__item" data-src={IMAGES[3]}>
          <img className="img-responsive" src={IMAGES[3]} loading="eager" decoding="sync" />
        </a>

        <a data-lg-size="1600-1067" className="gallery__item" data-src={IMAGES[4]}>
          <img className="img-responsive" src={IMAGES[4]} loading="eager" decoding="sync" />
        </a>

        <a data-lg-size="1600-2400" className="gallery__item" data-src={IMAGES[5]}>
          <img className="img-responsive" src={IMAGES[5]} loading="eager" decoding="sync" />
        </a>

        <a data-lg-size="1600-2398" className="gallery__item" data-src={IMAGES[6]}>
          <img className="img-responsive" src={IMAGES[6]} loading="eager" decoding="sync" />
        </a>

        <a data-lg-size="1600-2398" className="gallery__item" data-src={IMAGES[7]}>
          <img className="img-responsive" src={IMAGES[7]} loading="eager" decoding="sync" />
        </a>
      </LightGallery>
    </div>
  );
};