import cuid from 'cuid';

export class BulmaCarouselItem {
  /**
   * ID of the CarouselItem.
   * Default to a `cuid` if no ID is given.
   *
   * @type {string}
   * @memberof CarouselItem
   */
  public id: string = cuid();

  /**
   * Image source value of the CarouselItem/
   *
   * @type {string}
   * @memberof CarouselItem
   */
  public src: string;

  /**
   * Optional caption to include with the CarouselItem.
   *
   * @type {string}
   * @memberof CarouselItem
   */
  public caption?: string;
}
