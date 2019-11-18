# <a href="https://dimension-dxd.herokuapp.com/#/" target="_blank">Dimension</a>

Dimension x Dimension is an all-in-one voice, video and text chatting application inspired by Discord. Built on the React-Rails stack, Dimension allows you to create private servers and channels to host private live chats with your friends.

## Technologies Used
* **Ruby on Rails:** Rails was used to manage the application's backend interface.
* **React/Redux:** React and Redux libraries were used to facilitate frontend development.
* **PostgreSQL:** PostgreSQL was used as the primary database for the project. 
* **Heroku:** Heroku was used to host the web application online.
* **AWS S3:** Amazon Webservice S3 was used for cloud image storage to allow users to upload custom profile pictures.
* **Websockets:** Websockets protocol built into Rail's Action Cable was used to send live messages.
* **WebRTC:** Rail's implementation of webRTC was used to enable video/voice chat between users by estabilishing a peer-to-peer online connection.

## Key Features
* **User Authentification** <br/>
User are able to create accounts and keep their information and messages behind a secure authentification system. A demo user account is also pre-created for anyone who wants to quickly preview the site without having to create their own account.

* **Servers/Channels** <br/>
Users can create servers to which they can invite their friends using the unique invite link generated for each server. The settings of the server can be modified, but only by the administrator, which is assigned to the user who created the server. Custom text channels can then be created within these servers. Each channel contains a live message chat, meaning any other users on the server will instantly see messages sent in the channel without having to refresh their browsers.

* **Video/Voice Chat** <br />
Within each server, there is also one video and voice chat channel. When users join this channel, they can click the "join call" button to join a call with any other users currently on the server. This feature currently only works when the users are connected to the same wifi network, since the voice call is only hosted through a STUN server, which will not allow for video data to be passed through due to network security. However, a TURN cloud server will be hosted in the future to allow for calls across the internet.

* **Chatbot** <br/>
An chatbot that will respond to user's messages with an intelligent response is implemented within each channel. The chatbot is hosted through Brainshop's chatbot API, and uses natural langauge processing and a neural network to learn the user's responses and evolve its messages over time. The chatbot can be toggled off and on by typing /chatbot in the messsenger.
