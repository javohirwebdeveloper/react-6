function StepFive({ formData, handleChange, nextStep, prevStep }) {
  const {
    consentToPersonalDataProcessing,
    consentToPersonal,
    agree,
  } = formData;

  const validate = () => {
    if (consentToPersonalDataProcessing && consentToPersonal && agree) {
      nextStep();
    } else {
      alert("Iltimos, barcha shartlarni qabul qiling");
    }
  };

  return (
    <div className="step-five">
                  <h2>User Registration Wizard - Step 5</h2>

      <form>
        <div className="form-group">
          <label htmlFor="consentToPersonalDataProcessing">
            Shaxsiy ma'lumotlarni qayta ishlashga roziman
          </label>
          <input
            type="checkbox"
            id="consentToPersonalDataProcessing"
            name="consentToPersonalDataProcessing"
            checked={consentToPersonalDataProcessing}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="consentToPersonal">
            Shaxsiy ma'lumotlarni olishga roziman
          </label>
          <input
            type="checkbox"
            id="consentToPersonal"
            name="consentToPersonal"
            checked={consentToPersonal}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="agree">Roziman</label>
          <input
            type="checkbox"
            id="agree"
            name="agree"
            checked={agree}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-buttons">
          <button type="button" onClick={prevStep}>
            Oldingi
          </button>
          <button type="button" onClick={validate}>
            Keyingi
          </button>
        </div>
      </form>
    </div>
  );
}

export default StepFive;
