import { useState } from "react"; 
import cn from "classnames";

export default function FlipCard(props) {
  const [showBack, setShowBack] = useState(false); 

  function handleClick() { 
    if (props.card.variant === "click") { 
      setShowBack(!showBack); 
    } 
  } 

  return (
    <div
      className="flipcard-outer"
      onClick={handleClick}>

      {/* Handling hover variant flip */}
      <div
        className={cn("flipcard-inner", {showBack})}>  

        {/* Front Side */}
        <div className="card front">
            <span>{props.card.front}</span>
        </div>

         {/* Back Side */}
         <div className="card back">
            <span>{props.card.back}</span>
        </div>

      </div> {/* inner div */}

    </div>  // outer div 
  );
}
