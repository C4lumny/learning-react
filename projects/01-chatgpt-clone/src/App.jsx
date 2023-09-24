import "./App.css";
import { Gpt_version } from "./Gpt_version";
import { Chat_suggestions } from "./Chat_suggestions";

export function App() {
  return (
    <>
      <div className="gpt-mainInterface">
        <div className="gpt-header">
          <Gpt_version
            version_number={"3.5"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="none"
                class="icon-sm transition-colors text-brand-green"
                width="16"
                height="16"
              >
                <path
                  d="M9.586 1.526A.6.6 0 0 0 8.553 1l-6.8 7.6a.6.6 0 0 0 .447 1h5.258l-1.044 4.874A.6.6 0 0 0 7.447 15l6.8-7.6a.6.6 0 0 0-.447-1H8.542l1.044-4.874Z"
                  fill="currentColor"
                ></path>
              </svg>
            }
          />
          <Gpt_version
            version_number={"4"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="none"
                class="icon-sm transition-colors group-hover/button:text-brand-purple"
                width="16"
                height="16"
              >
                <path
                  d="M12.784 1.442a.8.8 0 0 0-1.569 0l-.191.953a.8.8 0 0 1-.628.628l-.953.19a.8.8 0 0 0 0 1.57l.953.19a.8.8 0 0 1 .628.629l.19.953a.8.8 0 0 0 1.57 0l.19-.953a.8.8 0 0 1 .629-.628l.953-.19a.8.8 0 0 0 0-1.57l-.953-.19a.8.8 0 0 1-.628-.629l-.19-.953h-.002ZM5.559 4.546a.8.8 0 0 0-1.519 0l-.546 1.64a.8.8 0 0 1-.507.507l-1.64.546a.8.8 0 0 0 0 1.519l1.64.547a.8.8 0 0 1 .507.505l.546 1.641a.8.8 0 0 0 1.519 0l.546-1.64a.8.8 0 0 1 .506-.507l1.641-.546a.8.8 0 0 0 0-1.519l-1.64-.546a.8.8 0 0 1-.507-.506L5.56 4.546Zm5.6 6.4a.8.8 0 0 0-1.519 0l-.147.44a.8.8 0 0 1-.505.507l-.441.146a.8.8 0 0 0 0 1.519l.44.146a.8.8 0 0 1 .507.506l.146.441a.8.8 0 0 0 1.519 0l.147-.44a.8.8 0 0 1 .506-.507l.44-.146a.8.8 0 0 0 0-1.519l-.44-.147a.8.8 0 0 1-.507-.505l-.146-.441Z"
                  fill="currentColor"
                ></path>
              </svg>
            }
          />
        </div>
        <h1>ChatGPT</h1>
        <div className="gpt-bottomSide">
          <div className="gpt-suggestions">
            <Chat_suggestions
              mainText={"Give me ideas"}
              subText={"for what to do with my kids art"}
            />
            <Chat_suggestions
              mainText={"Help me pick"}
              subText={"an outfit that will look good on camera"}
            />
            <Chat_suggestions
              mainText={"Help me pick"}
              subText={"an outfit that will look good on camera"}
            />
            <Chat_suggestions
              mainText={"Help me pick"}
              subText={"an outfit that will look good on camera"}
            />
          </div>

          <input type="text" placeholder="Send a message" />
          <p>
            Free Research Preview. ChatGPT may produce inaccurate information
            about people, places, or facts.
            <a href=""> ChatGPT August 3 Version</a>
          </p>
        </div>
      </div>
    </>
  );
}
