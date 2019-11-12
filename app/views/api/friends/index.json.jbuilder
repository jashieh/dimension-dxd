@friends.each do |friend|
    json.set! friend.id do
        json.extract! friend, :id, :username
    end
end