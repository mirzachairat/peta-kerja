'use client'

import React from 'react';
import { MdMap } from 'react-icons/md';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { 
  Box, 
  Popover, 
  PopoverCloseButton, 
  PopoverContent, 
  PopoverHeader, 
  PopoverArrow,
  PopoverBody, 
  PopoverTrigger,
  Portal,
  Button } from '@chakra-ui/react';

const MapPopover = ({ isOpen, onClose, title,onOpen }) => {
  const initRef = React.useRef()
  return (
    <Popover 
    isOpen={isOpen}
    onOpen={onOpen}
    onClose={onClose}
    placement='right'
    closeOnBlur={false}
    >
        <PopoverContent>
          <PopoverHeader fontWeight='semibold'>Popover placement</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore.
          </PopoverBody>s
        </PopoverContent>
      </Popover>
  );
};

export default MapPopover;