package com.marsv.pramaanyasetu.service;

import com.marsv.pramaanyasetu.dto.CertificateBase;
import com.marsv.pramaanyasetu.repo.CertificateBaseRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class CertificateServiceImpl implements CertificateService {
    private final CertificateBaseRepository certificateBaseRepository;

    @Override
    public CertificateBase createCertificate(CertificateBase certificate) {
        if (certificate == null) {
            return null;
        }
        certificate.setUpdated(System.currentTimeMillis());
        certificate.setCreated(System.currentTimeMillis());
        certificate.setDeleted(false);
        return certificateBaseRepository.save(certificate);
    }

    @Override
    public CertificateBase updateCertificateDetails(CertificateBase certificate) {
        if (certificate == null) {
            return null;
        }
        certificate.setUpdated(System.currentTimeMillis());
        return certificateBaseRepository.save(certificate);
    }
}
