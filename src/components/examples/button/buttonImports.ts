import { Box, Button, Text, Menu, Code, Portal } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { useVariables } from "../../hooks/variables"
import { useCopyCode } from "../../hooks/extras"
import { useButtonState } from "./useButtonState"
import { sizeOptions, toggleButtonOptions, toggleLoadingButtonOptions, loadingButtonOptions } from "./menuItems"
import { ColorMenu } from './menus/colorMenu.tsx'
import { VariantMenu } from './menus/variantMenu.tsx'
import { MoreMenu } from './menus/moreMenu.tsx'
import { SectionScreen } from "./SectionScreen.tsx"
import { CopyCodeBlock } from './copyCode.tsx'
import { useState } from 'react'

export {
    Box, Button, Text, Menu, Code, Portal,
    useVariables, useCopyCode, useButtonState, useState,
    FontAwesomeIcon, faCopy,
    sizeOptions, toggleButtonOptions, toggleLoadingButtonOptions, loadingButtonOptions,
    ColorMenu, VariantMenu, MoreMenu, SectionScreen, CopyCodeBlock
}