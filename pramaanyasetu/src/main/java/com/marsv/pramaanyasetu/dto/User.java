package com.marsv.pramaanyasetu.dto;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document
public class User extends BaseDto {

    private String document_id;

    private String id;

    private String name;

    private String email;

    // Address to be added
    private List<String> certificates;

    private boolean locked;

    private String passwordHash;

}
