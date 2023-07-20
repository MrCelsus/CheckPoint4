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

  const updateFaqState = (id) => {
    if (id === "") {
      setFaq(faqModel);
    } else {
      setFaq(faqs.find((theFaq) => theFaq.id === +id));
    }
  };

  useEffect(() => {
    getFaqs();
  }, []);
  return (
    <main>
      <h1 className="label-title">Liste des Questions/Réponses</h1>
      <select
        className="label-title"
        name="faqs"
        onChange={(event) => updateFaqState(event.target.value)}
      >
        <option className="option-list" value="">
          Choisir une question
        </option>
        {faqs.map((fq) => (
          <option className="option-list" value={fq.id} key={fq.id}>
            {fq.question}
          </option>
        ))}
      </select>
      <form className="form-container" onSubmit={(event) => postFaq(event)}>
        <label className="label-title" htmlFor="question">
          Question :
          <textarea
            className="basic-input"
            type="text"
            name="question"
            cols={40}
            rows={5}
            value={faq.question}
            onChange={(event) => handleFaq(event)}
            minLength={20}
            required
          />
        </label>
        <label className="label-title" htmlFor="answer">
          Réponse :
          <textarea
            className="basic-input"
            type="text"
            name="answer"
            cols={40}
            rows={20}
            value={faq.answer}
            onChange={(event) => handleFaq(event)}
            minLength={20}
            required
          />
        </label>
        {!faq.id && (
          <button className="main-btn" type="submit">
            Ajouter
          </button>
        )}
        {faq.id && (
          <>
            <button
              type="button"
              className="second-btn"
              onClick={(e) => deleteFaq(e)}
            >
              Supprimer
            </button>
            <button
              type="button"
              className="second-btn"
              onClick={(e) => updateFaq(e)}
            >
              Modifier
            </button>
          </>
        )}
      </form>
    </main>
  );
}

export default FAQAdmin;
