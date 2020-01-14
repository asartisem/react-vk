import React from "react";
import s from './AppHeader.module.css';

export const AppHeader: React.FC = () => {
  return (
    <header className={s.header}>
      <div className={s.headerContent}>
        <img className={s.logo} src={'/logo.svg'} alt={'VK'}/>
      </div>
    </header>
  );
};
