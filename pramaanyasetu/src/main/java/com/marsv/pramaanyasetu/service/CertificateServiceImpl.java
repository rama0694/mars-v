package com.marsv.pramaanyasetu.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.marsv.pramaanyasetu.dto.CertificateBase;
import com.marsv.pramaanyasetu.repo.CertificateBaseRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
@RequiredArgsConstructor
@Slf4j
public class CertificateServiceImpl implements CertificateService {
    private final Firestore firestore;

    private CollectionReference getCertificateReference(){
        return firestore.collection("CertificateBase");
    }

    @Override
    public CertificateBase createCertificate(CertificateBase certificate) {
        if(certificate == null){
            return null;
        }
        certificate.setId(UUID.randomUUID().toString());
        certificate.setUpdated(System.currentTimeMillis());
        certificate.setCreated(System.currentTimeMillis());
        certificate.setDeleted(false);
        ApiFuture<WriteResult> future =  getCertificateReference().document(certificate.getId()).create(certificate);
        return certificate;
    }

    @Override
    public CertificateBase updateCertificateDetails(CertificateBase certificate) {
        if(certificate == null){
            return null;
        }
        certificate.setUpdated(System.currentTimeMillis());
        ApiFuture<WriteResult> future =  getCertificateReference().document(certificate.getId()).set(certificate);
        return certificate;
    }
}
