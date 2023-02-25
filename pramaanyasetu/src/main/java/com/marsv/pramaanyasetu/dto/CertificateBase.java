package com.marsv.pramaanyasetu.dto;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.CompoundIndex;
import org.springframework.data.mongodb.core.index.CompoundIndexes;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
@CompoundIndexes({
        @CompoundIndex(def = "{'id':1, 'userId':1}", name = "certificate_user")
})
public class CertificateBase extends BaseDto {
    @Id
    @Indexed
    private String id;

    private String userId;

    private String issuer;

    private long issuedOn;

    private long signedDate;

    private String name;

    private long validFrom;

    private long validTo;
}
