import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import type { TouchEvent } from "react";


export interface GalleryImage {
  id: string | number;
  src: string;
  thumbnail?: string;
  alt: string;
  caption?: string;
}

interface WeddingGalleryProps {
  images: GalleryImage[];
  initialIndex?: number;
  showCaption?: boolean;
}

const SWIPE_THRESHOLD = 50;

export default function WeddingGallery({
  images,
  initialIndex = 0,
  showCaption = true,
}: WeddingGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const thumbnailRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const hasInteractedRef = useRef(false);

  const activeImage = images[activeIndex];

  const previousImage = useCallback(() => {
    hasInteractedRef.current = true;
    setIsImageLoaded(false);

    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1,
    );
  }, [images.length]);

  const nextImage = useCallback(() => {
    hasInteractedRef.current = true;
    setIsImageLoaded(false);

    setActiveIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1,
    );
  }, [images.length]);

  const selectImage = (index: number) => {
    if (index === activeIndex) return;

    hasInteractedRef.current = true;
    setIsImageLoaded(false);
    setActiveIndex(index);
  };

  const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0].clientX;
    const difference = touchStartX.current - touchEndX;

    if (Math.abs(difference) >= SWIPE_THRESHOLD) {
      if (difference > 0) {
        nextImage();
      } else {
        previousImage();
      }
    }

    touchStartX.current = null;
  };

  useEffect(() => {
    if (!images.length) return;
    if (!hasInteractedRef.current) return;

    const previousIndex =
      activeIndex === 0 ? images.length - 1 : activeIndex - 1;

    const nextIndex =
      activeIndex === images.length - 1 ? 0 : activeIndex + 1;

    [images[previousIndex], images[nextIndex]].forEach((image) => {
      const preloadImage = new Image();
      preloadImage.src = image.src;
    });

    thumbnailRefs.current[activeIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeIndex, images]);

  useEffect(() => {
    if (!isLightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        previousImage();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [isLightboxOpen, nextImage, previousImage]);

  if (!images.length) {
    return (
      <div className="wedding-gallery-empty">
        Belum ada foto yang tersedia.
      </div>
    );
  }

  return (
    <>
      <section
        className="wedding-gallery"
        aria-label="Galeri foto pernikahan"
      >
        <div
          className="wedding-gallery__stage"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="wedding-gallery__image-wrapper">
            <div
              className={`wedding-gallery__skeleton ${
                isImageLoaded ? "wedding-gallery__skeleton--hidden" : ""
              }`}
            />

            <img
              key={activeImage.id}
              className={`wedding-gallery__main-image ${
                isImageLoaded
                  ? "wedding-gallery__main-image--visible"
                  : ""
              }`}
              src={activeImage.src}
              alt={activeImage.alt}
              draggable={false}
              onLoad={() => setIsImageLoaded(true)}
              onClick={() => setIsLightboxOpen(true)}
            />

            <div className="wedding-gallery__gradient" />

            <button
              type="button"
              className="wedding-gallery__navigation wedding-gallery__navigation--left"
              aria-label="Foto sebelumnya"
              onClick={previousImage}
            >
              <ChevronLeftIcon />
            </button>

            <button
              type="button"
              className="wedding-gallery__navigation wedding-gallery__navigation--right"
              aria-label="Foto berikutnya"
              onClick={nextImage}
            >
              <ChevronRightIcon />
            </button>

            <button
              type="button"
              className="wedding-gallery__fullscreen"
              aria-label="Buka foto penuh"
              onClick={() => setIsLightboxOpen(true)}
            >
              <ExpandIcon />
            </button>

            <span className="wedding-gallery__counter">
              {String(activeIndex + 1).padStart(2, "0")}
              <span>/</span>
              {String(images.length).padStart(2, "0")}
            </span>

            {showCaption && activeImage.caption && (
              <div className="wedding-gallery__caption">
                <p>{activeImage.caption}</p>
              </div>
            )}
          </div>
        </div>

        <div className="wedding-gallery__thumbnails-wrapper">
          <div className="wedding-gallery__thumbnails">
            {images.map((image, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={image.id}
                  ref={(element) => {
                    thumbnailRefs.current[index] = element;
                  }}
                  type="button"
                  className={`wedding-gallery__thumbnail ${
                    isActive
                      ? "wedding-gallery__thumbnail--active"
                      : ""
                  }`}
                  aria-label={`Tampilkan foto ${index + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => selectImage(index)}
                >
                  <img
                    src={image.thumbnail ?? image.src}
                    alt=""
                    loading="lazy"
                    draggable={false}
                  />

                  <span className="wedding-gallery__thumbnail-overlay" />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {isLightboxOpen && (
        <div
          className="wedding-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Tampilan foto penuh"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            type="button"
            className="wedding-lightbox__close"
            aria-label="Tutup tampilan penuh"
            onClick={() => setIsLightboxOpen(false)}
          >
            <CloseIcon />
          </button>

          <button
            type="button"
            className="wedding-lightbox__navigation wedding-lightbox__navigation--left"
            aria-label="Foto sebelumnya"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
          >
            <ChevronLeftIcon />
          </button>

          <div
            className="wedding-lightbox__content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              key={`lightbox-${activeImage.id}`}
              src={activeImage.src}
              alt={activeImage.alt}
              draggable={false}
            />

            {showCaption && activeImage.caption && (
              <div className="wedding-lightbox__caption">
                <p>{activeImage.caption}</p>
                <span>
                  {activeIndex + 1} / {images.length}
                </span>
              </div>
            )}
          </div>

          <button
            type="button"
            className="wedding-lightbox__navigation wedding-lightbox__navigation--right"
            aria-label="Foto berikutnya"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
          >
            <ChevronRightIcon />
          </button>
        </div>
      )}
    </>
  );
}

function ChevronLeftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      aria-hidden="true"
    >
      <path
        d="M15 18 9 12l6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      aria-hidden="true"
    >
      <path
        d="m9 18 6-6-6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
    >
      <path
        d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      aria-hidden="true"
    >
      <path
        d="M6 6l12 12M18 6 6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}