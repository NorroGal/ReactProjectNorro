const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    { id: "Dimych", name: "Dimych", img: "https://img2.akspic.ru/attachments/crops/9/8/8/1/3/131889/131889-metropoliya-gorod-bruklin-gorodskoj_pejzazh-gorodskoj_rajon-1920x1080.jpg" },
    { id: "Andrew", name: "Andrew", img: "https://www.kubikhd.ru/_pu/0/46013711.jpg" },
    { id: "Ivan", name: "Ivan", img: "https://img.joinfo.com/i/2020/12/800x0/5fd37a30d9fd8.jpg" },
    { id: "Vasya", name: "Vasya", img: "https://proprikol.ru/wp-content/uploads/2020/06/kartinki-dumayushhego-cheloveka-33.jpg" },
    { id: "Natawa", name: "Natawa", img: "https://www.shkolazhizni.ru/img/content/i229/229110_or.jpg" },
    { id: "Valera", name: "Valera", img: "https://proprikol.ru/wp-content/uploads/2020/06/kartinki-dumayushhego-cheloveka-33.jpg" },
  ],
  messages: [
    { id: "1", message: "Hi" },
    { id: "2", message: "How is you it-kama" },
    { id: "3", message: "Yo" },
    { id: "4", message: "Yo" },
    { id: "5", message: "Yo" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };  
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, {id: 7, message: body}],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
