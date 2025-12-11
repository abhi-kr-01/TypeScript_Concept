abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter : string
    ){}

    abstract getSepia() : void 

    getReelTime() : number {
        // some complex calculation
        return 8;
    }
}

// const hc = new TakePhoto("hc","xyz");  // it is not allowed to create onject of abstract class

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
    ){
        super(cameraMode,filter)
    }

    getSepia(): void {
        console.log("getting sepia...");
    }
}

const ak = new Instagram("test","Test",3);
