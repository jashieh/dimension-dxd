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

export const fetchServer = id => {
    return $.ajax({
        url: `api/servers/${id}`,
        method: 'GET'
    });
};