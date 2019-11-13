export const fetchFriends = () => {
    return $.ajax({
        url: 'api/friends',
        method: 'GET'
    });
};

export const addFriend = (requesterId, receiverId) => {
    return $.ajax({
        url: 'api/friends',
        method: 'POST',
        data: { requester_id: requesterId, receiver_id: receiverId }
    });
};