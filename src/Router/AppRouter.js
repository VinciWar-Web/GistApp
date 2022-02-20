import {
  BrowserRouter, 
  Route,
  Routes, 
} from "react-router-dom";

import { GistAdmin } from '../View/GistAdmin';
import { GistDetailed } from '../View/GistDetailed'; 

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <div>
            <Routes>
                <Route exact path="/" element={ <GistAdmin />} />
                <Route exact path="/detailed" element={ <GistDetailed /> } />
            </Routes>
        </div>
    </BrowserRouter>
  )
}
