let reporters  = require("jasmine-reporters");
let DropboxController = require("../../controllers/DropboxController");

let dropboxController = new DropboxController();

describe("Uploading guitar jasmine to DropBox",() =>{
    it("Guitar jasmine has been loaded successfully!", async () =>{
        let responseStatus;

        await dropboxController.uploadFile()
            .then(response => responseStatus = response.status)
            .catch(error => console.log(error))

        expect(responseStatus).toBe(200);
    },10000);
})

describe("Getting guitar jasmine meta data from DropBox",() =>{
    it("Guitar jasmine meta data has been gotten successfully!", async () =>{
        let responseStatus = 0;

        await dropboxController.getMetadata()
            .then(response => responseStatus = response.status)
            .catch(error => console.log(error))

        expect(responseStatus).toBe(200);
    },10000);
})

describe("Deleting guitar jasmine from DropBox",() =>{
    it("Guitar jasmine has been deleted successfully!", async () =>{
        let responseStatus;

        await dropboxController.deleteFile()
            .then(response => responseStatus = response.status)
            .catch(error => console.log(error))

        expect(responseStatus).toBe(200);
    },10000);
})
