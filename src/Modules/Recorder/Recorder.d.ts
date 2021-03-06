import {EventHandler} from '../../$Implicit/EventHandler';

export = Recorder;

declare global {
    export interface Recorder {
        addEventListener(event: RecorderEvents.RecorderError, handler: RecorderEvents.RecorderError.Handler): void;
        addEventListener(event: RecorderEvents.Started, handler: RecorderEvents.Started.Handler): void;
        addEventListener(event: RecorderEvents.Stopped, handler: RecorderEvents.Stopped.Handler): void;

        /**
         * Adds handler for specific event generated by Recorder. Use
         * only functions as handlers; anything except a function leads
         * to the error and scenario termination when a handler will be
         * called.
         *
         * @param event Event class (e.g.
         * {@link RecorderEvents.Stopped}).
         * @param handler Handler function. A single parameter is
         * passed - object with event information.
         */
        addEventListener<E>(event: any, handler: EventHandler<E>): void;

        /**
         * Mute/unmute whole record without detaching media sources
         * from it.
         *
         * @param doMute Mute/unmute switch.
         */
        mute(doMute: boolean): void;
        
        removeEventListener(event: RecorderEvents.RecorderError, handler?: RecorderEvents.RecorderError.Handler): void;
        removeEventListener(event: RecorderEvents.Started, handler?: RecorderEvents.Started.Handler): void;
        removeEventListener(event: RecorderEvents.Stopped, handler?: RecorderEvents.Stopped.Handler): void;

        /**
         * Removes handler for specific event generated by Recorder.
         *
         * @param event Event class (e.g.
         * {@link RecorderEvents.Stopped}).
         * @param handler Handler function. If not specified, all event
         * listeners are removed.
         */
        removeEventListener<E>(event: any, handler?: EventHandler<E>): void;

        /**
         * Stop recording and triggers the
         * {@link RecorderEvents.Stopped} event.
         */
        stop(): void;
    }
}
