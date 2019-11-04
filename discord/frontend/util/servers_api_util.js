export const fetchAllServers = () => {
    return $.ajax({
        url: '/api/servers',
        method: 'GET'
    });
};

export const createServer = server => {
    return $.ajax({
        url: 'api/servers',
        method: 'POST',
        data: { server }
    });
};