import Accordian from "../Accordian/Accordian";
import React from "react";

const Faq = () => {
  const faqs = [
    {
      question: "How is Bugbox better than other robotics learning kits?",
      answer:
        "Our products and services have come about from working closely with teachers and students in the classroom to truly understand their goals. We love being the newcomer, helping teachers bring emerging technology into their classroom with curriculum-aligned lesson plans, 3D-printed robots and incursions that enables student pairs to get close and interact with technology unlike with our more expensive competitors.",
    },
    {
      question: "How steep is the learning curve for teachers?",
      answer:
        "We understand your time pressure! As such we provide a 30min onboarding call with every robotic kit purchased to get you familiar with the Bugbox technology. We also include 2 curriculum-align lessons so you can get going asap. In case you have questions, we're an Australian company so send us an email or give us a call.",
    },
    {
      question: "What do the students get from the Bugbox activities?",
      answer:
        "We want to bring decades of global engineering experience to help you inspire your students about possible careers of the future. We do this with application-based lessons, where students are empowered to use their creativity to solve real-world problems. Along the way, they also develop their communications skills, resilience and gain an understand for the cross-discipline nature of technology. It's not only for the smart kids who are good at maths!",
    },
    {
      question: "Can Bugbox help teachers with lesson planning?",
      answer:
        "Yes! We have curriculum-aligned lesson plans on our Learn page and are publishing more. Check back often to see new lessons. Let us know if you have an idea for a lesson.",
    },
    {
      question: "What are the hardware/software requirements?",
      answer:
        "All you need is a chromebook with internet connection and a spare USB-A port. No need for time consuming set up!",
    },
  ];
  return (
    <>
      <div className="bg-black p-4">
        <h1 className="text-[#C3DFC4] text-center text-3xl font-bold">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="p-6 bg-white">
        {faqs.map((faq, index) => (
          <Accordian key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </>
  );
};

export default Faq;
