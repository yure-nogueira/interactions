import { ChainAnimations } from './base/chain.animations';
import { FadeAnimations } from './base/fade.animations';
import { ScaleAnimations } from './base/scale.animations';
import { SlideAnimations } from './base/slide.animations';
import { MaskAnimations } from './compositions/mask.animations';
import { ScrollTriggerAnimations } from './scroll-trigger/scroll-trigger.animations';
export declare namespace Animations {
    /**
     * Base
     */
    const chain: typeof ChainAnimations.chain;
    const slideX: typeof SlideAnimations.slideX;
    const slideY: typeof SlideAnimations.slideY;
    const slideXY: typeof SlideAnimations.slideXY;
    const fadeIn: typeof FadeAnimations.fadeIn;
    const fadeOut: typeof FadeAnimations.fadeOut;
    const scale: typeof ScaleAnimations.scale;
    const pulse: typeof ScaleAnimations.pulse;
    /**
     * Compositions
     */
    const mask: typeof MaskAnimations.mask;
    /**
     * Scroll Trigger
     */
    const oneWayScrollTrigger: typeof ScrollTriggerAnimations.oneWayScrollTrigger;
}
