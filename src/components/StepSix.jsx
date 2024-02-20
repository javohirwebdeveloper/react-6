function StepSix({ formData, prevStep }) {
  const {
    login,
    password,
    subscriptionType,
    firstName,
    lastName,
    middleName,
    birthdate,
    email,
    gender,
    isOlderThan18,
    cardNumber,
    consentToPersonalDataProcessing,
    consentToPersonal,
    agree,
  } = formData;

  const renderTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Ma'lumot turi</th>
            <th>Qiymati</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Login</td>
            <td>{login}</td>
          </tr>
          <tr>
            <td>Parol</td>
            <td>{password}</td>
          </tr>
          <tr>
            <td>Obuna turi</td>
            <td>{subscriptionType}</td>
          </tr>
          <tr>
            <td>Ism</td>
            <td>{firstName}</td>
          </tr>
          <tr>
            <td>Familiya</td>
            <td>{lastName}</td>
          </tr>
          <tr>
            <td>Sharif</td>
            <td>{middleName}</td>
          </tr>
          <tr>
            <td>Tug'ilgan kun</td>
            <td>{birthdate}</td>
          </tr>
          <tr>
            <td>Elektron pochta</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Jins</td>
            <td>{gender}</td>
          </tr>
          <tr>
            <td>18 yoshdan katta ekanligi</td>
            <td>{isOlderThan18 ? "Ha" : "Yo'q"}</td>
          </tr>
          <tr>
            <td>Karta raqami</td>
            <td>{cardNumber}</td>
          </tr>
          <tr>
            <td>Shaxsiy ma'lumotlarni qayta ishlashga rozilik berish</td>
            <td>{consentToPersonalDataProcessing ? "Ha" : "Yo'q"}</td>
          </tr>
          <tr>
            <td>Shaxsiy ma'lumotlarni olishga rozilik berish</td>
            <td>{consentToPersonal ? "Ha" : "Yo'q"}</td>
          </tr>
          <tr>
            <td>Rozilik berish</td>
            <td>{agree ? "Ha" : "Yo'q"}</td>
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <div className="step-six">
                  <h2>User Registration Wizard - Step 6</h2>

      <div className="table-container">{renderTable()}</div>
      <div className="form-buttons">
        <button type="button" onClick={prevStep}>
          Oldingi
        </button>
        <button type="button" onClick={() => alert("Tabriklaymiz!")}>
          Yuborish
        </button>
      </div>
    </div>
  );
}

export default StepSix;
