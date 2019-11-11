export const fetchUsers = (serverId) => {
    return $.ajax({
        method: "GET",
        url: "api/users",
        data: { server_id: serverId }
    });
};