'use client';

import { useChat } from 'ai/react';
import { AdsProvider, BoxAd } from '@megabrain/sdk';

export default function Chat() {
  const { isLoading, messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <AdsProvider
      publisherToken={process.env.NEXT_PUBLIC_PUBLISHER_TOKEN}
      isLoading={isLoading}
      messages={messages}
    >
      <div>
        {messages.map(m => (
          <div key={m.id}>
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
            <div>
              <BoxAd
                code={process.env.NEXT_PUBLIC_INLINE_AD_CODE}
                messageId={m.id}
              />
            </div>
          </div>
        ))}
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </AdsProvider>
  );
}