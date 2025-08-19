import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Indexpage from "./components/Indexpage";                  
import QuestionPage from "./components/QuestionPage";            
import ResultPage from "./components/ResultPage";                


export default function App() {  
  return (
    <BrowserRouter> 
      <div className="flex flex-col min-h-screen w-full">
        <header>
          <div>나는 무슨 성향일까요</div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Indexpage />} />        
            <Route path="/question" element={<QuestionPage />} /> 
            <Route path="/result" element={<ResultPage />} />   
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
