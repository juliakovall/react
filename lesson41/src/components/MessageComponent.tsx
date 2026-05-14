import { use } from "react";

type MessageComponentProps = {
  messagePromise: Promise<string>;
};

function MessageComponent({ messagePromise }: MessageComponentProps) {
  const message = use(messagePromise);

  return (
    <div>
      <h2>Message Component</h2>
      <p>{message}</p>
    </div>
  );
}

export default MessageComponent;
