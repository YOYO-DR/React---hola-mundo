import { useState } from "react";

type Props = {
  data: string[];
}; // Puede ser interface o type

function List({ data }: Props) {
  const [index,setIndex] = useState(1); // cada vez que se ejecute el setIndex, react renderizara de nuevo el componente
  const handleClick = (i:number) => {
    setIndex(i)
  };
  return (
    <ul className="list-group">
      {data.map((ele,i) => (
        <li
          onClick={() => handleClick(i)}
          key={ele}
          className={`list-group-item ${index==i ? 'active' : ''}`}
        >
          {ele}
        </li>
      ))}
    </ul>
  );
}

export default List;
