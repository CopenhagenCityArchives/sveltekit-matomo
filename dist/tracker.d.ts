/// <reference types="svelte" />
export interface Tracker {
    /** Log a page view */
    trackPageView: (customTitle?: string) => void;
    /** Log an event with an event category (Videos, Music, Games...), an event
     *  action (Play, Pause, Duration, Add Playlist, Downloaded, Clicked...), and an
     *  optional event name and optional numeric value. */
    trackEvent: (category: string, action: string, name?: string, value?: number) => void;
    /** Log an internal site search for a specific keyword, in an optional category,
     *  specifying the optional count of search results in the page. */
    trackSiteSearch: (keyword: string, category?: string, resultsCount?: number) => void;
    /** Install a Heart beat timer that will send additional requests to Matomo in
     *  order to better measure the time spent in the visit. */
    enableHeartBeatTimer: (activeTimeInSeconds?: number) => void;
    /** Install link tracking on all applicable link elements. Set the enable parameter
     *  to true to use pseudo click-handler (treat middle click and open contextmenu as
     *  left click). A right click (or any click that opens the context menu) on a link
     *  will be tracked as clicked even if "Open in new tab" is not selected. If "false"
     *  (default), nothing will be tracked on open context menu or middle click. */
    enableLinkTracking: (enable?: boolean) => void;
    /** Override the page's reported URL */
    setCustomUrl: (url: string) => void;
    /** Set to true to not track users who opt out of tracking using Mozilla's
     * (proposed) Do Not Track setting. */
    setDoNotTrack: (bool: boolean) => void;
    /** Set a custom dimension. (requires Custom Dimensions plugin) */
    setCustomDimension: (dimensionID: number, value: string) => void;
    /** By default, the Matomo tracker assumes consent to tracking. To change this
     *  behavior so nothing is tracked until a user consents, you must call
     *  requireConsent. */
    requireConsent: () => void;
    /** Disable all first party cookies. Existing Matomo cookies for this website
     *  will be deleted on the next page view. Cookies will be even disabled if the
     *  user has given cookie consent using the method */
    disableCookies: () => void;
    /** Enable cross domain linking. */
    enableCrossDomainLinking: () => void;
    /** Set array of hostnames or domains to be treated as local. */
    setDomains: (domains: string[]) => void;
}
export declare const tracker: import("svelte/store").Writable<Tracker>;
