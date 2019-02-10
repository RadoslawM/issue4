// Task 2 - nieco mniej ambitny, napiszcie funkcje, która będzie w stanie filtrować string. 
// Myśmy tylko łączyli kawałki, by uzyskać pewne imię, teraz zróbmy odwrotnie - chcemy uzyskać pierwotny string bez tego wplątanego imienia. 
// W funkcji będą 2 argumenty - string który przekazujemy i coś jeszcze. 
// To powinno działać tak, że możemy przekazać dowolny string i uzyskać dowolny wynik, więc nie możecie tam nic hardkodować. 
// Tutaj może dla was być bardzo przydatne to, że możemy czytać elementy stringu po indeksie, np ‘Kasia’[3] - zwróci nam ‘i’.

const fileterName = (name, removeLetterIndex) => {
    const nameArray = name.split("");
    nameArray.splice(removeLetterIndex, 1);
    return nameArray.join("");
  };
  console.log(fileterName("Radek", 4));