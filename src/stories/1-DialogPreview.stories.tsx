import React from 'react';
import DialogPreview from "../components/DialogPreview/DialogPreview";

export default {
  title: "DialogPreview"
}

export const Vitaliy = () =>
  <DialogPreview
    imgUrl={"https://sun9-52.userapi.com/c858128/v858128385/8d36a/x7MISMvtuJQ.jpg?ava=1"}
    dialogName={"Виталий Евтехов"}
    lastMessageTime={1578841939715}
    message={"Тисем - лох"}
    senderImgUrl={"https://sun1.informsvyaz.userapi.com/c631325/v631325599/2f83e/e69HH0Rx3V8.jpg?ava=1"}
    onClick={() => window.console.log("клик")}
  />;

export const Artyom = () =>
  <DialogPreview
    imgUrl={"https://sun1.informsvyaz.userapi.com/c631325/v631325599/2f83e/e69HH0Rx3V8.jpg?ava=1"}
    dialogName={"Горлов Артём"}
    lastMessageTime={1578845032396}
    message={"Виталик - лох"}
    senderImgUrl={"https://sun9-52.userapi.com/c858128/v858128385/8d36a/x7MISMvtuJQ.jpg?ava=1"}
    onClick={() => window.console.log("клик")}
  />;

