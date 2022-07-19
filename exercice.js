/*let weights;
console.log(typeof weights);

let name = "jogin";
let age = 14;
let stars = 6.5;
let isSubscribed = false;

let student = {
    name: "jogin",
    age: 14,
    weight: 6.5,
    isSubscribed: false,
}
let students = []

const enzo = {
    name: "enzo",
    age: 14,
    weight: 12.5,
    isSubscribed: true,
}
students = [student, enzo]
console.log(students);*/
/*
let a = 1;
let b = 1;
console.log(`${a} + ${b} é igual a ${a+b} então, se ${a} + ${b} for igual a 2 = ${((a+b) == 2) ? 'verdadeiro' : 'false'}`)
*/
/*
let nota = 59;
if(nota >= 90){
    console.log('A')
} else {
    if(nota >= 80){
        console.log('B') 
    } else {
        if(nota >= 70){
            console.log('C') 
        }else{
            if(nota >= 60){
                console.log('D') 
            } else {
                console.log('F') 
            }
        }
    }
}
*/

/*
let renda = {
    incomes: [60,60,60,100,347],
    expences: [50,150,50,200,300],
};
function sum(array){
    let total = 0;
    //let i = 0;
    for(let value of array){
        total += value;
    }
    return total;
}
function family(incomes, expences){
    const famIncomes = sum(incomes);
    const famExpences = sum(expences);
    console.log(famIncomes ,famExpences);
    let total = famIncomes >= famExpences;
    if(total){
        console.log(famIncomes+"R$ - Salto Positivo");
    } else {
        console.log((famIncomes - famExpences)+"R$ devendo - Salto Negativo");
    }
}
family(renda.incomes, renda.expences);
*/
/*
function transformGaus(value){
    const celsiusExist = value.toUpperCase().includes('C');
    const fahrenheitExist = value.toUpperCase().includes('F');
    
    if (!fahrenheitExist && !celsiusExist) {
        console.log('Error, invalide unit');
    } else if (fahrenheitExist){
        const fahrenheitValue = Number(value.toUpperCase().replace("F", ""));
        let formula = (fahrenheit) => (fahrenheit - 32)* 5/9
        let sinalValue = 'C'
        return formula(fahrenheitValue)+sinalValue;

    } else if (celsiusExist){
        const celsiusValue = Number(value.toUpperCase().replace("C", ""));
        let formula = (celsius) => (celsius * 9/5) + 32
        let sinalValue = 'F'
        return formula(celsiusValue)+sinalValue;
    }   
}
console.log(transformGaus('89.6'))
*/
const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

let totalCategory = booksByCategory.length
console.log('Total de categorias: '+totalCategory);
for(let category of booksByCategory){
    console.log('Categoria: '+category.category+' - Total: '+category.books.length+' livros');
}
function count(){
    let authors = [];
    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author)){
                authors.push(book.author);
                authorsBlocks = book.author.toUpperCase().replace(".","").split(' ');
            }
        }
            
    }
    console.log('Total de Authors: '+authors.length)
    
} 
function booksOfAuthor(author){
    const name = author.toUpperCase().replace(".","").split(' ');
    let titleBook = [];
    for(let category of booksByCategory){
        for(let book of category.books){
            authorsBlocks = book.author.toUpperCase().replace(".","").split(' ');
    
            for(let vetor of name) {
                for(let block of authorsBlocks){
                    if (vetor === block) {
                        titleBook.push(book.title)
                    }
                }
            }
        }     
    }
    console.log(`Livros do autor ${name} 
    ${titleBook.join(', ')}`)
}


count();
booksOfAuthor('augusto')