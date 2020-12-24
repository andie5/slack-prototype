import { useContext } from "react";
import { AppStateContext } from "./AppState";
import styled from "styled-components";

const MessageContentStyle = styled.div`
  margin-left: 20px;
  .messageText {
    display: flex;
    flex-direction: column;
  }
  .author {
    font-weight: bold;
  }
  .date {
    color: grey;
  }
  .overallMessage {
    margin: 10px 5px;
  }
`;

const MessageContent = () => {
  const [{ messages, selectedTopic }, dispatch] = useContext(AppStateContext);
  return (
    <MessageContentStyle>
      {messages.map((item, i) => {
        return selectedTopic === item["channel"] ? (
          <div className='overallMessage' key={i}>
            <img src='#' alt='' /*width='5' height='5'*/></img>
            <span className='author'>{item["author"]}</span>{" "}
            <span className='date'>{item["date"]}</span>
            <span className='messageText'>{item["message"]}</span>
          </div>
        ) : (
          ""
        );
      })}
      {/* Only show the input box when there is a selected channel */}
      {selectedTopic !== null ? (
        <div
          style={{
            position: "absolute",
            bottom: "5px",
            // display: "flex",
            // alignContent: "stretch",
          }}
        >
          <hr></hr>
          <input placeholder='Type your message here. Press Enter to send'></input>{" "}
        </div>
      ) : (
        ""
      )}
    </MessageContentStyle>
  );
};

export default MessageContent;
