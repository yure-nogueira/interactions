import { Easing } from '../../../enums/easing.enums';
import { SlideDirection } from '../../../enums/slide-direction.enums';
export interface IMask {
    direction?: keyof typeof SlideDirection;
    duration: number;
    easing?: keyof typeof Easing;
}
