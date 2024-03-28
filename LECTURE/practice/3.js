class post{
  constructor(title, body, author, views, comments){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = views;
    this.comments = comments;
  }
  isSale(){
    return true;
  }
}

const pst = new post('a','b','c', 10, {contents:456,likes:10},{contents:123,likes:12});
console.log(pst);
console.log(pst.isSale());