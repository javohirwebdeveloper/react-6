function StepTwo({ formData, handleChange, nextStep, prevStep }) {
  const { subscriptionType } = formData;

  const validate = () => {
    if (subscriptionType) {
      nextStep();
    } else {
      alert("Iltimos, obuna turini tanlang");
    }
  };

  return (
    <div className="step-two">
            <h2>User Registration Wizard - Step 3</h2>

      <form>
        <div className="form-group">
          <label htmlFor="subscriptionType">Obuna turi</label>
          <select
            id="subscriptionType"
            name="subscriptionType"
            value={subscriptionType}
            onChange={handleChange}
            required
          >
            <option value="">Tanlang</option>
            <option value="free">Bepul</option>
            <option value="monthly">Oylik</option>
            <option value="yearly">Yillik</option>
          </select>
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

export default StepTwo;