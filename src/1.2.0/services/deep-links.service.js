class DeepLinksService{

    /**
     * take param1=val1 and return an object of the structure { key: param1, value: val1 }
     * @param param {string}
     * @return {object|null}
     */
    static getParam(param){

        if(!param) return null;

        const parts = param.split('=');

        if(parts.length < 2) return null;

        return {
            key: parts[0].trim().toLowerCase(),
            value: parts[1].trim().toLowerCase()
        };
    }

    /**
     * get deep link parameters from URL
     * @param {string} hash - window.location.hash value
     * @param {string=} hashStart - optional value of hash start; by default it's '#', but can be changed for example to be '#!'
     * @return {Map} params - structure: [groupName, [{key, value}, ...]], ...
     *
     * URL structure example:
     * https://www.example.com?param1=val1&param2=val2#group=gr1&param1=val1&param2=val2&group=gr2&param1=val1&param2=val2...
     */
    static getUrlParams(hash, hashStart = '#'){

        const paramsMap = new Map();

        if(!hash) return paramsMap;

        const formattedHash = window.decodeURIComponent(hash.replace(hashStart, '')).trim().toLowerCase();

        if(!formattedHash) return paramsMap;

        const params = formattedHash.split('&');

        let currentGroupName = '';

        for(let pair of params){

            const param = DeepLinksService.getParam(pair);

            if(!param) continue;

            if(param.key === 'group'){

                currentGroupName = param.value;

                //insert group name if doesn't exist
                if(!paramsMap.has(param.value)){

                    paramsMap.set(param.value, []);
                }
            }
            else{
                const groupValues = paramsMap.get(currentGroupName);

                if(groupValues){
                    groupValues.push(param);
                }

                paramsMap.set(currentGroupName, groupValues);
            }
        }

        return paramsMap;
    }
}

export default DeepLinksService;