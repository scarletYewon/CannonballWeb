import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/header";

function Introduction(){
  return(
    <div>
      <Header/>
      <img
        src="img/introductioncontent.svg"
        style={{
          width: '100%',
        }}
      />
    </div>
  );
}
export default Introduction;