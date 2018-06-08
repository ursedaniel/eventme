package com.licente.eventme.controller;

import com.licente.eventme.service.UserService;
import com.licente.eventme.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController("")
@RequestMapping("")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value="/users",method = RequestMethod.GET)
    public List<UserVO> getAllUsers() {
        return userService.getAllUsers();
    }

    @RequestMapping(value="/register",method = RequestMethod.POST)
    public int registerUser(@RequestBody UserVO userVO) {
        return userService.registerUser(userVO);
    }

    @RequestMapping(value="/login",method = RequestMethod.POST)
    public int loginUser(@RequestBody UserVO userVO) { return userService.loginUser(userVO);}
}

