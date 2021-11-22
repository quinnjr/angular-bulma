export interface BulmaCarouselOptions {
  initialSlide?: number;
  slidesToScroll?: number;
  slidesToShow?: number;
  navigation?: boolean;
  navigationKeys?: boolean;
  navigationSwipe?: boolean;
  pagination?: boolean;
  loop?: boolean;
  infinite?: boolean;
  effect?: string;
  duration?: number;
  timing?: string;
  autoplay?: boolean;
  autoplaySpeed?: number;
  pauseOnHover?: boolean;
  breakpoints?: Array<{
    changePoint: number;
    slidesToShow: number;
    slidesToScroll: number;
  }>;
  onReady?: () => void;
  icons: {
    previous: string;
    next: string;
  };
}
