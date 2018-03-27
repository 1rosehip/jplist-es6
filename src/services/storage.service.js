/**
 * local storage, session storage, cookies
 */
class StorageService{

    /**
     * is storage supported?
     * @param {string} storage - 'localStorage', 'sessionStorage', 'cookies'
     * @return {boolean}
     */
    static isSupported(storage){

        if(storage === 'cookies') return true;

        try{
            return storage in window && window[storage] !== null;
        }
        catch(e){
            return false;
        }
    }

    /**
     * save to the storage
     * @param {string} deepLink
     * @param {string} storage - 'localStorage', 'sessionStorage', 'cookies'
     * @param {string} key - storage key
     * @param {number} expiration - cookie expiration in minutes (-1 = cookies expire when browser is closed)
     */
    static set(deepLink, storage, key, expiration = -1){

        if(storage === 'cookies'){

            const cValue = encodeURIComponent(deepLink);
            const exdate = new Date();

            expiration = Number(expiration) || -1;

            if(expiration === -1){
                document.cookie = name + '=' + cValue + ';path=/;';
            }
            else{
                exdate.setMinutes(exdate.getMinutes() + expiration);
                document.cookie = name + '=' + cValue + ';path=/; expires=' + exdate.toUTCString();
            }
        }
        else{
            if(StorageService.isSupported(storage)) {

                //save json in storage
                window[storage][key] = deepLink;
            }
        }
    }

    /**
     * get from storage
     * @param {string} storage - 'localStorage', 'sessionStorage', 'cookies'
     * @param {string} key - storage key
     * @return {string} deepLink
     */
    static get(storage, key){

        let deepLink = '';

        if(storage === 'cookies'){

            //get document cookie
            const cookies = document.cookie.split(';');

            for (let i=0; i<cookies.length; i++){

                let x = cookies[i].substr(0,cookies[i].indexOf('='));
                let y = cookies[i].substr(cookies[i].indexOf('=') + 1);
                x = x.replace(/^\s+|\s+$/g, '');

                if(x === key){
                    deepLink = decodeURIComponent(y);
                    break;
                }
            }
        }
        else{
            if(StorageService.isSupported(storage)) {
                deepLink = window[storage][key] || '';
            }
        }

        return deepLink;
    }

}

export default StorageService;