class OpenHome {
    
    constructor() {
        this.getUrlParams();

    }

    getUrlParams() {
        const urlParams = new URLSearchParams(window.location.search);
        let username = urlParams.get('user')

        if(username === null || username === "") {
            window.location.replace(`../html/login_index.html`)
        }
    }

}

new OpenHome();