function StepThree({ formData, handleChange, nextStep, prevStep }) {
  const {
    firstName,
    lastName,
    middleName,
    birthdate,
    email,
    gender,
    isOlderThan18,
  } = formData;

  const validate = () => {
    if (
      firstName &&
      lastName &&
      middleName &&
      birthdate &&
      email &&
      gender &&
      isOlderThan18
    ) {
      nextStep();
    } else {
      alert("Iltimos, to'g'ri ma'lumotlarni kiriting");
    }
  };

  return (
    <div className="step-three">
            <h2>User Registration Wizard - Step 3</h2>

      <form>
        <div className="form-group">
          <label htmlFor="firstName">Ism</label>
          <input className="input"
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Familiya</label>
          <input className="input"
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="middleName">Sharif</label>
          <input className="input"
            type="text"
            id="middleName"
            name="middleName"
            value={middleName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="birthdate">Tug'ilgan kun</label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            value={birthdate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Elektron pochta</label>
          <input className="input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Jins</label>
          <select
            id="gender"
            name="gender"
            value={gender}
            onChange={handleChange}
            required
          >
            <option value="">Tanlang</option>
            <option value="male">Erkak</option>
            <option value="female">Ayol</option>
            <option value="other">Boshqa</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="isOlderThan18">18 yoshdan katta ekanligingiz</label>
          <input
            type="checkbox"
            id="isOlderThan18"
            name="isOlderThan18"
            checked={isOlderThan18}
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

export default StepThree;