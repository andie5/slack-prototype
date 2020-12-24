import { useContext } from "react";
import { AppStateContext } from "./AppState";
import styled from "styled-components";

const ChannelsStyle = styled.div`
  padding-top: 1em;

  h3 {
    font-weight: bold;
  }
  .Channel {
    cursor: pointer;
    &.selected {
      background-color: #f6c444;
      color: #000;
    }
  }
`;

const Channels = () => {
  const [{ channels, selectedTopic }, dispatch] = useContext(AppStateContext);
  return (
    <ChannelsStyle>
      <h3>Channels</h3>
      {channels.map((channel, i) => {
        return (
          <p
            className={`Channel ${selectedTopic === channel ? "selected" : ""}`}
            onClick={(e) => {
              dispatch({ type: "SET_SELECTED_TOPIC", payload: channel });
            }}
            key={i}
          >
            # {channel}
          </p>
        );
      })}
    </ChannelsStyle>
  );
};

export default Channels;
