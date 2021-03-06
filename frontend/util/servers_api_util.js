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

export const updateServer = server => {
    return $.ajax({
        url: `api/servers/${server.id}`,
        method: 'PATCH',
        data: { server }
    });
};

export const deleteServer = serverId => {
    return $.ajax({
        url: `api/servers/${serverId}`,
        method: 'DELETE'
    });
};

export const joinServer = inviteURL => {
    return $.ajax({
        url: `api/servers/join/${inviteURL}`,
        method: 'GET',
    });
};

export const leaveServer = id => {
    return $.ajax({
        url: `api/servers/leave/${id}`,
        method: 'GET',
    });
};