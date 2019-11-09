export const fetchChannelMessages = (channel_id) => {
    return $.ajax({
        url: `api/messages`,
        method: 'GET',
        data: { channel_id }
    });
};