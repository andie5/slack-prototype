import { createContext, useReducer } from "react";
import faker from "faker";

const peopleList = ["Dave", "Sarah", "Zack", "Pam"];
const channelList = [
  "general",
  "react",
  "redux",
  "styled-components",
  "webpack",
  "router",
];

const populateMessages = () => {
  const messagesList = [];

  channelList.forEach((channel) => {
    const numberOfMessages = Math.ceil(Math.random() * 10);
    for (let i = 0; i < numberOfMessages; i++) {
      const randomAuthor = Math.floor(Math.random() * 4);
      const message = {
        channel: channel,
        author: peopleList[randomAuthor],
        message: faker.lorem.sentence(),
        date: faker.date.past().toString(),
      };
      messagesList.push(message);
    }
  });

  return messagesList;
};

const initialState = {
  channels: channelList,
  people: peopleList,
  selectedTopic: null,
  selectedPerson: null,
  messages: populateMessages(),
  //   [
  /*
        {
            channel: 'react';
            author: '',
            text: '',
        }
         */
  //   ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return { ...state, ...action.payload };
    case "SET_SELECTED_TOPIC":
      return { ...state, selectedTopic: action.payload };
    default:
      return state;
  }
};

export const AppStateContext = createContext(initialState);

export const AppStateProvider = ({ children }) => {
  const theReducer = useReducer(reducer, initialState); //[state, dispatch]
  return (
    <AppStateContext.Provider value={theReducer}>
      {children}
    </AppStateContext.Provider>
  );
};
