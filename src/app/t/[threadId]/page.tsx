import { threadsClient } from "@/lib/threadsClient";
import { Thread as EmbedThread } from "react-threads";

const Thread = async ({ params }: { params: { threadId: string } }) => {
  const thread = await threadsClient.getThreads(params.threadId);

  return <EmbedThread thread={thread.containing_thread} />;
};

export default Thread;
