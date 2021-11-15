function init() {
  let params = (new URL(document.location)).searchParams;
  let id = params.get("id").trim();
  document.getElementById('customer_id').textContent = id;
  document.getElementById('customer_id_txt').value = id;
  getStatus(id);
}

function getStatus(id) {
  let url = 'https://api.sheety.co/6d79bab42ccda02d92c2cd4536c74ba8/ntanta/customer?filter[activated]=true&filter[custId]=' + id;
  fetch(url)
  .then((response) => response.json())
  .then(json => {
    if (json.customer.length !== 0) {
      setStatus(true, json.customer[0].name, 'Valid');
    } else {
      setStatus(false, json.customer[0].name, 'No Entry');
    }
  })
  .catch(err => {
    console.log(err)
    setStatus(false, '', 'System Error')
  })
  .finally(() => {
    let spinnerEl = document.getElementById('spinner');
    spinnerEl.remove();
  });
}

function setStatus(isValid, customerName, validationMsg) {
  document.getElementById('name').textContent = customerName;
  document.getElementById('status').textContent = validationMsg;
  document.getElementById('status').className = isValid ? 'valid' : 'invalid';
}

function copy() {
  var copyText = document.getElementById("customer_id_txt");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
}