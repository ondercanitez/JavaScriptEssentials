function submitFeedback() {
  // Değerleri al
  const username = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value;
  const job = document.getElementById('job').value;
  const designation = document.getElementById('designation').value;
  const productType = document.getElementById('productType').value;
  const feedback = document.getElementById('feedbackText').value;

  // Değerleri ekrana yazdır
  document.getElementById('userName').innerText = username;
  document.getElementById('userAge').innerText = age;
  document.getElementById('userEmail').innerText = email;
  document.getElementById('userJob').innerText = job;
  document.getElementById('userDesignation').innerText = designation;
  document.getElementById('userProductChoice').innerText = productType;
  document.getElementById('userFeedback').innerText = feedback;

  // User Info kutusunu göster
  document.getElementById('userInfo').style.display = 'block';

  alert('Thank you for your feedback!');
}

const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;


