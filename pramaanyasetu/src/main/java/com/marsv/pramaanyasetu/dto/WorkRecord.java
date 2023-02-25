package com.marsv.pramaanyasetu.dto;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
public class WorkRecord extends BaseDto {

    private String id;

    private String title;

    private String description;

    private long startDate;

    private long endDate;

    private boolean currentCompany;

    private boolean validated;
}
