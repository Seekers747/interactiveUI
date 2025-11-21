import { useState } from "react"
import type { ButtonState } from "./interface"
import { Box, Button, Text, Menu, Code, Portal } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { useVariables } from "../../hooks/variables"
import { useCopyCode } from "../../hooks/extras"
import { useButtonState } from "./useButtonState"
import { colorOptions, variantOptions, sizeOptions, toggleButtonOptions, toggleLoadingButtonOptions, loadingButtonOptions } from "./menuItems"

export {
    Box, Button, Text, Menu, Code, Portal,
    useState, useVariables, useCopyCode, useButtonState,
    FontAwesomeIcon, faCopy,
    colorOptions, variantOptions, sizeOptions, toggleButtonOptions, toggleLoadingButtonOptions, loadingButtonOptions
}
export type { ButtonState }
