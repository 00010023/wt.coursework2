import emojis from "./emojis.json";

export function replaceEmojis(src) {
    const candidates = src.matchAll(/:([a-z0-9_]+):/g);
    for (const candidate of candidates) {
        const emoji = candidate[1];
        if ((emojis)[emoji]) {
            src = src.replace(`:${emoji}:`, (emojis)[emoji]);
        }
    }
    return src;
}
