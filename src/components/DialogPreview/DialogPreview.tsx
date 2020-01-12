import React from "react";
import s from "./DialogPreview.module.css";

type DialogPreviewProps = {
  readonly imgUrl: string;
  readonly dialogName: string;
  readonly lastMessageTime: number;
  readonly message: string;
  readonly senderImgUrl: string;
  readonly onClick: () => void
}

const DialogPreview: React.FC<DialogPreviewProps> = ({ imgUrl,
                                                       dialogName,
                                                       lastMessageTime,
                                                       message,
                                                       senderImgUrl,
                                                       onClick }) => {

  return (
    <li className={s.item}>
      <div className={s.box}>
        <div className={s.imgBlock}>
          <img src={imgUrl} alt={"user"}/>
        </div>
        <div className={s.messageBlock}>
          <div className={s.clearfix}>
            <div className={s.name}>{dialogName}</div>
            <button onClick={onClick}>Y</button>
            <div className={s.time}>{getTime(lastMessageTime)}</div>
          </div>
          <div>
            { senderImgUrl &&
              <div className={s.smallImgBlock}>
                  <img src={senderImgUrl} alt={"sender"}/>
              </div>
            }
            <span>{message}</span>
          </div>
        </div>
      </div>
    </li>
  )
};

const getTime = (milis: number): string => {
  const date: Date = new Date(milis);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
};

export default DialogPreview;