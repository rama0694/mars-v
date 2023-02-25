package com.marsv.pramaanyasetu.api;

import com.marsv.pramaanyasetu.common.ResponseEntityBuilder;
import com.marsv.pramaanyasetu.repo.CertificateBaseRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Slf4j
public class CredController {

    private final CertificateBaseRepository certificateBaseRepository;

    @GetMapping("/certificates")
    public ResponseEntity fetchMessageWithModifiedTime() {
        return ResponseEntityBuilder.okResponseEntity(certificateBaseRepository.findAll());
    }
}
