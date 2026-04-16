import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { setColorContext } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setColorContext(false);
  };

  return (
    <>
    <h1> tenia la intencion de hacerlo pero no me dio el cerebro</h1>
    <form>
      <button onClick={(e) => handleSubmit(e)}>Dark</button>
    </form>
     </>
  );
};
