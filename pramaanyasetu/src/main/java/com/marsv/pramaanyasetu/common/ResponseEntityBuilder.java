package com.marsv.pramaanyasetu.common;

import com.fasterxml.jackson.databind.ser.std.MapSerializer;
import lombok.experimental.UtilityClass;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@UtilityClass
public class ResponseEntityBuilder {

    public static final String SUCCESS = "success";
    public static final String STATUS = "status";
    public static final String DATA = "data";
    public static final String FAILED = "failed";
    public static final String ERROR_DETAILS = "errorDetails";

    public ResponseEntity<Map<String, Object>> okResponseEntity(Object data) {
        Map<String, Object> response = new HashMap<>();
        response.put("STATUS", SUCCESS);
        response.put(DATA, data);
        return ResponseEntity.ok(response);
    }

    public ResponseEntity<Map<String, Object>> errorResponseEntity(Object errorDetails, HttpStatus httpStatus,
                                                                   HttpHeaders headers) {
        Map<String, Object> response = new HashMap<>();
        response.put(STATUS, FAILED);
        response.put(ERROR_DETAILS, errorDetails);
        return ResponseEntity.status(httpStatus).contentType(MediaType.APPLICATION_JSON).headers(headers)
                .body(response);
    }
}
