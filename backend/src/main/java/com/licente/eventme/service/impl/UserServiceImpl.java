package com.licente.eventme.service.impl;

import com.licente.eventme.exception.BusinessException;
import com.licente.eventme.model.User;
import com.licente.eventme.repository.UserRepository;
import com.licente.eventme.service.UserService;
import com.licente.eventme.util.EncodeUtils;
import com.licente.eventme.vo.UserVO;
import com.licente.eventme.vo.converter.UserConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserConverter userConverter;

    private List<UserVO> convertToVO(List<User> list) {
        return list.stream().map(userConverter::toVO).collect(Collectors.toList());
    }

    @Override
    public List<UserVO> getAllUsers() {
        return convertToVO(userRepository.findBy());
    }

    @Override
    public int registerUser(UserVO userVO) {
        User user = userConverter.fromVO(userVO);
        User findUser = userRepository.findByEmail(userVO.getEmail());
        if (findUser == null) {
            user.setPassword(EncodeUtils.encodeUTF8(userVO.getPassword()));
            return userRepository.save(user).getId();
        }
        else
            throw new BusinessException("Email already in use!");
    }

    @Override
    public int loginUser(UserVO userVO) {
        User user = userRepository.findByEmail(userVO.getEmail());
        if (user == null) {
            throw new BusinessException("Wrong email/password!");
        } else {
            if (EncodeUtils.encodeUTF8(userVO.getPassword()).equals(user.getPassword()))
                return user.getId();
            else
                throw new BusinessException("Wrong email/password!");
        }
    }
}
