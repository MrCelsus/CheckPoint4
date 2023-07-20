import React, { useState, useEffect } from "react";
import connexion from "../../services/connexion";
import FAQContainer from "../../components/FAQContainer";

function FAQPage() {
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
    <main className="faq-page">
      <h1>Vos questions :</h1>
      {faqs.map((faq) => (
        <FAQContainer faq={faq} />
      ))}
    </main>
  );
}

export default FAQPage;
