const { ObjecId } = require("mongodb");

//dinh nghia lop dich vu 
class ContactService {
    constructor(client) {
        this.Contact = client.db().collection("contacts");
    }
    //dinh nghia cac phuong thuc truy xuat csdl su dung mongodb API
}

module.exports= ContactService; 