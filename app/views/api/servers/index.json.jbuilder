@servers.each do |server|
    json.set! server.id do
        json.extract! server, :id, :server_name,
        :invite_url, :icon_url, :admin_id
    end
end