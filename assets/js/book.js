var correctName = 'xuanquoc';
var correctPass = '123';
var correctEmail = 'nguyentrinhxuanquoc2003@gmail.com';


var inputName = document.getElementById('inputName');
var inputEmail = document.getElementById('inputEmail');
var inputPassword = document.getElementById('inputPassword');


var formLogin = document.getElementById('form-login');
if(formLogin.attachEvent){
    formLogin.attachEvent('submit', onFormSubmit);
}else{
    formLogin.addEventListener('submit', onFormSubmit);
}

function onFormSubmit(){
    var username = inputName.value;
    var password = inputPassword.value;
    var email = inputEmail.value;

    if(username == correctName && password == correctPass && email == correctEmail){
        alert('Đăng nhập thành công');
    }else{
        alert('Đăng nhập thất bại');
    }
}

function add() {
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let composer = document.getElementById('composer').value;
    let publishingcompany = document.getElementById('publishingcompany').value;
    let type = document.getElementById('type').value;

    if (id && name && composer && publishingcompany && type) {
        let storeitem = localStorage.getItem('books');
        let books = storeitem ? JSON.parse(storeitem) : [];

        books.push({
            id: id,
            name: name,
            composer: composer,
            publishingcompany: publishingcompany,
            type: type,
        });


        localStorage.setItem('books', JSON.stringify(books));
        this.renderlistbook();
    }
}
function renderlistbook() {
    let storeitem = localStorage.getItem('books');
    let books = storeitem ? JSON.parse(storeitem) : [];

    if (books.length === 0) return false;
    let tablecontent = `<tr>
        <td>ID</td>
        <td>Name</td>       
        <td>Author</td>
        <td>Publishing</td>
        <td>Type</td>
        <td>Action</td></tr>`;

    books.forEach((book, index) => {
        let bookId = index;
        index++;
        tablecontent += `<tr>
            <td>${book.id}</td>
            <td>${book.name}</td>
            <td>${book.composer}</td>
            <td>${book.publishingcompany}</td>
            <td>${book.type}</td>
            <td>
                <a href ='#' onclick='edit(${bookId})'>Sửa</a> | <a href='#' onclick='deleteBooks(${bookId})'>Xoá</a>
            </td>
        </tr>`;
    })

    document.getElementById('table-list-book__content').innerHTML = tablecontent;
}
function deleteBooks(id){
    let storeitem = localStorage.getItem('books');
    let books = storeitem ? JSON.parse(storeitem) : [];
    books.splice(id, 1);

    localStorage.setItem('books', JSON.stringify(books));
    renderlistbook();
}
function edit(id){
    let storeitem = localStorage.getItem('books');
    let books = storeitem ? JSON.parse(storeitem) : [];

    document.getElementById('id').value = books[id].id;
    document.getElementById('name').value = books[id].name;
    document.getElementById('composer').value = books[id].composer;
    document.getElementById('publishingcompany').value = books[id].publishingcompany;
    document.getElementById('type').value = books[id].type;

    document.getElementById('index').value=id;

    document.getElementById('save').style.display= "none";
    document.getElementById('update').style.display= "inline-block";
}

function change(){
    let storeitem = localStorage.getItem('books');
    let books = storeitem ? JSON.parse(storeitem) : [];

    let index = document.getElementById('index').value;
    books[index] = {
        id : document.getElementById('id').value,
        name : document.getElementById('name').value,
        composer: document.getElementById('composer').value,
        publishingcompany: document.getElementById('publishingcompany').value,
        type: document.getElementById('type').value,
    }
    localStorage.setItem('books', JSON.stringify(books));
    renderlistbook();
    document.getElementById('save').style.display= "inline-block";
    document.getElementById('update').style.display= "none";
}