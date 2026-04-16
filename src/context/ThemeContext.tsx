import { createContext, useState } from "react";

// 2do paso: Definir el tipado del contexto
export type ThemeContext = {
  colorContext: boolean;
  setColorContext: (color: boolean) => void;
};

// 1er paso: Crear el contexto
export const ThemeContext = createContext<ThemeContext | null>(null);

//3er paso: Crear el provider (mensajero) para agrupar que paginas/componentes pueden utilizarlo
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [colorContext, setColorContext
  ] = useState(true);
 
  //Esta linea lo que hace es decir que paginas o componentes pueden utilizar este
  return (
    //Value es el paquete
    <ThemeContext.Provider
      value={{ colorContext, setColorContext }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
