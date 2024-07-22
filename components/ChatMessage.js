const ChatMessage = ({ username, content }) => {
    return (
      <div>
        <strong>{username}: </strong> {content}
      </div>
    );
  };
  
  export default ChatMessage;
  