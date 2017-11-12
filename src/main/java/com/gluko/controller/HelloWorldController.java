package com.gluko.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @RequestMapping("/greeting")
    public String greeting() {
        return "Hello world!";
    }

}
