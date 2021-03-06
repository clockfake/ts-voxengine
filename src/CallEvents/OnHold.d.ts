import {CallEvent} from './$Implicit/CallEvent';
import {EventHandler} from '../$Implicit/EventHandler';

declare global {
    export namespace CallEvents {
        export namespace OnHold {
            export interface Event extends CallEvent<'Call.OnHold'> {}

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
