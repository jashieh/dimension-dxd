const proxyurl = "https://cors-anywhere.herokuapp.com/";

export const getResponse = (msg, uid) => {
    return $.ajax({
        url: 
        `${proxyurl}http://api.brainshop.ai/get?bid=9660&key=v2RVqUUrvID7HVN7&uid=[${uid}]&msg=[${msg}]`,
        method: 'GET'
    });
};