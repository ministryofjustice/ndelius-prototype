function getAge(dateString) {

  const today = new Date();
  const birthDate = new Date(dateString);
  const m = today.getMonth() - birthDate.getMonth();

  let age = today.getFullYear() - birthDate.getFullYear();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export function defautData() {
  return {
    offenderDetails: {
      name: 'Alan Smith',
      dateOfBirth: '20/01/1976',
      age: getAge('20/01/1976'),
      address: ''
    }

  };
}
