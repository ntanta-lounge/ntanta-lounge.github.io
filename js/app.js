function init() {
  let params = (new URL(document.location)).searchParams;
  let id = params.get("id");
  document.getElementById('customer_id').textContent = id;
  document.getElementById('customer_id_txt').value = id;
}

function copy() {
  var copyText = document.getElementById("customer_id_txt");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
}