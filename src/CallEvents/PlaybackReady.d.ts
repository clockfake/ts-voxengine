import {CallEvent} from './$Implicit/CallEvent';
import {EventHandler} from '../$Implicit/EventHandler';

export = CallEvents;

declare global {
    export namespace CallEvents {
        export namespace PlaybackReady {
            export interface Event extends CallEvent<'Call.PlaybackReady'> {}

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
