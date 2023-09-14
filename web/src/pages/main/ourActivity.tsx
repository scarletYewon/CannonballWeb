import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/header";

function OurActivity(){
  return(
    <div>
      <Header/>
      <img
        src="img/ouractivitycontent.svg"
        style={{
          width: '100%',
        }}
      />
    </div>
  );
  
}
export default OurActivity;