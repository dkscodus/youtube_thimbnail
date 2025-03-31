import React, { useState, useEffect } from "react";
import ThumbnailList from "./components/ThumbnailList";

const App = () => {
  return (
    <div>
      <h1>유튜브 썸네일 클릭 실험</h1>
      <ThumbnailList />
    </div>
  );
};

export default App;
