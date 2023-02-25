package com.marsv.pramaanyasetu.service;

import com.marsv.pramaanyasetu.dto.CertificateBase;
import com.marsv.pramaanyasetu.dto.User;

import java.util.List;

public interface UserService {
    User getUserDetails(String userId);
    List<CertificateBase> getCertificates(List<String> certificateIds);
    User updateUserDetails(User user);
    User createUserDetails(User user);
    User addCertificate(String certificateId, String userId);
}
