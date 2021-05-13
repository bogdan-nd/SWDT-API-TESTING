let reporters  = require("jasmine-reporters");
let DropboxController = require("../DropboxController");

// let teamCityReporter = new reporters.TeamCityReporter();
// jasmine.getEnv().addReporter(teamCityReporter);
let dropboxController = new DropboxController();

describe("Uploading guitar file to DropBox",() =>{
    it("Guitar file has been loaded successfully!", async () =>{
        let responseStatus;

        await dropboxController.uploadFile()
            .then(response => responseStatus = response.status)
            .catch(error => console.log(error))

        expect(responseStatus).toBe(200);
    },10000);
})

describe("Getting guitar file meta data from DropBox",() =>{
    it("Guitar file meta data has been gotten successfully!", async () =>{
        let responseStatus = 0;

        await dropboxController.getMetadata()
            .then(response => responseStatus = response.status)
            .catch(error => console.log(error))

        expect(responseStatus).toBe(200);
    },10000);
})

describe("Deleting guitar file from DropBox",() =>{
    it("Guitar file has been deleted successfully!", async () =>{
        let responseStatus;

        await dropboxController.deleteFile()
            .then(response => responseStatus = response.status)
            .catch(error => console.log(error))

        expect(responseStatus).toBe(200);
    },10000);
})
