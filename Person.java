import java.util.List;
public interface Person {
  String firstname();
  String lastname();
  List<String> petNames();
  int favouriteNumber();
  static void print(Person person) {
    System.out.println(person.firstname() + " " + person.lastname() + " " + person.petNames() + " " + person.favouriteNumber());
  }

} 
