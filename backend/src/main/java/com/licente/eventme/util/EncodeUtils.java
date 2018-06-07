package com.licente.eventme.util;

import com.licente.eventme.exception.BusinessException;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class EncodeUtils {
    private static String passString = "AurelVlaicunr.87";

    public static String decodeUTF8(String encodedString) {
        Base64.Decoder decoder = Base64.getDecoder();

        try{
            byte[] decodedByteArray = decoder.decode(encodedString);
            String decodedString = new String(decodedByteArray);
            if (!decodedString.contains(passString)) return null;
            return decodedString.replace(passString+"#","");
        }catch (Exception e){
            throw new BusinessException("Cheie de validare incorecta!!!");
        }
    }

    public static String encodeUTF8(String string) {
        Base64.Encoder encoder = Base64.getEncoder();
        return encoder.encodeToString((passString + "#" + string).getBytes(StandardCharsets.UTF_8) );
    }
}
