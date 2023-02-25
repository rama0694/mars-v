package com.marsv.pramaanyasetu.dto;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class CertificateBase extends BaseDto {
    @Id
    @Indexed
    private String id;

    private String issuer;

    private long issuedOn;

    private long signedDate;

    private String name;

    private long validFrom;

    private long validTo;
}
