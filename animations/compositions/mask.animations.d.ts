import { SlideDirection } from '../../enums/slide-direction.enums';
export declare namespace MaskAnimations {
    function mask(elements: Element | Element[] | Node | Node[] | NodeList, direction: keyof typeof SlideDirection): import("@ionic/core").Animation;
}
