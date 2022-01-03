import React from "react";
import { Avatar, useChatContext } from "stream-chat-react";

const TeamChannelPreview = ({ channel, type }) => {
  const { channel: activeChannel, client } = useChatContext();

  const ChannelPreview = () => (
    <p className="channel-preview__item">
      # {channel?.data?.name || channel?.data?.id}
    </p>
  );

  const DirecetPreview = () => {
    const members = Object.values(channel.state.members).filter(
      ({ user }) => user.id !== client.userID
    );

    return (
      <div className="channels-preview__items single">
        <Avatar
          image={members[0]?.user?.image}
          name={members[0]?.user?.fullName}
          size={24}
        />
        <p>{members[0]?.user?.fullName}</p>
      </div>
    );
  };

  return (
    <div className={
        channel?.id === activeChannel?.id ? 'channels-preview__wrapper__selected' : 'channel-preview__wrapper'
    }
     onClick={() => console.log(channel)}
     >

         {
             type === 'team' ? <ChannelPreview /> : <DirecetPreview />
         }
     </div>
    );
};

export default TeamChannelPreview;
