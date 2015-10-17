package com.playtech.baas.gcc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {
    @RequestMapping("/home")
    @ResponseBody
    public String home() {
        return "BaaS Game Currencies Configuration";
    }

    @RequestMapping("/say/{what}")
    @ResponseBody
    public String say(@PathVariable String what) {
        return what;
    }
}
