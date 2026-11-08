class Book {
  public title: string; 
  private pagesRead: number; 

  constructor(title: string) {
    this.title = title;  
    this.pagesRead = 0; 
  }

  public read(pages:number): void {
    this.pagesRead += pages
  }

  public getProgress(): number {
    return this.pagesRead
  }
}

const book = new Book("Dune")

book.read(50)
book.read(25)

console.log(book.title); 
console.log(book.getProgress())
