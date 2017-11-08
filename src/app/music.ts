export class Music {
    name: string;
    artist: string[];
    id: string;
    sourceId: number;

    constructor(name: string, artist: string[], id: string, sourceId: number) {
        this.name = name;
        this.artist = artist;
        this.id = id;
        this.sourceId = sourceId;
    }

}