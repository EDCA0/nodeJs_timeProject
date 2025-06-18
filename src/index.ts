export enum options {
    weekday = "long",
    year = "numeric",
    month = "long",
    day = "numeric",
    hour = "numeric",
    minute = "numeric",
    second = "numeric",
    timeZoneName = "short"
}

export function getTimestamp () : number {
    return Date.now();
}

export function getLongTime (locale = "es-ES") : string {
    return new Date().toLocaleDateString(locale, options)
}

