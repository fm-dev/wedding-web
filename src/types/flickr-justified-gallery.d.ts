// src/types/flickr-justified-gallery.d.ts
declare module 'flickr-justified-gallery' {
  type FjGalleryOptions = {
    itemSelector?: string;
    rowHeight?: number;
    lastRow?: 'start' | 'center' | 'end' | 'justify' | 'hide';
    gutter?: number;
    rowHeightTolerance?: number;
    calculateItemsHeight?: boolean;
  };

  function fjGallery(
    elements: NodeListOf<Element> | Element[] | Element,
    options?: FjGalleryOptions
  ): void;

  export default fjGallery;
}