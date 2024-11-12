# React + TypeScript + Vite
Este es un proyecto utilizando la libreria bun https://bun.sh/ para crear proyecto de react

Este proyecto es un seguimiento a midu video: https://www.youtube.com/watch?v=B9tDYAZZxcE&t

Github proyecto midu: https://github.com/midudev/aprendiendo-react/tree/master/projects/06-shopping-cart

# Descripcion de funcionalidad de proyecto


# NOTAS IMPORTANTES
//useId genera un identificador unico
import { useState, useId } from "react";

const categoryFilterId = useId()

--------

useContext
Es un gancho de React que permite compartir datos entre componentes sin tener que pasarlos explícitamente a través de props.

En pocas palabras es inyectar independencias o compartir informacion para ciertos componentes para que puedan extrader información de allí.