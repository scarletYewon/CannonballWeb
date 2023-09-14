import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/header";

function Vision(){
  return(
    <div>
      <Header/>
      <img
        src="img/ourvisioncontent.svg"
        style={{
          width: '100%',
        }}
      />
    </div>
  );
}
export default Vision;