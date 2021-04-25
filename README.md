## Opis zadania 

Zadaniem było stworzenie aplikacji frontendowej umożliwiającej wyszukanie repozytoriów należących do danego użytkownika, posortowanych po ilości gwiazdek. 


## Instrukcja instalacji i uruchomienia

##### 1. Instalacja
Aby zainstalować aplikację, należy po sklonowaniu repozytorium wykonać w katalogu głównym aplikacji polecenie `npm install`. Menedżer npm pobierze wszystkie potrzebne zależności, zainstaluje je i umożliwi uruchomienie aplikacji. 
##### 2. Uruchomienie
Aby uruchomić aplikację, należy w katalogu głównym aplikacji wykonać polecenie `npm start`. Po wystartowaniu serwera (na konsoli wyświetli się napis "Compiled successfully") aplikacja będzie dostępna w przeglądarce po wpisaniu adresu `localhost:3000`. 

## Funkcjonalność aplikacji
##### 1. Widok wyszukiwania użytkownika
Jest to formularz umożliwiający wyszukanie użytkownika i przejście do widoku wyświetlającego jego repozytoria. Dostępny jest pod adresem `/search`.

##### 2.Widok listy repozytoriów
Widok ten, dostępny pod adresem `/repositories/:username` przedstawia repozytoria wyszukanego użytkownika. W przypadku wystąpienia błędu, takiego jak nieznalezienie użytkownika o podanym nicku czy przekroczenie dopuszczalnej ilości zapytań do serwera, na ekranie wyświetla się komunikat o błędzie. W górnej części ekranu znajduje się pole, którego można użyć do ponownego wyszukania użytkownika.

_Adresy podawane są względem podstawowego URL na którym hostowana jest aplikacja (w przypadku uruchomienia lokalnie - localhost:3000). Użytkownika można wyszukać również bezpośrednio za pomocą URL - podstawiając za `:username` odpowiedni nick._

## Implementacja
Zadanie zaimplementowano we frameworku React z użyciem języka Typescript. Do nawigowania między podstronami użyto react-routera, natomiast zapytania wykonywane są za pomocą biblioteki Axios. W aplikacji zastosowano również spinner i ikony z biblioteki Material UI. Strona działa i wyświetla się poprawnie zarówno w Google Chrome, Mozilli Firefox, jak i na smartfonach (testowano Google Chrome na Androidzie). 


## Uwagi i uproszczenia
Główna uwaga do rozwiązania dotyczy sposobu dokonania zapytania o repozytoria do API. Domyślnie zapytanie to zwraca do 30 repozytoriów. Liczbę tą za pomocą query params można zwiększyć do maksymalnie 100, co jednak jest nadal niewystarczające w przypadku kont zawierających dużą ilość projektów. Możliwe rozwiązania: 
- Paginacja - API nie udostępnia możliwości sortowania repozytoriów według ilości gwiazdek po stronie serwera, stąd posortowane repozytoria byłyby jedynie w ramach jednej strony.
- Pobranie ilości wszystkich repozytoriów przypisanych do danego konta, wykonanie odpowiedniej ilości asynchronicznych zapytań, scalenie ich wyników w `Promise.all()` i ostatecznie posortowanie takiej listy. 

Ze względu na możliwe problemy z wydajnością i wysyłanie dużej ilości zapytań zdecydowano się na uproszczenie polegające na wyświetleniu pierwszej strony zawierającej 100 repozytoriów danego użytkownika.

---
#### Autor
[Mateusz Ksok](http://github.com/Krymeq)