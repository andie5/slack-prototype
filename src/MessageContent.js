import { useContext, useMemo, useState } from "react";
import { AppStateContext } from "./AppState";
import styled from "styled-components";

const MessageContentStyle = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
    display: flex;
  }
  .messagesContainer {
    max-height: calc(100vh - 60px);
    overflow: auto;
  }
  .messageBoxContainer {
    border-top: 2px solid #ccc;
    padding-top: 8px;
    display: flex;
    margin-right: 16px;
    input[type="text"] {
      flex-grow: 1;
      margin-bottom: 8px;
    }
    input[type="submit"] {
      display: none;
    }
  }
  .avatar {
    width: 30px;
    height: 30px;
    border: 2px solid grey;
    border-radius: 5px;
    margin-right: 10px;
  }
`;

const MessageContent = () => {
  const [{ messages, selectedTopic, selectedPerson }, dispatch] = useContext(
    AppStateContext
  );
  // Controlled input for text box
  const [text, setText] = useState("");

  const filteredMessages = useMemo(
    () => messages.filter((item) => selectedTopic === item["channel"]),
    [messages, selectedTopic]
  );

  return (
    <MessageContentStyle>
      <div className='messagesContainer'>
        {filteredMessages.map((item, i) => {
          return (
            <div className='overallMessage' key={i}>
              <div className='avatar'>
                <img src='#' alt='' />
              </div>
              <div>
                <span className='author'>{item["author"]}</span>{" "}
                <span className='date'>{item["date"]}</span>
                <span className='messageText'>{item["message"]}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Only show the input box when there is a selected channel */}
      {selectedTopic !== null ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch({
              type: "ADD_MESSAGE",
              payload: {
                message: text,
                author: selectedPerson === null ? "Anonymous" : selectedPerson,
                channel: selectedTopic,
                date: Date(),
              },
            });
            setText("");
          }}
          className='messageBoxContainer'
        >
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type='text'
            placeholder='Type your message here. Press Enter to send'
          />{" "}
          <input type='submit' />
        </form>
      ) : null}
    </MessageContentStyle>
  );
};

export default MessageContent;
