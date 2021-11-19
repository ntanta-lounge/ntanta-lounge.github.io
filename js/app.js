function init() {
  let params = (new URL(document.location)).searchParams;
  let id = params.get('id').trim();

  document.getElementById('customer-id').textContent = id;
  document.getElementById('customer-id-hidden').value = id;
  document.getElementById('data-id').style.display = 'flex';

  let url = 'https://api.sheety.co/6d79bab42ccda02d92c2cd4536c74ba8/ntanta/customer?filter[activated]=true&filter[banned]=false&filter[customerId]=' + id;
  fetch(url)
  .then((response) => response.json())
  .then(json => {
    if (json.customer.length !== 0) {
      document.getElementById('approved').style.display = 'block';
    } else {
      document.getElementById('denied').style.display = 'block';
    }
  })
  .catch(err => {
    console.log(err)
    document.getElementById('error').style.display = 'block';
  })
  .finally(() => {
    let loader = document.getElementById('loader');
    loader.remove();
  });
}

function copy() {
  var copyText = document.getElementById('customer-id-hidden');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
}