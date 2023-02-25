package com.marsv.pramaanyasetu.utils;

import lombok.experimental.UtilityClass;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.mongodb.core.query.Criteria;

@UtilityClass
@Slf4j
public class MongoUtils {

    public static final String DELETED = "deleted";

    public Criteria getNonDeletedFilterCriteria() {
            return new Criteria(DELETED).is(false);
    }
}
