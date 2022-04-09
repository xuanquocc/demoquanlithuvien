
function add(){
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let composer = document.getElementById('composer').value;
    let publishingcompany = document.getElementById('publishingcompany').value;
    let type = document.getElementById('type').value;

    if(id && name && composer && publishingcompany && type){
        let storeitem = localStorage.getItem('books');
        let books = storeitem ? JSON.parse(storeitem) : [];

        books.push({
            id : id ,
            name : name,
            composer : composer,
            publishingcompany : publishingcompany,
            type : type,
        });

        
        localStorage.setItem('books', JSON.stringify(books));
        this.renderlistbook();
    }
}
function renderlistbook(){
    // let storeitem = localStorage.getItem('books');
    let books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];
   
    if(books.length === 0) return false;
    let tablecontent = `<tr>
        <td>ID</td>
        <td>Name</td>       
        <td>Author</td>
        <td>Publishing</td>
        <td>Type</td>
        <td>Action</td></tr>`;

        books.forEach((book) =>{
            tablecontent+=`<tr>
            <td>${book.id}</td>
            <td>${book.name}</td>
            <td>${book.composer}</td>
            <td>${book.publishingcompany}</td>
            <td>${book.type}</td>
            <td>
                <a href ='#'>Sửa</a> | <a href='#'>Xoá</a>
            </td>
        </tr>`;
        })

        document.getElementById('table-list-book__content').innerHTML = tablecontent;
}