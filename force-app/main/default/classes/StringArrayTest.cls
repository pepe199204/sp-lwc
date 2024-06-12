public class StringArrayTest {
    
    
    public static List<String> generateStringArray(Integer input){
        List<String> data = new List<String>();
            for(Integer i = 0; i <= input-1; i++){
                
                System.debug('return'+ i);
                data.add('Test ' + i);
               
            }
         System.debug('data  => ' + data);
        return data;
    }

}