import React, { useRef } from "react";
import "./style.css";

type InputFieldProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
};

const InputField = ({ todo, setTodo, handleAdd }: InputFieldProps) => {

    const inputRef = useRef<HTMLInputElement>(null)
    console.log('ref' , inputRef)
  // const handleChange= (e: React.ChangeEvent<HTMLInputElement>)=> {
  //     setTodo(e.target.value)
  // }
  return (
    <form className="input" onSubmit={(e)=> {handleAdd(e) ; inputRef.current?.blur()}}>
      <input
        placeholder="Enter a list"
        type="text"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        ref={inputRef}
      />
      <button className="input_submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default InputField;
