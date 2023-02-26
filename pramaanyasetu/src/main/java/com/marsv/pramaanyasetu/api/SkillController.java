package com.marsv.pramaanyasetu.api;

import com.marsv.pramaanyasetu.common.ResponseEntityBuilder;
import com.marsv.pramaanyasetu.dto.Skill;
import com.marsv.pramaanyasetu.service.WorkAndSkillService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/skill")
@RequiredArgsConstructor
@Slf4j
public class SkillController {
    private final WorkAndSkillService service;

    @PostMapping
    public ResponseEntity createUser(@RequestBody Skill skill) {
        return ResponseEntityBuilder.okResponseEntity(service.createSkill(skill));
    }

    @PutMapping
    public ResponseEntity updateUser(@RequestBody Skill skill) {
        return ResponseEntityBuilder.okResponseEntity(service.updateSkill(skill));
    }

}
