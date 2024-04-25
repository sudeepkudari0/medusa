"use client"

import { FAQ } from "@modules/contact-us/components/frequently-asked-questions";
import { QuestionForm } from "@modules/contact-us/components/question-form";
import { Metadata } from "next";

import { useEffect } from "react";
 

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-6 py-6">
      <div className="border-r border-gray-200 p-2 md:border-r lg:border-r md:p-2 lg:p-2">
        <FAQ />
      </div>
      <div className="p-2">
        <QuestionForm />
      </div>
    </div>
  );
};

export default ContactUs;
