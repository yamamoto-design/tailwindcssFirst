import React, { useState } from "react";

import { ChevronRightIcon } from "@heroicons/react/16/solid";

const EachStep = () => {
  const [marginTop, setMarginTop] = useState("");
  const [marginLeft, setMarginLeft] = useState("");
  const [marginRight, setMarginRight] = useState("");
  const [marginBottom, setMarginBotom] = useState("");

  const [toolTipPage, setToolTipPage] = useState("");
  const [toolTipElement, setToolTipElement] = useState("");
  const [toolTipPositon, setToolTipPositon] = useState("");

  const [step, setStep] = useState(0);

  const stepChanged = () => {
    setStep(step + 1);
  };
  return (
    <>
      <div className="flex space-x-4 mb-6 pt-[50px] items-center">
        <button
          onClick={() => setStep(0)}
          className={
            step === 0
              ? "rounded-[20px] w-[120px] h-[40px] bg-[#cceeff] border-solid border-[blue] border m-[0]"
              : "rounded-[20px] w-[120px] h-[40px] bg-[white] border-solid border-[gray] border m-[0]"
          }
          style={{ margin: 0 }}
        >
          ① Location
        </button>
        <span
          className="w-[30px] h-[5px] bg-[gray] m-[0] p-[0px]"
          style={{ margin: 0 }}
        ></span>
        <button
          onClick={() => setStep(1)}
          className={
            step === 1
              ? "rounded-[20px] w-[120px] h-[40px] bg-[#cceeff] border-solid border-[blue] border m-[0]"
              : "rounded-[20px] w-[120px] h-[40px] bg-[white] border-solid border-[gray] border m-[0]"
          }
          style={{ margin: 0 }}
        >
          ② Content
        </button>
        <span
          className="w-[30px] h-[5px] bg-[gray] m-[0] p-[0px]"
          style={{ margin: 0 }}
        ></span>
        <button
          onClick={() => setStep(2)}
          className={
            step === 2
              ? "rounded-[20px] w-[120px] h-[40px] bg-[#cceeff] border-solid border-[blue] border m-[0]"
              : "rounded-[20px] w-[120px] h-[40px] bg-[white] border-solid border-[gray] border m-[0]"
          }
          style={{ margin: 0 }}
        >
          ③ Styling
        </button>
      </div>
      <div className="flex flex-col mt-[60px] p-6 gap-[40px] w-[900px]">
        <div className="flex justify-between">
          <div>
            <label className="block text-black text-[18px]">Page</label>
            <label className="block text-gray-400 text-[15px]">
              Choose page to add tooltip
            </label>
          </div>
          <select
            className="w-[390px] p-2 border rounded mb-4"
            value={toolTipPage}
            onChange={(e) => setToolTipPage(e.target.value)}
          >
            <option>Page 1</option>
            <option>Page 2</option>
          </select>
        </div>

        <div className="flex justify-between">
          <div>
            <label className="block text-black text-[18px]">
              Select Element
            </label>
            <label className="block text-gray-400 text-[15px]">
              Select Element from the page
            </label>
          </div>
          <select
            className="w-[390px] p-2 border rounded mb-4"
            value={toolTipElement}
            onChange={(e) => setToolTipElement(e.target.value)}
          >
            <option>Element 1</option>
            <option>Element 2</option>
          </select>
        </div>
        <div className="flex justify-between">
          <div>
            <label className="block text-black text-[18px]">Position</label>
            <label className="block text-gray-400 text-[15px]">
              Select position for the tooltip
            </label>
          </div>
          <select
            className="w-[390px] p-2 border rounded mb-4"
            value={toolTipPositon}
            onChange={(e) => setToolTipPositon(e.target.value)}
          >
            <option>Positon</option>
          </select>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="flex items-center gap-[10px]">
              <label className="block text-black text-[18px]">
                Outer Margins
              </label>
              <label className="block text-gray-400 text-[12px]">(indp)</label>
            </div>

            <label className="block text-gray-400 text-[15px]">
              Write margins for outer margins
            </label>
          </div>
          <table className="w-[390px] border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <td className="border p-2 text-center">Top</td>
                <td className="border p-2 text-center">Bottom</td>
                <td className="border p-2 text-center">Right</td>
                <td className="border p-2 text-center">Left</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">
                  <input
                    type="text"
                    className="w-full border p-1"
                    style={{ border: "none" }}
                    value={marginTop}
                    onChange={(e) => setMarginTop(e.target.value)}
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="text"
                    className="w-full border p-1"
                    style={{ border: "none" }}
                    value={marginBottom}
                    onChange={(e) => setMarginBotom(e.target.value)}
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="text"
                    className="w-full border p-1"
                    style={{ border: "none" }}
                    value={marginRight}
                    onChange={(e) => setMarginRight(e.target.value)}
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="text"
                    className="w-full border p-1"
                    style={{ border: "none" }}
                    value={marginLeft}
                    onChange={(e) => setMarginLeft(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between">
          <button
            className={
              step !== 2
                ? "mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                : "mt-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-blue-700"
            }
            onClick={() => stepChanged()}
            disabled={step === 2 ? true : false}
          >
            <div className="flex">
              <div className="flex items-center">
                Next
                <ChevronRightIcon className="w-[20px] h-[20px]" />
              </div>
            </div>
          </button>
          {step === 2 ? (
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Confirm
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default EachStep;
