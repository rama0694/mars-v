package com.marsv.pramaanyasetu.utils;

import lombok.experimental.UtilityClass;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@UtilityClass
@Slf4j
public class CollectionUtils {
    public final <T> boolean isEmpty(Collection<T> c) {
        return !isNotEmpty(c);
    }

    public <T> boolean isNotEmpty(Collection<T> c) {
        return c != null && c.size() > 0;
    }

    public static <T> List<T> nullSafeList(List<T> c) {
        return c != null ? c : new ArrayList<T>();
    }


}
