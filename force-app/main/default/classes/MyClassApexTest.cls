//Todos los test deben tener esta línea
@isTest
public class MyClassApexTest {
    //Todos los test deben tener esta línea
    @isTest
    public static void WhileCountDownPositiveNumber(){
        //siempre se deben instanciar las clases
        MyClassApex test = new MyClassApex('test');
        //assertEquals espera dos parametros(método, valor a retornar)
        System.assertEquals(test.WhileCountDown(2),true);
    }
    //Todos los test deben tener esta línea
    @isTest
    public static void WhileCountDownNegativeNumber(){
        //siempre se deben instanciar las clases
        MyClassApex test = new MyClassApex('test');
        //assertEquals espera dos parametros(método, valor a retornar)
        System.assertEquals(test.WhileCountDown(-2),false);
    }
}