package com.skillup;

public class App 
{
    public static void main( String[] args )
    {
        String word = "madam"; // change this to test other words
        
        String reversed = new StringBuilder(word).reverse().toString();

        if (word.equalsIgnoreCase(reversed)) {
            System.out.println(true);
        } else {
            System.out.println(false);
        }
    }
}
