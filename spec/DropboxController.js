let Constants = require("../constants/Constants");
let axios = require("axios");

class DropboxController{
    constructor() {
        this.constants = new Constants();
        this.imagePath = "/gibson.jpg";

        this.uploadConfiguration = {
            method: 'post',
            url: this.constants.dropboxUploadUrl,
            headers: {
                'Content-Type': 'application/octet-stream',
                'Authorization': 'Bearer ' + this.constants.dropboxToken,
                'Dropbox-API-Arg': `{"mode":"add","path":"${this.imagePath}","mute":false,"autorename":true}`
            },
            data: {
                binary: "../images/gibson.jpg"
            }
        };

        this.getFileConfiguration = {
            method: 'post',
            url: this.constants.dropboxMetaDataUrl,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.constants.dropboxToken,
            },
            data: {
                "path": this.imagePath
            }
        };

        this.deleteFileConfiguration = {
            method: 'post',
            url: this.constants.dropboxDeleteUrl,
            headers: {
                'Authorization': 'Bearer ' + this.constants.dropboxToken,
                'Content-Type': 'application/json'
            },
            data: {
                "path": this.imagePath
            }
        };
    }

    uploadFile(){
        return axios(this.uploadConfiguration);
    }

    getMetadata(){
        return axios(this.getFileConfiguration);
    }

    deleteFile(){
        return axios(this.deleteFileConfiguration);
    }
}

module.exports = DropboxController;