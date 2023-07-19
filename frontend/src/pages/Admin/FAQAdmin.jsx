import React, { useEffect, useState } from "react";
import connexion from "../../services/connexion";

const faqModel = {
  id: null,
  question: "",
  answer: "",
};

function FAQAdmin() {
  const [faqs, setFaqs] = useState([]);
  const [faq, setFaq] = useState(faqModel);
  const getFaqs = async () => {
    try {
      const faqsData = await connexion.get("/faqs");
      if (faqsData) {
        setFaqs(faqsData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFaq = (e) => {
    setFaq({ ...faq, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    getFaqs();
  }, []);
  return (
    <main>
      <h1>Liste des Questions/Réponses</h1>
      <select name="faqs" id="">
        <option value="">Choisir une question</option>
        {faqs.map((fq) => (
          <option value={fq.id} key={fq.id}>
            {fq.question}
          </option>
        ))}
      </select>
      <form action="">
        <label htmlFor="">
          Question :
          <input
            type="text"
            name="question"
            value={faq.question}
            onChange={(event) => handleFaq(event)}
            minLength={20}
            required
          />
        </label>
        <label htmlFor="">
          Réponse :
          <input
            type="text"
            name="answer"
            value={faq.answer}
            onChange={(event) => handleFaq(event)}
            minLength={20}
            required
          />
        </label>
      </form>
    </main>
  );
}

export default FAQAdmin;
