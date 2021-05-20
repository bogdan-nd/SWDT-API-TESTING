class Constants{
    uploadUrl: string;
    metaDataUrl: string;
    deleteUrl: string;
    token: string;

    constructor() {
        let contentUrl = "https://content.dropboxapi.com";
        let apiUrl = "https://api.dropboxapi.com";
        this.uploadUrl = contentUrl + "/2/files/upload";
        this.metaDataUrl = apiUrl + "/2/files/get_metadata";
        this.deleteUrl = apiUrl + "/2/files/delete_v2";
        this.token = "7-y5WJMuwsIAAAAAAAAAAUkXHqqcJnn3UscNIdiiOkTojar5p_iA-sWxM5ZGOY3V";
    }

    get dropboxUploadUrl():string{
        return this.uploadUrl;
    }

    get dropboxMetaDataUrl():string{
        return this.metaDataUrl;
    }

    get dropboxDeleteUrl():string{
        return this.deleteUrl;
    }

    get dropboxToken():string{
        return this.token;
    }
}

export {Constants};