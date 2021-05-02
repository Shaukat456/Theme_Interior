import { useEffect, useState } from "react";
import "./Todo.css";
import { Fade } from "react-reveal";

const getItems = () => {
  let list = localStorage.getItem("items");

  if (list) {
    return JSON.parse(localStorage.getItem("items"));
  } else {
    return [];
  }
};

export default function Todo() {
  const [inp, setinput] = useState(" ");
  const [items, setitems] = useState(getItems());

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const deleteItems = (i) => {
    let updateItems = items.filter((elem, indx) => {
      return indx !== i;
    });
    setitems(updateItems);
  };
  return (
    <>
      <input
        value={inp}
        type="text"
        placeholder="ADD ITEMS"
        onChange={(e) => setinput(e.target.value)}
      />

      <button onClick={() => [setitems([...items, inp]), setinput("")]}>
        ADD {localStorage.setItem("ITEMS", items)}
      </button>
      {/* <br/> */}
      <Fade bottom>
        <button
          onClick={() => {
            setitems([]);
          }}
        >
          CLEAR ALL
        </button>
      </Fade>
      {items.map((v, i) => {
        if (!inp) {
        }

        return (
          <>
            <Fade top>
              <div key={i + 1}>
                <h1> {v} </h1>
                <button onClick={() => deleteItems(i)}>DELETE ITEM</button>
              </div>
            </Fade>
          </>
        );
      })}
    </>
  );
}
