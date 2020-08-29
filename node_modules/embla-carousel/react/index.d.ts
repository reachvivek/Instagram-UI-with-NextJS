import { EmblaCarousel as EmblaCarouselType } from '../vanilla';
import { EmblaOptions } from '../vanilla/components/options';
import { FC, ReactNode } from 'react';
declare type PropType = {
    htmlTagName?: string;
    children?: ReactNode;
    className?: string;
};
declare function useEmblaCarousel(options?: EmblaOptions): [FC<PropType>, EmblaCarouselType?];
export { useEmblaCarousel };
