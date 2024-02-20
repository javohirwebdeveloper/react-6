import React, { useState } from "react";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";

function UserRegistrationWizard() {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    confirmPassword: "",
    subscriptionType: "",
    firstName: "",
    lastName: "",
    middleName: "",
    birthdate: "",
    email: "",
    gender: "",
    isOlderThan18: false,
    cardNumber: "",
    consentToPersonalDataProcessing: false,
    consentToPersonal: false,
    agree: false,
  });

  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <StepOne
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <StepTwo
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <StepThree
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 4:
        return (
          <StepFour
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 5:
        return (
          <StepFive
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 6:
        return <StepSix formData={formData} prevStep={prevStep} />;
      default:
        return <div>Invalid step</div>;
    }
  };

  return <div className="user-registration-wizard">{renderStep()}</div>;
}

export default UserRegistrationWizard;
