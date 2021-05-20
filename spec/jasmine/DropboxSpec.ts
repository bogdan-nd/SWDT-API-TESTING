import {DropboxController} from "../../controllers/DropboxController";

let dropboxController = new DropboxController();

describe("Uploading guitar jasmine to DropBox", () => {
    it("Guitar jasmine has been loaded successfully!", async () => {
        const response = await dropboxController.uploadFile();
        const statusCode = await response.status;
        expect(statusCode).toBe(200);
    }, 10000);
})

describe("Getting guitar jasmine meta data from DropBox", () => {
    it("Guitar jasmine meta data has been gotten successfully!", async () => {
        const response = await dropboxController.getMetadata();
        const statusCode = await response.status;
        expect(statusCode).toBe(200);
    }, 10000);
})

describe("Deleting guitar jasmine from DropBox", () => {
    it("Guitar jasmine has been deleted successfully!", async () => {
        const response = await dropboxController.deleteFile();
        const statusCode = await response.status;
        expect(statusCode).toBe(200);
    }, 10000);
})
