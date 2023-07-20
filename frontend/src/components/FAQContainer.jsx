import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function FAQContainer({ faq }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleToggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <section>
      <div className="question">
        {faq.question}
        {showAnswer ? (
          <AiOutlineMinus size={20} onClick={handleToggleAnswer} />
        ) : (
          <AiOutlinePlus size={20} onClick={handleToggleAnswer} />
        )}
      </div>
      <div className="answer">{showAnswer && <p>{faq.answer} </p>}</div>
    </section>
  );
}

export default FAQContainer;
