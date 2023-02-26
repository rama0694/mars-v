package com.marsv.pramaanyasetu.api;

import com.marsv.pramaanyasetu.common.ResponseEntityBuilder;
import com.marsv.pramaanyasetu.dto.WorkRecord;
import com.marsv.pramaanyasetu.service.WorkAndSkillService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/work")
@RequiredArgsConstructor
@Slf4j
public class WorkController {
    private final WorkAndSkillService service;

    @PostMapping
    public ResponseEntity createUser(@RequestBody WorkRecord work) {
        return ResponseEntityBuilder.okResponseEntity(service.createWork(work));
    }

    @PutMapping
    public ResponseEntity updateUser(@RequestBody WorkRecord work) {
        return ResponseEntityBuilder.okResponseEntity(service.updateWork(work));
    }
}
