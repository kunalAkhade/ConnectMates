import React from "react";
import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data'

function FindFriends() {

  return <>
   <div style={{ marginTop: "200px" }}>find Friends</div>;  
   <Picker data={data} onEmojiSelect={(i)=> console.log(i)} /> 
  </>
}

export default FindFriends;
