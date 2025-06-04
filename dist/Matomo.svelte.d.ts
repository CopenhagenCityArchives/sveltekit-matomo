import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        url?: string | undefined;
        siteId?: number | undefined;
        disableCookies?: boolean | undefined;
        requireConsent?: boolean | undefined;
        doNotTrack?: boolean | undefined;
        enableCrossDomainLinking?: boolean | undefined;
        domains?: string[] | undefined;
        heartBeat?: number | null | undefined;
        linkTracking?: boolean | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MatomoProps = typeof __propDef.props;
export type MatomoEvents = typeof __propDef.events;
export type MatomoSlots = typeof __propDef.slots;
export default class Matomo extends SvelteComponent<MatomoProps, MatomoEvents, MatomoSlots> {
}
export {};
