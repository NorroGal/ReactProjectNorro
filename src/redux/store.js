import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: "1", likesCount: "3", message: "Hi, how are you" },
        {
          id: "2",
          likesCount: "21",
          message: "Its my life, its now for ever. and am gona be for ever",
        },
      ],
      newPostText: "ww",
    },
    dialogsPage: {
      avatars: [
        { id: "Dimych", img: "Dimych" },
        { id: "Andrew", img: "Andrew" },
        { id: "Ivan", img: "Ivan" },
        { id: "Vasya", img: "Vasya" },
        { id: "Natawa", img: "Natawa" },
        { id: "Valera", img: "Valera" },
      ],
      dialogs: [
        { id: "Dimych", name: "Dimych" },
        { id: "Andrew", name: "Andrew" },
        { id: "Ivan", name: "Ivan" },
        { id: "Vasya", name: "Vasya" },
        { id: "Natawa", name: "Natawa" },
        { id: "Valera", name: "Valera" },
      ],
      messages: [
        { id: "1", message: "Hi" },
        { id: "2", message: "How is you it-kama" },
        { id: "3", message: "Yo" },
        { id: "4", message: "Yo" },
        { id: "5", message: "Yo" },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("state was changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.state = store;
