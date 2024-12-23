import { Units } from '../../enums/units.enums';
export declare namespace SlideAnimations {
    function slideX(elements: Element | Element[] | Node | Node[] | NodeList, start: number, startUnit: Units, end: number, endUnit: Units): import("@ionic/core").Animation;
    function slideY(elements: Element | Element[] | Node | Node[] | NodeList, start: number, startUnit: Units, end: number, endUnit: Units): import("@ionic/core").Animation;
    function slideXY(elements: Element | Element[] | Node | Node[] | NodeList, startX: number, startXUnit: Units, endX: number, endXUnit: Units, startY: number, startYUnit: Units, endY: number, endYUnit: Units): import("@ionic/core").Animation;
}
