import * as React from 'react';

const HelpChat = () => {
  return (
    <button
      style={{
        backgroundImage: 'url(https://d124s1zbdqkqqe.cloudfront.net/Dialogue.svg)',
        backgroundSize: 28,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        bottom: 20,
        right: 20
      }}
      className="fixed bg-blue-coinbase rounded-full h-12 w-12"
    />
  );
};

export default HelpChat;
