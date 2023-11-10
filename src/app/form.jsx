"use client";
import { Slide } from "@mui/material";
import { useState } from "react";

function MultistepForm() {
  const [form, setform] = useState(1);
  
  
 

  const BackHandler=()=>{
  
  if(form>1){
     setform((prevform) => form - 1);
  }
  }
  const NextHandler=()=>{
    if(form<=2){
 setform((prevform) => form + 1);
    }
   
  }

  return (
    <div
      id="box"
      className="h-screen w-screen flex justify-center items-center rounded-2xl"
    >
      <div class="h-[90vh] w-[40vw] bg-white rounded-2xl  flex-col shadow-2xl">
        <div class="h-[10%] w-[40vw] bg-slate-50 flex text-white">
          <div
            class={`w-1/3 h-full  flex justify-center items-center ${
              form == 1 ? "bg-blue-700" : "bg-blue-300"
            }`}
          >
            <p>step 1</p>
          </div>
          <div
            class={`w-1/3 h-full  flex justify-center items-center ${
              form == 2 ? "bg-blue-700" : "bg-blue-300"
            }`}
          >
            <p>step 2</p>
          </div>
          <div
            class={`w-1/3 h-full  flex justify-center items-center ${
              form == 3 ? "bg-blue-700" : "bg-blue-300"
            }`}
          >
            <p>step 2</p>
          </div>
        </div>
        <div class="h-[80%] w-full flex justify-center items-center overflow-hidden relative ">
          {form == 1 && (
            <Slide direction="right" in={true} mountOnEnter unmountOnExit>
              <div class="w-full flex justify-center items-center flex-col">
                <p class="text-3xl font-extrabold my-12">Create Account</p>
                <input
                  class="py-2 px-3 w-[70%] outline-none border border-gray-300 rounded-2xl my-2"
                  type="text"
                  placeholder="Username"
                />
                <input
                  class="py-2 px-3 w-[70%] outline-none border border-gray-300 rounded-2xl my-2"
                  type="text"
                  placeholder="Password"
                />
                <input
                  class="py-2 px-3 w-[70%] outline-none border border-gray-300 rounded-2xl my-2"
                  type="text"
                  placeholder="Reenter Password"
                />
              </div>
            </Slide>
          )}
          {form == 2 && (
            <Slide direction="right" in={true} mountOnEnter unmountOnExit>
              <div class="w-full flex justify-center items-center flex-col">
                <p class="text-3xl font-extrabold my-12">Social Links</p>
                <input
                  class="py-2 px-3 w-[70%] outline-none border border-gray-300 rounded-2xl my-2"
                  type="text"
                  placeholder="Instagram"
                />
                <input
                  class="py-2 px-3 w-[70%] outline-none border border-gray-300 rounded-2xl my-2"
                  type="text"
                  placeholder="Github"
                />
                <input
                  class="py-2 px-3 w-[70%] outline-none border border-gray-300 rounded-2xl my-2"
                  type="text"
                  placeholder="LinkedIn"
                />
              </div>
            </Slide>
          )}
          {form == 3 && (
            <Slide direction="right" in={true} mountOnEnter unmountOnExit>
              <div class="w-full flex justify-center items-center flex-col">
                <p class="text-3xl font-extrabold my-12">Personal Info</p>
                <input
                  class="py-2 px-3 w-[70%] outline-none border border-gray-300 rounded-2xl my-2"
                  type="text"
                  placeholder="First Name"
                />
                <input
                  class="py-2 px-3 w-[70%] outline-none border border-gray-300 rounded-2xl my-2"
                  type="text"
                  placeholder="Last Name"
                />
                <input
                  class="py-2 px-3 w-[70%] outline-none border border-gray-300 rounded-2xl my-2"
                  type="text"
                  placeholder="Mobile"
                />
              </div>
            </Slide>
          )}
        </div>
        <div class="h-[10%] w-full flex justify-around items-center ">
          <button
            onClick={BackHandler}
            class="h-full w-1/2 bg-blue-700 text-white p-2 px-4 border border-white active:bg-blue-500"
          >
            Back
          </button>
          <button
            onClick={NextHandler}
            class="h-full w-1/2 bg-blue-700 text-white p-2 px-4 border border-white active:bg-blue-500"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default MultistepForm;
