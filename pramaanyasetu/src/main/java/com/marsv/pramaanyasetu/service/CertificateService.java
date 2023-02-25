package com.marsv.pramaanyasetu.service;

import com.marsv.pramaanyasetu.dto.CertificateBase;

public interface CertificateService {
    CertificateBase createCertificate(CertificateBase certificate);
    CertificateBase updateCertificateDetails(CertificateBase certificate);
}
