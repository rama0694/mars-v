package com.marsv.pramaanyasetu.api;

import com.marsv.pramaanyasetu.common.ResponseEntityBuilder;
import com.marsv.pramaanyasetu.repo.CertificateBaseRepository;
import com.marsv.pramaanyasetu.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/certificate")
@RequiredArgsConstructor
@Slf4j
public class CertificateController {

    private final CertificateBaseRepository certificateBaseRepository;

    private final UserService userService;

    @GetMapping("/{certificateId}")
    public ResponseEntity fetchMessageWithModifiedTime() {
        return ResponseEntityBuilder.okResponseEntity(certificateBaseRepository.findAll());
    }

    @GetMapping("/test")
    public ResponseEntity test() {
        return ResponseEntityBuilder.okResponseEntity("Works");
    }

}
