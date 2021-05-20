import {Constants} from "../constants/Constants";
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

class DropboxController {
    private uploadConfiguration: AxiosRequestConfig;
    private getFileConfiguration: AxiosRequestConfig;
    private deleteFileConfiguration: AxiosRequestConfig;

    constructor() {
        const constants = new Constants();
        const imagePath = "/gibson.jpg";

        this.uploadConfiguration = {
            method: 'post',
            url: constants.dropboxUploadUrl,
            headers: {
                'Content-Type': 'application/octet-stream',
                'Authorization': 'Bearer ' + constants.dropboxToken,
                'Dropbox-API-Arg': `{"mode":"add","path":"${imagePath}","mute":false,"autorename":true}`
            },
            data: {
                binary: "../images/gibson.jpg"
            }
        };

        this.getFileConfiguration = {
            method: 'post',
            url: constants.dropboxMetaDataUrl,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + constants.dropboxToken,
            },
            data: {
                "path": imagePath
            }
        };

        this.deleteFileConfiguration = {
            method: 'post',
            url: constants.dropboxDeleteUrl,
            headers: {
                'Authorization': 'Bearer ' + constants.dropboxToken,
                'Content-Type': 'application/json'
            },
            data: {
                "path": imagePath
            }
        };
    }

    uploadFile(): Promise<AxiosResponse> {
        return axios(this.uploadConfiguration);
    }

    getMetadata(): Promise<AxiosResponse> {
        return axios(this.getFileConfiguration);
    }

    deleteFile(): Promise<AxiosResponse> {
        return axios.request(this.deleteFileConfiguration);
    }
}

export {DropboxController}