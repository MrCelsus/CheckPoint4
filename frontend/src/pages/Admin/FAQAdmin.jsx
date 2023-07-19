import React, { useEffect, useState } from "react";
import connexion from "../../services/connexion";

function FAQAdmin() {
  const [faqs, setFaqs] = useState([]);
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
  useEffect(() => {
    getFaqs();
  }, []);
  return (
    <main>
      <h1>Liste des Questions/Réponses</h1>
      <select name="faqs" id="">
        <option value="">Choisir une question</option>
        {faqs.map((faq) => (
          <option value={faq.id} key={faq.id}>
            {faq.question}
          </option>
        ))}
      </select>
    </main>
  );
}

export default FAQAdmin;
