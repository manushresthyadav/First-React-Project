import React from "react";
import "./b2.css";
import bl1 from "./assets/blog01.png";
import bl2 from "./assets/blog02.png";
import bl3 from "./assets/blog03.png";
import bl4 from "./assets/blog04.png";
import bl5 from "./assets/blog05.png";
export default function b2() {
  return (
    <div className="b2 flex flex-col">
      <div className="b2-first flex flex-col">
        <p>A lot is happening,</p>
        <p>We are blogging about it.</p>
      </div>

      <div className="b2-second flex text-white">
        <div className="b2-s1">
          <img alt="not found" src={bl1}></img>
          <p className="ml-4 mr-4">Sep 26, 2021</p>
          <div className="fff ml-4 mr-4 mt-2">
            GPT-3 and OpenAI is the future.Let us explore how it is?
          </div>
          <p className="ml-4 mr-4 qq">Read Full Article</p>
        </div>
        <div className="b2-s2">
          <div className="bs2-one flex flex-col">
            <img alt="not found" src={bl2}></img>
            <p>Sep 26, 2021</p>
            <div className="text-xl mt-2">
              GPT-3 and OpenAI is the future.Let us explore how it is?
            </div>
            <p className="mt-8 qq">Read full article</p>
          </div>
          <div className="bs2-second flex flex-col mt-10">
            <img alt="not found" src={bl3}></img>
            <p>Sep 26, 2021</p>
            <div className="text-xl mt-2">
              GPT-3 and OpenAI is the future.Let us explore how it is?
            </div>
            <p className="mt-8 qq">Read full article</p>
          </div>
        </div>
        <div className="b2-s3">
        <div className="bs2-one flex flex-col">
            <img alt="not found" src={bl4}></img>
            <p>Sep 26, 2021</p>
            <div className="text-xl mt-2">
              GPT-3 and OpenAI is the future.Let us explore how it is?
            </div>
            <p className="mt-8 qq">Read full article</p>
          </div>
          <div className="bs2-second flex flex-col mt-10">
            <img alt="not found" src={bl5}></img>
            <p>Sep 26, 2021</p>
            <div className="text-xl mt-2">
              GPT-3 and OpenAI is the future.Let us explore how it is?
            </div>
            <p className="mt-8 qq">Read full article</p>
          </div>
        </div>
      </div>
    </div>
  );
}
