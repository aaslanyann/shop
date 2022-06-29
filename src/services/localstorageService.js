const ACCESS_TOKEN_KEY = 'token';
const SIDEBAR_VIEW = 'sidebar_view';

export const localStorageService = (() => {
    // TOKEN
    function privateSetAccessToken(token) {
        localStorage.setItem(ACCESS_TOKEN_KEY, token);
    }

    function privateGetAccessToken() {
        return localStorage.getItem(ACCESS_TOKEN_KEY);
    }

    function privateClearAccessToken() {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
    }


    // CLEAR STORAGE
    function privateClearStorage() {
        localStorage.clear();
    }

    return {
        // TOKEN
        setAccessToken: privateSetAccessToken,
        getAccessToken: privateGetAccessToken,
        clearAccessToken: privateClearAccessToken,

        // CLEAR STORAGE
        clearStorage: privateClearStorage,
    };
})();
