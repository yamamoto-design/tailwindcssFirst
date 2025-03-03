import React, { useEffect, useState } from "react";
import { ChevronRightIcon, UsersIcon } from "@heroicons/react/16/solid";

const Stepper = () => {
  const [marginTop, setMarginTop] = useState("");
  const [marginLeft, setMarginLeft] = useState("");
  const [marginRight, setMarginRight] = useState("");
  const [marginBottom, setMarginBotom] = useState("");

  const [toolTipPage, setToolTipPage] = useState("");
  const [toolTipElement, setToolTipElement] = useState("");
  const [toolTipPositon, setToolTipPositon] = useState("");

  const [step, setStep] = useState(0);
  const [putStep, setPutStep] = useState(0);
  const [state, setStateValue] = useState([]);
  const [nowStep, setNowStep] = useState("Step 1 ⊕");

  const [tabArray, setTabArray] = useState(["Step 1 ⊕"]);

  const staticArray = ["Audience", "Goals", "Scheduling"];

  const newObject = {
    step: 0,
    page: "",
    element: "",
    position: "",
    margin: {
      top: "",
      bottom: "",
      right: "",
      left: "",
    },
  };

  const putStepChanged = (e) => {
    const newArray = [...tabArray, `Step ${tabArray.length + 1}`];
    let objectArray = [
      ...state,
      {
        id: `Step ${tabArray.length + 1}`,
        object: newObject,
      },
    ];
    setTabArray(newArray);
    setPutStep(newArray.length - 1);

    setStateValue(objectArray);
    setNowStep(`Step ${tabArray.length + 1}`);
  };

  const stepChanged = () => {
    setStep(step + 1);
  };

  const stateSave = () => {
    console.log("save");
    let returnArray = state.filter((e) => {
      return e.id != nowStep;
    });
    console.log(nowStep);
    if (Array.isArray(returnArray)) {
      returnArray.push({
        id: nowStep,
        object: {
          step: step,
          page: toolTipPage,
          element: toolTipElement,
          position: toolTipPositon,
          margin: {
            top: marginTop,
            bottom: marginBottom,
            right: marginRight,
            left: marginLeft,
          },
        },
      });
      setStateValue(returnArray);
    }
  };

  const deleteStep = (evenId, number) => {
    let newArray = tabArray.filter((e) => {
      return e !== evenId;
    });

    let stateArray = state.filter((e) => {
      return e.id !== evenId;
    });

    setStateValue(stateArray);
    setTabArray(newArray);
    stepClicked("Step 1 ⊕", 0);
  };

  const stepClicked = (evenId, number) => {
    console.log(evenId);
    let index = state.findIndex((e) => {
      return e.id == evenId;
    });
    console.log(index);
    if (index !== -1) {
      stateSave();
      setPutStep(number);
      let returnArray = state.at(index);
      if (returnArray.object) {
        let returnObject = returnArray.object;

        setNowStep(evenId);
        setStep(returnObject.step);

        setToolTipPage(returnObject.page);
        setToolTipElement(returnObject.element);
        setToolTipPositon(returnObject.position);

        setMarginTop(returnObject.margin.top);
        setMarginBotom(returnObject.margin.bottom);
        setMarginRight(returnObject.margin.right);
        setMarginLeft(returnObject.margin.left);
      }
    }
  };

  useEffect(() => {
    let newArray = [];
    newArray.push({
      id: "Step 1 ⊕",
      object: newObject,
    });
    staticArray.map((e) => {
      newArray.push({
        id: e,
        object: newObject,
      });
    });
    setStateValue(newArray);
  }, []);

  return (
    <main className="flex-1 bg-gray-100 p-10">
      <div
        className="w-5/5 mx-auto mt-5"
        style={{ margin: 0, borderTopLeftRadius: "10px", borderBottom: "none" }}
      >
        <div className="flex items-center bg-gray-100 rounded-t-xl relative overflow-x-auto max-w-[1554px] ">
          <div className="flex relative">
            <div className="relative">
              <div
                className={`h-16 w-44 flex items-center justify-center text-gray-600 font-medium text-sm relative z-10 transition-all duration-300 ${
                  putStep === 0
                    ? "bg-white text-black font-bold border border-gray-300 rounded-tl-xl relative after:absolute after:right-[-10px] after:top-0 after:w-[20px] after:h-full after:bg-gray-100 after:skew-x-[20deg]"
                    : " text-gray-600 border border-gray-300"
                }`}
                style={{
                  borderRight: "none",
                  borderBottom: "none",
                  borderTopLeftRadius: "20px",
                }}
                onClick={() => stepClicked("Step 1 ⊕", 0)}
              >
                Step 1
              </div>
              <button
                className="absolute size-[16px] left-[110px] top-[21px] z-[10]"
                onClick={(e) => putStepChanged(e)}
              >
                ⊕
              </button>
            </div>

            {tabArray.slice(1).map((e, index) => (
              <div className="relative">
                <div
                  key={index + 1}
                  className={`h-16 w-44 flex items-center justify-center text-gray-600 font-medium text-sm relative z-10 transition-all duration-300 ${
                    putStep === index + 1
                      ? "bg-white text-black font-bold border border-gray-300 relative after:absolute after:right-[-10px] after:top-0 after:w-[20px] after:h-full after:bg-gray-100 after:skew-x-[20deg]"
                      : " text-gray-600 border border-gray-300"
                  }`}
                  onClick={() => stepClicked(e, index + 1)}
                  style={{
                    borderRight:
                      putStep === index + 1 ? "none" : "sloid gray 1px",
                    borderBottom: "none",
                    borderLeft: "none",
                  }}
                >
                  {`Step ${index + 2}`}
                </div>
                <button
                  className="absolute size-[16px] left-[110px] top-[21px] z-[10]"
                  onClick={() => deleteStep(e, index + 1)}
                >
                  ⊖
                </button>
              </div>
            ))}

            {staticArray.map((tab, index) => {
              const isLastTab = index === 2;
              return (
                <button
                  key={index}
                  className={`h-16 w-44 flex items-center justify-center text-gray-600 font-medium text-sm relative z-10 transition-all duration-300 ${
                    putStep === tabArray.length + index
                      ? `bg-white text-black font-bold border border-gray-300 ${
                          isLastTab
                            ? ""
                            : "relative after:absolute after:right-[-10px] after:top-0 after:w-[20px] after:h-full after:bg-gray-100 after:skew-x-[20deg]"
                        }`
                      : " text-gray-600 border border-gray-300"
                  } ${isLastTab ? "rounded-tr-xl" : ""}`}
                  onClick={() => stepClicked(tab, tabArray.length + index)}
                  style={{
                    borderLeft: "none",
                    borderRight:
                      putStep === tabArray.length + 1 + index
                        ? "none"
                        : "sloid gray 1px",
                    borderBottom: "none",
                  }}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className="bg-white rounded-[20px] pl-[30px]"
        style={{ borderTopLeftRadius: 0 }}
      >
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
              <label className="block text-black text-[18px] text-[#0E1736] font-medium">
                Page
              </label>
              <label className="block text-gray-400 text-[15px]">
                Choose page to add tooltip
              </label>
            </div>
            <div className="relative w-[390px]">
              <select
                className="w-full p-2 pl-4 pr-10 border rounded appearance-none bg-white text-gray-700"
                value={toolTipPage}
                onChange={(e) => setToolTipPage(e.target.value)}
              >
                <option value="Option1">Page 1</option>
                <option value="Option2">Page 2</option>
              </select>
              <div className="absolute right-3 top-[30%] transform -translate-y-1/2 pointer-events-none text-gray-600 text-lg">
                ⌄
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <div>
              <label className="block text-black text-[18px] text-[#0E1736] font-medium">
                Select Element
              </label>

              <label className="block text-gray-400 text-[15px]">
                Select Element from the page
              </label>
            </div>
            <div className="relative w-[390px]">
              <select
                className="w-full p-2 pl-4 pr-10 border rounded appearance-none bg-white text-gray-700"
                value={toolTipElement}
                onChange={(e) => setToolTipElement(e.target.value)}
              >
                <option value="Option1">Element 1</option>
                <option value="Option2">Element 2</option>
              </select>
              <div className="absolute right-3 top-[30%] transform -translate-y-1/2 pointer-events-none text-gray-600 text-lg">
                ⌄
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <label className="block text-black text-[18px] text-[#0E1736] font-medium">
                Position
              </label>
              <label className="block text-gray-400 text-[15px]">
                Select position for the tooltip
              </label>
            </div>
            <div className="relative w-[390px]">
              <select
                className="w-full p-2 pl-4 pr-10 border rounded appearance-none bg-white text-gray-700"
                value={toolTipPositon}
                onChange={(e) => setToolTipPositon(e.target.value)}
              >
                <option value="Option1">Position</option>
              </select>
              <div className="absolute right-3 top-[30%] transform -translate-y-1/2 pointer-events-none text-gray-600 text-lg">
                ⌄
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <div className="flex items-center gap-[10px]">
                <label className="block text-black text-[18px] text-[#0E1736] font-medium">
                  Outer Margins
                </label>
                <label className="block text-gray-400 text-[12px]">
                  (indp)
                </label>
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
                      className="w-full focus:outline-none border p-1"
                      style={{ border: "none" }}
                      value={marginTop}
                      onChange={(e) => setMarginTop(e.target.value)}
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="text"
                      className="w-full focus:outline-none border p-1"
                      style={{ border: "none" }}
                      value={marginBottom}
                      onChange={(e) => setMarginBotom(e.target.value)}
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="text"
                      className="w-full focus:outline-none border p-1"
                      style={{ border: "none" }}
                      value={marginRight}
                      onChange={(e) => setMarginRight(e.target.value)}
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="text"
                      className="w-full focus:outline-none border p-1"
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
      </div>
    </main>
  );
};

export default Stepper;
