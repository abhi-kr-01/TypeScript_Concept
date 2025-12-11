"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TakePhoto {
    cameraMode;
    filter;
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // some complex calculation
        return 8;
    }
}
// const hc = new TakePhoto("hc","xyz");  // it is not allowed to create onject of abstract class
class Instagram extends TakePhoto {
    cameraMode;
    filter;
    burst;
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("getting sepia...");
    }
}
const ak = new Instagram("test", "Test", 3);
//# sourceMappingURL=abstractClass.js.map