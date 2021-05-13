class Constants{
    constructor() {
        this.contentUrl = "https://content.dropboxapi.com";
        this.apiUrl = "https://api.dropboxapi.com";
        this.uploadUrl = this.contentUrl + "/2/files/upload";
        this.metaDataUrl = this.apiUrl + "/2/files/get_metadata";
        this.deleteUrl = this.apiUrl + "/2/files/delete_v2";
        this.token = "7-y5WJMuwsIAAAAAAAAAAUkXHqqcJnn3UscNIdiiOkTojar5p_iA-sWxM5ZGOY3V";
    }

    get dropboxUploadUrl(){
        return this.uploadUrl;
    }

    get dropboxMetaDataUrl(){
        return this.metaDataUrl;
    }

    get dropboxDeleteUrl(){
        return this.deleteUrl;
    }

    get dropboxToken(){
        return this.token;
    }
}

module.exports = Constants;