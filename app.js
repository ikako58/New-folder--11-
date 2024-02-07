
  /*1)დავალება: შექმენით კლასი სახელად Book კონსტრუქტორით, 
  რომელიც იღებს ორ არგუმენტს: სათაური და ავტორი. 
  დაამატეთ მეთოდი სახელად getDetails, რომელიც აბრუნებს სტრიქონს, რომელიც 
  აერთიანებს წიგნის სათაურსა და ავტორს.*/

  class Book {
    constructor(title , author){
        this.title = title;
        this.author = author;
    }
     getDetails (){
        return `the title of the book is ${this.title} and author's name is ${this.author}`
    
      }
  };


  const myBook = new Book();
  myBook.title = "dracula";
  myBook.author = "Bram Stocker"
  console.log(myBook.getDetails());
