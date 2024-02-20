import Cleave from "cleave.js/react";

function StepFour({ formData, handleChange, nextStep, prevStep }) {
  const { cardNumber } = formData;

  const validate = () => {
    
      nextStep();
    
  };

  return (
    <div className="step-four">
            <h2>User Registration Wizard - Step 4</h2>

      <form>
        <div className="form-group">
          <Cleave
  type="text"
  id="cardNumber"
  name="cardNumber"
  value={cardNumber}
  onChange={handleChange}
  placeholder="0000-0000-0000-0000"
  options={{
    creditCard: true, 
    delimiter: "-",
  }}
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

export default StepFour;