let products = [];

function collectData() {
  const productName = document.getElementById(`productName`).value;
  const productPrice = document.getElementById(`productPrice`).value;
  const category = document.getElementById(`category`).value;
  const url = document.getElementById(`url`).value;

  return {
    productName: productName,
    productPrice: productPrice,
    category: category,
    url: url,
  };
}

function generateHTML(data, index) {
  const newHTML = `
  <tr id="row-${index}">
  <td>${data.productName}</td>
  <td>${data.productPrice} ₪</td>
  <td>${data.category}</td>
  <td><img src="${data.url}" width="100" height="100" /></td>
  <td><button onclick="remove(${index})" class="btn btn-danger">Remove</button></td>
</tr>`;
  return newHTML;
}

function renderHTML() {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    const newHTML = generateHTML(products[i], i);
    tableBody.innerHTML += newHTML;
  }
}

function resetForm() {
  const productForm = document.getElementById(`form`);
  productForm.reset();
  const productName = document.getElementById(`productName`);
  productName.focus();
}

function remove(index) {
  products.splice(index, 1);

  renderHTML();
}

function doAll(event) {
  event.preventDefault();
  const data = collectData();
  resetForm();
  products.push(data);
  const newHTML = generateHTML(data);
  renderHTML(newHTML);
}
