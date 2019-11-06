export const fetchServerChannels = (serverId) => {
    return $.ajax({
        url: `/api/servers/${serverId}/channels`,
        method: 'GET'
    });
};

export const createChannel = (serverId, channel) => {
    return $.ajax({
        url: `/api/servers/${serverId}/channels`,
        method: 'POST',
        data: { channel }
    });
};

export const fetchChannel = (serverId, channelId) => {
    return $.ajax({
        url: `api/channels/${serverId}/channels/${channelId}`,
        method: 'GET'
    });
};