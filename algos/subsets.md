---
date: "2025-09-25T19:36:54+03:30"
title: "Sorting Algorithms"
description: "Sorting Algorithms"
weight: 100
draft: false
---

```Abali
FUNCTION GetSubsets<T>(a AS Set<T>) -> Set<Set<T>> :=
    subsets, temp AS Set<Set<T>>;
    subsets <- {∅};
    FOR EACH x IN a DO
        temp <- DEEP COPY subsets;
        FOR EACH subset IN temp DO
            ADD x TO subset;
            ADD subset TO subsets;
        ENDFOR
    ENDFOR
    RETURN subsets
ENDFUNCTION


STREAM IterSubsets<T>(a AS Set<T>) -> IIterator<Set<T>> :=
    // Declaration of variables
    n, len AS Integer;
    bitsIter AS IIterator<Integer>;
    elemIter AS IIterator<T>;
    subset AS Set<T>;
    // Functionality
    elems AS List<T> <- DO {{Create a list from @a}};
    n <- LENGTH OF a;
    bits AS Bits;
    FOR EACH i IN [0 .. 2 ** n) DO
        bits <- DO {{Convert @i into binary form}};
        len <- LENGTH OF bits;
        IF len > n THEN
            // Cut off extra zeros
            bits <- bits[0 .. len);
        ELSE IF n > len THEN
            // Pad extra zeros
            EXTEND bits << (n - len) WITH 0;
        ENDIF
        subset <- NEW Set();
        FOR EACH i IN [0 .. n) DO
            IF bits[i] = TRUE THEN
                ADD elems[i] TO subset;
            ENDIF
        ENDFOR
        YIELD subset;
    ENDFOR
ENDSTREAM
```