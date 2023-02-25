package com.marsv.pramaanyasetu.dto;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
public class Skill extends BaseDto {

    @Id
    private String id;

    private String name;

    private String issueBy;
}
