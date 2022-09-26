import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ImBin } from "react-icons/im";
import { delete_item, add, delete_all } from "../reducers/CRUD";

const ToDoListLogic = () => {
  const { list } = useSelector((state) => state.CRUD);
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState("");
  const [valid, setValid] = useState(true);

  const addToDo = (e) => {
    if (inputData.length > 0) {
      dispatch(add(inputData));
      setInputData("");
      setValid(true);
    } else {
      setValid(false);
    }
  };
  const deleteToDo = (id) => {
    dispatch(delete_item(id));
  };
  const deleteAll = () => {
    dispatch(delete_all());
  };

  return (
    <div className=" bg-slate-700 flex justify-center h-screen w-screen">
      <div className="   h-44 mt-40 w-3/12">
        <h1 className="text-6xl font-mono bg-slate-700 font-bold text-white text-center">
          To Do List
        </h1>
        <div className="mt-8  ">
          <h1 className="text-xl font-mono  font-bold text-slate-500 text-center">
            Add new todo...{" "}
          </h1>
          <form>
            <input
              className={
                valid
                  ? "font-mono shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  : "font-mono shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-600"
              }
              type="text"
              placeholder={valid ? "Add here..." : "Add something here"}
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <button
              className=" font-mono flex-shrink-0 bg-slate-600 hover:bg-slate-400 border-slate-600 hover:border-slate-400 text-sm border-4 text-white py-1 px-2 rounded w-full  mt-2 mb-10 "
              type="button"
              onClick={(e) => addToDo()}
            >
              ADD
            </button>
          </form>
        </div>
        <div className="space-y-2">
          {list.map((element, id) => {
            return (
              <div className=" animate-fade flex justify-between rounded bg-slate-500 h-12 items-center ">
                <h1 className="text-2xl font-mono text-white ml-10">
                  {element.name}
                </h1>

                <button
                  onClick={() => {
                    deleteToDo(id);
                  }}
                  className="mr-6"
                >
                  <ImBin className="hover:text-red-700" />
                </button>
              </div>
            );
          })}
        </div>
        {list.length > 0 ? (
          <button
            className="flex-shrink-0 font-mono bg-slate-600 hover:bg-slate-400 border-slate-600 hover:border-slate-400 text-sm border-4 text-white py-1 px-2 rounded w-24  mt-2 mb-10"
            onClick={() => deleteAll()}
          >
            Clear
          </button>
        ) : (
          <h1 className="text-xl font-mono  font-bold text-slate-500 text-center">
            Nothing Here
          </h1>
        )}
      </div>
    </div>
  );
};

export default ToDoListLogic;
