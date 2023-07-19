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

  const postFaq = async (event) => {
    event.preventDefault();
    try {
      const faqPost = await connexion.post("/faqs", faq);
      setFaq(faqPost.data);
      getFaqs();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteFaq = async (event) => {
    event.preventDefault();
    try {
      await connexion.delete(`/faqs/${faq.id}`);
      setFaq(faqModel);
      getFaqs();
    } catch (error) {
      console.error(error);
    }
  };

  const updateFaq = async (event) => {
    event.preventDefault();
    try {
      await connexion.put(`/faqs/${faq.id}`, faq);
      getFaqs();
    } catch (error) {
      console.error(error);
    }
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
      <form onSubmit={(event) => postFaq(event)}>
        <label htmlFor="question">
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
        <label htmlFor="answer">
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
        {!faq.id && <button type="submit">Ajouter</button>}
      </form>
      {faq.id && (
        <>
          <button type="button" onClick={(e) => deleteFaq(e)}>
            Supprimer
          </button>
          <button type="button" onClick={(e) => updateFaq(e)}>
            Modifier
          </button>
        </>
      )}
    </main>
  );
}

export default FAQAdmin;
