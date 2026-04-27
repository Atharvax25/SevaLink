import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { API_BASE_URL } from "../utils/sevalink";

const starterPrompts = [
  "How can I help today?",
  "Explain SevaLink features",
  "Suggest volunteer tasks",
];

const initialMessages = [
  {
    role: "assistant",
    text: "Hi, I'm the SevaLink Assistant. Ask me how to help, how the platform works, or what volunteers can do next.",
  },
];

function Chatbot() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [isOpen, messages, isSending]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  async function sendMessage(prefilledMessage) {
    const nextMessage = String(prefilledMessage ?? message).trim();

    if (!nextMessage || isSending) {
      return;
    }

    setError("");
    setIsOpen(true);
    setIsSending(true);
    setMessage("");
    setMessages((currentMessages) => [
      ...currentMessages,
      { role: "user", text: nextMessage },
    ]);

    try {
      const response = await fetch(`${API_BASE_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: nextMessage }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to reach the SevaLink Assistant.");
      }

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          text:
            data.reply ||
            "I can help with SevaLink questions, volunteer guidance, and feature walkthroughs.",
        },
      ]);
    } catch (requestError) {
      const fallbackMessage =
        requestError.message ||
        "The SevaLink Assistant is unavailable right now. Please try again shortly.";

      setError(fallbackMessage);
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          text: "I couldn't respond just now. Please check the Gemini setup and try again.",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  }

  function handleComposerKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className={`chatbot-shell${isOpen ? " open" : ""}`}>
      <div className={`chatbot-panel glass-panel${isOpen ? " open" : ""}`}>
        <div className="chatbot-header">
          <div>
            <span className="chatbot-badge">AI Guide</span>
            <h3>SevaLink Assistant</h3>
            <p>Volunteer guidance, task ideas, and platform help in one place.</p>
          </div>
          <button
            type="button"
            className="chatbot-close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Close SevaLink Assistant"
          >
            x
          </button>
        </div>

        <div className="chatbot-starters">
          {starterPrompts.map((prompt) => (
            <button
              key={prompt}
              type="button"
              className="chatbot-starter-chip"
              onClick={() => sendMessage(prompt)}
              disabled={isSending}
            >
              {prompt}
            </button>
          ))}
        </div>

        <div className="chatbot-messages" role="log" aria-live="polite">
          {messages.map((chatMessage, index) => (
            <div
              key={`${chatMessage.role}-${index}`}
              className={`chatbot-message chatbot-message-${chatMessage.role}`}
            >
              <span className="chatbot-message-label">
                {chatMessage.role === "assistant" ? "Assistant" : "You"}
              </span>
              <p>{chatMessage.text}</p>
            </div>
          ))}

          {isSending ? (
            <div className="chatbot-message chatbot-message-assistant chatbot-typing">
              <span className="chatbot-message-label">Assistant</span>
              <p>Thinking through the best way to help...</p>
            </div>
          ) : null}

          <div ref={messagesEndRef} />
        </div>

        {error ? <p className="chatbot-error">{error}</p> : null}

        <div className="chatbot-composer">
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyDown={handleComposerKeyDown}
            placeholder="Ask about tasks, volunteering, or how SevaLink works..."
            rows={2}
          />
          <button
            type="button"
            className="chatbot-send-btn"
            onClick={() => sendMessage()}
            disabled={isSending || !message.trim()}
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </div>
      </div>

      <button
        type="button"
        className={`chatbot-fab${isOpen ? " chatbot-fab-open" : ""}`}
        onClick={() => setIsOpen((currentState) => !currentState)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close SevaLink Assistant" : "Open SevaLink Assistant"}
      >
        <span className="chatbot-fab-icon" aria-hidden="true">
          {isOpen ? "x" : "+"}
        </span>
        <span className="chatbot-fab-copy">
          <strong>{isOpen ? "Close assistant" : "Need help?"}</strong>
          <small>{isOpen ? "Return to SevaLink" : "Ask SevaLink AI"}</small>
        </span>
      </button>
    </div>
  );
}

export default Chatbot;
